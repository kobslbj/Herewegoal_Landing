import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => {
      const { alt = '', ...restProps } = props as ImageProps & { alt?: string };
      return <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} alt={alt} {...restProps} />;
    },
    a: ({ href, children }) => {
      if (href?.startsWith('/')) {
        return <Link href={href}>{children}</Link>;
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
    h1: (props) => <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4" {...props} />,
    h2: (props) => (
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-10 mb-5 text-foreground" {...props} />
    ),
    h3: (props) => <h3 className="text-xl font-semibold tracking-tight mt-6 mb-3" {...props} />,
    p: (props) => <p className="my-4 leading-7" {...props} />,
    ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
    ol: (props) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
    blockquote: (props) => <blockquote className="mt-6 border-l-2 pl-6 italic border-primary" {...props} />,
    code: (props) => (
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props} />
    ),
    pre: (props) => (
      <pre className="mb-4 mt-4 overflow-x-auto rounded-lg border bg-black p-4 font-mono text-white" {...props} />
    ),
  };
}

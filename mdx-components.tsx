import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} {...(props as ImageProps)} />,
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
  };
}

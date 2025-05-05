import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { BlogPost } from './blog-server';

// MDX 組件
const components = {
  h1: (props: { children: React.ReactNode }) =>
    React.createElement('h1', { className: 'text-3xl font-bold tracking-tight mt-8 mb-4' }, props.children),
  h2: (props: { children: React.ReactNode }) =>
    React.createElement(
      'h2',
      { className: 'text-2xl md:text-3xl font-bold tracking-tight mt-10 mb-5 text-foreground' },
      props.children,
    ),
  h3: (props: { children: React.ReactNode }) =>
    React.createElement('h3', { className: 'text-xl font-semibold tracking-tight mt-6 mb-3' }, props.children),
  p: (props: { children: React.ReactNode }) =>
    React.createElement('p', { className: 'my-4 leading-7' }, props.children),
  ul: (props: { children: React.ReactNode }) =>
    React.createElement('ul', { className: 'my-6 ml-6 list-disc [&>li]:mt-2' }, props.children),
  ol: (props: { children: React.ReactNode }) =>
    React.createElement('ol', { className: 'my-6 ml-6 list-decimal [&>li]:mt-2' }, props.children),
  blockquote: (props: { children: React.ReactNode }) =>
    React.createElement('blockquote', { className: 'mt-6 border-l-2 pl-6 italic border-primary' }, props.children),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) =>
    React.createElement('img', { ...props, className: 'rounded-md my-8 w-full' }),
  code: (props: { children: React.ReactNode }) =>
    React.createElement(
      'code',
      { className: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold' },
      props.children,
    ),
  pre: (props: { children: React.ReactNode }) =>
    React.createElement(
      'pre',
      { className: 'mb-4 mt-4 overflow-x-auto rounded-lg border bg-black p-4 font-mono text-white' },
      props.children,
    ),
  a: (props: { href?: string; children: React.ReactNode }) =>
    React.createElement(
      'a',
      { href: props.href, className: 'text-primary underline underline-offset-4 hover:text-primary/80' },
      props.children,
    ),
};

// 渲染 MDX 內容
export async function renderMDX(source: string) {
  return React.createElement(MDXRemote, {
    source,
    components,
  });
}

// 渲染博客文章內容
export async function renderBlogContent(post: BlogPost) {
  return await renderMDX(post.content);
}

import { marked } from 'marked';
import type { BlogPost } from './blog-server';

marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
});

export function renderMarkdown(content: string): string {
  return marked.parse(content) as string;
}

export async function renderBlogContent(post: BlogPost): Promise<string> {
  return renderMarkdown(post.content);
}

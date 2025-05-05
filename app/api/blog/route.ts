import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/blog-server';

export async function GET() {
  try {
    const posts = getBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Error fetching blog posts' }, { status: 500 });
  }
}

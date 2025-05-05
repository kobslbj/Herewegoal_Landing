import { NextRequest, NextResponse } from 'next/server';
import { getBlogPost } from '@/lib/blog-server';

// 獲取單個博客文章
export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    // 正確地await params
    const { slug } = await params;

    const post = getBlogPost(slug);

    if (!post) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error fetching article:`, error);
    return NextResponse.json({ error: 'Error fetching article' }, { status: 500 });
  }
}

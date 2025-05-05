import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { getBlogPost, getBlogPosts } from '@/lib/blog-server';
import { renderBlogContent } from '@/lib/markdown';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog Not Found     | Herewegoal',
      description: 'The blog you are looking for does not exist or may have been removed.',
    };
  }

  return {
    title: `${post.title} | Herewegoal Blog`,
    description: post.description,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return notFound();
  }

  const contentHtml = await renderBlogContent(post);

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
        >
          <ChevronLeftIcon className="mr-1 h-4 w-4" /> Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-secondary/20">
                {post.category}
              </Badge>
              <time className="text-sm text-muted-foreground">{post.date}</time>
              <span className="text-sm text-muted-foreground">· {post.readingTime}</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">{post.title}</h1>

            <div className="flex items-center">
              {post.author.avatar ? (
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-sm font-medium">{post.author.name.charAt(0)}</span>
                </div>
              )}
              <div>
                <div className="text-sm font-medium leading-none">{post.author.name}</div>
                {post.author.position && <div className="text-xs text-muted-foreground">{post.author.position}</div>}
              </div>
            </div>
          </header>

          <div
            className="prose prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
      </div>
    </div>
  );
}

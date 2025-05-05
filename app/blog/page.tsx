import Link from 'next/link';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { getBlogPosts } from '@/lib/blog-server';

export const metadata: Metadata = {
  title: 'Blog | Herewegoal',
  description: 'Explore our blog for the latest insights, guides, and product updates.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8">
          {posts.length === 0 ? (
            <div className="py-12 border border-border rounded-lg bg-background/50">
              <p className="text-center text-muted-foreground">No articles yet</p>
            </div>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="group relative border border-border rounded-lg overflow-hidden transition-all hover:shadow-md bg-background/50"
              >
                <Link href={`/blog/${post.slug}`} className="block p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-muted text-foreground">
                      {post.category}
                    </Badge>
                    <time className="text-sm text-muted-foreground">{post.date}</time>
                    <span className="text-sm text-muted-foreground">· {post.readingTime}</span>
                  </div>

                  <h2 className="text-2xl font-semibold tracking-tight mb-3 text-foreground">{post.title}</h2>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.description}</p>

                  <div className="flex items-center text-sm font-medium text-primary">
                    Read More <ChevronRightIcon className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

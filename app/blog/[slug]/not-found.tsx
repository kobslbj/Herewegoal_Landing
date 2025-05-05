import Link from 'next/link';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ChevronLeftIcon className="mr-1 h-4 w-4" /> 返回部落格
          </Link>
        </div>

        <div className="border border-border rounded-lg p-8 text-center bg-background/50">
          <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
          <p className="text-muted-foreground mb-6">您尋找的文章不存在或可能已被移除。</p>
          <Link
            href="/blog"
            className="inline-flex items-center py-2 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            瀏覽所有文章
          </Link>
        </div>
      </div>
    </div>
  );
}

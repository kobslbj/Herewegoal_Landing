import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="border border-border rounded-lg p-8 text-center bg-background/50">
          <h1 className="text-4xl font-bold mb-4">找不到頁面</h1>
          <p className="text-lg text-muted-foreground mb-6">您尋找的頁面不存在或可能已被移除。</p>
          <Link
            href="/"
            className="inline-flex items-center py-2 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
}

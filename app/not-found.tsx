import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="border border-border rounded-lg p-8 text-center bg-background/50">
          <h1 className="text-4xl font-bold mb-4">Page not found</h1>
          <p className="text-lg text-muted-foreground mb-6">
            The page you are looking for does not exist or may have been removed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center py-2 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

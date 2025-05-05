import { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto">
        <div className="grid grid-cols-1">
          <main className="w-full">{children}</main>
        </div>
      </div>
    </div>
  );
}

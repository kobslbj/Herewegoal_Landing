import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Herewegoal | AI-first workspace from idea to spec',
  description:
    'Herewegoal helps technical teams turn vague feature ideas into clear, testable specs. Align before you build — powered by GenAI and example-driven workflows.',
  keywords: [
    'ai project management tool',
    'spec-driven development',
    'project management for dev teams',
    'example-based requirement tool',
    'ai for software specs',
    'ai tool for product clarity',
  ],
  authors: [{ name: 'Herewegoal Team' }],
  creator: 'Herewegoal',
  publisher: 'Herewegoal',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://herewegoal.com',
    siteName: 'Herewegoal',
    title: 'Herewegoal — AI-first workspace from idea to spec',
    description:
      'Herewegoal helps product and engineering teams clarify feature specs before any code is written. Prevent misalignment. Start with shared understanding.',
    images: [
      {
        url: 'https://herewegoal.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Herewegoal — AI-first workspace from idea to spec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herewegoal — Build clarity before code',
    description:
      'Use GenAI to turn vague product ideas into testable specs. For dev teams that care about getting it right, not just done.',
    images: ['https://herewegoal.com/twitter-image-new.png'],
  },
  metadataBase: new URL('https://herewegoal.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
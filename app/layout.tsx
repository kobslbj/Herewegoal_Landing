import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Herewegoal — Plan smarter. Execute faster.',
  description: 'A lightweight project management tool for solo founders, startups, and small teams.',
  keywords: [
    'project management for solo founders',
    'lightweight project management tool',
    'project management for startups',
    'project management for small teams',
    'project management tool for solo founders',
    'project management tool for startups',
    'project management tool for small teams',
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
    title: 'Herewegoal — Plan smarter. Execute faster.',
    description: 'A lightweight project management tool for solo founders, startups, and small teams.',
    images: [
      {
        url: 'https://herewegoal.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Herewegoal — Plan smarter. Execute faster.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herewegoal — Project-Oriented Todoist for Students, Freelancers, and Solo Entrepreneurs',
    description:
      'Project management made simple. Herewegoal is built for students, freelancers, and solo entrepreneurs—organize tasks, track progress, and deliver projects with ease.',
    images: ['https://herewegoal.com/twitter-image.png'],
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script defer data-domain="herewegoal.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

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
  title: 'Herewegoal - Your Tasks, Simplified. Your Goals, Achieved.',
  description:
    'A personal task manager that just works. No complexity, no distractions. Just you and your goals. Start in seconds, achieve more every day.',
  keywords: [
    'personal project management',
    'personal task management',
    'task and project SaaS',
    'simple task and project management',
    'personal productivity tool',
    'task tracking without login',
    'project collaboration SaaS',
    'minimalist project management',
    'freelancer task manager',
    'remote work project tracker',
    'easy task and project planner',
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
    title: 'Herewegoal - Your Tasks, Simplified. Your Goals, Achieved.',
    description:
      'A personal task manager that just works. No complexity, no distractions. Just you and your goals. Start in seconds, achieve more every day.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herewegoal - Simple Project Management Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herewegoal - Your Tasks, Simplified. Your Goals, Achieved.',
    description:
      'A personal task manager that just works. No complexity, no distractions. Just you and your goals. Start in seconds, achieve more every day.',
    images: ['/twitter-image.jpg'],
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

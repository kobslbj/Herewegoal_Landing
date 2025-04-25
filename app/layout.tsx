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
  title: 'Herewegoal - Organize Tasks & Projects Easily — For Freelancers, Students, and Solo Work',
  description:
    'Herewegoal is a lightweight, easy-to-use tool to manage tasks, track projects, and collaborate with others — perfect for freelancers, students, and solo creators.',
  keywords: [
    'freelancer project management',
    'simple task manager for students',
    'solo project tracking tool',
    'lightweight task management app',
    'task manager without login',
    'assign tasks with a link',
    'freelance collaboration tool',
    'group project planner',
    'minimalist project manager',
    'personal productivity workspace',
    'calendar + project manager',
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
    title: 'Organize Tasks & Projects Easily — For Freelancers, Students, and Solo Work',
    description:
      'Manage tasks, organize projects, and share to-dos in one clean, intuitive tool. No signups needed — perfect for freelancers, students, and solo work.',
    images: [
      {
        url: 'https://herewegoal.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Organize Tasks & Projects Easily — For Freelancers, Students, and Solo Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organize Tasks & Projects Easily — For Freelancers, Students, and Solo Work',
    description:
      'Herewegoal helps you plan, track, and share tasks with ease — no login required. Built for solo creators, students, and freelance professionals.',
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

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
  title: 'Herewegoal – Project & Task Management That’s Actually Simple',
  description:
    'Finally, a task and project manager that’s built for how you actually work. No complexity — just you, your tasks, and a link.',
  keywords: [
    'lightweight project management',
    'task manager without login',
    'freelancer task tool',
    'student group project manager',
    'simple project tracker',
    'task manager for solo founders',
    'no account task sharing',
    'assign task with a link',
    'one to many task delegation',
    'minimal project management tool',
    'personal productivity app',
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
    title: 'Herewegoal – Project & Task Management That’s Actually Simple',
    description:
      'Finally, a task and project manager that’s built for how you actually work. No complexity — just you, your tasks, and a link.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herewegoal – Simple Task & Project Management Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herewegoal – Project & Task Management That’s Actually Simple',
    description:
      'No accounts. No onboarding. Just fast task sharing and clear project tracking — made for freelancers, students, and small teams.',
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

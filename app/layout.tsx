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
  title: 'Herewegoal — Plan, Track, and Deliver Projects for Freelancers',
  description:
    'Herewegoal is a lightweight task and project management tool built for freelancers — simple, clean, and focused on helping you deliver your work on time.',
  keywords: [
    'freelancer project management',
    'simple task manager for freelancers',
    'freelance project tracking tool',
    'lightweight project management app',
    'minimalist project planner',
    'task manager without login',
    'personal productivity workspace',
    'calendar + project manager',
    'freelance productivity tool',
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
    title: 'Herewegoal — Plan, Track, and Deliver Projects for Freelancers',
    description:
      'Manage your freelance work easily — plan tasks, organize projects, and stay on top of deadlines with Herewegoal. No sign-up needed.',
    images: [
      {
        url: 'https://herewegoal.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Herewegoal — Plan, Track, and Deliver Projects for Freelancers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herewegoal — Plan, Track, and Deliver Projects for Freelancers',
    description:
      'Lightweight project management for freelancers — organize your work without complexity. Try Herewegoal free.',
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

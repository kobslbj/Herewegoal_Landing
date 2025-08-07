import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.hero.title.part1 + ' ' + dict.hero.title.part2,
    description: dict.hero.subtitle,
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
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
          <Navbar locale={locale} dict={dict} />
          {children}
          <Footer locale={locale} dict={dict} />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
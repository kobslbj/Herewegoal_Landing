'use client';

import Link from 'next/link';
import { ModeToggle } from './modeToggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { DiscordIcon } from './icon';
import { LanguageSwitcher } from './language-switcher';
import type { Locale } from '@/lib/i18n';

type Props = {
  locale: Locale;
  dict: {
    navbar: {
      discord: string;
    };
  };
};

export function Navbar({ locale }: Props) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-screen-xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:hidden">
          <Link href={`/${locale}`} className="flex items-center gap-3 py-2">
            <Image src="/herewegoal_logo.png" alt="Herewegoal Logo" width={32} height={32} />
            <span className="font-display font-semibold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 drop-shadow-[0.5px_0.5px_0px_rgba(0,0,0,0.1)] dark:drop-shadow-[0.5px_0.5px_0px_rgba(255,255,255,0.1)]">
              Herewegoal
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <Link href={`/${locale}`} className="flex items-center gap-3 py-2">
            <Image src="/herewegoal_logo.png" alt="Herewegoal Logo" width={32} height={32} />
            <span className="font-display text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 drop-shadow-[0.5px_0.5px_0px_rgba(0,0,0,0.1)] dark:drop-shadow-[0.5px_0.5px_0px_rgba(255,255,255,0.1)]">
              Herewegoal
            </span>
          </Link>
          <nav className="flex items-center gap-8">
            {/* <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-1 py-2"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-1 py-2"
            >
              Blog
            </Link> */}
            <Link
              href="https://discord.gg/QncZjDFKYg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-1 py-2 flex items-center gap-1"
            >
              <DiscordIcon className="w-4 h-4 fill-current" />
              Discord
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          {/* <nav className="hidden md:flex items-center gap-3 mr-3">
            <Button asChild className="px-4">
              <Link href="https://app.herewegoal.com">Get Started</Link>
            </Button>
          </nav> */}

          <div className="flex items-center gap-2">
            <LanguageSwitcher currentLocale={locale} />
            <ModeToggle />

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] p-6">
                <SheetTitle className="font-display text-lg font-semibold mb-8">Menu</SheetTitle>
                <nav className="flex flex-col gap-6">
                  <div className="flex flex-col gap-5">
                    <div className="mb-4">
                      <LanguageSwitcher currentLocale={locale} />
                    </div>
                    {/* <Link
                      href="/#features"
                      className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      Features
                    </Link>
                    <Link
                      href="/pricing"
                      className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/blog"
                      className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/#faq"
                      className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      FAQ
                    </Link> */}
                    <Link
                      href="https://discord.gg/QncZjDFKYg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-muted-foreground hover:text-foreground transition-colors py-1 flex items-center gap-2"
                    >
                      <DiscordIcon className="w-4 h-4 fill-current" />
                      Join Discord
                    </Link>
                  </div>
                  {/* <div className="flex flex-col gap-3 pt-6 mt-2 border-t">
                    <Button asChild className="justify-start h-11">
                      <Link href="https://app.herewegoal.com">Get Started</Link>
                    </Button>
                  </div> */}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

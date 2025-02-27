'use client';

import Link from 'next/link';
import { ModeToggle } from './modeToggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-screen-xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:hidden">
          <Link href="/" className="flex items-center gap-3 py-2">
            <Image src="/herewegoalLogo.png" alt="Herewegoal Logo" width={32} height={32} />
            <span className="font-semibold text-2xl">Herewegoal</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 py-2">
            <Image src="/herewegoalLogo.png" alt="Herewegoal Logo" width={32} height={32} />
            <span className="text-xl font-bold">Herewegoal</span>
          </Link>
          <nav className="flex items-center gap-8">
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-1 py-2"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-1 py-2"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-1 py-2"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <nav className="hidden md:flex items-center gap-3 mr-3">
            <Button variant="ghost" asChild className="px-4">
              <Link href="https://app.herewegoal.com/login">Sign In</Link>
            </Button>
            <Button asChild className="px-4">
              <Link href="https://app.herewegoal.com">Get Started</Link>
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] p-6">
                <SheetTitle className="text-lg font-semibold mb-8">Menu</SheetTitle>
                <nav className="flex flex-col gap-6">
                  <div className="flex flex-col gap-5">
                    <Link
                      href="#features"
                      className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      Features
                    </Link>
                    <Link
                      href="#pricing"
                      className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="#about"
                      className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      About
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3 pt-6 mt-2 border-t">
                    <Button variant="ghost" asChild className="justify-start h-11">
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button asChild className="justify-start h-11">
                      <Link href="/start">Get Started</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

'use client';

import { useRouter, usePathname } from 'next/navigation';
import { locales, type Locale, getLocaleName } from '@/lib/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

type Props = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          {getLocaleName(currentLocale)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLocale(locale)}
            className={currentLocale === locale ? 'bg-accent' : ''}
          >
            {getLocaleName(locale)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
import Link from 'next/link';
import XIcon, { BlueskyIcon, GmailIcon, DiscordIcon } from './icon';
import type { Locale } from '@/lib/i18n';

type Props = {
  locale: Locale;
  dict: {
    footer: {
      privacy: string;
      terms: string;
      copyright: string;
    };
  };
};

export default function Footer({ locale, dict }: Props) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    // {
    //   title: 'Product',
    //   links: [
    //     { name: 'Features', href: '/#features' },
    //     { name: 'Pricing', href: '/pricing' },
    //   ],
    // },
    {
      title: locale === 'zh-TW' ? '法律' : 'Legal',
      links: [
        { name: dict.footer.privacy, href: `/${locale}/privacy` },
        { name: dict.footer.terms, href: `/${locale}/terms` },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Logo Section */}
          <div className="col-span-2 sm:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500">
                Herewegoal
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {locale === 'zh-TW' ? 'Specs are the new prompt.\nBuild clarity before you build product.' : 'Specs are the new prompt.\nBuild clarity before you build product.'}
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://discord.gg/QncZjDFKYg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <DiscordIcon className="w-5 h-5 fill-current text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="https://x.com/HerewegoalApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <XIcon className="w-5 h-5 fill-current text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white" />
                <span className="sr-only">X.com</span>
              </Link>
              <Link
                href="https://bsky.app/profile/herewegoal.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <BlueskyIcon className="w-5 h-5 fill-current text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white" />
                <span className="sr-only">Bluesky</span>
              </Link>
              <Link
                href="mailto:support@herewegoal.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GmailIcon className="w-5 h-5 fill-current text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-border/40">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">{dict.footer.copyright.replace('2024', currentYear.toString())}</p>
            <p className="text-sm text-muted-foreground">{locale === 'zh-TW' ? 'Made with ❤️ for better alignment' : 'Made with ❤️ for better alignment'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

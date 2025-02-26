import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Conditions', href: '/terms' },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500">
                Herewegoal
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Simplify your project management journey. Focus on what matters most - getting things done.
            </p>
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
            <p className="text-sm text-muted-foreground">© {currentYear} Herewegoal. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">Made with ❤️ for better productivity</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

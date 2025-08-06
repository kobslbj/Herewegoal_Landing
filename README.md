# Herewegoal - The AI Workspace for Idea to Spec Clarity 

## Overview

Transform vague ideas into crystal-clear, testable specifications with AI-powered assistance. Herewegoal helps lean teams align fast through example-driven specs, eliminating the confusion that kills great products.

## 🚀 The Problem We Solve

- **Vague ideas become vague tickets** - Features fail because requirements aren't clear
- **Everyone builds a different version of "done"** - Misalignment costs time and money  
- **Code is cheap. Alignment isn't.** - Even great teams ship the wrong thing when specs aren't clear

## ✨ Our Solution

**From Idea to Testable Spec — with Examples, not Meetings**

1. **Starts from a prompt** - Simply describe your feature idea in natural language
2. **GenAI suggests Given / When / Then** - AI generates structured scenarios and examples
3. **Team clarifies edge cases** - Collaborate to refine and validate scenarios
4. **Turn into testable specs, synced to GitHub** - Generate implementation-ready specs

## 🛠 Built With

**Frontend & Core**
- Next.js 15.2.0-canary.74
- React 19.0.0
- TypeScript
- Tailwind CSS 4.0
- Shadcn UI

**AI & Content**
- MDX for rich content
- Marked for markdown processing
- Highlight.js for code syntax
- Motion for animations

**Backend & Database**
- Supabase integration
- Form handling with React Hook Form + Zod

## 🔧 Development Setup

```bash
# Clone the repository
git clone https://github.com/your-username/herewegoal_landing.git
cd herewegoal_landing

# Install dependencies (using pnpm)
pnpm install

# Start development server
pnpm dev

# Other useful commands
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm format     # Format code with Prettier
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## 📁 Project Structure

```
herewegoal_landing/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── heroSection/       # Landing page hero
│   ├── problemSection/    # Problem statement
│   ├── solutionSection/   # Solution overview
│   ├── magicui/          # UI animation components
│   └── ui/               # Base UI components
├── content/              # MDX content files
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎨 Key Features

- **Responsive Design** - Works beautifully on all devices
- **Dark/Light Mode** - Automatic theme switching
- **Smooth Animations** - Powered by Framer Motion and custom CSS
- **MDX Blog** - Built-in blog system with syntax highlighting
- **SEO Optimized** - Proper meta tags and structured data
- **Performance First** - Optimized loading and rendering

## 🌐 Deployment

The project is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel

# Or build locally
pnpm build
```

## 📞 Support & Contact

- **Website**: [herewegoal.com](https://herewegoal.com)
- **Issues**: Create an issue in this repository
- **Discussions**: Use GitHub Discussions for questions

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⭐️ Show Your Support

If Herewegoal helps your team build better products, give us a ⭐️!

---

**Built for teams who ship fast without breaking things** 🚀

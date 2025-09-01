import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog-server';

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://herewegoal.com';
  const locales = ['en', 'zh-TW'];
  
  // Static pages
  const staticPages = [
    { path: '', priority: 1, changeFrequency: 'daily' as ChangeFrequency },
    { path: '/pricing', priority: 0.8, changeFrequency: 'weekly' as ChangeFrequency },
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as ChangeFrequency },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' as ChangeFrequency },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as ChangeFrequency },
  ];

  // Generate URLs for all locales
  const staticUrls: MetadataRoute.Sitemap = [];
  
  for (const locale of locales) {
    for (const page of staticPages) {
      staticUrls.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  // Get blog posts
  let blogUrls: MetadataRoute.Sitemap = [];
  try {
    const posts = getBlogPosts();
    blogUrls = posts.flatMap(post => 
      locales.map(locale => ({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as ChangeFrequency,
        priority: 0.6,
      }))
    );
  } catch (error) {
    console.warn('Failed to load blog posts for sitemap:', error);
  }

  return [...staticUrls, ...blogUrls];
}

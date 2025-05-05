import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 部落格文章目錄
const BLOG_DIR = path.join(process.cwd(), 'content/blog');

// 文章類型
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
  readingTime: string;
  author: {
    name: string;
    position?: string;
    avatar?: string;
  };
};

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    console.log('Blog directory does not exist');
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const filePath = path.join(BLOG_DIR, file);

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const readingTime = calculateReadingTime(content);

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      description: data.description,
      content,
      readingTime,
      author: data.author || { name: 'Herewegoal Team' },
    };
  });

  // 按日期排序
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) {
    console.log('Blog directory does not exist');
    return null;
  }

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const readingTime = calculateReadingTime(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    description: data.description,
    content,
    readingTime,
    author: data.author || { name: 'Herewegoal Team' },
  };
}

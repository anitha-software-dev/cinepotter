export type StaticArticle = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tag?: string;
};

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

export const RESOURCE_ARTICLES: StaticArticle[] = [
  {
    slug: 'the-complete-guide-to-ai-video-creation',
    title: 'The Complete Guide to AI Video Creation',
    description: "Learn how to go from idea to a stunning video using CinePotter's AI-powered tools.",
    image: '/images/resource-1.webp',
    tag: 'Featured Guide',
  },
  {
    slug: 'getting-started-with-cinepotter',
    title: 'Getting Started with CinePotter',
    description: 'A quick guide on how to set up your account and render your first AI video with CinePotter.',
    image: '/images/resource-2.webp',
  },
  {
    slug: '10-creative-prompts-to-try-today',
    title: '10 Creative Prompts to Try Today',
    description: 'Stuck on ideas? Try these 10 AI video prompts to get your creative juices flowing.',
    image: '/images/resource-3.webp',
  },
];

export const TREND_ARTICLES: StaticArticle[] = [
  {
    title: 'AI-Powered Storytelling',
    description: 'AI is becoming a creative partner, helping creators generate stories, scripts, and scenes effortlessly.',
    image: '/images/trends-1.webp',
    slug: slugify('AI-Powered Storytelling'),
  },
  {
    title: 'Hyper-Personalized Videos',
    description: 'Personalization at scale is transforming marketing, education, and customer engagement.',
    image: '/images/trends-2.webp',
    slug: slugify('Hyper-Personalized Videos'),
  },
  {
    title: 'Real-Time Video Generation',
    description: 'Real-time rendering and AI models are enabling instant video creation like never before.',
    image: '/images/trends-3.webp',
    slug: slugify('Real-Time Video Generation'),
  },
  {
    title: 'AI Avatars & Digital Humans',
    description: 'Digital avatars are becoming more realistic, expressive, and widely adopted across industries.',
    image: '/images/trends-4.webp',
    slug: slugify('AI Avatars & Digital Humans'),
  },
  {
    title: 'Short-Form Content',
    description: 'Short-form content continues to dominate, with AI tools optimizing for engagement.',
    image: '/images/trends-5.webp',
    slug: slugify('Short-Form Content'),
  },
  {
    title: 'AI in Video Editing',
    description: 'From auto-cutting to smart transitions, AI is streamlining post-production workflows.',
    image: '/images/trends-6.webp',
    slug: slugify('AI in Video Editing'),
  },
];

const BY_SLUG = new Map(
  [...RESOURCE_ARTICLES, ...TREND_ARTICLES].map((article) => [article.slug, article]),
);

export function getStaticArticleBySlug(slug: string): StaticArticle | undefined {
  return BY_SLUG.get(String(slug || '').trim());
}

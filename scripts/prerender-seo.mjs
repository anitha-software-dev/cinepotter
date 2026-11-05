import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.cinepotter.com';
const DEFAULT_OG = `${SITE}/og/cinepotter-og.png`;
const lastmod = new Date().toISOString().slice(0, 10);

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function slash(pathname) {
  if (!pathname || pathname === '/') return '/';
  return `${pathname.replace(/\/+$/, '')}/`;
}

function canonical(pathname) {
  return `${SITE}${slash(pathname)}`;
}

function todayInPublishTimezone() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

function parseBlogPosts() {
  const src = fs.readFileSync(path.join(root, 'src/data/blogData.ts'), 'utf8');
  const today = todayInPublishTimezone();
  const posts = [];
  const blocks = src.split(/\{\s*"id":\s*"post-/).slice(1);
  for (const block of blocks) {
    const slug = block.match(/"slug":\s*"([^"]+)"/)?.[1];
    const metaTitle = block.match(/"metaTitle":\s*"([^"]+)"/)?.[1];
    const metaDescription = block.match(/"metaDescription":\s*"([^"]+)"/)?.[1];
    const image = block.match(/"image":\s*"([^"]+)"/)?.[1];
    const publishDate = block.match(/"publishDate":\s*"([^"]+)"/)?.[1];
    if (slug && metaTitle && metaDescription && publishDate && publishDate <= today) {
      posts.push({
        slug,
        metaTitle,
        metaDescription,
        publishDate,
        image: image || '/og/cinepotter-og.png',
      });
    }
  }
  return posts.sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

const blogPosts = parseBlogPosts();

const pages = [
  {
    path: '/',
    title: 'AI Video Production Platform | CinePotter',
    description:
      'Create professional videos at scale with CinePotter, an AI video production platform built for marketers, agencies and modern creative teams.',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/journey/',
    title: 'AI Creative Technology & Our Journey | CinePotter',
    description:
      "Explore CinePotter's journey in AI creative technology and discover our vision for making professional video creation smarter and more accessible.",
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/offerings/',
    title: 'AI Video Creation Tools for Teams | CinePotter',
    description:
      'Explore AI video creation tools that help teams streamline scripting, production and creative workflows while producing engaging video content.',
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/solutions/',
    title: 'AI Video Marketing Solutions | CinePotter',
    description:
      'Discover AI video marketing solutions for agencies, brands and creative teams looking to simplify workflows and produce campaigns efficiently.',
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/resources/',
    title: 'AI Video Creation Resources & Guides | CinePotter',
    description:
      'Access practical AI video creation resources, guides and insights to improve content workflows, video quality and creative team productivity.',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/trends/',
    title: 'AI Video Trends & Industry Insights | CinePotter',
    description:
      'Stay informed about AI video trends, emerging technologies and industry insights changing how brands, marketers and creative teams produce content.',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/blog/',
    title: 'AI Video Guides & Workflows | CinePotter Blog',
    description:
      'Learn how to create AI videos faster. Practical guides, tool comparisons, and workflows for avatars, voiceovers, and automated marketing video production.',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/contact/',
    title: 'Contact CinePotter | AI Video Production Support',
    description:
      'Get in touch with CinePotter for demos, partnerships, and support. We help teams produce professional AI video at scale.',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/privacy/',
    title: 'Privacy Policy | CinePotter',
    description:
      'Learn how CinePotter collects, uses, and protects personal information when you use our AI video production platform.',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    path: '/terms/',
    title: 'Terms of Service | CinePotter',
    description:
      'Read the terms that govern use of the CinePotter AI video production platform, including accounts, content, and licensing.',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    path: '/cookies/',
    title: 'Cookies Policy | CinePotter',
    description:
      'How CinePotter uses essential, analytics, and marketing cookies, and how you can manage your cookie preferences.',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    path: '/resources/the-complete-guide-to-ai-video-creation/',
    title: 'The Complete Guide to AI Video Creation | CinePotter',
    description: "Learn how to go from idea to a stunning video using CinePotter's AI-powered tools.",
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/resources/getting-started-with-cinepotter/',
    title: 'Getting Started with CinePotter | CinePotter',
    description: 'A quick guide on how to set up your account and render your first AI video with CinePotter.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/resources/10-creative-prompts-to-try-today/',
    title: '10 Creative Prompts to Try Today | CinePotter',
    description: 'Stuck on ideas? Try these 10 AI video prompts to get your creative juices flowing.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/trends/ai-powered-storytelling/',
    title: 'AI-Powered Storytelling | CinePotter',
    description: 'AI is becoming a creative partner, helping creators generate stories, scripts, and scenes effortlessly.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/trends/hyper-personalized-videos/',
    title: 'Hyper-Personalized Videos | CinePotter',
    description: 'Personalization at scale is transforming marketing, education, and customer engagement.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/trends/real-time-video-generation/',
    title: 'Real-Time Video Generation | CinePotter',
    description: 'Real-time rendering and AI models are enabling instant video creation like never before.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/trends/ai-avatars-digital-humans/',
    title: 'AI Avatars & Digital Humans | CinePotter',
    description: 'Digital avatars are becoming more realistic, expressive, and widely adopted across industries.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/trends/short-form-content/',
    title: 'Short-Form Content | CinePotter',
    description: 'Short-form content continues to dominate, with AI tools optimizing for engagement.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/trends/ai-in-video-editing/',
    title: 'AI in Video Editing | CinePotter',
    description: 'From auto-cutting to smart transitions, AI is streamlining post-production workflows.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}/`,
    title: post.metaTitle,
    description: post.metaDescription,
    image: post.image.startsWith('http') ? post.image : `${SITE}${post.image}`,
    lastmod: post.publishDate,
    changefreq: 'monthly',
    priority: '0.7',
  })),
];

function applyHead(html, page) {
  const href = canonical(page.path);
  const image = page.image || DEFAULT_OG;
  const robots = page.robots || 'index,follow';

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${esc(page.description)}" />`,
  );
  html = html.replace(
    /<meta name="robots" content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${esc(robots)}" />`,
  );

  const canonicalTag = `<link rel="canonical" href="${esc(href)}" />`;
  if (/rel="canonical"/.test(html)) {
    html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, canonicalTag);
  } else {
    html = html.replace(
      /<meta name="robots"[^>]*>/,
      (m) => `${m}\n    ${canonicalTag}`,
    );
  }

  const ogUrl = `<meta property="og:url" content="${esc(href)}" />`;
  if (/property="og:url"/.test(html)) {
    html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, ogUrl);
  } else {
    html = html.replace(
      /<meta property="og:type"[^>]*>/,
      (m) => `${ogUrl}\n    ${m}`,
    );
  }

  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${esc(page.title)}" />`,
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${esc(page.description)}" />`,
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${esc(image)}" />`,
  );
  html = html.replace(
    /<meta property="og:image:secure_url" content="[^"]*"\s*\/?>/,
    `<meta property="og:image:secure_url" content="${esc(image)}" />`,
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  );
  return html;
}

function writeSitemap(target) {
  const body = pages
    .map(
      (page) => `  <url>
    <loc>${canonical(page.path)}</loc>
    <lastmod>${page.lastmod || lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join('\n');
  fs.writeFileSync(
    target,
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`,
  );
}

writeSitemap(path.join(root, 'public/sitemap.xml'));

const distDir = path.join(root, 'dist');
const builtIndex = path.join(distDir, 'index.html');
if (fs.existsSync(builtIndex)) {
  const template = fs.readFileSync(builtIndex, 'utf8');
  for (const page of pages) {
    const html = applyHead(template, page);
    if (page.path === '/') {
      fs.writeFileSync(builtIndex, html);
      continue;
    }
    const outDir = path.join(distDir, page.path.replace(/^\/|\/$/g, ''));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
  }
  writeSitemap(path.join(distDir, 'sitemap.xml'));
  console.log(`Prerendered ${pages.length} trailing-slash HTML documents`);
} else {
  console.log(`Wrote sitemap with ${pages.length} trailing-slash URLs (dist not built yet)`);
}

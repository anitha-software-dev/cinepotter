import { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  Check,
  Sparkles,
  Bookmark,
  List,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { getBlogPostBySlug, getRelatedPosts, formatPublishDate } from '../data/blogData';
import { getArticleContent, type ContentBlock, type FaqItem } from '../data/blogContent';

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  const post = useMemo(() => {
    return slug ? getBlogPostBySlug(slug) : undefined;
  }, [slug]);

  const content = useMemo(() => {
    return slug ? getArticleContent(slug) : undefined;
  }, [slug]);

  const { mainBlocks, faqHeading, faqItems } = useMemo(() => {
    if (!content) return { mainBlocks: [], faqHeading: undefined, faqItems: undefined };

    const faqIndex = content.blocks.findIndex((b) => b.type === 'faq');
    if (faqIndex === -1) {
      return { mainBlocks: content.blocks, faqHeading: undefined, faqItems: undefined };
    }

    const prevBlock = faqIndex > 0 ? content.blocks[faqIndex - 1] : undefined;
    const hasFaqHeading =
      prevBlock &&
      prevBlock.type === 'h2' &&
      (prevBlock.id === 'frequently-asked-questions' ||
        prevBlock.text.toLowerCase().includes('faq') ||
        prevBlock.text.toLowerCase().includes('frequently asked'));

    const mainBlocks = hasFaqHeading
      ? content.blocks.slice(0, faqIndex - 1)
      : content.blocks.slice(0, faqIndex);

    const faqBlock = content.blocks[faqIndex] as { type: 'faq'; items: FaqItem[] };

    return {
      mainBlocks,
      faqHeading: hasFaqHeading ? (prevBlock as { type: 'h2'; text: string; id: string }) : undefined,
      faqItems: faqBlock.items,
    };
  }, [content]);

  const relatedPosts = useMemo(() => {
    return post ? getRelatedPosts(post.slug, post.category, 3) : [];
  }, [post]);

  // Active section scroll tracking with IntersectionObserver
  useEffect(() => {
    if (!content || !content.tableOfContents || content.tableOfContents.length === 0) return;

    const headingElements = content.tableOfContents
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headingElements.length === 0) return;

    // Set first item as active initially
    if (headingElements[0]) {
      setActiveId(headingElements[0].id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-90px 0px -65% 0px',
        threshold: [0, 0.5, 1],
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [content]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -96;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  // Graceful 404 / Not Found State
  if (!post || !content) {
    return (
      <main className="min-h-screen bg-background relative overflow-hidden pt-36 pb-24 px-4 text-center">
        <SEO
          title="Article Not Found | CinePotter Blog"
          description="The requested blog post could not be found."
          canonical="https://www.cinepotter.com/blog"
          robots="noindex,follow"
        />
        <div className="max-w-md mx-auto bg-[#050C1F] border border-white/10 rounded-[28px] p-10 shadow-card">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-text-muted">
            <Bookmark size={28} />
          </div>
          <span className="text-xs font-semibold text-[#DD19E0] uppercase tracking-wider mb-2 block">
            404 Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Article Not Found
          </h1>
          <p className="text-text-secondary text-sm mb-8 leading-relaxed">
            The article you are trying to view does not exist, is not published yet, or may have been renamed. Explore our latest guides below.
          </p>
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white text-sm font-semibold hover:shadow-glow-sm transition-all"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.cinepotter.com${post.image}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Organization',
      name: 'CinePotter',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CinePotter',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.cinepotter.com/images/footer-logo.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.cinepotter.com/blog/${post.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden pt-28 pb-24">
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://www.cinepotter.com/blog/${post.slug}`}
        image={`https://www.cinepotter.com${post.image}`}
        imageAlt={post.title}
        jsonLd={jsonLd}
      />

      {/* Background glow decoration */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#DD19E0]/15 via-[#0054D1]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation / Back Bar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to all articles</span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-text-secondary hover:text-white transition-colors cursor-pointer"
            title="Copy article link"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Share2 size={13} />}
            <span>{copied ? 'Link copied!' : 'Share'}</span>
          </button>
        </div>

        {/* Article Meta Header */}
        <header className="max-w-[900px] mb-10 text-left">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white text-xs font-semibold shadow-sm">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
              <Calendar size={13} className="text-[#DD19E0]" />
              {formatPublishDate(post.publishDate)}
            </span>
            <span className="text-white/20">·</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
              <Clock size={13} className="text-[#0054D1]" />
              {post.readTime}
            </span>
            <span className="text-white/20">·</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
              <User size={13} />
              {post.author.name}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed font-normal border-l-2 border-[#DD19E0] pl-4 py-1">
            {post.excerpt}
          </p>
        </header>

        {/* Hero Image */}
        <div className="w-full h-[280px] sm:h-[420px] md:h-[500px] rounded-[24px] overflow-hidden mb-12 border border-white/10 shadow-2xl relative bg-[#071B2E]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* 2-Column Content Layout: Main Article (Left) + "On this page" Sidebar (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Article Column */}
          <div className="lg:col-span-8 min-w-0">

            {/* Mobile collapsible "On this page" (visible on mobile / tablet) */}
            {content.tableOfContents && content.tableOfContents.length > 1 && (
              <div className="lg:hidden mb-8 rounded-[18px] border border-white/10 bg-[#050C1F] overflow-hidden shadow-card">
                <button
                  type="button"
                  onClick={() => setMobileTocOpen(!mobileTocOpen)}
                  className="w-full p-4 flex items-center justify-between text-left font-semibold text-white text-sm cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <List size={16} className="text-[#DD19E0]" />
                    <span>On this page</span>
                  </div>
                  {mobileTocOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {mobileTocOpen && (
                  <nav className="p-4 pt-0 border-t border-white/5 space-y-2">
                    {content.tableOfContents.map((item) => {
                      const isActive = activeId === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => {
                            handleTocClick(e, item.id);
                            setMobileTocOpen(false);
                          }}
                          className={`block text-xs transition-colors py-1 ${
                            isActive
                              ? 'text-[#DD19E0] font-semibold'
                              : 'text-text-secondary hover:text-white'
                          } ${item.level === 3 ? 'pl-3 border-l border-white/10' : ''}`}
                        >
                          {item.title}
                        </a>
                      );
                    })}
                  </nav>
                )}
              </div>
            )}

            {/* Article Body Content */}
            <article className="article-body text-text-secondary leading-relaxed">
              {mainBlocks.map((block, index) => (
                <BlockRenderer key={index} block={block} />
              ))}
            </article>

          </div>

          {/* Right Sidebar Column (Sticky "On this page" TOC) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            {content.tableOfContents && content.tableOfContents.length > 0 && (
              <div className="rounded-[22px] border border-white/10 bg-[#050C1F]/95 backdrop-blur-md p-6 shadow-card">
                <div className="flex items-center justify-between gap-2 pb-4 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <List size={16} className="text-[#DD19E0]" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      On this page
                    </h3>
                  </div>
                  <span className="text-[11px] text-text-muted">
                    {content.tableOfContents.length} sections
                  </span>
                </div>

                <nav className="space-y-1">
                  {content.tableOfContents.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleTocClick(e, item.id)}
                        className={`group block text-xs leading-relaxed py-2 px-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-[#DD19E0]/15 to-[#0054D1]/10 text-white font-semibold border-l-2 border-[#DD19E0]'
                            : 'text-text-secondary hover:text-white hover:bg-white/[0.03] border-l-2 border-transparent'
                        } ${item.level === 3 ? 'ml-3 text-[11px]' : ''}`}
                      >
                        <span className={`transition-colors ${isActive ? 'text-white' : 'group-hover:text-white'}`}>
                          {item.title}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            )}

            {/* Sidebar Mini CTA Card */}
            <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-[#071B2E] to-[#050C1F] p-6 shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DD19E0]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#DD19E0] uppercase tracking-wider mb-2">
                  <Sparkles size={12} />
                  AI Studio
                </span>
                <h4 className="text-base font-bold text-white mb-2 leading-snug">
                  Turn Ideas into Studio Videos
                </h4>
                <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                  Generate scripts, voiceovers, scenes, and branding in one connected platform.
                </p>
                <a
                  href="https://app.cinepotter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white text-xs font-semibold hover:shadow-glow-sm transition-all"
                >
                  <span>Book AI Worker</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>

          </aside>

        </div>

        {/* FAQ Section - Center Aligned */}
        {faqItems && faqItems.length > 0 && (
          <section
            id={faqHeading?.id || "frequently-asked-questions"}
            className="mt-16 pt-12 border-t border-white/10 max-w-4xl mx-auto scroll-mt-28"
          >
            <div className="text-center mb-10">
              <span className="text-xs font-semibold text-[#DD19E0] uppercase tracking-wider block mb-2">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {faqHeading?.text || "Frequently Asked Questions"}
              </h2>
            </div>

            <FaqAccordion items={faqItems} />

            {/* In-Article Tags */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-text-muted mr-2">Keywords:</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-text-secondary">
                {post.primaryKeyword}
              </span>
              {post.secondaryKeywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-text-secondary"
                >
                  {kw}
                </span>
              ))}
            </div>
          </section>
        )}

        {!faqItems && (
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            <span className="text-xs text-text-muted mr-2">Keywords:</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-text-secondary">
              {post.primaryKeyword}
            </span>
            {post.secondaryKeywords.map((kw, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-text-secondary"
              >
                {kw}
              </span>
            ))}
          </div>
        )}

        {/* Bottom CTA Card - Center Aligned */}
        <section className="my-16 max-w-4xl mx-auto">
          <div className="rounded-[28px] p-[1px] bg-gradient-to-r from-[#DD19E0] to-[#0054D1]">
            <div className="bg-[#050C1F] rounded-[27px] p-8 md:p-12 text-center relative overflow-hidden">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] mx-auto mb-6 flex items-center justify-center text-white shadow-glow-sm">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Scale Your Video Production with CinePotter
              </h3>
              <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Create high-performing product demos, explainers, commercial ads, and social shorts in minutes. Or delegate production to specialized AI Workers.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://app.cinepotter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white text-sm font-semibold shadow-glow hover:shadow-glow-hover transition-all"
                >
                  Book an AI Worker
                </a>
                <Link
                  to="/offerings/"
                  className="px-8 py-3.5 rounded-full bg-white/5 border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Offerings
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold text-[#DD19E0] uppercase tracking-wider">
                  Keep Reading
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Related Articles</h3>
              </div>
              <Link
                to="/blog/"
                className="text-xs font-semibold text-gradient hover:opacity-80 transition-opacity inline-flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.id}
                  className="bg-[#050C1F] border border-white/5 rounded-[20px] overflow-hidden group hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-card flex flex-col"
                >
                  <Link to={`/blog/${related.slug}/`} className="w-full h-40 overflow-hidden relative block bg-[#071B2E]">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#020817]/80 text-[10px] font-semibold text-white/90 border border-white/10">
                        {related.category}
                      </span>
                    </div>
                  </Link>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-[11px] text-text-muted mb-2">
                      {formatPublishDate(related.publishDate)} · {related.readTime}
                    </p>
                    <Link to={`/blog/${related.slug}/`}>
                      <h4 className="text-white font-bold text-base group-hover:text-[#DD19E0] transition-colors line-clamp-2 mb-3 leading-snug">
                        {related.title}
                      </h4>
                    </Link>
                    <p className="text-text-secondary text-xs line-clamp-2 mb-4 leading-relaxed flex-grow">
                      {related.excerpt}
                    </p>
                    <div className="pt-2 border-t border-white/5 mt-auto">
                      <Link
                        to={`/blog/${related.slug}/`}
                        className="text-xs font-semibold text-gradient inline-flex items-center gap-1 hover:opacity-80"
                      >
                        <span>Read</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}

// Interactive FAQ Accordion Component with Borders and Plus/Minus Icons
function FaqAccordion({ items }: { items: FaqItem[] }) {
  // First FAQ open by default; supports toggling any item
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({ 0: true });

  const toggle = (idx: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="my-8 space-y-4">
      {items.map((item, idx) => {
        const isOpen = !!openItems[idx];
        return (
          <div
            key={idx}
            className="rounded-[18px] border border-white/10 bg-[#050C1F] overflow-hidden shadow-card transition-all"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] cursor-pointer group transition-colors"
              aria-expanded={isOpen}
            >
              <span
                className={`text-base sm:text-lg font-semibold leading-snug transition-colors ${
                  isOpen ? 'text-white' : 'text-[#E2E8F0] group-hover:text-white'
                }`}
              >
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                  isOpen
                    ? 'bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white border-transparent shadow-glow-sm'
                    : 'bg-white/5 border-white/10 text-text-muted group-hover:border-white/20 group-hover:text-white'
                }`}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#CBD5E1] leading-relaxed border-t border-white/[0.04] bg-white/[0.01]">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

interface BlockRendererProps {
  block: ContentBlock;
}

function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          id={block.id}
          className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-5 pt-6 border-t border-white/5 scroll-mt-28 tracking-tight leading-snug"
        >
          {block.text}
        </h2>
      );

    case 'h3':
      return (
        <h3
          id={block.id}
          className="text-xl sm:text-2xl font-bold text-white/95 mt-8 mb-4 scroll-mt-28 tracking-tight leading-snug"
        >
          {block.text}
        </h3>
      );

    case 'p':
      return (
        <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed mb-6">
          {block.text}
        </p>
      );

    case 'faq':
      return <FaqAccordion items={block.items} />;

    case 'ul':
      return (
        <ul className="space-y-3 mb-6 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] shrink-0 mt-2.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol className="space-y-3 mb-6 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-white/10 text-white font-semibold text-xs flex items-center justify-center shrink-0 mt-1 border border-white/10">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case 'table':
      return (
        <div className="my-8 rounded-[18px] border border-white/10 bg-[#050C1F] overflow-hidden shadow-card">
          {block.caption && (
            <div className="px-6 py-3 border-b border-white/10 bg-white/5 text-xs font-semibold text-white uppercase tracking-wider">
              {block.caption}
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-white font-semibold">
                  {block.data.headers.map((header, idx) => (
                    <th key={idx} className="p-4 sm:p-5">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#CBD5E1]">
                {block.data.rows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="p-4 sm:p-5 align-top leading-relaxed">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'callout':
      return (
        <blockquote className="my-8 p-6 rounded-[20px] bg-gradient-to-r from-[#DD19E0]/10 via-[#0054D1]/10 to-transparent border-l-4 border-[#DD19E0] text-white/95 italic text-base sm:text-lg leading-relaxed shadow-sm">
          {block.title && (
            <strong className="block not-italic text-sm font-bold text-white mb-2 uppercase tracking-wider">
              {block.title}
            </strong>
          )}
          “{block.text.replace(/^["“”\s]+|["“”\s]+$/g, '')}”
        </blockquote>
      );

    case 'cta':
      return (
        <div className="my-10 p-6 sm:p-8 rounded-[22px] bg-gradient-to-br from-[#071B2E] to-[#050C1F] border border-white/10 relative overflow-hidden shadow-card">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#DD19E0]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DD19E0] uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              CinePotter Studio
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {block.title}
            </h4>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              {block.description}
            </p>
            <a
              href={block.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white text-xs sm:text-sm font-semibold hover:shadow-glow-sm transition-all"
            >
              <span>{block.buttonText}</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      );

    default:
      return null;
  }
}

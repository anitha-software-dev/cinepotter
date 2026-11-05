import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles, BookOpen, Clock, Calendar } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { getPublishedPosts, formatPublishDate, type BlogPost } from '../data/blogData';
import { clsx } from 'clsx';

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const publishedPosts = useMemo(() => getPublishedPosts(), []);

  const featuredPost = useMemo(() => {
    return publishedPosts.find((p) => p.featured) || publishedPosts[0];
  }, [publishedPosts]);

  const categories = useMemo(() => {
    const counts: Record<string, number> = {
      'All Articles': publishedPosts.length,
    };
    publishedPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, [publishedPosts]);

  const filteredPosts = useMemo(() => {
    return publishedPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All Articles' || post.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.primaryKeyword.toLowerCase().includes(query) ||
        post.secondaryKeywords.some((k) => k.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [publishedPosts, selectedCategory, searchQuery]);

  const recentPosts = useMemo(() => {
    return publishedPosts.slice(0, 4);
  }, [publishedPosts]);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden pt-28 pb-20">
      <SEO
        title="AI Video Guides & Workflows | CinePotter Blog"
        description="Learn how to create AI videos faster. Practical guides, tool comparisons, and workflows for avatars, voiceovers, and automated marketing video production."
        canonical="https://www.cinepotter.com/blog/"
      />

      {/* Decorative Glow Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#DD19E0]/15 via-[#0054D1]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs md:text-sm font-medium mb-5 backdrop-blur-sm shadow-glow-sm">
            <Sparkles size={14} className="text-[#DD19E0]" />
            <span>CinePotter Production Insights</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-text-secondary">{publishedPosts.length} Articles</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
            Insights & Ideas for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#DD19E0] via-[#8B5CF6] to-[#0054D1] bg-clip-text text-transparent">
              Modern Video Production
            </span>
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Practical guides, expert perspectives, and actionable workflows for creating branded video content with artificial intelligence.
          </p>
        </div>

        {/* Featured Article Card */}
        {featuredPost && (
          <div className="mb-16 md:mb-20">
            <Link
              to={`/blog/${featuredPost.slug}/`}
              className="group block relative rounded-[28px] p-[1px] bg-gradient-to-r from-[#DD19E0]/40 via-white/10 to-[#0054D1]/40 hover:from-[#DD19E0] hover:to-[#0054D1] transition-all duration-500 shadow-card hover:shadow-glow"
            >
              <div className="bg-[#050C1F]/90 backdrop-blur-md rounded-[27px] overflow-hidden p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Media Column */}
                <div className="lg:col-span-6 w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-[20px] overflow-hidden relative border border-white/10 bg-[#071B2E]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white text-xs font-semibold uppercase tracking-wider shadow-sm">
                      Featured
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Body Column */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-text-muted mb-4">
                    <span className="inline-flex items-center gap-1.5 text-text-secondary">
                      <Calendar size={14} className="text-[#DD19E0]" />
                      {formatPublishDate(featuredPost.publishDate)}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1.5 text-text-secondary">
                      <Clock size={14} className="text-[#0054D1]" />
                      {featuredPost.readTime}
                    </span>
                    <span>·</span>
                    <span className="text-text-muted">{featuredPost.author.name}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-white/95 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-white bg-gradient-to-r from-[#DD19E0] to-[#0054D1] px-6 py-3 rounded-full w-fit shadow-glow-sm group-hover:shadow-glow transition-all">
                    <span>Read the guide</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Full-width Category Filter Tabs (No x-scroll) */}
        <div className="w-full mb-10 pb-6 border-b border-white/10">
          <div className="w-full flex flex-wrap items-center gap-2.5 sm:gap-3">
            {Object.entries(categories).map(([category, count]) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={clsx(
                    "px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer",
                    isActive
                      ? "bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white shadow-glow-sm"
                      : "bg-[#050C1F] text-text-secondary border border-white/10 hover:border-white/20 hover:text-white"
                  )}
                >
                  <span>{category}</span>
                  <span className={clsx(
                    "px-1.5 py-0.5 rounded-full text-[11px]",
                    isActive ? "bg-white/20 text-white" : "bg-white/5 text-text-muted"
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Layout: Grid + Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Grid: Articles (8 cols on desktop) */}
          <div className="lg:col-span-8">
            {/* Mobile search bar (visible on mobile / tablet) */}
            <div className="lg:hidden relative w-full mb-6">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles, topics, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#050C1F] border border-white/10 rounded-full pl-10 pr-10 py-2.5 text-sm text-white placeholder-text-muted focus:outline-none focus:border-[#DD19E0] transition-colors shadow-card"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-white cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {filteredPosts.length === 0 ? (
              <div className="bg-[#050C1F] border border-white/10 rounded-[24px] p-12 text-center my-6">
                <BookOpen size={48} className="mx-auto text-text-muted mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">
                  We couldn't find any articles matching "{searchQuery}". Try searching with different keywords or resetting filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All Articles');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>

          {/* Sticky Sidebar (4 cols on desktop) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Search Box (Right side top on desktop) */}
            <div className="hidden lg:block relative w-full">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles, topics, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#050C1F] border border-white/10 rounded-full pl-10 pr-10 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-[#DD19E0] transition-colors shadow-card"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-white cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Topic Filter Widget */}
            <div className="bg-[#050C1F] border border-white/10 rounded-[24px] p-6 shadow-card">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DD19E0]" />
                Explore Topics
              </h3>
              <div className="space-y-1">
                {Object.entries(categories).map(([cat, count]) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={clsx(
                      "w-full flex items-center justify-between px-3.5 py-2.5 rounded-[12px] text-sm transition-all duration-200 text-left cursor-pointer",
                      selectedCategory === cat
                        ? "bg-white/10 text-white font-medium"
                        : "text-text-secondary hover:text-white hover:bg-white/5"
                    )}
                  >
                    <span>{cat}</span>
                    <span className="text-xs text-text-muted">({count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-[#050C1F] border border-white/10 rounded-[24px] p-6 shadow-card">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0054D1]" />
                Recent Articles
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}/`}
                    className="group flex gap-3.5 items-start hover:opacity-90 transition-opacity"
                  >
                    <div className="w-16 h-16 rounded-[12px] overflow-hidden shrink-0 border border-white/10 bg-[#071B2E]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-medium text-white group-hover:text-[#DD19E0] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-[12px] text-text-muted mt-1">
                        {formatPublishDate(post.publishDate)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick CTA Box */}
            <div className="relative rounded-[24px] p-[1px] bg-gradient-to-br from-[#DD19E0] to-[#0054D1] overflow-hidden">
              <div className="bg-[#071B2E] rounded-[23px] p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] mx-auto mb-4 flex items-center justify-center text-white shadow-glow-sm">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Accelerate Video Production
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-5">
                  Stop juggling cameras, editing software, and fragmented tools. Scale branded video output with CinePotter AI Workers.
                </p>
                <a
                  href="https://app.cinepotter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white text-xs font-semibold hover:shadow-glow-sm transition-all"
                >
                  Book an AI Worker
                </a>
              </div>
            </div>

          </aside>
        </div>

      </div>
    </main>
  );
}

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex flex-col bg-[#050C1F] border border-white/5 rounded-[22px] overflow-hidden group hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-card flex-grow">
      
      {/* Thumbnail */}
      <Link to={`/blog/${post.slug}/`} className="w-full h-48 overflow-hidden relative block bg-[#071B2E]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-[#020817]/80 backdrop-blur-md text-white/90 text-[11px] font-semibold border border-white/10 shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Meta Bar */}
        <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
          <span>{formatPublishDate(post.publishDate)}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}/`}>
          <h3 className="text-white font-bold text-lg mb-3 leading-snug group-hover:text-[#DD19E0] transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <div className="pt-2 border-t border-white/5 mt-auto">
          <Link
            to={`/blog/${post.slug}/`}
            className="text-xs font-semibold text-gradient inline-flex items-center gap-1.5 group/btn hover:opacity-80 transition-opacity"
          >
            <span>Read Article</span>
            <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </article>
  );
}

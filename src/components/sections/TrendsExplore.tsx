import { useState } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

export function TrendsExplore() {
  const [activeFilter, setActiveFilter] = useState("All Trends");
  
  const filters = ["All Trends", "Technology", "Content", "Industry", "Marketing"];
  
  const articles = [
    {
      title: "AI-Powered Storytelling",
      description: "AI is becoming a creative partner, helping creators generate stories, scripts, and scenes effortlessly.",
      image: "/images/trends-1.webp",
      category: "Content"
    },
    {
      title: "Hyper-Personalized Videos",
      description: "Personalization at scale is transforming marketing, education, and customer engagement.",
      image: "/images/trends-2.webp",
      category: "Marketing"
    },
    {
      title: "Real-Time Video Generation",
      description: "Real-time rendering and AI models are enabling instant video creation like never before.",
      image: "/images/trends-3.webp",
      category: "Technology"
    },
    {
      title: "AI Avatars & Digital Humans",
      description: "Digital avatars are becoming more realistic, expressive, and widely adopted across industries.",
      image: "/images/trends-4.webp",
      category: "Industry"
    },
    {
      title: "Short-Form Content",
      description: "Short-form content continues to dominate, with AI tools optimizing for engagement.",
      image: "/images/trends-5.webp",
      category: "Content"
    },
    {
      title: "AI in Video Editing",
      description: "From auto-cutting to smart transitions, AI is streamlining post-production workflows.",
      image: "/images/trends-6.webp",
      category: "Technology"
    },
    {
      title: "AI-Powered Storytelling",
      description: "AI is becoming a creative partner, helping creators generate stories, scripts, and scenes effortlessly.",
      image: "/images/trends-7.webp",
      category: "Content"
    },
    {
      title: "Hyper-Personalized Videos",
      description: "Personalization at scale is transforming marketing, education, and customer engagement.",
      image: "/images/trends-8.webp",
      category: "Marketing"
    },
    {
      title: "Real-Time Video Generation",
      description: "Real-time rendering and AI models are enabling instant video creation like never before.",
      image: "/images/trends-9.webp",
      category: "Technology"
    }
  ];

  const filteredArticles = activeFilter === "All Trends" 
    ? articles 
    : articles.filter(a => a.category === activeFilter);

  return (
    <section className="py-6 md:py-8 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto relative z-20">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Explore Resources
        </h2>
        
        {/* Filters */}
        <div className="rounded-[16px] p-[1px] bg-gradient-to-r from-[#DD19E0] to-[#0054D1]">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-[15px] bg-[#050C1F]">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={clsx(
                  "px-6 py-2.5 rounded-[12px] text-sm font-medium transition-all",
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white shadow-glow-sm"
                    : "text-text-secondary hover:text-white hover:bg-white/5"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, idx) => (
          <div 
            key={idx} 
            className="flex flex-col bg-[#050C1F] border border-white/5 rounded-[24px] overflow-hidden group hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div className="w-full h-48 overflow-hidden relative">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-white font-bold text-lg mb-3 leading-tight">{article.title}</h3>
              <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">
                {article.description}
              </p>
              
              <Link 
                to={`/trends/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`} 
                state={{ article }}
                className="text-sm font-semibold text-gradient hover:opacity-80 transition-opacity inline-flex items-center gap-1 w-fit relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#DD19E0] after:to-[#0054D1]"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

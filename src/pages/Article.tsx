import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

export function Article() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <main className="flex-grow bg-background relative overflow-hidden pt-24 pb-20 px-4 md:px-8">
      <SEO 
        title={`${article.title} | CinePotter`}
        description={article.description || "Read this article on CinePotter."}
        canonical={`https://cinepotter.com${location.pathname}`}
      />
      
      <div className="max-w-[800px] mx-auto">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8 cursor-pointer">
          <ArrowLeft size={16} /> Back
        </button>
        
        <div className="mb-8">
          {article.tag && (
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-4 border border-white/20">
              {article.tag}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            {article.description}
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto mb-16 rounded-[24px] overflow-hidden border border-white/10 shadow-2xl">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-[300px] md:h-[450px] object-cover"
        />
      </div>

      <div className="max-w-[800px] mx-auto text-white/80 space-y-6 text-base md:text-lg leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Impact of AI</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3 className="text-xl font-bold text-white mt-8 mb-4">Looking Ahead</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </main>
  );
}

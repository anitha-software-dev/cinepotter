import { Link, useNavigate } from 'react-router-dom';

export function FeaturedResources() {
  const navigate = useNavigate();
  return (
    <section className="py-8 px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto text-center relative z-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
        Featured Resources
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 max-w-[1100px] mx-auto text-left">
        
        {/* Large Featured Card (Left) */}
        <div 
          onClick={() => navigate('/resources/the-complete-guide-to-ai-video-creation', { state: { article: { title: "The Complete Guide to AI Video Creation", description: "Learn how to go from idea to a stunning video using CinePotter's AI-powered tools.", image: "/images/resource-1.webp", tag: "Featured Guide" } } })}
          className="w-full lg:w-[60%] relative h-[350px] md:h-[450px] lg:h-[500px] rounded-[32px] overflow-hidden group cursor-pointer border-[2px] border-transparent hover:border-[#DD19E0]/50 transition-all duration-500 shadow-[0_0_50px_rgba(221,25,224,0.1)]"
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/images/resource-1.webp')" }}></div>
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white text-xs font-semibold mb-4">
              Featured Guide
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 max-w-[400px] leading-tight">
              The Complete Guide to AI Video Creation
            </h3>
            <p className="text-white/80 text-xs md:text-sm max-w-[400px] leading-relaxed">
              Learn how to go from idea to a stunning video using CinePotter's AI-powered tools.
            </p>
          </div>
        </div>

        {/* Stacked Cards (Right) */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6">
          
          {/* Top Right Card */}
          <div className="flex-1 relative rounded-[32px] overflow-hidden group cursor-pointer border-[2px] border-transparent hover:border-[#0054D1]/50 transition-all duration-500 shadow-[0_0_30px_rgba(0,84,209,0.15)] min-h-[220px]">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/images/resource-2.webp')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
              <h3 className="text-xl font-bold text-white mb-2 max-w-[250px] leading-snug">
                Getting Started with CinePotter
              </h3>
              <Link 
                to="/resources/getting-started-with-cinepotter"
                state={{ 
                  article: { 
                    title: "Getting Started with CinePotter", 
                    description: "A quick guide on how to set up your account and render your first AI video with CinePotter.", 
                    image: "/images/resource-2.webp" 
                  } 
                }}
                className="inline-block text-[#DD19E0] text-sm font-semibold underline underline-offset-4 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="flex-1 relative rounded-[32px] overflow-hidden group cursor-pointer border-[2px] border-transparent hover:border-[#0054D1]/50 transition-all duration-500 shadow-[0_0_30px_rgba(0,84,209,0.15)] min-h-[220px]">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/images/resource-3.webp')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
              <h3 className="text-xl font-bold text-white mb-2 max-w-[250px] leading-snug">
                10 Creative Prompts to Try Today
              </h3>
              <Link 
                to="/resources/10-creative-prompts-to-try-today"
                state={{ 
                  article: { 
                    title: "10 Creative Prompts to Try Today", 
                    description: "Stuck on ideas? Try these 10 AI video prompts to get your creative juices flowing.", 
                    image: "/images/resource-3.webp" 
                  } 
                }}
                className="inline-block text-[#DD19E0] text-sm font-semibold underline underline-offset-4 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Read More
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

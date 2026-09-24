import { useState, useRef } from 'react';
import { clsx } from 'clsx';

export function SolutionsFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    if (window.innerWidth < 1024 && galleryRef.current) {
      setTimeout(() => {
        galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
  };

  const tabs = [
    {
      title: "AI Script Generator",
      description: "Turn a single idea into a full script in seconds — hooks, scenes, and voiceover lines ready to shoot.",
      icon: "/images/script-generator.webp",
      mainImage: "/images/solution-1.webp",
      thumbnails: ["/images/solution-2.webp", "/images/solution-3.webp", "/images/solution-4.webp"]
    },
    {
      title: "AI Video Generator",
      description: "Generate cinematic, ready-to-publish videos from text prompts, no filming or editing experience required.",
      icon: "/images/video-generator.webp",
      mainImage: "/images/solution-2.webp",
      thumbnails: ["/images/solution-1.webp", "/images/solution-3.webp", "/images/solution-4.webp"]
    },
    {
      title: "AI Avatars & Voiceovers",
      description: "Bring your story to life with lifelike AI presenters and natural-sounding voiceovers in multiple languages and tones.",
      icon: "/images/avatar.webp",
      mainImage: "/images/solution-3.webp",
      thumbnails: ["/images/solution-1.webp", "/images/solution-2.webp", "/images/solution-4.webp"]
    },
    {
      title: "Smart Editor",
      description: "Fine-tune every scene with an intuitive editor — trim, resize, add captions, and polish your video in minutes.",
      icon: "/images/smart-editor.webp",
      mainImage: "/images/solution-4.webp",
      thumbnails: ["/images/solution-1.webp", "/images/solution-2.webp", "/images/solution-3.webp"]
    }
  ];

  return (
    <section className="py-6 md:py-8 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background via-[#051126] to-background text-center overflow-hidden z-20">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#DD19E0]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Solutions
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Powerful tools and features to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-[1100px] mx-auto items-stretch">
          
          {/* Left Side: Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3 h-full">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => handleTabClick(idx)}
                className={clsx(
                  "flex items-start gap-3 p-3 md:p-4 rounded-2xl text-left transition-all duration-300 w-full group relative border flex-1",
                  activeTab === idx 
                    ? "bg-[#071330] border-[#0054D1]/40 shadow-[0_0_30px_rgba(0,84,209,0.15)]" 
                    : "bg-transparent border-transparent hover:bg-white/5"
                )}
              >
                {/* Active left border indicator */}
                {activeTab === idx && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-[#DD19E0] to-[#0054D1] rounded-r-full"></div>
                )}
                
                <div className="w-10 h-10 shrink-0 flex items-center justify-center mt-0.5">
                  <div 
                    className={clsx(
                      "w-7 h-7 bg-gradient-to-r from-[#DD19E0] to-[#0054D1] transition-all",
                      activeTab !== idx ? "opacity-60" : "opacity-100 scale-110"
                    )}
                    style={{
                      WebkitMaskImage: `url(${tab.icon})`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url(${tab.icon})`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center'
                    }}
                  />
                </div>
                
                <div className="flex flex-col justify-center h-full">
                  <h4 className={clsx("font-bold text-base mb-1 transition-colors", activeTab === idx ? "text-white" : "text-white/80")}>
                    {tab.title}
                  </h4>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    {tab.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Media Gallery */}
          <div ref={galleryRef} className="lg:col-span-8 w-full h-full">
            <div className="bg-[#050C1F] rounded-[24px] p-2 md:p-4 border border-white/10 shadow-2xl relative h-full flex flex-col justify-between">
              {/* Main Image */}
              <div className="w-full relative rounded-[16px] overflow-hidden mb-3 md:mb-4 group cursor-pointer flex-grow">
                <img 
                  src={tabs[activeTab].mainImage} 
                  alt={tabs[activeTab].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all cursor-pointer shadow-lg">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                   </div>
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {tabs[activeTab].thumbnails.map((thumb, idx) => (
                  <div key={idx} className="w-full aspect-[16/9] rounded-[12px] overflow-hidden relative cursor-pointer group border border-white/5 hover:border-white/20 transition-colors">
                    <img 
                      src={thumb} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                       <div className="w-8 h-8 border border-white/50 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:border-white transition-colors">
                          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

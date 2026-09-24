import { X } from 'lucide-react';

export function ComparisonSection() {
  const othersFeatures = [
    "Short video clips",
    "Random characters",
    "Regenerate everything",
    "Voiceover in another app",
    "Add branding later",
    "Multiple disconnected tools",
    "Generic results"
  ];

  const cinepotterFeatures = [
    "Long 25–30 sec videos",
    "Character consistency",
    "Edit individual scenes",
    "Built-in AI voiceovers",
    "Instant logos, captions & branding",
    "One seamless creative workflow",
    "Story-driven, production-ready videos"
  ];

  return (
    <section className="py-10 md:py-12 px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto relative z-20">
      <div className="flex items-center justify-center gap-2 mb-4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="url(#paint0_linear)"/>
          <path d="M5.5 2.5L6.4 5.6L9.5 6.5L6.4 7.4L5.5 10.5L4.6 7.4L1.5 6.5L4.6 5.6L5.5 2.5Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DD19E0" />
              <stop offset="1" stopColor="#0054D1" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-white font-semibold">Not All AI Video Tools Work The Same</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight px-2 text-center">
        Most AI tools create clips. <br/>
        CinePotter creates stories.
      </h2>
      <p className="text-text-secondary mb-16 text-lg max-w-2xl mx-auto text-center">
        Create professional videos from one workflow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch text-left">
        
        {/* Other Tools Column */}
        <div className="rounded-[24px] p-6 md:p-8 border border-white/10 flex flex-col items-start w-full bg-navy/30">
          <h3 className="text-2xl font-bold text-text-secondary mb-6">Other AI Tools</h3>
          <ul className="w-full space-y-4">
            {othersFeatures.map((feat, idx) => (
              <li key={idx} className="group flex items-center p-4 bg-white/5 rounded-xl text-text-secondary border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] cursor-default">
                <X size={20} className="text-red-500 mr-4 shrink-0 transition-transform duration-300 group-hover:scale-125" strokeWidth={2} />
                <span className="font-semibold text-sm md:text-base">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CinePotter Column */}
        <div className="rounded-[24px] p-[2px] shadow-glow relative z-10 flex flex-col w-full overflow-hidden">
          {/* Animated Spinning Border */}
          <div 
            className="absolute inset-[-100%] z-0 animate-[spin_4s_linear_infinite]"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0 180deg, #DD19E0 270deg, #0054D1 360deg)'
            }}
          />
          <div className="bg-[#050B14] rounded-[22px] p-6 md:p-8 h-full flex flex-col items-start w-full relative z-10">
            <h3 className="text-3xl font-bold text-gradient mb-1">CinePotter</h3>
            <p className="text-sm text-text-secondary mb-6">Expert Team services - on demand</p>
            
            <ul className="w-full space-y-4">
              {cinepotterFeatures.map((feat, idx) => (
                <li key={idx} className="group flex items-center p-4 bg-white rounded-xl text-navy shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(221,25,224,0.5)] cursor-default hover:bg-slate-50">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#checkGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-4 shrink-0 transition-transform duration-300 group-hover:scale-125">
                    <defs>
                      <linearGradient id="checkGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DD19E0" />
                        <stop offset="1" stopColor="#0054D1" />
                      </linearGradient>
                    </defs>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="font-bold text-sm md:text-base">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

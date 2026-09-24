export function StatsSection() {
  return (
    <section className="py-8 px-4 md:px-6 lg:px-8 relative z-10">
      <div className="max-w-[1000px] mx-auto relative rounded-[24px] p-[1px] bg-gradient-to-r from-[#DD19E0]/60 to-[#0054D1]/60 shadow-[0_0_40px_rgba(221,25,224,0.15)] overflow-hidden">
        
        {/* Inner dark background container */}
        <div className="w-full h-full bg-[#040B17] rounded-[24px] overflow-hidden relative flex flex-col items-center">
          
          {/* Background Graphic - Expanded with negative insets to crop the baked-in border */}
          <div className="absolute -inset-32 md:-inset-24 pointer-events-none">
            <img 
              src="/images/creators-bg.webp" 
              alt="World Map Background" 
              className="w-full h-full object-cover object-bottom opacity-80" 
            />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-8 pt-12 pb-16">
            <h3 className="text-white text-3xl md:text-4xl font-bold text-center mb-16">
              Used by creators around the world
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 w-full">
              {/* Stat 1 */}
              <div className="flex-1 flex flex-col items-center text-center">
                {/* SVG for hollow gradient text */}
                <svg className="w-full h-16 md:h-20 mb-2 overflow-visible" viewBox="0 0 200 80">
                  <defs>
                    <linearGradient id="textGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DD19E0" />
                      <stop offset="100%" stopColor="#0054D1" />
                    </linearGradient>
                  </defs>
                  <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="transparent" stroke="url(#textGrad1)" strokeWidth="1.5" fontSize="72" fontWeight="600" fontFamily="sans-serif">
                    50M+
                  </text>
                </svg>
                <span className="text-white/90 text-sm md:text-base font-medium">Minutes Of Video Created</span>
              </div>

              {/* Divider 1 */}
              <div className="hidden md:flex h-20 items-center justify-center -mt-6">
                <img src="/images/creator-line.webp" alt="Divider" className="h-full object-contain opacity-80" />
              </div>

              {/* Stat 2 */}
              <div className="flex-1 flex flex-col items-center text-center">
                <svg className="w-full h-16 md:h-20 mb-2 overflow-visible" viewBox="0 0 200 80">
                  <defs>
                    <linearGradient id="textGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DD19E0" />
                      <stop offset="100%" stopColor="#0054D1" />
                    </linearGradient>
                  </defs>
                  <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="transparent" stroke="url(#textGrad2)" strokeWidth="1.5" fontSize="72" fontWeight="600" fontFamily="sans-serif">
                    30M+
                  </text>
                </svg>
                <span className="text-white/90 text-sm md:text-base font-medium">Videos Generated</span>
              </div>

              {/* Divider 2 */}
              <div className="hidden md:flex h-20 items-center justify-center -mt-6">
                <img src="/images/creator-line.webp" alt="Divider" className="h-full object-contain opacity-80" />
              </div>

              {/* Stat 3 */}
              <div className="flex-1 flex flex-col items-center text-center">
                <svg className="w-full h-16 md:h-20 mb-2 overflow-visible" viewBox="0 0 200 80">
                  <defs>
                    <linearGradient id="textGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DD19E0" />
                      <stop offset="100%" stopColor="#0054D1" />
                    </linearGradient>
                  </defs>
                  <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="transparent" stroke="url(#textGrad3)" strokeWidth="1.5" fontSize="72" fontWeight="600" fontFamily="sans-serif">
                    20M+
                  </text>
                </svg>
                <span className="text-white/90 text-sm md:text-base font-medium">Creators Worldwide</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

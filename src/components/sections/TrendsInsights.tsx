export function TrendsInsights() {
  const insights = [
    {
      value: "89%",
      text: "of marketers plan to increase their\ninvestment in AI video tools.",
      icon: "/images/investment.webp",
    },
    {
      value: "3.5x",
      text: "faster content production with AI-\npowered workflows.",
      icon: "/images/fast.webp",
    },
    {
      value: "70%",
      text: "of businesses say AI videos improve\naudience engagement.",
      icon: "/images/audience.webp",
    },
    {
      value: "$12B+",
      text: "AI video generation market projected\nby 2030.",
      icon: "/images/video-generation.webp",
    }
  ];

  return (
    <section className="py-6 md:py-8 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto relative z-20">
      
      {/* Container with gradient border */}
      <div className="w-full rounded-[32px] p-[2px] bg-gradient-to-r from-[#DD19E0] to-[#0054D1] shadow-[0_0_60px_rgba(221,25,224,0.15)] relative overflow-hidden">
        
        {/* Inner Content */}
        <div className="w-full h-full bg-[#050C1F] rounded-[30px] p-8 md:p-12 flex flex-col lg:flex-row items-stretch gap-12 lg:gap-8">
          
          {/* Left Side: Stats */}
          <div className="flex-1 w-full lg:pr-8 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-[44px] font-bold text-white mb-8 tracking-tight">
              Trends Insights
            </h2>
            
            <div className="flex flex-col">
              {insights.map((insight, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group relative p-4 -mx-4 rounded-2xl hover:bg-white/5 hover:translate-x-2 transition-all duration-300 cursor-pointer mb-4 after:absolute after:-bottom-2 after:left-4 after:w-[calc(100%-2rem)] after:h-[1px] after:bg-gradient-to-r after:from-[#DD19E0] after:to-[#0054D1] last:after:hidden">
                  <div className="flex items-center gap-3 w-[125px] md:w-[135px] shrink-0">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                       <img src={insight.icon} alt="Icon" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{insight.value}</span>
                  </div>
                  
                  <p className="text-text-secondary text-sm leading-relaxed max-w-sm whitespace-pre-line">
                    {insight.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side: Image with Play button */}
          <div className="flex-1 w-full relative group flex">
            <div className="w-full flex-grow min-h-[300px] md:min-h-[400px] relative rounded-[24px] overflow-hidden border border-white/10">
              <img 
                src="/images/trends-insights.webp" 
                alt="Trends Insights" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                 <button className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                 </button>
              </div>
            </div>
            
            {/* Background glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#DD19E0]/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export function ExploreResources() {
  const categories = [
    { title: "Guides & Tutorials", count: "24 Articles", icon: "/images/guides.webp" },
    { title: "Video Tutorials", count: "18 Videos", icon: "/images/tutorials.webp" },
    { title: "Templates", count: "32 Templates", icon: "/images/templates.webp" },
    { title: "Creative Ideas", count: "15 Articles", icon: "/images/creative-ideas.webp" },
    { title: "Case Studies", count: "10 Stories", icon: "/images/case-studies.webp" },
    { title: "FAQs", count: "20 Articles", icon: "/images/faqs.webp" }
  ];

  return (
    <section className="py-6 md:py-8 px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto text-center relative z-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
        Explore Resources
      </h2>

      <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className="w-[140px] md:w-[160px] lg:w-[180px] h-[160px] md:h-[180px] rounded-[24px] bg-[#0A132C]/60 border border-white/5 flex flex-col items-center justify-center p-4 transition-all duration-300 hover:border-[#0054D1]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,84,209,0.15)] cursor-pointer"
          >
            {/* Glowing Icon Box */}
            <div className="relative mb-5">
              <div className="absolute inset-0 bg-[#DD19E0]/40 blur-md rounded-xl"></div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#DD19E0] to-[#0054D1] relative z-10 flex items-center justify-center shadow-glow-sm">
                <img src={cat.icon} alt={cat.title} className="w-5 h-5 object-contain brightness-0 invert" />
              </div>
            </div>
            
            <h4 className="text-[13px] md:text-sm font-bold text-white mb-1">{cat.title}</h4>
            <p className="text-[11px] md:text-xs text-text-secondary">{cat.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

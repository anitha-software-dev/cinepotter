export function OfferingsUseCases() {
  const useCases = [
    {
      title: "Marketing & Advertising",
      description: "Create high converting campaigns",
      icon: "/images/marketing.webp",
    },
    {
      title: "Social Media",
      description: "Produce engaging short-form content",
      icon: "/images/social-media.webp",
    },
    {
      title: "Education",
      description: "Turn lessons into visual experiences",
      icon: "/images/education.webp",
    },
    {
      title: "Business",
      description: "Create presentations and training videos",
      icon: "/images/business.webp",
    },
    {
      title: "Agencies",
      description: "Scale video production for clients",
      icon: "/images/agencies.webp",
    }
  ];

  return (
    <section className="py-10 px-4 md:px-6 lg:px-8 max-w-[1100px] mx-auto text-center relative z-20">
      <div className="inline-flex items-center gap-2 mb-6">
        <img src="/images/sparkles-white.webp" alt="Sparkles" className="w-4 h-4 object-contain" />
        <span className="text-white font-medium text-sm">What We Offer</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
        A Complete AI Video Creation Suite
      </h2>
      <p className="text-text-secondary mb-20 text-sm md:text-base max-w-2xl mx-auto">
        Everything you need to go from idea to final video, all in one place.
      </p>

      {/* Grid of Use Cases */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 w-full mx-auto pb-12 px-2 md:px-0">
        {useCases.map((uc, idx) => (
          <div 
            key={idx} 
            className={`w-full h-[220px] lg:h-[230px] rounded-[24px] border border-white/5 bg-[#080d20] flex flex-col items-center justify-center px-2 py-6 text-center transition-all duration-300 hover:border-white/20 hover:-translate-y-2 ${idx % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
          >
            {/* Glowing Icon Box */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[#DD19E0]/40 blur-lg rounded-xl"></div>
              <div className="w-14 h-14 rounded-xl p-[1px] bg-gradient-to-r from-[#DD19E0] to-[#0054D1] relative z-10">
                <div className="w-full h-full bg-[#050C1F] rounded-[11px] flex items-center justify-center">
                  <img src={uc.icon} alt={uc.title} className="w-6 h-6 object-contain" />
                </div>
              </div>
            </div>
            
            <h4 className="text-[14px] lg:text-[15px] xl:text-[16px] tracking-tight whitespace-nowrap font-bold bg-gradient-to-r from-[#DD19E0] to-[#0054D1] bg-clip-text text-transparent mb-3 px-1">{uc.title}</h4>
            <p className="text-[12px] text-text-secondary leading-snug px-2">{uc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

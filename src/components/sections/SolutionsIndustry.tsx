export function SolutionsIndustry() {
  const industries = [
    {
      title: "Marketing & Advertising",
      description: "Create engaging ad videos, product demos, and social content that converts.",
      icon: "/images/advertising.webp",
    },
    {
      title: "E-Learning & Education",
      description: "Transform lessons into engaging videos and interactive content.",
      icon: "/images/education.webp",
    },
    {
      title: "Media & Entertainment",
      description: "Accelerate content creation for films, shows, trailers, and more.",
      icon: "/images/media.webp",
    },
    {
      title: "E-commerce",
      description: "Create product videos, boost conversions, and enhance customer trust.",
      icon: "/images/e-commerce.webp",
    },
    {
      title: "Corporate",
      description: "Develop training videos, internal communications, and presentations.",
      icon: "/images/corporate.webp",
    },
    {
      title: "Real Estate",
      description: "Showcase properties with stunning AI videos and virtual tours.",
      icon: "/images/real-estate.webp",
    }
  ];

  return (
    <section className="py-6 md:py-8 px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto text-center relative z-20">
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          <img src="/images/sparkles.webp" alt="Sparkles" className="w-5 h-5 object-contain scale-[1.7]" />
          <span className="text-white/80 font-medium text-sm">Solutions by Industry</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
          Tailored AI video solutions for <br /> your industry.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {industries.map((industry, idx) => (
          <div 
            key={idx}
            className="group relative rounded-[24px] p-[1px] bg-gradient-to-br from-[#DD19E0] to-[#0054D1] transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(221,25,224,0.1)] hover:shadow-[0_0_30px_rgba(221,25,224,0.3)]"
          >
            <div className="flex flex-col items-center p-8 h-full rounded-[23px] bg-[#050C1F] group-hover:bg-[#071128] transition-colors duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center relative">
                 <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#DD19E0]/10 to-[#0054D1]/10 blur-sm"></div>
                 <img src={industry.icon} alt={industry.title} className="w-12 h-12 object-contain relative z-10" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">{industry.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed px-2">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

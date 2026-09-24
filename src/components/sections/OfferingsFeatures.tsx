export function OfferingsFeatures() {
  const features = [
    {
      title: "AI Script Writing",
      description: "Generate engaging scripts, outlines and story ideas in seconds.",
      icon: "/images/script.webp",
    },
    {
      title: "AI Scene Generation",
      description: "Turn prompts into cinematic scenes with consistent quality and style.",
      icon: "/images/scene.webp",
    },
    {
      title: "AI Voiceovers",
      description: "Create natural-sounding voiceovers in multiple languages.",
      icon: "/images/ai-voiceover.webp",
    },
    {
      title: "Character Consistency",
      description: "Maintain the same look and feel for characters across every scene.",
      icon: "/images/character.webp",
    },
    {
      title: "Scene Editing",
      description: "Edit, refine or regenerate scenes without restarting your entire video.",
      icon: "/images/scene-editing.webp",
    },
    {
      title: "Branding Tools",
      description: "Add logos, colors, fonts and brand identity to make every video yours.",
      icon: "/images/branding.webp",
    }
  ];

  return (
    <section className="py-10 px-4 md:px-6 lg:px-8 max-w-[1100px] mx-auto text-center relative z-20">
      <div className="inline-flex items-center gap-2 mb-6">
        <img src="/images/sparkles-white.webp" alt="Sparkles" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
        <span className="text-white font-medium text-lg md:text-xl">What We Offer</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
        A Complete AI Video Creation Suite
      </h2>
      <p className="text-text-secondary mb-20 text-sm md:text-base max-w-2xl mx-auto">
        Everything you need to go from idea to final video, all in one place.
      </p>

      {/* Grid container with subtle borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 text-center md:text-left w-full mx-auto relative">
        
        {/* Subtle separator lines for the grid (desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD19E0] to-[#0054D1] -translate-y-1/2 pointer-events-none opacity-50"></div>
        <div className="hidden lg:block absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-[#DD19E0] to-[#0054D1] pointer-events-none opacity-50"></div>
        <div className="hidden lg:block absolute top-0 left-2/3 w-[1px] h-full bg-gradient-to-b from-[#DD19E0] to-[#0054D1] pointer-events-none opacity-50"></div>

        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center md:items-start p-6 rounded-2xl hover:bg-white/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
            
            {/* Glowing Icon Box */}
            <div className="relative mb-6">
              {/* Glow effect behind the box */}
              <div className="absolute inset-0 bg-[#DD19E0]/30 blur-xl rounded-lg"></div>
              
              {/* Gradient Border Box */}
              <div className="w-12 h-12 rounded-lg p-[1px] bg-gradient-to-r from-[#DD19E0] to-[#0054D1] relative z-10">
                <div className="w-full h-full bg-[#050C1F] rounded-lg flex items-center justify-center">
                  <img src={feature.icon} alt={feature.title} className="w-8 h-8 object-contain" />
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

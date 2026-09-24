export function TrendsHero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[85vh] lg:min-h-[100vh] flex flex-col justify-start pt-48 pb-32 md:pt-40 md:pb-0 lg:pt-48 overflow-hidden">
      {/* Background with Curved Bottom */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/trends-hero.webp)' }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020813]/20 to-[#020813]/90" />
      </div>
      
      {/* No bottom border */}

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          AI Video Innovation.
        </h1>
        <p className="text-xs md:text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
          Explore the latest trends shaping the future of AI video creation. Insights,<br className="hidden md:block" /> data, and predictions to keep you inspired and informed.
        </p>
      </div>
    </section>
  );
}

export function SolutionsHero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[600px] lg:min-h-[700px] pt-40 pb-32 md:pt-0 md:pb-16 lg:pb-32 flex items-center justify-center overflow-hidden">
      {/* Background with Curved Bottom */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/solutions-hero.webp)' }}
      >
        <div className="absolute inset-0 bg-background/40" />
      </div>
      
      {/* No Curved Edge */}

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          AI Video Solutions for <br />
          <span className="text-gradient">Every Need.</span>
        </h1>
        <p className="text-text-secondary text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
          Powerful AI video solutions designed for creators, marketers, educators, and businesses.
        </p>
      </div>
    </section>
  );
}

export function WhoWeAre() {
  return (
    <section className="py-6 lg:py-8 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto relative z-20">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2 rounded-[24px] overflow-hidden relative shadow-2xl">
          <img src="/images/who-we.webp" alt="Who We Are - Portal" className="w-full h-auto object-cover rounded-[24px]" />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-1 py-1 text-sm md:text-base text-text-secondary mb-4 font-medium">
            <img src="/images/sparkles-white.webp" alt="Sparkles" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
            <span className="font-semibold text-white">Who We Are</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6 text-left">
            Creators. Innovators.<br className="hidden md:block" /> Storytellers.
          </h2>
          
          <p className="text-text-secondary text-sm mb-4 leading-relaxed text-left">
            CinePotter is a team of designers, engineers, filmmakers, and AI enthusiasts passionate about simplifying video creation.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed text-left">
            We believe great stories can come from anyone, anywhere. Our platform gives you the tools to bring those stories to life.
          </p>
        </div>

      </div>
    </section>
  );
}

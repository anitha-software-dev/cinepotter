export function ResourcesHero() {
  return (
    <section className="relative pt-48 pb-40 md:pt-40 md:pb-48 lg:pt-56 lg:pb-64 px-4 md:px-6 lg:px-8 text-center overflow-hidden z-20 min-h-[85vh] md:min-h-[85vh] lg:min-h-[100vh] flex flex-col justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-top pointer-events-none"
        style={{ 
          backgroundImage: "url('/images/resources-hero.webp')"
        }}
      ></div>
      
      {/* Background glowing waves to darken the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#040C18] to-transparent z-0"></div>

      <div className="max-w-[1000px] mx-auto relative z-10 -mt-10">
        <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-4 tracking-tight">
          Learn. Create. Inspire. <br className="hidden md:block" />
          <span className="text-gradient block mt-2">All in One Place.</span>
        </h1>

        <p className="text-xs md:text-sm text-white/80 font-normal w-full max-w-[900px] mx-auto mb-10 leading-relaxed px-4">
          Explore guides, tutorials, templates, and stories to help you create better videos with <br className="hidden md:block" /> CinePotter. Knowledge that fuels your creativity.
        </p>
      </div>
      
    </section>
  );
}

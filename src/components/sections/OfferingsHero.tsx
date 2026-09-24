export function OfferingsHero() {
  return (
    <section className="relative pt-48 pb-48 md:pt-40 md:pb-40 lg:pt-56 lg:pb-56 px-4 md:px-6 lg:px-8 text-center overflow-hidden z-20 min-h-[85vh] md:min-h-[85vh] lg:min-h-[100vh] flex flex-col justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-top pointer-events-none"
        style={{ 
          backgroundImage: "url('/images/offerings-hero.webp')"
        }}
      ></div>
      {/* Background glowing waves */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Everything You Need to create <br className="hidden md:block" />
          <span className="text-gradient">Smarter Videos</span>
        </h1>

        <p className="text-xs md:text-sm text-white/80 font-normal max-w-[700px] mx-auto mb-10 leading-relaxed px-4 text-center">
          CinePotter provides an all-in-one AI workspace that helps you imagine, create, refine and <br className="hidden md:block" />
          deliver engaging videos faster and easier.
        </p>
      </div>
    </section>
  );
}

export function JourneyHero() {
  return (
    <section className="relative pt-48 md:pt-40 lg:pt-[25vh] pb-24 md:pb-8 px-4 md:px-6 lg:px-8 text-center overflow-hidden z-20 min-h-[85vh] md:min-h-[85vh] lg:min-h-[100vh] flex flex-col justify-start">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-top pointer-events-none"
        style={{ 
          backgroundImage: "url('/images/journey-hero.webp')"
        }}
      ></div>
      {/* Background glowing waves */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
          More Than an AI Tool. <br/>
          <span className="text-gradient">We're Storytellers Too.</span>
        </h1>

        <p className="text-xs md:text-base text-white/80 font-normal max-w-[800px] mx-auto mb-10 leading-relaxed px-4">
          CinePotter is built for creators, dreamers, and doers who believe in the power of stories. We <br className="hidden md:block" /> combine AI with creativity to make video creation simple, fast, and magical.
        </p>
      </div>
    </section>
  );
}

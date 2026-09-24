export function ContactHero() {
  return (
    <section className="relative pt-48 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 px-4 md:px-6 lg:px-8 text-center overflow-hidden z-20 flex flex-col justify-start">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center pointer-events-none opacity-90 mix-blend-screen"
        style={{ 
          backgroundImage: "url('/images/contact-hero.webp')"
        }}
      ></div>
      
      {/* Background glowing waves to darken the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-[#040C18] to-transparent z-0"></div>
      {/* Top overlay to fade navbar nicely */}
      <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-[#020817] to-transparent z-0"></div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
          We're Here to Help You <br className="hidden md:block" />
          <span className="text-gradient block mt-2">Create More.</span>
        </h1>

        <p className="text-xs md:text-sm text-white/80 font-normal w-full max-w-[800px] mx-auto mb-10 leading-relaxed px-4">
          Have a question, need support, or want to explore partnership opportunities? Our <br className="hidden md:block" /> team would love to hear from you.
        </p>
      </div>
    </section>
  );
}

export function PartnerLogos() {
  const logos = [
    { name: "Seedance", src: "/images/seedance.webp" },
    { name: "Nano Banana", src: "/images/nano-banana.webp" },
    { name: "Gemini", src: "/images/gemini.webp" },
    { name: "Midjourney", src: "/images/midjourney.webp" },
    { name: "Sora 2", src: "/images/sora2.webp" },
    { name: "KLING AI", src: "/images/kling.webp" },
    { name: "Qwen", src: "/images/qwen.webp" },
    { name: "Google VEO 3", src: "/images/google.webp" },
  ];

  // Double the array for seamless infinite scrolling
  const infiniteLogos = [...logos, ...logos];

  return (
    <section className="py-4 relative z-10 w-full mb-4 mt-8">
      {/* Auto-play Marquee Carousel Container */}
      <div className="relative w-full max-w-[100vw] mx-auto overflow-hidden">
        {/* Left and right gradient masks for smooth fade out at screen edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#040C18] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#040C18] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-marquee hover:animation-paused items-center">
          {infiniteLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center w-[120px] md:w-[12.5vw] px-4 shrink-0 transition-all duration-300 hover:scale-105"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-h-8 md:max-h-12 object-contain w-auto opacity-90 hover:opacity-100" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

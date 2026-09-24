import React from 'react';

export function OurValues() {
  const values = [
    {
      title: "Creativity First",
      desc: <>We build technology that <br /> inspires imagination and <br /> unlocks creativity.</>,
      icon: "/images/creativity.webp"
    },
    {
      title: "For Everyone",
      desc: <>We believe storytelling should <br /> be accessible, inclusive, and <br /> empowering.</>,
      icon: "/images/everyone.webp"
    },
    {
      title: "Innovation Always",
      desc: <>We constantly evolve to <br /> deliver smarter, faster, and <br /> better tools.</>,
      icon: "/images/innovation.webp"
    },
    {
      title: "Together We Grow",
      desc: <>Our community shapes our <br /> product, and their success is <br /> our success.</>,
      icon: "/images/together.webp"
    }
  ];

  return (
    <section className="py-6 lg:py-8 px-6 md:px-12 lg:px-8 max-w-[1200px] mx-auto text-center relative z-20">
      
      <div className="inline-flex items-center justify-center gap-2 px-1 py-1 text-sm md:text-base text-text-secondary mb-4 font-medium mx-auto">
        <img src="/images/sparkles-white.webp" alt="Sparkles" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
        <span className="font-semibold text-white">Our Values</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
        What Drives Us Every Day
      </h2>

      <div className="flex flex-col lg:flex-row items-stretch justify-center w-full gap-12 lg:gap-0 mt-8">
        {values.map((val, idx) => (
          <React.Fragment key={idx}>
            <div className="flex-1 flex flex-col items-center p-6 rounded-3xl hover:bg-white/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="h-[90px] mb-3 flex items-end justify-center">
                <img 
                  src={val.icon} 
                  alt={val.title} 
                  className={`object-contain drop-shadow-xl ${val.title === 'Together We Grow' ? 'w-[75px] h-[75px]' : 'w-[90px] h-[90px]'}`} 
                />
              </div>
              <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">{val.title}</h4>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed max-w-[260px] mx-auto text-center">
                {val.desc}
              </p>
            </div>
            
            {/* The Value Line Divider (Hidden on mobile) */}
            {idx < values.length - 1 && (
              <div className="hidden lg:flex flex-col items-center justify-center shrink-0 w-[40px]">
                <img src="/images/value-line.webp" alt="divider" className="h-[200px] w-auto object-contain opacity-60" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

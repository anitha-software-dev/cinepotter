export function OurMission() {
  const points = [
    {
      title: "Simple to Use",
      desc: "Powerful AI tools that anyone can master.",
      icon: "/images/simple.webp"
    },
    {
      title: "Built for Speed",
      desc: "Create stunning videos in minutes, not hours.",
      icon: "/images/speed.webp"
    },
    {
      title: "Made for Impact",
      desc: "Stories that connect, inspire, and convert.",
      icon: "/images/impact.webp"
    }
  ];

  return (
    <section className="py-6 lg:py-8 px-6 md:px-12 lg:px-8 max-w-[1200px] mx-auto text-center relative z-20">
      <div className="w-full rounded-[32px] p-[2px] bg-gradient-to-r from-[#DD19E0] to-[#0054D1] shadow-[0_0_50px_rgba(221,25,224,0.15)] relative">
        <div className="bg-gradient-to-br from-[#1c0836] to-[#051630] rounded-[30px] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-12 w-full h-full">
        
        {/* Left: Content */}
        <div className="w-full lg:w-[50%] flex flex-col items-start lg:pr-4">
          <div className="inline-flex items-center gap-2 px-1 py-1 mb-4">
            <img src="/images/sparkles-white.webp" alt="Sparkles" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            <span className="font-semibold text-white text-base md:text-lg">Our Mission</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6 text-left">
            Empowering Everyone <br className="hidden md:block" /> To Tell Their Story
          </h2>
          
          <p className="text-text-secondary text-sm leading-relaxed text-left">
            We're on a mission to remove barriers between ideas <br className="hidden lg:block" />
            and impact. CinePotter makes professional-quality video <br className="hidden lg:block" />
            creation accessible to everyone. Whether you're a <br className="hidden lg:block" />
            beginner or a pro.
          </p>
        </div>

        {/* Right: List */}
        <div className="w-full lg:w-[50%] flex flex-col gap-6 md:gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-white shadow-[0_0_20px_rgba(255,255,255,0.2)] shrink-0">
                <img src={point.icon} alt={point.title} className="w-10 h-10 md:w-14 md:h-14 object-contain" />
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">{point.title}</h4>
                <p className="text-text-secondary text-sm">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      </div>
    </section>
  );
}

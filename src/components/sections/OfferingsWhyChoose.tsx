export function OfferingsWhyChoose() {
  return (
    <section className="py-6 lg:py-8 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto relative z-20">
      
      {/* Container with glowing border */}
      <div className="relative w-full rounded-[24px] overflow-hidden group">
        
        {/* Glow behind the container */}
        <div className="absolute inset-0 bg-[#DD19E0]/20 blur-[50px] pointer-events-none rounded-[24px] scale-95 opacity-50"></div>
        
        {/* Gradient Border */}
        <div className="w-full rounded-[24px] p-[1px] bg-gradient-to-r from-[#DD19E0]/50 to-[#0054D1]/50 relative z-10">
          
          {/* Inner Content Area */}
          <div className="w-full h-full bg-[#0a1229]/90 backdrop-blur-xl rounded-[23px] grid grid-cols-1 md:grid-cols-12 items-center overflow-hidden">
            
            {/* Left Content (8 columns) */}
            <div className="col-span-1 md:col-span-8 p-8 md:px-12 md:py-8 lg:px-16 lg:py-10 flex flex-col items-start z-20">
              <div className="inline-flex items-center gap-2 mb-4">
                <img src="/images/sparkles-white.webp" alt="Sparkles" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                <span className="text-white font-medium text-lg md:text-xl">Why Choose CinePotter</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                One Platform. Endless Possibilities.
              </h2>
              
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed mb-6 max-w-2xl">
                We believe the future of video creation is simple, intelligent and collaborative. CinePotter combines powerful AI with an intuitive creative workspace, giving individuals and teams everything they need to produce cinematic content without the traditional complexity.
              </p>
              
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed max-w-2xl">
                From concept to completion, every feature is designed to accelerate creativity while maintaining complete creative control.
              </p>
            </div>

            {/* Right Image (Peacock, 4 columns) */}
            <div className="col-span-1 md:col-span-4 h-[200px] md:h-[420px] relative z-10 w-full flex items-end justify-center md:justify-end">
              <img 
                src="/images/why-choose.webp" 
                alt="Peacock" 
                className="w-full h-full object-contain object-center md:object-right-bottom mix-blend-screen scale-[1.1] md:scale-90 origin-bottom md:origin-bottom-right"
              />
            </div>
            
          </div>
        </div>
      </div>
      
    </section>
  );
}

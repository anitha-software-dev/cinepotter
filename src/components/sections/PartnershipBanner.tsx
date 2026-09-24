export function PartnershipBanner() {
  return (
    <section className="py-8 md:py-10 px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto relative z-20">
      <div className="w-full max-w-[1100px] mx-auto rounded-[24px] p-[1px] bg-gradient-to-r from-[#DD19E0]/50 to-[#0054D1]/50 shadow-[0_0_50px_rgba(221,25,224,0.1)] group relative">
        {/* Glow behind the container */}
        <div className="absolute inset-0 bg-[#DD19E0]/20 blur-[30px] pointer-events-none rounded-[24px] scale-[0.98] opacity-50"></div>
        
        <div className="w-full bg-[#050C1F] rounded-[23px] overflow-hidden relative flex flex-col justify-center min-h-[250px] md:min-h-[280px]">
          
          {/* Right Image Content (Background) */}
          <div className="absolute top-0 right-0 bottom-0 w-full md:w-[65%] z-0 flex items-center justify-end">
            {/* Gradient mask to blend the image into the background perfectly */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050C1F] via-[#050C1F]/90 to-transparent z-10 w-full md:w-[40%]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050C1F] via-transparent to-transparent z-10 h-full w-full md:hidden"></div>
            
            <img 
              src="/images/partner.webp" 
              alt="AI Partnership" 
              className="w-full h-full object-cover object-right md:object-center mix-blend-screen"
            />
          </div>

          {/* Left Text Content */}
          <div className="w-full md:w-3/5 p-8 md:p-12 lg:px-16 lg:py-12 relative z-10 flex flex-col items-start">
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">Let's Build Something Amazing Together</h3>
            <p className="text-xs md:text-sm text-text-secondary mb-6 max-w-full leading-relaxed">
              We partner with creators, brands, and businesses to bring <br className="hidden md:block" />
              powerful stories to life using AI.
            </p>
            <button className="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white text-sm font-bold hover:shadow-glow-sm transition-shadow">
              Partner With Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

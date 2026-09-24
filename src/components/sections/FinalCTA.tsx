import { Link } from "react-router-dom";

export function FinalCTA() {
  return (
    <section className="pt-12 pb-12 px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto text-center relative z-20">
      <div className="w-full max-w-[800px] mx-auto rounded-[24px] p-[2px] bg-gradient-to-r from-[#DD19E0] to-[#0054D1] shadow-[0_0_60px_rgba(221,25,224,0.25)] relative group">
        <div className="w-full h-full bg-gradient-to-br from-[#1c0836] to-[#051630] rounded-[22px] p-6 sm:p-8 md:p-12 lg:p-20 relative z-10 flex flex-col items-center justify-center">
          
          <div className="inline-flex items-center gap-2 mb-6">
            <img src="/images/sparkles-white.webp" alt="Sparkles" className="w-4 h-4 object-contain" />
            <span className="text-white font-medium text-sm">Production ready. AI powered.</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 max-w-3xl leading-tight px-2 sm:px-4 tracking-tight">
            Ready to Create Videos That <br className="hidden md:block" /> Captivate and Convert?
          </h2>
          <Link to="https://app.cinepotter.com">
            <button className="px-6 py-2.5 rounded-full border border-white/40 text-white font-medium hover:bg-white hover:text-black transition-colors text-sm md:text-base">
              Generate Your Video
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

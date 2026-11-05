import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function FeaturedCard() {
  return (
    <section className="relative pt-8 md:pt-10 pb-8 px-4 md:px-6 lg:px-8 overflow-visible -mt-10 md:-mt-16 z-10">
      {/* The Half Circle Horizon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180vw] md:w-[130vw] h-[1000px] rounded-t-[100%] border-t-[2px] border-blue-500/40 bg-gradient-to-b from-[#061B33]/80 to-transparent shadow-[0_-30px_100px_rgba(0,84,209,0.15)] z-0"></div>

      <div className="relative z-10 w-full max-w-[1150px] mx-auto bg-[#130722] rounded-[32px] px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-8 border-[2px] border-blue-500 shadow-[0_0_40px_rgba(0,84,209,0.3)] flex flex-col md:flex-row items-center gap-12 lg:gap-16 group mt-16 md:mt-24">
      
        {/* Content Container (Card) */}
        <div className="w-full h-full rounded-[30px] flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Left: Image */}
          <div className="w-full md:w-5/12 h-[300px] md:h-[400px] rounded-[24px] overflow-hidden relative border border-white/5 shadow-inner">
            <img 
              src="/images/about.webp" 
              alt="Featured AI Video" 
              className="w-full h-[300px] md:h-[400px] object-cover rounded-[24px]"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-7/12 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-1 py-1 text-sm md:text-base text-text-secondary mb-4 font-medium">
              <img src="/images/sparkles-white.webp" alt="Sparkles" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
              <span className="font-semibold text-white">About CinePotter</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              More Than an AI Video <br className="hidden md:block"/> Generator.
            </h2>
            <p className="text-text-secondary text-sm md:text-base mb-8 leading-[30px] text-left">
              CinePotter is an all-in-one AI video creation platform that brings <br className="hidden lg:block" />
              scripting, video generation, AI avatars, voiceovers, branding, and scene <br className="hidden lg:block" />
              editing into one seamless workflow. Built for businesses, agencies, <br className="hidden lg:block" />
              marketers, and creators. A patent application has been filed for <br className="hidden lg:block" />
              CinePotter’s innovative technology.
            </p>
            <Link to="/journey/">
              <Button variant="primary" className="shadow-glow-sm px-8">Learn More</Button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

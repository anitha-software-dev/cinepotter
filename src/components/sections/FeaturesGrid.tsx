

import { clsx } from 'clsx';

export function FeaturesGrid() {
  const features = [
    {
      title: "AI Script to Video",
      description: <>Turn scripts into professional AI videos <br className="hidden lg:block" /> with immersive visual storytelling.</>,
      icon: "/images/ai-script.webp",
    },
    {
      title: "AI Avatars",
      description: <>Create realistic AI avatars with natural <br className="hidden lg:block" /> voices and expressions.</>,
      icon: "/images/ai-avatar.webp",
    },
    {
      title: "Scene-Level Editing",
      description: <>Update any scene without recreating <br className="hidden lg:block" /> the entire video effortlessly.</>,
      icon: "/images/scene-editing.webp",
    },
    {
      title: "Branding Made Easy",
      description: <>Brand every video seamlessly using logos, <br className="hidden lg:block" /> fonts, and visual assets.</>,
      icon: "/images/branding.webp",
    },
    {
      title: "Text to Voiceovers",
      description: <>Create lifelike AI voiceovers from text in <br className="hidden lg:block" /> multiple languages effortlessly.</>,
      icon: "/images/voiceovers.webp",
    },
    {
      title: "4D Experience",
      description: <>Create immersive videos with cinematic <br className="hidden lg:block" /> depth and dynamic effects.</>,
      icon: "/images/4d-experience.webp",
    }
  ];

  return (
    <section className="py-10 px-4 md:px-6 lg:px-8 max-w-[1100px] mx-auto text-center relative z-20">
      <div className="flex items-center justify-center gap-3 mb-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="url(#paint0_linear)"/>
          <path d="M5.5 2.5L6.4 5.6L9.5 6.5L6.4 7.4L5.5 10.5L4.6 7.4L1.5 6.5L4.6 5.6L5.5 2.5Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DD19E0" />
              <stop offset="1" stopColor="#0054D1" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-white font-medium">All-in-one AI video creation</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
        Everything for AI Video Creation
      </h2>
      <p className="text-text-secondary mb-16 text-lg max-w-2xl mx-auto">
        Create professional videos from one workflow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-center">
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className={clsx(
              "group py-5 px-4 md:py-6 md:px-5 lg:px-6 rounded-[24px] border transition-all duration-500 hover:-translate-y-1 relative overflow-hidden",
              "bg-navy border-white/5",
              "hover:bg-gradient-to-br hover:from-[#DD19E0] hover:to-[#0054D1] hover:border-transparent hover:shadow-[0_0_40px_rgba(221,25,224,0.3)]"
            )}
          >
            {/* Inner background glow for hover state to give it a lighter top corner */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className={clsx(
              "w-12 h-12 md:w-14 md:h-14 mx-auto rounded-2xl flex items-center justify-center mb-5 md:mb-6 relative z-10 transition-all duration-500",
              "bg-gradient-to-r from-[#DD19E0] to-[#0054D1] shadow-glow-sm",
              "group-hover:from-white group-hover:to-white group-hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)]"
            )}>
              {/* Default White Icon */}
              <img src={feature.icon} alt={feature.title} className="w-6 h-6 md:w-7 md:h-7 object-contain brightness-0 invert transition-opacity duration-300 group-hover:opacity-0 absolute" />
              
              {/* Hover Gradient Icon */}
              <div 
                className="w-6 h-6 md:w-7 md:h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-gradient-to-r from-[#DD19E0] to-[#0054D1]"
                style={{
                  WebkitMaskImage: `url(${feature.icon})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url(${feature.icon})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            </div>
            
            <h3 className="text-base md:text-lg lg:text-xl font-medium text-white mb-2 md:mb-3 relative z-10">{feature.title}</h3>
            <p className="text-text-secondary text-[11px] sm:text-xs xl:text-[13px] group-hover:text-white/90 transition-colors duration-500 relative z-10 leading-[30px]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

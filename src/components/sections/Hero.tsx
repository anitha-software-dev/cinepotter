import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const words = ["Videos", "Audios", "Movies", "Images"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (subIndex === words[index].length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  const showcaseImages = [
    "/images/hero-1.webp",
    "/images/hero-2.webp",
    "/images/hero-3.webp",
    "/images/hero-4.webp",
    "/images/hero-5.webp",
    "/images/hero-6.webp"
  ];

  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-20 relative overflow-visible z-20">
      {/* Background Image with Fade Out Mask */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-top pointer-events-none"
        style={{ 
          backgroundImage: "url('/images/hero-bg.webp')",
          maskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)'
        }}
      ></div>
      {/* Background glowing waves (simulated with gradients) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 text-sm sm:text-base md:text-xl text-text-secondary mb-8 font-medium whitespace-nowrap">
          <img src="/images/sparkles.webp" alt="Sparkles" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain scale-[1.7]" />
          AI-powered production platform
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight mb-6"
        >
          Turn Ideas Into <br className="hidden sm:block" />
          <span className="text-gradient">Stunning </span>
          <span className="inline-block text-left min-w-[4em]">
            <span className="text-gradient">
              {words[index].substring(0, subIndex)}
            </span>
            <span 
              className="inline-block w-[3px] md:w-[4px] bg-[#8B5CF6] ml-1 animate-pulse" 
              style={{ height: '0.85em', transform: 'translateY(0.1em)' }}
            ></span>
          </span>
          {' '} in Minutes.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base text-text-secondary font-normal max-w-[900px] mx-auto mb-10"
        >
          CinePotter is the all-in-one AI production studio for marketers, advertisers and <br className="hidden md:block" /> creative teams to create professional, branded content faster than ever.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 relative"
        >
          <Link to="https://app.cinepotter.com">
            <Button size="lg" className="w-full sm:w-auto relative group uppercase tracking-wide px-8">
              IMAGINE & CREATE
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Full-width Carousel Section */}
      <div className="relative w-full z-10">
        {/* Purple Background Glow to Highlight Carousel */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[90%] max-w-[1000px] h-[350px] bg-[#8B5CF6]/40 rounded-[100%] blur-[120px] pointer-events-none z-0"></div>

        {/* Animated Curved Showcase Arc Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full overflow-hidden h-[180px] sm:h-[240px] md:h-[300px] lg:h-[380px] mt-8 z-10 mb-0 flex justify-center group"
          style={{
            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
          }}
        >
          <style>{`
            @keyframes arc-slider {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(-360deg); }
            }
            .arc-slider-anim {
              animation: arc-slider 180s linear infinite;
            }
            .group:hover .arc-slider-anim {
              animation-play-state: paused;
            }
          `}</style>
          
          {/* Base scale container */}
          <div className="absolute left-1/2 w-0 h-0 scale-[0.5] sm:scale-[0.7] md:scale-[0.9] lg:scale-[1.15]"
               style={{ top: '80px' }}>
             {/* The Hub: Placed 1500px down (the radius) */}
             <div className="absolute left-0 w-0 h-0 arc-slider-anim"
                  style={{ top: '1500px' }}>
               {/* 6 repetitions of 6 images = 36 images. 36 * 10deg = 360deg */}
               {Array.from({ length: 6 }).flatMap((_, repetition) => 
                 showcaseImages.map((src, index) => {
                   const i = repetition * 6 + index;
                   const angle = i * 10; 
                   return (
                     <div
                       key={i}
                       className="absolute top-0 left-0 w-0 h-0"
                       style={{ transform: `rotate(${angle}deg)` }}
                     >
                       {/* The Spoke: Pushes the image 1500px up along the rotated axis */}
                       <div className="absolute rounded-xl md:rounded-[24px] overflow-hidden shadow-2xl border-[2px] md:border-[3px] border-white/90 bg-slate-900 cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:border-purple-400 z-10"
                            onClick={() => setSelectedIndex(index)}
                            style={{ 
                              width: '210px', 
                              height: '157px', 
                              left: '-105px', 
                              top: '-1500px' 
                            }}>
                         <img src={src} alt={`Showcase ${index + 1}`} className="w-full h-full object-cover" />
                       </div>
                     </div>
                   );
                 })
               )}
             </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 bg-black md:bg-black/95 backdrop-blur-none md:backdrop-blur-xl cursor-pointer"
              onClick={() => setSelectedIndex(null)}
            >
              {/* Left Arrow */}
              <button 
                className="absolute left-3 sm:left-6 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition-transform z-[10000] shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(prev => prev !== null ? (prev === 0 ? showcaseImages.length - 1 : prev - 1) : null);
                }}
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative cursor-default flex items-center justify-center max-w-full max-h-full px-12 md:px-32 lg:px-48"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative inline-flex">
                  {/* Close button */}
                  <button
                    className="absolute top-0 right-0 -mt-10 md:-mt-14 -mr-0 md:-mr-4 z-[10000] p-2 text-white/70 hover:text-white transition-colors"
                    onClick={() => setSelectedIndex(null)}
                  >
                    <X size={24} className="hidden md:block" />
                    <X size={20} className="md:hidden" />
                  </button>

                  <img
                    src={showcaseImages[selectedIndex]}
                    alt={`Enlarged showcase ${selectedIndex + 1}`}
                    className="block max-w-[70vw] md:max-w-[75vw] max-h-[60vh] md:max-h-[85vh] w-auto h-auto shadow-2xl rounded-lg md:rounded-xl"
                  />
                </div>
              </motion.div>

              {/* Right Arrow */}
              <button 
                className="absolute right-3 sm:right-6 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition-transform z-[10000] shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(prev => prev !== null ? (prev === showcaseImages.length - 1 ? 0 : prev + 1) : null);
                }}
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

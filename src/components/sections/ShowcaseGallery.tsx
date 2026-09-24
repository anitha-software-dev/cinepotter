import { Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function ShowcaseGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    "/images/control-1.webp",
    "/images/control-2.webp",
    "/images/control-3.webp",
    "/images/control-1.webp",
    "/images/control-2.webp",
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <section className="py-8 px-4 md:px-0 w-full text-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
        Control. Consistency. Creativity.
      </h2>

      <div 
        className="relative h-[300px] md:h-[500px] flex justify-center items-center mb-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((src, index) => {
          let rawOffset = index - activeIndex;
          const halfLength = Math.floor(images.length / 2);
          
          if (rawOffset < -halfLength) rawOffset += images.length;
          if (rawOffset > halfLength) rawOffset -= images.length;

          const translateXPercent = rawOffset * 100; // 100% combined with scale creates a perfect gap
          const isCenter = rawOffset === 0;
          const zIndex = 10 - Math.abs(rawOffset);
          
          // Fade out images that are far off screen, but keep immediate left/right visible
          const opacity = Math.abs(rawOffset) > 1 ? 0 : (isCenter ? 1 : 0.6);
          const scale = isCenter ? 1 : 0.85;

          return (
            <motion.div
              key={index}
              className={`absolute w-[80%] md:w-[50%] h-[90%] md:h-[95%] rounded-[24px] overflow-hidden transition-all duration-700 ease-in-out border ${
                isCenter && isHovered
                  ? "border-transparent border-gradient-primary shadow-[0_0_30px_rgba(221,25,224,0.4),0_0_50px_rgba(0,84,209,0.4)]"
                  : "border-white/20 shadow-2xl"
              }`}
              style={{
                transform: `translateX(${translateXPercent}%) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
              }}
            >
              <img 
                src={src} 
                alt="Showcase" 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${isCenter ? 'opacity-0' : 'opacity-60'}`}></div>
              
              {isCenter && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer">
                    <Play className="w-6 h-6 md:w-8 md:h-8 ml-1 md:ml-2" fill="currentColor" />
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Pill button beneath */}
      <div className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-8 py-3 text-white font-semibold shadow-glow-sm cursor-pointer hover:shadow-glow hover:-translate-y-0.5 transition-all text-sm md:text-base">
        <Link to="https://app.cinepotter.com">Create Your First Video</Link>
      </div>
    </section>
  );
}

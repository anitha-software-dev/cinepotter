import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const faqs = [
    { question: "1. What is CinePotter?", answer: "CinePotter is an AI-powered video production platform that helps marketers, agencies, and creative teams create professional-quality videos from scripts, ideas, or prompts in just minutes." },
    { question: "2. How does CinePotter create videos?", answer: "It uses generative AI models to create visuals, generate voiceovers, and edit them together based on your input instructions seamlessly." },
    { question: "3. Do I need video editing experience to use CinePotter?", answer: "Not at all. The intuitive interface is designed for beginners and professionals alike. The AI does the heavy lifting." },
    { question: "4. Can I customize AI-generated videos?", answer: "Yes, you have full creative control to change scenes, swap avatars, adjust lighting, and tweak scripts." },
    { question: "5. Does CinePotter support multiple languages?", answer: "Yes, our text-to-speech engine supports over 50 languages and varied emotional tones." },
    { question: "6. Can I add my brand assets to videos?", answer: "Yes, you can upload logos, fonts, and define brand colors to automatically apply to your generated videos." },
    { question: "7. What types of videos can I create with CinePotter?", answer: "You can create marketing promos, explainer videos, social media reels, educational content, and more." },
  ];

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="pt-16 pb-8 px-4 md:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Content */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2400/svg">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="url(#paint0_linear)"/>
              <path d="M5.5 2.5L6.4 5.6L9.5 6.5L6.4 7.4L5.5 10.5L4.6 7.4L1.5 6.5L4.6 5.6L5.5 2.5Z" fill="url(#paint0_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#DD19E0" />
                  <stop offset="1" stopColor="#0054D1" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-white font-medium text-sm">Inside CinePotter</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-left">Know more</h2>
          <div className="rounded-[32px] overflow-hidden border border-white/10 relative shadow-card group">
            <img 
              src="/images/faq.webp" 
              alt="CinePotter FAQ" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Right FAQ List */}
        <div className="lg:col-span-7 flex flex-col gap-4 pt-4 lg:pt-0">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={clsx(
                  "rounded-xl md:rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden",
                  isOpen 
                    ? "border-gradient-primary shadow-glow-sm p-5 md:p-6" 
                    : "bg-[#091527] border border-white/10 hover:border-white/20 p-4 md:p-5"
                )}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="font-bold text-base md:text-lg text-white">
                    {faq.question}
                  </h3>
                  <div className={clsx(
                    "shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 shadow-sm", 
                    isOpen ? "bg-gradient-primary text-white" : "bg-white text-navy"
                  )}>
                    {isOpen ? <ChevronDown size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                  </div>
                </div>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-secondary mt-4 text-xs md:text-sm leading-relaxed text-left">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

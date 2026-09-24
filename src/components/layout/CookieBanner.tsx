import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to not immediately pop up on first render
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  const handleCustomise = () => {
    localStorage.setItem('cookie-consent', 'custom');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#050C1F] text-white p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/10"
        >
          <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2 text-white">We value your privacy</h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-4xl">
                We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies. <Link to="/cookies" className="text-[#0054D1] hover:underline underline-offset-2">Cookie Policy</Link>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0">
              <button 
                onClick={handleCustomise}
                className="flex-1 lg:flex-none px-6 py-2.5 rounded border border-white/20 text-sm font-medium hover:bg-white/5 transition-colors whitespace-nowrap text-white"
              >
                Customise
              </button>
              <button 
                onClick={handleRejectAll}
                className="flex-1 lg:flex-none px-6 py-2.5 rounded border border-white/20 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Reject All
              </button>
              <button 
                onClick={handleAcceptAll}
                className="flex-1 lg:flex-none px-6 py-2.5 rounded bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap shadow-glow-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

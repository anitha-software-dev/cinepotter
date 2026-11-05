import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Send, Check, CheckCircle2 } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { PartnerLogos } from '../sections/PartnerLogos';
import { FinalCTA } from '../sections/FinalCTA';

export function Footer() {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setError('Please enter your email address');
      setIsSubscribed(false);
      return;
    }

    if (!EMAIL_RE.test(trimmed)) {
      setError('Please enter a valid email address');
      setIsSubscribed(false);
      return;
    }

    setError('');
    setIsSubscribed(true);
    setEmail('');
  };

  const hidePartnerLogosPaths = ['/offerings', '/resources', '/contact', '/solutions', '/trends', '/privacy', '/terms', '/cookies', '/blog'];
  const hidePartnerLogos = hidePartnerLogosPaths.some(path => location.pathname === path || location.pathname.startsWith(`${path}/`));

  return (
    <>
      {!hidePartnerLogos && <PartnerLogos />}
      <div className={`relative overflow-hidden w-full ${hidePartnerLogos ? '' : 'mt-8'}`}>
        {/* Shared Earth Background for CTA and Footer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/images/footer-bg.webp" alt="Earth Background" className="w-full h-full object-cover object-top opacity-80 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-[#040C18]/90"></div>
        </div>
        
        <FinalCTA />
      
      <footer className="relative pt-24 pb-0 mt-0 bg-transparent">
      
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 pb-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center md:text-left items-start">
          
          {/* Left - Contact Us */}
          <div className="flex flex-col items-center md:items-start pt-2">
            <Link to="/contact/" className="hover:opacity-80 transition-opacity">
              <h4 className="text-white font-bold text-xl mb-6">Contact Us</h4>
            </Link>
            <div className="space-y-2 text-text-secondary text-sm md:text-base">
              <p>media@cinepotter.com</p>
            </div>
          </div>

          {/* Center - Brand & Socials */}
          <div className="flex flex-col items-center text-center -mt-8">
            <Link to="/" className="flex flex-col items-center mb-2 hover:opacity-80 transition-opacity">
              <img src="/images/footer-logo.webp" alt="CinePotter Logo" className="w-24 h-24 object-contain -mt-6 -mb-4" />
              <span className="text-white font-bold text-2xl tracking-tight">CinePotter</span>
            </Link>
            <p className="text-text-secondary mb-4 text-sm max-w-[280px]">
              The AI production studio for marketers, advertisers and creative teams.
            </p>
            
            <div className="w-full max-w-[280px] h-[1px] bg-white/10 mb-4"></div>
            
            <div className="flex items-center gap-4 mb-4">
              <a href="https://www.facebook.com/cinepotter/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <FaFacebook size={16} />
              </a>
              <a href="https://www.instagram.com/cinepotter.ai" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <FaInstagram size={16} />
              </a>
              <a href="https://x.com/cinepotterai" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <FaTwitter size={16} />
              </a>
              <a href="https://www.linkedin.com/company/cinepotter/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <FaLinkedin size={16} />
              </a>
              <a href="https://www.youtube.com/@Cine-Potter" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <FaYoutube size={16} />
              </a>
            </div>
            
            <div className="w-full max-w-[280px] h-[1px] bg-white/10"></div>
          </div>

          {/* Right - Newsletter */}
          <div className="flex flex-col items-center md:items-start md:pl-8 md:pt-2">
            <h4 className="text-white font-bold text-xl mb-6">Subscribe to our<br/>Newsletter</h4>
            <form onSubmit={handleSubscribe} noValidate className="w-full max-w-[280px]">
              <div className="relative w-full">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                    if (isSubscribed) setIsSubscribed(false);
                  }}
                  placeholder="Enter your email" 
                  aria-label="Email address for newsletter"
                  aria-invalid={!!error}
                  className={`w-full h-[42px] bg-transparent border rounded-full pl-6 pr-12 text-white placeholder-text-secondary text-sm focus:outline-none transition-colors ${
                    error 
                      ? 'border-red-500 focus:border-red-400' 
                      : isSubscribed 
                      ? 'border-emerald-500/80 focus:border-emerald-400' 
                      : 'border-white/20 focus:border-white/50'
                  }`}
                />
                <button 
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1 w-[34px] h-[34px] rounded-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] flex items-center justify-center text-white hover:shadow-glow-sm transition-all cursor-pointer"
                >
                  {isSubscribed ? (
                    <Check size={14} className="text-white" />
                  ) : (
                    <Send size={14} className="-ml-0.5" />
                  )}
                </button>
              </div>

              {/* Error Validation Message */}
              {error && (
                <p className="text-red-400 text-xs mt-2 pl-2 text-left" role="alert">
                  {error}
                </p>
              )}

              {/* Success Message */}
              {isSubscribed && (
                <p className="text-emerald-400 text-xs mt-2 pl-2 text-left flex items-center gap-1.5" role="status">
                  <CheckCircle2 size={13} className="shrink-0" />
                  <span>Thank you for subscribing!</span>
                </p>
              )}
            </form>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-nowrap items-center justify-center -space-x-2 md:-space-x-4 mt-8 w-full">
          <img src="/images/patent.webp" alt="Patent Pending" className="w-[75px] h-[75px] sm:w-24 sm:h-24 md:w-[120px] md:h-[120px] object-contain shrink-0" />
          <img src="/images/ai.webp" alt="AI" className="w-[75px] h-[75px] sm:w-24 sm:h-24 md:w-[120px] md:h-[120px] object-contain p-2 md:p-[22px] shrink-0" />
          <img src="/images/user.webp" alt="User Privacy" className="w-[75px] h-[75px] sm:w-24 sm:h-24 md:w-[120px] md:h-[120px] object-contain p-2 md:p-[22px] shrink-0" />
          <img src="/images/secure.webp" alt="Secure" className="w-[75px] h-[75px] sm:w-24 sm:h-24 md:w-[120px] md:h-[120px] object-contain p-2 md:p-[22px] shrink-0" />
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="w-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] relative z-10">
        <div className="max-w-[1280px] mx-auto py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white text-xs font-medium">
          <p>© 2026 CinePotter. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link to="/blog/" className="hover:text-white/80 transition-colors">Blogs</Link>
            <span>·</span>
            <Link to="/privacy/" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms/" className="hover:text-white/80 transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link to="/cookies/" className="hover:text-white/80 transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
    </>
  );
}

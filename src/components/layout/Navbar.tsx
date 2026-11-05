import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Our Offerings', to: '/offerings/' },
    { name: 'Solutions', to: '/solutions/' },
    { name: 'Resources', to: '/resources/' },
    { name: 'Our journey', to: '/journey/' },
    { name: 'Trends', to: '/trends/' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#020817]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/images/logo.webp" alt="CinePotter Logo" className="w-50 h-12 object-contain" />
          {/* <span className="text-white font-bold text-xl tracking-tight">CinePotter</span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to}
              className="text-md font-medium text-text-secondary hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="https://app.cinepotter.com" onClick={() => setIsOpen(false)}>
            <Button variant="outline" size="sm" className="rounded-full px-6 border-white/20">Login</Button>
          </Link>
          <Link to="https://app.cinepotter.com/" onClick={() => setIsOpen(false)}>
            <Button variant="primary" size="sm" className="rounded-full px-6">Book AI worker</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-[#020817] border-b border-white/5 px-4 py-6 shadow-xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-text-secondary hover:text-white transition-colors py-2 block"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
            <Link to="https://app.cinepotter.com" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full rounded-full border-white/20 justify-center">Login</Button>
            </Link>
            <Link to="https://app.cinepotter.com/" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full rounded-full justify-center">Book AI worker</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

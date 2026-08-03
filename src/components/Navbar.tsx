import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { X, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenConsultationModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu overlay is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
          scrolled
            ? 'bg-[#F3EFE9]/95 backdrop-blur-[12px] border-b border-[#E8E2D9] py-3.5 shadow-sm'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group flex items-center space-x-2 sm:space-x-2.5 text-left focus:outline-none cursor-pointer max-w-[calc(100%-56px)]"
          >
            <Logo className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" inverted={!scrolled} />
            <div className="flex flex-col text-left min-w-0">
              <div className="flex items-baseline space-x-1 sm:space-x-1.5 truncate">
                <span
                  className={`font-serif text-xl sm:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                    scrolled ? 'text-[#1A1A1A]' : 'text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]'
                  }`}
                >
                  MJV
                </span>
                <span
                  className={`font-serif text-xl sm:text-3xl font-light tracking-tight transition-colors duration-300 ${
                    scrolled ? 'text-[#1A1A1A]/80' : 'text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]'
                  }`}
                >
                  Construction
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#B87333] font-semibold leading-none mt-0.5 truncate">
                Portland, Oregon
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`group relative text-[14px] uppercase tracking-[0.08em] font-medium transition-colors duration-200 py-1 cursor-pointer ${
                  activePage === link.id
                    ? 'text-[#B87333]'
                    : scrolled
                    ? 'text-[#1A1A1A] hover:text-[#B87333]'
                    : 'text-white hover:text-[#B87333] [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#B87333] transition-transform duration-250 ease-out origin-center ${
                    activePage === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:5035550147"
              className={`text-xs font-semibold flex items-center space-x-2 transition-colors duration-200 ${
                scrolled
                  ? 'text-[#1A1A1A] hover:text-[#B87333]'
                  : 'text-white hover:text-[#B87333] [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
              <span>(503) 555-0147</span>
            </a>
            <button
              id="desktop-schedule-consult-btn"
              onClick={onOpenConsultationModal}
              className="py-[14px] px-[28px] rounded-full bg-[#B87333] text-white hover:bg-[#9A5F2A] hover:scale-[1.02] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
            >
              Schedule Consultation
            </button>
          </div>

          {/* Mobile Hamburger Button (Two Horizontal Lines) */}
          <button
            id="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-3 -mr-2 focus:outline-none cursor-pointer touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Open navigation menu"
          >
            <div className="w-6 h-3.5 flex flex-col justify-between pointer-events-none">
              <span
                className={`w-6 h-[2px] rounded-full transition-colors duration-300 ${
                  scrolled ? 'bg-[#1A1A1A]' : 'bg-white'
                }`}
              />
              <span
                className={`w-6 h-[2px] rounded-full transition-colors duration-300 ${
                  scrolled ? 'bg-[#1A1A1A]' : 'bg-white'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#1A1A1A] text-white flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5 text-left">
                <Logo className="w-10 h-10 shrink-0" inverted={true} />
                <div className="flex flex-col text-left">
                  <div className="flex items-baseline space-x-1.5">
                    <span className="font-serif text-2xl font-bold tracking-tight text-white">MJV</span>
                    <span className="font-serif text-2xl font-light tracking-tight text-white/80">
                      Construction
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#B87333] font-semibold leading-none mt-0.5">
                    Portland, Oregon
                  </span>
                </div>
              </div>
              <button
                id="close-mobile-menu-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-white/80 hover:text-white rounded-full bg-white/10 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Staggered Navigation Links */}
            <div className="space-y-6 my-auto py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left font-serif text-[32px] font-medium transition-colors flex items-center justify-between w-full py-2 cursor-pointer ${
                      activePage === link.id ? 'text-[#B87333]' : 'text-white hover:text-[#B87333]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {activePage === link.id && <ArrowRight className="w-6 h-6 text-[#B87333]" />}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Mobile Bottom Fixed / Sticky CTA */}
            <div className="space-y-4 pt-6 border-t border-white/10 pb-6 sm:pb-0">
              <a
                href="tel:5035550147"
                className="flex items-center space-x-2 text-white/80 hover:text-[#B87333] text-sm font-semibold transition-colors mb-2 py-2"
              >
                <Phone className="w-4 h-4 text-[#B87333]" />
                <span>Call Us Direct: (503) 555-0147</span>
              </a>
              <button
                id="mobile-overlay-consult-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-[14px] px-[28px] rounded-full bg-[#B87333] text-white hover:bg-[#9A5F2A] active:scale-[0.99] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md text-center cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


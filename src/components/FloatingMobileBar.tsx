import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface FloatingMobileBarProps {
  onBookClick: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onBookClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A1A1A]/95 backdrop-blur-md border-t border-white/10 p-3 shadow-2xl flex items-center space-x-3">
      <a
        href="tel:5035550147"
        className="flex-1 py-3 px-4 rounded-full border border-white/20 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 active:bg-white/10 transition-colors"
      >
        <Phone className="w-4 h-4 text-[#B87333]" />
        <span>Call Now</span>
      </a>
      <button
        id="mobile-book-consult-btn"
        onClick={onBookClick}
        className="flex-1 py-3 px-4 rounded-full bg-[#B87333] hover:bg-[#9A5F2A] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 active:scale-[0.98] transition-all shadow-lg cursor-pointer"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Consult</span>
      </button>
    </div>
  );
};


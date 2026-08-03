import React from 'react';
import { PageId } from '../types';
import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultationModal: () => void;
  onOpenPlanningGuide: () => void;
  onOpenLookbook: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultationModal,
  onOpenPlanningGuide,
  onOpenLookbook,
}) => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-12 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-left">
              <Logo className="w-12 h-12 shrink-0" inverted={true} />
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
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              "Built with Precision. Trusted for Generations."
              <br />
              High-end residential custom homes, architectural renovations, and commercial developments across Oregon.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#B87333] hover:border-[#B87333] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#B87333] hover:border-[#B87333] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#B87333] hover:border-[#B87333] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Micro-Conversions */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-medium">Navigation</h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-semibold text-white/70">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#B87333] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#B87333] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#B87333] transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#B87333] transition-colors cursor-pointer"
                >
                  Contact & Schedule
                </button>
              </li>
              <li className="pt-2 border-t border-white/10">
                <button
                  onClick={onOpenPlanningGuide}
                  className="text-[#B87333] hover:underline flex items-center space-x-1 font-semibold cursor-pointer"
                >
                  <span>2026 Home Planning Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenLookbook}
                  className="text-[#B87333] hover:underline flex items-center space-x-1 font-semibold cursor-pointer"
                >
                  <span>Material Lookbook</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Construction Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-medium">Expertise</h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-semibold text-white/70">
              <li>Custom Home Building</li>
              <li>Luxury Home Renovations</li>
              <li>Second-Story & Master Additions</li>
              <li>ADUs & Guest Pavilions</li>
              <li>Boutique Commercial Buildouts</li>
              <li>Pre-Construction Feasibility</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-medium">Portland Headquarters</h4>
            <ul className="space-y-3 text-xs text-white/70 font-sans">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                <span>1847 NW Overton St, Portland, OR 97209</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#B87333] shrink-0" />
                <a href="tel:5035550147" className="hover:text-[#B87333] transition-colors">
                  (503) 555-0147
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#B87333] shrink-0" />
                <a href="mailto:hello@mjvconstruction.com" className="hover:text-[#B87333] transition-colors">
                  hello@mjvconstruction.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Mon–Fri: 7:00 AM – 5:00 PM PST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 space-y-4 md:space-y-0">
          <div>
            © 2026 MJV Construction LLC. All rights reserved. | CCB License #OR-123456
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-[#B87333] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-[#B87333] transition-colors">
              Terms of Service
            </a>
            <a href="#accessibility" onClick={(e) => e.preventDefault()} className="hover:text-[#B87333] transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

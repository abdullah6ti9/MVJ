import React, { useState, useEffect } from 'react';
import { PageId, Project } from '../types';
import { PROJECTS, SERVICES, TESTIMONIALS, PROCESS_STEPS } from '../data/mockData';
import { ShinyText, BlurText, SpotlightCard } from '../components/ReactBits';
import {
  ShieldCheck,
  Award,
  Building,
  Clock,
  ArrowRight,
  DollarSign,
  Gem,
  Users,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  Play,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProjectModal: (project: Project) => void;
  onOpenConsultationModal: (initialNote?: string) => void;
  onOpenPlanningGuide: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProjectModal,
  onOpenConsultationModal,
  onOpenPlanningGuide,
}) => {
  // Testimonials Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="bg-[#F3EFE9] text-[#1A1A1A] overflow-hidden">
      {/* SECTION 1: HERO (FULL-BLEED 100vh) */}
      <section className="relative min-h-[100dvh] h-auto sm:h-[100dvh] sm:min-h-[720px] w-full bg-[#1A1A1A] text-white overflow-hidden flex flex-col justify-between">
        {/* Full Viewport Background Image with Zoom & Fade Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="MJV Construction Architectural Home at Twilight"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Text-Safe Dark Gradient Overlays */}
        {/* Desktop Left-to-Right Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="absolute inset-0 z-10 hidden sm:block pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(26, 26, 26, 0.92) 0%, rgba(26, 26, 26, 0.72) 48%, rgba(26, 26, 26, 0.2) 100%)',
          }}
        />
        {/* Mobile Top-to-Bottom Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="absolute inset-0 z-10 sm:hidden pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26, 26, 26, 0.95) 0%, rgba(26, 26, 26, 0.82) 50%, rgba(26, 26, 26, 0.5) 100%)',
          }}
        />

        {/* Content Container (Left-aligned, Vertically Centered with safe top clearance) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-28 sm:pt-36 pb-12 sm:pb-16">
          <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-7">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#1A1A1A]/80 backdrop-blur-md border border-[#B87333]/40 self-start shadow-sm max-w-full"
            >
              <ShinyText text="AWARD-WINNING CUSTOM HOME BUILDERS" className="text-[9px] sm:text-[11px] truncate" />
            </motion.div>

            {/* Headline H1 (Playfair Display) */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] sm:leading-[1.06]"
            >
              Crafting Homes That Stand the Test of Time
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-lg text-white/80 font-sans max-w-[540px] leading-relaxed"
            >
              For over two decades, MJV Construction has transformed ambitious architectural visions into enduring reality. We build more than structures — we build legacies.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
            >
              <button
                id="hero-book-consult-btn"
                onClick={() => onOpenConsultationModal()}
                className="py-3.5 px-6 sm:py-4 sm:px-8 rounded-full bg-[#B87333] text-white hover:bg-[#9A5F2A] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98] text-center cursor-pointer"
              >
                Book Your Free Consultation
              </button>
              <button
                id="hero-explore-work-btn"
                onClick={() => onNavigate('projects')}
                className="py-3.5 px-6 sm:py-4 sm:px-8 rounded-full border border-white/60 text-white hover:bg-white hover:text-[#1A1A1A] font-semibold text-xs uppercase tracking-wider transition-all duration-300 text-center backdrop-blur-sm cursor-pointer"
              >
                Explore Our Work
              </button>
              <button
                id="hero-watch-story-btn"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center justify-center space-x-2.5 text-white/90 hover:text-[#B87333] font-semibold text-xs uppercase tracking-wider transition-colors py-2.5 px-2 group cursor-pointer"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 group-hover:bg-[#B87333]/20 flex items-center justify-center border border-white/25 group-hover:border-[#B87333]/60 transition-colors shadow-sm">
                  <Play className="w-3.5 h-3.5 fill-current text-white group-hover:text-[#B87333] ml-0.5" />
                </span>
                <span>Watch Our Story</span>
              </button>
            </motion.div>

            {/* Trust Micro-bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-white/70 max-w-3xl"
            >
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>300+ Homes Built</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>On-Time Guarantee</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Featured Project Floating Card (Bottom-Right Corner) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => onOpenProjectModal(PROJECTS[0])}
          className="hidden md:block absolute bottom-8 right-8 z-30 max-w-xs sm:max-w-sm bg-[#1A1A1A]/60 backdrop-blur-md border border-white/10 rounded-[4px] p-5 shadow-2xl group hover:-translate-y-1 hover:border-[#B87333]/50 transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-start justify-between space-x-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#B87333] font-semibold block">
                FEATURED RESIDENCE
              </span>
              <h4 className="font-serif text-lg font-medium text-white group-hover:text-[#B87333] transition-colors">
                The Oakridge Estate
              </h4>
              <p className="text-xs text-white/70 font-sans">
                Portland, Oregon — Custom Build
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white group-hover:bg-[#B87333] transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* Scroll Line Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={() => {
            const nextSection = document.getElementById('why-mjv-section');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="hidden lg:flex flex-col items-center absolute bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer group"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#B87333] font-semibold mb-2 group-hover:text-white transition-colors">
            Scroll
          </span>
          <div className="w-[1px] h-[60px] bg-[#B87333]/30 relative overflow-hidden">
            <div className="w-full h-1/2 bg-[#B87333] animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* LIGHTBOX VIDEO STORY MODAL */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#1A1A1A] rounded-[4px] border border-white/10 overflow-hidden shadow-2xl space-y-4 p-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#B87333]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">
                    MJV Construction Story — 25 Years of Craft
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video bg-black rounded overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
                  title="MJV Construction Architectural Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="flex items-center justify-between text-xs text-white/70 px-2 pt-1">
                <span>Featured Project: The Oakridge Estate & Pacific Northwest Portfolio</span>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    onOpenConsultationModal('Inquired after watching MJV Story Reel');
                  }}
                  className="text-[#B87333] font-semibold hover:underline"
                >
                  Request Project Consultation →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 2: WHY MJV (TRUST & DIFFERENTIATION) */}
      <section id="why-mjv-section" className="py-24 lg:py-32 bg-[#F3EFE9] border-t border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Sticky Column (40%) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold block">
                WHY HOMEOWNERS TRUST MJV
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-tight">
                Reliability. Precision. Uncompromising Quality.
              </h2>
              <p className="text-[#5C5C5C] font-sans text-base leading-relaxed">
                We understand that building a home is one of life's most significant investments. That's why we combine old-world craftsmanship with modern open-book project management to deliver results that exceed expectations — on budget and on schedule.
              </p>
              <div className="pt-2">
                <button
                  id="why-mjv-consult-btn"
                  onClick={() => onOpenConsultationModal('Discussing project requirements & pricing')}
                  className="group inline-flex items-center space-x-2 font-semibold text-xs uppercase tracking-wider text-[#1A1A1A] hover:text-[#B87333] transition-colors"
                >
                  <span>Meet Our Project Directors</span>
                  <ArrowRight className="w-4 h-4 text-[#B87333] group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Feature Cards Column (60%) */}
            <div className="lg:col-span-7 space-y-6">
              <SpotlightCard id="why-card-1">
                <div className="flex items-start space-x-5">
                  <div className="p-3 rounded-[4px] bg-[#B87333]/10 text-[#B87333] shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#1A1A1A] font-medium mb-1">Transparent Open-Book Pricing</h3>
                    <p className="text-sm text-[#5C5C5C] leading-relaxed">
                      No hidden fees or unexpected change orders. We provide line-item estimate breakdowns before breaking ground, backed by guaranteed financial caps.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard id="why-card-2">
                <div className="flex items-start space-x-5">
                  <div className="p-3 rounded-[4px] bg-[#B87333]/10 text-[#B87333] shrink-0">
                    <Gem className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#1A1A1A] font-medium mb-1">Architectural-Grade Materials</h3>
                    <p className="text-sm text-[#5C5C5C] leading-relaxed">
                      We source sustainably harvested cedar, burnished copper flashing, and hand-cut stone to ensure superior structural longevity and weather resistance.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard id="why-card-3">
                <div className="flex items-start space-x-5">
                  <div className="p-3 rounded-[4px] bg-[#B87333]/10 text-[#B87333] shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#1A1A1A] font-medium mb-1">Dedicated Single-Point Project Managers</h3>
                    <p className="text-sm text-[#5C5C5C] leading-relaxed">
                      A senior superintendent is assigned exclusively to your site, sending weekly video walkthroughs and maintaining daily communication.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard id="why-card-4">
                <div className="flex items-start space-x-5">
                  <div className="p-3 rounded-[4px] bg-[#B87333]/10 text-[#B87333] shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#1A1A1A] font-medium mb-1">10-Year Structural Guarantee</h3>
                    <p className="text-sm text-[#5C5C5C] leading-relaxed">
                      Our confidence in engineering and construction tolerances is backed in writing with a comprehensive 10-year warranty.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="py-24 lg:py-32 bg-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold block">
              OUR EXPERTISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A1A]">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-[#5C5C5C] text-sm sm:text-base font-sans">
              From initial conceptual blueprints to white-glove key delivery, we handle every phase with exacting standards.
            </p>
          </div>

          {/* 3 Large Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="group bg-[#F3EFE9] rounded-[4px] overflow-hidden border border-[#E8E2D9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#1A1A1A]/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-semibold text-[#B87333] uppercase tracking-wider">
                      {service.category}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 space-y-3">
                    <h3 className="font-serif text-2xl font-medium text-[#1A1A1A] group-hover:text-[#B87333] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#5C5C5C] leading-relaxed font-sans">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                  <button
                    id={`service-learn-more-${service.id}`}
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#B87333] transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 text-[#B87333] group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              id="view-all-services-btn"
              onClick={() => onNavigate('services')}
              className="py-4 px-9 rounded-full border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-medium text-xs uppercase tracking-wider transition-all duration-300"
            >
              View All Construction Services
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PROJECTS (DARK THEME) */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 space-y-4 md:space-y-0">
            <div>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold block mb-2">
                SELECTED WORK
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
                Homes That Define Excellence
              </h2>
            </div>
            <button
              id="view-portfolio-header-btn"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#B87333] hover:text-white transition-colors"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Project Grid (Dark Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 4).map((project) => (
              <div
                key={project.id}
                onClick={() => onOpenProjectModal(project)}
                className="group relative rounded-[4px] overflow-hidden bg-[#242424] cursor-pointer border border-white/10 shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.mainImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-2 transform group-hover:-translate-y-1 transition-transform">
                  <div className="flex items-center space-x-3 text-xs uppercase tracking-wider">
                    <span className="text-[#B87333] font-semibold">{project.year}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/70">{project.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#B87333] transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center justify-between pt-2 text-xs text-white/60">
                    <span>{project.location}</span>
                    <span className="text-[#B87333] group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1 font-semibold">
                      <span>Explore Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <span className="font-serif text-4xl sm:text-5xl text-[#B87333] font-medium block">340+</span>
              <span className="text-xs uppercase tracking-wider text-white/70 font-semibold">Projects Completed</span>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-4xl sm:text-5xl text-[#B87333] font-medium block">$120M+</span>
              <span className="text-xs uppercase tracking-wider text-white/70 font-semibold">Construction Value</span>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-4xl sm:text-5xl text-[#B87333] font-medium block">22 Years</span>
              <span className="text-xs uppercase tracking-wider text-white/70 font-semibold">In Business</span>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-4xl sm:text-5xl text-[#B87333] font-medium block">0</span>
              <span className="text-xs uppercase tracking-wider text-white/70 font-semibold">Projects Abandoned</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-[#F3EFE9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative bg-white rounded-[4px] p-8 sm:p-12 lg:p-16 border border-[#E8E2D9] shadow-md space-y-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Large Decorative Quote Graphic */}
            <div className="font-serif text-8xl text-[#B87333]/20 select-none absolute top-4 left-6 leading-none">
              “
            </div>

            {/* Quote Text */}
            <div className="relative z-10 space-y-6">
              <div className="flex items-center space-x-1 text-[#B87333]">
                {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1A1A1A] leading-relaxed italic">
                "{TESTIMONIALS[activeTestimonial].quote}"
              </p>

              <div>
                <h4 className="font-serif text-lg text-[#1A1A1A] font-semibold">
                  {TESTIMONIALS[activeTestimonial].author}
                </h4>
                <p className="text-xs uppercase tracking-wider text-[#5C5C5C]">
                  {TESTIMONIALS[activeTestimonial].project} — {TESTIMONIALS[activeTestimonial].location}
                </p>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-[#E8E2D9]">
              {/* Avatars */}
              <div className="flex items-center space-x-3">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`relative rounded-full overflow-hidden transition-all ${
                      activeTestimonial === idx ? 'ring-2 ring-[#B87333] scale-110' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center space-x-2">
                <button
                  id="testimonial-prev-btn"
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="p-3 rounded-full border border-[#1A1A1A]/20 hover:bg-[#1A1A1A] hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="testimonial-next-btn"
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                  className="p-3 rounded-full border border-[#1A1A1A]/20 hover:bg-[#1A1A1A] hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PROCESS (4-STEP TIMELINE) */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold block">
              OUR PROCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A1A]">
              A Proven Path to Your Perfect Home
            </h2>
            <p className="text-[#5C5C5C] text-sm sm:text-base font-sans">
              Building a custom residence should be an exciting journey, guarded by structured timelines and open financial ledgers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative space-y-4 group">
                {/* Step Number */}
                <span className="font-serif text-5xl font-bold text-[#B87333] block opacity-80 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </span>

                <h3 className="font-serif text-2xl font-medium text-[#1A1A1A]">{step.title}</h3>
                <p className="text-xs text-[#5C5C5C] leading-relaxed font-sans">{step.desc}</p>

                <ul className="space-y-1.5 pt-2 border-t border-[#E8E2D9]">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-[11px] text-[#5C5C5C] flex items-start space-x-1.5">
                      <span className="text-[#B87333] font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA BANNER */}
      <section className="relative py-28 lg:py-36 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80"
            alt="MJV luxury home construction detail"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Schedule your complimentary consultation. We'll review your blueprints, evaluate your property site, and provide a transparent preliminary budget — with zero obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              id="final-banner-consult-btn"
              onClick={() => onOpenConsultationModal()}
              className="py-4 px-9 rounded-full bg-[#B87333] text-white hover:bg-[#9A5F2A] font-medium text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-[1.02]"
            >
              Schedule My Free Consultation
            </button>
            <a
              href="tel:5035550147"
              className="text-xs uppercase tracking-wider font-semibold text-white/90 hover:text-[#B87333] underline flex items-center space-x-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B87333]" />
              <span>Or Call Direct: (503) 555-0147</span>
            </a>
          </div>

          <div className="text-[11px] text-[#B87333] uppercase tracking-widest font-semibold pt-4">
            * We accept a limited number of high-end projects each quarter to ensure absolute quality.
          </div>
        </div>
      </section>
    </div>
  );
};

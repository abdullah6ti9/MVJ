import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES, FAQS } from '../data/mockData';
import { CheckCircle2, ChevronDown, ArrowRight, Clock, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultationModal: (serviceName?: string) => void;
  onOpenLookbook: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultationModal,
  onOpenLookbook,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>('f1');

  const comparisonData = [
    { service: 'Custom Home Building', bestFor: 'Affluent homeowners seeking bespoke architecture', timeline: '8–14 Months', price: '$1.2M+' },
    { service: 'Home Renovations', bestFor: 'Transforming existing luxury estates & kitchens', timeline: '3–8 Months', price: '$250k+' },
    { service: 'Additions & ADUs', bestFor: 'Guest houses, pool pavilions & secondary suites', timeline: '4–7 Months', price: '$180k+' },
    { service: 'Commercial Construction', bestFor: 'Flagship retail, creative offices & boutique venues', timeline: '5–10 Months', price: '$450k+' },
    { service: 'Project Management', bestFor: 'Owner representation & budget auditing', timeline: 'Duration of Build', price: 'Retainer Fee' },
    { service: 'Pre-Construction Study', bestFor: 'De-risking zoning, soil & preliminary costs', timeline: '2–4 Weeks', price: '$15,000 Flat' },
  ];

  return (
    <div className="bg-[#F3EFE9] text-[#1A1A1A] pt-16 sm:pt-24">
      {/* HERO */}
      <section className="relative min-h-[340px] sm:min-h-[440px] py-12 sm:py-24 flex items-center justify-center bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
            alt="MJV Architectural Details"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="text-xs uppercase tracking-[0.16em] text-[#B87333] font-semibold flex items-center justify-center space-x-2">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>→</span>
            <span>Services</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white">
            Custom Home Building & Remodeling Services in Portland, OR
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-sans">
            Comprehensive construction solutions tailored to your unique architectural vision and lifestyle standards.
          </p>
        </div>
      </section>

      {/* SERVICE DETAIL BLOCKS (ALTERNATING LAYOUT) */}
      <section className="py-24 lg:py-32 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={`service-block-${service.id}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-[4px] p-6 sm:p-10 lg:p-12 border border-[#E8E2D9] shadow-sm"
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-[4px] overflow-hidden aspect-[4/3] bg-[#1A1A1A] shadow-md border border-[#E8E2D9]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#1A1A1A]/80 backdrop-blur-md px-3.5 py-1.5 rounded text-xs font-semibold text-[#B87333] uppercase tracking-wider flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Timeline: {service.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold block">
                    {service.category} SPECIFICATION
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1A1A1A]">
                    {service.title}
                  </h2>
                </div>

                <div className="space-y-3 text-sm text-[#5C5C5C] leading-relaxed font-sans">
                  {service.fullDesc.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold block">
                    Core Engineering Deliverables:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C5C5C]">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 border-t border-[#E8E2D9]">
                  <button
                    id={`request-quote-${service.id}`}
                    onClick={() => onOpenConsultationModal(service.title)}
                    className="py-3.5 px-7 rounded-full bg-[#B87333] text-white hover:bg-[#9A5F2A] font-semibold text-xs uppercase tracking-wider transition-all shadow-sm hover:scale-[1.02] text-center"
                  >
                    Request a {service.title} Quote
                  </button>
                  <button
                    onClick={onOpenLookbook}
                    className="py-3.5 px-6 rounded-full border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>View Material Options</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* SERVICE COMPARISON TABLE */}
      <section className="py-24 bg-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold block">
              QUALIFICATION MATRIX
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1A1A1A]">
              Service Comparison Guide
            </h2>
            <p className="text-sm text-[#5C5C5C]">
              Compare typical project scopes, execution timelines, and investment entry points.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-[4px] border border-[#E8E2D9] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-white text-xs uppercase tracking-wider font-semibold border-b border-white/10">
                  <th className="p-4 sm:p-5">Service</th>
                  <th className="p-4 sm:p-5">Ideal Application</th>
                  <th className="p-4 sm:p-5">Average Timeline</th>
                  <th className="p-4 sm:p-5">Entry Investment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2D9] text-sm text-[#5C5C5C]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F3EFE9]/60 transition-colors">
                    <td className="p-4 sm:p-5 font-serif font-semibold text-[#1A1A1A]">{row.service}</td>
                    <td className="p-4 sm:p-5">{row.bestFor}</td>
                    <td className="p-4 sm:p-5 font-semibold text-[#1A1A1A]">{row.timeline}</td>
                    <td className="p-4 sm:p-5 font-semibold text-[#B87333]">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION (SMOOTH HEIGHT TRANSITION) */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1A1A1A]">
              Clear Answers for Homeowners
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-[4px] border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#B87333] bg-[#F3EFE9]/40 border-l-4 border-l-[#B87333]'
                      : 'border-[#E8E2D9] bg-white hover:border-[#1A1A1A]/30'
                  }`}
                >
                  <button
                    id={`faq-toggle-${faq.id}`}
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-serif text-lg font-medium text-[#1A1A1A]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B87333] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-[#5C5C5C] leading-relaxed font-sans border-t border-[#E8E2D9]/60 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
            Not Sure Which Service Fits Your Needs?
          </h2>
          <p className="text-sm text-white/70 font-sans">
            Our principal builders offer a complimentary 30-minute feasibility call to review your property location and goals.
          </p>
          <button
            id="services-bottom-cta-btn"
            onClick={() => onOpenConsultationModal('Custom service consultation')}
            className="py-4 px-8 rounded-full bg-[#B87333] text-white hover:bg-[#9A5F2A] font-semibold text-xs uppercase tracking-wider transition-all shadow-lg"
          >
            Schedule a Feasibility Session
          </button>
        </div>
      </section>
    </div>
  );
};

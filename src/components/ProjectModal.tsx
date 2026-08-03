import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Quote, ArrowRight, Building2, Calendar, Maximize2 } from 'lucide-react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookConsultation: (projectTitle?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onBookConsultation }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!project) return null;

  const handleNext = () => {
    setActiveImgIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const handlePrev = () => {
    setActiveImgIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A1A]/85 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-5xl rounded-[4px] bg-[#F3EFE9] shadow-2xl overflow-hidden border border-[#E8E2D9] max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#1A1A1A] text-white border-b border-white/10 shrink-0">
            <div>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold">
                {project.category} — {project.year}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">{project.name}</h3>
            </div>
            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-y-auto p-6 md:p-8 space-y-8">
            {/* Gallery Viewer */}
            <div className="relative rounded-[4px] overflow-hidden bg-[#1A1A1A] aspect-[16/9]">
              <img
                src={project.gallery[activeImgIndex]}
                alt={`${project.name} photo ${activeImgIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />
              {project.gallery.length > 1 && (
                <>
                  <button
                    id="prev-gallery-image-btn"
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#1A1A1A]/70 text-white hover:bg-[#B87333] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    id="next-gallery-image-btn"
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#1A1A1A]/70 text-white hover:bg-[#B87333] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Thumbnails */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-[#1A1A1A]/80 p-1.5 rounded-full backdrop-blur-md">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeImgIndex === idx ? 'bg-[#B87333] w-6' : 'bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-[4px] bg-[#E8E2D9]/60 border border-[#E8E2D9]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold block">Location</span>
                <span className="text-sm font-medium text-[#1A1A1A]">{project.location}</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold block">Scale</span>
                <span className="text-sm font-medium text-[#1A1A1A]">{project.sqft}</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold block">Duration</span>
                <span className="text-sm font-medium text-[#1A1A1A]">{project.duration}</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold block">Architectural Style</span>
                <span className="text-sm font-medium text-[#1A1A1A]">{project.style}</span>
              </div>
            </div>

            {/* Main Details & Materials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h4 className="font-serif text-2xl text-[#1A1A1A]">Project Overview</h4>
                <p className="text-[#5C5C5C] leading-relaxed font-sans text-base">
                  {project.description}
                </p>

                {project.testimonial && (
                  <div className="p-6 rounded-[4px] bg-[#1A1A1A] text-white space-y-3 mt-6">
                    <Quote className="w-8 h-8 text-[#B87333] opacity-80" />
                    <p className="font-serif text-lg italic text-white/90">"{project.testimonial.quote}"</p>
                    <div className="text-xs uppercase tracking-wider text-[#B87333] font-semibold">
                      — {project.testimonial.author}, <span className="text-white/60">{project.testimonial.role}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4 bg-white p-6 rounded-[4px] border border-[#E8E2D9]">
                <h5 className="font-serif text-lg text-[#1A1A1A]">Architectural Materials</h5>
                <ul className="space-y-2.5">
                  {project.materials.map((mat, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-[#5C5C5C]">
                      <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#E8E2D9]">
                  <button
                    id="start-similar-project-btn"
                    onClick={() => {
                      onClose();
                      onBookConsultation(project.name);
                    }}
                    className="w-full py-3 px-4 rounded-full bg-[#B87333] text-white hover:bg-[#9A5F2A] font-medium text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md hover:scale-[1.02]"
                  >
                    <span>Start a Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

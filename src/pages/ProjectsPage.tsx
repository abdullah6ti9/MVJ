import React, { useState } from 'react';
import { PageId, Project } from '../types';
import { PROJECTS } from '../data/mockData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ArrowRight, Filter, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProjectModal: (project: Project) => void;
  onOpenConsultationModal: (projectTitle?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenProjectModal,
  onOpenConsultationModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filters = ['All', 'Custom Homes', 'Renovations', 'Commercial', 'Modern', 'Traditional'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Custom Homes') return p.category === 'Custom Homes';
    if (activeFilter === 'Renovations') return p.category === 'Renovations';
    if (activeFilter === 'Commercial') return p.category === 'Commercial';
    if (activeFilter === 'Modern') return p.style === 'Modern';
    if (activeFilter === 'Traditional') return p.style === 'Traditional';
    return true;
  });

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div className="bg-[#F3EFE9] text-[#1A1A1A] pt-16 sm:pt-24">
      {/* HERO */}
      <section className="relative min-h-[340px] sm:min-h-[440px] py-12 sm:py-24 flex items-center justify-center bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80"
            alt="MJV Portfolio Showcase"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="text-xs uppercase tracking-[0.16em] text-[#B87333] font-semibold flex items-center justify-center space-x-2">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>→</span>
            <span>Portfolio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white">
            Our Portfolio
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-sans">
            Every project tells a story of architectural collaboration, technical craftsmanship, and unyielding commitment to quality.
          </p>
        </div>
      </section>

      {/* FILTERABLE GALLERY */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-[#E8E2D9] pb-6">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#5C5C5C] font-semibold mr-2">
            <Filter className="w-4 h-4 text-[#B87333]" />
            <span>Filter By:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              id={`filter-tab-${filter.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(6);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === filter
                  ? 'bg-[#B87333] text-white shadow-md'
                  : 'bg-white text-[#5C5C5C] hover:bg-[#E8E2D9] border border-[#E8E2D9]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProjectModal(project)}
              className="group relative rounded-[4px] overflow-hidden bg-[#1A1A1A] border border-[#E8E2D9] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.mainImage}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 transform group-hover:-translate-y-1 transition-transform">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#B87333] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded">
                    {project.category}
                  </span>
                  <span className="text-white/70 text-xs">{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#B87333] transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center justify-between text-xs text-white/60 pt-1">
                  <span>{project.location}</span>
                  <span className="text-xs uppercase tracking-wider text-[#B87333] font-semibold flex items-center space-x-1">
                    <span>View Details</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center pt-8">
            <button
              id="load-more-projects-btn"
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="py-4 px-9 rounded-full bg-[#1A1A1A] text-white hover:bg-[#B87333] font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Load More Projects ({filteredProjects.length - visibleCount} Remaining)
            </button>
          </div>
        )}
      </section>

      {/* CASE STUDY SPOTLIGHT WITH INTERACTIVE BEFORE/AFTER SLIDER */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold block mb-1">
                CASE STUDY SPOTLIGHT
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white">
                The Oakridge Residence Transformation
              </h2>
            </div>
            <div className="text-xs text-white/60 pt-2 md:pt-0">
              Interactive Before & After Renovation Comparison
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive Drag Slider */}
            <div className="lg:col-span-7 space-y-2">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
                afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                beforeLabel="Original 1978 Frame"
                afterLabel="MJV Completed Modern Build"
              />
              <p className="text-[11px] text-white/50 text-center italic">
                Drag the center copper handle left & right to compare the structural transformation.
              </p>
            </div>

            {/* Narrative Story */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#B87333] font-semibold block">01. The Challenge</span>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    An aging 1978 wood-frame house situated on a steep Portland hillside with severe water intrusion risks and outdated cellular room layouts.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#B87333] font-semibold block">02. Our Approach</span>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    We engineered a pin-pile foundation extension, installed board-formed waterproof concrete structural walls, and integrated continuous standing-seam copper flashing.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#B87333] font-semibold block">03. The Result</span>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    A modern 6,400 sq ft masterpiece featuring floor-to-ceiling glass, triple net-zero thermal barrier insulation, and 100% weather resistance.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-[4px] bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-semibold text-white">Project Highlights</div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-white/70">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>6,400 sq ft</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>14 Months Build</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>Geothermal HVAC</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>Copper Accents</span>
                  </span>
                </div>
              </div>

              <button
                id="case-study-consult-btn"
                onClick={() => onOpenConsultationModal('The Oakridge Residence case study inspired project')}
                className="w-full py-3.5 px-6 rounded-full bg-[#B87333] text-white hover:bg-[#9A5F2A] font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md"
              >
                <span>Discuss a Similar Build</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

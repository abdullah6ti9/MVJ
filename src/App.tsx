import React, { useState } from 'react';
import { PageId, Project } from './types';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';
import { PlanningGuideModal } from './components/PlanningGuideModal';
import { LookbookModal } from './components/LookbookModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [planningGuideOpen, setPlanningGuideOpen] = useState(false);
  const [lookbookOpen, setLookbookOpen] = useState(false);
  const [consultationNote, setConsultationNote] = useState<string>('');

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (initialNote?: string) => {
    if (initialNote) {
      setConsultationNote(initialNote);
    } else {
      setConsultationNote('');
    }
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMaterialFromLookbook = (materialName: string) => {
    handleOpenConsultation(`Specified Material from Lookbook: ${materialName}`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans flex flex-col justify-between">
      {/* Dynamic SEO Head Management */}
      <SEOHead activePage={activePage} />

      {/* Sticky Top Header Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => handleOpenConsultation()}
      />

      {/* Main Page Content */}
      <main className="flex-grow pb-20 md:pb-0">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProjectModal={(p) => setSelectedProject(p)}
            onOpenConsultationModal={handleOpenConsultation}
            onOpenPlanningGuide={() => setPlanningGuideOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultationModal={handleOpenConsultation}
            onOpenLookbook={() => setLookbookOpen(true)}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenProjectModal={(p) => setSelectedProject(p)}
            onOpenConsultationModal={handleOpenConsultation}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            initialNote={consultationNote}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => handleOpenConsultation()}
        onOpenPlanningGuide={() => setPlanningGuideOpen(true)}
        onOpenLookbook={() => setLookbookOpen(true)}
      />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookConsultation={(title) => handleOpenConsultation(title ? `Project inspiration: ${title}` : undefined)}
      />

      <PlanningGuideModal
        isOpen={planningGuideOpen}
        onClose={() => setPlanningGuideOpen(false)}
      />

      <LookbookModal
        isOpen={lookbookOpen}
        onClose={() => setLookbookOpen(false)}
        onSelectMaterial={handleSelectMaterialFromLookbook}
      />

      {/* Floating Mobile Action Bar */}
      <FloatingMobileBar
        onBookClick={() => handleOpenConsultation()}
      />
    </div>
  );
}

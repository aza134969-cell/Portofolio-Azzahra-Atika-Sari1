import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PlaygroundSection } from './components/PlaygroundSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CollaboratorModal } from './components/CollaboratorModal';
import { ResumeModal } from './components/ResumeModal';
import { Project, Collaborator } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleSelectCategoryFromHero = (cat: string) => {
    setSelectedCategory(cat);
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-800 antialiased">
      {/* Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 space-y-4">
        {/* Hero Section matching the user image */}
        <HeroSection
          onSelectCollaborator={(c) => setSelectedCollaborator(c)}
          onSelectCategory={handleSelectCategoryFromHero}
          onOpenContact={handleOpenContact}
        />

        {/* About Section emphasizing Information Systems + UI/UX + Front-End */}
        <AboutSection />

        {/* Projects Section with category filtering & case studies */}
        <ProjectsSection
          onOpenProject={(p) => setSelectedProject(p)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Interactive Responsive & UI/UX Design System Playground */}
        <PlaygroundSection />

        {/* Services & Deliverables */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* Contact & Hire Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CollaboratorModal
        collaborator={selectedCollaborator}
        onClose={() => setSelectedCollaborator(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

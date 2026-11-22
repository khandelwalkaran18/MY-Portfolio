import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Certifications } from './components/Certifications';
import { Journey } from './components/Journey';
import { WorkingApproach } from './components/WorkingApproach';
import { FutureInterests } from './components/FutureInterests';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectItem, ServiceItem } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [contactInitialService, setContactInitialService] = useState<string>('');

  const handleSelectService = (service: ServiceItem) => {
    setContactInitialService(service.title);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Container with Semantic HTML Structure */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Section 1: Hero */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Technical Skills */}
        <Skills />

        {/* Section 4: Services Offered */}
        <Services onSelectService={handleSelectService} />

        {/* Section 5: Featured Projects */}
        <Projects onOpenProjectModal={(project) => setSelectedProject(project)} />

        {/* Section 6: Certifications */}
        <Certifications />

        {/* Section 7: Education & Development Journey */}
        <Journey />

        {/* Section 8: Professional Working Approach */}
        <WorkingApproach />

        {/* Section 9: Future Interests ("What's Next?") */}
        <FutureInterests />

        {/* Section 10: Resume */}
        <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Section 11: Contact & Freelance Profiles */}
        <Contact initialService={contactInitialService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;

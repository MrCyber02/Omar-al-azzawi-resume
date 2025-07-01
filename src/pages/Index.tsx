
import { useState } from 'react';
import AccessTerminal from '@/components/AccessTerminal';
import CursorGlow from '@/components/CursorGlow';
import MatrixBackground from '@/components/MatrixBackground';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [accessGranted, setAccessGranted] = useState(false);

  if (!accessGranted) {
    return <AccessTerminal onAccessGranted={() => setAccessGranted(true)} />;
  }

  return (
    <div className="min-h-screen bg-cyber-darker text-cyber-green relative overflow-x-hidden">
      <CursorGlow />
      <MatrixBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-cyber-green/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-cyber text-cyber-green font-bold">
              OMAR.AL_AZZAWI
            </div>
            <div className="hidden md:flex space-x-6 font-mono text-sm">
              <a href="#home" className="hover:text-cyber-cyan transition-colors">HOME</a>
              <a href="#skills" className="hover:text-cyber-cyan transition-colors">SKILLS</a>
              <a href="#experience" className="hover:text-cyber-cyan transition-colors">EXPERIENCE</a>
              <a href="#projects" className="hover:text-cyber-cyan transition-colors">PROJECTS</a>
              <a href="#contact" className="hover:text-cyber-cyan transition-colors">CONTACT</a>
            </div>
            <div className="font-mono text-xs text-cyber-cyan">
              STATUS: ONLINE
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-16">
        <div id="home">
          <HeroSection />
        </div>
        <div id="skills" className="bg-cyber-dark/50">
          <SkillsSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="projects" className="bg-cyber-dark/50">
          <ProjectsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-cyber-darker border-t border-cyber-green/30 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-cyber text-cyber-green mb-2">
              OMAR AL AZZAWI - CYBERSECURITY SPECIALIST
            </div>
            <div className="font-mono text-sm text-cyber-cyan mb-4">
              Securing digital assets • Protecting enterprise infrastructure • Remote operations specialist
            </div>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="mailto:omeralazzawi@yahoo.com" className="hover:text-cyber-green transition-colors">
                EMAIL
              </a>
              <a href="https://linkedin.com/in/omaralazzawi" className="hover:text-cyber-green transition-colors">
                LINKEDIN
              </a>
              <a href="tel:+17813304936" className="hover:text-cyber-green transition-colors">
                PHONE
              </a>
            </div>
            <div className="mt-4 text-xs font-mono opacity-50">
              © 2024 • ENCRYPTED CONNECTION • SECURE TRANSMISSION
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

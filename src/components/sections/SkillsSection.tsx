
import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "CompTIA Security+", level: 95, category: "Security" },
  { name: "CompTIA CySA+", level: 90, category: "Security" },
  { name: "AWS Security", level: 85, category: "Cloud" },
  { name: "Azure Administration", level: 80, category: "Cloud" },
  { name: "SIEM (Splunk/Sentinel)", level: 88, category: "Security" },
  { name: "Endpoint Protection", level: 92, category: "Security" },
  { name: "Windows Server", level: 90, category: "Systems" },
  { name: "Active Directory", level: 95, category: "Systems" },
  { name: "PowerShell Scripting", level: 85, category: "Automation" },
  { name: "Incident Response", level: 87, category: "Security" },
  { name: "Vulnerability Assessment", level: 89, category: "Security" },
  { name: "Office 365 Admin", level: 93, category: "Cloud" },
];

const SkillBar = ({ skill, animate }: { skill: Skill; animate: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, Math.random() * 500);
      return () => clearTimeout(timer);
    }
  }, [animate, skill.level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-cyber-green font-mono text-sm">{skill.name}</span>
        <span className="text-cyber-cyan font-mono text-sm">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cyber font-bold text-cyber-green mb-4 glitch-text" data-text="TECHNICAL_ARSENAL">
            TECHNICAL_ARSENAL
          </h2>
          <p className="text-cyber-cyan font-mono">
            Advanced cybersecurity tools and technologies mastered through years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="cyber-card">
              <h3 className="text-xl font-cyber text-cyber-cyan mb-6 border-b border-cyber-green/30 pb-2">
                {category.toUpperCase()}_SKILLS
              </h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <SkillBar key={skill.name} skill={skill} animate={isVisible} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications showcase */}
        <div className="mt-16">
          <div className="terminal-window">
            <div className="terminal-header">
              <span>certifications.log</span>
            </div>
            <div className="terminal-body">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-cyber-green mb-2">[ACTIVE_CERTIFICATIONS]</div>
                  <ul className="space-y-1 text-sm">
                    <li>→ CompTIA Security+ (Certified)</li>
                    <li>→ CompTIA CySA+ (Certified)</li>
                    <li>→ AWS Security Specialty (Certified)</li>
                    <li>→ Microsoft Azure Fundamentals (Certified)</li>
                    <li>→ ITIL Foundation (Certified)</li>
                    <li>→ Google Analytics (Certified)</li>
                  </ul>
                </div>
                <div>
                  <div className="text-cyber-cyan mb-2">[IN_PROGRESS]</div>
                  <ul className="space-y-1 text-sm">
                    <li>→ CEH (Certified Ethical Hacker)</li>
                    <li>→ Advanced Azure Security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

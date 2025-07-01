
interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior IT Support Engineer / System Administrator",
    company: "Getinge AB",
    period: "2022 - Present",
    location: "Remote",
    achievements: [
      "Remote and onsite support across 14+ U.S. sites with 95%+ SLA compliance",
      "Reduced phishing incidents by 20% through KnowBe4 implementation",
      "Managed AD, Office 365, and SCCM deployments for enterprise security",
      "Implemented MFA and conditional access protocols"
    ],
    technologies: ["ServiceNow", "Active Directory", "Office 365", "SCCM", "KnowBe4", "Mimecast"]
  },
  {
    title: "IT Support Engineer",
    company: "Charles River Development / State Street",
    period: "2021 - 2022",
    location: "Boston, MA",
    achievements: [
      "Deployed 160+ laptops with Windows 10 images via SCCM",
      "Improved deployment efficiency by 25%",
      "Conducted vulnerability scans using Nessus",
      "Supported SOC with incident investigation and documentation"
    ],
    technologies: ["SCCM", "Nessus", "Active Directory", "VPN", "Windows 10"]
  },
  {
    title: "IT Support Specialist",
    company: "Raytheon / DXC Technologies",
    period: "2019 - 2021",
    location: "Boston, MA",
    achievements: [
      "Hardware refresh support for 400+ enterprise devices",
      "Enhanced endpoint hardening using CIS benchmarks",
      "Automated routine tasks with PowerShell scripts",
      "Created troubleshooting guides reducing recurring issues"
    ],
    technologies: ["PowerShell", "CIS Benchmarks", "DRA", "Enterprise Hardware"]
  },
  {
    title: "Online Banking Support Representative",
    company: "Eastern Bank",
    period: "2017 - 2019",
    location: "Boston, MA",
    achievements: [
      "Handled 85+ calls/day during platform migration",
      "Improved security adoption through MFA guidance",
      "Supported iOS/Android and browser troubleshooting",
      "Enhanced fraud prevention practices"
    ],
    technologies: ["Mobile Banking", "MFA", "Fraud Prevention", "Customer Support"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cyber font-bold text-cyber-green mb-4 glitch-text" data-text="MISSION_HISTORY">
            MISSION_HISTORY
          </h2>
          <p className="text-cyber-cyan font-mono">
            12+ years of defending digital infrastructure and securing enterprise environments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-green to-cyber-cyan"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-cyber-green rounded-full border-2 border-cyber-darker animate-glow-pulse"></div>
                
                <div className="cyber-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-cyber text-cyber-green">{exp.title}</h3>
                      <div className="text-cyber-cyan font-mono">{exp.company} | {exp.location}</div>
                    </div>
                    <div className="text-cyber-green font-mono text-sm border border-cyber-green/30 px-3 py-1 rounded">
                      {exp.period}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-cyber-cyan font-mono mb-2">[ACHIEVEMENTS]</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm flex items-start">
                          <span className="text-cyber-green mr-2">→</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-cyber-cyan font-mono mb-2">[TECHNOLOGIES]</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-cyber-green/10 text-cyber-green border border-cyber-green/30 px-2 py-1 rounded font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education section */}
        <div className="mt-16">
          <h3 className="text-2xl font-cyber text-cyber-cyan mb-8 text-center">EDUCATION_&_TRAINING</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="cyber-card">
              <h4 className="text-cyber-green font-cyber mb-2">Bachelor of Science in Cybersecurity</h4>
              <p className="text-cyber-cyan font-mono text-sm">Southern New Hampshire University (SNHU)</p>
            </div>
            <div className="cyber-card">
              <h4 className="text-cyber-green font-cyber mb-2">Associate Degree in Cybersecurity Forensics</h4>
              <p className="text-cyber-cyan font-mono text-sm">Manchester Community College, NH (2017)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

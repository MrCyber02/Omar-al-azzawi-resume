
interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  status: 'Completed' | 'In Progress' | 'Deployed';
  highlight?: boolean;
}

const projects: Project[] = [
  {
    title: "Enterprise Security Infrastructure Overhaul",
    description: "Led comprehensive security upgrade across 14+ sites including MFA implementation, conditional access policies, and endpoint protection deployment. Reduced security incidents by 20% and improved compliance posture.",
    technologies: ["Active Directory", "Office 365", "MFA", "Conditional Access", "KnowBe4", "Mimecast"],
    impact: "20% reduction in phishing incidents",
    status: "Completed",
    highlight: true
  },
  {
    title: "SIEM Implementation & SOC Support",
    description: "Deployed and configured SIEM solutions including Splunk and Azure Sentinel. Developed custom detection rules and supported incident response operations with log analysis and threat hunting.",
    technologies: ["Splunk", "Azure Sentinel", "MITRE ATT&CK", "KQL", "Log Analysis"],
    impact: "Enhanced threat detection capabilities",
    status: "Completed"
  },
  {
    title: "Cloud Security Architecture - AWS & Azure",
    description: "Designed and implemented secure cloud infrastructure using AWS and Azure best practices. Configured IAM policies, network security groups, and monitoring solutions for enterprise workloads.",
    technologies: ["AWS", "Azure", "IAM", "NSGs", "CloudTrail", "Security Center"],
    impact: "Improved cloud security posture",
    status: "Completed"
  },
  {
    title: "Vulnerability Management Program",
    description: "Established comprehensive vulnerability assessment program using Nessus and Qualys. Created automated scanning schedules, risk prioritization matrix, and remediation workflows.",
    technologies: ["Nessus", "Qualys", "PowerShell", "Risk Assessment"],
    impact: "95% vulnerability remediation rate",
    status: "Completed",
    highlight: true
  },
  {
    title: "Endpoint Detection & Response (EDR) Deployment",
    description: "Implemented Microsoft Defender ATP across enterprise environment with custom detection rules and automated response playbooks. Enhanced endpoint visibility and threat response capabilities.",
    technologies: ["Microsoft Defender ATP", "PowerShell", "KQL", "MITRE ATT&CK"],
    impact: "Faster incident response times",
    status: "Completed"
  },
  {
    title: "Zero Trust Architecture Implementation",
    description: "Currently designing and implementing zero trust security model with identity-based access controls, device compliance policies, and network microsegmentation.",
    technologies: ["Azure AD", "Intune", "Conditional Access", "Network Segmentation"],
    impact: "Enhanced security architecture",
    status: "In Progress",
    highlight: true
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div 
      className={`cyber-card relative overflow-hidden ${project.highlight ? 'border-cyber-cyan shadow-lg shadow-cyber-cyan/20' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {project.highlight && (
        <div className="absolute top-0 right-0 bg-cyber-cyan text-black px-2 py-1 text-xs font-mono">
          FEATURED
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-cyber text-cyber-green">{project.title}</h3>
        <span className={`text-xs font-mono px-2 py-1 rounded border ${
          project.status === 'Completed' ? 'text-cyber-green border-cyber-green/30 bg-cyber-green/10' :
          project.status === 'In Progress' ? 'text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/10' :
          'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
        }`}>
          {project.status.toUpperCase()}
        </span>
      </div>

      <p className="text-sm mb-4 leading-relaxed">{project.description}</p>

      <div className="mb-4">
        <div className="text-cyber-cyan font-mono text-xs mb-2">[IMPACT]</div>
        <div className="text-cyber-green text-sm">→ {project.impact}</div>
      </div>

      <div>
        <div className="text-cyber-cyan font-mono text-xs mb-2">[TECHNOLOGIES]</div>
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-xs bg-cyber-green/10 text-cyber-green border border-cyber-green/30 px-2 py-1 rounded font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/10 to-transparent animate-scan-line"></div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cyber font-bold text-cyber-green mb-4 glitch-text" data-text="SECURITY_OPERATIONS">
            SECURITY_OPERATIONS
          </h2>
          <p className="text-cyber-cyan font-mono">
            Critical cybersecurity projects and infrastructure implementations
          </p>
        </div>

        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <span>project_stats.sh</span>
          </div>
          <div className="terminal-body">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyber-green">6+</div>
                <div className="text-xs text-cyber-cyan">MAJOR_PROJECTS</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyber-green">14+</div>
                <div className="text-xs text-cyber-cyan">SITES_SECURED</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyber-green">400+</div>
                <div className="text-xs text-cyber-cyan">DEVICES_DEPLOYED</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyber-green">95%</div>
                <div className="text-xs text-cyber-cyan">SUCCESS_RATE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="cyber-button">
            VIEW_ALL_PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

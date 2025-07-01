import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  status: 'Completed' | 'In Progress' | 'Deployed' | 'Beta';
  highlight?: boolean;
  category: 'Security' | 'Web Development' | 'Automation' | 'AI & Experimental';
  url?: string;
  image?: string;
}

const projects: Project[] = [
  // Security Projects
  {
    title: "Enterprise Security Infrastructure Overhaul",
    description: "Led comprehensive security upgrade across 14+ sites including MFA implementation, conditional access policies, and endpoint protection deployment. Reduced security incidents by 20% and improved compliance posture.",
    technologies: ["Active Directory", "Office 365", "MFA", "Conditional Access", "KnowBe4", "Mimecast"],
    impact: "20% reduction in phishing incidents",
    status: "Completed",
    category: "Security",
    highlight: true
  },
  {
    title: "SIEM Implementation & SOC Support",
    description: "Deployed and configured SIEM solutions including Splunk and Azure Sentinel. Developed custom detection rules and supported incident response operations with log analysis and threat hunting.",
    technologies: ["Splunk", "Azure Sentinel", "MITRE ATT&CK", "KQL", "Log Analysis"],
    impact: "Enhanced threat detection capabilities",
    status: "Completed",
    category: "Security"
  },
  {
    title: "Cloud Security Architecture - AWS & Azure",
    description: "Designed and implemented secure cloud infrastructure using AWS and Azure best practices. Configured IAM policies, network security groups, and monitoring solutions for enterprise workloads.",
    technologies: ["AWS", "Azure", "IAM", "NSGs", "CloudTrail", "Security Center"],
    impact: "Improved cloud security posture",
    status: "Completed",
    category: "Security"
  },
  {
    title: "Vulnerability Management Program",
    description: "Established comprehensive vulnerability assessment program using Nessus and Qualys. Created automated scanning schedules, risk prioritization matrix, and remediation workflows.",
    technologies: ["Nessus", "Qualys", "PowerShell", "Risk Assessment"],
    impact: "95% vulnerability remediation rate",
    status: "Completed",
    category: "Security",
    highlight: true
  },
  {
    title: "Endpoint Detection & Response (EDR) Deployment",
    description: "Implemented Microsoft Defender ATP across enterprise environment with custom detection rules and automated response playbooks. Enhanced endpoint visibility and threat response capabilities.",
    technologies: ["Microsoft Defender ATP", "PowerShell", "KQL", "MITRE ATT&CK"],
    impact: "Faster incident response times",
    status: "Completed",
    category: "Security"
  },
  {
    title: "Zero Trust Architecture Implementation",
    description: "Currently designing and implementing zero trust security model with identity-based access controls, device compliance policies, and network microsegmentation.",
    technologies: ["Azure AD", "Intune", "Conditional Access", "Network Segmentation"],
    impact: "Enhanced security architecture",
    status: "In Progress",
    category: "Security",
    highlight: true
  },
  {
    title: "GNS3 Virtual Lab for Network Security",
    description: "Simulated an enterprise network using GNS3 for penetration testing, firewall rule design, and IDS placement. Created comprehensive security testing environment.",
    technologies: ["GNS3", "Cisco IOS", "Firewalls", "IDS/IPS", "Network Security"],
    impact: "Advanced penetration testing capabilities",
    status: "Completed",
    category: "Security"
  },
  {
    title: "IDS Analysis & CIA Triad Research",
    description: "Wrote academic paper analyzing the CIA triad in relation to intrusion detection system configuration. Focused on confidentiality, integrity, and availability principles.",
    technologies: ["IDS", "Security Research", "Academic Writing", "CIA Triad"],
    impact: "Academic contribution to cybersecurity",
    status: "Completed",
    category: "Security"
  },

  // Web Development Projects
  {
    title: "Manchester Auto - Custom Dealership Platform",
    description: "Custom WordPress car dealership site using Vehica theme with advanced automation for posting listings from Telegram using n8n workflows. Full inventory management system.",
    technologies: ["WordPress", "Vehica Theme", "n8n", "Telegram API", "Custom Fields"],
    impact: "Automated listing management",
    status: "Deployed",
    category: "Web Development",
    url: "manchesterauto1.com",
    highlight: true
  },
  {
    title: "Friends Auto Group LLC",
    description: "WordPress site for local dealership built to highlight inventory and provide easy contact experience. Clean, professional design focused on user experience.",
    technologies: ["WordPress", "Custom Design", "SEO Optimization", "Contact Forms"],
    impact: "Enhanced customer engagement",
    status: "Deployed",
    category: "Web Development",
    url: "friendsautogroupllc.com"
  },
  {
    title: "Hookah Brothers LLC - Modern Lounge Site",
    description: "Built modern lounge website with Middle Eastern theme. Integrated booking system, menu display, and custom branding to reflect cultural aesthetic.",
    technologies: ["WordPress", "Custom Theme", "Booking System", "Menu Integration"],
    impact: "Professional online presence",
    status: "Deployed",
    category: "Web Development"
  },
  {
    title: "EZ MED Transport - Healthcare Transport",
    description: "Family-owned transport business site built with WordPress Betheme. Includes QuickCab booking system, WhatsApp integration, and SEO optimization with Rank Math.",
    technologies: ["WordPress", "Betheme", "QuickCab", "WhatsApp API", "Rank Math SEO"],
    impact: "Streamlined booking process",
    status: "Deployed",
    category: "Web Development"
  },

  // Automation Projects
  {
    title: "Telegram to WordPress Automation",
    description: "Created full n8n workflow to collect car listing information via Telegram bot and automatically post to WordPress, including images and custom fields using Vehica taxonomy.",
    technologies: ["n8n", "Telegram Bot API", "WordPress API", "Vehica", "Custom Fields"],
    impact: "100% automated listing process",
    status: "Deployed",
    category: "Automation",
    highlight: true
  },
  {
    title: "Facebook Marketplace Integration",
    description: "Built workflow to auto-post car listings from WordPress to Facebook Marketplace using Meta Business API. Seamless cross-platform inventory synchronization.",
    technologies: ["Meta Business API", "WordPress", "n8n", "Facebook Marketplace"],
    impact: "Multi-platform listing automation",
    status: "Deployed",
    category: "Automation"
  },
  {
    title: "Lovable UI + n8n Enterprise Integration",
    description: "Built custom backend logic with n8n and Lovable frontend for internal business automation at Getinge, including Active Directory workflows and AI-powered order form assistant.",
    technologies: ["Lovable", "n8n", "Active Directory", "AI Integration", "Custom Workflows"],
    impact: "Enhanced enterprise automation",
    status: "Deployed",
    category: "Automation",
    highlight: true
  },

  // AI & Experimental Projects
  {
    title: "Customer Service AI Assistant (Beta)",
    description: "Developed prototype AI system using Twilio, Deepgram, and Lovable that listens to live calls, extracts order information, and sends real-time feedback to dashboard.",
    technologies: ["Twilio", "Deepgram", "Lovable", "AI/ML", "Real-time Processing"],
    impact: "AI-powered call analysis",
    status: "Beta",
    category: "AI & Experimental",
    highlight: true
  },
  {
    title: "AI Manga to Anime Pipeline",
    description: "Planning and designing AI-based solution to animate manga panels with generated motion and sound. Exploring computer vision and generative AI technologies.",
    technologies: ["AI/ML", "Computer Vision", "Animation", "Generative AI", "Python"],
    impact: "Next-gen content creation",
    status: "In Progress",
    category: "AI & Experimental"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Security': return 'text-red-400 border-red-400/30 bg-red-400/10';
      case 'Web Development': return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
      case 'Automation': return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
      case 'AI & Experimental': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      default: return 'text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/10';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-cyber-green border-cyber-green/30 bg-cyber-green/10';
      case 'Deployed': return 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10';
      case 'In Progress': return 'text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/10';
      case 'Beta': return 'text-orange-400 border-orange-400/30 bg-orange-400/10';
      default: return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
    }
  };

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

      {/* Website Preview Image */}
      {project.image && (
        <div className="mb-4 rounded overflow-hidden border border-cyber-green/30">
          <img 
            src={project.image} 
            alt={`${project.title} preview`}
            className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-cyber text-cyber-green mb-1">{project.title}</h3>
          {project.url && (
            <a 
              href={`https://${project.url}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-cyber-cyan hover:text-cyber-green text-sm font-mono transition-colors group"
            >
              <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
              {project.url}
            </a>
          )}
        </div>
        <div className="flex flex-col gap-1 ml-2">
          <span className={`text-xs font-mono px-2 py-1 rounded border ${getCategoryColor(project.category)}`}>
            {project.category.toUpperCase()}
          </span>
          <span className={`text-xs font-mono px-2 py-1 rounded border ${getStatusColor(project.status)}`}>
            {project.status.toUpperCase()}
          </span>
        </div>
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
  const categories = ['Security', 'Web Development', 'Automation', 'AI & Experimental'];
  
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cyber font-bold text-cyber-green mb-4 glitch-text" data-text="PROJECT_PORTFOLIO">
            PROJECT_PORTFOLIO
          </h2>
          <p className="text-cyber-cyan font-mono">
            Cybersecurity • Web Development • Automation • AI Innovation
          </p>
        </div>

        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <span>project_stats.sh</span>
          </div>
          <div className="terminal-body">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyber-green">{projects.length}+</div>
                <div className="text-xs text-cyber-cyan">TOTAL_PROJECTS</div>
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

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button key={category} className="cyber-button text-sm px-4 py-2">
              {category.replace(' & ', '_&_').toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="cyber-button">
            VIEW_SOURCE_CODE
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

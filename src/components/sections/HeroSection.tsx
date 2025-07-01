
import TypingAnimation from '../TypingAnimation';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // For now, we'll create a mailto link with resume request
    window.location.href = 'mailto:omeralazzawi@yahoo.com?subject=Resume Request&body=Hello Omar, I would like to request your resume.';
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="mb-8">
          <h1 
            className="text-6xl md:text-8xl font-cyber font-bold text-cyber-green mb-4 glitch-text"
            data-text="OMAR AL AZZAWI"
          >
            OMAR AL AZZAWI
          </h1>
          <div className="text-xl md:text-2xl text-cyber-cyan font-mono mb-6">
            <TypingAnimation 
              text="SECURITY_ANALYST | CLOUD_ADMIN | SYSTEMS_ADMINISTRATOR" 
              speed={50}
              delay={1000}
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="terminal-window mb-8">
            <div className="terminal-header">
              <span>system_info.exe</span>
            </div>
            <div className="terminal-body text-left">
              <div className="space-y-1">
                <div><span className="text-cyber-cyan">user@cybersec:</span><span className="text-white">~$ whoami</span></div>
                <div className="text-cyber-green">
                  <TypingAnimation 
                    text="Technical professional with 12+ years in cybersecurity & IT operations"
                    delay={2000}
                    speed={30}
                  />
                </div>
                <div><span className="text-cyber-cyan">user@cybersec:</span><span className="text-white">~$ cat skills.txt</span></div>
                <div className="text-cyber-green">
                  <TypingAnimation 
                    text="CompTIA Security+ | CySA+ | AWS Security | Azure | SIEM | Endpoint Protection"
                    delay={4000}
                    speed={20}
                  />
                </div>
                <div><span className="text-cyber-cyan">user@cybersec:</span><span className="text-white">~$ location</span></div>
                <div className="text-cyber-green">
                  <TypingAnimation 
                    text="Manchester, NH | Remote Work Specialist"
                    delay={6000}
                    speed={30}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className="cyber-button"
              onClick={() => scrollToSection('projects')}
            >
              VIEW_PROJECTS
            </button>
            <button 
              className="cyber-button"
              onClick={handleDownloadResume}
            >
              DOWNLOAD_RESUME
            </button>
            <button 
              className="cyber-button"
              onClick={() => scrollToSection('contact')}
            >
              CONTACT_ME
            </button>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-8 text-center">
          <div className="cyber-card">
            <div className="text-2xl font-bold text-cyber-green">12+</div>
            <div className="text-sm text-cyber-cyan">YEARS_EXP</div>
          </div>
          <div className="cyber-card">
            <div className="text-2xl font-bold text-cyber-green">95%</div>
            <div className="text-sm text-cyber-cyan">SLA_RATE</div>
          </div>
          <div className="cyber-card">
            <div className="text-2xl font-bold text-cyber-green">5+</div>
            <div className="text-sm text-cyber-cyan">CERTS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

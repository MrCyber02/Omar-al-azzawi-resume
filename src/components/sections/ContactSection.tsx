
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cyber font-bold text-cyber-green mb-4 glitch-text" data-text="ESTABLISH_CONNECTION">
            ESTABLISH_CONNECTION
          </h2>
          <p className="text-cyber-cyan font-mono">
            Ready to secure your infrastructure? Let's discuss your cybersecurity needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="terminal-window mb-8">
              <div className="terminal-header">
                <span>contact_info.json</span>
              </div>
              <div className="terminal-body">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-cyber-cyan w-16">name:</span>
                    <span className="text-cyber-green">"Omar Al Azzawi"</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyber-cyan w-16">role:</span>
                    <span className="text-cyber-green">"Security Analyst | Cloud Admin"</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyber-cyan w-16">email:</span>
                    <span className="text-cyber-green">"omeralazzawi@yahoo.com"</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyber-cyan w-16">phone:</span>
                    <span className="text-cyber-green">"(781) 330-4936"</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyber-cyan w-16">location:</span>
                    <span className="text-cyber-green">"Manchester, NH | Remote"</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyber-cyan w-16">linkedin:</span>
                    <span className="text-cyber-green">"linkedin.com/in/omaralazzawi"</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyber-cyan w-16">languages:</span>
                    <span className="text-cyber-green">["English", "Arabic"]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="space-y-4">
              <div className="cyber-card">
                <h3 className="text-cyber-green font-cyber mb-2">AVAILABILITY_STATUS</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
                  <span className="text-sm">Open to remote opportunities</span>
                </div>
              </div>

              <div className="cyber-card">
                <h3 className="text-cyber-green font-cyber mb-2">RESPONSE_TIME</h3>
                <div className="text-sm">
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span className="text-cyber-cyan">&lt; 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LinkedIn:</span>
                    <span className="text-cyber-cyan">&lt; 12 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="terminal-window">
              <div className="terminal-header">
                <span>secure_message.exe</span>
              </div>
              <div className="terminal-body">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-cyber-cyan font-mono text-sm mb-2">
                      sender_name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-cyber-green/30 rounded px-3 py-2 text-cyber-green font-mono focus:border-cyber-green focus:outline-none"
                      placeholder="Enter your name..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-cyber-cyan font-mono text-sm mb-2">
                      sender_email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-cyber-green/30 rounded px-3 py-2 text-cyber-green font-mono focus:border-cyber-green focus:outline-none"
                      placeholder="your.email@domain.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-cyber-cyan font-mono text-sm mb-2">
                      message_type:
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-cyber-darker border border-cyber-green/30 rounded px-3 py-2 text-cyber-green font-mono focus:border-cyber-green focus:outline-none"
                      required
                    >
                      <option value="">Select message type...</option>
                      <option value="job-opportunity">Job Opportunity</option>
                      <option value="consultation">Security Consultation</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-cyber-cyan font-mono text-sm mb-2">
                      message_body:
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-transparent border border-cyber-green/30 rounded px-3 py-2 text-cyber-green font-mono focus:border-cyber-green focus:outline-none resize-none"
                      placeholder="Enter your message..."
                      required
                    />
                  </div>

                  <button type="submit" className="cyber-button w-full">
                    TRANSMIT_MESSAGE
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

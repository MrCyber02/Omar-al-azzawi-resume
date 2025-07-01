
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import TypingAnimation from './TypingAnimation';

interface AccessTerminalProps {
  onAccessGranted: () => void;
}

const AccessTerminal = ({ onAccessGranted }: AccessTerminalProps) => {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showInput, setShowInput] = useState(false);

  const steps = [
    "INITIALIZING SECURE CONNECTION...",
    "ESTABLISHING ENCRYPTED TUNNEL...",
    "SCANNING FOR VULNERABILITIES...",
    "AUTHENTICATION REQUIRED",
  ];

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (input.toLowerCase() === 'omar' || input.toLowerCase() === 'access' || input.toLowerCase() === 'admin') {
        setStep(4);
        setTimeout(() => {
          onAccessGranted();
        }, 2000);
      } else {
        setAttempts(attempts + 1);
        setInput('');
        if (attempts >= 2) {
          setStep(4);
          setTimeout(() => {
            onAccessGranted();
          }, 2000);
        }
      }
    }
  };

  useEffect(() => {
    if (step < 3) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (step === 3) {
      const timer = setTimeout(() => {
        setShowInput(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="fixed inset-0 bg-cyber-darker flex items-center justify-center z-50">
      <Card className="terminal-window w-full max-w-2xl mx-4">
        <div className="terminal-header">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="font-mono text-sm">SECURE_TERMINAL_v2.1</span>
        </div>
        <div className="terminal-body min-h-[300px]">
          <div className="space-y-2">
            <div className="text-cyber-cyan">
              ╔══════════════════════════════════════╗
            </div>
            <div className="text-cyber-cyan">
              ║    CYBER SECURITY PORTFOLIO ACCESS   ║
            </div>
            <div className="text-cyber-cyan">
              ╚══════════════════════════════════════╝
            </div>
            <br />
            
            {steps.slice(0, step + 1).map((stepText, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-cyber-green">[{index + 1}]</span>
                {index === step ? (
                  <TypingAnimation 
                    text={stepText} 
                    speed={30}
                    onComplete={() => {
                      if (index === 3) setShowInput(true);
                    }}
                  />
                ) : (
                  <span>{stepText}</span>
                )}
              </div>
            ))}

            {step === 4 && (
              <>
                <div className="text-cyber-green">
                  <TypingAnimation text="ACCESS GRANTED! WELCOME, OMAR AL AZZAWI" speed={30} />
                </div>
                <div className="text-cyber-cyan">
                  <TypingAnimation text="Loading portfolio interface..." delay={1000} speed={50} />
                </div>
              </>
            )}

            {showInput && step === 3 && (
              <div className="mt-4">
                <div className="mb-2">
                  <span className="text-cyber-green">Enter access code: </span>
                  <span className="text-gray-400 text-sm">(hint: owner's first name)</span>
                </div>
                <div className="flex">
                  <span className="text-cyber-green">$ </span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-transparent border-none outline-none text-cyber-green font-mono flex-1 ml-2"
                    placeholder="Type here..."
                    autoFocus
                  />
                </div>
                {attempts > 0 && (
                  <div className="text-red-400 mt-2">
                    ACCESS DENIED. Attempts: {attempts}/3
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AccessTerminal;


import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypingAnimation = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = '',
  onComplete 
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="terminal-cursor"></span>}
    </span>
  );
};

export default TypingAnimation;

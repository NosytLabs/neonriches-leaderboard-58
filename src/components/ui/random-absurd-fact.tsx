
import React, { useState, useEffect } from 'react';

interface RandomAbsurdFactProps {
  facts?: string[];
  interval?: number;
  className?: string;
  variant?: string;
  refreshInterval?: number;
  onClose?: () => void;
}

/**
 * Component that displays a random absurd fact and cycles through them
 */
export const RandomAbsurdFact: React.FC<RandomAbsurdFactProps> = ({
  facts = [],
  interval = 10000,
  className = '',
  variant = 'default',
  refreshInterval,
  onClose,
}) => {
  const [currentFact, setCurrentFact] = useState<string>('');
  const [factIndex, setFactIndex] = useState<number>(0);

  useEffect(() => {
    if (!facts || facts.length === 0) return;
    
    // Set initial fact
    setCurrentFact(facts[0]);
    
    // Set up interval to change facts
    const timer = setInterval(() => {
      setFactIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % facts.length;
        setCurrentFact(facts[newIndex]);
        return newIndex;
      });
    }, refreshInterval || interval);
    
    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, [facts, interval, refreshInterval]);

  if (!facts || facts.length === 0) {
    return null;
  }

  return (
    <div className={`italic text-sm ${className} ${variant !== 'default' ? `variant-${variant}` : ''}`}>
      {onClose && (
        <button 
          onClick={onClose}
          className="ml-2 text-white/50 hover:text-white/80 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
      )}
      "{currentFact}"
    </div>
  );
};

export default RandomAbsurdFact;

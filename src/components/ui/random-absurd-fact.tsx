
import React, { useState, useEffect } from 'react';

interface RandomAbsurdFactProps {
  facts: string[];
  interval?: number;
  className?: string;
}

/**
 * Component that displays a random absurd fact and cycles through them
 */
export const RandomAbsurdFact: React.FC<RandomAbsurdFactProps> = ({
  facts,
  interval = 10000,
  className = '',
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
    }, interval);
    
    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, [facts, interval]);

  if (!facts || facts.length === 0) {
    return null;
  }

  return (
    <div className={`italic text-sm ${className}`}>
      "{currentFact}"
    </div>
  );
};

export default RandomAbsurdFact;

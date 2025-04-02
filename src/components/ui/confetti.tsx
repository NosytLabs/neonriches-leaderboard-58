
import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

interface ConfettiProps {
  active?: boolean;
  duration?: number;
  colors?: string[];
  particleCount?: number;
}

const Confetti: React.FC<ConfettiProps> = ({
  active = true,
  duration = 3000,
  colors = ['#ffd700', '#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00'],
  particleCount = 200
}) => {
  const [isActive, setIsActive] = useState(active);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Set isActive based on prop
    setIsActive(active);
    
    // Update dimensions on mount
    const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    // Set timer to hide confetti
    if (active && duration) {
      const timer = setTimeout(() => {
        setIsActive(false);
      }, duration);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', updateDimensions);
      };
    }
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [active, duration]);

  if (!isActive) return null;

  return (
    <ReactConfetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={particleCount}
      colors={colors}
      confettiSource={{
        x: width / 2,
        y: height / 3,
        w: 0,
        h: 0
      }}
    />
  );
};

export default Confetti;
export { Confetti };

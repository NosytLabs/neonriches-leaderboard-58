
import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

interface ConfettiProps {
  active?: boolean;
  duration?: number;
  pieces?: number;
  colors?: string[];
  onComplete?: () => void;
}

const Confetti: React.FC<ConfettiProps> = ({
  active = true,
  duration = 5000,
  pieces = 200,
  colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'],
  onComplete
}) => {
  const [isActive, setIsActive] = useState(active);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    // Set isActive to the initial active value
    setIsActive(active);

    // Setup auto-disable timer if duration is provided
    if (active && duration > 0) {
      const timer = setTimeout(() => {
        setIsActive(false);
        if (onComplete) onComplete();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [active, duration, onComplete]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set initial window size
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isActive) return null;

  return (
    <ReactConfetti
      width={windowSize.width}
      height={windowSize.height}
      recycle={false}
      numberOfPieces={pieces}
      colors={colors}
      confettiSource={{
        x: windowSize.width / 2,
        y: windowSize.height / 10,
        w: 0,
        h: 0
      }}
      tweenDuration={duration * 0.5}
      onConfettiComplete={() => {
        setIsActive(false);
        if (onComplete) onComplete();
      }}
    />
  );
};

export default Confetti;


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroBackgroundProps {
  isVisible?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'gold' | 'purple' | 'blue' | 'red' | 'green';
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  isVisible = true,
  intensity = 'medium',
  color = 'gold'
}) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    rotation: number;
    duration: number;
    delay: number;
  }>>([]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const particleCount = intensity === 'low' ? 15 : intensity === 'medium' ? 25 : 40;
    
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      rotation: Math.random() * 360,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10
    }));
    
    setParticles(newParticles);
  }, [isVisible, intensity]);
  
  if (!isVisible) return null;
  
  // Determine color values based on the color prop
  const getColorClass = () => {
    switch (color) {
      case 'purple':
        return 'from-purple-900/40 via-purple-800/10 to-purple-900/40';
      case 'blue':
        return 'from-blue-900/40 via-blue-800/10 to-blue-900/40';
      case 'red':
        return 'from-red-900/40 via-red-800/10 to-red-900/40';
      case 'green':
        return 'from-green-900/40 via-green-800/10 to-green-900/40';
      case 'gold':
      default:
        return 'from-amber-900/40 via-amber-800/10 to-amber-900/40';
    }
  };
  
  const getParticleColor = () => {
    switch (color) {
      case 'purple':
        return 'bg-purple-400';
      case 'blue':
        return 'bg-blue-400';
      case 'red':
        return 'bg-red-400';
      case 'green':
        return 'bg-green-400';
      case 'gold':
      default:
        return 'bg-royal-gold';
    }
  };
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${getColorClass()} opacity-30`}></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-10"></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-80"></div>
      
      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${getParticleColor()} opacity-20`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100],
              x: [0, particle.id % 2 === 0 ? 20 : -20],
              opacity: [0, 0.3, 0],
              rotate: [0, particle.rotation],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Royal crown silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl">
          <path d="M20,75 L30,40 L50,60 L70,40 L80,75 L20,75 Z M40,35 L45,25 L50,35 L55,25 L60,35 M30,40 L40,35 M60,35 L70,40" stroke="currentColor" strokeWidth="2" />
          <circle cx="30" cy="40" r="3" fill="currentColor" />
          <circle cx="50" cy="60" r="3" fill="currentColor" />
          <circle cx="70" cy="40" r="3" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default HeroBackground;

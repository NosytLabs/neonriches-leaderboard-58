
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ParticleProps = {
  intensity?: 'low' | 'medium' | 'high';
  color?: 'gold' | 'purple' | 'blue' | 'red' | 'green';
  animated?: boolean;
  className?: string;
};

const HeroBackground: React.FC<ParticleProps> = ({ 
  intensity = 'medium', 
  color = 'gold',
  animated = true,
  className 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Number of particles based on intensity
  const particleCount = {
    low: 30,
    medium: 60,
    high: 90
  }[intensity];
  
  // Particle color based on color prop
  const particleColor = {
    gold: 'from-amber-300 to-yellow-500',
    purple: 'from-purple-400 to-violet-600',
    blue: 'from-blue-400 to-indigo-600',
    red: 'from-red-400 to-rose-600',
    green: 'from-emerald-400 to-green-600',
  }[color];
  
  // Generate particles
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const size = Math.random() * 4 + 1;
    const opacity = Math.random() * 0.4 + 0.1;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    
    return {
      id: i,
      size,
      opacity,
      duration,
      delay,
      x: Math.random() * 100,
      y: Math.random() * 100,
    };
  });
  
  // Add floating coins animation
  useEffect(() => {
    if (!animated || !containerRef.current) return;
    
    // Animation logic could be added here if needed
    
    return () => {
      // Cleanup if needed
    };
  }, [animated]);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden z-0",
        className
      )}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-10"></div>
      
      {/* Dark radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient"></div>
      
      {/* Particle elements */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={cn(
            "absolute rounded-full bg-gradient-to-br",
            particleColor
          )}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={animated ? {
            y: [0, -50, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          } : {}}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Larger glowing orbs for depth */}
      {intensity === 'high' && (
        <>
          <div className={cn(
            "absolute w-64 h-64 rounded-full bg-gradient-to-br opacity-10 blur-3xl",
            particleColor,
            color === 'gold' ? "top-1/4 -left-20" : "top-1/2 -left-20"
          )}/>
          <div className={cn(
            "absolute w-80 h-80 rounded-full bg-gradient-to-br opacity-5 blur-3xl",
            particleColor,
            color === 'gold' ? "bottom-1/4 -right-20" : "bottom-1/3 -right-20"
          )}/>
        </>
      )}
    </div>
  );
};

export default HeroBackground;

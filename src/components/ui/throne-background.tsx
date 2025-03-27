
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ThroneBackgroundProps {
  variant?: 'default' | 'royal' | 'dark' | 'light' | 'purple';
  density?: 'low' | 'medium' | 'high';
  animate?: boolean;
  particles?: boolean;
  className?: string;
}

const ThroneBackground: React.FC<ThroneBackgroundProps> = ({
  variant = 'default',
  density = 'medium',
  animate = false,
  particles = false,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add visibility detection to only animate when in viewport
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!particles || !containerRef.current || !isVisible) return;
    
    const container = containerRef.current;
    // Reduce particle count to improve performance
    const particleCount = density === 'high' ? 20 : density === 'medium' ? 10 : 5;
    
    const existingParticles = container.querySelectorAll('.floating-particle');
    existingParticles.forEach(particle => particle.remove());
    
    // Limit particles or disable on low-end devices
    const isLowEndDevice = window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency <= 2;
    
    if (isLowEndDevice && density === 'high') {
      // Only create a few particles on low-end devices
      for (let i = 0; i < 5; i++) {
        createParticle(container, variant);
      }
    } else if (!isLowEndDevice) {
      for (let i = 0; i < particleCount; i++) {
        createParticle(container, variant);
      }
    }
    
    // Clean up particles when component unmounts
    return () => {
      const currentParticles = container.querySelectorAll('.floating-particle');
      currentParticles.forEach(particle => particle.remove());
    };
  }, [particles, density, variant, isVisible]);
  
  const createParticle = (container: HTMLDivElement, variant: string) => {
    const particle = document.createElement('div');
    particle.className = 'floating-particle absolute rounded-full opacity-0 pointer-events-none';
    
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    if (variant === 'royal') {
      const colors = ['#D4AF37', '#8B0000', '#000080'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    } else if (variant === 'dark') {
      particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
    } else if (variant === 'light') {
      particle.style.backgroundColor = `rgba(0, 0, 0, ${Math.random() * 0.2 + 0.1})`;
    } else if (variant === 'purple') {
      const opacity = Math.random() * 0.2 + 0.1;
      particle.style.backgroundColor = `rgba(128, 0, 128, ${opacity})`;
    } else {
      const opacity = Math.random() * 0.2 + 0.1;
      if (Math.random() > 0.6) {
        particle.style.backgroundColor = `rgba(212, 175, 55, ${opacity})`;
      } else if (Math.random() > 0.3) {
        particle.style.backgroundColor = `rgba(139, 0, 0, ${opacity})`;
      } else {
        particle.style.backgroundColor = `rgba(0, 0, 128, ${opacity})`;
      }
    }
    
    // Add will-change property for better performance
    particle.style.willChange = 'transform, opacity';
    
    const duration = Math.random() * 10 + 5;
    particle.style.animation = `float ${duration}s ease-in forwards`;
    
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(particle);
  };
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'royal':
        return 'bg-gradient-to-b from-royal-crimson/5 via-royal-gold/5 to-royal-navy/5';
      case 'dark':
        return 'bg-gradient-to-b from-black/20 via-black/10 to-transparent';
      case 'light':
        return 'bg-gradient-to-b from-white/10 via-white/5 to-transparent';
      case 'purple':
        return 'bg-gradient-to-b from-royal-purple/10 via-royal-velvet/5 to-transparent';
      default:
        return 'throne-bg-enhanced';
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        'absolute inset-0 w-full h-full overflow-hidden',
        getVariantClasses(),
        animate && isVisible && 'animate-pulse-slow',
        className
      )}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-royal-crimson/10 filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-royal-gold/10 filter blur-[120px]"></div>
        <div className="absolute top-2/3 left-2/3 w-72 h-72 rounded-full bg-royal-navy/10 filter blur-[80px]"></div>
      </div>
    </div>
  );
};

export default ThroneBackground;

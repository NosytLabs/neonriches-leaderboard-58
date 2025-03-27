
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
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  
  // Detect low-end devices once on mount
  useEffect(() => {
    const checkDeviceCapability = () => {
      // Check if it's a low-end device
      const isLow = window.navigator.hardwareConcurrency 
        ? window.navigator.hardwareConcurrency <= 2
        : false;
      
      setIsLowEndDevice(isLow);
    };
    
    checkDeviceCapability();
  }, []);
  
  // Add visibility detection using Intersection Observer
  useEffect(() => {
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
  
  // Create particles only when component is visible and if device can handle it
  useEffect(() => {
    // Only create particles if they're enabled and component is visible
    if (!particles || !containerRef.current || !isVisible) return;
    
    // Skip particles on low-end devices
    if (isLowEndDevice && density !== 'low') return;
    
    const container = containerRef.current;
    
    // Significantly reduce particle count
    const particleCount = isLowEndDevice 
      ? 3 
      : (density === 'high' ? 8 : density === 'medium' ? 4 : 2);
    
    // Create list of particle elements
    const particleElements: HTMLDivElement[] = [];
    
    // Batch particle creation in a document fragment for better performance
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle absolute rounded-full opacity-0 pointer-events-none';
      
      // Create fewer, larger particles that are more visible
      const size = Math.random() * 6 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Position randomly but avoid edges
      particle.style.left = `${Math.random() * 80 + 10}%`;
      particle.style.top = `${Math.random() * 80 + 10}%`;
      
      // Apply colors based on variant
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
      
      // Use transform and opacity instead of left/top for better performance
      particle.style.willChange = 'transform, opacity';
      
      // Use longer animation duration to reduce CPU usage
      const duration = Math.random() * 10 + 10;
      particle.style.animation = `float ${duration}s ease-in forwards`;
      
      // Stagger animation starts to spread out the rendering load
      particle.style.animationDelay = `${Math.random() * 10}s`;
      
      fragment.appendChild(particle);
      particleElements.push(particle);
    }
    
    container.appendChild(fragment);
    
    // Clean up particles when component unmounts or becomes invisible
    return () => {
      particleElements.forEach(particle => {
        if (particle.parentNode === container) {
          container.removeChild(particle);
        }
      });
    };
  }, [particles, density, variant, isVisible, isLowEndDevice]);
  
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
        animate && isVisible && !isLowEndDevice && 'animate-pulse-slow',
        className
      )}
    >
      {/* Reduced number of gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-royal-crimson/5 filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-royal-gold/5 filter blur-[120px]"></div>
      </div>
    </div>
  );
};

export default ThroneBackground;

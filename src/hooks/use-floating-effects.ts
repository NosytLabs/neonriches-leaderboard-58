import { useEffect, useState, useRef } from 'react';

interface FloatingEffectsOptions {
  containerRef: React.RefObject<HTMLElement>;
  enabled?: boolean;
  frequency?: number;
  density?: 'low' | 'medium' | 'high';
  duration?: number;
  minDelay?: number;
  maxDelay?: number;
  colors?: string[];
  sizes?: number[];
  animation?: 'float' | 'sparkle' | 'dust' | 'gold-dust';
}

export function useFloatingEffects({
  containerRef,
  enabled = true,
  frequency = 0.5,
  density = 'medium',
  duration = 5000,
  minDelay = 1000,
  maxDelay = 3000,
  colors = ['#D4AF37', '#8B0000', '#000080'], // Default royal colors
  sizes = [4, 6, 8], // Default sizes in pixels
  animation = 'float'
}: FloatingEffectsOptions) {
  const [isVisible, setIsVisible] = useState(false);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  
  // Detect when component is visible
  useEffect(() => {
    if (!containerRef.current || !enabled) return;
    
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
  }, [containerRef, enabled]);

  // Create floating particles
  useEffect(() => {
    if (!containerRef.current || !isVisible || !enabled) return;
    
    // Generate particle count based on density
    const particleCount = density === 'high' ? 15 : density === 'medium' ? 8 : 4;
    
    // Function to create a single particle
    const createParticle = () => {
      if (!containerRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = `floating-particle absolute rounded-full pointer-events-none`;
      
      // Set random size
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Set random position
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      particle.style.left = `${Math.random() * containerWidth}px`;
      particle.style.bottom = `0px`;
      
      // Set random color
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      
      // Set animation
      const actualDuration = duration + (Math.random() * 2000);
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      
      switch (animation) {
        case 'float':
          particle.style.animation = `float ${actualDuration / 1000}s ease-in-out ${delay / 1000}s forwards`;
          break;
        case 'sparkle':
          particle.style.animation = `sparkle ${actualDuration / 1000}s ease-in-out ${delay / 1000}s forwards`;
          break;
        case 'dust':
          particle.style.animation = `gold-dust ${actualDuration / 1000}s ease-in-out ${delay / 1000}s forwards`;
          break;
        case 'gold-dust':
          particle.style.animation = `gold-dust ${actualDuration / 1000}s ease-in-out ${delay / 1000}s forwards`;
          particle.style.backgroundColor = '#D4AF37';
          break;
      }
      
      // Add to document and keep reference
      containerRef.current.appendChild(particle);
      particlesRef.current.push(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
          particlesRef.current = particlesRef.current.filter(p => p !== particle);
        }
      }, actualDuration + delay);
    };
    
    // Create initial batch of particles
    for (let i = 0; i < particleCount / 3; i++) {
      createParticle();
    }
    
    // Create new particles at regular intervals
    const particleInterval = setInterval(() => {
      if (Math.random() < frequency) {
        createParticle();
      }
    }, 1000);
    
    return () => {
      clearInterval(particleInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      // Clean up all particles
      particlesRef.current.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
      particlesRef.current = [];
    };
  }, [isVisible, enabled, animation, colors, sizes, density, duration, frequency, minDelay, maxDelay]);
  
  return {
    isVisible,
    stopEffects: () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      particlesRef.current.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
      particlesRef.current = [];
    }
  };
}

export default useFloatingEffects;

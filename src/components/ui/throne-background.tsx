
import React, { useEffect, useRef } from 'react';

interface ThroneBackgroundProps {
  variant?: 'default' | 'dark' | 'light' | 'royal';
  density?: 'low' | 'medium' | 'high';
  animate?: boolean;
  particles?: boolean;
}

const ThroneBackground: React.FC<ThroneBackgroundProps> = ({
  variant = 'default',
  density = 'medium',
  animate = true,
  particles = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current || !particles) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    // Particle settings based on density
    const particleCount = density === 'low' ? 20 : density === 'medium' ? 40 : 60;
    
    // Color based on variant
    const colorScheme = {
      default: {
        primary: '#D4AF37',
        secondary: '#9B2335',
        tertiary: '#1F4788',
      },
      dark: {
        primary: '#222222',
        secondary: '#333333',
        tertiary: '#444444',
      },
      light: {
        primary: '#DDDDDD',
        secondary: '#CCCCCC',
        tertiary: '#BBBBBB',
      },
      royal: {
        primary: '#D4AF37',
        secondary: '#9B2335',
        tertiary: '#7851A9',
      }
    };
    
    const colors = colorScheme[variant];
    
    // Create particles
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      color: [colors.primary, colors.secondary, colors.tertiary][Math.floor(Math.random() * 3)],
      speed: Math.random() * 0.5 + 0.1,
      direction: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    
    let animationFrame: number;
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        if (animate) {
          // Move particles
          particle.x += Math.cos(particle.direction) * particle.speed;
          particle.y += Math.sin(particle.direction) * particle.speed;
          
          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }
      });
      
      animationFrame = requestAnimationFrame(draw);
    };
    
    animationFrame = requestAnimationFrame(draw);
    
    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [particles, animate, variant, density]);
  
  // Background gradient based on variant
  const getBackgroundClass = () => {
    switch (variant) {
      case 'dark':
        return 'from-[#0D0D20] via-[#141428] to-[#1D1E33]';
      case 'light':
        return 'from-[#F5F5F8] via-[#EAEAEF] to-[#DEDEE8]';
      case 'royal':
        return 'from-[#2D1E30] via-[#1F2136] to-[#11121D]';
      default:
        return 'from-[#0D0D20] via-[#141428] to-[#1D1E33]';
    }
  };
  
  return (
    <div className={`absolute inset-0 z-0 bg-gradient-to-b ${getBackgroundClass()}`}>
      {particles && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
          aria-hidden="true"
        />
      )}
      
      {/* Medieval pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5 bg-repeat" 
        style={{ backgroundImage: 'url("/throne-assets/medieval-patterns.svg")', backgroundSize: '120px 120px' }}
      ></div>
    </div>
  );
};

export default ThroneBackground;

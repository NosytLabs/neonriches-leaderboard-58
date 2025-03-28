
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ThroneBackgroundProps {
  variant?: 'royal' | 'crimson' | 'navy' | 'purple';
  particles?: boolean;
  animated?: boolean;
}

const ThroneBackground: React.FC<ThroneBackgroundProps> = ({ 
  variant = 'royal', 
  particles = false,
  animated = true 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Get background colors based on variant
  const getBackgroundStyles = () => {
    switch (variant) {
      case 'crimson':
        return 'from-royal-crimson/40 via-black to-black';
      case 'navy':
        return 'from-royal-navy/40 via-black to-black';
      case 'purple':
        return 'from-purple-900/40 via-black to-black';
      case 'royal':
      default:
        return 'from-royal-gold/20 via-black to-black';
    }
  };
  
  // Canvas particle animation effect
  useEffect(() => {
    if (!particles || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        
        // Set color based on variant
        switch (variant) {
          case 'crimson':
            this.color = `rgba(220, 38, 38, ${Math.random() * 0.5 + 0.1})`;
            break;
          case 'navy':
            this.color = `rgba(30, 58, 138, ${Math.random() * 0.5 + 0.1})`;
            break;
          case 'purple':
            this.color = `rgba(126, 34, 206, ${Math.random() * 0.5 + 0.1})`;
            break;
          case 'royal':
          default:
            this.color = `rgba(212, 175, 55, ${Math.random() * 0.5 + 0.1})`;
            break;
        }
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create particles
    const particlesArray: Particle[] = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
    
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [particles, variant]);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${getBackgroundStyles()}`} />
      
      {/* Fancy pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNTAuNDkxIDQxLjczNWMtMS4zMjkgMC0yLjQtMS4wNzEtMi40LTIuNHMxLjA3MS0yLjQgMi40LTIuNCAyLjQgMS4wNzEgMi40IDIuNC0xLjA3MSAyLjQtMi40IDIuNHptMC05LjZjLTEuMzI5IDAtMi40LTEuMDcxLTIuNC0yLjRzMS4wNzEtMi40IDIuNC0yLjQgMi40IDEuMDcxIDIuNCAyLjQtMS4wNzEgMi40LTIuNCAyLjR6bTAgMTkuMmMtMS4zMjkgMC0yLjQtMS4wNzEtMi40LTIuNHMxLjA3MS0yLjQgMi40LTIuNCAyLjQgMS4wNzEgMi40IDIuNC0xLjA3MSAyLjQtMi40IDIuNHptLTkuNi05LjZjLTEuMzI5IDAtMi40LTEuMDcxLTIuNC0yLjRzMS4wNzEtMi40IDIuNC0yLjQgMi40IDEuMDcxIDIuNCAyLjQtMS4wNzEgMi40LTIuNCAyLjR6bS05LjYgMGMtMS4zMjkgMC0yLjQtMS4wNzEtMi40LTIuNHMxLjA3MS0yLjQgMi40LTIuNCAyLjQgMS4wNzEgMi40IDIuNC0xLjA3MSAyLjQtMi40IDIuNHptLTkuNiAwYy0xLjMyOSAwLTIuNC0xLjA3MS0yLjQtMi40czEuMDcxLTIuNCAyLjQtMi40IDIuNCAxLjA3MSAyLjQgMi40LTEuMDcxIDIuNC0yLjQgMi40eiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==')" }}></div>
      
      {/* Animated elements */}
      {animated && (
        <>
          <motion.div 
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-royal-gold/5 filter blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, 30, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-royal-gold/5 filter blur-3xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, 40, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-10 left-1/4 w-72 h-72 rounded-full bg-royal-gold/5 filter blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </>
      )}
      
      {/* Particles canvas */}
      {particles && (
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0"
          style={{ pointerEvents: 'none' }}
        />
      )}
    </div>
  );
};

export default ThroneBackground;

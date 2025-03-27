
import React, { useEffect, useRef } from 'react';

interface ThroneBackgroundProps {
  variant?: 'default' | 'blue' | 'gold' | 'purple' | 'royal';
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
    if (!particles || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Define colors based on variant
    let particleColors: string[] = [];
    let bgGradient: { start: string, mid: string, end: string } = { 
      start: '#0D0D20', 
      mid: '#111124', 
      end: '#0F0F1F' 
    };
    
    switch(variant) {
      case 'blue':
        particleColors = ['#3498db', '#2980b9', '#1f5a89', '#154360'];
        bgGradient = { start: '#0D1520', mid: '#111824', end: '#0F131F' };
        break;
      case 'gold':
        particleColors = ['#D4AF37', '#FFD700', '#FFC125', '#FFBA00'];
        bgGradient = { start: '#20190D', mid: '#24201A', end: '#1F1A0F' };
        break;
      case 'purple':
        particleColors = ['#8E44AD', '#5B2C6F', '#4A235A', '#6C3483'];
        bgGradient = { start: '#140D20', mid: '#191124', end: '#170F1F' };
        break;
      case 'royal':
        particleColors = ['#8B0000', '#D4AF37', '#000080', '#4B0082'];
        bgGradient = { start: '#0D0D20', mid: '#141428', end: '#0F0F1F' };
        break;
      default:
        particleColors = ['#8B0000', '#D4AF37', '#000080', '#4B0082'];
        bgGradient = { start: '#0D0D20', mid: '#141428', end: '#0F0F1F' };
    }
    
    // Determine particle count based on density
    let particleCount = 0;
    switch(density) {
      case 'low':
        particleCount = 30;
        break;
      case 'medium':
        particleCount = 60;
        break;
      case 'high':
        particleCount = 100;
        break;
      default:
        particleCount = 60;
    }
    
    // Create background gradient
    const createBackgroundGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, bgGradient.start);
      gradient.addColorStop(0.5, bgGradient.mid);
      gradient.addColorStop(1, bgGradient.end);
      return gradient;
    };
    
    // Draw the background
    const drawBackground = () => {
      ctx.fillStyle = createBackgroundGradient();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add radial gradients for depth
      const radialGradient1 = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.3, 0,
        canvas.width * 0.2, canvas.height * 0.3, canvas.width * 0.5
      );
      
      if (variant === 'royal') {
        radialGradient1.addColorStop(0, 'rgba(139, 0, 0, 0.08)');
        radialGradient1.addColorStop(1, 'rgba(139, 0, 0, 0)');
      } else if (variant === 'gold') {
        radialGradient1.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
        radialGradient1.addColorStop(1, 'rgba(212, 175, 55, 0)');
      } else if (variant === 'blue') {
        radialGradient1.addColorStop(0, 'rgba(0, 0, 128, 0.08)');
        radialGradient1.addColorStop(1, 'rgba(0, 0, 128, 0)');
      } else {
        radialGradient1.addColorStop(0, 'rgba(75, 0, 130, 0.08)');
        radialGradient1.addColorStop(1, 'rgba(75, 0, 130, 0)');
      }
      
      ctx.fillStyle = radialGradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add second radial gradient
      const radialGradient2 = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.5, 0,
        canvas.width * 0.8, canvas.height * 0.5, canvas.width * 0.6
      );
      
      if (variant === 'royal') {
        radialGradient2.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
        radialGradient2.addColorStop(1, 'rgba(212, 175, 55, 0)');
      } else if (variant === 'gold') {
        radialGradient2.addColorStop(0, 'rgba(255, 215, 0, 0.08)');
        radialGradient2.addColorStop(1, 'rgba(255, 215, 0, 0)');
      } else if (variant === 'blue') {
        radialGradient2.addColorStop(0, 'rgba(52, 152, 219, 0.08)');
        radialGradient2.addColorStop(1, 'rgba(52, 152, 219, 0)');
      } else {
        radialGradient2.addColorStop(0, 'rgba(142, 68, 173, 0.08)');
        radialGradient2.addColorStop(1, 'rgba(142, 68, 173, 0)');
      }
      
      ctx.fillStyle = radialGradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add third radial gradient
      const radialGradient3 = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.8, 0,
        canvas.width * 0.5, canvas.height * 0.8, canvas.width * 0.6
      );
      
      if (variant === 'royal') {
        radialGradient3.addColorStop(0, 'rgba(0, 0, 128, 0.08)');
        radialGradient3.addColorStop(1, 'rgba(0, 0, 128, 0)');
      } else if (variant === 'gold') {
        radialGradient3.addColorStop(0, 'rgba(184, 134, 11, 0.08)');
        radialGradient3.addColorStop(1, 'rgba(184, 134, 11, 0)');
      } else if (variant === 'blue') {
        radialGradient3.addColorStop(0, 'rgba(8, 76, 97, 0.08)');
        radialGradient3.addColorStop(1, 'rgba(8, 76, 97, 0)');
      } else {
        radialGradient3.addColorStop(0, 'rgba(74, 35, 90, 0.08)');
        radialGradient3.addColorStop(1, 'rgba(74, 35, 90, 0)');
      }
      
      ctx.fillStyle = radialGradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    // Create particles
    class Particle {
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      angle: number;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 0.5 + 0.1;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
        this.angle = Math.random() * 360;
        this.opacity = Math.random() * 0.5 + 0.3;
      }
      
      update() {
        if (animate) {
          this.angle += 0.2;
          this.x += Math.cos(this.angle * Math.PI / 180) * this.speed;
          this.y += Math.sin(this.angle * Math.PI / 180) * this.speed;
        }
        
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    
    // Initialize particles
    const particlesArray: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();
      
      for (const particle of particlesArray) {
        particle.update();
        particle.draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, density, animate, particles]);
  
  return (
    <div className={`throne-background variant-${variant} density-${density} ${animate ? 'animate' : ''} ${particles ? 'with-particles' : ''} absolute inset-0 -z-10`}>
      {particles && <canvas ref={canvasRef} className="absolute inset-0 -z-10" />}
    </div>
  );
};

export default ThroneBackground;


import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

interface CrownEffectCanvasProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

const CrownEffectCanvas: React.FC<CrownEffectCanvasProps> = ({
  width = 300,
  height = 300,
  color = '#D4AF37',
  opacity = 0.7,
  className = ''
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Create new P5 instance
    const sketch = (p: p5) => {
      const particles: Particle[] = [];
      const particleCount = 30;
      
      class Particle {
        pos: p5.Vector;
        vel: p5.Vector;
        acc: p5.Vector;
        size: number;
        alpha: number;
        color: p5.Color;
        rotation: number;
        rotationSpeed: number;
        
        constructor() {
          this.pos = p.createVector(p.random(width), p.random(height));
          this.vel = p.createVector(p.random(-0.2, 0.2), p.random(-0.2, 0.2));
          this.acc = p.createVector(0, 0);
          this.size = p.random(5, 15);
          this.alpha = p.random(50, 150);
          this.color = p.color(color);
          this.rotation = p.random(0, p.TWO_PI);
          this.rotationSpeed = p.random(-0.01, 0.01);
        }
        
        update() {
          this.vel.add(this.acc);
          this.pos.add(this.vel);
          this.acc.mult(0);
          this.rotation += this.rotationSpeed;
          
          // Wrap around edges
          if (this.pos.x < 0) this.pos.x = width;
          if (this.pos.x > width) this.pos.x = 0;
          if (this.pos.y < 0) this.pos.y = height;
          if (this.pos.y > height) this.pos.y = 0;
          
          // Randomly change direction slightly
          if (p.random(1) < 0.05) {
            this.vel.rotate(p.random(-0.1, 0.1));
          }
        }
        
        display() {
          p.push();
          p.translate(this.pos.x, this.pos.y);
          p.rotate(this.rotation);
          p.noStroke();
          
          const c = this.color;
          c.setAlpha(this.alpha * opacity);
          p.fill(c);
          
          // Draw a crown shape
          p.beginShape();
          p.vertex(0, -this.size);
          p.vertex(this.size * 0.5, -this.size * 0.5);
          p.vertex(this.size * 0.7, -this.size);
          p.vertex(this.size * 0.9, -this.size * 0.5);
          p.vertex(this.size, -this.size);
          p.vertex(this.size, this.size * 0.5);
          p.vertex(-this.size, this.size * 0.5);
          p.vertex(-this.size, -this.size);
          p.vertex(-this.size * 0.9, -this.size * 0.5);
          p.vertex(-this.size * 0.7, -this.size);
          p.vertex(-this.size * 0.5, -this.size * 0.5);
          p.endShape(p.CLOSE);
          
          p.pop();
        }
        
        follow(target: p5.Vector) {
          const desired = p5.Vector.sub(target, this.pos);
          desired.setMag(0.3);
          const steer = p5.Vector.sub(desired, this.vel);
          steer.limit(0.01);
          this.acc.add(steer);
        }
      }
      
      p.setup = () => {
        p.createCanvas(width, height);
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      };
      
      p.draw = () => {
        p.clear();
        
        // Mouse interaction
        const mousePos = p.createVector(p.mouseX, p.mouseY);
        const mouseIsOver = p.mouseX > 0 && p.mouseX < width && p.mouseY > 0 && p.mouseY < height;
        
        // Update and display particles
        for (const particle of particles) {
          if (mouseIsOver) {
            particle.follow(mousePos);
          }
          
          particle.update();
          particle.display();
        }
        
        // Draw connecting lines
        p.stroke(color);
        p.strokeWeight(0.5);
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const d = p5.Vector.dist(particles[i].pos, particles[j].pos);
            if (d < 50) {
              p.stroke(color);
              p.strokeWeight(0.5);
              p.line(
                particles[i].pos.x,
                particles[i].pos.y,
                particles[j].pos.x,
                particles[j].pos.y
              );
            }
          }
        }
      };
      
      p.windowResized = () => {
        // Handle resize events if needed
      };
    };
    
    p5Instance.current = new p5(sketch, canvasRef.current);
    
    // Cleanup
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, [width, height, color, opacity]);
  
  return <div ref={canvasRef} className={className} />;
};

export default CrownEffectCanvas;

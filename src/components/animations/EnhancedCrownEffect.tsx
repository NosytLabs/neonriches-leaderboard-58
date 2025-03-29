import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

interface EnhancedCrownEffectProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
  className?: string;
  interactive?: boolean;
}

const EnhancedCrownEffect: React.FC<EnhancedCrownEffectProps> = ({
  width = 300,
  height = 300,
  color = '#D4AF37',
  opacity = 0.7,
  className = '',
  interactive = true
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Create new P5 instance
    const sketch = (p: p5) => {
      const particles: Particle[] = [];
      const particleCount = 50;
      const crowns: Crown[] = [];
      const crownCount = 3;
      
      class Particle {
        pos: p5.Vector;
        vel: p5.Vector;
        acc: p5.Vector;
        size: number;
        alpha: number;
        color: p5.Color;
        lifespan: number;
        maxLifespan: number;
        
        constructor(x?: number, y?: number) {
          this.pos = x && y 
            ? p.createVector(x, y) 
            : p.createVector(p.random(width), p.random(height));
          this.vel = p.createVector(p.random(-0.5, 0.5), p.random(-0.5, 0.5));
          this.acc = p.createVector(0, 0);
          this.size = p.random(3, 8);
          this.alpha = p.random(50, 200);
          this.color = p.color(color);
          this.maxLifespan = 255;
          this.lifespan = this.maxLifespan;
        }
        
        update() {
          this.vel.add(this.acc);
          this.pos.add(this.vel);
          this.acc.mult(0);
          this.lifespan -= 1.5;
          
          // Apply a subtle gravity
          this.acc.add(0, 0.01);
          
          // Dampen velocity
          this.vel.mult(0.99);
          
          // Add a bit of randomness to movement
          if (p.random(1) < 0.1) {
            this.vel.add(p.random(-0.1, 0.1), p.random(-0.1, 0.1));
          }
        }
        
        display() {
          if (this.lifespan <= 0) return;
          
          p.push();
          p.noStroke();
          
          const c = this.color;
          c.setAlpha((this.lifespan / this.maxLifespan) * this.alpha * opacity);
          p.fill(c);
          
          p.translate(this.pos.x, this.pos.y);
          p.circle(0, 0, this.size);
          p.pop();
        }
        
        isDead() {
          return this.lifespan <= 0;
        }
        
        follow(target: p5.Vector) {
          const desired = p5.Vector.sub(target, this.pos);
          desired.setMag(0.5);
          const steer = p5.Vector.sub(desired, this.vel);
          steer.limit(0.03);
          this.acc.add(steer);
        }
      }
      
      class Crown {
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
          this.size = p.random(15, 30);
          this.alpha = p.random(100, 200);
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
          if (p.random(1) < 0.02) {
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
        
        emitParticles() {
          if (p.random(1) < 0.1) {
            particles.push(new Particle(this.pos.x, this.pos.y));
          }
        }
      }
      
      p.setup = () => {
        p.createCanvas(width, height);
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
        
        // Create crowns
        for (let i = 0; i < crownCount; i++) {
          crowns.push(new Crown());
        }
      };
      
      p.draw = () => {
        p.clear();
        
        // Mouse interaction
        const mousePos = p.createVector(p.mouseX, p.mouseY);
        const isMouseOver = p.mouseX > 0 && p.mouseX < width && p.mouseY > 0 && p.mouseY < height;
        
        // Update and display crowns
        for (const crown of crowns) {
          if (isMouseOver && interactive) {
            crown.follow(mousePos);
          }
          
          crown.update();
          crown.display();
          crown.emitParticles();
        }
        
        // Update and display particles
        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].update();
          particles[i].display();
          
          // Check if particle is dead
          if (particles[i].isDead()) {
            particles.splice(i, 1);
          }
        }
        
        // Add new particles to maintain count
        while (particles.length < particleCount) {
          particles.push(new Particle());
        }
        
        // Draw connecting lines between crowns
        p.stroke(color);
        p.strokeWeight(0.5);
        for (let i = 0; i < crowns.length; i++) {
          for (let j = i + 1; j < crowns.length; j++) {
            const d = p5.Vector.dist(crowns[i].pos, crowns[j].pos);
            if (d < 100) {
              p.strokeWeight(0.5);
              p.stroke(color);
              p.line(
                crowns[i].pos.x,
                crowns[i].pos.y,
                crowns[j].pos.x,
                crowns[j].pos.y
              );
            }
          }
        }
      };
      
      p.windowResized = () => {
        // Handle resize events if needed
      };
      
      // Add mouse click interaction
      p.mousePressed = () => {
        if (isMouseOver && interactive) {
          const mousePos = p.createVector(p.mouseX, p.mouseY);
          
          // Create a burst of particles
          for (let i = 0; i < 10; i++) {
            const particle = new Particle(p.mouseX, p.mouseY);
            particle.vel = p5.Vector.random2D().mult(p.random(1, 3));
            particles.push(particle);
          }
        }
      };
    };
    
    p5Instance.current = new p5(sketch, canvasRef.current);
    
    // Cleanup
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, [width, height, color, opacity, interactive]);
  
  return <div ref={canvasRef} className={className} />;
};

export default EnhancedCrownEffect;

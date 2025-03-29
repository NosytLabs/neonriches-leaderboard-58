
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

interface P5CrownEffectProps {
  width?: number;
  height?: number;
  color?: string;
  sparkleCount?: number;
  sparkleSize?: number;
  sparkleSpeed?: number;
  animate?: boolean;
}

const P5CrownEffect: React.FC<P5CrownEffectProps> = ({
  width = 300,
  height = 300,
  color = '#D4AF37',
  sparkleCount = 50,
  sparkleSize = 4,
  sparkleSpeed = 1,
  animate = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Define the p5 sketch
    const sketch = (p: p5) => {
      const sparkles: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
      const crownPoints: { x: number; y: number }[] = [];
      let mouseIsOver = false;

      // Setup function
      p.setup = () => {
        p.createCanvas(width, height);
        
        // Create sparkles
        for (let i = 0; i < sparkleCount; i++) {
          sparkles.push({
            x: p.random(width),
            y: p.random(height),
            size: p.random(1, sparkleSize),
            alpha: p.random(100, 255),
            speed: p.random(0.1, sparkleSpeed)
          });
        }
        
        // Define crown points
        const centerX = width / 2;
        const centerY = height / 2;
        const crownSize = Math.min(width, height) * 0.4;
        
        // Crown base
        crownPoints.push({ x: centerX - crownSize / 2, y: centerY + crownSize / 3 });
        crownPoints.push({ x: centerX + crownSize / 2, y: centerY + crownSize / 3 });
        
        // Crown points
        for (let i = 0; i < 5; i++) {
          const angle = p.PI - p.PI * i / 4;
          const pointX = centerX + p.cos(angle) * (crownSize / 2);
          const pointY = centerY + p.sin(angle) * (crownSize / 2);
          
          crownPoints.push({ x: pointX, y: pointY });
        }
      };

      // Draw function
      p.draw = () => {
        p.clear();
        
        if (!animate && !mouseIsOver) {
          drawCrown();
          return;
        }
        
        // Update and draw sparkles
        for (let i = 0; i < sparkles.length; i++) {
          const sparkle = sparkles[i];
          
          // Update sparkle position
          sparkle.y -= sparkle.speed;
          sparkle.alpha -= sparkle.speed * 2;
          
          // Reset sparkle if it goes off screen or fades out
          if (sparkle.y < 0 || sparkle.alpha <= 0) {
            sparkle.x = p.random(width);
            sparkle.y = height;
            sparkle.alpha = p.random(100, 255);
          }
          
          // Draw sparkle
          p.fill(p.color(color + p.hex(Math.floor(sparkle.alpha), 2)));
          p.noStroke();
          p.ellipse(sparkle.x, sparkle.y, sparkle.size);
        }
        
        drawCrown();
      };
      
      // Draw the crown
      const drawCrown = () => {
        // Draw crown
        p.fill(p.color(color + '80')); // 50% opacity
        p.stroke(p.color(color));
        p.strokeWeight(2);
        
        p.beginShape();
        for (const point of crownPoints) {
          p.vertex(point.x, point.y);
        }
        p.endShape(p.CLOSE);
        
        // Draw crown jewels
        p.fill(p.color('#FF0000'));
        p.noStroke();
        p.ellipse(width/2, height/2 - height/10, width/15, height/15);
        
        p.fill(p.color('#0000FF'));
        p.ellipse(width/2 - width/8, height/2, width/20, height/20);
        
        p.fill(p.color('#00FF00'));
        p.ellipse(width/2 + width/8, height/2, width/20, height/20);
        
        // Draw crown glow
        p.drawingContext.shadowBlur = 20;
        p.drawingContext.shadowColor = color;
        p.noFill();
        p.stroke(p.color(color));
        p.strokeWeight(4);
        p.beginShape();
        for (const point of crownPoints) {
          p.vertex(point.x, point.y);
        }
        p.endShape(p.CLOSE);
        p.drawingContext.shadowBlur = 0;
      };
      
      // Mouse events
      p.mouseMoved = () => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        
        mouseIsOver = 
          p.mouseX >= 0 && 
          p.mouseX <= width && 
          p.mouseY >= 0 && 
          p.mouseY <= height;
      };
    };

    // Create new p5 instance
    p5Ref.current = new p5(sketch, containerRef.current);

    // Cleanup
    return () => {
      if (p5Ref.current) {
        p5Ref.current.remove();
      }
    };
  }, [width, height, color, sparkleCount, sparkleSize, sparkleSpeed, animate]);

  return <div ref={containerRef} className="p5-crown-effect" />;
};

export default P5CrownEffect;

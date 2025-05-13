
import { useCallback } from 'react';
import useSound from './use-sound';

interface CoinOptions {
  count?: number;
  velocity?: number;
  gold?: boolean;
  playSounds?: boolean;
  position?: {
    x?: number;
    y?: number;
  };
}

export default function useFloatingCoins() {
  const { playSound } = useSound();
  
  const triggerCoins = useCallback((options: CoinOptions = {}) => {
    const {
      count = 3,
      velocity = 5,
      gold = false,
      playSounds = false,
      position = {}
    } = options;
    
    const container = document.createElement('div');
    container.className = 'absolute inset-0 pointer-events-none overflow-hidden';
    document.body.appendChild(container);
    
    // Generate coins
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const coin = document.createElement('div');
        coin.className = `absolute w-8 h-8 rounded-full z-50 animate-spin ${gold ? 'bg-royal-gold' : 'bg-yellow-400'} shadow-lg`;
        
        // Set position
        const startX = position.x ?? Math.random() * window.innerWidth;
        const startY = position.y ?? Math.random() * window.innerHeight;
        
        coin.style.left = `${startX}px`;
        coin.style.top = `${startY}px`;
        
        // Set animation
        const angle = Math.random() * Math.PI * 2; // Random angle in radians
        const speed = (Math.random() * velocity) + (velocity / 2);
        const xVelocity = Math.sin(angle) * speed;
        const yVelocity = -1 * Math.cos(angle) * speed; // Negative to go up
        
        coin.style.transform = 'scale(0)';
        coin.style.opacity = '0';
        
        container.appendChild(coin);
        
        // Play sound if enabled
        if (playSounds) {
          const soundType = gold ? 'coin-gold' : 'coin';
          const soundDelay = i * 100;
          
          setTimeout(() => {
            playSound(soundType, {
              volume: 0.6,
              playbackRate: 0.8 + Math.random() * 0.4
            });
          }, soundDelay);
        }
        
        // Animate coin
        requestAnimationFrame(() => {
          coin.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
          coin.style.transform = 'scale(1)';
          coin.style.opacity = '1';
          
          let frameCount = 0;
          const maxFrames = 120; // ~2 seconds at 60fps
          
          const animate = () => {
            if (frameCount >= maxFrames) {
              coin.style.transition = 'transform 0.3s ease-in, opacity 0.3s ease-in';
              coin.style.transform = 'scale(0)';
              coin.style.opacity = '0';
              
              // Remove after animation finishes
              setTimeout(() => {
                if (coin.parentNode) {
                  coin.parentNode.removeChild(coin);
                }
                
                // Remove container if it's empty
                if (container.childNodes.length === 0) {
                  document.body.removeChild(container);
                }
              }, 300);
              
              return;
            }
            
            const currentX = parseFloat(coin.style.left);
            const currentY = parseFloat(coin.style.top);
            
            coin.style.left = `${currentX + xVelocity}px`;
            coin.style.top = `${currentY + yVelocity}px`;
            
            frameCount++;
            requestAnimationFrame(animate);
          };
          
          animate();
        });
      }, i * 50); // Stagger coin creation
    }
  }, [playSound]);
  
  return { triggerCoins };
}

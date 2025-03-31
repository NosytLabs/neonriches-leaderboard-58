import { useState, useCallback, useEffect } from 'react';
import { NotificationSoundOptions } from '@/types/mockery';
import useNotificationSound from '@/hooks/useNotificationSound';

interface Coin {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
  speed: number;
  image?: string;
}

interface UseFloatingCoinsOptions {
  containerRef?: React.RefObject<HTMLElement>;
  enabled?: boolean;
  emojis?: string[];
}

interface UseFloatingCoinsReturn {
  isActive: boolean;
  toggle: (state?: boolean) => void;
  createBurst: (burstCount?: number) => void;
  createMultipleCoins: (count?: number) => void;
  cleanup: () => void;
}

const useFloatingCoins = (options?: UseFloatingCoinsOptions): UseFloatingCoinsReturn => {
  const [isActive, setIsActive] = useState(false);
  const [coins, setCoins] = useState<Coin[]>([]);
  const coinsRef = useRef<Coin[]>([]);
  const { playSound } = useNotificationSound();
  
  const coinImages = [
    '/assets/coins/gold-coin-1.png',
    '/assets/coins/gold-coin-2.png',
    '/assets/coins/silver-coin-1.png',
    '/assets/coins/royal-coin.png',
  ];

  useEffect(() => {
    coinsRef.current = coins;
  }, [coins]);

  const createCoin = (x?: number, y?: number) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const newCoin: Coin = {
      id: Date.now() + Math.random(),
      x: x ?? Math.random() * screenWidth,
      y: y ?? Math.random() * screenHeight,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.8,
      opacity: 0.8 + Math.random() * 0.2,
      speed: 2 + Math.random() * 2,
      image: coinImages[Math.floor(Math.random() * coinImages.length)]
    };
    
    setCoins(prev => [...prev, newCoin]);
    
    setTimeout(() => {
      setCoins(prevCoins => prevCoins.filter(coin => coin.id !== newCoin.id));
    }, 3000);
  };

  const createMultipleCoins = (count: number = 10) => {
    const centerX = window.innerWidth / 2;
    const bottomY = window.innerHeight - 100;
    
    setIsActive(true);
    playSound('coinDrop', 0.35);
    
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        createCoin(
          centerX + (Math.random() * 200 - 100), 
          bottomY + (Math.random() * 50)
        );
      }, i * 40);
    }
  };

  const createBurst = (burstCount: number = 20) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    setIsActive(true);
    playSound('coinDrop', 0.35);
    
    for (let i = 0; i < burstCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 20 + Math.random() * 80;
      
      setTimeout(() => {
        createCoin(
          centerX + Math.cos(angle) * distance,
          centerY + Math.sin(angle) * distance
        );
      }, i * 25);
    }
  };

  const toggle = (state?: boolean) => {
    const newState = state !== undefined ? state : !isActive;
    setIsActive(newState);
    
    if (newState) {
      createMultipleCoins(12);
    }
  };

  const cleanup = () => {
    setCoins([]);
  };

  return {
    isActive,
    toggle,
    createBurst,
    createMultipleCoins,
    cleanup
  };
};

export default useFloatingCoins;

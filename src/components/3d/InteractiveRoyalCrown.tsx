
import React, { useRef, useCallback, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import useFloatingCoins from '@/hooks/use-floating-coins';
import { Crown } from 'lucide-react';

interface CrownModelProps {
  rotationSpeed?: number;
  onClick: () => void;
}

const CrownModel: React.FC<CrownModelProps> = ({ rotationSpeed = 0.003, onClick }) => {
  const crownRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/throne-assets/crown.glb');
  
  useFrame(() => {
    if (crownRef.current) {
      crownRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <primitive 
      ref={crownRef}
      object={scene} 
      scale={[1.5, 1.5, 1.5]} 
      position={[0, -1, 0]}
      onClick={onClick}
    />
  );
};

interface InteractiveRoyalCrownProps {
  onCrownClick?: () => void;
  showCoins?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const InteractiveRoyalCrown: React.FC<InteractiveRoyalCrownProps> = ({ 
  onCrownClick,
  showCoins = false,
  size = 'medium'
}) => {
  const { createMultipleCoins, coins } = useFloatingCoins();
  const [clickCount, setClickCount] = useState(0);
  
  const handleCrownClick = useCallback(() => {
    setClickCount(prev => prev + 1);
    createMultipleCoins(5, { x: window.innerWidth/2, y: window.innerHeight/2 });
    
    if (onCrownClick) {
      onCrownClick();
    }
  }, [createMultipleCoins, onCrownClick]);
  
  return (
    <div className={`w-full relative ${
      size === 'small' ? 'h-[200px]' : 
      size === 'large' ? 'h-[400px]' : 
      'h-[300px]'
    }`}>
      {/* Render floating coins */}
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="floating-coin"
          style={{
            left: `${coin.x}px`,
            top: `${coin.y}px`,
            width: `${coin.size}px`,
            height: `${coin.size}px`,
            animationDuration: `${coin.duration}ms`,
            '--rotation': `${coin.rotation}deg`,
          } as React.CSSProperties}
        />
      ))}
      
      {/* Fallback for environments where WebGL isn't available */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <Crown 
          className="text-royal-gold h-16 w-16 animate-crown-glow"
          style={{ opacity: 0.1 }}
        />
      </div>
      
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <CrownModel onClick={handleCrownClick} />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
      {clickCount > 0 && (
        <div className="absolute bottom-2 left-0 right-0 mx-auto text-center text-sm text-royal-gold">
          Royal treasury: +{clickCount} clicks
        </div>
      )}
    </div>
  );
};

export default InteractiveRoyalCrown;

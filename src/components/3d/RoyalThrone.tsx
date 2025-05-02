
// React is already injected by Vite's jsxInject configuration
import { Crown, Gem } from '@/components/ui/icons';
import useFloatingEffects from '@/hooks/use-floating-effects';

interface RoyalThroneProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  animate?: boolean;
  onThroneClick?: () => void;
}

// This is a fallback component that doesn't use Three.js
// We'll replace it with a proper 3D component once we resolve the issues
const RoyalThrone: React.FC<RoyalThroneProps> = ({
  size = 'medium',
  color = '#D4AF37',
  animate = true,
  onThroneClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { effects } = useFloatingEffects({
    containerRef,
    enabled: animate && isHovered,
    frequency: 0.3,
    density: 'low',
    colors: ['#D4AF37', '#FFD700', '#FFC125'],
    sizes: [3, 4, 5]
  });
  
  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'h-40 w-40';
      case 'large': return 'h-80 w-80';
      case 'medium':
      default: return 'h-60 w-60';
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${isHovered ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onThroneClick}
    >
      {/* Throne base with royal styling */}
      <div className={`relative ${getSizeClass()}`}>
        {/* Base */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/6 bg-stone-800 rounded-sm"
          style={{ boxShadow: '0 5px 15px rgba(0,0,0,0.5)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-r from-stone-900 via-stone-700 to-stone-900"></div>
        </div>
        
        {/* Seat */}
        <div 
          className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2 w-2/3 h-1/6 bg-stone-700 rounded-t-sm"
          style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)' }}
        >
          <div 
            className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r"
            style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
          ></div>
        </div>
        
        {/* Back */}
        <div 
          className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2 w-2/3 h-3/5 bg-stone-800 border-t-4"
          style={{ 
            borderColor: color,
            boxShadow: '0 -5px 15px rgba(0,0,0,0.3)'
          }}
        >
          {/* Royal pattern on throne back */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-stone-700 flex items-center justify-center">
              <Crown className="h-8 w-8 text-royal-gold animate-crown-glow" />
            </div>
          </div>
          
          {/* Top decoration */}
          <div 
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full"
          >
            {/* Crown shapes on throne top */}
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-5 h-8 mx-1"
                  style={{
                    background: color,
                    clipPath: 'polygon(50% 0%, 75% 50%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 25% 50%)'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Armrests */}
        <div 
          className="absolute bottom-1/3 left-0 w-1/6 h-1/6 bg-stone-700 rounded-l-sm"
          style={{ boxShadow: '-2px 4px 8px rgba(0,0,0,0.3)' }}
        >
          <div 
            className="absolute top-0 left-0 right-0 h-2"
            style={{ background: color }}
          ></div>
          
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full" style={{ background: color }}></div>
        </div>
        
        <div 
          className="absolute bottom-1/3 right-0 w-1/6 h-1/6 bg-stone-700 rounded-r-sm"
          style={{ boxShadow: '2px 4px 8px rgba(0,0,0,0.3)' }}
        >
          <div 
            className="absolute top-0 left-0 right-0 h-2"
            style={{ background: color }}
          ></div>
          
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full" style={{ background: color }}></div>
        </div>
        
        {/* Decorative elements */}
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full animate-pulse-slow"
            style={{ 
              width: '10px', 
              height: '10px', 
              background: color,
              top: `${60 + (i * 20)}%`,
              left: i % 2 === 0 ? '15%' : '85%',
              boxShadow: `0 0 8px ${color}`
            }}
          ></div>
        ))}
        
        {/* Gold dust effects when hovered */}
        {effects.map((effect) => (
          <div
            key={effect.id}
            className="absolute rounded-full floating-particle animate-float"
            style={{
              left: `${effect.x}px`,
              top: `${effect.y}px`,
              width: `${effect.size}px`,
              height: `${effect.size}px`,
              backgroundColor: effect.color,
              opacity: effect.opacity,
            }}
          />
        ))}
        
        {/* Highlight effect on hover */}
        {isHovered && (
          <div className="absolute inset-0 rounded opacity-20 transition-opacity duration-300" style={{ boxShadow: `0 0 20px ${color}` }}></div>
        )}
      </div>
      
      {/* Royal insignia above the throne */}
      {isHovered && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex items-center">
          <Gem className="h-6 w-6 mr-2 text-royal-gold animate-sparkle" />
          <span className="text-royal-gold font-royal-script">Royal Throne</span>
        </div>
      )}
    </div>
  );
};

export default RoyalThrone;

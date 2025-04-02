
import React from 'react';
import { 
  Crown, 
  Sword, 
  Shield, 
  Scroll, 
  Key, 
  Flag, 
  Gem, 
  Trophy,
  Castle 
} from 'lucide-react';

interface MedievalIconProps {
  name: string;
  className?: string;
  size?: number;
}

const MedievalIcon: React.FC<MedievalIconProps> = ({ 
  name, 
  className = "", 
  size = 24 
}) => {
  const getIcon = () => {
    switch (name.toLowerCase()) {
      case 'crown':
        return <Crown size={size} className={className} />;
      case 'sword':
        return <Sword size={size} className={className} />;
      case 'shield':
        return <Shield size={size} className={className} />;
      case 'scroll':
        return <Scroll size={size} className={className} />;
      case 'key':
        return <Key size={size} className={className} />;
      case 'flag':
        return <Flag size={size} className={className} />;
      case 'gem':
        return <Gem size={size} className={className} />;
      case 'trophy':
        return <Trophy size={size} className={className} />;
      case 'castle':
        return <Castle size={size} className={className} />;
      default:
        return <Crown size={size} className={className} />;
    }
  };

  return getIcon();
};

export default MedievalIcon;

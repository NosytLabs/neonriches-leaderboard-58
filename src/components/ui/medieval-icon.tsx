
import React from 'react';
import { 
  Crown, 
  Medal,
  Gem,
  Heart,
  Shield,
  Swords,
  Scroll,
  Castle,
  Trophy,
  Key,
  Coins,
  Skull,
  Sparkles,
  LucideIcon,
  Star 
} from 'lucide-react';

export type MedievalIconName = 
  | 'crown' 
  | 'medal' 
  | 'gem' 
  | 'heart' 
  | 'shield' 
  | 'swords' 
  | 'scroll' 
  | 'castle' 
  | 'trophy' 
  | 'key' 
  | 'coins' 
  | 'skull' 
  | 'sparkles'
  | 'star'
  | 'seal';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'copper' 
  | 'crimson' 
  | 'navy' 
  | 'purple' 
  | 'emerald'
  | 'bronze'
  | 'mahogany';

const iconMap: Record<MedievalIconName, LucideIcon> = {
  crown: Crown,
  medal: Medal,
  gem: Gem,
  heart: Heart,
  shield: Shield,
  swords: Swords,
  scroll: Scroll,
  castle: Castle,
  trophy: Trophy,
  key: Key,
  coins: Coins,
  skull: Skull,
  sparkles: Sparkles,
  star: Star,
  seal: Medal // Mapping seal to Medal for now, but could be a custom component
};

const sizeMap: Record<MedievalIconSize, string> = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10'
};

const colorMap: Record<MedievalIconColor, string> = {
  gold: 'text-royal-gold',
  silver: 'text-gray-300',
  copper: 'text-amber-600', 
  crimson: 'text-royal-crimson',
  navy: 'text-royal-navy',
  purple: 'text-purple-600',
  emerald: 'text-emerald-600',
  bronze: 'text-amber-700',
  mahogany: 'text-red-900'
};

interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
}

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'gold',
  className = ''
}) => {
  const IconComponent = iconMap[name];
  const sizeClass = sizeMap[size];
  const colorClass = colorMap[color];
  
  return (
    <IconComponent className={`${sizeClass} ${colorClass} ${className}`} />
  );
};

export default MedievalIcon;

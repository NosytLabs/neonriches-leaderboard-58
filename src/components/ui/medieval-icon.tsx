
import React from 'react';
import Icon from '@/components/Icon';
import { IconName } from '@/components/Icon';

export type MedievalIconName = 
  | 'Crown'
  | 'Shield'
  | 'Sword'
  | 'Scroll'
  | 'Coins'
  | 'Landmark'
  | 'AlertTriangle'
  | 'Wine'
  | 'Flask'
  | 'Map'
  | 'Key'
  | 'Wallet'
  | 'Medal'
  | 'Heart'
  | 'Trophy'
  | 'Sparkles'
  | 'Flame'
  | 'Sun'
  | 'Droplets'
  | 'User'
  | 'MessageSquare'
  | 'Gem';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MedievalIconColor = 'default' | 'gold' | 'silver' | 'royal' | 'crimson' | 'success' | 'warning' | 'info';

interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  onClick?: () => void;
}

const sizeMap: Record<MedievalIconSize, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40
};

const colorMap: Record<MedievalIconColor, string> = {
  default: 'currentColor',
  gold: '#d4af37',
  silver: '#c0c0c0',
  royal: '#7851a9',
  crimson: '#dc143c',
  success: '#10b981',
  warning: '#f59e0b',
  info: '#3b82f6'
};

const MedievalIcon: React.FC<MedievalIconProps> = ({ 
  name, 
  size = 'md', 
  color = 'default',
  className,
  onClick
}) => {
  // Convert MedievalIconName to IconName
  const iconName = name as IconName;
  const iconSize = sizeMap[size];
  const iconColor = colorMap[color];
  
  return (
    <Icon
      name={iconName}
      size={iconSize}
      color={iconColor}
      className={className}
      onClick={onClick}
    />
  );
};

export default MedievalIcon;

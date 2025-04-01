
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';

interface CoatOfArmsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  border?: string;
  icon?: string;
  animated?: boolean;
}

const CoatOfArms: React.FC<CoatOfArmsProps> = ({
  className,
  size = 'md',
  color = 'gold',
  border,
  icon = 'shield',
  animated = false
}) => {
  const containerClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  };
  
  const borderClasses = border || `border-2 border-${color}-500/50`;

  return (
    <div className={cn(
      'relative flex items-center justify-center',
      containerClasses[size],
      borderClasses,
      'rounded-full',
      'bg-black/20',
      className
    )}>
      <MedievalIcon 
        name="shield" 
        size="lg" 
        color={color as any} 
        animated={animated} 
      />
    </div>
  );
};

export default CoatOfArms;

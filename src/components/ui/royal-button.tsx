
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface RoyalButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'royal' | 'royalGold' | 'royalCrimson' | 'royalNavy' | 'glass' | 'outline' | 'mahogany';
  size?: 'sm' | 'default' | 'lg' | 'icon' | 'xl' | 'xxl';
  glow?: boolean;
  shimmer?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const RoyalButton: React.FC<RoyalButtonProps> = ({
  children,
  variant = 'royal',
  size = 'default',
  glow = false,
  shimmer = false,
  icon,
  iconPosition = 'left',
  className,
  ...props
}) => {
  // Map custom variants to shadcn variants
  const getVariant = (): ButtonProps['variant'] => {
    switch (variant) {
      case 'royal': return 'royal';
      case 'royalGold': return 'royalGold';
      case 'royalCrimson': return 'royalCrimson';
      case 'royalNavy': return 'royalNavy';
      case 'mahogany': return 'outline';
      case 'glass': return 'glass';
      case 'outline': return 'outline';
      default: return 'default';
    }
  };
  
  // Get custom styles based on variant for the ones not directly supported
  const getCustomStyles = () => {
    switch (variant) {
      case 'mahogany':
        return 'border-royal-mahogany/70 bg-transparent text-royal-mahogany hover:bg-royal-mahogany/10';
      case 'glass':
        return 'glass-morphism hover:glass-morphism-highlight transition-all duration-300';
      default:
        return '';
    }
  };
  
  return (
    <Button
      variant={getVariant()}
      size={size}
      className={cn(
        'relative overflow-hidden',
        shimmer && 'royal-shine',
        getCustomStyles(),
        className
      )}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 rounded-md opacity-50 blur-md" 
          style={{ 
            background: variant === 'royal' ? 'linear-gradient(to right, rgba(139, 0, 0, 0.3), rgba(212, 175, 55, 0.3), rgba(0, 0, 128, 0.3))' :
                       variant === 'royalGold' ? 'rgba(212, 175, 55, 0.3)' :
                       variant === 'royalCrimson' ? 'rgba(139, 0, 0, 0.3)' :
                       variant === 'royalNavy' ? 'rgba(0, 0, 128, 0.3)' :
                       variant === 'mahogany' ? 'rgba(192, 64, 0, 0.3)' : 'transparent'
          }} 
        />
      )}
      
      <div className="relative z-10 flex items-center">
        {icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        
        {children}
        
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
        
        {shimmer && (
          <Sparkles size={12} className="absolute -top-1 -right-1 text-white/60 animate-sparkle" />
        )}
      </div>
    </Button>
  );
};

export default RoyalButton;

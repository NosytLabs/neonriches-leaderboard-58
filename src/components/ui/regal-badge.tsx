
import React from 'react';
import { cn } from '@/lib/utils';
import type { RegalBadgeProps } from '@/types/ui-types';

type BadgeVariant = 'default' | 'outline' | 'success' | 'warning' | 'danger' | 'info' | 'royal';
type BadgeSize = 'sm' | 'md' | 'lg';

const RegalBadge: React.FC<RegalBadgeProps> = ({
  variant = 'default',
  size = 'md',
  className,
  children,
  style,
  data,
  id,
  hidden,
  onClick,
  tier
}) => {
  // Convert string id to a number for numeric operations if needed
  const parsedId = id ? parseInt(id, 10) : undefined;
  
  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base'
  };
  
  // Variant classes
  const variantClasses = {
    default: 'bg-white/10 text-white',
    outline: 'bg-transparent border border-white/20 text-white',
    success: 'bg-green-600/20 text-green-400 border border-green-500/30',
    warning: 'bg-yellow-600/20 text-yellow-400 border border-yellow-500/30',
    danger: 'bg-red-600/20 text-red-400 border border-red-500/30',
    info: 'bg-blue-600/20 text-blue-400 border border-blue-500/30',
    royal: 'bg-royal-gold/20 text-royal-gold border border-royal-gold/30'
  };
  
  // Get the animation delay based on ID if provided
  const getAnimationDelay = () => {
    if (parsedId === undefined) return '0s';
    return `${(parsedId % 5) * 0.1}s`;
  };
  
  // Get the pulse duration based on ID if provided
  const getPulseDuration = () => {
    if (parsedId === undefined) return '2s';
    return `${2 + (parsedId % 3) * 0.5}s`;
  };
  
  // Use tier for additional styling if needed
  const getTierClass = () => {
    if (!tier) return '';
    // You can implement custom styles based on tier
    return '';
  };
  
  // Generate default content based on tier if no children
  const renderContent = () => {
    if (children) return children;
    if (tier) return tier.charAt(0).toUpperCase() + tier.slice(1);
    return null;
  };
  
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-colors',
        sizeClasses[size as BadgeSize],
        variantClasses[variant as BadgeVariant],
        getTierClass(),
        onClick && 'cursor-pointer hover:bg-opacity-80',
        hidden && 'hidden',
        className
      )}
      style={{
        ...style,
        animationDelay: getAnimationDelay(),
        animationDuration: getPulseDuration()
      }}
      onClick={onClick}
      {...data}
    >
      {renderContent()}
    </span>
  );
};

export default RegalBadge;

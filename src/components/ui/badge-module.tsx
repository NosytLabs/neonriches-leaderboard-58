
import React from 'react';
import { Badge as ShadcnBadge } from './badge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'purple' | string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  className = '' 
}) => {
  // Convert variant strings to match shadcn/ui variants if needed
  let mappedVariant: any = variant;
  if (variant === 'purple') {
    mappedVariant = 'secondary';
  }
  
  return (
    <ShadcnBadge variant={mappedVariant} className={className}>
      {children}
    </ShadcnBadge>
  );
};

export default Badge;

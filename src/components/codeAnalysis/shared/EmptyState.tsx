
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  message: string;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  icon: Icon, 
  message,
  className = ''
}) => {
  return (
    <div className={`text-center py-8 text-white/60 ${className}`}>
      <Icon className="h-12 w-12 mx-auto mb-3 text-white/40" />
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;

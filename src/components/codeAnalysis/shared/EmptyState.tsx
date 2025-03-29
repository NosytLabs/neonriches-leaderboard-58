
import React from 'react';
import { ElementType } from 'react';

interface EmptyStateProps {
  icon: ElementType;
  message: string;
  description?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon: Icon, message, description }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center glass-morphism border-white/10 rounded-lg">
      <Icon className="h-12 w-12 text-white/30 mb-4" />
      <h3 className="text-lg font-medium mb-2">{message}</h3>
      {description && <p className="text-sm text-white/60 max-w-md">{description}</p>}
    </div>
  );
};

export default EmptyState;

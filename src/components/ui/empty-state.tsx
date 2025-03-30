
import React, { ReactNode } from 'react';

interface EmptyStateProps {
  message: string;
  description?: string;
  icon?: ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message, description, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-6">
      {icon && <div className="mb-3">{icon}</div>}
      <p className="text-white/70 font-medium">{message}</p>
      {description && <p className="text-white/50 text-sm mt-1">{description}</p>}
    </div>
  );
};

export default EmptyState;

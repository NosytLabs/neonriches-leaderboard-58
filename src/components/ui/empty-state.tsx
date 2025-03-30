
import React, { ReactNode } from 'react';

interface EmptyStateProps {
  message: string;
  icon?: ReactNode;
  action?: ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message, icon, action }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      <p className="text-white/60 mb-4">{message}</p>
      {action && action}
    </div>
  );
};

export default EmptyState;

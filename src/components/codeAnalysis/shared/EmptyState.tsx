
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  message: string;
  description?: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  message,
  description,
  action
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-6">
      <Icon className="h-12 w-12 text-white/30 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{message}</h3>
      {description && (
        <p className="text-white/60 max-w-md mb-4">{description}</p>
      )}
      {action && action}
    </div>
  );
};

export default EmptyState;

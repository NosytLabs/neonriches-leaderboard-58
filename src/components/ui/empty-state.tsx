
import React from 'react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  message: string;
  icon?: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  icon,
  className,
  action
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-8 text-center rounded-lg bg-black/10 border border-white/5",
      className
    )}>
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      <p className="text-white/70 mb-4">{message}</p>
      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState;

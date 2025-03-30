
import React from 'react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  message: string;
  icon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  messageClassName?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  icon,
  className,
  iconClassName,
  messageClassName
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center py-12 px-4 text-center",
      className
    )}>
      {icon && (
        <div className={cn("mb-4", iconClassName)}>
          {icon}
        </div>
      )}
      <p className={cn("text-white/60 text-sm", messageClassName)}>
        {message}
      </p>
    </div>
  );
};

export default EmptyState;

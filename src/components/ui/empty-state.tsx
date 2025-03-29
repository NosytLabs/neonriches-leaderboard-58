
import { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

export interface EmptyStateProps {
  message: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  message, 
  icon = <AlertCircle className="h-6 w-6 opacity-50" />,
  children 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="flex justify-center mb-4 text-white/50">
        {icon}
      </div>
      <p className="text-white/70 text-sm">{message}</p>
      {children}
    </div>
  );
};

export default EmptyState;

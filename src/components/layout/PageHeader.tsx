
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown } from 'lucide-react';
import MedievalIcon from '@/components/ui/medieval-icon';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description,
  icon,
  className,
  children
}) => {
  return (
    <div className={cn('mb-8', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon ? (
            <div className="mr-4">
              {icon}
            </div>
          ) : (
            <div className="mr-4">
              <MedievalIcon name="crown" size="md" color="gold" />
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            {description && (
              <p className="text-white/70 mt-1">{description}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

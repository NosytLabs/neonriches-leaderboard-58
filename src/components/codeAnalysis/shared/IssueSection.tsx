
import React, { ReactNode } from 'react';
import { Folder } from 'lucide-react';

interface IssueSectionProps {
  title: string;
  count: number;
  description?: string;
  children: ReactNode;
  className?: string;
}

const IssueSection: React.FC<IssueSectionProps> = ({ 
  title, 
  count, 
  description, 
  children,
  className = "" 
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold flex items-center">
          <Folder className="h-5 w-5 mr-2 text-white/70" />
          {title}
          <span className="ml-2 text-sm py-0.5 px-2 bg-white/10 rounded-full text-white/70">
            {count}
          </span>
        </h3>
      </div>
      
      {description && (
        <p className="text-white/70 mb-4">{description}</p>
      )}
      
      {children}
    </div>
  );
};

export default IssueSection;

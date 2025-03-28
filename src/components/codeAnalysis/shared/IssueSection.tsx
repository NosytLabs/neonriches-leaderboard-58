
import React from 'react';

interface IssueSectionProps {
  title: string;
  count: number;
  description: string;
  children: React.ReactNode;
  className?: string;
}

const IssueSection: React.FC<IssueSectionProps> = ({ 
  title, 
  count, 
  description, 
  children,
  className = ''
}) => {
  return (
    <div className={`border border-white/10 rounded-md overflow-hidden ${className}`}>
      <div className="bg-white/5 p-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          <span className="analysis-counter analysis-counter-warning">{count}</span>
        </div>
        <p className="text-sm text-white/70 mt-1">{description}</p>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default IssueSection;


import React from 'react';
import { FileCode } from 'lucide-react';

interface IssueItemProps {
  file: string;
  description: React.ReactNode;
  metadata?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const IssueItem: React.FC<IssueItemProps> = ({ 
  file, 
  description, 
  metadata, 
  icon = <FileCode size={16} className="text-amber-500" />,
  className = ''
}) => {
  return (
    <div className={`p-3 bg-white/5 rounded-md ${className}`}>
      <div className="flex items-center mb-1">
        {icon}
        <span className="font-mono text-sm ml-2">{file}</span>
      </div>
      {description && (
        <div className="pl-6 border-l border-white/10 ml-2 mt-2">
          {description}
        </div>
      )}
      {metadata && (
        <div className="mt-2 pl-6 ml-2 text-sm text-white/60">
          {metadata}
        </div>
      )}
    </div>
  );
};

export default IssueItem;

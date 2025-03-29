
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface IssueSectionProps {
  title: string;
  count: number;
  description: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const IssueSection: React.FC<IssueSectionProps> = ({
  title,
  count,
  description,
  children,
  className = '',
  icon
}) => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  return (
    <div className={`glass-morphism border-white/10 rounded-lg p-6 mb-6 ${className}`}>
      <div 
        className="flex items-start justify-between cursor-pointer" 
        onClick={toggleExpand}
      >
        <div className="flex items-center gap-2">
          {icon && <div className="mt-1">{icon}</div>}
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-3">
              {title}
              <Badge 
                className={`ml-2 ${count === 0 ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'}`}
              >
                {count} {count === 1 ? 'issue' : 'issues'}
              </Badge>
            </h3>
            <p className="text-white/70 mt-1">{description}</p>
          </div>
        </div>
        <div className="mt-1">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default IssueSection;

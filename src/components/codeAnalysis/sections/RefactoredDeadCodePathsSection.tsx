
import React from 'react';
import { AlertCircle } from 'lucide-react';
import IssueSection from '../shared/IssueSection';
import IssueItem from '../shared/IssueItem';
import { DeadCodeInfo } from '@/utils/codeAnalysis/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import EmptyState from '../shared/EmptyState';

interface DeadCodePathsSectionProps {
  deadCodePaths: DeadCodeInfo[];
  showEmpty?: boolean;
}

const RefactoredDeadCodePathsSection: React.FC<DeadCodePathsSectionProps> = ({ 
  deadCodePaths, 
  showEmpty = true 
}) => {
  if (deadCodePaths.length === 0 && !showEmpty) {
    return null;
  }
  
  return (
    <IssueSection 
      title="Dead Code Paths" 
      count={deadCodePaths.length}
      description="These code paths are unreachable and can be safely removed."
      icon={<AlertCircle className="h-5 w-5 text-amber-500" />}
    >
      {deadCodePaths.length === 0 ? (
        showEmpty && (
          <EmptyState 
            icon={AlertCircle} 
            message="No dead code paths detected in this project." 
            description="Your code is already optimized in this regard." 
          />
        )
      ) : (
        <div className="space-y-2 mt-4">
          {deadCodePaths.map((issue, index) => (
            <Card key={index} className="bg-black/20 border-white/5 overflow-hidden">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-sm">{issue.file || issue.path}</h4>
                    <p className="text-sm text-white/70 mt-1">
                      Line {issue.line}: {issue.description || issue.name}
                    </p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="bg-amber-500/10 text-amber-400 border-amber-400/20"
                  >
                    {issue.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </IssueSection>
  );
};

export default RefactoredDeadCodePathsSection;

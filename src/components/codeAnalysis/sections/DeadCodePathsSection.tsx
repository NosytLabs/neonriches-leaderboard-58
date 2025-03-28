
import React from 'react';
import IssueSection from '../shared/IssueSection';
import IssueItem from '../shared/IssueItem';

interface DeadCodePath {
  file: string;
  description: string;
  line: number;
}

interface DeadCodePathsSectionProps {
  deadCodePaths: DeadCodePath[];
}

const DeadCodePathsSection: React.FC<DeadCodePathsSectionProps> = ({ deadCodePaths }) => {
  if (deadCodePaths.length === 0) {
    return null;
  }
  
  return (
    <IssueSection 
      title="Dead Code Paths" 
      count={deadCodePaths.length}
      description="These code paths are unreachable and can be safely removed."
    >
      <div className="space-y-2 mt-4">
        {deadCodePaths.map((issue, index) => (
          <IssueItem
            key={index}
            file={issue.file}
            description={
              <p className="text-sm text-white/70">
                Line {issue.line}: {issue.description}
              </p>
            }
          />
        ))}
      </div>
    </IssueSection>
  );
};

export default DeadCodePathsSection;

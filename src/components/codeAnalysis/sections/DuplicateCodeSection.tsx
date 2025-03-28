
import React from 'react';
import { Copy } from 'lucide-react';
import IssueSection from '../shared/IssueSection';
import IssueItem from '../shared/IssueItem';

interface DuplicateCode {
  files: string[];
  similarity: number;
  lines: number;
  impact?: string;
  risk?: string;
}

interface DuplicateCodeSectionProps {
  duplicateCode: DuplicateCode[];
}

const DuplicateCodeSection: React.FC<DuplicateCodeSectionProps> = ({ duplicateCode }) => {
  if (duplicateCode.length === 0) {
    return null;
  }
  
  return (
    <IssueSection 
      title="Duplicate Code" 
      count={duplicateCode.length}
      description="These code segments appear in multiple places and could be refactored."
    >
      <div className="space-y-2 mt-4">
        {duplicateCode.map((issue, index) => (
          <IssueItem
            key={index}
            file={issue.files.join(', ')}
            description={
              <div>
                <p className="text-sm text-white/70">
                  {issue.lines} lines with {Math.round(issue.similarity * 100)}% similarity
                </p>
                {issue.impact && (
                  <p className="text-sm mt-1">
                    <span className="font-medium">Impact:</span> {issue.impact}
                  </p>
                )}
                {issue.risk && (
                  <p className="text-sm mt-1">
                    <span className="font-medium">Risk:</span> {issue.risk}
                  </p>
                )}
              </div>
            }
            icon={<Copy size={16} className="text-amber-500" />}
          />
        ))}
      </div>
    </IssueSection>
  );
};

export default DuplicateCodeSection;

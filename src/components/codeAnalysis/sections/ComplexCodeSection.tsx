
import React from 'react';
import { Code2 } from 'lucide-react';
import IssueSection from '../shared/IssueSection';
import IssueItem from '../shared/IssueItem';
import { ComplexityItem } from '@/utils/codeAnalysis/types';

interface ComplexCodeSectionProps {
  complexCode: ComplexityItem[];
}

const ComplexCodeSection: React.FC<ComplexCodeSectionProps> = ({ complexCode }) => {
  if (complexCode.length === 0) {
    return null;
  }
  
  return (
    <IssueSection 
      title="Complex Code" 
      count={complexCode.length}
      description="These functions have high cyclomatic complexity and should be refactored."
    >
      <div className="space-y-2 mt-4">
        {complexCode.map((issue, index) => (
          <IssueItem
            key={index}
            file={issue.file}
            description={
              <div>
                <p className="text-sm text-white/70">
                  Line {issue.line || 0}: <code className="bg-white/10 px-1 py-0.5 rounded">{issue.function || issue.name}</code>
                  <span className="ml-2 px-1.5 py-0.5 rounded bg-red-500/20 text-red-300">
                    Complexity: {issue.complexity}
                  </span>
                </p>
                {issue.explanation && (
                  <p className="text-sm mt-1">
                    <span className="font-medium">Suggestion:</span> {issue.explanation}
                  </p>
                )}
                {issue.issues && issue.issues.length > 0 && (
                  <p className="text-sm mt-1">
                    <span className="font-medium">Impact:</span> {issue.issues[0]}
                  </p>
                )}
              </div>
            }
            icon={<Code2 size={16} className="text-amber-500" />}
          />
        ))}
      </div>
    </IssueSection>
  );
};

export default ComplexCodeSection;

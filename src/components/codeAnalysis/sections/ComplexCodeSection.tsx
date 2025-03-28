
import React from 'react';
import { Code2 } from 'lucide-react';
import IssueSection from '../shared/IssueSection';
import IssueItem from '../shared/IssueItem';

interface ComplexCode {
  file: string;
  function: string;
  complexity: number;
  line: number;
  impact?: string;
  suggestion?: string;
}

interface ComplexCodeSectionProps {
  complexCode: ComplexCode[];
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
                  Line {issue.line}: <code className="bg-white/10 px-1 py-0.5 rounded">{issue.function}</code>
                  <span className="ml-2 px-1.5 py-0.5 rounded bg-red-500/20 text-red-300">
                    Complexity: {issue.complexity}
                  </span>
                </p>
                {issue.suggestion && (
                  <p className="text-sm mt-1">
                    <span className="font-medium">Suggestion:</span> {issue.suggestion}
                  </p>
                )}
                {issue.impact && (
                  <p className="text-sm mt-1">
                    <span className="font-medium">Impact:</span> {issue.impact}
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

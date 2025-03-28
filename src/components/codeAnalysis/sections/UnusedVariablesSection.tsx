
import React from 'react';
import IssueSection from '../shared/IssueSection';
import IssueItem from '../shared/IssueItem';

interface UnusedVariable {
  file: string;
  name: string;
  line: number;
}

interface UnusedVariablesSectionProps {
  unusedVariables: UnusedVariable[];
}

const UnusedVariablesSection: React.FC<UnusedVariablesSectionProps> = ({ unusedVariables }) => {
  if (unusedVariables.length === 0) {
    return null;
  }
  
  return (
    <IssueSection 
      title="Unused Variables" 
      count={unusedVariables.length}
      description="These variables are defined but not used in their scope."
    >
      <div className="space-y-2 mt-4">
        {unusedVariables.map((issue, index) => (
          <IssueItem
            key={index}
            file={issue.file}
            description={
              <p className="text-sm text-white/70">
                Line {issue.line}: <code className="bg-white/10 px-1 py-0.5 rounded">{issue.name}</code>
              </p>
            }
          />
        ))}
      </div>
    </IssueSection>
  );
};

export default UnusedVariablesSection;


import React from 'react';
import IssueSection from '../shared/IssueSection';
import IssueItem from '../shared/IssueItem';

interface UnusedCssSelector {
  file: string;
  selector: string;
  line: number;
}

interface UnusedCssSelectorsSectionProps {
  unusedCssSelectors: UnusedCssSelector[];
}

const UnusedCssSelectorsSection: React.FC<UnusedCssSelectorsSectionProps> = ({ unusedCssSelectors }) => {
  if (unusedCssSelectors.length === 0) {
    return null;
  }
  
  return (
    <IssueSection 
      title="Unused CSS Selectors" 
      count={unusedCssSelectors.length}
      description="These CSS selectors are not used in the codebase."
    >
      <div className="space-y-2 mt-4">
        {unusedCssSelectors.map((issue, index) => (
          <IssueItem
            key={index}
            file={issue.file}
            description={
              <p className="text-sm text-white/70">
                Line {issue.line}: <code className="bg-white/10 px-1 py-0.5 rounded">.{issue.selector}</code>
              </p>
            }
          />
        ))}
      </div>
    </IssueSection>
  );
};

export default UnusedCssSelectorsSection;

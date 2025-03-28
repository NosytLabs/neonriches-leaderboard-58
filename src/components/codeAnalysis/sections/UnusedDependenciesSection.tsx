
import React from 'react';
import { Package } from 'lucide-react';
import IssueSection from '../shared/IssueSection';
import IssueItem from '../shared/IssueItem';

interface UnusedDependenciesSectionProps {
  unusedDependencies: string[];
}

const UnusedDependenciesSection: React.FC<UnusedDependenciesSectionProps> = ({ unusedDependencies }) => {
  if (unusedDependencies.length === 0) {
    return null;
  }
  
  return (
    <IssueSection 
      title="Unused Dependencies" 
      count={unusedDependencies.length}
      description="These dependencies are declared in package.json but not used in the code."
    >
      <div className="space-y-2 mt-4">
        {unusedDependencies.map((dep, index) => (
          <IssueItem
            key={index}
            file="package.json"
            description={
              <p className="text-sm text-white/70">
                <code className="bg-white/10 px-1 py-0.5 rounded">{dep}</code>
              </p>
            }
            icon={<Package size={16} className="text-amber-500" />}
          />
        ))}
      </div>
    </IssueSection>
  );
};

export default UnusedDependenciesSection;

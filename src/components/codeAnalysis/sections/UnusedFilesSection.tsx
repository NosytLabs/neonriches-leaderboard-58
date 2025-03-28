
import React from 'react';
import { FileWarning } from 'lucide-react';
import IssueSection from '../shared/IssueSection';
import IssueItem from '../shared/IssueItem';

interface UnusedFilesSectionProps {
  unusedFiles: string[];
}

const UnusedFilesSection: React.FC<UnusedFilesSectionProps> = ({ unusedFiles }) => {
  if (unusedFiles.length === 0) {
    return null;
  }
  
  return (
    <IssueSection 
      title="Unused Files" 
      count={unusedFiles.length}
      description="These files appear to be unused in the project."
    >
      <div className="space-y-2 mt-4">
        {unusedFiles.map((file, index) => (
          <IssueItem
            key={index}
            file={file}
            description={null}
            icon={<FileWarning size={16} className="text-amber-500" />}
          />
        ))}
      </div>
    </IssueSection>
  );
};

export default UnusedFilesSection;

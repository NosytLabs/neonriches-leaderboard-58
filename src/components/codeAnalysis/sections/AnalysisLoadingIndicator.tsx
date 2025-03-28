
import React from 'react';
import { FileCode } from 'lucide-react';

const AnalysisLoadingIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin mr-2">
        <FileCode size={24} />
      </div>
      <p>Analyzing codebase...</p>
    </div>
  );
};

export default AnalysisLoadingIndicator;

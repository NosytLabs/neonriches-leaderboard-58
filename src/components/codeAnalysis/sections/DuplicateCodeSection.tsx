
import React from 'react';
import { Copy } from 'lucide-react';
import IssueSection from '../shared/IssueSection';
import CodeSnippet from '../shared/CodeSnippet';
import { DuplicateCode } from '@/utils/codeAnalysis/types';

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
      description="These code patterns appear in multiple locations and could be refactored into shared functions or components."
    >
      <div className="space-y-4 mt-4">
        {duplicateCode.map((item, index) => (
          <div key={index} className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold mb-1">Duplicate Pattern #{index + 1}</h4>
                <div className="flex items-center">
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full mr-2">
                    {item.lines} lines
                  </span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                    {Math.round(item.similarity * 100)}% similar
                  </span>
                </div>
              </div>
              
              <div className="text-right text-sm text-white/70">
                <p>Found in {item.files.length} files</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h5 className="text-sm font-medium mb-2">Files:</h5>
              <ul className="space-y-1 text-sm text-white/70">
                {item.files.map((file, fileIndex) => (
                  <li key={fileIndex} className="file-path">{file}</li>
                ))}
              </ul>
            </div>
            
            {item.codeSnippet && (
              <div>
                <h5 className="text-sm font-medium mb-2">Code Snippet:</h5>
                <CodeSnippet code={item.codeSnippet} />
              </div>
            )}
          </div>
        ))}
      </div>
    </IssueSection>
  );
};

export default DuplicateCodeSection;

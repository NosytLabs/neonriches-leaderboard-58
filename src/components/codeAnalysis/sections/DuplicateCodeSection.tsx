
import React from 'react';
import { Copy } from 'lucide-react';
import IssueSection from '../shared/IssueSection';
import IssueItem from '../shared/IssueItem';
import CodeSnippet from '../shared/CodeSnippet';
import { DuplicateCodeInfo } from '@/utils/codeAnalysis/types';

interface DuplicateCodeSectionProps {
  duplicateCode: DuplicateCodeInfo[];
}

const DuplicateCodeSection: React.FC<DuplicateCodeSectionProps> = ({ duplicateCode }) => {
  if (duplicateCode.length === 0) {
    return null;
  }
  
  return (
    <IssueSection 
      title="Duplicate Code" 
      count={duplicateCode.length}
      description="These patterns of code are duplicated across multiple files and should be refactored."
    >
      <div className="space-y-4 mt-4">
        {duplicateCode.map((item, index) => (
          <div key={index} className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold mb-1">Duplicate Pattern #{item.id}</h4>
                <div className="flex items-center">
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full mr-2">
                    {item.lines || item.files.length * 5} lines
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
                  <li key={fileIndex} className="file-path">{file.path}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-sm font-medium mb-2">Code Snippet:</h5>
              <CodeSnippet code={item.codeSnippet || item.snippet || item.code || ''} />
            </div>
          </div>
        ))}
      </div>
    </IssueSection>
  );
};

export default DuplicateCodeSection;

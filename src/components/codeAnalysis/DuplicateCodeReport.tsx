
import React from 'react';
import { DuplicateCodeInfo } from '@/utils/codeAnalysis/types';
import EmptyState from '@/components/ui/empty-state';
import { Copy } from 'lucide-react';

interface DuplicateCodeReportProps {
  duplicateCode?: DuplicateCodeInfo[];
}

const DuplicateCodeReport: React.FC<DuplicateCodeReportProps> = ({ duplicateCode = [] }) => {
  if (duplicateCode.length === 0) {
    return (
      <EmptyState 
        message="No duplicate code patterns found" 
        icon={<Copy className="h-6 w-6 opacity-50" />}
      />
    );
  }

  return (
    <div className="space-y-6">
      {duplicateCode.map((item, index) => (
        <div key={index} className="glass-morphism border-white/10 p-5 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              Duplicate Pattern #{item.id}
            </h3>
            <div className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
              {Math.round(item.similarity * 100)}% similar
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-white/70 mb-2">Found in these files:</h4>
              <ul className="space-y-1">
                {item.files.map((file, idx) => (
                  <li key={idx} className="font-mono text-xs bg-black/20 px-2 py-1 rounded">
                    {file.path}
                    {file.lineStart && file.lineEnd && (
                      <span className="text-white/50"> (lines {file.lineStart}-{file.lineEnd})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-white/70 mb-2">Duplicated code size:</h4>
              <p>{item.lines || item.linesCount || 'Unknown'} lines of code</p>
            </div>
            
            {item.recommendation && (
              <div>
                <h4 className="text-sm font-medium text-white/70 mb-2">Recommendation:</h4>
                <p className="bg-emerald-500/10 text-emerald-400 p-3 rounded">
                  {item.recommendation}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DuplicateCodeReport;

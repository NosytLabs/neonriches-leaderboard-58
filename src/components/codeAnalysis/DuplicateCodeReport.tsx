
import React from 'react';
import { Copy, AlertCircle } from 'lucide-react';
import EmptyState from './shared/EmptyState';
import CodeSnippet from './shared/CodeSnippet';
import { DuplicateCodeInfo } from '@/utils/codeAnalysis/types';

const DuplicateCodeReport: React.FC = () => {
  // Use mock data with proper type conversion
  const rawDuplicateCode = [
    {
      id: '1',
      title: 'Duplicate component rendering logic',
      description: 'Similar rendering logic found in multiple components',
      severity: 'medium',
      impact: 'maintainability',
      solution: 'Extract to a shared utility function',
      instances: [
        { file: 'src/components/ProfileCard.tsx', lines: '24-35' },
        { file: 'src/components/UserCard.tsx', lines: '18-29' }
      ],
      similarity: 0.85,
      files: ['src/components/ProfileCard.tsx', 'src/components/UserCard.tsx']
    },
    {
      id: '2',
      title: 'Duplicate API handling',
      description: 'Similar API error handling logic',
      severity: 'medium',
      impact: 'maintainability',
      solution: 'Create a shared API error handling utility',
      instances: [
        { file: 'src/services/userService.ts', lines: '45-60' },
        { file: 'src/services/profileService.ts', lines: '32-47' }
      ],
      similarity: 0.92,
      files: ['src/services/userService.ts', 'src/services/profileService.ts']
    }
  ];
  
  // Convert to the expected type
  const duplicateCode: DuplicateCodeInfo[] = rawDuplicateCode.map(item => ({
    id: item.id,
    similarity: item.similarity,
    files: item.files.map(path => ({ path })),
    lines: parseInt(item.instances[0].lines.split('-')[1]) - parseInt(item.instances[0].lines.split('-')[0]),
    codeSnippet: `// Code from ${item.instances[0].file}\n// Lines ${item.instances[0].lines}\n\n// Similar code found in ${item.instances.length} files`,
    recommendation: item.solution
  }));

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Copy className="h-5 w-5 mr-2 text-blue-500" />
        Duplicate Code Analysis
      </h3>
      <p className="text-white/70 mb-6">
        The following duplicate code patterns were detected in your codebase. Consider refactoring these sections into reusable components or utility functions.
      </p>
      
      {duplicateCode.length === 0 ? (
        <EmptyState
          icon={AlertCircle}
          message="No duplicate code patterns detected."
        />
      ) : (
        <div className="space-y-8">
          {duplicateCode.map((item) => (
            <div key={item.id} className="glass-morphism border-white/10 p-4 rounded-lg">
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
                  {item.files.map((file, index) => (
                    <li key={index} className="file-path">{file.path}</li>
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
      )}
    </div>
  );
};

export default DuplicateCodeReport;

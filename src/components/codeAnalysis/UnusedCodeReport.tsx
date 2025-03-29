
import React from 'react';
import { Check, FileX, ImportIcon, Variable } from 'lucide-react';
import { mockedAnalysisResults } from '@/utils/codeAnalysis/mockData';
import EmptyState from './shared/EmptyState';

const UnusedCodeReport: React.FC = () => {
  const {
    unusedFiles = [],
    unusedImports = [],
    unusedVariables = [],
    unusedSelectors = [],
    unusedDependencies = []
  } = mockedAnalysisResults;

  const hasUnusedCode = 
    unusedFiles.length > 0 || 
    unusedImports.length > 0 || 
    unusedVariables.length > 0 || 
    unusedSelectors.length > 0 || 
    unusedDependencies.length > 0;

  if (!hasUnusedCode) {
    return (
      <EmptyState
        icon={Check}
        message="No unused code detected"
        description="Great job! Your codebase doesn't contain any unused files, imports, variables or CSS selectors."
      />
    );
  }

  return (
    <div className="space-y-8">
      {unusedFiles.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FileX className="h-5 w-5 mr-2 text-red-500" />
            Unused Files
          </h3>
          <div className="space-y-3">
            {unusedFiles.map((file, index) => (
              <div 
                key={index} 
                className="p-3 glass-morphism border-white/10 rounded-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{file.split('/').pop()}</p>
                    <p className="text-sm text-white/60">{file}</p>
                  </div>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                    Unused
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {unusedImports.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <ImportIcon className="h-5 w-5 mr-2 text-amber-500" />
            Unused Imports
          </h3>
          <div className="space-y-3">
            {unusedImports.map((imp, index) => (
              <div 
                key={index} 
                className="p-3 glass-morphism border-white/10 rounded-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{imp.name}</p>
                    <p className="text-sm text-white/60">
                      from <span className="text-amber-400">{imp.path}</span> in <span className="file-path">{imp.file}</span>
                    </p>
                    {imp.line && <p className="text-xs text-white/40">Line: {imp.line}</p>}
                  </div>
                  <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">
                    Unused Import
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {unusedVariables.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Variable className="h-5 w-5 mr-2 text-blue-500" />
            Unused Variables
          </h3>
          <div className="space-y-3">
            {unusedVariables.map((variable, index) => (
              <div 
                key={index} 
                className="p-3 glass-morphism border-white/10 rounded-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">
                      {variable.name}
                      {variable.type && <span className="text-sm text-white/60 ml-1">: {variable.type}</span>}
                    </p>
                    <p className="text-sm text-white/60">
                      in <span className="file-path">{variable.file}</span>
                    </p>
                    {variable.line && <p className="text-xs text-white/40">Line: {variable.line}</p>}
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                    Unused Variable
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {unusedSelectors.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FileX className="h-5 w-5 mr-2 text-purple-500" />
            Unused CSS Selectors
          </h3>
          <div className="space-y-3">
            {unusedSelectors.map((selector, index) => (
              <div 
                key={index} 
                className="p-3 glass-morphism border-white/10 rounded-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium font-mono">{selector.selector}</p>
                    <p className="text-sm text-white/60">
                      in <span className="file-path">{selector.file}</span>
                    </p>
                    {selector.line && <p className="text-xs text-white/40">Line: {selector.line}</p>}
                  </div>
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">
                    Unused CSS
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {unusedDependencies.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FileX className="h-5 w-5 mr-2 text-emerald-500" />
            Unused Dependencies
          </h3>
          <div className="space-y-3">
            {unusedDependencies.map((dependency, index) => (
              <div 
                key={index} 
                className="p-3 glass-morphism border-white/10 rounded-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{dependency}</p>
                    <p className="text-sm text-white/60">
                      Listed in package.json but not imported anywhere
                    </p>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                    Unused Dependency
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UnusedCodeReport;

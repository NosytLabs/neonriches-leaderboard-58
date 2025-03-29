
import React from 'react';
import { Package, FileCode, Code, Brackets, AlertTriangle } from 'lucide-react';
import EmptyState from './shared/EmptyState';
import { mockedAnalysisResults } from '@/utils/codeAnalysis/mockData';

const UnusedCodeReport: React.FC = () => {
  const {
    unusedImports,
    unusedVariables,
    unusedFunctions,
    unusedCssSelectors,
    unusedFiles,
    unusedSelectors,
    unusedDependencies
  } = mockedAnalysisResults;

  const renderUnusedImports = () => {
    if (unusedImports.length === 0) {
      return <EmptyState message="No unused imports detected" />;
    }

    return (
      <div className="space-y-2">
        {unusedImports.map((item, index) => (
          <div key={index} className="p-3 bg-black/20 rounded-md flex justify-between">
            <div>
              <span className="font-mono text-sm">{item.name}</span>
              <span className="text-white/60 mx-2 text-xs">from</span>
              <span className="font-mono text-sm">{item.source}</span>
            </div>
            <div className="text-xs text-white/60">
              {item.file}:{item.line}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderUnusedVariables = () => {
    if (unusedVariables.length === 0) {
      return <EmptyState message="No unused variables detected" />;
    }

    return (
      <div className="space-y-2">
        {unusedVariables.map((item, index) => (
          <div key={index} className="p-3 bg-black/20 rounded-md flex justify-between">
            <div>
              <span className="font-mono text-sm">{item.name}</span>
            </div>
            <div className="text-xs text-white/60">
              {item.file}:{item.line}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderUnusedFunctions = () => {
    if (unusedFunctions.length === 0) {
      return <EmptyState message="No unused functions detected" />;
    }

    return (
      <div className="space-y-2">
        {unusedFunctions.map((item, index) => (
          <div key={index} className="p-3 bg-black/20 rounded-md flex justify-between">
            <div>
              <span className="font-mono text-sm">{item.name}</span>
              <span className="ml-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                {item.impact || 'unknown'}
              </span>
            </div>
            <div className="text-xs text-white/60">
              {item.file}:{item.line}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderUnusedFiles = () => {
    if (!unusedFiles || unusedFiles.length === 0) {
      return <EmptyState message="No unused files detected" />;
    }

    return (
      <div className="space-y-2">
        {unusedFiles.map((filePath, index) => (
          <div key={index} className="p-3 bg-black/20 rounded-md">
            <div className="font-mono text-sm">{filePath}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderUnusedCssSelectors = () => {
    if (!unusedSelectors || unusedSelectors.length === 0) {
      return <EmptyState message="No unused CSS selectors detected" />;
    }

    return (
      <div className="space-y-2">
        {unusedSelectors.map((item, index) => (
          <div key={index} className="p-3 bg-black/20 rounded-md flex justify-between">
            <div>
              <span className="font-mono text-sm">{item.selector}</span>
            </div>
            <div className="text-xs text-white/60">
              {item.file}:{item.line}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderUnusedDependencies = () => {
    if (!unusedDependencies || unusedDependencies.length === 0) {
      return <EmptyState message="No unused dependencies detected" />;
    }

    return (
      <div className="space-y-2">
        {unusedDependencies.map((dep, index) => (
          <div key={index} className="p-3 bg-black/20 rounded-md">
            <div className="font-mono text-sm">{dep}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
        Unused Code Analysis
      </h3>
      <p className="text-white/70 mb-6">
        The following unused code was detected in your codebase. Consider removing these items to improve bundle size and code maintainability.
      </p>
      
      <div className="space-y-8">
        <section>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <Package className="h-4 w-4 mr-2 text-blue-400" />
            Unused Imports
          </h4>
          {renderUnusedImports()}
        </section>
        
        <section>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <Code className="h-4 w-4 mr-2 text-blue-400" />
            Unused Variables
          </h4>
          {renderUnusedVariables()}
        </section>
        
        <section>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <Brackets className="h-4 w-4 mr-2 text-blue-400" />
            Unused Functions
          </h4>
          {renderUnusedFunctions()}
        </section>
        
        <section>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <FileCode className="h-4 w-4 mr-2 text-blue-400" />
            Unused Files
          </h4>
          {renderUnusedFiles()}
        </section>
        
        <section>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <Code className="h-4 w-4 mr-2 text-blue-400" />
            Unused CSS Selectors
          </h4>
          {renderUnusedCssSelectors()}
        </section>
        
        <section>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <Package className="h-4 w-4 mr-2 text-blue-400" />
            Unused Dependencies
          </h4>
          {renderUnusedDependencies()}
        </section>
      </div>
    </div>
  );
};

export default UnusedCodeReport;

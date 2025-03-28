
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import UnusedFilesSection from '@/components/codeAnalysis/sections/UnusedFilesSection';
import UnusedImportsSection from '@/components/codeAnalysis/sections/UnusedImportsSection';
import UnusedVariablesSection from '@/components/codeAnalysis/sections/UnusedVariablesSection';
import UnusedCssSelectorsSection from '@/components/codeAnalysis/sections/UnusedCssSelectorsSection';
import UnusedDependenciesSection from '@/components/codeAnalysis/sections/UnusedDependenciesSection';
import DeadCodePathsSection from '@/components/codeAnalysis/sections/DeadCodePathsSection';
import DuplicateCodeSection from '@/components/codeAnalysis/sections/DuplicateCodeSection';
import ComplexCodeSection from '@/components/codeAnalysis/sections/ComplexCodeSection';
import { mockedAnalysisResults } from '@/utils/codeAnalysis/mockData';

const CodeAnalysisReport = () => {
  // Using mock data for demonstration
  const analysisResult = mockedAnalysisResults;
  
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center mb-2 text-gradient">
            Code Cleanup Analysis Report
          </h1>
          <p className="text-white/70 mb-4">
            This report identifies potential issues in the codebase that could be improved or removed.
          </p>
          <Card className="glass-morphism border-white/10 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col space-y-1">
                <span className="text-white/60 text-sm">Project Size</span>
                <div className="flex items-end space-x-1">
                  <span className="text-2xl font-bold text-gradient">
                    {analysisResult.metrics.beforeCleanup.projectSize} KB
                  </span>
                  {analysisResult.metrics.beforeCleanup.projectSize > 
                   analysisResult.metrics.afterCleanup.projectSize && (
                    <span className="text-green-500 text-sm mb-0.5">
                      (-{analysisResult.metrics.beforeCleanup.projectSize - 
                         analysisResult.metrics.afterCleanup.projectSize} KB)
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-white/60 text-sm">File Count</span>
                <div className="flex items-end space-x-1">
                  <span className="text-2xl font-bold text-gradient">
                    {analysisResult.metrics.beforeCleanup.fileCount}
                  </span>
                  {analysisResult.metrics.beforeCleanup.fileCount > 
                   analysisResult.metrics.afterCleanup.fileCount && (
                    <span className="text-green-500 text-sm mb-0.5">
                      (-{analysisResult.metrics.beforeCleanup.fileCount - 
                         analysisResult.metrics.afterCleanup.fileCount})
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-white/60 text-sm">Dependencies</span>
                <div className="flex items-end space-x-1">
                  <span className="text-2xl font-bold text-gradient">
                    {analysisResult.metrics.beforeCleanup.dependencyCount}
                  </span>
                  {analysisResult.metrics.beforeCleanup.dependencyCount > 
                   analysisResult.metrics.afterCleanup.dependencyCount && (
                    <span className="text-green-500 text-sm mb-0.5">
                      (-{analysisResult.metrics.beforeCleanup.dependencyCount - 
                         analysisResult.metrics.afterCleanup.dependencyCount})
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <Separator className="border-white/10" />
        
        <div className="space-y-8">
          <UnusedFilesSection unusedFiles={analysisResult.unusedFiles} />
          <UnusedImportsSection unusedImports={analysisResult.unusedImports} />
          <UnusedVariablesSection unusedVariables={analysisResult.unusedVariables} />
          <UnusedCssSelectorsSection unusedCssSelectors={analysisResult.unusedCssSelectors} />
          <UnusedDependenciesSection unusedDependencies={analysisResult.unusedDependencies} />
          <DeadCodePathsSection deadCodePaths={analysisResult.deadCodePaths} />
          <DuplicateCodeSection duplicateCode={analysisResult.duplicateCode} />
          <ComplexCodeSection complexCode={analysisResult.complexCode} />
        </div>
      </div>
    </div>
  );
};

export default CodeAnalysisReport;


import React from 'react';
import { AnalysisResult } from '@/utils/codeAnalysis/types';
import { FileCode, AlertTriangle, Info, BarChart2, FileWarning, Copy, Code2, Package } from 'lucide-react';
import IssueSection from './shared/IssueSection';
import IssueItem from './shared/IssueItem';

interface CodeAnalysisReportProps {
  analysis: AnalysisResult;
  loading?: boolean;
}

const CodeAnalysisReport: React.FC<CodeAnalysisReportProps> = ({ 
  analysis, 
  loading = false 
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin mr-2">
          <FileCode size={24} />
        </div>
        <p>Analyzing codebase...</p>
      </div>
    );
  }

  const totalIssues = 
    analysis.unusedFiles.length + 
    analysis.unusedImports.length + 
    analysis.unusedVariables.length + 
    analysis.unusedFunctions.length +
    analysis.unusedCssSelectors.length + 
    analysis.deadCodePaths.length + 
    analysis.complexCode.length +
    analysis.duplicateCode.length +
    analysis.unusedDependencies.length;

  if (totalIssues === 0) {
    return (
      <div className="bg-green-500/10 p-6 rounded-md border border-green-500/30 flex items-center">
        <div className="bg-green-500/20 p-3 rounded-full mr-4">
          <Info className="text-green-500" size={24} />
        </div>
        <div>
          <h3 className="text-lg font-medium text-green-500">Clean Codebase</h3>
          <p className="text-white/70">No issues detected in the analyzed files.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-amber-500/10 p-6 rounded-md border border-amber-500/30 flex items-center">
        <div className="bg-amber-500/20 p-3 rounded-full mr-4">
          <AlertTriangle className="text-amber-500" size={24} />
        </div>
        <div>
          <h3 className="text-lg font-medium text-amber-500">
            {totalIssues} issues detected
          </h3>
          <p className="text-white/70">
            The analysis found several issues that could be improved.
          </p>
        </div>
      </div>

      {/* Project metrics section */}
      {(analysis.metrics?.beforeCleanup && Object.keys(analysis.metrics.beforeCleanup).length > 0) && (
        <IssueSection 
          title="Project Metrics" 
          count={3}
          description="Current project statistics and potential improvements."
          className="border-blue-500/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-500/10 p-4 rounded-md">
              <div className="flex items-center">
                <FileCode className="h-5 w-5 mr-2 text-blue-400" />
                <h4 className="font-medium">File Count</h4>
              </div>
              <div className="mt-2 flex items-baseline">
                <span className="text-2xl font-bold">{analysis.metrics.beforeCleanup.fileCount}</span>
                {analysis.metrics.afterCleanup && (
                  <span className="ml-2 text-sm text-green-400">
                    {analysis.metrics.beforeCleanup.fileCount - analysis.metrics.afterCleanup.fileCount > 0 ? 
                      `${analysis.metrics.beforeCleanup.fileCount - analysis.metrics.afterCleanup.fileCount} removable` : 
                      'Optimized'}
                  </span>
                )}
              </div>
            </div>

            <div className="bg-blue-500/10 p-4 rounded-md">
              <div className="flex items-center">
                <BarChart2 className="h-5 w-5 mr-2 text-blue-400" />
                <h4 className="font-medium">Project Size</h4>
              </div>
              <div className="mt-2 flex items-baseline">
                <span className="text-2xl font-bold">{analysis.metrics.beforeCleanup.projectSize} KB</span>
                {analysis.metrics.afterCleanup && (
                  <span className="ml-2 text-sm text-green-400">
                    {analysis.metrics.beforeCleanup.projectSize - analysis.metrics.afterCleanup.projectSize > 0 ? 
                      `${analysis.metrics.beforeCleanup.projectSize - analysis.metrics.afterCleanup.projectSize} KB savable` : 
                      'Optimized'}
                  </span>
                )}
              </div>
            </div>

            <div className="bg-blue-500/10 p-4 rounded-md">
              <div className="flex items-center">
                <Package className="h-5 w-5 mr-2 text-blue-400" />
                <h4 className="font-medium">Dependencies</h4>
              </div>
              <div className="mt-2 flex items-baseline">
                <span className="text-2xl font-bold">{analysis.metrics.beforeCleanup.dependencyCount}</span>
                {analysis.metrics.afterCleanup && (
                  <span className="ml-2 text-sm text-green-400">
                    {analysis.metrics.beforeCleanup.dependencyCount - analysis.metrics.afterCleanup.dependencyCount > 0 ? 
                      `${analysis.metrics.beforeCleanup.dependencyCount - analysis.metrics.afterCleanup.dependencyCount} removable` : 
                      'Optimized'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </IssueSection>
      )}

      {analysis.unusedFiles.length > 0 && (
        <IssueSection 
          title="Unused Files" 
          count={analysis.unusedFiles.length}
          description="These files appear to be unused in the project."
        >
          <div className="space-y-2 mt-4">
            {analysis.unusedFiles.map((file, index) => (
              <IssueItem
                key={index}
                file={file}
                description={null}
                icon={<FileWarning size={16} className="text-amber-500" />}
              />
            ))}
          </div>
        </IssueSection>
      )}

      {analysis.unusedImports.length > 0 && (
        <IssueSection 
          title="Unused Imports" 
          count={analysis.unusedImports.length}
          description="These imports are not used in their respective files."
        >
          <div className="space-y-2 mt-4">
            {analysis.unusedImports.map((issue, index) => (
              <IssueItem
                key={index}
                file={issue.file}
                description={
                  <p className="text-sm text-white/70">
                    Line {issue.line}: <code className="bg-white/10 px-1 py-0.5 rounded">{issue.name}</code>
                  </p>
                }
              />
            ))}
          </div>
        </IssueSection>
      )}

      {analysis.duplicateCode.length > 0 && (
        <IssueSection 
          title="Duplicate Code" 
          count={analysis.duplicateCode.length}
          description="These code segments appear in multiple places and could be refactored."
        >
          <div className="space-y-2 mt-4">
            {analysis.duplicateCode.map((issue, index) => (
              <IssueItem
                key={index}
                file={issue.files.join(', ')}
                description={
                  <div>
                    <p className="text-sm text-white/70">
                      {issue.lines} lines with {Math.round(issue.similarity * 100)}% similarity
                    </p>
                    {issue.impact && (
                      <p className="text-sm mt-1">
                        <span className="font-medium">Impact:</span> {issue.impact}
                      </p>
                    )}
                    {issue.risk && (
                      <p className="text-sm mt-1">
                        <span className="font-medium">Risk:</span> {issue.risk}
                      </p>
                    )}
                  </div>
                }
                icon={<Copy size={16} className="text-amber-500" />}
              />
            ))}
          </div>
        </IssueSection>
      )}

      {analysis.complexCode.length > 0 && (
        <IssueSection 
          title="Complex Code" 
          count={analysis.complexCode.length}
          description="These functions have high cyclomatic complexity and should be refactored."
        >
          <div className="space-y-2 mt-4">
            {analysis.complexCode.map((issue, index) => (
              <IssueItem
                key={index}
                file={issue.file}
                description={
                  <div>
                    <p className="text-sm text-white/70">
                      Line {issue.line}: <code className="bg-white/10 px-1 py-0.5 rounded">{issue.function}</code>
                      <span className="ml-2 px-1.5 py-0.5 rounded bg-red-500/20 text-red-300">
                        Complexity: {issue.complexity}
                      </span>
                    </p>
                    {issue.suggestion && (
                      <p className="text-sm mt-1">
                        <span className="font-medium">Suggestion:</span> {issue.suggestion}
                      </p>
                    )}
                    {issue.impact && (
                      <p className="text-sm mt-1">
                        <span className="font-medium">Impact:</span> {issue.impact}
                      </p>
                    )}
                  </div>
                }
                icon={<Code2 size={16} className="text-amber-500" />}
              />
            ))}
          </div>
        </IssueSection>
      )}

      {analysis.deadCodePaths.length > 0 && (
        <IssueSection 
          title="Dead Code Paths" 
          count={analysis.deadCodePaths.length}
          description="These code paths are unreachable and can be safely removed."
        >
          <div className="space-y-2 mt-4">
            {analysis.deadCodePaths.map((issue, index) => (
              <IssueItem
                key={index}
                file={issue.file}
                description={
                  <p className="text-sm text-white/70">
                    Line {issue.line}: {issue.description}
                  </p>
                }
              />
            ))}
          </div>
        </IssueSection>
      )}

      {analysis.unusedDependencies.length > 0 && (
        <IssueSection 
          title="Unused Dependencies" 
          count={analysis.unusedDependencies.length}
          description="These dependencies are declared in package.json but not used in the code."
        >
          <div className="space-y-2 mt-4">
            {analysis.unusedDependencies.map((dep, index) => (
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
      )}

      {analysis.unusedVariables.length > 0 && (
        <IssueSection 
          title="Unused Variables" 
          count={analysis.unusedVariables.length}
          description="These variables are defined but not used in their scope."
        >
          <div className="space-y-2 mt-4">
            {analysis.unusedVariables.map((issue, index) => (
              <IssueItem
                key={index}
                file={issue.file}
                description={
                  <p className="text-sm text-white/70">
                    Line {issue.line}: <code className="bg-white/10 px-1 py-0.5 rounded">{issue.name}</code>
                  </p>
                }
              />
            ))}
          </div>
        </IssueSection>
      )}

      {analysis.unusedCssSelectors.length > 0 && (
        <IssueSection 
          title="Unused CSS Selectors" 
          count={analysis.unusedCssSelectors.length}
          description="These CSS selectors are not used in the codebase."
        >
          <div className="space-y-2 mt-4">
            {analysis.unusedCssSelectors.map((issue, index) => (
              <IssueItem
                key={index}
                file={issue.file}
                description={
                  <p className="text-sm text-white/70">
                    Line {issue.line}: <code className="bg-white/10 px-1 py-0.5 rounded">.{issue.selector}</code>
                  </p>
                }
              />
            ))}
          </div>
        </IssueSection>
      )}
    </div>
  );
};

export default CodeAnalysisReport;

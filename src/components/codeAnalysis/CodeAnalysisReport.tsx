import React from 'react';
import { AnalysisResult } from '@/utils/codeAnalysis/analysisUtils';
import { FileCode, AlertTriangle, Info } from 'lucide-react';
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
    analysis.unusedCssSelectors.length + 
    analysis.deadCodePaths.length + 
    analysis.complexCode.length;

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

      {/* Similar sections for other issue types */}
    </div>
  );
};

export default CodeAnalysisReport;

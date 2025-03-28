
import React from 'react';
import { AnalysisResult } from '@/utils/codeAnalysis/analysisUtils';
import { FileCode, AlertTriangle, Info } from 'lucide-react';

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
              <div key={index} className="p-3 bg-white/5 rounded-md flex items-center">
                <FileCode size={16} className="mr-2 text-amber-500" />
                <span className="font-mono text-sm">{file}</span>
              </div>
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
              <div key={index} className="p-3 bg-white/5 rounded-md">
                <div className="flex items-center mb-1">
                  <FileCode size={16} className="mr-2 text-amber-500" />
                  <span className="font-mono text-sm">{issue.file}</span>
                </div>
                <div className="pl-6 border-l border-white/10 ml-2 mt-2">
                  <p className="text-sm text-white/70">
                    Line {issue.line}: <code className="bg-white/10 px-1 py-0.5 rounded">{issue.name}</code>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </IssueSection>
      )}

      {/* Similar sections for other issue types */}
    </div>
  );
};

const IssueSection: React.FC<{
  title: string;
  count: number;
  description: string;
  children: React.ReactNode;
}> = ({ title, count, description, children }) => {
  return (
    <div className="border border-white/10 rounded-md overflow-hidden">
      <div className="bg-white/5 p-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          <span className="analysis-counter analysis-counter-warning">{count}</span>
        </div>
        <p className="text-sm text-white/70 mt-1">{description}</p>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default CodeAnalysisReport;

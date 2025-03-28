
import React from 'react';
import { AnalysisResult } from '@/utils/codeAnalysis/types';
import AnalysisLoadingIndicator from './sections/AnalysisLoadingIndicator';
import CleanCodebaseMessage from './sections/CleanCodebaseMessage';
import IssuesDetectedMessage from './sections/IssuesDetectedMessage';
import ProjectMetricsSection from './sections/ProjectMetricsSection';
import UnusedFilesSection from './sections/UnusedFilesSection';
import UnusedImportsSection from './sections/UnusedImportsSection';
import DuplicateCodeSection from './sections/DuplicateCodeSection';
import ComplexCodeSection from './sections/ComplexCodeSection';
import DeadCodePathsSection from './sections/DeadCodePathsSection';
import UnusedDependenciesSection from './sections/UnusedDependenciesSection';
import UnusedVariablesSection from './sections/UnusedVariablesSection';
import UnusedCssSelectorsSection from './sections/UnusedCssSelectorsSection';

interface CodeAnalysisReportProps {
  analysis: AnalysisResult;
  loading?: boolean;
}

const CodeAnalysisReport: React.FC<CodeAnalysisReportProps> = ({ 
  analysis, 
  loading = false 
}) => {
  if (loading) {
    return <AnalysisLoadingIndicator />;
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
    return <CleanCodebaseMessage />;
  }

  return (
    <div className="space-y-6">
      <IssuesDetectedMessage issueCount={totalIssues} />
      
      <ProjectMetricsSection metrics={analysis.metrics} />
      <UnusedFilesSection unusedFiles={analysis.unusedFiles} />
      <UnusedImportsSection unusedImports={analysis.unusedImports} />
      <DuplicateCodeSection duplicateCode={analysis.duplicateCode} />
      <ComplexCodeSection complexCode={analysis.complexCode} />
      <DeadCodePathsSection deadCodePaths={analysis.deadCodePaths} />
      <UnusedDependenciesSection unusedDependencies={analysis.unusedDependencies} />
      <UnusedVariablesSection unusedVariables={analysis.unusedVariables} />
      <UnusedCssSelectorsSection unusedCssSelectors={analysis.unusedCssSelectors} />
    </div>
  );
};

export default CodeAnalysisReport;


import { AnalysisResult } from '@/utils/codeAnalysis/types';
import { mockedAnalysisResults, duplicateCodeMock, complexityReportMock, performanceIssuesMock } from '@/utils/codeAnalysis/mockData';

/**
 * Run code analysis on the project
 * @returns Analysis results
 */
export const analyzeProject = async (): Promise<AnalysisResult> => {
  return {
    unusedImports: mockedAnalysisResults.unusedImports,
    unusedVariables: mockedAnalysisResults.unusedVariables,
    unusedCssSelectors: mockedAnalysisResults.unusedCssSelectors,
    unusedFunctions: mockedAnalysisResults.unusedFunctions,
    unusedFiles: mockedAnalysisResults.unusedFiles,
    unusedDependencies: mockedAnalysisResults.unusedDependencies,
    duplicateCode: duplicateCodeMock,
    complexCode: complexityReportMock,
    performanceIssues: performanceIssuesMock,
    summary: mockedAnalysisResults.summary
  };
};

// Get analysis results - either from a real run or mock data
export const getAnalysisResults = async (): Promise<AnalysisResult> => {
  return analyzeProject();
};

export default analyzeProject;

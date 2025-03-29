
import { AnalysisResult } from '@/types/codeAnalysis/types';
import { mockedAnalysisResults, duplicateCodeMock, complexityReportMock, performanceIssuesMock } from '@/utils/codeAnalysis/mockData';

/**
 * Run code analysis on the project
 * @returns Analysis results
 */
export const analyzeProject = async (): Promise<AnalysisResult> => {
  return {
    unusedImports: mockedAnalysisResults.unusedImports,
    unusedVariables: mockedAnalysisResults.unusedVariables,
    unusedFiles: mockedAnalysisResults.unusedFiles,
    unusedSelectors: mockedAnalysisResults.unusedCssSelectors,
    unusedDependencies: mockedAnalysisResults.unusedDependencies,
    unusedFunctions: mockedAnalysisResults.unusedFunctions,
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

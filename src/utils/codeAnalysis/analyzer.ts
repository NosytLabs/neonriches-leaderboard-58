
import { AnalysisResult, UnusedImport, UnusedVariable, UnusedCssSelector, UnusedFunction } from '@/types/code-analysis';
import { mockPerformanceIssues, duplicateCodeMock, mockedAnalysisResults } from './mockData';

/**
 * Run code analysis on the project
 * @returns Analysis results
 */
export const analyzeProject = async (): Promise<AnalysisResult> => {
  return {
    unusedImports: mockedAnalysisResults.unusedImports as UnusedImport[],
    unusedVariables: mockedAnalysisResults.unusedVariables as UnusedVariable[],
    unusedCssSelectors: mockedAnalysisResults.unusedCssSelectors as UnusedCssSelector[],
    unusedFunctions: mockedAnalysisResults.unusedFunctions as UnusedFunction[],
    duplicateCode: duplicateCodeMock,
    summary: mockedAnalysisResults.summary
  };
};

export default analyzeProject;

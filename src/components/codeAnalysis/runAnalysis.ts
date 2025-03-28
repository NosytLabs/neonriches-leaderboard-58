
import { mockedAnalysisResults } from '@/utils/codeAnalysis/mockData';
import { AnalysisResult } from '@/utils/codeAnalysis/types';

// In a real implementation, this would actually run the analysis
// For this demo, we'll just return mock data
export const runCodeAnalysis = async (): Promise<AnalysisResult> => {
  // Simulate a delay to mimic real analysis
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return mockedAnalysisResults;
};

// Get analysis results - either from a real run or mock data
export const getAnalysisResults = async (): Promise<AnalysisResult> => {
  return runCodeAnalysis();
};

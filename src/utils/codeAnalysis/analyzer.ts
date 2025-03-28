
import { AnalysisResult } from './types';
import { mockedAnalysisResults } from './mockData';

// Function to run analysis on project files
export const analyzeProject = async (
  projectRoot: string
): Promise<AnalysisResult> => {
  try {
    // In a real implementation, this would analyze the actual codebase
    // For demo purposes, we'll return mock data
    return mockedAnalysisResults;
  } catch (error) {
    console.error('Error analyzing project:', error);
    // Return empty results on error
    return {
      unusedFiles: [],
      unusedImports: [],
      unusedVariables: [],
      unusedCssSelectors: [],
      deadCodePaths: [],
      duplicateCode: [],
      complexCode: [],
      unusedFunctions: [],
      unusedDependencies: [],
      metrics: {
        beforeCleanup: {
          projectSize: 0,
          fileCount: 0,
          dependencyCount: 0
        },
        afterCleanup: {
          projectSize: 0,
          fileCount: 0,
          dependencyCount: 0
        }
      }
    };
  }
};

// Export the analysis function for use in the application
export default analyzeProject;

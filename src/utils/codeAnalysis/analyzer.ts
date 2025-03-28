
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
      complexity: [],
      duplicates: [],
      unused: {
        imports: [],
        variables: [],
        functions: [],
        components: []
      },
      summary: {
        totalFiles: 0,
        totalComponents: 0,
        totalHooks: 0,
        totalUtilities: 0,
        complexityScore: 0,
        duplicateScore: 0,
        unusedCode: 0,
        overallHealth: 0
      },
      unusedFiles: [],
      unusedImports: [],
      unusedVariables: [],
      unusedCssSelectors: [],
      performanceIssues: [],
      accessibilityIssues: [],
      securityIssues: [],
      bestPracticeViolations: [],
      codeSmells: [],
      deadCodePaths: [],
      duplicateCode: [],
      complexCode: [],
      unusedDependencies: [],
      unusedFunctions: [],
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

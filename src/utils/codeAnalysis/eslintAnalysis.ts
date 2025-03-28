
import { AnalysisResult } from './types';

// Mock implementation for ESLint analysis
export const runEslintAnalysis = async (
  projectRoot: string
): Promise<AnalysisResult['bestPracticeViolations']> => {
  // In a real implementation, this would use ESLint to analyze the codebase
  // For demo purposes, we'll return mock data
  return [
    {
      file: 'src/components/SomeComponent.tsx',
      rule: 'react-hooks/exhaustive-deps',
      line: 24,
      message: 'React Hook useEffect has a missing dependency: \'props.id\'',
      severity: 'warning'
    },
    {
      file: 'src/utils/helpers.ts',
      rule: 'no-unused-vars',
      line: 12,
      message: '\'config\' is defined but never used',
      severity: 'warning'
    }
  ];
};

// Export the analysis function for use in the application
export default runEslintAnalysis;

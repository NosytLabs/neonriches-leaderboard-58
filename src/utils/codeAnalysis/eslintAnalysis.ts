
import { ComplexityItem } from './types';

// Mock ESLint results for demo purposes
const mockESLintResults = [
  {
    filePath: 'src/components/ComplexComponent.tsx',
    messages: [
      {
        ruleId: 'complexity',
        message: 'Function has a complexity of 15.',
        line: 25,
        column: 3,
        severity: 2,
        nodeType: 'FunctionDeclaration',
      },
    ],
  },
];

// Function to run ESLint on files
export const runESLintAnalysis = async (
  patterns: string[]
): Promise<ComplexityItem[]> => {
  // In a real implementation, we would use ESLint API
  console.log('Running ESLint analysis on', patterns);
  
  // For demo, return mock results
  return mockESLintResults.map((result) => ({
    id: `eslint-${Math.random().toString(36).substr(2, 9)}`,
    name: result.filePath.split('/').pop() || '',
    file: result.filePath,
    complexity: 15,
    linesOfCode: 100,
    parameters: 5,
    nestedLevel: 3,
    issues: result.messages.map((msg) => msg.message),
    line: result.messages[0].line,
    explanation: 'This function has excessive cognitive complexity',
    status: 'warning',
  }));
};

// Export the analysis function
export default runESLintAnalysis;

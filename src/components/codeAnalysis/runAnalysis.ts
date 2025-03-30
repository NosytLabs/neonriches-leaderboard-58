
import { AnalysisResult } from '@/utils/codeAnalysis/types';

// Mock function to simulate running code analysis
// In a real application, this would connect to a backend service
export const getAnalysisResults = async (): Promise<AnalysisResult> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return mock data
  return {
    unusedImports: [
      { name: 'useState', path: 'react', file: 'src/components/Example.tsx', line: 1 },
      { name: 'Button', path: '@/components/ui/button', file: 'src/pages/Unused.tsx', line: 3 }
    ],
    unusedVariables: [
      { name: 'counter', type: 'number', file: 'src/components/Counter.tsx', line: 5 },
      { name: 'isActive', type: 'boolean', file: 'src/hooks/useToggle.ts', line: 8 }
    ],
    unusedFiles: [
      { path: 'src/utils/deprecated.ts', size: 2.5 },
      { path: 'src/components/OldComponent.tsx', size: 8.7 }
    ],
    unusedSelectors: [
      { name: '.unused-class', file: 'src/styles/main.css', line: 42 },
      { name: '#old-id', file: 'src/styles/legacy.css', line: 18 }
    ],
    deadCode: [
      { description: 'Unreachable code block after return statement', file: 'src/utils/helpers.ts', line: 45 },
      { description: 'Condition always evaluates to false', file: 'src/components/FeatureFlag.tsx', line: 23 }
    ],
    duplicateCode: [
      { 
        id: 'dup-1',
        files: [
          { path: 'src/utils/format.ts' },
          { path: 'src/utils/string.ts' }
        ],
        similarity: 0.95,
        lines: 18
      },
      {
        id: 'dup-2',
        files: [
          { path: 'src/components/UserCard.tsx' },
          { path: 'src/components/ProfileCard.tsx' }
        ],
        similarity: 0.88,
        lines: 42
      }
    ],
    complexCode: [
      {
        name: 'processUserData',
        file: 'src/utils/userProcessing.ts',
        complexity: 24,
        line: 12
      },
      {
        name: 'renderComponent',
        file: 'src/components/ComplexComponent.tsx',
        complexity: 18,
        line: 45
      }
    ],
    unusedDependencies: [
      '@deprecated/package',
      'unused-utility'
    ],
    metrics: {
      beforeCleanup: {
        projectSize: 4820, // KB
        fileCount: 156,
        dependencyCount: 34
      },
      afterCleanup: {
        projectSize: 3950, // KB
        fileCount: 138,
        dependencyCount: 29
      }
    }
  };
};

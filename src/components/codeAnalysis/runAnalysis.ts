
import { AnalysisResult } from '@/utils/codeAnalysis/types';

/**
 * Mock function to retrieve code analysis results
 * In a real implementation, this would run static analysis on the codebase
 */
export const getAnalysisResults = async (): Promise<AnalysisResult> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    unusedImports: [
      { name: 'useState', path: 'react', file: 'src/components/UnusedComponent.tsx', line: 1 },
      { name: 'Button', path: '@/components/ui/button', file: 'src/pages/UnusedPage.tsx', line: 3 },
      { name: 'formatDate', path: '@/utils/formatters', file: 'src/components/EventCard.tsx', line: 5 }
    ],
    unusedVariables: [
      { name: 'isLoading', type: 'boolean', file: 'src/components/DataTable.tsx', line: 8 },
      { name: 'userData', type: 'UserData', file: 'src/pages/Profile.tsx', line: 12 },
      { name: 'handleSubmit', type: 'function', file: 'src/components/ContactForm.tsx', line: 25 }
    ],
    unusedFiles: [
      { path: 'src/components/OldComponent.tsx', size: 45 },
      { path: 'src/utils/deprecatedHelper.ts', size: 12 },
      { path: 'src/pages/UnusedFeature.tsx', size: 78 }
    ],
    unusedSelectors: [
      { name: '.unused-class', file: 'src/styles/main.css', line: 156 },
      { name: '#old-id', file: 'src/styles/components.css', line: 89 },
      { name: '.legacy-item', file: 'src/styles/legacy.css', line: 34 }
    ],
    deadCode: [
      { description: 'Unreachable code after return statement', file: 'src/utils/helpers.ts', line: 45 },
      { description: 'Code in always-false condition block', file: 'src/components/FeatureFlag.tsx', line: 23 },
      { description: 'Unused function never called in codebase', file: 'src/utils/math.ts', line: 67 }
    ],
    duplicateCode: [
      {
        id: 1,
        files: [
          { path: 'src/components/UserCard.tsx' },
          { path: 'src/components/ProfileCard.tsx' }
        ],
        similarity: 0.92,
        lines: 45,
        recommendation: 'Create a shared Card component'
      },
      {
        id: 2,
        files: [
          { path: 'src/utils/formatDate.ts' },
          { path: 'src/components/Calendar/utils.ts' }
        ],
        similarity: 0.88,
        lines: 25,
        recommendation: 'Consolidate date formatting functions into a single utility'
      }
    ],
    complexCode: [
      { 
        name: 'processUserData', 
        file: 'src/utils/userProcessor.ts', 
        complexity: 25, 
        line: 34,
        explanation: 'Function has too many nested conditions and loops'
      },
      {
        name: 'calculateTotals',
        file: 'src/utils/calculationEngine.ts',
        complexity: 18,
        line: 112,
        explanation: 'Function performs too many operations and has complex branching logic'
      }
    ],
    unusedDependencies: [
      'unused-library',
      'legacy-component',
      'old-utility'
    ],
    performanceIssues: [
      {
        description: 'Expensive calculation in render loop',
        file: 'src/components/DataVisualizer.tsx',
        lineNumber: 78,
        severity: 'high',
        recommendation: 'Move calculation to useMemo hook or outside the component'
      },
      {
        description: 'Large array map without memoization',
        file: 'src/components/ItemList.tsx',
        lineNumber: 45,
        severity: 'medium',
        recommendation: 'Use useMemo to prevent unnecessary re-renders'
      }
    ],
    metrics: {
      beforeCleanup: {
        projectSize: 5240, // 5.24 MB in KB
        fileCount: 187,
        dependencyCount: 42
      },
      afterCleanup: {
        projectSize: 4730, // 4.73 MB in KB
        fileCount: 175,
        dependencyCount: 38
      }
    }
  };
};

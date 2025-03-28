
import { AnalysisResult } from './types';

export const generateMockAnalysisResult = (): AnalysisResult => {
  return {
    unusedFiles: [
      'src/components/legacy/OldComponent.tsx',
      'src/utils/deprecated/helperFunctions.ts'
    ],
    unusedFunctions: [
      { file: 'src/utils/helpers.ts', name: 'formatLegacyDate', line: 42 },
      { file: 'src/components/common/Button.tsx', name: 'handleLegacyClick', line: 67 }
    ],
    unusedImports: [
      { file: 'src/components/Dashboard.tsx', name: 'useState', line: 3 },
      { file: 'src/utils/api.ts', name: 'axios', line: 1 }
    ],
    unusedVariables: [
      { file: 'src/context/AuthContext.tsx', name: 'loading', line: 12 },
      { file: 'src/hooks/useData.ts', name: 'error', line: 8 }
    ],
    unusedCssSelectors: [
      { file: 'src/styles/main.css', selector: 'legacy-button', line: 156 },
      { file: 'src/styles/components.css', selector: 'unused-container', line: 78 }
    ],
    deadCodePaths: [
      { file: 'src/utils/api.ts', description: 'Unreachable code after return statement', line: 45 },
      { file: 'src/components/User.tsx', description: 'Condition always evaluates to false', line: 92 }
    ],
    duplicateCode: [
      { 
        files: ['src/utils/formatters.ts', 'src/utils/helpers.ts'], 
        similarity: 0.95, 
        lines: 12,
        impact: 'Medium',
        risk: 'Low'
      },
      { 
        files: ['src/components/Button.tsx', 'src/components/IconButton.tsx'], 
        similarity: 0.85, 
        lines: 8,
        impact: 'Low',
        risk: 'Low'
      }
    ],
    complexCode: [
      { 
        file: 'src/utils/dataProcessing.ts', 
        function: 'transformData', 
        complexity: 15, 
        line: 37,
        impact: 'Medium',
        suggestion: 'Break into smaller functions and reduce nested conditions.'
      },
      { 
        file: 'src/components/Table.tsx', 
        function: 'renderRows', 
        complexity: 12, 
        line: 124,
        impact: 'Low',
        suggestion: 'Consider breaking into smaller functions.'
      }
    ],
    unusedDependencies: [
      'unused-package',
      'legacy-library'
    ],
    metrics: {
      beforeCleanup: {
        projectSize: 15240, // KB
        fileCount: 120,
        dependencyCount: 42
      },
      afterCleanup: {
        projectSize: 14850, // KB
        fileCount: 118,
        dependencyCount: 40
      }
    }
  };
};

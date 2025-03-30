
import { ComplexityItem, DuplicateCodeInfo, ImportInfo, PerformanceIssue, VariableInfo } from '@/types/codeAnalysis/types';

// Mock data for the code analysis tools
export const mockedAnalysisResults = {
  unusedImports: [
    {
      name: 'useState',
      path: 'react',
      file: 'src/components/Unused.tsx',
      line: 1,
      column: 10
    },
    {
      name: 'Button',
      path: '@/components/ui/button',
      file: 'src/components/EmptyState.tsx',
      line: 2,
      column: 10
    }
  ],
  unusedVariables: [
    {
      name: 'count',
      type: 'number',
      file: 'src/components/Counter.tsx',
      line: 5
    },
    {
      name: 'isOpen',
      type: 'boolean',
      file: 'src/components/Dialog.tsx',
      line: 7
    }
  ],
  unusedFiles: [
    'src/components/Unused.tsx',
    'src/utils/legacy.ts',
    'src/styles/unused.css'
  ],
  unusedCssSelectors: [
    {
      selector: '.unused-class',
      file: 'src/styles/global.css',
      line: 42
    },
    {
      selector: '.legacy-component',
      file: 'src/styles/components.css',
      line: 78
    }
  ],
  unusedFunctions: [
    {
      name: 'formatLegacyDate',
      file: 'src/utils/formatters.ts',
      line: 45
    },
    {
      name: 'convertOldData',
      file: 'src/utils/converters.ts',
      line: 23
    }
  ],
  unusedDependencies: [
    'moment',
    'redux-thunk',
    'react-bootstrap'
  ],
  summary: {
    totalIssues: 12,
    criticalIssues: 2,
    warningIssues: 6,
    infoIssues: 4,
    estimatedSavings: {
      fileCount: 3,
      dependencyCount: 3,
      sizeReduction: '245KB'
    }
  }
};

export const duplicateCodeMock: DuplicateCodeInfo[] = [
  {
    id: 'dup-1',
    similarity: 0.95,
    files: [
      { path: 'src/components/ProfileCard.tsx' },
      { path: 'src/components/UserCard.tsx' }
    ],
    lines: 32,
    recommendation: 'Extract common card structure into a shared CardLayout component.'
  },
  {
    id: 'dup-2',
    similarity: 0.87,
    files: [
      { path: 'src/utils/formatters.ts' },
      { path: 'src/utils/stringUtils.ts' }
    ],
    lines: 18,
    recommendation: 'Consolidate date formatting functions into a single utility file.'
  },
  {
    id: 'dup-3',
    similarity: 0.75,
    files: [
      { path: 'src/hooks/useWindowSize.ts' },
      { path: 'src/hooks/useViewport.ts' }
    ],
    lines: 25,
    recommendation: 'Merge these similar hooks into a single responsive hook with more options.'
  }
];

export const complexityReportMock: ComplexityItem[] = [
  {
    id: 'comp-1',
    name: 'processTransactionData',
    file: 'src/utils/transactionUtils.ts',
    complexity: 24,
    line: 45,
    issues: [
      'Too many nested conditions',
      'Multiple responsibilities',
      'Long function (50+ lines)'
    ],
    explanation: 'Function has high cyclomatic complexity due to excessive branching and nested conditions.'
  },
  {
    id: 'comp-2',
    name: 'UserProfileManager',
    file: 'src/components/ProfileManager.tsx',
    complexity: 18,
    line: 23,
    issues: [
      'Component handles too many responsibilities',
      'Complex state management',
      'Excessive prop drilling'
    ],
    explanation: 'Component is trying to do too much; should be split into smaller, focused components.'
  },
  {
    id: 'comp-3',
    name: 'calculateTotalSpending',
    file: 'src/utils/spendingCalculator.ts',
    complexity: 15,
    line: 12,
    issues: [
      'Complex algorithm with many edge cases',
      'Inefficient calculations',
      'Lacks memoization'
    ],
    explanation: 'Function performs repeated calculations that could be optimized with memoization.'
  }
];

export const performanceIssuesMock: PerformanceIssue[] = [
  {
    id: 'perf-1',
    description: 'Inefficient list rendering without key prop',
    file: 'src/components/LeaderboardList.tsx',
    lineNumber: 45,
    severity: 'high',
    recommendation: 'Add a stable, unique key prop to each item in the list to improve reconciliation.'
  },
  {
    id: 'perf-2',
    description: 'Large bundle size due to importing entire library',
    file: 'src/utils/helpers.ts',
    lineNumber: 3,
    severity: 'high',
    recommendation: 'Use selective imports instead of importing the entire library.'
  },
  {
    id: 'perf-3',
    description: 'Excessive re-renders due to missing memoization',
    file: 'src/components/Dashboard.tsx',
    lineNumber: 78,
    severity: 'medium',
    recommendation: 'Use React.memo, useMemo, or useCallback to prevent unnecessary re-renders.'
  },
  {
    id: 'perf-4',
    description: 'Unoptimized image loading',
    file: 'src/components/ImageGallery.tsx',
    lineNumber: 24,
    severity: 'medium',
    recommendation: 'Implement lazy loading and proper sizing for images to improve loading performance.'
  }
];

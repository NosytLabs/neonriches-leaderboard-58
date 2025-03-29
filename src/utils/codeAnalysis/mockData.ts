
import { AnalysisResult, ComplexityItem, DeadCodeInfo, DuplicateCodeInfo, ImportInfo, PerformanceIssue, VariableInfo } from './types';

// Mock data for code analysis
export const mockedAnalysisResults: AnalysisResult = {
  unusedImports: [
    { name: 'useState', path: 'react', file: 'src/components/unused/UnusedComponent.tsx', line: 1 },
    { name: 'Button', path: '@/components/ui/button', file: 'src/pages/OldPage.tsx', line: 3 },
    { name: 'useMemo', path: 'react', file: 'src/components/Profile.tsx', line: 2 }
  ],
  unusedVariables: [
    { name: 'isLoading', type: 'boolean', file: 'src/components/DataTable.tsx', line: 12 },
    { name: 'error', type: 'Error', file: 'src/hooks/useData.ts', line: 8 },
    { name: 'counter', type: 'number', file: 'src/components/Counter.tsx', line: 5 }
  ],
  unusedFiles: [
    'src/components/unused/TestComponent.tsx',
    'src/utils/deprecated/helpers.ts',
    'src/pages/OldPage.tsx'
  ],
  unusedSelectors: [
    { selector: '.unused-class', file: 'src/styles/global.css', line: 45 },
    { selector: '#old-id', file: 'src/styles/components.css', line: 23 },
    { selector: '.legacy-theme', file: 'src/styles/legacy.css', line: 10 }
  ],
  deadCode: [
    { file: 'src/components/Button.tsx', line: 45, description: 'Unreachable code after return statement', type: 'unreachable' },
    { file: 'src/utils/formatters.ts', line: 89, description: 'Conditional always evaluates to false', type: 'conditional' },
    { file: 'src/hooks/useAuth.ts', line: 120, description: 'Dead code path in switch statement', type: 'switch' }
  ],
  duplicateCode: [
    { 
      id: '1', 
      similarity: 0.95, 
      files: [
        { path: 'src/components/ProfileCard.tsx' },
        { path: 'src/components/UserCard.tsx' }
      ],
      lines: 25,
      code: 'function formatDate(date) {\n  return new Date(date).toLocaleDateString();\n}'
    },
    { 
      id: '2', 
      similarity: 0.85, 
      files: [
        { path: 'src/utils/formatters.ts' },
        { path: 'src/utils/dates.ts' }
      ],
      lines: 12,
      code: 'export function formatCurrency(amount) {\n  return new Intl.NumberFormat("en-US", {\n    style: "currency",\n    currency: "USD"\n  }).format(amount);\n}'
    }
  ],
  complexCode: [
    {
      id: 'complex-1',
      name: 'processUserData',
      file: 'src/utils/userProcessing.ts',
      complexity: 25,
      line: 34,
      explanation: 'Function has multiple nested conditions and loops'
    },
    {
      id: 'complex-2',
      name: 'calculateUserRank',
      file: 'src/utils/rankCalculator.ts',
      complexity: 18,
      line: 56,
      explanation: 'Complex algorithm with many branches'
    }
  ],
  performanceIssues: [],
  metrics: {
    projectSize: 8560,
    fileCount: 342,
    dependencyCount: 45,
    averageFileSize: 25.03,
    largestFiles: [
      { filePath: 'src/assets/images/background.jpg', size: 1240 },
      { filePath: 'src/components/DataGrid.tsx', size: 256 },
    ],
    beforeCleanup: {
      projectSize: 8560,
      fileCount: 342,
      dependencyCount: 45
    },
    afterCleanup: {
      projectSize: 7250,
      fileCount: 324,
      dependencyCount: 38
    }
  }
};

// Mock data for duplicate code report
export const duplicateCodeMock: DuplicateCodeInfo[] = [
  {
    id: 'dup-1',
    similarity: 0.95,
    files: [
      { path: 'src/components/ShameCard.tsx' },
      { path: 'src/components/MockeryCard.tsx' }
    ],
    lines: 32,
    codeSnippet: `
const CardTitle = ({ title, icon }) => (
  <div className="flex items-center">
    {icon && <span className="mr-2">{icon}</span>}
    <h3 className="font-semibold text-lg">{title}</h3>
  </div>
);

const CardFooter = ({ price, onAction }) => (
  <div className="mt-4 flex justify-between items-center">
    <div className="text-royal-gold font-bold">${price}</div>
    <Button onClick={onAction} size="sm">Apply</Button>
  </div>
);`
  },
  {
    id: 'dup-2',
    similarity: 0.88,
    files: [
      { path: 'src/hooks/use-mockery.ts' },
      { path: 'src/hooks/use-shame.ts' }
    ],
    lines: 45,
    codeSnippet: `
const isUserProtected = (username: string): boolean => {
  const protection = protections.find(p => p.username === username);
  if (!protection) return false;
  return protection.isActive && new Date() < new Date(protection.endDate);
};

const protectUser = (username: string, days: number = 7) => {
  const now = new Date();
  const endDate = new Date();
  endDate.setDate(now.getDate() + days);
  
  const existingIndex = protections.findIndex(p => p.username === username);
  
  if (existingIndex >= 0) {
    setProtections(prev => {
      const updated = [...prev];
      updated[existingIndex] = {
        ...updated[existingIndex],
        endDate: endDate.toISOString(),
        isActive: true
      };
      return updated;
    });
  } else {
    setProtections(prev => [
      ...prev,
      {
        username,
        endDate: endDate.toISOString(),
        isActive: true
      }
    ]);
  }
};`
  }
];

// Mock data for complexity report
export const complexityReportMock = [
  {
    path: 'src/components/RoyalMockeryFestival.tsx',
    complexity: 24,
    linesOfCode: 275,
    line: 1,
    parameters: 5,
    nestedLevel: 4,
    issues: [
      'Function has multiple responsibilities',
      'Contains complex state management',
      'Multiple conditional renders'
    ],
    functions: [
      {
        name: 'RoyalMockeryFestival',
        complexity: 24
      }
    ],
    explanation: 'Component is too large and handles too many responsibilities. Should be split into smaller, focused components.'
  },
  {
    path: 'src/components/profile/ProfileContent.tsx',
    complexity: 18,
    linesOfCode: 341,
    line: 1,
    parameters: 6,
    nestedLevel: 3,
    issues: [
      'Component is too large',
      'Multiple conditional renders',
      'Complex prop handling'
    ],
    functions: [
      {
        name: 'ProfileContent',
        complexity: 18
      }
    ],
    explanation: 'Component is overly complex with too many responsibilities. Should be split into tab-specific components.'
  },
  {
    path: 'src/services/mockeryService.ts',
    complexity: 16,
    linesOfCode: 230,
    line: 82,
    parameters: 4,
    nestedLevel: 3,
    issues: [
      'Function handles multiple types of logic',
      'Complex state transformations',
      'Lacks clear separation of concerns'
    ],
    functions: [
      {
        name: 'applyMockeryToUser',
        complexity: 16
      }
    ],
    explanation: 'Service function tries to do too much at once. Should be split into smaller, single-purpose functions.'
  }
];

// Mock performance issues 
export const mockPerformanceIssues: PerformanceIssue[] = [
  {
    id: 'perf-1',
    description: 'Inefficient list rendering without keys',
    file: 'src/components/dashboard/leaderboard/LeaderboardContent.tsx',
    lineNumber: 58,
    severity: 'medium',
    recommendation: 'Add unique keys to list items to improve reconciliation'
  },
  {
    id: 'perf-2',
    description: 'Large component re-rendering unnecessarily',
    file: 'src/pages/CodeCleanupReport.tsx',
    lineNumber: 86,
    severity: 'high',
    recommendation: 'Use React.memo or useMemo to prevent unnecessary re-renders of expensive components'
  },
  {
    id: 'perf-3',
    description: 'Expensive calculation in render method',
    file: 'src/components/charts/SpendingDistributionChart.tsx',
    lineNumber: 124,
    severity: 'high',
    recommendation: 'Move expensive calculations to useMemo or outside the render cycle'
  }
];

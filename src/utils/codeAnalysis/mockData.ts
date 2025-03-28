import { UnusedImport, UnusedVariable, UnusedFunction, DuplicateCode, ComplexCode } from './types';

// Mock data for unused imports
export const unusedImportsMock: UnusedImport[] = [
  { file: 'src/components/Header.tsx', name: 'useState', line: 12 },
  { file: 'src/pages/Dashboard.tsx', name: 'useEffect', line: 8 },
  { file: 'src/components/Footer.tsx', name: 'Link', line: 5 }
];

// Mock data for unused variables
export const unusedVariablesMock: UnusedVariable[] = [
  { file: 'src/components/UserProfile.tsx', name: 'isLoading', line: 24 },
  { file: 'src/hooks/useAuth.ts', name: 'errorMessage', line: 45 },
  { file: 'src/context/ThemeContext.tsx', name: 'isDarkMode', line: 18 }
];

// Mock data for unused functions
export const unusedFunctionsMock: UnusedFunction[] = [
  { file: 'src/utils/formatters.ts', name: 'formatCurrency', line: 32 },
  { file: 'src/utils/validation.ts', name: 'validateEmail', line: 15 },
  { file: 'src/hooks/useWindowSize.ts', name: 'getDimensions', line: 28 }
];

// Mock data for unused components - match the UnusedComponent interface
export const unusedComponentsMock = [
  { file: 'src/components/unused/DeprecatedButton.tsx', line: 1 },
  { file: 'src/components/unused/OldNavigation.tsx', line: 1 },
  { file: 'src/components/temp/TestComponent.tsx', line: 1 }
];

// Mock data for duplicate code
export const duplicateCodeMock: DuplicateCode[] = [
  { 
    id: 1,
    files: ['src/components/UserForm.tsx', 'src/components/AdminForm.tsx'],
    similarity: 85,
    lines: 32,
    impact: 'Medium',
    risk: 'Code duplication increases maintenance burden'
  },
  {
    id: 2,
    files: ['src/utils/formatDate.ts', 'src/helpers/dateHelper.ts'],
    similarity: 92,
    lines: 18,
    impact: 'Low',
    risk: 'Similar date formatting utilities in different locations'
  }
];

// Mock data for complex code
export const complexCodeMock: ComplexCode[] = [
  {
    id: 1,
    file: 'src/components/LeaderboardCalculator.tsx',
    line: 45,
    function: 'calculateRankings',
    complexity: 24,
    impact: 'High',
    suggestion: 'Break down into smaller functions with single responsibilities'
  },
  {
    id: 2,
    file: 'src/utils/dataTransformers.ts',
    line: 87,
    function: 'transformUserData',
    complexity: 18,
    impact: 'Medium',
    suggestion: 'Use map/reduce instead of nested loops'
  }
];

// Adding complex functions mock for ComplexityReport
export const complexFunctionsMock = [
  {
    id: "comp_1",
    name: "processUserData",
    file: "src/utils/userProcessor.js",
    complexity: 42,
    linesOfCode: 156,
    parameters: 8,
    nestedLevel: 5,
    issues: [
      "High cyclomatic complexity",
      "Too many parameters",
      "Deep nesting"
    ]
  },
  {
    id: "comp_2",
    name: "calculateRewards",
    file: "src/services/rewardCalculator.js",
    complexity: 35,
    linesOfCode: 127,
    parameters: 6,
    nestedLevel: 4,
    issues: [
      "Complex conditional logic",
      "Multiple responsibilities"
    ]
  },
  {
    id: "comp_3",
    name: "renderDashboard",
    file: "src/components/Dashboard.jsx",
    complexity: 28,
    linesOfCode: 218,
    parameters: 12,
    nestedLevel: 3,
    issues: [
      "Component too large",
      "Too many props"
    ]
  }
];

// Adding performance issues mock for PerformanceReport
export const performanceIssuesMock = [
  {
    id: "perf_1",
    description: "Excessive DOM mutations in carousel component",
    file: "src/components/Carousel.jsx",
    lineNumber: 87,
    severity: "high",
    recommendation: "Use React.memo and optimize rendering with keys"
  },
  {
    id: "perf_2",
    description: "Large unoptimized image loading",
    file: "src/components/HeroSection.jsx",
    lineNumber: 42,
    severity: "medium",
    recommendation: "Use responsive images and lazy loading"
  },
  {
    id: "perf_3",
    description: "Inefficient rendering of leaderboard items",
    file: "src/components/Leaderboard.jsx",
    lineNumber: 123,
    severity: "medium",
    recommendation: "Implement windowing for long lists with react-window"
  },
  {
    id: "perf_4",
    description: "Expensive calculation in render method",
    file: "src/components/Dashboard/Analytics.jsx",
    lineNumber: 56,
    severity: "high",
    recommendation: "Move to useMemo hook or use React.memo"
  }
];

// Mock analysis results
export const mockedAnalysisResults = {
  unusedFiles: [
    'src/components/unused/OldNavbar.tsx',
    'src/styles/deprecated.css',
    'src/utils/legacyHelpers.ts'
  ],
  unusedImports: unusedImportsMock,
  unusedVariables: unusedVariablesMock,
  unusedFunctions: unusedFunctionsMock,
  unusedCssSelectors: [
    { file: 'src/styles/main.css', selector: '.unused-class', line: 145 },
    { file: 'src/styles/buttons.css', selector: '.btn-legacy', line: 67 }
  ],
  deadCodePaths: [
    { file: 'src/components/UserActions.tsx', description: 'Unreachable code after return statement', line: 78 },
    { file: 'src/utils/validation.ts', description: 'Dead else branch (condition always true)', line: 23 }
  ],
  duplicateCode: duplicateCodeMock,
  complexCode: complexCodeMock,
  unusedDependencies: ['lodash-es', 'moment', 'chart.js'],
  metrics: {
    beforeCleanup: {
      projectSize: 4582, // KB
      fileCount: 187,
      dependencyCount: 42
    },
    afterCleanup: {
      projectSize: 4128, // KB
      fileCount: 172,
      dependencyCount: 38
    }
  }
};

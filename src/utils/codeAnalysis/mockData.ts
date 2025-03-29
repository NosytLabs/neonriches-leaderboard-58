
import { AnalysisResult, ComplexityItem, PerformanceIssue, DuplicateCodeInfo } from './types';

// Mock unused imports
export const unusedImportsMock = [
  { file: 'src/components/SomeComponent.tsx', name: 'useState', source: 'react', line: 1 },
  { file: 'src/components/AnotherComponent.tsx', name: 'useMemo', source: 'react', line: 2 },
  { file: 'src/utils/helpers.ts', name: 'formatDate', source: '@/utils/formatters', line: 3 }
];

// Mock unused variables
export const unusedVariablesMock = [
  { file: 'src/components/ProfileCard.tsx', name: 'userId', line: 15 },
  { file: 'src/pages/Dashboard.tsx', name: 'isLoading', line: 22 },
  { file: 'src/contexts/ThemeContext.tsx', name: 'defaultTheme', line: 8 }
];

// Mock unused functions
export const unusedFunctionsMock = [
  { file: 'src/utils/validation.ts', name: 'validatePassword', line: 45 },
  { file: 'src/utils/formatting.ts', name: 'formatPhoneNumber', line: 32 },
  { file: 'src/components/Form/helpers.ts', name: 'resetFormState', line: 17 }
];

// Mock unused components
export const unusedComponentsMock = [
  { file: 'src/components/unused/FeatureBanner.tsx', line: 1 },
  { file: 'src/components/legacy/OldNavbar.tsx', line: 1 },
  { file: 'src/components/experimental/NewFeature.tsx', line: 1 }
];

// Mock complexity data
export const complexityReportMock = [
  {
    path: 'src/components/ComplexComponent.tsx',
    complexity: 15,
    status: 'warning',
    functions: [
      {
        name: 'handleSubmitForm',
        complexity: 15,
        lines: 50
      }
    ]
  },
  {
    path: 'src/utils/calculations.ts',
    complexity: 20,
    status: 'error',
    functions: [
      {
        name: 'calculateTotalWithTax',
        complexity: 20,
        lines: 65
      }
    ]
  },
  {
    path: 'src/contexts/DataContext.tsx',
    complexity: 12,
    status: 'warning',
    functions: [
      {
        name: 'processUserData',
        complexity: 12,
        lines: 40
      }
    ]
  }
];

// Mock duplicate code data
export const duplicateCodeMock = [
  {
    id: 'dup-1',
    pattern: 'Form validation logic',
    similarity: 0.9,
    files: [
      { path: 'src/components/LoginForm.tsx' },
      { path: 'src/components/SignupForm.tsx' }
    ],
    codeSnippet: `const validateForm = () => {
  let errors = {};
  if (!email) errors.email = 'Email is required';
  if (!password) errors.password = 'Password is required';
  return Object.keys(errors).length === 0;
};`,
    snippet: `const validateForm = () => {
  let errors = {};
  if (!email) errors.email = 'Email is required';
  if (!password) errors.password = 'Password is required';
  return Object.keys(errors).length === 0;
};`,
    lines: 6
  },
  {
    id: 'dup-2',
    pattern: 'API error handling',
    similarity: 0.85,
    files: [
      { path: 'src/services/userService.ts' },
      { path: 'src/services/productService.ts' },
      { path: 'src/services/orderService.ts' }
    ],
    codeSnippet: `const handleApiError = (error) => {
  if (error.response) {
    return { error: error.response.data.message || 'An error occurred' };
  }
  return { error: 'Network error' };
};`,
    snippet: `const handleApiError = (error) => {
  if (error.response) {
    return { error: error.response.data.message || 'An error occurred' };
  }
  return { error: 'Network error' };
};`,
    lines: 6
  }
];

// Mock performance issues
export const performanceIssuesMock = [
  {
    id: 'perf-1',
    description: 'Expensive calculation in render method',
    file: 'src/components/DataTable.tsx',
    line: 45,
    recommendation: 'Move the calculation to useMemo or use a memoized selector',
    severity: 'high',
    lineNumber: 45,
    type: 'rendering'
  },
  {
    id: 'perf-2',
    description: 'Large unoptimized image',
    file: 'src/components/HeroBanner.tsx',
    line: 22,
    recommendation: 'Use appropriate image sizing and next/image for optimization',
    severity: 'medium',
    lineNumber: 22,
    type: 'assets'
  },
  {
    id: 'perf-3',
    description: 'Multiple re-renders due to object creation in props',
    file: 'src/pages/Dashboard.tsx',
    line: 67,
    recommendation: 'Use useMemo for object props or move the object outside the component',
    severity: 'medium',
    lineNumber: 67,
    type: 'rendering'
  }
];

// Complete mocked analysis results
export const mockedAnalysisResults: AnalysisResult = {
  timestamp: new Date().toISOString(),
  unusedFiles: [
    { path: 'src/components/unused/DeprecatedButton.tsx', size: 1024 },
    { path: 'src/styles/unused.css', size: 2048 },
    { path: 'src/pages/Legacy.tsx', size: 4096 }
  ],
  unusedImports: unusedImportsMock,
  unusedVariables: unusedVariablesMock,
  unusedCssSelectors: [
    { selector: '.unused-class', used: false, file: 'src/styles/main.css', line: 145 },
    { selector: '#legacy-id', used: false, file: 'src/styles/components.css', line: 67 },
    { selector: '.deprecated-layout', used: false, file: 'src/styles/layout.css', line: 89 }
  ],
  unusedDependencies: [
    { name: 'unused-package', version: '1.0.0', used: false, size: 500 },
    { name: 'legacy-helper', version: '0.5.0', used: false, size: 250 },
    { name: 'temp-util', version: '2.1.0', used: false, size: 125 }
  ],
  deadCode: [
    { path: 'src/utils/helpers.ts', type: 'function', name: 'unusedHelper', line: 25 },
    { path: 'src/components/Form.tsx', type: 'component', name: 'DeprecatedInput', line: 78 },
    { path: 'src/contexts/LegacyContext.tsx', type: 'variable', name: 'CONSTANTS', line: 12 }
  ],
  deadCodePaths: [
    { path: 'src/utils/helpers.ts', type: 'function', name: 'unusedHelper', line: 25, description: 'This function is not used anywhere in the codebase' },
    { path: 'src/components/Form.tsx', type: 'component', name: 'DeprecatedInput', line: 78, description: 'This component has been replaced with Input from UI library' }
  ],
  complexCode: complexityReportMock.map((item: any, index: number): ComplexityItem => ({
    id: `complexity-${index}`,
    name: item.functions?.[0]?.name || `Function-${index}`,
    file: item.path || '',
    complexity: item.complexity || 0,
    cyclomaticComplexity: item.complexity || 0,
    linesOfCode: item.functions?.[0]?.lines || 0,
    lines: item.functions?.[0]?.lines || 0,
    parameters: 0,
    nestedLevel: 0,
    issues: [],
    function: item.functions?.[0]?.name || `function-${index}`,
    path: item.path,
    functions: item.functions,
    status: item.status,
    explanation: 'Consider breaking this function into smaller, more manageable pieces'
  })),
  duplicateCode: duplicateCodeMock.map((item: any): DuplicateCodeInfo => ({
    ...item,
    occurrences: item.files.length
  })),
  performanceIssues: performanceIssuesMock,
  metrics: {
    projectSize: 2500, // KB
    fileCount: 120,
    dependencyCount: 25,
    averageFileSize: 20.8, // KB
    largestFiles: [
      { filePath: 'src/assets/hero.png', size: 500 },
      { filePath: 'src/components/DataTable.tsx', size: 75 },
      { filePath: 'src/pages/Dashboard.tsx', size: 60 },
      { filePath: 'src/contexts/DataContext.tsx', size: 45 },
      { filePath: 'src/components/ComplexForm.tsx', size: 40 }
    ],
    beforeCleanup: {
      projectSize: 2500,
      fileCount: 120,
      dependencyCount: 25
    },
    afterCleanup: {
      projectSize: 2150,
      fileCount: 105,
      dependencyCount: 22
    }
  },
  recommendations: [
    'Remove unused files to reduce bundle size',
    'Clean up unused imports for better code maintainability',
    'Break down complex components into smaller, more focused ones',
    'Extract duplicate code into shared utilities'
  ]
};

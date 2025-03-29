
// Mock analysis results for development and testing purposes

import { ImportInfo, VariableInfo, DuplicateCodeInfo, ComplexityItem, PerformanceIssue } from '@/types/codeAnalysis/types';

// Mock unused imports
export const mockedImports: ImportInfo[] = [
  { name: 'useState', file: 'src/components/Header.tsx', line: 2, path: 'react' },
  { name: 'useEffect', file: 'src/pages/Dashboard.tsx', line: 3, path: 'react' },
  { name: 'Button', file: 'src/components/Modal.tsx', line: 5, path: '@/components/ui/button' },
];

// Mock unused variables
export const mockedVariables: VariableInfo[] = [
  { name: 'isLoading', file: 'src/pages/Profile.tsx', line: 12, type: 'boolean' },
  { name: 'userData', file: 'src/components/UserCard.tsx', line: 15, type: 'object' },
  { name: 'count', file: 'src/hooks/useCounter.ts', line: 8, type: 'number' },
];

// Mock unused functions
export const mockedFunctions: VariableInfo[] = [
  { name: 'formatDate', file: 'src/utils/formatters.ts', line: 45, type: 'function' },
  { name: 'calculateTotal', file: 'src/utils/calculations.ts', line: 23, type: 'function' },
  { name: 'validateEmail', file: 'src/utils/validation.ts', line: 12, type: 'function' },
];

// Mock unused CSS selectors
export const mockedCssSelectors: VariableInfo[] = [
  { name: '.unused-class', file: 'src/styles/globals.css', line: 156 },
  { name: '#unique-id', file: 'src/styles/components.css', line: 78 },
  { name: '.header-menu-item', file: 'src/styles/header.css', line: 34 },
];

// Mock unused files
export const mockedUnusedFiles: string[] = [
  'src/components/deprecated/OldComponent.tsx',
  'src/utils/unused-util.ts',
  'src/styles/unused.css',
];

// Mock unused dependencies
export const mockedDependencies: string[] = [
  'unused-package',
  'deprecated-library',
  'test-utils',
];

// Mock duplicate code findings
export const duplicateCodeMock: DuplicateCodeInfo[] = [
  {
    id: '1',
    similarity: 90,
    files: [
      { path: 'src/components/UserProfile.tsx' },
      { path: 'src/components/AdminProfile.tsx' }
    ],
    lines: 24,
    codeSnippet: `const fetchUserData = async (userId) => {
  setLoading(true);
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    if (data.error) {
      setError(data.error);
      return null;
    }
    return data;
  } catch (error) {
    setError(error.message);
    return null;
  } finally {
    setLoading(false);
  }
};`,
    recommendation: 'Extract this fetch logic into a common utility function',
    pattern: 'Duplicate Fetch Logic',
    title: 'Duplicate API Fetching Logic',
    description: 'The same API fetching pattern is used in multiple files',
    severity: 'medium',
    impact: 'Increased maintenance burden',
    solution: 'Extract into a reusable hook or utility function'
  },
  {
    id: '2',
    similarity: 85,
    files: [
      { path: 'src/components/Dashboard.tsx' },
      { path: 'src/components/Analytics.tsx' },
      { path: 'src/components/Reports.tsx' }
    ],
    lines: 15,
    codeSnippet: `const formatData = (rawData) => {
  return rawData.map(item => ({
    label: item.name,
    value: item.count,
    color: getColorForItem(item.type),
    id: item.id
  }));
};`,
    recommendation: 'Move this formatting logic to a shared utility',
    pattern: 'Duplicate Data Formatting',
    title: 'Duplicate Data Transformation Logic',
    description: 'Similar data formatting appears in multiple components',
    severity: 'low',
    impact: 'Code duplication and potential inconsistency',
    solution: 'Create a shared formatter utility function'
  }
];

// Mock complexity findings
export const complexityReportMock: ComplexityItem[] = [
  {
    id: '1',
    name: 'calculateUserMetrics',
    file: 'src/utils/metricCalculations.ts',
    complexity: 15,
    line: 45,
    lines: 85,
    nestedLevel: 4,
    issues: [
      'Contains 4 levels of nesting',
      'Multiple conditionals in a single function',
      'Function has more than 80 lines'
    ],
    explanation: 'This function handles too many responsibilities and contains deeply nested logic',
    cyclomaticComplexity: 12,
    parameters: 6,
    function: 'calculateUserMetrics',
    path: 'src/utils/metricCalculations.ts',
    status: 'critical',
    title: 'Highly Complex Calculation Function',
    description: 'This function has excessive complexity and nesting',
    severity: 'high',
    impact: 'Difficult to maintain and test',
    solution: 'Split into smaller, focused functions'
  },
  {
    id: '2',
    name: 'handleFormSubmission',
    file: 'src/components/RegistrationForm.tsx',
    complexity: 10,
    line: 87,
    lines: 60,
    nestedLevel: 3,
    issues: [
      'Contains 3 levels of nesting',
      'Multiple state updates in single function',
      'Handles multiple responsibilities'
    ],
    explanation: 'This function does too much: validation, API calls, state updates, and navigation',
    cyclomaticComplexity: 8,
    parameters: 1,
    function: 'handleFormSubmission',
    path: 'src/components/RegistrationForm.tsx',
    status: 'warning',
    title: 'Complex Form Submission Handler',
    description: 'Event handler with too many responsibilities',
    severity: 'medium',
    impact: 'Difficult to debug and maintain',
    solution: 'Split into smaller functions with single responsibilities'
  }
];

// Mock performance issues
export const performanceIssuesMock: PerformanceIssue[] = [
  {
    id: '1',
    issue: 'Expensive operation in render',
    description: 'Array.map is called on every render without memoization',
    file: 'src/components/DataTable.tsx',
    lineNumber: 42,
    severity: 'high',
    recommendation: 'Use useMemo to cache the mapped results'
  },
  {
    id: '2',
    issue: 'Inefficient dependency array',
    description: 'Complex object used in useEffect dependency array',
    file: 'src/hooks/useDataFetching.ts',
    lineNumber: 28,
    severity: 'medium',
    recommendation: 'Extract primitive values or use object.id as dependency'
  },
  {
    id: '3',
    issue: 'Missing key prop in list',
    description: 'List items are rendered without unique key props',
    file: 'src/components/UserList.tsx',
    lineNumber: 55,
    severity: 'low',
    recommendation: 'Add a unique key prop to each list item'
  }
];

// Full analysis results
export const mockedAnalysisResults = {
  unusedImports: mockedImports,
  unusedVariables: mockedVariables,
  unusedFunctions: mockedFunctions,
  unusedCssSelectors: mockedCssSelectors,
  unusedFiles: mockedUnusedFiles,
  unusedDependencies: mockedDependencies,
  duplicateCode: duplicateCodeMock,
  complexCode: complexityReportMock,
  performanceIssues: performanceIssuesMock,
  summary: {
    totalIssues: 18,
    criticalIssues: 3,
    warningIssues: 7,
    infoIssues: 8,
    estimatedSavings: {
      fileCount: 3,
      dependencyCount: 3,
      sizeReduction: '45KB'
    }
  }
};

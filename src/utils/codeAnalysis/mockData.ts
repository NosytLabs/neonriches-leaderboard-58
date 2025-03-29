
import { 
  AnalysisResult, 
  FileInfo, 
  ImportInfo, 
  VariableInfo, 
  CssSelectorInfo, 
  DependencyInfo, 
  DeadCodeInfo,
  ComplexityItem,
  DuplicateCodeInfo,
  PerformanceIssue
} from './types';

// Mock data for demonstrations
const unusedFilesMock: FileInfo[] = [
  { path: 'src/components/Unused.tsx', size: 2.5 },
  { path: 'src/utils/deprecated.ts', size: 1.2 },
  { path: 'src/hooks/useOldFeature.ts', size: 0.8 }
];

const unusedImportsMock: ImportInfo[] = [
  { name: 'useState', source: 'react', used: false, line: 5, column: 10 },
  { name: 'Button', source: '@/components/ui/button', used: false, line: 8, column: 10 },
  { name: 'getStaticProps', source: 'next', used: false, line: 12, column: 10 }
];

const unusedVariablesMock: VariableInfo[] = [
  { name: 'counter', type: 'number', used: false, file: 'src/components/Counter.tsx', line: 15 },
  { name: 'tempState', type: 'string', used: false, file: 'src/components/Form.tsx', line: 27 },
  { name: 'oldConfig', type: 'object', used: false, file: 'src/utils/config.ts', line: 42 }
];

const unusedCssSelectorsMock: CssSelectorInfo[] = [
  { selector: '.unused-class', used: false, file: 'src/styles/globals.css', line: 56 },
  { selector: '#legacy-id', used: false, file: 'src/styles/components.css', line: 78 },
  { selector: '.deprecated-component', used: false, file: 'src/styles/deprecated.css', line: 105 }
];

const unusedDependenciesMock: DependencyInfo[] = [
  { name: 'moment', version: '2.29.1', used: false, size: 289 },
  { name: 'lodash', version: '4.17.21', used: false, size: 526 },
  { name: 'jquery', version: '3.6.0', used: false, size: 320 }
];

const deadCodeMock: DeadCodeInfo[] = [
  { path: 'src/utils/helpers.ts', type: 'function', name: 'formatLegacyDate', line: 45, description: 'Function is exported but never used in the project' },
  { path: 'src/components/legacy/Sidebar.tsx', type: 'component', name: 'LegacySidebar', line: 12, description: 'Component is defined but not used anywhere' },
  { path: 'src/contexts/OldContext.tsx', type: 'class', name: 'OldContextProvider', line: 24, description: 'Class is defined but not instantiated' }
];

const complexCodeMock: ComplexityItem[] = [
  { 
    id: '1',
    name: 'calculateTotalWithTax',
    file: 'src/utils/calculations.ts',
    functionName: 'calculateTotalWithTax',
    function: 'calculateTotalWithTax',
    path: 'src/utils/calculations.ts',
    complexity: 12,
    cyclomaticComplexity: 12,
    linesOfCode: 45,
    lines: 45,
    parameters: 5,
    nestedLevel: 4,
    issues: ['Too many conditional branches', 'Nested loops'],
    status: 'needs-refactor',
    functions: ['calculateTotalWithTax']
  },
  { 
    id: '2',
    name: 'processUserData',
    file: 'src/utils/userProcessor.ts',
    functionName: 'processUserData',
    function: 'processUserData',
    path: 'src/utils/userProcessor.ts',
    complexity: 15,
    cyclomaticComplexity: 15,
    linesOfCode: 68,
    lines: 68,
    parameters: 7,
    nestedLevel: 5,
    issues: ['Function too long', 'Too many parameters'],
    status: 'critical',
    functions: ['processUserData']
  },
  { 
    id: '3',
    name: 'renderDashboard',
    file: 'src/components/Dashboard.tsx',
    functionName: 'renderDashboard',
    function: 'renderDashboard',
    path: 'src/components/Dashboard.tsx',
    complexity: 9,
    cyclomaticComplexity: 9,
    linesOfCode: 32,
    lines: 32,
    parameters: 3,
    nestedLevel: 3,
    issues: ['Conditional rendering can be simplified'],
    status: 'moderate',
    functions: ['renderDashboard']
  }
];

const duplicateCodeMock: DuplicateCodeInfo[] = [
  {
    id: 'dup1',
    pattern: 'API fetch pattern',
    similarity: 95,
    occurrences: 12,
    files: [
      { path: 'src/pages/users.tsx' },
      { path: 'src/pages/products.tsx' },
      { path: 'src/pages/orders.tsx' }
    ],
    lines: 15,
    snippet: 'const fetchData = async () => {\n  setLoading(true);\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    setData(data);\n  } catch (error) {\n    setError(error);\n  } finally {\n    setLoading(false);\n  }\n};',
    codeSnippet: 'const fetchData = async () => {\n  setLoading(true);\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    setData(data);\n  } catch (error) {\n    setError(error);\n  } finally {\n    setLoading(false);\n  }\n};'
  },
  {
    id: 'dup2',
    pattern: 'Form validation',
    similarity: 88,
    occurrences: 8,
    files: [
      { path: 'src/components/LoginForm.tsx' },
      { path: 'src/components/RegisterForm.tsx' },
      { path: 'src/components/ContactForm.tsx' }
    ],
    lines: 22,
    snippet: 'const validateForm = () => {\n  const errors = {};\n  if (!values.email) {\n    errors.email = "Email is required";\n  } else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) {\n    errors.email = "Email is invalid";\n  }\n  if (!values.password) {\n    errors.password = "Password is required";\n  } else if (values.password.length < 6) {\n    errors.password = "Password must be at least 6 characters";\n  }\n  return errors;\n};',
    codeSnippet: 'const validateForm = () => {\n  const errors = {};\n  if (!values.email) {\n    errors.email = "Email is required";\n  } else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) {\n    errors.email = "Email is invalid";\n  }\n  if (!values.password) {\n    errors.password = "Password is required";\n  } else if (values.password.length < 6) {\n    errors.password = "Password must be at least 6 characters";\n  }\n  return errors;\n};'
  }
];

const performanceIssuesMock: PerformanceIssue[] = [
  {
    id: 'perf1',
    type: 'rendering',
    component: 'DataTable',
    file: 'src/components/DataTable.tsx',
    description: 'Unnecessary re-renders due to missing memoization',
    impact: 'high',
    recommendation: 'Use React.memo() and useCallback() for child components and handlers'
  },
  {
    id: 'perf2',
    type: 'memory',
    component: 'ImageGallery',
    file: 'src/components/ImageGallery.tsx',
    description: 'Memory leak due to uncleared interval in useEffect',
    impact: 'medium',
    recommendation: 'Add cleanup function to useEffect to clear interval'
  },
  {
    id: 'perf3',
    type: 'network',
    component: 'ProductList',
    file: 'src/components/ProductList.tsx',
    description: 'Multiple API calls for the same data',
    impact: 'high',
    recommendation: 'Implement data caching using React Query or SWR'
  }
];

// Combine all mock data into a full analysis result
export const mockedAnalysisResults: AnalysisResult = {
  timestamp: new Date().toISOString(),
  unusedFiles: unusedFilesMock,
  unusedImports: unusedImportsMock,
  unusedVariables: unusedVariablesMock,
  unusedCssSelectors: unusedCssSelectorsMock,
  unusedDependencies: unusedDependenciesMock,
  deadCode: deadCodeMock,
  complexCode: complexCodeMock,
  duplicateCode: duplicateCodeMock,
  performanceIssues: performanceIssuesMock,
  bestPracticeViolations: [
    {
      id: 'bp1',
      rule: 'no-unused-vars',
      file: 'src/components/Form.tsx',
      line: 12,
      column: 7,
      message: 'useState is defined but never used',
      severity: 'warning'
    },
    {
      id: 'bp2',
      rule: 'react-hooks/exhaustive-deps',
      file: 'src/components/Profile.tsx',
      line: 34,
      column: 6,
      message: 'React Hook useEffect has a missing dependency: \'userId\'',
      severity: 'warning'
    }
  ]
};

// Export individual mocks for component testing
export const complexityReportMock = complexCodeMock;
export const duplicateCodeMock = duplicateCodeMock;
export const performanceIssuesMock = performanceIssuesMock;
export const unusedImportsMock = unusedImportsMock;
export const unusedVariablesMock = unusedVariablesMock;
export const unusedFunctionsMock = deadCodeMock.filter(item => item.type === 'function');
export const unusedComponentsMock = deadCodeMock.filter(item => item.type === 'component');

// File size information
export const fileSizeInfo = [
  { filePath: 'src/assets/images/hero.jpg', size: 1240 },
  { filePath: 'src/components/DataGrid.tsx', size: 256 },
  { filePath: 'src/components/Dashboard.tsx', size: 178 },
  { filePath: 'src/pages/index.tsx', size: 145 },
  { filePath: 'src/utils/api.ts', size: 89 }
];

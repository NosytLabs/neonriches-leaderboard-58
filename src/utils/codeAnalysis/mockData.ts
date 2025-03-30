
import { AnalysisResult, ImportInfo, VariableInfo, CssSelectorInfo, DeadCodeInfo, DuplicateCodeInfo, ComplexityItem, PerformanceIssue } from './types';

// Adjusted to match the expected type
const unusedImportsMock: ImportInfo[] = [
  { name: 'useState', path: 'react', file: 'src/components/unused/UnusedComponent.tsx', line: 1 },
  { name: 'useEffect', path: 'react', file: 'src/components/unused/UnusedComponent.tsx', line: 1 },
  { name: 'Button', path: '@/components/ui/button', file: 'src/components/forms/ContactForm.tsx', line: 3 },
  // More items for demonstration
];

// Adjusted to match the expected type
const unusedVariablesMock: VariableInfo[] = [
  { name: 'count', type: 'number', file: 'src/components/Counter.tsx', line: 10 },
  { name: 'handleChange', type: 'function', file: 'src/components/forms/ContactForm.tsx', line: 15 },
  { name: 'isLoading', type: 'boolean', file: 'src/components/DataTable.tsx', line: 8 },
  // More items for demonstration
];

const unusedFilesMock = [
  'src/components/unused/UnusedComponent.tsx',
  'src/styles/unused.css',
  'src/utils/unusedUtils.ts',
  // More items for demonstration
];

// Adjusted to match the expected type
const unusedCssSelectorsMock: CssSelectorInfo[] = [
  { selector: '.unused-class', file: 'src/styles/global.css', line: 42 },
  { selector: '#unused-id', file: 'src/styles/global.css', line: 56 },
  { selector: '.btn-deprecated', file: 'src/styles/buttons.css', line: 23 },
  // More items for demonstration
];

const unusedDependenciesMock = [
  'lodash-es',
  'date-fns-tz',
  'react-chartjs-2',
  // More items for demonstration
];

// Adjusted to match the expected type
const deadCodePathsMock: DeadCodeInfo[] = [
  { 
    file: 'src/components/DataTable.tsx', 
    line: 87, 
    description: 'This conditional block is never executed because the condition is always false' 
  },
  { 
    file: 'src/utils/helpers.ts', 
    line: 45, 
    description: 'This function is defined but never called anywhere in the codebase' 
  },
  { 
    file: 'src/hooks/useData.ts', 
    line: 112, 
    description: 'This try/catch block contains unreachable code after the return statement' 
  },
  // More items for demonstration
];

// Adjusted to match the expected type
const duplicateCodeMock: DuplicateCodeInfo[] = [
  {
    id: '1',
    similarity: 0.92,
    files: [
      { path: 'src/components/UserProfile.tsx' },
      { path: 'src/components/AdminProfile.tsx' }
    ],
    lines: 27,
    recommendation: 'Extract this code into a shared component called ProfileInfo'
  },
  {
    id: '2',
    similarity: 0.85,
    files: [
      { path: 'src/utils/formatters.ts' },
      { path: 'src/utils/textUtils.ts' }
    ],
    lines: 18,
    recommendation: 'Consolidate these text formatting functions into a single utility file'
  },
  // More items for demonstration
];

// Adjusted to match the expected type
const complexCodeMock: ComplexityItem[] = [
  {
    id: '1',
    name: 'handleSubmit',
    file: 'src/components/forms/CheckoutForm.tsx',
    complexity: 15,
    cyclomaticComplexity: 18,
    line: 67,
    explanation: 'This function has too many conditional branches and nested loops'
  },
  {
    id: '2',
    name: 'processData',
    file: 'src/utils/dataProcessing.ts',
    complexity: 12,
    cyclomaticComplexity: 14,
    line: 28,
    explanation: 'This utility function has excessive branching and should be broken down'
  },
  // More items for demonstration
];

// Adjusted to match the expected type
const performanceIssuesMock: PerformanceIssue[] = [
  {
    id: '1',
    description: 'Expensive operation inside component render',
    file: 'src/components/Dashboard.tsx',
    lineNumber: 34,
    severity: 'high',
    recommendation: 'Move this calculation to useMemo or outside the render function'
  },
  {
    id: '2',
    description: 'Large array being recreated on each render',
    file: 'src/components/DataList.tsx',
    lineNumber: 22,
    severity: 'medium',
    recommendation: 'Use useMemo to memoize this array or move it outside the component'
  },
  // More items for demonstration
];

export const mockedAnalysisResults = {
  unusedImports: unusedImportsMock,
  unusedVariables: unusedVariablesMock,
  unusedFiles: unusedFilesMock,
  unusedCssSelectors: unusedCssSelectorsMock,
  unusedDependencies: unusedDependenciesMock,
  unusedFunctions: [],
  deadCode: deadCodePathsMock,
  summary: {
    totalIssues: 78,
    criticalIssues: 12,
    estimatedSavings: {
      size: '145KB',
      dependencies: 5,
      files: 12,
      complexity: 'reduced by 25%'
    }
  }
};

export {
  unusedImportsMock,
  unusedVariablesMock,
  unusedFilesMock,
  unusedCssSelectorsMock,
  unusedDependenciesMock,
  deadCodePathsMock,
  duplicateCodeMock,
  complexCodeMock,
  performanceIssuesMock
};

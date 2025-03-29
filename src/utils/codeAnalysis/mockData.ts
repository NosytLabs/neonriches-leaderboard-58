
import { 
  FileInfo, 
  ImportInfo, 
  VariableInfo, 
  CssSelectorInfo,
  DependencyInfo,
  DeadCodeInfo,
  ComplexityItem,
  PerformanceIssue
} from '@/types/codeAnalysis';

// Mock File Information
export const mockFileInfos: FileInfo[] = [
  { path: 'src/components/Button.tsx', size: 1240, lines: 45 },
  { path: 'src/components/Card.tsx', size: 2340, lines: 87 },
  { path: 'src/components/Input.tsx', size: 890, lines: 32 },
  { path: 'src/pages/Dashboard.tsx', size: 5670, lines: 214 },
  { path: 'src/pages/Profile.tsx', size: 4560, lines: 189 },
  { path: 'src/hooks/useAuth.ts', size: 1870, lines: 73 },
  { path: 'src/utils/formatters.ts', size: 1240, lines: 52 },
  { path: 'src/contexts/AuthContext.tsx', size: 3560, lines: 129 }
];

// Mock Unused Imports
export const mockUnusedImports: ImportInfo[] = [
  { file: 'src/components/Button.tsx', name: 'useState', source: 'react', line: 1, used: false },
  { file: 'src/pages/Dashboard.tsx', name: 'useMemo', source: 'react', line: 2, used: false },
  { file: 'src/pages/Profile.tsx', name: 'Switch', source: '@/components/ui/switch', line: 5, used: false },
  { file: 'src/hooks/useAuth.ts', name: 'useLocation', source: 'react-router-dom', line: 3, used: false }
];

// Mock Unused Variables
export const mockUnusedVariables: VariableInfo[] = [
  { file: 'src/components/Card.tsx', name: 'cardStyles', line: 12, type: 'const', used: false },
  { file: 'src/pages/Dashboard.tsx', name: 'userSettings', line: 45, type: 'const', used: false },
  { file: 'src/hooks/useAuth.ts', name: 'redirectPath', line: 24, type: 'const', used: false }
];

// Mock Unused CSS Selectors
export const mockUnusedCssSelectors: CssSelectorInfo[] = [
  { file: 'src/styles/main.css', selector: '.card-premium', line: 67, used: false },
  { file: 'src/styles/main.css', selector: '.btn-secondary', line: 124, used: false },
  { file: 'src/styles/components.css', selector: '.form-control-lg', line: 38, used: false }
];

// Mock Dependency Information
export const mockDependencies: DependencyInfo[] = [
  { name: 'react', version: '18.2.0', description: 'React is a JavaScript library for building user interfaces.', used: true, size: 143000 },
  { name: 'lodash', version: '4.17.21', description: 'A modern JavaScript utility library delivering modularity, performance & extras.', used: true, size: 531000 },
  { name: 'moment', version: '2.29.4', description: 'Parse, validate, manipulate, and display dates', used: false, size: 289000 },
  { name: 'chart.js', version: '4.2.1', description: 'Simple HTML5 Charts using the canvas tag', used: false, size: 422000 }
];

// Mock Dead Code Information
export const mockDeadCode: DeadCodeInfo[] = [
  { path: 'src/components/deprecated/OldButton.tsx', type: 'component', name: 'OldButton', line: 1, location: 'src/components/deprecated/OldButton.tsx', description: 'Replaced by new Button component' },
  { path: 'src/utils/helpers.ts', type: 'function', name: 'formatDate', line: 34, location: 'src/utils/helpers.ts', description: 'Replaced by date-fns' },
  { path: 'src/utils/helpers.ts', type: 'function', name: 'calculateTax', line: 67, location: 'src/utils/helpers.ts', description: 'No longer used in application' },
  { path: 'src/contexts/legacy/ThemeContext.tsx', type: 'context', name: 'ThemeContext', line: 1, location: 'src/contexts/legacy/ThemeContext.tsx', description: 'Replaced by new theming system' }
];

// Mock Code Complexity Information
export const mockComplexityItems: ComplexityItem[] = [
  { path: 'src/components/Table.tsx', name: 'renderTableRows', complexity: 15, filePath: 'src/components/Table.tsx', line: 78 },
  { path: 'src/pages/Checkout.tsx', name: 'calculateTotal', complexity: 12, filePath: 'src/pages/Checkout.tsx', line: 145 },
  { path: 'src/utils/validation.ts', name: 'validateForm', complexity: 18, filePath: 'src/utils/validation.ts', line: 25 },
  { path: 'src/hooks/useCart.ts', name: 'updateCartItems', complexity: 14, filePath: 'src/hooks/useCart.ts', line: 89 }
];

// Mock Performance Issues
export const mockPerformanceIssues: PerformanceIssue[] = [
  { 
    id: 'perf-1', 
    description: 'Expensive calculation in render method', 
    file: 'src/components/ProductList.tsx', 
    line: 56, 
    recommendation: 'Move calculation to useMemo hook to prevent recalculation on each render', 
    severity: 'high', 
    lineNumber: 56, 
    type: 'render-optimization', 
    impact: 'High impact on render performance' 
  },
  { 
    id: 'perf-2', 
    description: 'Multiple DOM mutations in useEffect', 
    file: 'src/components/Carousel.tsx', 
    line: 89, 
    recommendation: 'Batch DOM updates to reduce layout thrashing', 
    severity: 'medium', 
    lineNumber: 89, 
    type: 'dom-manipulation', 
    impact: 'Medium impact on UI responsiveness' 
  },
  { 
    id: 'perf-3', 
    description: 'Large dependency array in useEffect', 
    file: 'src/pages/Dashboard.tsx', 
    line: 134, 
    recommendation: 'Reduce dependencies or split into multiple effects', 
    severity: 'low', 
    lineNumber: 134, 
    type: 'hook-optimization', 
    impact: 'Low impact on render frequency' 
  }
];

// Mock Duplicate Code
export const mockDuplicateCode = [
  {
    pattern: 'User authentication logic',
    occurrences: [
      { file: 'src/pages/Login.tsx', lines: '45-68', similarity: '92%' },
      { file: 'src/pages/Register.tsx', lines: '57-80', similarity: '92%' }
    ]
  },
  {
    pattern: 'Form validation',
    occurrences: [
      { file: 'src/components/ContactForm.tsx', lines: '89-110', similarity: '85%' },
      { file: 'src/components/ProfileForm.tsx', lines: '102-122', similarity: '85%' },
      { file: 'src/components/CheckoutForm.tsx', lines: '145-165', similarity: '85%' }
    ]
  }
];

// Mock Project Metrics
export const mockProjectMetrics: ProjectMetrics = {
  beforeCleanup: {
    projectSize: 12500000,
    fileCount: 287,
    dependencyCount: 45
  },
  afterCleanup: {
    projectSize: 10200000,
    fileCount: 256,
    dependencyCount: 32
  }
};

// Function to simulate running an analysis
export const runCodeAnalysis = () => {
  return {
    fileInfos: mockFileInfos,
    unusedImports: mockUnusedImports,
    unusedVariables: mockUnusedVariables,
    unusedCssSelectors: mockUnusedCssSelectors,
    dependencies: mockDependencies,
    deadCode: mockDeadCode,
    complexityItems: mockComplexityItems,
    performanceIssues: mockPerformanceIssues,
    duplicateCode: mockDuplicateCode,
    projectMetrics: mockProjectMetrics
  };
};

// Export aliases for backward compatibility
export const complexityReportMock = mockComplexityItems;
export const duplicateCodeMock = mockDuplicateCode;
export const performanceIssuesMock = mockPerformanceIssues;
export const unusedImportsMock = mockUnusedImports;
export const unusedVariablesMock = mockUnusedVariables;
export const unusedFunctionsMock = mockDeadCode.filter(item => item.type === 'function');
export const unusedComponentsMock = mockDeadCode.filter(item => item.type === 'component');
export const mockedAnalysisResults = runCodeAnalysis();

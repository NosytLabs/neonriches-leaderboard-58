
import { AnalysisResult, DuplicateCodeInfo, ProjectMetrics } from './types';

// Mock analysis results for development and testing
export const mockedAnalysisResults: AnalysisResult = {
  unusedFiles: [
    { path: 'src/legacy/OldComponent.tsx', size: 5120 },
    { path: 'src/utils/deprecated-helper.ts', size: 1024 },
  ],
  unusedImports: [
    { file: 'src/components/Header.tsx', name: 'Button', from: '@/components/ui/button' },
    { file: 'src/pages/Dashboard.tsx', name: 'useAuth', from: '@/hooks/useAuth' },
  ],
  unusedVariables: [
    { file: 'src/components/UserCard.tsx', name: 'isLoading', line: 12 },
    { file: 'src/hooks/useData.ts', name: 'errorMessage', line: 25 },
  ],
  unusedCssSelectors: [
    { file: 'src/styles/legacy.css', selector: '.legacy-button', line: 45 },
    { file: 'src/styles/utils.css', selector: '.hidden-md', line: 78 },
  ],
  unusedDependencies: [
    { name: 'moment', version: '^2.29.1', alternatives: ['date-fns'] },
    { name: 'lodash', version: '^4.17.21', alternatives: ['native array methods'] },
  ],
  deadCode: [
    { file: 'src/utils/helpers.ts', function: 'formatLegacyDate', line: 56 },
    { file: 'src/contexts/ThemeContext.tsx', function: 'useLegacyTheme', line: 128 },
  ],
  duplicateCode: [
    {
      pattern: 'fetch and error handling pattern',
      occurrences: [
        { file: 'src/hooks/useUsers.ts', lines: '15-32' },
        { file: 'src/hooks/useProducts.ts', lines: '18-35' },
      ],
      similarity: 0.92,
    },
    {
      pattern: 'form validation logic',
      occurrences: [
        { file: 'src/components/LoginForm.tsx', lines: '45-72' },
        { file: 'src/components/RegisterForm.tsx', lines: '51-78' },
      ],
      similarity: 0.87,
    },
  ],
  complexCode: [
    {
      file: 'src/utils/calculations.ts',
      function: 'calculateTotalWithDiscounts',
      cyclomaticComplexity: 25,
      lines: '87-156',
    },
    {
      file: 'src/components/ShoppingCart.tsx',
      function: 'handleCheckout',
      cyclomaticComplexity: 18,
      lines: '210-268',
    },
  ],
  recommendations: [
    'Remove unused dependencies to reduce bundle size',
    'Refactor duplicate fetch logic into a shared hook',
    'Break down complex functions into smaller, more manageable pieces',
    'Use proper code splitting to reduce initial load time',
  ],
  metrics: {
    projectSize: 8560,
    fileCount: 342,
    dependencyCount: 45,
    averageFileSize: 25.03,
    largestFiles: [
      { filePath: 'src/assets/images/background.jpg', size: 1240 },
      { filePath: 'src/components/DataGrid.tsx', size: 256 },
    ]
  }
};

// Mock unused imports for the unused code report
export const unusedImportsMock = [
  { file: 'src/components/Header.tsx', name: 'Button', from: '@/components/ui/button' },
  { file: 'src/pages/Dashboard.tsx', name: 'useAuth', from: '@/hooks/useAuth' },
  { file: 'src/components/ProfileCard.tsx', name: 'Avatar', from: '@/components/ui/avatar' },
  { file: 'src/hooks/useSorting.ts', name: 'SortDirection', from: '@/types/sorting' },
];

// Mock unused variables for the unused code report
export const unusedVariablesMock = [
  { file: 'src/components/UserCard.tsx', name: 'isLoading', line: 12 },
  { file: 'src/hooks/useData.ts', name: 'errorMessage', line: 25 },
  { file: 'src/contexts/CartContext.tsx', name: 'initialState', line: 8 },
  { file: 'src/utils/formatting.ts', name: 'DEFAULT_LOCALE', line: 5 },
];

// Mock unused functions for the unused code report
export const unusedFunctionsMock = [
  { file: 'src/utils/helpers.ts', name: 'formatLegacyDate', line: 56 },
  { file: 'src/hooks/useFilters.ts', name: 'resetAllFilters', line: 89 },
  { file: 'src/components/Modal.tsx', name: 'handleKeyPress', line: 124 },
  { file: 'src/contexts/ThemeContext.tsx', name: 'useLegacyTheme', line: 128 },
];

// Mock unused components for the unused code report
export const unusedComponentsMock = [
  { file: 'src/components/legacy/LegacyButton.tsx', name: 'LegacyButton', size: 2.4 },
  { file: 'src/components/experimental/NewFeature.tsx', name: 'NewFeature', size: 4.8 },
  { file: 'src/components/modals/DeprecatedModal.tsx', name: 'DeprecatedModal', size: 6.2 },
];

// Mock duplicate code data for the duplicate code report
export const duplicateCodeMock: DuplicateCodeInfo[] = [
  {
    pattern: 'fetch and error handling pattern',
    occurrences: [
      { file: 'src/hooks/useUsers.ts', lines: '15-32' },
      { file: 'src/hooks/useProducts.ts', lines: '18-35' },
      { file: 'src/hooks/useOrders.ts', lines: '22-39' },
    ],
    similarity: 0.92,
    impact: 'medium',
    refactoringDifficulty: 'easy',
    recommendation: 'Extract into a generic useFetch hook that accepts resource type as parameter.',
  },
  {
    pattern: 'form validation logic',
    occurrences: [
      { file: 'src/components/LoginForm.tsx', lines: '45-72' },
      { file: 'src/components/RegisterForm.tsx', lines: '51-78' },
      { file: 'src/components/CheckoutForm.tsx', lines: '103-130' },
    ],
    similarity: 0.87,
    impact: 'high',
    refactoringDifficulty: 'medium',
    recommendation: 'Create a shared form validation utility or use a form library like react-hook-form.',
  },
  {
    pattern: 'theme manipulation functions',
    occurrences: [
      { file: 'src/contexts/ThemeContext.tsx', lines: '85-97' },
      { file: 'src/utils/theme-helpers.ts', lines: '32-44' },
    ],
    similarity: 0.95,
    impact: 'low',
    refactoringDifficulty: 'easy',
    recommendation: 'Move all theme-related functions to theme-helpers.ts.',
  },
];

// Mock complexity report data
export const complexityReportMock = [
  {
    file: 'src/utils/calculations.ts',
    function: 'calculateTotalWithDiscounts',
    cyclomaticComplexity: 25,
    lines: '87-156',
    impact: 'high',
    refactoringDifficulty: 'hard',
    recommendation: 'Break down into smaller functions for each discount type.',
  },
  {
    file: 'src/components/ShoppingCart.tsx',
    function: 'handleCheckout',
    cyclomaticComplexity: 18,
    lines: '210-268',
    impact: 'medium',
    refactoringDifficulty: 'medium',
    recommendation: 'Split payment processing and order creation into separate functions.',
  },
  {
    file: 'src/utils/formatting.ts',
    function: 'formatDataForExport',
    cyclomaticComplexity: 15,
    lines: '125-168',
    impact: 'medium',
    refactoringDifficulty: 'medium',
    recommendation: 'Create separate formatters for each export type (CSV, JSON, etc.).',
  },
];

// Mock performance issues data
export const performanceIssuesMock = [
  {
    file: 'src/components/ProductList.tsx',
    issue: 'Excessive re-renders',
    description: 'Component re-renders on every state change in parent component',
    impact: 'high',
    recommendation: 'Use React.memo and/or useCallback to prevent unnecessary re-renders.',
  },
  {
    file: 'src/hooks/useProducts.ts',
    issue: 'Inefficient data fetching',
    description: 'Fetches all products instead of paginating results',
    impact: 'high',
    recommendation: 'Implement pagination or infinite scrolling to fetch data in chunks.',
  },
  {
    file: 'src/utils/search.ts',
    issue: 'Unoptimized search algorithm',
    description: 'Linear search through large arrays without indexing',
    impact: 'medium',
    recommendation: 'Use a more efficient search algorithm or consider client-side indexing for large datasets.',
  },
];

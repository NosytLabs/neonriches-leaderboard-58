
import { AnalysisResult, FileInfo, ImportInfo, VariableInfo, CssSelectorInfo, DependencyInfo, DeadCodeInfo, DuplicateCodeInfo, ComplexityItem, PerformanceIssue } from './types';

// Mock data for unused imports
export const unusedImportsMock = [
  { file: 'src/components/Dashboard.tsx', name: 'useState', from: 'react', line: 3 },
  { file: 'src/pages/Profile.tsx', name: 'useEffect', from: 'react', line: 4 },
  { file: 'src/utils/helpers.tsx', name: 'debounce', from: 'lodash', line: 7 }
];

// Mock data for unused variables
export const unusedVariablesMock = [
  { file: 'src/components/UserList.tsx', name: 'isLoading', line: 12 },
  { file: 'src/hooks/useAuth.ts', name: 'errorMessage', line: 24 },
  { file: 'src/services/api.ts', name: 'timeout', line: 8 }
];

// Mock data for unused functions
export const unusedFunctionsMock = [
  { file: 'src/utils/formatting.ts', name: 'formatDate', line: 45 },
  { file: 'src/hooks/useData.ts', name: 'fetchData', line: 67 },
  { file: 'src/components/Header.tsx', name: 'handleLogout', line: 92 }
];

// Mock data for unused components
export const unusedComponentsMock = [
  { file: 'src/components/ui/Tooltip.tsx', line: 1 },
  { file: 'src/components/ui/Modal.tsx', line: 1 },
  { file: 'src/components/forms/PasswordInput.tsx', line: 1 }
];

// Mock data for duplicate code
export const duplicateCodeMock = [
  {
    id: '1',
    pattern: 'User data fetching pattern',
    similarity: 0.92,
    files: [
      { path: 'src/pages/UserProfile.tsx' },
      { path: 'src/pages/UserSettings.tsx' }
    ],
    codeSnippet: `const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}`,
    snippet: `// Duplicate fetch pattern
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}`
  },
  {
    id: '2',
    pattern: 'Form validation logic',
    similarity: 0.85,
    files: [
      { path: 'src/components/LoginForm.tsx' },
      { path: 'src/components/RegisterForm.tsx' },
      { path: 'src/components/ContactForm.tsx' }
    ],
    codeSnippet: `const validateForm = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
}`,
    snippet: `// Duplicate validation logic
const validateForm = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
}`
  }
];

// Mock data for complexity reports
export const complexityReportMock = [
  {
    path: 'src/components/Dashboard.tsx',
    complexity: 25,
    functions: [
      { name: 'handleUserAction', complexity: 25, line: 145 }
    ],
    status: 'high'
  },
  {
    path: 'src/utils/calculations.ts',
    complexity: 18,
    functions: [
      { name: 'calculateUserMetrics', complexity: 18, line: 67 }
    ],
    status: 'medium'
  },
  {
    path: 'src/services/dataProcessing.ts',
    complexity: 15,
    functions: [
      { name: 'processTransactionData', complexity: 15, line: 89 }
    ],
    status: 'medium'
  }
];

// Mock data for performance issues
export const performanceIssuesMock = [
  {
    id: '1',
    file: 'src/components/UserList.tsx',
    issue: 'Inefficient list rendering',
    description: 'The component re-renders the entire list on every state change',
    impact: 'high',
    recommendation: 'Use React.memo and virtualize the list with react-window',
    lineNumber: 78,
    severity: 'high'
  },
  {
    id: '2',
    file: 'src/hooks/useData.ts',
    issue: 'Excessive API calls',
    description: 'Multiple API calls are made for the same data',
    impact: 'medium',
    recommendation: 'Implement a caching mechanism or use react-query',
    lineNumber: 45,
    severity: 'medium'
  },
  {
    id: '3',
    file: 'src/utils/helpers.ts',
    issue: 'Expensive calculation in render',
    description: 'Complex calculations are performed during component rendering',
    impact: 'medium',
    recommendation: 'Use useMemo to cache calculation results',
    lineNumber: 112,
    severity: 'medium'
  }
];

// Complete mock analysis results
export const mockedAnalysisResults: AnalysisResult = {
  unusedFiles: [
    { path: 'src/components/Unused.tsx', size: 2048 },
    { path: 'src/styles/unused.css', size: 4096 },
    { path: 'src/utils/unusedUtil.ts', size: 1024 }
  ],
  unusedImports: unusedImportsMock,
  unusedVariables: unusedVariablesMock,
  unusedCssSelectors: [
    { file: 'src/styles/main.css', selector: '.unused-class', line: 45 },
    { file: 'src/styles/components.css', selector: '#unused-id', line: 78 },
    { file: 'src/styles/layout.css', selector: '.container .unused', line: 120 }
  ],
  unusedDependencies: [
    { name: 'unused-package', version: '1.0.0', alternatives: ['better-package'] },
    { name: 'legacy-utility', version: '0.8.5', alternatives: ['modern-utility', 'new-tool'] }
  ],
  deadCode: [
    { file: 'src/utils/helpers.ts', function: 'unusedFunction', line: 56 },
    { file: 'src/components/OldFeature.tsx', function: 'renderDeprecatedUI', line: 89 }
  ],
  deadCodePaths: [
    { file: 'src/utils/helpers.ts', function: 'unusedFunction', line: 56, description: 'This function is never called from anywhere in the codebase' },
    { file: 'src/components/OldFeature.tsx', function: 'renderDeprecatedUI', line: 89, description: 'This UI rendering function is for a deprecated feature' }
  ],
  duplicateCode: duplicateCodeMock,
  complexCode: complexityReportMock as unknown as ComplexityItem[],
  recommendations: [
    'Remove identified unused files to reduce bundle size',
    'Clean up unused imports to improve code clarity',
    'Refactor duplicate code patterns into reusable utilities',
    'Consider splitting complex functions into smaller, more manageable parts',
    'Upgrade to newer alternatives for outdated dependencies'
  ],
  metrics: {
    projectSize: 8560,
    fileCount: 342,
    dependencyCount: 45,
    averageFileSize: 25.03,
    largestFiles: [
      { filePath: 'src/assets/images/background.jpg', size: 1240 },
      { filePath: 'src/components/DataGrid.tsx', size: 256 }
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
  },
  bestPracticeViolations: [
    { rule: 'no-console', occurrences: 24, impact: 'low' },
    { rule: 'useEffect-cleanup', occurrences: 12, impact: 'medium' }
  ]
};

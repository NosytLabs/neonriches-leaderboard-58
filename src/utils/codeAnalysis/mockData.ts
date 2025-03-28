
import { AnalysisResult } from './types';

// Mock data for unused imports
export const unusedImportsMock = [
  { file: 'src/components/Dashboard.tsx', name: 'useState', line: 3 },
  { file: 'src/utils/api.ts', name: 'axios', line: 1 },
  { file: 'src/components/UserProfile.tsx', name: 'useEffect', line: 5 },
  { file: 'src/hooks/useFetch.ts', name: 'useCallback', line: 2 }
];

// Mock data for unused variables
export const unusedVariablesMock = [
  { file: 'src/context/AuthContext.tsx', name: 'loading', line: 12 },
  { file: 'src/hooks/useData.ts', name: 'error', line: 8 },
  { file: 'src/components/Form.tsx', name: 'isSubmitting', line: 15 },
  { file: 'src/utils/helpers.ts', name: 'defaultConfig', line: 7 }
];

// Mock data for unused functions
export const unusedFunctionsMock = [
  { file: 'src/utils/formatters.ts', name: 'formatCurrency', line: 24 },
  { file: 'src/utils/helpers.ts', name: 'formatLegacyDate', line: 42 },
  { file: 'src/components/common/Button.tsx', name: 'handleLegacyClick', line: 67 },
  { file: 'src/hooks/useAuth.ts', name: 'validatePassword', line: 89 }
];

// Mock data for unused components
export const unusedComponentsMock = [
  { file: 'src/components/legacy/OldComponent.tsx', line: 1 },
  { file: 'src/components/deprecated/DeprecatedBanner.tsx', line: 1 },
  { file: 'src/components/test/TestComponent.tsx', line: 1 }
];

// Mock data for complex functions
export const complexFunctionsMock = [
  {
    id: 1,
    file: 'src/utils/dataProcessing.ts',
    function: 'transformData',
    complexity: 15,
    line: 37,
    explanation: 'This function has too many nested conditions and loops, making it difficult to understand and maintain.'
  },
  {
    id: 2,
    file: 'src/components/Table.tsx',
    function: 'renderRows',
    complexity: 12,
    line: 124,
    explanation: 'This function contains complex rendering logic with multiple nested mappings and conditional statements.'
  },
  {
    id: 3,
    file: 'src/hooks/useDataFetching.ts',
    function: 'processApiResponse',
    complexity: 10,
    line: 45,
    explanation: 'This function handles too many edge cases and has complex error handling logic.'
  }
];

// Mock data for duplicate code
export const duplicateCodeMock = [
  {
    id: 1,
    files: ['src/utils/formatters.ts', 'src/utils/helpers.ts'],
    similarity: 0.95,
    lines: 12,
    codeSnippet: `function formatDate(date, format) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  if (format === 'short') {
    return \`\${month}/\${day}/\${year}\`;
  } else {
    return \`\${year}-\${month}-\${day}\`;
  }
}`
  },
  {
    id: 2,
    files: ['src/components/Button.tsx', 'src/components/IconButton.tsx'],
    similarity: 0.85,
    lines: 8,
    codeSnippet: `const handleClick = (event) => {
  if (disabled) {
    event.preventDefault();
    return;
  }
  onClick && onClick(event);
  trackEvent('button_click', { id, label });
};`
  },
  {
    id: 3,
    files: ['src/hooks/useAuth.js', 'src/hooks/useUser.js'],
    similarity: 0.75,
    lines: 15,
    codeSnippet: `const fetchData = async () => {
  setLoading(true);
  try {
    const response = await api.get(endpoint);
    setData(response.data);
    return response.data;
  } catch (error) {
    setError(error);
    console.error(error);
  } finally {
    setLoading(false);
  }
};`
  }
];

// Mock data for performance issues
export const performanceIssuesMock = [
  {
    id: 1,
    issue: 'Expensive calculation in render loop',
    file: 'src/components/Dashboard.tsx:45',
    severity: 'high',
    recommendation: 'Move the calculation to useMemo or outside the render function'
  },
  {
    id: 2,
    issue: 'Large list without virtualization',
    file: 'src/components/UserList.tsx:23',
    severity: 'medium',
    recommendation: 'Implement virtualized list using react-window or react-virtualized'
  },
  {
    id: 3,
    issue: 'Inefficient re-renders',
    file: 'src/components/DataTable.tsx:78',
    severity: 'medium',
    recommendation: 'Use React.memo or shouldComponentUpdate to prevent unnecessary re-renders'
  },
  {
    id: 4,
    issue: 'Multiple state updates causing cascading renders',
    file: 'src/hooks/useData.ts:34',
    severity: 'low',
    recommendation: 'Batch state updates or use useReducer for related state values'
  }
];

export const generateMockAnalysisResult = (): AnalysisResult => {
  return {
    unusedFiles: [
      'src/components/legacy/OldComponent.tsx',
      'src/utils/deprecated/helperFunctions.ts'
    ],
    unusedFunctions: [
      { file: 'src/utils/helpers.ts', name: 'formatLegacyDate', line: 42 },
      { file: 'src/components/common/Button.tsx', name: 'handleLegacyClick', line: 67 }
    ],
    unusedImports: [
      { file: 'src/components/Dashboard.tsx', name: 'useState', line: 3 },
      { file: 'src/utils/api.ts', name: 'axios', line: 1 }
    ],
    unusedVariables: [
      { file: 'src/context/AuthContext.tsx', name: 'loading', line: 12 },
      { file: 'src/hooks/useData.ts', name: 'error', line: 8 }
    ],
    unusedCssSelectors: [
      { file: 'src/styles/main.css', selector: 'legacy-button', line: 156 },
      { file: 'src/styles/components.css', selector: 'unused-container', line: 78 }
    ],
    deadCodePaths: [
      { file: 'src/utils/api.ts', description: 'Unreachable code after return statement', line: 45 },
      { file: 'src/components/User.tsx', description: 'Condition always evaluates to false', line: 92 }
    ],
    duplicateCode: [
      { 
        files: ['src/utils/formatters.ts', 'src/utils/helpers.ts'], 
        similarity: 0.95, 
        lines: 12,
        impact: 'Medium',
        risk: 'Low'
      },
      { 
        files: ['src/components/Button.tsx', 'src/components/IconButton.tsx'], 
        similarity: 0.85, 
        lines: 8,
        impact: 'Low',
        risk: 'Low'
      }
    ],
    complexCode: [
      { 
        file: 'src/utils/dataProcessing.ts', 
        function: 'transformData', 
        complexity: 15, 
        line: 37,
        impact: 'Medium',
        suggestion: 'Break into smaller functions and reduce nested conditions.'
      },
      { 
        file: 'src/components/Table.tsx', 
        function: 'renderRows', 
        complexity: 12, 
        line: 124,
        impact: 'Low',
        suggestion: 'Consider breaking into smaller functions.'
      }
    ],
    unusedDependencies: [
      'unused-package',
      'legacy-library'
    ],
    metrics: {
      beforeCleanup: {
        projectSize: 15240, // KB
        fileCount: 120,
        dependencyCount: 42
      },
      afterCleanup: {
        projectSize: 14850, // KB
        fileCount: 118,
        dependencyCount: 40
      }
    }
  };
};

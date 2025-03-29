
// Mock data for code analysis features

export const mockPerformanceIssues = [
  {
    id: 'perf-1',
    title: 'Excessive re-renders in ProductList component',
    description: 'The ProductList component re-renders 15 times when data changes',
    severity: 'high',
    impact: 'High impact on user experience, causing noticeable lag',
    solution: 'Use React.memo and useCallback to prevent unnecessary re-renders',
    file: 'src/components/ProductList.tsx',
    line: 45,
    status: 'open',
    recommendation: 'Use React.memo and useCallback',
    lineNumber: 45
  },
  {
    id: 'perf-2',
    title: 'Large bundle size from unused dependencies',
    description: 'Including entire lodash library adds 72kb to bundle size',
    severity: 'medium',
    impact: 'Increases initial load time by approximately 300ms',
    solution: 'Use specific lodash modules (e.g., import _map from "lodash/map")',
    file: 'src/utils/helpers.ts',
    line: 12,
    status: 'open',
    recommendation: 'Import specific lodash modules',
    lineNumber: 12
  },
  {
    id: 'perf-3',
    title: 'Inefficient CSS selectors',
    description: 'Using deep descendant selectors causes browser repainting',
    severity: 'low',
    impact: 'Minor impact on rendering performance',
    solution: 'Use more specific class-based selectors instead of descendant selectors',
    file: 'src/styles/global.css',
    line: 124,
    status: 'resolved',
    recommendation: 'Use class-based selectors',
    lineNumber: 124
  },
  {
    id: 'perf-4',
    title: 'Memory leak in useEffect cleanup',
    description: 'Event listener not being removed in component unmount',
    severity: 'critical',
    impact: 'Progressive memory usage growth leading to browser crash',
    solution: 'Add proper cleanup function to useEffect hook',
    file: 'src/components/LiveData.tsx',
    line: 78,
    status: 'open',
    recommendation: 'Add cleanup function',
    lineNumber: 78
  }
];

export const complexityReportMock = [
  {
    id: 'comp-1',
    title: 'High cognitive complexity in OrderProcessor function',
    description: 'Function has cognitive complexity score of 25 (threshold: 15)',
    severity: 'high',
    impact: 'Difficult to maintain and high likelihood of bugs',
    solution: 'Refactor into smaller, focused functions with clear responsibilities',
    file: 'src/services/orderService.ts',
    line: 145,
    metrics: {
      cyclomaticComplexity: 18,
      cognitiveComplexity: 25,
      maintenabilityIndex: 42,
      lineCount: 87
    }
  },
  {
    id: 'comp-2',
    title: 'Deeply nested conditionals in validateUser function',
    description: 'Function has 5 levels of nesting in conditional logic',
    severity: 'medium',
    impact: 'Reduces readability and increases chance of logic errors',
    solution: 'Use early returns and extract conditions to helper functions',
    file: 'src/utils/userValidation.ts',
    line: 34,
    metrics: {
      cyclomaticComplexity: 12,
      cognitiveComplexity: 16,
      maintenabilityIndex: 55,
      lineCount: 42
    }
  }
];

export const duplicateCodeMock = [
  {
    id: 'dup-1',
    title: 'Similar validation logic in multiple components',
    description: 'Input validation logic repeated in 4 different form components',
    severity: 'medium',
    impact: 'Increases maintenance burden when validation logic needs changes',
    solution: 'Extract to shared hook or utility function',
    instances: [
      { file: 'src/components/LoginForm.tsx', lines: '45-68' },
      { file: 'src/components/SignupForm.tsx', lines: '56-79' },
      { file: 'src/components/ContactForm.tsx', lines: '32-55' },
      { file: 'src/components/CheckoutForm.tsx', lines: '112-135' }
    ],
    similarity: 0.92,
    files: [
      'src/components/LoginForm.tsx',
      'src/components/SignupForm.tsx',
      'src/components/ContactForm.tsx',
      'src/components/CheckoutForm.tsx'
    ]
  },
  {
    id: 'dup-2',
    title: 'Duplicate API request handling in services',
    description: 'Error handling and response parsing duplicated across services',
    severity: 'medium',
    impact: 'Inconsistency in error handling across the application',
    solution: 'Create a common API client with shared request/response handling',
    instances: [
      { file: 'src/services/userService.ts', lines: '23-45' },
      { file: 'src/services/productService.ts', lines: '19-41' },
      { file: 'src/services/orderService.ts', lines: '28-50' }
    ],
    similarity: 0.88,
    files: [
      'src/services/userService.ts',
      'src/services/productService.ts',
      'src/services/orderService.ts'
    ]
  }
];

export const mockedAnalysisResults = {
  unusedImports: [
    {
      name: 'useState',
      source: 'react',
      file: 'src/components/StaticInfo.tsx',
      line: 1,
      impact: 'Low - Adds unnecessary bytes to bundle'
    },
    {
      name: 'useCallback',
      source: 'react',
      file: 'src/components/SimpleCard.tsx',
      line: 1,
      impact: 'Low - Adds unnecessary bytes to bundle'
    }
  ],
  unusedVariables: [
    {
      name: 'isActive',
      file: 'src/components/ToggleButton.tsx',
      line: 12,
      impact: 'Low - Creates noise in the codebase'
    },
    {
      name: 'TIMEOUT_DURATION',
      file: 'src/utils/constants.ts',
      line: 8,
      impact: 'Low - Dead code'
    }
  ],
  unusedFunctions: [
    {
      name: 'formatTimestamp',
      file: 'src/utils/helpers.ts',
      line: 45,
      impact: 'Medium - Dead code, potential confusion'
    },
    {
      name: 'validateEmail',
      file: 'src/utils/validation.ts',
      line: 22,
      impact: 'Medium - Dead code, potential confusion'
    }
  ],
  unusedCssSelectors: [
    {
      selector: '.card-highlight',
      file: 'src/styles/components.css',
      line: 156,
      impact: 'Low - Increases CSS bundle size'
    },
    {
      selector: '.btn-secondary-outline',
      file: 'src/styles/buttons.css',
      line: 87,
      impact: 'Low - Increases CSS bundle size'
    }
  ],
  summary: {
    totalIssues: 8,
    criticalIssues: 0,
    highIssues: 0,
    mediumIssues: 2,
    lowIssues: 6,
    potentialSavings: {
      bytes: 8546,
      readabilityScore: 12
    }
  }
};

// Mock metrics for project quality
export const projectMetrics = {
  beforeCleanup: {
    projectSize: 2456000, // in bytes
    fileCount: 187,
    dependencyCount: 42,
    linesOfCode: 28500,
    duplicatedCodePercentage: 8.4,
    testCoverage: 67.2,
    averageComplexity: 15.3
  },
  afterCleanup: {
    projectSize: 2145000, // in bytes
    fileCount: 175,
    dependencyCount: 37,
    linesOfCode: 25200,
    duplicatedCodePercentage: 4.2,
    testCoverage: 67.2,
    averageComplexity: 12.8
  }
};

export const codeAnalysisTypes = {
  DuplicateCodeInfo: {
    files: [],
    title: '',
    description: '',
    similarity: 0
  },
  ImportInfo: {
    name: '',
    source: '',
    file: '',
    line: 0
  },
  VariableInfo: {
    name: '',
    file: '',
    line: 0
  },
  UnusedImport: {
    name: '',
    source: '',
    file: '',
    line: 0
  },
  UnusedVariable: {
    name: '',
    file: '',
    line: 0
  },
  UnusedCssSelector: {
    selector: '',
    file: '',
    line: 0
  }
};

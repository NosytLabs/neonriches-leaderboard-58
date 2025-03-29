// Mock data for code analysis reports

export const mockedAnalysisResults = {
  unusedImports: [
    { name: 'useState', path: 'react', file: 'src/components/Example.tsx', line: 1, column: 10 },
    { name: 'useRef', path: 'react', file: 'src/components/Example.tsx', line: 1, column: 20 },
  ],
  unusedVariables: [
    { name: 'counter', file: 'src/components/Counter.tsx', line: 5, column: 7 },
    { name: 'isOpen', file: 'src/components/Modal.tsx', line: 8, column: 7 },
  ],
  unusedFiles: [
    'src/utils/deprecated.ts',
    'src/components/unused/TestComponent.tsx',
  ],
  unusedCssSelectors: [
    { selector: '.unused-class', file: 'src/styles/main.css', line: 45, column: 1 },
    { selector: '#old-id', file: 'src/styles/legacy.css', line: 12, column: 1 },
  ],
  unusedDependencies: [
    { name: 'moment', version: '2.29.1', alternative: 'date-fns' },
    { name: 'lodash', version: '4.17.21', alternative: 'use individual lodash modules' },
  ],
  unusedFunctions: [
    { name: 'formatDate', file: 'src/utils/dates.ts', line: 15, column: 1 },
    { name: 'calculateTotal', file: 'src/utils/math.ts', line: 25, column: 1 },
  ],
  summary: {
    totalIssues: 12,
    criticalIssues: 4,
    warningIssues: 6,
    infoIssues: 2,
    estimatedSavings: {
      fileCount: 3,
      dependencyCount: 2,
      sizeReduction: '256KB',
    },
  },
};

export const duplicateCodeMock = [
  {
    id: 'dup1',
    duplicates: [
      { file: 'src/components/Button.tsx', startLine: 10, endLine: 25, snippet: 'function formatProps(props) { /* ... */ }' },
      { file: 'src/components/Input.tsx', startLine: 15, endLine: 30, snippet: 'function formatProps(props) { /* ... */ }' },
    ],
    similarity: 0.95,
    impact: 'medium',
    recommendation: 'Extract formatProps to a shared utility',
  },
  {
    id: 'dup2',
    duplicates: [
      { file: 'src/utils/validation.ts', startLine: 50, endLine: 70, snippet: 'function validateEmail(email) { /* ... */ }' },
      { file: 'src/utils/formUtils.ts', startLine: 25, endLine: 45, snippet: 'function validateEmail(email) { /* ... */ }' },
    ],
    similarity: 0.98,
    impact: 'high',
    recommendation: 'Consolidate email validation to a single location',
  },
];

export const complexityReportMock = [
  {
    file: 'src/utils/calculations.ts',
    function: 'calculateTaxes',
    startLine: 28,
    endLine: 95,
    complexityScore: 25,
    impact: 'high',
    issues: [
      'Contains 5 nested if statements',
      'Has 7 logical operators',
      'Contains 4 loop structures',
    ],
    recommendation: 'Break down into smaller functions with single responsibilities',
  },
  {
    file: 'src/components/DataTable.tsx',
    function: 'renderTable',
    startLine: 120,
    endLine: 220,
    complexityScore: 18,
    impact: 'medium',
    issues: [
      'Function is 100 lines long',
      'Contains 3 nested loops',
      'Has 6 return statements',
    ],
    recommendation: 'Extract rendering logic into smaller components',
  },
];

export const performanceIssuesMock = [
  {
    file: 'src/components/HeavyComponent.tsx',
    issue: 'Expensive re-renders',
    location: { startLine: 45, endLine: 60 },
    description: 'Component re-renders on every state change due to missing memoization',
    impact: 'high',
    recommendation: 'Use React.memo and useCallback to prevent unnecessary re-renders',
    snippet: 'function HeavyComponent(props) { /* rendering logic */ }',
  },
  {
    file: 'src/hooks/useData.ts',
    issue: 'Inefficient data fetching',
    location: { startLine: 15, endLine: 25 },
    description: 'Data is being fetched on every render without caching',
    impact: 'high',
    recommendation: 'Implement proper caching strategy using useQuery or SWR',
    snippet: 'useEffect(() => { fetchData() }, [someValue])',
  },
];

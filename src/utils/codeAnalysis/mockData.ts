
import { 
  UnusedImport, 
  UnusedVariable, 
  UnusedCssSelector, 
  UnusedFunction,
  DuplicateCodeInfo,
  ComplexityItem,
  PerformanceIssue 
} from '@/types/codeAnalysis/types';

export const mockedAnalysisResults = {
  unusedImports: [
    { file: 'src/components/UserProfile.tsx', name: 'useState', line: 2, path: 'react' },
    { file: 'src/utils/formatters.ts', name: 'formatNumber', line: 4, path: '@/utils/helpers' },
    { file: 'src/hooks/useAuth.tsx', name: 'useEffect', line: 3, path: 'react' },
    { file: 'src/components/Button.tsx', name: 'ButtonProps', line: 2, path: '@/types/button' },
    { file: 'src/contexts/ThemeContext.tsx', name: 'createContext', line: 1, path: 'react' }
  ] as UnusedImport[],
  
  unusedVariables: [
    { file: 'src/components/UserProfile.tsx', name: 'isLoading', line: 8, type: 'boolean' },
    { file: 'src/utils/formatters.ts', name: 'DEFAULT_LOCALE', line: 7, type: 'string' },
    { file: 'src/hooks/useAuth.tsx', name: 'initialState', line: 10, type: 'AuthState' },
    { file: 'src/components/Modal.tsx', name: 'handleCancel', line: 15, type: 'function' },
    { file: 'src/contexts/ThemeContext.tsx', name: 'previousTheme', line: 12, type: 'string' }
  ] as UnusedVariable[],
  
  unusedCssSelectors: [
    { file: 'src/styles/components.css', selector: '.unused-class', line: 45 },
    { file: 'src/styles/global.css', selector: '.legacy-button', line: 89 },
    { file: 'src/components/Card/Card.module.css', selector: '.card-footer-alt', line: 27 },
    { file: 'src/styles/utils.css', selector: '.flex-center-alt', line: 112 },
    { file: 'src/components/Modal/Modal.module.css', selector: '.modal-backdrop-alt', line: 34 }
  ] as UnusedCssSelector[],
  
  unusedFunctions: [
    { file: 'src/utils/helpers.ts', name: 'formatDateLegacy', line: 45 },
    { file: 'src/hooks/useLocalStorage.ts', name: 'clearAllItems', line: 67 },
    { file: 'src/services/api.ts', name: 'fetchWithTimeout', line: 89 },
    { file: 'src/utils/validation.ts', name: 'validateUrlOld', line: 34 },
    { file: 'src/components/Form/utils.ts', name: 'serializeFormDeprecated', line: 112 }
  ] as UnusedFunction[],
  
  unusedFiles: [
    'src/components/legacy/OldButton.tsx',
    'src/utils/deprecated-helpers.ts',
    'src/styles/unused-styles.css',
    'src/hooks/useOldAuth.ts',
    'src/types/deprecated-types.ts'
  ],
  
  unusedDependencies: [
    'moment',
    'lodash-es',
    'react-spring',
    'react-transition-group',
    'query-string'
  ],
  
  summary: {
    totalIssues: 25,
    criticalIssues: 5,
    estimatedSavings: {
      size: '1.7MB',
      dependencies: 5,
      files: 5,
      complexity: '15%'
    }
  }
};

export const duplicateCodeMock: DuplicateCodeInfo[] = [
  {
    id: '1',
    files: [
      { path: 'src/components/UserCard.tsx' },
      { path: 'src/components/ProfileCard.tsx' }
    ],
    similarity: 0.92,
    lines: 47,
    codeSnippet: 
`const Card = ({ user, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div 
      className={\`card \${isActive ? 'active' : ''} \${isHovered ? 'hovered' : ''}\`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="card-header">
        <img src={user.avatar} alt={user.name} />
        <h3>{user.name}</h3>
      </div>
      <div className="card-body">
        <p>{user.bio}</p>
      </div>
      <div className="card-footer">
        <button className="btn primary">View Profile</button>
      </div>
    </div>
  );
};`,
    recommendation: 'Create a shared Card component that can be reused across the application.'
  },
  {
    id: '2',
    files: [
      { path: 'src/utils/dateFormatters.ts' },
      { path: 'src/utils/formatters.ts' }
    ],
    similarity: 0.88,
    lines: 35,
    codeSnippet:
`export const formatDate = (date: Date | string, format: string = 'MMM D, YYYY'): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d.getTime())) {
    return 'Invalid Date';
  }
  
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return format
    .replace('YYYY', year.toString())
    .replace('MM', (month + 1).toString().padStart(2, '0'))
    .replace('DD', day.toString().padStart(2, '0'))
    .replace('MMM', months[month])
    .replace('D', day.toString())
    .replace('HH', hours.toString().padStart(2, '0'))
    .replace('mm', minutes.toString().padStart(2, '0'))
    .replace('ss', seconds.toString().padStart(2, '0'));
};`,
    recommendation: 'Consolidate date formatting functions into a single utility file.'
  },
  {
    id: '3',
    files: [
      { path: 'src/components/AuthForm.tsx' },
      { path: 'src/components/ProfileForm.tsx' },
      { path: 'src/components/SettingsForm.tsx' }
    ],
    similarity: 0.85,
    lines: 28,
    codeSnippet:
`const validateForm = (values) => {
  const errors = {};
  
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  
  return errors;
};`,
    recommendation: 'Extract form validation logic into a shared utility function or custom hook.'
  }
];

export const complexityReportMock: ComplexityItem[] = [
  {
    id: '1',
    name: 'processUserData',
    file: 'src/utils/userProcessing.ts',
    complexity: 25,
    line: 34,
    explanation: 'Function has too many conditional branches and nested loops. Consider breaking it down into smaller, focused functions.',
    issues: [
      'High cyclomatic complexity makes the code difficult to understand and maintain',
      'Multiple responsibilities violate single responsibility principle',
      'Difficult to test due to many conditional paths'
    ]
  },
  {
    id: '2',
    name: 'calculateTotalPrice',
    file: 'src/utils/priceCalculation.ts',
    complexity: 18,
    line: 57,
    explanation: 'This function handles too many pricing rules and special cases. Consider using the strategy pattern or separate specialized calculators.',
    issues: [
      'Too many pricing rule conditions create a complex decision tree',
      'Function has grown over time without refactoring',
      'Changes to one pricing rule risk breaking others'
    ]
  },
  {
    id: '3',
    name: 'renderDashboard',
    file: 'src/components/Dashboard.tsx',
    complexity: 15,
    line: 89,
    explanation: 'Component has too many rendering conditions and state dependencies. Consider splitting into smaller components with more focused responsibilities.',
    issues: [
      'Complex conditional rendering logic',
      'Too many component states being tracked',
      'Difficult to test all rendering scenarios'
    ]
  }
];

export const performanceIssuesMock: PerformanceIssue[] = [
  {
    id: '1',
    description: 'Inefficient list rendering without keys',
    file: 'src/components/UserList.tsx',
    lineNumber: 45,
    severity: 'medium',
    recommendation: 'Add unique keys to list items to improve reconciliation performance.'
  },
  {
    id: '2',
    description: 'Expensive computation in render method',
    file: 'src/components/DataTable.tsx',
    lineNumber: 78,
    severity: 'high',
    recommendation: 'Move expensive data transformations out of the render method. Use useMemo to cache results or compute values before rendering.'
  },
  {
    id: '3',
    description: 'Memory leak in useEffect',
    file: 'src/hooks/useDataFetching.ts',
    lineNumber: 34,
    severity: 'critical',
    recommendation: 'Ensure event listeners or subscriptions created in useEffect are properly cleaned up in the return function.'
  },
  {
    id: '4',
    description: 'Unnecessary re-renders due to object literals in props',
    file: 'src/components/FilterPanel.tsx',
    lineNumber: 23,
    severity: 'medium',
    recommendation: 'Move object and array literals outside the component or memoize them with useMemo to prevent new references on each render.'
  },
  {
    id: '5',
    description: 'Large bundle size due to importing entire library',
    file: 'src/utils/helpers.ts',
    lineNumber: 3,
    severity: 'high',
    recommendation: 'Use specific imports instead of importing the entire library: import { map, filter } from "lodash" instead of import _ from "lodash".'
  }
];

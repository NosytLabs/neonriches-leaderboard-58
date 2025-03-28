
import { AnalysisResult, ComplexCode, DuplicateCode, UnusedCssSelector, UnusedImport, UnusedVariable, DeadCodePath, UnusedFunction } from './types';

// Mock data for performance issues
export const performanceIssuesMock = [
  {
    id: 1,
    file: 'src/components/Dashboard.jsx',
    issue: 'Expensive operation in render method',
    severity: 'high',
    recommendation: 'Move the expensive calculation to useMemo or a separate useEffect'
  },
  {
    id: 2,
    file: 'src/hooks/useDataFetching.js',
    issue: 'Multiple unnecessary re-renders',
    severity: 'medium',
    recommendation: 'Add proper dependency arrays to useEffect calls'
  },
  {
    id: 3,
    file: 'src/utils/formatters.js',
    issue: 'Inefficient string concatenation in loop',
    severity: 'low',
    recommendation: 'Use array join instead of string concatenation in loops'
  }
];

// Mock data for unused imports
export const unusedImportsMock: UnusedImport[] = [
  {
    file: 'src/components/Header.tsx',
    name: 'Button',
    line: 5
  },
  {
    file: 'src/pages/Dashboard.tsx',
    name: 'useEffect',
    line: 2
  },
  {
    file: 'src/hooks/useAuth.ts',
    name: 'useState',
    line: 3
  }
];

// Mock data for unused variables
export const unusedVariablesMock: UnusedVariable[] = [
  {
    file: 'src/components/Profile.tsx',
    name: 'isLoading',
    line: 12
  },
  {
    file: 'src/components/Form.tsx',
    name: 'formData',
    line: 8
  }
];

// Mock data for unused functions
export const unusedFunctionsMock: UnusedFunction[] = [
  {
    file: 'src/utils/helpers.ts',
    name: 'formatDate',
    line: 15
  },
  {
    file: 'src/components/Sidebar.tsx',
    name: 'handleToggle',
    line: 42
  }
];

// Mock data for unused components
export const unusedComponentsMock: string[] = [
  'src/components/unused/FeatureBanner.tsx',
  'src/components/experimental/NewChart.tsx'
];

// Mock data for complex functions
export const complexFunctionsMock: ComplexCode[] = [
  {
    file: 'src/components/Cart.tsx',
    function: 'calculateDiscount',
    complexity: 15,
    line: 78,
    explanation: 'This function has multiple nested conditionals and loops, making it difficult to understand and maintain.'
  },
  {
    file: 'src/utils/tax-calculator.ts',
    function: 'applyTaxRules',
    complexity: 12,
    line: 45,
    explanation: 'This function contains complex business logic with many edge cases and conditions.'
  },
  {
    file: 'src/hooks/useProductData.ts',
    function: 'transformProductData',
    complexity: 9,
    line: 112,
    explanation: 'This function has several nested loops and transformations that could be simplified.'
  }
];

// Mock data for duplicate code - adding a fileGroup property for identification
export const duplicateCodeMock: DuplicateCode[] = [
  {
    files: ['src/components/UserProfile.tsx', 'src/components/AdminProfile.tsx'],
    similarity: 0.85,
    lines: 32,
    codeSnippet: `
const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // More duplicate code...
}`
  },
  {
    files: ['src/utils/formatters.ts', 'src/helpers/display-helpers.ts'],
    similarity: 0.92,
    lines: 15,
    codeSnippet: `
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};`
  }
];

// Complete mocked analysis results
export const mockedAnalysisResults: AnalysisResult = {
  unusedFiles: [
    'src/components/unused/FeatureBanner.tsx',
    'src/components/experimental/NewChart.tsx',
    'src/pages/deprecated/OldDashboard.tsx'
  ],
  unusedImports: unusedImportsMock,
  unusedVariables: unusedVariablesMock,
  unusedFunctions: unusedFunctionsMock,
  unusedCssSelectors: [
    {
      file: 'src/styles/components.css',
      selector: 'unused-class',
      line: 42
    },
    {
      file: 'src/styles/pages.css',
      selector: 'old-container',
      line: 78
    }
  ],
  deadCodePaths: [
    {
      file: 'src/components/FeatureToggle.tsx',
      description: 'Unreachable code after return statement',
      line: 45
    },
    {
      file: 'src/utils/helpers.ts',
      description: 'Condition always evaluates to false',
      line: 112
    }
  ],
  duplicateCode: duplicateCodeMock,
  complexCode: complexFunctionsMock,
  unusedDependencies: [
    'unused-package',
    'legacy-component-library'
  ],
  metrics: {
    beforeCleanup: {
      projectSize: 12580,
      fileCount: 158,
      dependencyCount: 42
    },
    afterCleanup: {
      projectSize: 10240,
      fileCount: 145,
      dependencyCount: 38
    }
  }
};

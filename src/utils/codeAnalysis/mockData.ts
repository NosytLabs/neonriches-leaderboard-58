
import { AnalysisResult } from './types';

export const duplicateCodeMock = [
  {
    id: '1',
    similarity: 0.85,
    files: [{ path: 'src/components/ProfileCard.tsx' }, { path: 'src/components/UserCard.tsx' }],
    lines: 12,
    codeSnippet: `const renderUserInfo = (user) => {
  return (
    <div className="user-info">
      <Avatar src={user.profileImage} alt={user.displayName} />
      <div className="user-details">
        <h3>{user.displayName}</h3>
        <p className="user-role">{user.role}</p>
      </div>
    </div>
  );
};`,
    recommendation: 'Extract to a shared UserInfo component'
  },
  {
    id: '2',
    similarity: 0.92,
    files: [{ path: 'src/services/userService.ts' }, { path: 'src/services/profileService.ts' }],
    lines: 15,
    codeSnippet: `const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with an error status
    console.error('API Error:', error.response.data);
    return {
      success: false,
      message: error.response.data.message || 'Server error',
      status: error.response.status
    };
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Network Error:', error.request);
    return { success: false, message: 'Network error', status: 0 };
  } else {
    // Something happened in setting up the request
    console.error('Request Error:', error.message);
    return { success: false, message: error.message, status: 0 };
  }
};`,
    recommendation: 'Create a shared API error handling utility'
  }
];

export const complexityReportMock = [
  {
    id: '1',
    file: 'src/components/RoyalMockeryFestival.tsx',
    name: 'handleMockery',
    complexity: 15,
    line: 78,
    lines: 40,
    issues: [
      'Contains nested conditionals',
      'Multiple responsibilities',
      'Too many parameters'
    ],
    explanation: 'This function handles the mockery action, validates input, processes payment, and shows user feedback.'
  },
  {
    id: '2',
    file: 'src/services/leaderboardService.ts',
    name: 'calculateRanks',
    complexity: 12,
    line: 124,
    lines: 35,
    issues: [
      'Complex sorting algorithm',
      'Multiple nested loops',
      'Handles multiple team types'
    ],
    explanation: 'This function calculates user ranks based on spending, team contribution, and other factors.'
  }
];

export const performanceIssuesMock = [
  {
    id: '1',
    description: 'Inefficient list rendering without key prop',
    file: 'src/components/leaderboard/LeaderboardList.tsx',
    line: 42,
    lineNumber: 42,
    severity: 'medium',
    recommendation: 'Add a unique key prop to each list item for better React reconciliation',
    issue: 'Missing key prop',
    status: 'open'
  },
  {
    id: '2',
    description: 'Expensive operation in render function',
    file: 'src/components/dashboard/Dashboard.tsx',
    line: 87,
    lineNumber: 87,
    severity: 'high',
    recommendation: 'Move expensive calculations to useMemo or outside the render path',
    issue: 'Expensive render calculation',
    status: 'open'
  }
];

export const mockedAnalysisResults: AnalysisResult = {
  unusedImports: [
    { name: 'useState', source: 'react', file: 'src/components/StaticComponent.tsx', line: 1, impact: 'low' },
    { name: 'useEffect', source: 'react', file: 'src/components/PureComponent.tsx', line: 1, impact: 'low' },
    { name: 'Button', source: '@/components/ui/button', file: 'src/pages/UnusedButtonPage.tsx', line: 3, impact: 'low' }
  ],
  unusedVariables: [
    { name: 'unusedState', file: 'src/components/ProfileEditor.tsx', line: 12, impact: 'low' },
    { name: 'tempData', file: 'src/hooks/useDataFetching.ts', line: 24, impact: 'low' },
    { name: 'debugMode', file: 'src/utils/logger.ts', line: 5, impact: 'medium' }
  ],
  unusedFunctions: [
    { name: 'formatUserData', file: 'src/utils/formatters.ts', line: 45, impact: 'medium' },
    { name: 'calculateBonus', file: 'src/utils/calculations.ts', line: 78, impact: 'medium' },
    { name: 'debugLog', file: 'src/utils/logger.ts', line: 23, impact: 'low' }
  ],
  unusedCssSelectors: [
    { selector: '.unused-card', file: 'src/styles/cards.css', line: 67, impact: 'low' },
    { selector: '.legacy-button', file: 'src/styles/buttons.css', line: 112, impact: 'low' },
    { selector: '.debug-outline', file: 'src/styles/debug.css', line: 14, impact: 'low' }
  ],
  unusedFiles: [
    'src/components/deprecated/OldNavbar.tsx',
    'src/styles/unused.css',
    'src/utils/oldHelpers.ts'
  ],
  unusedSelectors: [
    { selector: '.legacy-layout', file: 'src/styles/layouts.css', line: 88 },
    { selector: '.debug-grid', file: 'src/styles/debug.css', line: 22 },
    { selector: '.old-theme', file: 'src/styles/themes.css', line: 155 }
  ],
  unusedDependencies: [
    'lodash-es',
    'moment',
    'react-spring'
  ],
  duplicateCode: duplicateCodeMock,
  complexCode: complexityReportMock,
  performanceIssues: performanceIssuesMock,
  summary: {
    totalIssues: 29,
    severity: {
      high: 5,
      medium: 12,
      low: 12
    },
    potentialSavings: {
      bundle: '~56 KB',
      maintenance: 'High'
    }
  }
};

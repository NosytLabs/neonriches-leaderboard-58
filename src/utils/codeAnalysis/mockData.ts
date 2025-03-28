
// Mock data for code analysis components
import { AnalysisResult } from './types';

// Mock data for unused imports
export const unusedImportsMock = [
  { file: 'src/components/Dashboard.tsx', name: 'useState', line: 5 },
  { file: 'src/components/Profile.tsx', name: 'useEffect', line: 3 },
  { file: 'src/hooks/useUserData.ts', name: 'useMemo', line: 7 },
  { file: 'src/utils/formatters.ts', name: 'parseISO', line: 2 },
];

// Mock data for unused variables
export const unusedVariablesMock = [
  { file: 'src/components/Leaderboard.tsx', name: 'filteredUsers', line: 23 },
  { file: 'src/hooks/useAuthentication.ts', name: 'error', line: 15 },
  { file: 'src/utils/api.ts', name: 'baseUrl', line: 8 },
];

// Mock data for unused functions
export const unusedFunctionsMock = [
  { file: 'src/utils/helpers.ts', name: 'formatDateTime', line: 45 },
  { file: 'src/hooks/useDebounce.ts', name: 'useThrottledCallback', line: 28 },
];

// Mock data for unused components
export const unusedComponentsMock = [
  { file: 'src/components/OldFeaturesCard.tsx', line: 1 },
  { file: 'src/components/LegacyNotification.tsx', line: 1 },
];

// Mock data for performance issues
export const performanceIssuesMock = [
  {
    id: 1,
    file: 'src/components/dashboard/SpendingChart.tsx',
    issue: 'Excessive re-renders due to missing dependency array',
    severity: 'high',
    recommendation: 'Add proper dependency array to useEffect hook',
  },
  {
    id: 2,
    file: 'src/components/profile/ProfileViewer.tsx',
    issue: 'Large component with multiple responsibilities',
    severity: 'medium',
    recommendation: 'Split into smaller, focused components',
  },
  {
    id: 3,
    file: 'src/hooks/useProfileData.ts',
    issue: 'Inefficient data transformation',
    severity: 'medium',
    recommendation: 'Use memoization to cache expensive calculations',
  },
  {
    id: 4,
    file: 'src/utils/stringUtils.ts',
    issue: 'String operations in tight loop',
    severity: 'low',
    recommendation: 'Optimize string operations or move outside of loop',
  },
];

// Mock data for duplicate code
export const duplicateCodeMock = [
  {
    id: 1,
    files: [
      'src/components/profile/ProfileEditor.tsx',
      'src/components/profile/ProfileViewer.tsx',
    ],
    similarity: 0.85,
    lines: 42,
    codeSnippet: `const handleUserData = async () => {
  if (!user) return;
  
  try {
    setLoading(true);
    const data = await fetchUserProfile(user.id);
    setProfile(data);
    setInitialValues(data);
  } catch (error) {
    console.error('Error fetching profile data:', error);
    setError('Failed to load profile data');
  } finally {
    setLoading(false);
  }
};`,
  },
  {
    id: 2,
    files: [
      'src/utils/dateUtils.ts',
      'src/components/events/CountdownTimer.tsx',
    ],
    similarity: 0.92,
    lines: 15,
    codeSnippet: `const formatTimeRemaining = (timeInMs) => {
  const seconds = Math.floor((timeInMs / 1000) % 60);
  const minutes = Math.floor((timeInMs / (1000 * 60)) % 60);
  const hours = Math.floor((timeInMs / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeInMs / (1000 * 60 * 60 * 24));
  
  return {
    days,
    hours,
    minutes,
    seconds,
    formatted: \`\${days}d \${hours}h \${minutes}m \${seconds}s\`
  };
};`,
  },
];

// Mock data for complex functions
export const complexFunctionsMock = [
  {
    id: 1,
    file: 'src/hooks/useProfileData.ts',
    function: 'transformUserData',
    complexity: 15,
    line: 124,
    explanation: 'Complex function with multiple nested conditions and loops for transforming user data',
  },
  {
    id: 2,
    file: 'src/components/events/EventStats.tsx',
    function: 'calculateEventMetrics',
    complexity: 12,
    line: 87,
    explanation: 'Function with multiple conditions for different event types and calculation paths',
  },
  {
    id: 3,
    file: 'src/utils/teamUtils.ts',
    function: 'processTeamRankings',
    complexity: 10,
    line: 45,
    explanation: 'Complex algorithm for calculating team standings with many special cases',
  },
];

// Full mock analysis results
export const mockedAnalysisResults: AnalysisResult = {
  unusedFiles: [
    'src/components/legacy/OldDashboard.tsx',
    'src/components/deprecated/WelcomeCard.tsx',
    'src/hooks/unused/useOldAuth.ts',
    'src/styles/deprecated-animations.css',
  ],
  unusedFunctions: [
    { file: 'src/utils/helpers.ts', name: 'formatLegacyDate', line: 45 },
    { file: 'src/utils/stringUtils.ts', name: 'capitalizeEachWord', line: 28 },
    { file: 'src/hooks/useDebounce.ts', name: 'useThrottledCallback', line: 28 },
    { file: 'src/utils/authUtils.ts', name: 'validateOldPasswordFormat', line: 67 },
  ],
  unusedImports: [
    { file: 'src/components/Dashboard.tsx', name: 'useMemo', line: 5 },
    { file: 'src/components/Profile.tsx', name: 'useCallback', line: 3 },
    { file: 'src/hooks/useUserData.ts', name: 'useState', line: 7 },
    { file: 'src/utils/formatters.ts', name: 'parseISO', line: 2 },
    { file: 'src/components/leaderboard/LeaderboardTable.tsx', name: 'useEffect', line: 4 },
  ],
  unusedVariables: [
    { file: 'src/components/Leaderboard.tsx', name: 'isFiltered', line: 23 },
    { file: 'src/hooks/useAuthentication.ts', name: 'loginError', line: 15 },
    { file: 'src/utils/api.ts', name: 'apiVersion', line: 8 },
    { file: 'src/components/profile/ProfileEditor.tsx', name: 'initialFormState', line: 34 },
    { file: 'src/contexts/AuthContext.tsx', name: 'authVersion', line: 12 },
  ],
  unusedCssSelectors: [
    { file: 'src/styles/animations/utility-classes.css', selector: 'fade-out-slow', line: 45 },
    { file: 'src/styles/theme.css', selector: 'legacy-gradient', line: 123 },
    { file: 'src/styles/theme/royal-gradients.css', selector: 'royal-gold-legacy', line: 67 },
    { file: 'src/styles/animations/royal-elements.css', selector: 'float-vertical-legacy', line: 89 },
  ],
  deadCodePaths: [
    { file: 'src/components/profile/ProfileEditor.tsx', description: 'Unreachable code after return statement', line: 156 },
    { file: 'src/utils/authUtils.ts', description: 'Condition always evaluates to false', line: 78 },
    { file: 'src/hooks/useWishingWell.ts', description: 'Dead code branch in if statement', line: 124 },
  ],
  duplicateCode: [
    {
      files: [
        'src/components/profile/ProfileEditor.tsx',
        'src/components/profile/ProfileViewer.tsx',
      ],
      similarity: 0.85,
      lines: 42,
      impact: 'Medium',
      risk: 'Low',
    },
    {
      files: [
        'src/utils/dateUtils.ts',
        'src/components/events/CountdownTimer.tsx',
      ],
      similarity: 0.92,
      lines: 15,
      impact: 'Low',
      risk: 'Low',
    },
    {
      files: [
        'src/hooks/use-notification-sounds.ts',
        'src/hooks/use-premium-sounds.ts',
      ],
      similarity: 0.78,
      lines: 28,
      impact: 'Medium',
      risk: 'Medium',
    },
  ],
  complexCode: [
    {
      file: 'src/hooks/useProfileData.ts',
      function: 'transformUserData',
      complexity: 15,
      line: 124,
      impact: 'Medium',
      suggestion: 'Split into smaller, specialized functions that each handle one aspect of the transformation',
    },
    {
      file: 'src/components/events/EventStats.tsx',
      function: 'calculateEventMetrics',
      complexity: 12,
      line: 87,
      impact: 'Medium',
      suggestion: 'Create separate calculation functions for each event type',
    },
    {
      file: 'src/utils/teamUtils.ts',
      function: 'processTeamRankings',
      complexity: 10,
      line: 45,
      impact: 'Medium',
      suggestion: 'Extract helper functions for each ranking calculation step',
    },
  ],
  unusedDependencies: [
    'moment',
    'lodash.debounce',
    'react-loader-spinner',
    'react-beautiful-dnd',
  ],
  metrics: {
    beforeCleanup: {
      projectSize: 12580,
      fileCount: 187,
      dependencyCount: 42,
    },
    afterCleanup: {
      projectSize: 11245,
      fileCount: 178,
      dependencyCount: 38,
    },
  },
};

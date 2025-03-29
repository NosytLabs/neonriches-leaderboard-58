
import { AnalysisResult, ComplexityItem, DeadCodeInfo, DuplicateCodeInfo, PerformanceIssue } from './types';

// Mock performance issues for display
export const mockPerformanceIssues: PerformanceIssue[] = [
  {
    id: 'perf-1',
    description: 'Expensive DOM operations in ScrollingLeaderboard component',
    file: 'src/components/leaderboard/ScrollingLeaderboard.tsx',
    lineNumber: 127,
    severity: 'high',
    recommendation: 'Use React.memo or shouldComponentUpdate to prevent unnecessary re-renders'
  },
  {
    id: 'perf-2',
    description: 'Inefficient data fetching pattern in UserProfileData',
    file: 'src/hooks/useProfileData.ts',
    lineNumber: 58,
    severity: 'medium',
    recommendation: 'Implement pagination or virtualization for large datasets'
  },
  {
    id: 'perf-3',
    description: 'Multiple re-renders caused by state updates in RoyalCourtMember',
    file: 'src/components/leaderboard/RoyalCourtMember.tsx',
    lineNumber: 45,
    severity: 'medium',
    recommendation: 'Batch state updates using useReducer instead of multiple useState calls'
  },
  {
    id: 'perf-4',
    description: 'Expensive animation effects in EnhancedCrownEffect component',
    file: 'src/components/animations/EnhancedCrownEffect.tsx',
    lineNumber: 92,
    severity: 'medium',
    recommendation: 'Use CSS transitions instead of JavaScript animations where possible'
  },
  {
    id: 'perf-5',
    description: 'Unoptimized images causing slow page load',
    file: 'src/pages/Home.tsx',
    lineNumber: 34,
    severity: 'high',
    recommendation: 'Use next/image or other image optimization tools, add width/height attributes'
  }
];

// Export the performance issues with a more common name
export const performanceIssuesMock = mockPerformanceIssues;

// Mock unused imports
const mockUnusedImports = [
  { name: 'useState', path: 'react', file: 'src/components/ui/StaticWidget.tsx', line: 1 },
  { name: 'useEffect', path: 'react', file: 'src/components/ui/PureComponent.tsx', line: 1 },
  { name: 'Button', path: '@/components/ui/button', file: 'src/pages/UnusedButtonPage.tsx', line: 4 },
  { name: 'formatDate', path: '@/utils/formatters', file: 'src/components/DateDisplay.tsx', line: 3 },
  { name: 'UserAvatar', path: '@/components/user/UserAvatar', file: 'src/components/profile/OldProfileCard.tsx', line: 7 }
];

// Mock unused variables
const mockUnusedVariables = [
  { name: 'isLoading', type: 'boolean', file: 'src/components/DataTable.tsx', line: 12 },
  { name: 'errorMessage', type: 'string', file: 'src/components/FormWithValidation.tsx', line: 15 },
  { name: 'userCount', type: 'number', file: 'src/pages/AdminDashboard.tsx', line: 28 },
  { name: 'DEFAULT_THEME', type: 'string', file: 'src/constants/theme.ts', line: 4 },
  { name: 'handleReset', type: 'function', file: 'src/components/SearchForm.tsx', line: 23 }
];

// Mock unused CSS selectors
const mockUnusedSelectors = [
  { selector: 'unused-class', file: 'src/styles/legacy.css', line: 45 },
  { selector: 'old-button-style', file: 'src/styles/buttons.css', line: 78 },
  { selector: 'deprecated-layout', file: 'src/styles/layouts.css', line: 120 },
  { selector: 'unused-animation', file: 'src/styles/animations.css', line: 67 },
  { selector: 'old-theme-dark', file: 'src/styles/themes.css', line: 210 }
];

// Mock dead code info
const mockDeadCode: DeadCodeInfo[] = [
  { file: 'src/utils/deprecated.ts', line: 25, path: 'src/utils/deprecated.ts', description: 'Function never called: formatLegacyData()' },
  { file: 'src/components/OldButton.tsx', line: 1, path: 'src/components/OldButton.tsx', description: 'Component replaced by Button from UI library', type: 'component' },
  { file: 'src/hooks/useOldAuth.ts', line: 1, path: 'src/hooks/useOldAuth.ts', description: 'Hook replaced by AuthProvider', type: 'hook' },
  { file: 'src/pages/LegacyProfile.tsx', line: 1, path: 'src/pages/LegacyProfile.tsx', description: 'Page no longer in routing', type: 'page' },
  { file: 'src/utils/helpers.ts', line: 67, path: 'src/utils/helpers.ts', description: 'Dead code branch in renderConditional()', type: 'function' }
];

// Mock duplicate code info
const mockDuplicateCode: DuplicateCodeInfo[] = [
  {
    id: 1,
    similarity: 0.95,
    files: [{ path: 'src/components/LeaderboardItem.tsx' }, { path: 'src/components/RankItem.tsx' }],
    lines: 32,
    codeSnippet: 'const formatRank = (rank) => {\n  if (rank === 1) return "🥇";\n  if (rank === 2) return "🥈";\n  if (rank === 3) return "🥉";\n  return `#${rank}`;\n};',
    recommendation: 'Move to shared utility function'
  },
  {
    id: 2,
    similarity: 0.88,
    files: [{ path: 'src/utils/formatters.ts' }, { path: 'src/utils/stringHelpers.ts' }],
    lines: 18,
    codeSnippet: 'export const truncateString = (str, maxLength = 20) => {\n  if (str.length <= maxLength) return str;\n  return `${str.substring(0, maxLength)}...`;\n};',
    recommendation: 'Consolidate string utilities into a single file'
  },
  {
    id: 3,
    similarity: 0.92,
    files: [{ path: 'src/components/profile/ProfileCard.tsx' }, { path: 'src/components/user/UserCard.tsx' }],
    lines: 45,
    codeSnippet: 'const renderUserInfo = () => {\n  return (\n    <div className="user-info">\n      <Avatar src={user.profileImage} />\n      <h3 className="user-name">{user.displayName}</h3>\n      <p className="user-rank">Rank: {user.rank}</p>\n    </div>\n  );\n};',
    recommendation: 'Create a shared UserInfoCard component'
  }
];

// Mock complex code issues
const mockComplexCode: ComplexityItem[] = [
  { 
    id: 'complex-1',
    name: 'handleUserInteraction',
    file: 'src/components/Dashboard.tsx',
    complexity: 15,
    line: 87,
    explanation: 'Function has too many conditionals and nested logic. Break into smaller, focused functions.',
    issues: ['High cyclomatic complexity', 'Multiple responsibilities', 'Hard to test']
  },
  { 
    id: 'complex-2',
    name: 'calculateLeaderboardPositions',
    file: 'src/utils/leaderboardUtils.ts',
    complexity: 18,
    line: 42,
    explanation: 'Complex algorithm with nested loops. Consider refactoring to use more declarative approaches.',
    issues: ['O(n²) time complexity', 'Difficult to understand', 'Potential performance bottleneck']
  },
  { 
    id: 'complex-3',
    name: 'RoyalCourtRenderer',
    file: 'src/components/RoyalCourt.tsx',
    complexity: 12,
    line: 128,
    explanation: 'Component has too many responsibilities. Split into smaller, focused components.',
    issues: ['Renders too many different elements', 'Complex state management', 'Excessive prop drilling']
  }
];

// Mock unused files
const mockUnusedFiles = [
  'src/components/unused/OldNavigation.tsx',
  'src/utils/deprecated/formatters.ts',
  'src/hooks/unused/useOldAuth.ts',
  'src/pages/Legacy/LegacyProfile.tsx',
  'src/styles/unused/old-theme.css'
];

// Mock unused dependencies
const mockUnusedDependencies = [
  'moment',
  'lodash-es',
  'react-table',
  'react-spring',
  'uuid'
];

// Complete mock analysis result
export const mockedAnalysisResults: AnalysisResult = {
  unusedImports: mockUnusedImports,
  unusedVariables: mockUnusedVariables,
  unusedSelectors: mockUnusedSelectors,
  deadCode: mockDeadCode,
  deadCodePaths: mockDeadCode,
  duplicateCode: mockDuplicateCode,
  complexCode: mockComplexCode,
  unusedFiles: mockUnusedFiles,
  unusedDependencies: mockUnusedDependencies,
  performanceIssues: mockPerformanceIssues,
  metrics: {
    projectSize: 8560,
    fileCount: 342,
    dependencyCount: 45,
    averageFileSize: 25.03,
    largestFiles: [
      { filePath: 'src/assets/images/background.jpg', size: 1240 },
      { filePath: 'src/components/DataGrid.tsx', size: 256 },
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
  }
};

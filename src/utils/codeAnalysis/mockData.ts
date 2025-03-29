
export const mockedAnalysisResults = {
  projectSize: 12500000, // 12.5 MB
  fileCount: 432,
  duplicateCodeCount: 58,
  unusedImports: 143,
  unusedVariables: 78,
  unusedComponents: 24,
  unusedFunctions: 35,
  unusedCssSelectors: 92,
  deadCodePaths: 27,
  complexFunctions: 41,
  performanceIssues: 33,
  accessibility: {
    errors: 18,
    warnings: 47
  },
  bestPracticesViolations: 72,
  securityIssues: 12
};

export const duplicateCodeMock = [
  {
    id: 1,
    similarity: 95,
    files: ['src/components/UserProfile.tsx', 'src/components/UserCard.tsx'],
    linesCount: 28,
    snippet: `
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};
    `,
    recommendation: 'Extract to a shared utility function in src/utils/formatters.ts'
  },
  {
    id: 2,
    similarity: 89,
    files: ['src/components/Leaderboard.tsx', 'src/components/Stats.tsx', 'src/pages/Dashboard.tsx'],
    linesCount: 42,
    snippet: `
const fetchUserData = async (userId: string) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch user data');
    }
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};
    `,
    recommendation: 'Move to a shared API service in src/services/userService.ts'
  }
];

export const complexityReportMock = [
  {
    id: 1,
    filePath: 'src/components/RankingSystem.tsx',
    functionName: 'calculateUserRank',
    complexity: 24,
    linesOfCode: 78,
    nestingLevel: 5,
    recommendation: 'Break down into smaller functions focused on specific calculations'
  },
  {
    id: 2,
    filePath: 'src/utils/paymentHelpers.ts',
    functionName: 'processTransaction',
    complexity: 18,
    linesOfCode: 65,
    nestingLevel: 4,
    recommendation: 'Extract conditional logic into separate validator functions'
  },
  {
    id: 3,
    filePath: 'src/contexts/AuthContext.tsx',
    functionName: 'handleAuthentication',
    complexity: 16,
    linesOfCode: 52,
    nestingLevel: 4,
    recommendation: 'Split into authentication step functions with clear responsibilities'
  }
];

export const mockPerformanceIssues = [
  {
    id: 1,
    filePath: 'src/components/Leaderboard.tsx',
    issue: 'Expensive calculation in render method',
    impact: 'High',
    lineNumber: 142,
    recommendation: 'Move expensive sorting operation to useMemo hook or computed property'
  },
  {
    id: 2,
    filePath: 'src/pages/UserProfile.tsx',
    issue: 'Excessive re-renders due to object literal in props',
    impact: 'Medium',
    lineNumber: 87,
    recommendation: 'Move object creation outside render or use useMemo to memoize the object'
  },
  {
    id: 3,
    filePath: 'src/components/RankingTable.tsx',
    issue: 'Large unoptimized image loading',
    impact: 'High',
    lineNumber: 56,
    recommendation: 'Use proper image optimization, lazy loading, and consider using next/image'
  }
];

export const unusedImportsMock = [
  {
    id: 1,
    file: 'src/components/Dashboard.tsx',
    import: '{ Button } from "@/components/ui/button"',
    line: 5
  },
  {
    id: 2,
    file: 'src/pages/Profile.tsx',
    import: 'useState from "react"',
    line: 2
  },
  {
    id: 3,
    file: 'src/contexts/ThemeContext.tsx',
    import: '{ createContext, useEffect } from "react"',
    line: 1,
    note: 'useEffect is imported but not used'
  }
];

export const unusedVariablesMock = [
  {
    id: 1,
    file: 'src/components/UserSettings.tsx',
    variable: 'isLoading',
    line: 12
  },
  {
    id: 2,
    file: 'src/utils/formatters.ts',
    variable: 'DEFAULT_LOCALE',
    line: 5
  },
  {
    id: 3,
    file: 'src/hooks/useAuth.tsx',
    variable: 'error',
    line: 15,
    note: 'Destructured but never used'
  }
];

export const unusedFunctionsMock = [
  {
    id: 1,
    file: 'src/utils/helpers.ts',
    function: 'formatTimestamp',
    line: 45
  },
  {
    id: 2,
    file: 'src/services/userService.ts',
    function: 'validateUsername',
    line: 78
  },
  {
    id: 3,
    file: 'src/components/common/Modal.tsx',
    function: 'handleEscape',
    line: 62,
    note: 'Defined but not used in component'
  }
];

export const unusedComponentsMock = [
  {
    id: 1,
    file: 'src/components/ui/Tooltip.tsx',
    component: 'Tooltip',
    line: 5
  },
  {
    id: 2,
    file: 'src/components/profile/ProfileBadge.tsx',
    component: 'ProfileBadge',
    line: 8
  },
  {
    id: 3,
    file: 'src/components/common/ErrorBoundary.tsx',
    component: 'ErrorFallback',
    line: 32,
    note: 'Defined in file but not exported or used internally'
  }
];

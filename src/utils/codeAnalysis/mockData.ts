
// Mock data for code analysis

export const complexityReportMock = [
  {
    path: "src/components/ComplexComponent.tsx",
    complexity: 25,
    status: "critical",
    functions: [
      { name: "renderComplexUI", complexity: 12, status: "warning" },
      { name: "processData", complexity: 9, status: "warning" },
      { name: "calculateValues", complexity: 4, status: "normal" }
    ]
  },
  {
    path: "src/utils/dataProcessing.ts",
    complexity: 18,
    status: "warning",
    functions: [
      { name: "transformData", complexity: 10, status: "warning" },
      { name: "filterResults", complexity: 8, status: "normal" }
    ]
  },
  {
    path: "src/hooks/useDataFetching.ts",
    complexity: 8,
    status: "normal",
    functions: [
      { name: "fetchWithCache", complexity: 5, status: "normal" },
      { name: "parseResponse", complexity: 3, status: "normal" }
    ]
  }
];

export const duplicateCodeMock = [
  {
    id: 1,
    similarity: 95,
    files: [
      { path: "src/components/Header.tsx", lines: "45-67" },
      { path: "src/components/UserPanel.tsx", lines: "23-44" }
    ],
    snippet: `const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};

const handleProfileClick = () => {
  navigate(\`/profile/\${user.username}\`);
  handleMenuClose();
};`
  },
  {
    id: 2,
    similarity: 85,
    files: [
      { path: "src/utils/formatting.ts", lines: "12-28" },
      { path: "src/utils/display.ts", lines: "45-60" }
    ],
    snippet: `export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};`
  }
];

export const unusedImportsMock = [
  { file: "src/components/Dashboard.tsx", imports: ["useState", "useEffect", "useMemo"], line: 1, name: "useState" },
  { file: "src/utils/helpers.ts", imports: ["formatDate", "calculateTotal"], line: 5, name: "formatDate" },
  { file: "src/hooks/useAuth.ts", imports: ["AuthContext"], line: 3, name: "AuthContext" }
];

export const unusedVariablesMock = [
  { file: "src/components/UserProfile.tsx", variables: ["isAdmin", "userSettings"], line: 15, name: "isAdmin" },
  { file: "src/utils/calculations.ts", variables: ["taxRate", "discountFactor"], line: 8, name: "taxRate" },
  { file: "src/contexts/ThemeContext.tsx", variables: ["defaultTheme"], line: 12, name: "defaultTheme" }
];

export const unusedFunctionsMock = [
  { file: "src/utils/helpers.ts", functions: ["validateEmail", "formatPhoneNumber"], line: 23, name: "validateEmail" },
  { file: "src/hooks/useData.ts", functions: ["fetchUserData"], line: 45, name: "fetchUserData" },
  { file: "src/components/Forms.tsx", functions: ["resetForm"], line: 67, name: "resetForm" }
];

export const unusedComponentsMock = [
  { component: "DebugPanel", file: "src/components/debug/DebugPanel.tsx", line: 5 },
  { component: "BetaFeatures", file: "src/components/beta/BetaFeatures.tsx", line: 8 },
  { component: "DeveloperTools", file: "src/components/dev/DeveloperTools.tsx", line: 12 }
];

export const performanceIssuesMock = [
  {
    id: "perf-1",
    description: "Excessive re-renders in component",
    file: "src/components/Dashboard.tsx",
    lineNumber: 42,
    severity: "high",
    recommendation: "Use React.memo or useMemo to memoize expensive calculations or component rendering."
  },
  {
    id: "perf-2", 
    description: "Large bundle size due to unoptimized imports",
    file: "src/pages/Profile.tsx",
    lineNumber: 12,
    severity: "medium",
    recommendation: "Use dynamic imports or code-splitting to reduce initial bundle size."
  }
];

export const mockedAnalysisResults = {
  complexity: complexityReportMock,
  duplicates: duplicateCodeMock,
  unused: {
    imports: unusedImportsMock,
    variables: unusedVariablesMock,
    functions: unusedFunctionsMock,
    components: unusedComponentsMock
  },
  summary: {
    totalFiles: 85,
    totalComponents: 42,
    totalHooks: 12,
    totalUtilities: 18,
    complexityScore: 68,
    duplicateScore: 15,
    unusedCode: 24,
    overallHealth: 75
  },
  unusedFiles: [],
  unusedImports: unusedImportsMock,
  unusedVariables: unusedVariablesMock,
  unusedCssSelectors: [],
  performanceIssues: performanceIssuesMock,
  accessibilityIssues: [],
  securityIssues: [],
  bestPracticeViolations: [],
  codeSmells: []
};

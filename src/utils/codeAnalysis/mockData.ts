
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
  { file: "src/components/Dashboard.tsx", imports: ["useState", "useEffect", "useMemo"] },
  { file: "src/utils/helpers.ts", imports: ["formatDate", "calculateTotal"] },
  { file: "src/hooks/useAuth.ts", imports: ["AuthContext"] }
];

export const unusedVariablesMock = [
  { file: "src/components/UserProfile.tsx", variables: ["isAdmin", "userSettings"] },
  { file: "src/utils/calculations.ts", variables: ["taxRate", "discountFactor"] },
  { file: "src/contexts/ThemeContext.tsx", variables: ["defaultTheme"] }
];

export const unusedFunctionsMock = [
  { file: "src/utils/helpers.ts", functions: ["validateEmail", "formatPhoneNumber"] },
  { file: "src/hooks/useData.ts", functions: ["fetchUserData"] },
  { file: "src/components/Forms.tsx", functions: ["resetForm"] }
];

export const unusedComponentsMock = [
  { component: "DebugPanel", file: "src/components/debug/DebugPanel.tsx" },
  { component: "BetaFeatures", file: "src/components/beta/BetaFeatures.tsx" },
  { component: "DeveloperTools", file: "src/components/dev/DeveloperTools.tsx" }
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
  }
};

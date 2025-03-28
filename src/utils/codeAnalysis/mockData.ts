
// Mock data for code analysis reports

// Performance issues mock data
export const performanceIssuesMock = [
  {
    id: "perf-1",
    description: "Inefficient DOM manipulation",
    file: "src/components/HeavyComponent.tsx",
    lineNumber: 42,
    severity: "high",
    recommendation: "Use React.memo or useMemo to prevent unnecessary re-renders",
    issue: "Multiple DOM updates in quick succession"
  },
  {
    id: "perf-2",
    description: "Large component with multiple responsibilities",
    file: "src/pages/Dashboard.tsx",
    lineNumber: 102,
    severity: "medium",
    recommendation: "Split into smaller, focused components",
    issue: "Component has too many responsibilities"
  },
  {
    id: "perf-3",
    description: "Unoptimized image loading",
    file: "src/components/Gallery.tsx",
    lineNumber: 28,
    severity: "medium",
    recommendation: "Implement lazy loading for images",
    issue: "Images load simultaneously, causing performance issues"
  }
];

// Complexity report mock data
export const complexityReportMock = [
  {
    id: "complex-1",
    name: "processUserData",
    functionName: "processUserData",
    file: "src/utils/userDataProcessor.ts",
    complexity: 18,
    linesOfCode: 78,
    parameters: 5,
    nestedLevel: 4,
    issues: [
      "Function has too many responsibilities",
      "Deeply nested conditionals",
      "Multiple return points"
    ],
    line: 120,
    explanation: "Consider breaking this function into smaller, more focused functions that each handle one aspect of user data processing."
  },
  {
    id: "complex-2",
    name: "renderDashboard",
    functionName: "renderDashboard",
    file: "src/components/Dashboard.tsx",
    complexity: 14,
    linesOfCode: 92,
    parameters: 3,
    nestedLevel: 3,
    issues: [
      "Too many rendering conditions",
      "Complex state management"
    ],
    line: 45,
    explanation: "Extract rendering logic into smaller components and use custom hooks for state management."
  },
  {
    id: "complex-3",
    name: "calculateUserRanking",
    functionName: "calculateUserRanking",
    file: "src/utils/rankingAlgorithm.ts",
    complexity: 12,
    linesOfCode: 64,
    parameters: 4,
    nestedLevel: 3,
    issues: [
      "Multiple calculation paths",
      "Confusing algorithm logic"
    ],
    line: 32,
    explanation: "Refactor to use a more declarative approach and split calculations into named helper functions."
  }
];

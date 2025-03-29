
import { EslintIssue } from './types';

// Mock function to analyze ESLint issues
export const analyzeEslintIssues = (): EslintIssue[] => {
  const issues: EslintIssue[] = [
    {
      id: "eslint-1",
      rule: "no-unused-vars",
      file: "src/components/Button.tsx",
      line: 5,
      column: 10,
      message: "Variable 'props' is defined but never used",
      severity: "warning"
    },
    {
      id: "eslint-2",
      rule: "react-hooks/exhaustive-deps",
      file: "src/hooks/useCounter.ts",
      line: 12,
      column: 8,
      message: "React Hook useEffect has a missing dependency: 'count'",
      severity: "warning"
    }
  ];
  
  return issues;
};

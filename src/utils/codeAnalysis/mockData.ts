
import { AnalysisResult } from "./types";

// Mock analysis results for development and testing
export const mockedAnalysisResults: AnalysisResult = {
  complexity: [
    {
      id: "1",
      name: "handleSubmit",
      file: "src/components/ContactForm.tsx",
      complexity: 12,
      linesOfCode: 45,
      parameters: 3,
      nestedLevel: 3,
      issues: ["Too many nested conditions", "Complex logic"]
    }
  ],
  duplicates: [],
  unused: {
    imports: [],
    variables: [],
    functions: [],
    components: []
  },
  summary: {
    totalFiles: 45,
    totalComponents: 23,
    totalHooks: 8,
    totalUtilities: 12,
    complexityScore: 42,
    duplicateScore: 18,
    unusedCode: 6,
    overallHealth: 78
  },
  unusedFiles: [],
  unusedImports: [],
  unusedVariables: [],
  unusedCssSelectors: [],
  performanceIssues: [],
  accessibilityIssues: [],
  securityIssues: [],
  bestPracticeViolations: [],
  codeSmells: [],
  deadCodePaths: [], // Added missing properties
  duplicateCode: [], // Added missing properties
  complexCode: [{ // Added missing properties with proper structure
    id: "1",
    name: "handleSubmit",
    file: "src/components/ContactForm.tsx",
    complexity: 12,
    linesOfCode: 45,
    parameters: 3,
    nestedLevel: 3,
    issues: ["Too many nested conditions", "Complex logic"],
    function: "handleSubmit"
  }],
  unusedDependencies: [], // Added missing properties
  unusedFunctions: [], // Added missing properties
  metrics: {
    beforeCleanup: {
      projectSize: 12500,
      fileCount: 45,
      dependencyCount: 22
    },
    afterCleanup: {
      projectSize: 12000,
      fileCount: 43,
      dependencyCount: 20
    }
  }
};

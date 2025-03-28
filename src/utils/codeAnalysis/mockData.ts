
import { AnalysisResult, ComplexityItem } from "./types";

// Create ComplexityItem for mocked data
const mockComplexityItem: ComplexityItem = {
  id: "1",
  name: "handleSubmit",
  file: "src/components/ContactForm.tsx",
  complexity: 12,
  linesOfCode: 45,
  parameters: 3,
  nestedLevel: 3,
  issues: ["Too many nested conditions", "Complex logic"],
  function: "handleSubmit"
};

// Mock analysis results for development and testing
export const mockedAnalysisResults: AnalysisResult = {
  complexity: [mockComplexityItem],
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
  deadCodePaths: [],
  duplicateCode: [],
  complexCode: [mockComplexityItem],
  unusedDependencies: [],
  unusedFunctions: [],
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

// Export additional mock data for report components
export const complexityReportMock = mockedAnalysisResults.complexity;
export const duplicateCodeMock = mockedAnalysisResults.duplicateCode;
export const performanceIssuesMock = mockedAnalysisResults.performanceIssues;
export const unusedImportsMock = mockedAnalysisResults.unusedImports;
export const unusedVariablesMock = mockedAnalysisResults.unusedVariables;
export const unusedFunctionsMock = mockedAnalysisResults.unusedFunctions;
export const unusedComponentsMock = mockedAnalysisResults.unused.components;

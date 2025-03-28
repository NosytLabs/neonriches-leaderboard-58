
export interface ComplexityItem {
  id: string;
  name: string;
  file: string;
  complexity: number;
  linesOfCode: number;
  parameters: number;
  nestedLevel: number;
  issues: string[];
  functionName?: string;
  line?: number;
  explanation?: string;
  status?: string;
  path?: string;
  functions?: { name: string; complexity: number; status: string; }[];
}

export interface DuplicateCode {
  id: string | number;
  similarity: number;
  files: { path: string; lines: string; }[];
  snippet: string;
  codeSnippet?: string;
  lines?: number;
}

// Add definition for ComplexCode
export interface ComplexCode {
  id: string;
  name: string;
  file: string;
  complexity: number;
  linesOfCode: number;
  parameters: number;
  nestedLevel: number;
  issues: string[];
  function: string; // This is the missing property
  path?: string;
}

export interface AnalysisResult {
  complexity: ComplexityItem[];
  duplicates: any[];
  unused: {
    imports: any[];
    variables: any[];
    functions: any[];
    components: any[];
  };
  summary: {
    totalFiles: number;
    totalComponents: number;
    totalHooks: number;
    totalUtilities: number;
    complexityScore: number;
    duplicateScore: number;
    unusedCode: number;
    overallHealth: number;
  };
  unusedFiles: any[];
  unusedImports: any[];
  unusedVariables: any[];
  unusedCssSelectors: any[];
  performanceIssues: any[];
  accessibilityIssues: any[];
  securityIssues: any[];
  bestPracticeViolations: any[];
  codeSmells: any[];
  // Add missing properties for CodeAnalysis pages
  deadCodePaths: any[];
  duplicateCode: DuplicateCode[];
  complexCode: ComplexityItem[];
  unusedDependencies: any[];
  unusedFunctions: any[];
  metrics: {
    beforeCleanup: {
      projectSize: number;
      fileCount: number;
      dependencyCount: number;
    };
    afterCleanup: {
      projectSize: number;
      fileCount: number;
      dependencyCount: number;
    };
  };
}

export interface MockESLint {
  lintFiles: (patterns: string[]) => Promise<any[]>;
}

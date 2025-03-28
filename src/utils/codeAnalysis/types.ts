
// Analysis Types

// Type for a code location
export interface CodeLocation {
  file: string;
  line: number;
}

// Type for an unused import
export interface UnusedImport extends CodeLocation {
  name: string;
}

// Type for an unused variable
export interface UnusedVariable extends CodeLocation {
  name: string;
}

// Type for an unused CSS selector
export interface UnusedCssSelector extends CodeLocation {
  selector: string;
}

// Type for a dead code path
export interface DeadCodePath extends CodeLocation {
  description: string;
}

// Type for duplicate code
export interface DuplicateCode {
  id?: number;
  files: string[];
  similarity: number;
  lines: number;
  impact?: string;
  risk?: string;
  codeSnippet?: string;
}

// Type for complex code
export interface ComplexCode extends CodeLocation {
  id?: number;
  function: string;
  complexity: number;
  impact?: string;
  suggestion?: string;
  explanation?: string;
}

// Type for an unused function
export interface UnusedFunction extends CodeLocation {
  name: string;
}

// Mock ESLint type for analysis
export class MockESLint {
  async lintFiles(files: string[]) {
    // Simple mock implementation
    return [];
  }
}

// Project metrics
export interface ProjectMetrics {
  projectSize: number; // in KB
  fileCount: number;
  dependencyCount: number;
}

// Type for the complete analysis result
export interface AnalysisResult {
  unusedFiles: string[];
  unusedImports: UnusedImport[];
  unusedVariables: UnusedVariable[];
  unusedCssSelectors: UnusedCssSelector[];
  deadCodePaths: DeadCodePath[];
  duplicateCode: DuplicateCode[];
  complexCode: ComplexCode[];
  unusedFunctions: UnusedFunction[];
  unusedDependencies: string[];
  metrics: {
    beforeCleanup: ProjectMetrics;
    afterCleanup: ProjectMetrics;
  };
}

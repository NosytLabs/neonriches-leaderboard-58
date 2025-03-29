
// Types for the code analysis module

// Base information types
export interface FileInfo {
  path: string;
  size: number;
}

export interface ImportInfo {
  file: string;
  name: string;
  from: string;
}

export interface VariableInfo {
  file: string;
  name: string;
  line: number;
}

export interface CssSelectorInfo {
  file: string;
  selector: string;
  line: number;
}

export interface DependencyInfo {
  name: string;
  version: string;
  alternatives: string[];
}

export interface DeadCodeInfo {
  file: string;
  function: string;
  line: number;
}

export interface CodeOccurrence {
  file: string;
  lines: string;
}

export interface DuplicateCodeInfo {
  pattern: string;
  occurrences: CodeOccurrence[];
  similarity: number;
  impact?: 'low' | 'medium' | 'high';
  refactoringDifficulty?: 'easy' | 'medium' | 'hard';
  recommendation?: string;
}

export interface ComplexityItem {
  file: string;
  function: string;
  cyclomaticComplexity: number;
  lines: string;
  impact?: 'low' | 'medium' | 'high';
  refactoringDifficulty?: 'easy' | 'medium' | 'hard';
  recommendation?: string;
}

export interface PerformanceIssue {
  file: string;
  issue: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  recommendation: string;
}

export interface LargeFile {
  filePath: string;
  size: number;
}

export interface ProjectMetrics {
  projectSize: number; // in KB
  fileCount: number;
  dependencyCount: number;
  averageFileSize: number; // in KB
  largestFiles: LargeFile[];
}

// Main analysis result type
export interface AnalysisResult {
  unusedFiles: FileInfo[];
  unusedImports: ImportInfo[];
  unusedVariables: VariableInfo[];
  unusedCssSelectors: CssSelectorInfo[];
  unusedDependencies: DependencyInfo[];
  deadCode: DeadCodeInfo[];
  duplicateCode: DuplicateCodeInfo[];
  complexCode: ComplexityItem[];
  recommendations: string[];
  metrics: ProjectMetrics;
  bestPracticeViolations?: any[];
}

// Types for the UI components
export interface UnusedImport {
  file: string;
  name: string;
  from: string;
}

export interface UnusedVariable {
  file: string;
  name: string;
  line: number;
}

export interface UnusedFunction {
  file: string;
  name: string;
  line: number;
}

export interface UnusedComponent {
  file: string;
  name: string;
  size: number;
}

export interface UnusedCssSelector {
  file: string;
  selector: string;
  line: number;
}

export interface DeadCodePath {
  file: string;
  function: string;
  description: string;
  line: number;
}

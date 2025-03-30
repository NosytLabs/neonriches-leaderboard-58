
export interface ImportIssue {
  name: string;
  path: string;
  file: string;
  line: number;
  impact?: string;
}

export interface VariableIssue {
  name: string;
  type: string;
  file: string;
  line: number;
  impact?: string;
}

export interface FileIssue {
  path: string;
  size: number;
  impact?: string;
}

export interface SelectorIssue {
  name: string;
  file: string;
  line: number;
  selector?: string;
}

export interface DeadCodeIssue {
  description: string;
  file: string;
  line: number;
}

export interface DuplicateCodeFile {
  path: string;
  lineStart?: number;
  lineEnd?: number;
}

export interface DuplicateCodeIssue {
  id: string;
  files: DuplicateCodeFile[];
  similarity: number;
  lines: number;
  linesCount?: number;
  recommendation?: string;
}

export interface ComplexCodeIssue {
  id: string;
  name: string;
  file: string;
  complexity: number;
  cyclomaticComplexity?: number;
  line: number;
  explanation?: string;
  function?: string;
}

export interface PerformanceIssue {
  id: string;
  description: string;
  file: string;
  lineNumber: number;
  severity: string;
  recommendation: string;
}

export interface ProjectMetrics {
  projectSize?: number;
  fileCount?: number;
  dependencyCount?: number;
  beforeCleanup?: {
    projectSize: number;
    fileCount: number;
    dependencyCount: number;
  };
  afterCleanup?: {
    projectSize: number;
    fileCount: number;
    dependencyCount: number;
  };
  sizeSavings?: number;
  fileSavings?: number;
  dependencySavings?: number;
  sizePercentage?: number;
  filePercentage?: number;
  dependencyPercentage?: number;
}

// Alias types to match what's being used elsewhere
export type ImportInfo = ImportIssue;
export type VariableInfo = VariableIssue;
export type FileInfo = FileIssue;
export type CodeIssueInfo = DeadCodeIssue;
export type ComplexityItem = ComplexCodeIssue;
export type DuplicateCodeInfo = DuplicateCodeIssue;

export interface AnalysisResult {
  unusedImports: ImportIssue[];
  unusedVariables: VariableIssue[];
  unusedFiles?: FileIssue[];
  unusedSelectors?: SelectorIssue[];
  deadCode?: DeadCodeIssue[];
  deadCodePaths?: DeadCodeIssue[];
  duplicateCode: DuplicateCodeIssue[];
  complexCode: ComplexCodeIssue[];
  unusedDependencies?: string[];
  performanceIssues?: PerformanceIssue[];
  metrics?: ProjectMetrics;
}

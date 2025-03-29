
export interface FileInfo {
  path: string;
  filePath?: string;
  size: number;
  lines: number;
  impact?: string;
}

export interface ImportInfo {
  name: string;
  source: string;
  line?: number;
  used: boolean;
  file?: string;
  filePath?: string;
  import?: string;
  impact?: string;
}

export interface VariableInfo {
  name: string;
  type: string;
  line?: number;
  used: boolean;
  file?: string;
  filePath?: string;
  variable?: string;
  impact?: string;
}

export interface CssSelectorInfo {
  selector: string;
  line?: number;
  used: boolean;
  file?: string;
  filePath?: string;
  impact?: string;
}

export interface DependencyInfo {
  name: string;
  version: string;
  used: boolean;
  alternatives?: string[];
  recommendation?: string;
  impact?: string;
  size?: number;
}

export interface DeadCodeInfo {
  type: string;
  name: string;
  location: string;
  line?: number;
  file?: string;
  path?: string;
  function?: string;
  description?: string;
}

export interface ComplexityItem {
  id?: string;
  name: string;
  function?: string;
  file?: string;
  filePath?: string;
  path?: string;
  cyclomaticComplexity?: number;
  complexity?: number;
  lines?: number;
  linesOfCode?: number;
  parameters?: number;
  nestedLevel?: number;
  issues?: any[];
  status?: string;
  line?: number;
  explanation?: string;
  functionName?: string;
}

export interface PerformanceIssue {
  id: string;
  description: string;
  file: string;
  line: number;
  recommendation: string;
  severity: string;
  lineNumber: number;
  type?: string;
  impact: string;
}

export interface DuplicateCodeInfo {
  id: string;
  pattern: string;
  similarity: number;
  files: { path: string }[];
  codeSnippet?: string;
  snippet?: string;
  occurrences?: number | any[];
  instances?: any[];
  code?: string;
  lines?: number;
}

// Type aliases for backwards compatibility
export type DuplicateCode = DuplicateCodeInfo;
export type UnusedImport = ImportInfo;
export type UnusedVariable = VariableInfo;
export type UnusedCssSelector = CssSelectorInfo;
export type UnusedComponent = {
  name: string;
  file: string;
  line?: number;
  used: boolean;
};
export type DeadCodePath = DeadCodeInfo;
export type EslintIssue = {
  id: string;
  rule: string;
  file: string;
  line: number;
  column: number;
  message: string;
  severity: "error" | "warning" | "info";
};

export interface ProjectMetrics {
  totalFiles?: number;
  totalLines?: number;
  totalComponents?: number;
  averageComplexity?: number;
  duplicateCode?: number;
  unusedCode?: number;
  projectSize?: number;
  fileCount?: number;
  dependencyCount?: number;
  averageFileSize?: number;
  largestFiles?: {filePath: string, size: number}[];
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

export interface AnalysisResult {
  files?: FileInfo[];
  unusedFiles?: FileInfo[];
  unusedImports: ImportInfo[];
  unusedVariables: VariableInfo[];
  unusedSelectors: CssSelectorInfo[];
  unusedCssSelectors?: CssSelectorInfo[];
  unusedDependencies: DependencyInfo[];
  deadCode: DeadCodeInfo[];
  deadCodePaths?: DeadCodeInfo[];
  duplicateCode: DuplicateCodeInfo[];
  performanceIssues: PerformanceIssue[];
  complexCode: ComplexityItem[];
  eslintIssues?: EslintIssue[];
  metrics?: ProjectMetrics;
  recommendations?: string[];
  unusedFunctions?: UnusedComponent[];
  timestamp?: string;
}

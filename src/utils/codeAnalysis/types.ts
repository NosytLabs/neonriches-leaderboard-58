
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

export interface UnusedImport {
  name: string;
  source: string;
  line: number;
  file: string;
}

export interface UnusedVariable {
  name: string;
  type: string;
  line: number;
  file: string;
}

export interface UnusedComponent {
  name: string;
  file: string;
  line?: number;
  used: boolean;
}

export interface UnusedCssSelector {
  selector: string;
  line: number;
  file: string;
}

export interface DeadCodePath {
  type: string;
  name: string;
  location: string;
  line: number;
  file: string;
  description: string;
}

export interface EslintIssue {
  id: string;
  rule: string;
  file: string;
  line: number;
  column: number;
  message: string;
  severity: "error" | "warning" | "info";
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

export interface ComplexityItem {
  id: string;
  name: string;
  function: string;
  file: string;
  cyclomaticComplexity: number;
  complexity?: number;
  lines: number;
  linesOfCode?: number;
  parameters?: number;
  nestedLevel?: number;
  issues?: any[];
  path?: string;
  functions?: any[];
  status?: string;
  line?: number;
  explanation?: string;
  functionName?: string;
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

// Adding DuplicateCode as an alias for backward compatibility
export type DuplicateCode = DuplicateCodeInfo;

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

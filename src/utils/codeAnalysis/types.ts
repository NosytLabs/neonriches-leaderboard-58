
export interface FileInfo {
  path: string;
  size: number;
  lines: number;
  filePath?: string;
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
}

export interface DeadCodeInfo {
  type: string;
  name: string;
  location: string;
  line?: number;
  file?: string;
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
  type: string;
  impact: string;
}

export interface ComplexityItem {
  id: string;
  name: string;
  function: string;
  file: string;
  cyclomaticComplexity: number;
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
}

export interface DuplicateCodeInfo {
  id: string;
  pattern: string;
  similarity: number;
  files: { path: string }[];
  codeSnippet?: string;
  snippet?: string;
  occurrences: number | any[];
  code?: string;
  instances?: any[];
}

export interface ProjectMetrics {
  totalFiles?: number;
  totalLines?: number;
  totalComponents?: number;
  averageComplexity?: number;
  duplicateCode?: number;
  unusedCode?: number;
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
  files: FileInfo[];
  unusedImports: ImportInfo[];
  unusedVariables: VariableInfo[];
  unusedSelectors: CssSelectorInfo[];
  unusedDependencies: DependencyInfo[];
  deadCode: DeadCodeInfo[];
  duplicateCode: DuplicateCodeInfo[];
  performanceIssues: PerformanceIssue[];
  complexCode: ComplexityItem[];
  eslintIssues: EslintIssue[];
  metrics?: ProjectMetrics;
  recommendations?: string[];
  unusedFunctions?: UnusedComponent[];
}

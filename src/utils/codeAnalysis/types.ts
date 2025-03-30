
export interface FileInfo {
  path: string;
  size?: number;
  type?: string;
}

export interface ImportInfo {
  name: string;
  path?: string;
  file: string;
  line: number;
  impact?: string;
}

export interface VariableIssue {
  name: string;
  type?: string;
  file: string;
  line: number;
  impact?: string;
}

export interface SelectorIssue {
  name: string;
  selector?: string;
  file: string;
  line: number;
}

export interface DuplicateCodeIssue {
  id: string;
  files: Array<{path: string, lineStart?: number, lineEnd?: number}>;
  similarity: number;
  lines?: number;
  linesCount?: number;
  recommendation?: string;
}

export interface ComplexCodeIssue {
  id?: string;
  file: string;
  function?: string;
  name?: string;
  line: number;
  cyclomaticComplexity?: number;
  complexity?: number;
  explanation?: string;
}

export interface DeadCodeIssue {
  description: string;
  file: string;
  line: number;
}

export interface CodeIssueInfo {
  description: string;
  file: string;
  line: number;
}

export interface PerformanceIssue {
  description: string;
  file: string;
  lineNumber: number;
  recommendation: string;
  severity: 'low' | 'medium' | 'high';
}

export interface MetricsData {
  projectSize: number; // in KB
  fileCount: number;
  dependencyCount: number;
}

export interface ProjectMetrics {
  beforeCleanup?: MetricsData;
  afterCleanup?: MetricsData;
  sizeSavings?: number;
  fileSavings?: number;
  dependencySavings?: number;
  sizePercentage?: number;
  filePercentage?: number;
  dependencyPercentage?: number;
}

export interface AnalysisResult {
  unusedImports?: ImportInfo[];
  unusedVariables?: VariableIssue[];
  unusedFiles?: FileInfo[];
  unusedSelectors?: SelectorIssue[];
  deadCode?: DeadCodeIssue[];
  deadCodePaths?: DeadCodeIssue[];
  duplicateCode?: DuplicateCodeIssue[];
  complexCode?: ComplexCodeIssue[];
  unusedDependencies?: string[];
  performanceIssues?: PerformanceIssue[];
  metrics?: ProjectMetrics;
}

export interface ComplexityItem {
  id: string;
  name: string;
  function?: string; 
  file: string;
  complexity: number;
  cyclomaticComplexity?: number;
  line: number;
  lines?: number;
  linesOfCode?: number;
  parameters?: number;
  nestedLevel?: number;
  issues?: string[];
  explanation?: string;
  path?: string;
  functions?: any[];
  status?: string;
}

export interface DuplicateCodeInfo {
  id: string | number;
  title?: string;
  description?: string;
  severity?: string;
  solution?: string;
  pattern?: string;
  similarity: number;
  files: { path: string, lineStart?: number, lineEnd?: number }[];
  lines?: number;
  linesCount?: number;
  code?: string;
  codeSnippet?: string;
  snippet?: string;
  recommendation?: string;
}

export interface CacheOptions {
  ttl?: number;
  key?: string;
  forceRefresh?: boolean;
}

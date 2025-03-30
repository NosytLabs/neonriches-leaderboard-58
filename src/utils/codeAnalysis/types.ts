
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
}

export interface VariableIssue {
  name: string;
  type?: string;
  file: string;
  line: number;
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

export interface AnalysisResult {
  unusedImports?: ImportInfo[];
  unusedVariables?: VariableIssue[];
  unusedFiles?: FileInfo[];
  unusedSelectors?: SelectorIssue[];
  deadCode?: DeadCodeIssue[];
  duplicateCode?: DuplicateCodeIssue[];
  complexCode?: ComplexCodeIssue[];
  unusedDependencies?: string[];
  performanceIssues?: PerformanceIssue[];
  metrics?: {
    beforeCleanup?: MetricsData;
    afterCleanup?: MetricsData;
  };
}

export interface CacheOptions {
  ttl?: number;
  key?: string;
  forceRefresh?: boolean;
}

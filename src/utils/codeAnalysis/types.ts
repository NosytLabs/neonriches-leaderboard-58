
export interface AnalysisResult {
  unusedImports?: ImportInfo[];
  unusedVariables?: VariableInfo[];
  unusedFiles?: FileInfo[];
  unusedSelectors?: SelectorInfo[];
  deadCode?: CodeIssueInfo[];
  duplicateCode?: DuplicateCodeInfo[];
  complexCode?: ComplexityItem[];
  unusedDependencies?: DependencyInfo[];
  performanceIssues?: PerformanceIssue[];
  metrics?: ProjectMetrics;
}

export interface ImportInfo {
  filePath: string;
  line: number;
  name: string;
  statement: string;
  suggestion: string;
}

export interface VariableInfo {
  filePath: string;
  line: number;
  name: string;
  scope: string;
  type: string;
  suggestion: string;
}

export interface FileInfo {
  path: string;
  reason: string;
  suggestion: string;
}

export interface SelectorInfo {
  filePath: string;
  selector: string;
  line: number;
  suggestion: string;
}

export interface DependencyInfo {
  name: string;
  version: string;
  reason: string;
  suggestion: string;
}

export interface CodeIssueInfo {
  filePath: string;
  line: number;
  description: string;
  suggestion: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface DuplicateCodeInfo {
  files: string[];
  similarity: number;
  lines: number;
  snippet: string;
  suggestion: string;
}

export interface ComplexityItem {
  filePath: string;
  function: string;
  name: string;
  line: number;
  complexity: number;
  cyclomaticComplexity: number;
  explanation: string;
  suggestion: string;
}

export interface PerformanceIssue {
  filePath: string;
  line: number;
  description: string;
  impact: 'low' | 'medium' | 'high';
  suggestion: string;
}

export interface ProjectMetrics {
  totalFiles: number;
  totalLines: number;
  totalComponents: number;
  averageComponentSize: number;
  largestFile: {
    path: string;
    lines: number;
  };
  totalSize: number;
  formattedSize: string;
}

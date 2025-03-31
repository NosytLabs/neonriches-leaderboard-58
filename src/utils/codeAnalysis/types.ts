
// Unified type definitions for code analysis features

export interface ImportInfo {
  name: string;
  path: string;
  file: string;
  used: boolean;
  impact?: number;
  line?: number;
}

export interface VariableInfo {
  name: string;
  file: string;
  scope: string;
  type: string;
  used: boolean;
  impact?: number;
  line?: number;
}

export interface FileInfo {
  path: string;
  size: number;
  used: boolean;
  impact?: number;
}

export interface SelectorInfo {
  name: string;
  file: string;
  used: boolean;
  impact?: number;
  line?: number;
  selector?: string;
}

export interface CodeIssueInfo {
  description: string;
  file: string;
  lineStart: number;
  lineEnd: number;
  severity: 'low' | 'medium' | 'high';
  impact?: number;
  line?: number;
}

export interface DuplicateCodeInfo {
  id: string;
  instances: Array<{ path: string; lineStart: number; lineEnd: number }>;
  linesCount: number;
  code: string;
  recommendation?: string;
  impact?: number;
  similarity?: number;
  lines?: number;
  files?: Array<{ path: string; lineStart?: number; lineEnd?: number }>;
}

export interface ComplexityItem {
  id: string;
  file: string;
  function?: string;
  complexity: number;
  lineCount: number;
  recommendation?: string;
  impact?: number;
  line?: number;
  name?: string;
  explanation?: string;
  cyclomaticComplexity?: number;
}

export interface DependencyInfo {
  name: string;
  version: string;
  used: boolean;
  size: number;
  impact?: number;
}

export interface PerformanceIssue {
  description: string;
  file: string;
  lineNumber: number;
  severity: 'low' | 'medium' | 'high';
  recommendation: string;
  impact?: number;
}

export interface ProjectMetrics {
  totalFiles: number;
  totalLines: number;
  totalComponents: number;
  averageComponentSize: number;
  totalDependencies: number;
  totalSize: number;
  sizeSavings: number;
  fileSavings: number;
  dependencySavings: number;
  sizePercentage: number;
  filePercentage: number;
  dependencyPercentage: number;
  formattedSize: string;
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
}

export interface AnalysisResult {
  unusedImports: ImportInfo[];
  unusedVariables: VariableInfo[];
  unusedFiles?: FileInfo[];
  unusedSelectors?: SelectorInfo[];
  unusedDependencies?: DependencyInfo[];
  deadCode?: CodeIssueInfo[];
  deadCodePaths?: CodeIssueInfo[];
  duplicateCode: DuplicateCodeInfo[];
  complexCode: ComplexityItem[];
  performanceIssues: PerformanceIssue[];
  metrics?: ProjectMetrics;
}

// Export the consolidated types to avoid duplication
export type {
  AnalysisResult as CodeAnalysisResult,
  ProjectMetrics,
  PerformanceIssue,
  PerformanceMetric
};

// Additional types needed by the analysis components
export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  description?: string;
}

export interface AnalysisLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  metrics?: ProjectMetrics;
}

export interface PerformanceReportProps {
  performanceIssues?: PerformanceIssue[];
}


/**
 * Types for code analysis features
 */

export interface FileInfo {
  path: string;
  size?: number;
  impact?: 'high' | 'medium' | 'low';
}

export interface ImportInfo {
  name: string;
  path?: string;
  file: string;
  line: number;
  impact?: 'high' | 'medium' | 'low';
}

export interface VariableInfo {
  name: string;
  type?: string;
  file: string;
  line: number;
  impact?: 'high' | 'medium' | 'low';
}

export interface DependencyInfo {
  name: string;
  version?: string;
  usage?: number;
  impact?: 'high' | 'medium' | 'low';
}

export interface CodeIssueInfo {
  description: string;
  file: string;
  line: number;
  severity?: 'high' | 'medium' | 'low';
  recommendation?: string;
}

export interface DuplicateCodeInfo {
  id: number | string;
  files: {
    path: string;
    lineStart?: number;
    lineEnd?: number;
  }[];
  similarity: number;
  lines?: number;
  linesCount?: number;
  recommendation?: string;
}

export interface ComplexityItem {
  name?: string;
  function?: string;
  file: string;
  complexity?: number;
  cyclomaticComplexity?: number;
  line: number;
  explanation?: string;
}

export interface PerformanceIssue {
  description: string;
  file: string;
  lineNumber: number;
  severity: 'high' | 'medium' | 'low';
  recommendation: string;
}

export interface BaseMetrics {
  projectSize: number; // in KB
  fileCount: number;
  dependencyCount: number;
}

export interface ProjectMetrics {
  beforeCleanup: BaseMetrics;
  afterCleanup: BaseMetrics;
  sizeSavings?: number;
  fileSavings?: number;
  dependencySavings?: number;
  sizePercentage?: number;
  filePercentage?: number;
  dependencyPercentage?: number;
}

export interface AnalysisResult {
  unusedImports: ImportInfo[];
  unusedVariables: VariableInfo[];
  unusedFiles?: FileInfo[];
  unusedSelectors?: VariableInfo[];
  unusedFunctions?: VariableInfo[];
  deadCode: CodeIssueInfo[];
  deadCodePaths?: CodeIssueInfo[];
  duplicateCode: DuplicateCodeInfo[];
  complexCode: ComplexityItem[];
  unusedDependencies: string[];
  performanceIssues?: PerformanceIssue[];
  metrics?: {
    beforeCleanup: BaseMetrics;
    afterCleanup: BaseMetrics;
  };
}

export interface CleanupPlanStep {
  title: string;
  description: string;
  steps: string[];
}


export interface FileInfo {
  path: string;
  size: number;
  lines: number;
}

export interface ImportInfo {
  file?: string;
  name: string;
  source: string;
  line: number;
  used: boolean;
}

export interface VariableInfo {
  file?: string;
  name: string;
  line: number;
  type: string;
  used: boolean;
}

export interface CssSelectorInfo {
  file?: string;
  selector: string;
  line: number;
  used: boolean;
}

export interface DependencyInfo {
  name: string;
  version: string;
  description?: string;
  used: boolean;
  size?: number;
}

export interface DeadCodeInfo {
  path?: string;
  type: string;
  name: string;
  line: number;
  location: string;
  description?: string;
}

export interface ComplexityItem {
  path: string;
  name: string;
  complexity: number;
  filePath: string;
  line: number;
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

export interface ProjectMetrics {
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

// Alias types for backwards compatibility
export type UnusedImport = ImportInfo;
export type UnusedVariable = VariableInfo;
export type UnusedCssSelector = CssSelectorInfo;
export type DeadCodePath = DeadCodeInfo;

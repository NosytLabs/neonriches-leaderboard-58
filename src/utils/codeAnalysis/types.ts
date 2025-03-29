
// File information types
export interface FileInfo {
  path: string;
  size: number;
  modifiedAt?: string;
}

// Dependency information
export interface DependencyInfo {
  name: string;
  version: string;
  used: boolean;
  size?: number;
  isDevDependency?: boolean;
}

// Import information
export interface ImportInfo {
  name: string;
  source: string;
  used: boolean;
  path?: string;
  line?: number;
  column?: number;
}

// Variable information
export interface VariableInfo {
  name: string;
  type: string;
  used: boolean;
  file?: string;
  line?: number;
  column?: number;
}

// CSS selector information
export interface CssSelectorInfo {
  selector: string;
  used: boolean;
  file?: string;
  line?: number;
}

// Dead code information
export interface DeadCodeInfo {
  path: string;
  type: 'function' | 'class' | 'variable' | 'component' | 'import' | 'export';
  name: string;
  line?: number;
  description?: string;
}

// Compatibility types for existing components
export interface UnusedImport {
  file: string;
  name: string;
  source: string;
  line: number;
  column?: number;
}

export interface UnusedVariable {
  file: string;
  name: string;
  line: number;
  column?: number;
}

export interface UnusedCssSelector {
  file: string;
  selector: string;
  line: number;
}

export interface DeadCodePath {
  file: string;
  line: number;
  description: string;
}

// Complexity analysis types
export interface ComplexityItem {
  id: string;
  name: string;
  file: string;
  functionName?: string;
  function?: string;
  path?: string;
  complexity: number;
  cyclomaticComplexity: number;
  linesOfCode: number;
  lines: number;
  parameters: number;
  nestedLevel: number;
  issues: string[];
  status?: string;
  functions?: string[];
}

// Duplicate code analysis types
export interface DuplicateCodeInfo {
  id: string;
  pattern: string;
  similarity: number;
  occurrences: number;
  files: { path: string }[];
  lines: number;
  snippet: string;
  codeSnippet?: string;
}

// Performance issue information
export interface PerformanceIssue {
  id: string;
  type: 'rendering' | 'memory' | 'network' | 'assets' | 'other';
  component?: string;
  file: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  recommendation: string;
}

// Overall analysis result
export interface AnalysisResult {
  timestamp: string;
  unusedFiles: FileInfo[];
  unusedImports: ImportInfo[];
  unusedVariables: VariableInfo[];
  unusedCssSelectors: CssSelectorInfo[];
  unusedDependencies: DependencyInfo[];
  deadCode: DeadCodeInfo[];
  deadCodePaths?: DeadCodeInfo[];
  complexCode: ComplexityItem[];
  duplicateCode: DuplicateCodeInfo[];
  performanceIssues: PerformanceIssue[];
  bestPracticeViolations?: {
    id: string;
    rule: string;
    file: string;
    line: number;
    column: number;
    message: string;
    severity: 'error' | 'warning' | 'info';
  }[];
}

// Project metrics
export interface ProjectMetrics {
  projectSize: number;  // in KB
  fileCount: number;
  dependencyCount: number;
  averageFileSize: number;
  largestFiles: { filePath: string, size: number }[];
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

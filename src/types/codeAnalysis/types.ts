
export interface FileInfo {
  path: string;
  size: number;
  lastModified?: Date;
  language?: string;
}

export interface ImportInfo {
  name: string;
  path?: string; 
  file?: string;
  line?: number;
  note?: string;
  source?: string;
  impact?: string;
}

export interface VariableInfo {
  name: string;
  type?: string;
  file?: string;
  line?: number;
  note?: string;
  impact?: string;
}

export interface FunctionInfo {
  name: string;
  file?: string;
  line?: number;
  params?: number;
  complexity?: number;
  linesOfCode?: number;
}

export interface DependencyInfo {
  name: string;
  version: string;
  size?: number;
  used?: boolean;
}

export interface CssSelectorInfo {
  selector?: string;
  file?: string;
  line?: number;
  name?: string;
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
  title?: string;
  description?: string;
  severity?: string;
  impact?: string;
  solution?: string;
}

export interface DuplicateCodeInfo {
  id: string | number;
  pattern?: string;
  similarity: number;
  files: { path: string }[];
  lines?: number;
  linesCount?: number;
  code?: string;
  codeSnippet?: string;
  snippet?: string;
  recommendation?: string;
  title?: string;
  description?: string;
  severity?: string;
  impact?: string;
  solution?: string;
  instances?: { file: string; lines: string; }[];
}

export interface DeadCodeInfo {
  file: string;
  path?: string;
  name?: string;
  line: number;
  description: string;
  type?: string;
}

export interface PerformanceIssue {
  id: string;
  description: string;
  file: string;
  lineNumber: number;
  severity: string;
  recommendation: string;
  issue?: string;
}

export interface ProjectMetrics {
  projectSize: number;
  fileCount: number;
  dependencyCount: number;
  averageFileSize?: number;
  largestFiles?: Array<{ filePath: string, size: number }>;
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
  unusedImports: ImportInfo[];
  unusedVariables: VariableInfo[];
  unusedFiles?: string[];
  unusedSelectors?: CssSelectorInfo[];
  unusedDependencies?: string[];
  deadCode?: DeadCodeInfo[];
  deadCodePaths?: DeadCodeInfo[];
  duplicateCode: DuplicateCodeInfo[];
  complexCode: ComplexityItem[];
  performanceIssues?: PerformanceIssue[];
  metrics?: ProjectMetrics;
  unusedFunctions?: VariableInfo[];
  summary?: any;
}

export interface UnusedImport {
  file: string;
  name: string;
  line: number;
  source: string;
}

export interface UnusedVariable {
  file: string;
  name: string;
  line: number;
  type?: string;
}

export interface UnusedCssSelector {
  file: string;
  selector: string;
  line: number;
}

export interface EslintIssue {
  ruleId: string;
  severity: number;
  message: string;
  line: number;
  column: number;
  nodeType: string;
  messageId: string;
  endLine: number;
  endColumn: number;
}

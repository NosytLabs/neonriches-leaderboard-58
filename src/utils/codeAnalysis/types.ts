
// Types for the code analysis module

// Base information types
export interface FileInfo {
  path: string;
  size: number;
  filePath?: string;
  impact?: 'low' | 'medium' | 'high';
}

export interface ImportInfo {
  file: string;
  name: string;
  from: string;
  line?: number;
  filePath?: string;
  import?: string;
  impact?: 'low' | 'medium' | 'high';
}

export interface VariableInfo {
  file: string;
  name: string;
  line: number;
  filePath?: string;
  variable?: string;
  impact?: 'low' | 'medium' | 'high';
}

export interface CssSelectorInfo {
  file: string;
  selector: string;
  line: number;
  filePath?: string;
  impact?: 'low' | 'medium' | 'high';
}

export interface DependencyInfo {
  name: string;
  version: string;
  alternatives: string[];
  recommendation?: string;
  impact?: 'low' | 'medium' | 'high';
}

export interface DeadCodeInfo {
  file: string;
  function: string;
  line: number;
  description?: string;
}

export interface CodeOccurrence {
  file: string;
  lines: string;
}

export interface DuplicateCodeInfo {
  pattern: string;
  occurrences: CodeOccurrence[];
  similarity: number;
  impact?: 'low' | 'medium' | 'high';
  refactoringDifficulty?: 'easy' | 'medium' | 'hard';
  recommendation?: string;
  code?: string;
  instances?: any[];
}

export interface ComplexityItem {
  file: string;
  function: string;
  cyclomaticComplexity: number;
  lines: string;
  impact?: 'low' | 'medium' | 'high';
  refactoringDifficulty?: 'easy' | 'medium' | 'hard';
  recommendation?: string;
  explanation?: string;
  issues?: string[];
  name?: string;
  complexity?: number;
  line?: number;
  linesOfCode?: number;
  parameters?: number;
  nestedLevel?: number;
  filePath?: string;
}

export interface PerformanceIssue {
  file: string;
  issue: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  recommendation: string;
  id?: string;
  lineNumber?: number;
  severity?: string;
}

export interface LargeFile {
  filePath: string;
  size: number;
}

export interface ProjectMetrics {
  projectSize: number; // in KB
  fileCount: number;
  dependencyCount: number;
  averageFileSize: number; // in KB
  largestFiles: LargeFile[];
  
  // Added for compatibility with existing code
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

// Main analysis result type
export interface AnalysisResult {
  unusedFiles: FileInfo[];
  unusedImports: ImportInfo[];
  unusedVariables: VariableInfo[];
  unusedCssSelectors: CssSelectorInfo[];
  unusedDependencies: DependencyInfo[];
  deadCode: DeadCodeInfo[];
  duplicateCode: DuplicateCodeInfo[];
  complexCode: ComplexityItem[];
  recommendations: string[];
  metrics: ProjectMetrics;
  bestPracticeViolations?: any[];
  
  // Added for compatibility with existing code
  deadCodePaths?: DeadCodeInfo[];
  unusedFunctions?: any[];
}

// Types for the UI components
export interface UnusedImport {
  file: string;
  name: string;
  from: string;
  line: number;
}

export interface UnusedVariable {
  file: string;
  name: string;
  line: number;
}

export interface UnusedFunction {
  file: string;
  name: string;
  line: number;
}

export interface UnusedComponent {
  file: string;
  name?: string;
  size?: number;
  line: number;
}

export interface UnusedCssSelector {
  file: string;
  selector: string;
  line: number;
}

export interface DeadCodePath {
  file: string;
  function: string;
  description: string;
  line: number;
}

// Added for compatibility with existing code
export type DuplicateCode = DuplicateCodeInfo;


// File analysis types
export interface FileInfo {
  filePath: string;
  size: number; // in KB
  impact: 'low' | 'medium' | 'high';
}

export interface ImportInfo {
  filePath: string;
  line: number;
  import: string;
  impact: 'low' | 'medium' | 'high';
}

export interface VariableInfo {
  filePath: string;
  line: number;
  variable: string;
  impact: 'low' | 'medium' | 'high';
}

export interface FunctionInfo {
  filePath: string;
  line: number;
  function: string;
  impact: 'low' | 'medium' | 'high';
}

export interface CssSelectorInfo {
  filePath: string;
  line: number;
  selector: string;
  impact: 'low' | 'medium' | 'high';
}

export interface DeadCodeInfo {
  filePath: string;
  line: number;
  code: string;
  impact: 'low' | 'medium' | 'high';
}

export interface CodeInstance {
  filePath: string;
  line: number;
}

export interface DuplicateCodeInfo {
  instances: CodeInstance[];
  code: string;
  impact: 'low' | 'medium' | 'high';
}

export interface ComplexCodeInfo {
  filePath: string;
  line: number;
  function: string;
  complexity: number;
  impact: 'low' | 'medium' | 'high';
}

export interface DependencyInfo {
  name: string;
  version: string;
  alternatives?: string[];
  recommendation?: string;
  impact: 'low' | 'medium' | 'high';
}

export interface LargeFileInfo {
  filePath: string;
  size: number; // in KB
}

export interface ProjectMetrics {
  projectSize: number; // in KB
  fileCount: number;
  dependencyCount: number;
  averageFileSize: number; // in KB
  largestFiles: LargeFileInfo[];
}

export interface AnalysisResult {
  unusedFiles: FileInfo[];
  unusedImports: ImportInfo[];
  unusedVariables: VariableInfo[];
  unusedFunctions: FunctionInfo[];
  unusedCssSelectors: CssSelectorInfo[];
  deadCodePaths: DeadCodeInfo[];
  duplicateCode: DuplicateCodeInfo[];
  complexCode: ComplexCodeInfo[];
  unusedDependencies: DependencyInfo[];
  metrics: {
    beforeCleanup: ProjectMetrics;
    afterCleanup: ProjectMetrics;
  };
}

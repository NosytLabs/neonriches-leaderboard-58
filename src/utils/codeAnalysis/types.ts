
export interface ImportIssue {
  name: string;
  path: string;
  file: string;
  line: number;
}

export interface VariableIssue {
  name: string;
  type: string;
  file: string;
  line: number;
}

export interface FileIssue {
  path: string;
  size: number;
}

export interface SelectorIssue {
  name: string;
  file: string;
  line: number;
}

export interface DeadCodeIssue {
  description: string;
  file: string;
  line: number;
}

export interface DuplicateCodeFile {
  path: string;
}

export interface DuplicateCodeIssue {
  id: string;
  files: DuplicateCodeFile[];
  similarity: number;
  lines: number;
}

export interface ComplexCodeIssue {
  id: string;
  name: string;
  file: string;
  complexity: number;
  line: number;
}

export interface ProjectMetrics {
  projectSize: number;
  fileCount: number;
  dependencyCount: number;
}

export interface AnalysisResult {
  unusedImports: ImportIssue[];
  unusedVariables: VariableIssue[];
  unusedFiles: FileIssue[];
  unusedSelectors: SelectorIssue[];
  deadCode: DeadCodeIssue[];
  duplicateCode: DuplicateCodeIssue[];
  complexCode: ComplexCodeIssue[];
  unusedDependencies: string[];
  metrics: {
    beforeCleanup: ProjectMetrics;
    afterCleanup: ProjectMetrics;
  };
}

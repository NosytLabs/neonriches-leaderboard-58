
export interface FileMetrics {
  name: string;
  path: string;
  type: string;
  lines: number;
  size: number;
  dependencies: string[];
  imports: number;
  exports: number;
  complexity: number;
  unused: boolean;
  duplicated: boolean;
  vulnerabilities: number;
}

export interface ProjectMetrics {
  fileCount: number;
  totalSize: number;
  totalLines: number;
  duplicatedCode: number;
  unusedCode: number;
  dependencyCount: number;
  vulnerabilities: number;
  performance: 'low' | 'medium' | 'high';
  // Add missing fields
  beforeCleanup: {
    fileCount: number;
    totalSize: number;
    dependencyCount: number;
  };
  afterCleanup: {
    fileCount: number;
    totalSize: number;
    dependencyCount: number;
  };
  sizeSavings: {
    absolute: number;
    percentage: number;
  };
  fileSavings: {
    absolute: number;
    percentage: number;
  };
  dependencySavings: {
    absolute: number;
    percentage: number;
  };
  sizePercentage: number;
}

export interface AnalysisResult {
  metrics: ProjectMetrics;
  files: FileMetrics[];
  suggestions: AnalysisSuggestion[];
  summary: string;
}

export interface AnalysisSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  category: 'performance' | 'size' | 'dependencies' | 'code' | 'security';
  filePaths: string[];
}

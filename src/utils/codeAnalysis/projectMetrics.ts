
export interface ProjectMetrics {
  // Basic metrics
  totalFiles: number;
  totalSize: number;
  
  // Code size metrics
  lineCount: number;
  componentCount: number;
  avgComponentSize: number;
  
  // Bundle analysis
  dependencies: string[];
  dependencyCount: number;
  
  // Cleanup metrics
  beforeCleanup: {
    files: number;
    size: number;
    dependencies: number;
  };
  afterCleanup: {
    files: number;
    size: number;
    dependencies: number;
  };
  
  // Savings metrics
  sizeSavings: number;
  fileSavings: number;
  dependencySavings: number;
  
  // Percentages
  sizePercentage: number;
  filePercentage: number;
  dependencyPercentage: number;
}

export interface PerformanceIssue {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  impactScore: number;
  file?: string;
  lineNumber?: number;
  recommendation?: string;
}

export interface CodeQualityMetrics {
  complexity: number;
  maintainability: number;
  readability: number;
  testCoverage: number;
  duplicateCode: number;
  totalScore: number;
}

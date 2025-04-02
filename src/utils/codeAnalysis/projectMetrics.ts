
export interface ProjectMetrics {
  totalFiles: number;
  totalSize: number;
  totalLines: number;
  dependencies: number;
  beforeCleanup?: {
    totalFiles: number;
    totalSize: number;
    totalLines: number;
    dependencies: number;
  };
  afterCleanup?: {
    totalFiles: number;
    totalSize: number;
    totalLines: number;
    dependencies: number;
  };
  sizeSavings?: number;
  fileSavings?: number;
  dependencySavings?: number;
  sizePercentage?: number;
  codeDuplication?: number;
  unusedCode?: number;
  redundantDependencies?: number;
  performanceScore?: number;
}

export interface PerformanceIssue {
  id: string;
  type: 'warning' | 'error' | 'info';
  description: string;
  file?: string;  // File path
  lineNumber?: number;  // Line number
  recommendation?: string;  // Suggested fix
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'performance' | 'code-quality' | 'security' | 'maintainability';
  impact?: string;
}

export interface FileSizeData {
  fileName: string;
  size: number;
  lineCount: number;
  duplicatedLines?: number;
  unusedExports?: string[];
}

// Mock performance types until actual module is created
export interface WebVitalMetric {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  entries: PerformanceEntry[];
}

export interface PerformanceMetrics {
  [key: string]: WebVitalMetric;
}

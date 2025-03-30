
// Type definitions for code analysis features

export interface PerformanceIssue {
  description: string;
  severity: 'high' | 'medium' | 'low';
  file: string;
  lineNumber: number;
  recommendation: string;
}

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  description?: string;
}

export interface ProjectMetrics {
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
  sizePercentage?: number;
  sizeSavings?: number;
  fileSavings?: number;
  dependencySavings?: number;
}

export interface CodeAnalysisResult {
  score: number;
  metrics: PerformanceMetric[];
  suggestions: string[];
  timestamp: string;
}

export interface AnalysisLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  metrics?: ProjectMetrics;
}

export interface PerformanceReportProps {
  performanceIssues?: PerformanceIssue[];
}

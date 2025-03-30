
// Type definitions for code analysis features

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  description?: string;
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
}

export interface PerformanceReportProps {
  data?: CodeAnalysisResult;
  isLoading?: boolean;
  error?: string;
}

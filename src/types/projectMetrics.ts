
// Project performance metrics types

export type IssueType = 
  | 'warning'
  | 'error'
  | 'info'
  | 'duplicate-type'
  | 'unused-code'
  | 'configuration'
  | 'types'
  | 'duplicate-code';

export type IssueSeverity = 
  | 'low'
  | 'medium'
  | 'high'
  | 'critical';

export interface PerformanceIssue {
  id: string;
  type: IssueType;
  severity: IssueSeverity;
  file: string;
  description: string;
  recommendation: string;
}

export interface ProjectMetrics {
  beforeCleanup: {
    fileCount: number;
    projectSize: number;
    dependencyCount: number;
  };
  afterCleanup: {
    fileCount: number;
    projectSize: number;
    dependencyCount: number;
  };
  sizeSavings: {
    bytes: number;
    percentage: number;
  };
  fileSavings: {
    count: number;
    percentage: number;
  };
  dependencySavings: {
    count: number;
    percentage: number;
  };
}

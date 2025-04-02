export interface CodeMetrics {
  loc: number;
  sloc: number;
  comments: number;
  complexity: number;
  maintainability: number;
}

export interface ProjectMetricsData {
  totalFiles: number;
  totalSize: number;
  totalLoc: number;
  totalSloc: number;
  averageComplexity: number;
  averageMaintainability: number;
  fileTypes: Record<string, number>;
  largestFiles: { path: string; size: number }[];
  mostComplexFiles: { path: string; complexity: number }[];
  leastMaintainableFiles: { path: string; maintainability: number }[];
}

// Rename ProjectMetricsInterface to avoid conflicts while maintaining the export
export type ProjectMetrics = ProjectMetricsData & {
  timestamp: string;
  repository?: string;
  branch?: string;
  commit?: string;
};

// Keeping the old name with alias for backward compatibility
export interface ProjectMetricsInterface extends ProjectMetricsData {
  timestamp: string;
  repository?: string;
  branch?: string;
  commit?: string;
}

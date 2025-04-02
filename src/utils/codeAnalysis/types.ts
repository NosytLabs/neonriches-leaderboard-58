
/**
 * Types for code analysis
 */

export interface FileStat {
  path: string;
  size: number;
  lineCount: number;
  lastModified: string;
  imports: string[];
  exports: string[];
  dependencies: string[];
}

export interface ProjectStat {
  projectSize: number;
  fileCount: number;
  dependencyCount: number;
  totalLines: number;
  avgFileSize: number;
  files?: FileStat[];
  largestFiles?: FileStat[];
  mostImported?: { module: string; count: number }[];
  mostDependentFiles?: { file: string; dependencyCount: number }[];
}

export interface SizeSavings {
  bytes: number;
  percentage: number;
}

export interface CountSavings {
  count: number;
  percentage: number;
}

// Missing ProjectMetrics type
export interface ProjectMetrics {
  beforeCleanup: ProjectStat;
  afterCleanup: ProjectStat;
  sizeSavings: SizeSavings;
  fileSavings: CountSavings;
  dependencySavings: CountSavings;
  sizePercentage: number;
  unusedFiles?: FileStat[];
  duplicates?: { paths: string[]; similarity: number }[];
  recommendations?: string[];
}

export interface AnalysisOptions {
  includeDependencies: boolean;
  includeNodeModules: boolean;
  includeTests: boolean;
  minFileSize: number;
  minSimilarity: number;
}

export interface CodeAnalysisResult {
  metrics: ProjectMetrics;
  options: AnalysisOptions;
  timestamp: string;
}

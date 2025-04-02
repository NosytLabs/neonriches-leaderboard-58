
// Create stub for required types since we don't have access to performanceTypes
export interface BasicPerformanceMetrics {
  pageLoad: number;
  firstContentfulPaint: number;
  timeToInteractive: number;
}

export interface ResourceMetrics {
  totalBytes: number;
  jsBytes: number;
  cssBytes: number;
  imageBytes: number;
  fontBytes: number;
  documentBytes: number;
}

// Define ProjectMetrics with all required properties 
export interface ProjectMetrics {
  totalFiles: number;
  totalLines: number;
  codeSize: number;
  dependencies: number;
  duplications: number;
  complexity: number;
  maintainability: number;
  
  beforeCleanup: {
    totalFiles: number;
    totalLines: number;
    codeSize: number;
    dependencies: number;
    projectSize: number;
    fileCount: number;
    dependencyCount: number;
  };
  
  afterCleanup: {
    totalFiles: number;
    totalLines: number;
    codeSize: number;
    dependencies: number;
    projectSize: number;
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
  
  sizePercentage: number;
  
  performance: BasicPerformanceMetrics;
  resources: ResourceMetrics;
}

// Using export type for proper isolation
export type { ProjectMetrics };

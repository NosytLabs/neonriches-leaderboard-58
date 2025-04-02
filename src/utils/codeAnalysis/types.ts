
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
  
  // Properties that were missing
  beforeCleanup: {
    totalFiles: number;
    totalLines: number;
    codeSize: number;
    dependencies: number;
    projectSize?: number; // Added for compatibility
    fileCount?: number;   // Added for compatibility
    dependencyCount?: number; // Added for compatibility
  };
  
  afterCleanup: {
    totalFiles: number;
    totalLines: number;
    codeSize: number;
    dependencies: number;
    projectSize?: number; // Added for compatibility
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

// Use export type for type-only exports when using isolatedModules
export type { ProjectMetrics };

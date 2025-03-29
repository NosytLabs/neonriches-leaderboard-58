
import { AnalysisResult, ProjectMetrics, ComplexityItem, DuplicateCodeInfo } from './types';

/**
 * Formats a file size for display
 * @param bytes File size in bytes
 * @returns Formatted file size string
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

/**
 * Calculates project metrics
 * @param result Analysis result
 * @returns Metrics before and after potential cleanup
 */
export const calculateSavings = (result: AnalysisResult): ProjectMetrics => {
  const metrics = result.metrics || {
    beforeCleanup: { projectSize: 0, fileCount: 0, dependencyCount: 0 },
    afterCleanup: { projectSize: 0, fileCount: 0, dependencyCount: 0 }
  };

  // Calculate potential savings
  const sizeSavings = (metrics.beforeCleanup.projectSize - metrics.afterCleanup.projectSize) || 0;
  const fileSavings = (metrics.beforeCleanup.fileCount - metrics.afterCleanup.fileCount) || 0;
  const dependencySavings = (metrics.beforeCleanup.dependencyCount - metrics.afterCleanup.dependencyCount) || 0;
  
  const sizePercentage = metrics.beforeCleanup.projectSize > 0 
    ? Math.round((sizeSavings / metrics.beforeCleanup.projectSize) * 100) 
    : 0;
  
  const filePercentage = metrics.beforeCleanup.fileCount > 0 
    ? Math.round((fileSavings / metrics.beforeCleanup.fileCount) * 100) 
    : 0;
  
  const dependencyPercentage = metrics.beforeCleanup.dependencyCount > 0 
    ? Math.round((dependencySavings / metrics.beforeCleanup.dependencyCount) * 100) 
    : 0;

  return {
    ...metrics,
    sizeSavings,
    fileSavings,
    dependencySavings,
    sizePercentage,
    filePercentage,
    dependencyPercentage
  };
};

/**
 * Sorts complex code items by complexity
 * @param items Array of complexity items
 * @returns Sorted array
 */
export const sortByComplexity = (items: ComplexityItem[]): ComplexityItem[] => {
  return [...items].sort((a, b) => {
    const complexityA = a.cyclomaticComplexity || a.complexity || 0;
    const complexityB = b.cyclomaticComplexity || b.complexity || 0;
    return complexityB - complexityA;
  });
};

/**
 * Sorts duplicate code items by similarity
 * @param items Array of duplicate code items
 * @returns Sorted array
 */
export const sortBySimilarity = (items: DuplicateCodeInfo[]): DuplicateCodeInfo[] => {
  return [...items].sort((a, b) => {
    return b.similarity - a.similarity;
  });
};

/**
 * Filters results to only include items with high impact
 * @param result Analysis result
 * @returns Filtered analysis result
 */
export const filterHighImpactIssues = (result: AnalysisResult): AnalysisResult => {
  return {
    ...result,
    unusedFiles: (result.unusedFiles || []).filter(file => file.impact === 'high'),
    unusedImports: result.unusedImports.filter(imp => imp.impact === 'high'),
    unusedVariables: result.unusedVariables.filter(variable => variable.impact === 'high'),
    deadCode: result.deadCode.filter(code => code.description?.includes('high')),
    performanceIssues: result.performanceIssues.filter(issue => issue.severity === 'high'),
    complexCode: result.complexCode.filter(code => 
      (code.cyclomaticComplexity || code.complexity || 0) > 15
    )
  };
};

/**
 * Generates cleanup recommendations based on analysis
 * @param result Analysis result
 * @returns Array of recommendation strings
 */
export const generateRecommendations = (result: AnalysisResult): string[] => {
  const recommendations: string[] = [];
  
  // File recommendations
  if ((result.unusedFiles?.length || 0) > 0) {
    recommendations.push(
      `Remove ${result.unusedFiles?.length} unused files to reduce project size by approximately ${
        formatFileSize((result.unusedFiles?.reduce((total, file) => total + file.size, 0) || 0) * 1024)
      }.`
    );
  }
  
  // Import recommendations
  if (result.unusedImports.length > 0) {
    recommendations.push(
      `Clean up ${result.unusedImports.length} unused imports to improve code readability and slightly reduce bundle size.`
    );
  }
  
  // Dependency recommendations
  if (result.unusedDependencies.length > 0) {
    recommendations.push(
      `Remove ${result.unusedDependencies.length} unused dependencies to reduce project dependencies and potential security vulnerabilities.`
    );
  }
  
  // Complex code recommendations
  const highComplexityCount = result.complexCode.filter(code => 
    (code.cyclomaticComplexity || code.complexity || 0) > 15
  ).length;
  
  if (highComplexityCount > 0) {
    recommendations.push(
      `Refactor ${highComplexityCount} high-complexity functions to improve maintainability and testability.`
    );
  }
  
  // Duplicate code recommendations
  if (result.duplicateCode.length > 0) {
    recommendations.push(
      `Extract ${result.duplicateCode.length} duplicate code patterns into reusable utility functions.`
    );
  }
  
  return recommendations;
};

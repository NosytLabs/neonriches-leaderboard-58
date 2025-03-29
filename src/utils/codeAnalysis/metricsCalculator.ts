
import { FileInfo, DependencyInfo, ProjectMetrics } from './types';

/**
 * Calculates project metrics
 * @param files Array of files
 * @param dependencies Array of dependencies
 * @returns Project metrics
 */
export const calculateProjectMetrics = (
  files: FileInfo[], 
  dependencies: DependencyInfo[]
): ProjectMetrics => {
  let totalSize = 0;
  
  // Calculate total size
  files.forEach(file => {
    totalSize += file.size;
  });
  
  // Sort files by size to get largest files
  const sortedBySize = [...files].sort((a, b) => b.size - a.size);
  const largestFiles = sortedBySize.slice(0, 5).map(file => ({
    filePath: file.path,
    size: file.size
  }));
  
  return {
    projectSize: totalSize,
    fileCount: files.length,
    dependencyCount: dependencies.length,
    averageFileSize: files.length > 0 ? totalSize / files.length : 0,
    largestFiles
  };
};

/**
 * Calculates potential savings from unused files and dependencies
 * @param files Array of unused files
 * @param dependencies Array of unused dependencies
 * @param currentMetrics Current project metrics
 * @returns Projected metrics after removing unused items
 */
export const calculateProjectedSavings = (
  files: FileInfo[],
  dependencies: DependencyInfo[],
  currentMetrics: ProjectMetrics
): ProjectMetrics => {
  // Calculate size of unused files
  const unusedFilesSize = files.reduce((total, file) => total + file.size, 0);
  
  // Calculate size of unused dependencies
  const unusedDepsSize = dependencies.reduce((total, dep) => total + (dep.size || 0), 0);
  
  // Calculate new project size
  const newProjectSize = currentMetrics.projectSize - unusedFilesSize - unusedDepsSize;
  
  // Calculate new file count
  const newFileCount = currentMetrics.fileCount - files.length;
  
  // Calculate new dependency count
  const newDependencyCount = currentMetrics.dependencyCount - dependencies.length;
  
  return {
    projectSize: newProjectSize > 0 ? newProjectSize : 0,
    fileCount: newFileCount > 0 ? newFileCount : 0,
    dependencyCount: newDependencyCount > 0 ? newDependencyCount : 0,
    averageFileSize: newFileCount > 0 ? newProjectSize / newFileCount : 0,
    largestFiles: currentMetrics.largestFiles,
    beforeCleanup: {
      projectSize: currentMetrics.projectSize,
      fileCount: currentMetrics.fileCount,
      dependencyCount: currentMetrics.dependencyCount
    },
    afterCleanup: {
      projectSize: newProjectSize > 0 ? newProjectSize : 0,
      fileCount: newFileCount > 0 ? newFileCount : 0,
      dependencyCount: newDependencyCount > 0 ? newDependencyCount : 0
    }
  };
};

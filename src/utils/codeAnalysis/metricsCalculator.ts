
import * as fs from 'fs';
import * as path from 'path';
import { getAllFiles } from './fileUtils';
import { AnalysisResult } from './types';

// Calculate project metrics before and after cleanup
export const calculateProjectMetrics = async (
  projectRoot: string,
  analysisResult?: AnalysisResult
): Promise<{
  projectSize: number;
  fileCount: number;
  dependencyCount: number;
}> => {
  try {
    // Get all files
    const files = getAllFiles(projectRoot, ['node_modules', 'dist', 'build', 'coverage']);
    
    // If we have analysis results, filter out files that would be removed
    const effectiveFiles = analysisResult?.unusedFiles?.length 
      ? files.filter(file => !analysisResult.unusedFiles.includes(file))
      : files;
    
    // Calculate total project size
    let totalSize = 0;
    for (const file of effectiveFiles) {
      try {
        const stats = fs.statSync(file);
        totalSize += stats.size;
      } catch (error) {
        console.error(`Error getting file size for ${file}:`, error);
      }
    }
    
    // Count dependencies
    let dependencyCount = 0;
    try {
      const packageJsonPath = path.join(projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
        const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        // If we have analysis results, filter out unused dependencies
        const effectiveDeps = analysisResult?.unusedDependencies?.length
          ? Object.keys(deps).filter(dep => !analysisResult.unusedDependencies.includes(dep))
          : Object.keys(deps);
        
        dependencyCount = effectiveDeps.length;
      }
    } catch (error) {
      console.error('Error counting dependencies:', error);
    }
    
    return {
      projectSize: Math.round(totalSize / 1024), // Convert to KB
      fileCount: effectiveFiles.length,
      dependencyCount
    };
  } catch (error) {
    console.error('Error calculating project metrics:', error);
    return {
      projectSize: 0,
      fileCount: 0,
      dependencyCount: 0
    };
  }
};

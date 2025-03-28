
import { AnalysisResult } from './types';
import { findUnusedImportsAndVariables } from './eslintAnalysis';
import { analyzeCSSUsage } from './cssAnalysisUtils';
import { findDeadCodePaths } from './deadCodeAnalysis';
import { findDuplicateCode } from './duplicateCodeAnalysis';
import { findComplexFunctions } from './complexityAnalysis';
import { analyzeDependencies } from './dependencyAnalysis';
import { findUnusedComponents } from './reactAnalysis';
import { getAllFiles, groupFilesByType } from './fileUtils';
import { calculateProjectMetrics } from './metricsCalculator';

/**
 * Main function to analyze the codebase and generate a comprehensive report
 * @param projectRoot - The root directory of the project
 * @returns A promise resolving to the analysis result
 */
export async function analyzeCodebase(
  projectRoot: string
): Promise<AnalysisResult> {
  console.log('Starting codebase analysis...');
  
  // Get all project files
  const allFiles = getAllFiles(projectRoot, [
    'node_modules',
    'dist',
    'build',
    'coverage',
    '.git'
  ]);
  
  // Group files by type
  const filesByType = groupFilesByType(allFiles);
  
  // Calculate current project metrics
  const beforeMetrics = await calculateProjectMetrics(projectRoot);
  
  // Find unused imports and variables
  console.log('Finding unused imports and variables...');
  const unusedCode = await findUnusedImportsAndVariables(filesByType.jsFiles);
  
  // Find unused CSS selectors
  console.log('Finding unused CSS selectors...');
  const unusedCssSelectors = await analyzeCSSUsage(
    projectRoot,
    filesByType.cssFiles,
    filesByType.jsFiles
  );
  
  // Find dead code paths
  console.log('Finding dead code paths...');
  const deadCodePaths = await findDeadCodePaths(filesByType.jsFiles);
  
  // Find duplicate code
  console.log('Finding duplicate code...');
  const duplicateCode = await findDuplicateCode(filesByType.jsFiles);
  
  // Find complex functions
  console.log('Finding complex functions...');
  const complexCode = await findComplexFunctions(filesByType.jsFiles);
  
  // Analyze dependencies
  console.log('Analyzing dependencies...');
  const dependencies = await analyzeDependencies(projectRoot, filesByType.jsFiles);
  
  // Find unused components
  console.log('Finding unused components...');
  const unusedComponents = await findUnusedComponents(projectRoot, filesByType.jsFiles);
  
  // Create analysis result
  const result: AnalysisResult = {
    unusedFiles: unusedComponents,
    unusedFunctions: [], // Would need more sophisticated analysis
    unusedImports: unusedCode.imports,
    unusedVariables: unusedCode.variables,
    unusedCssSelectors,
    deadCodePaths,
    duplicateCode,
    complexCode,
    unusedDependencies: dependencies.unusedDependencies,
    metrics: {
      beforeCleanup: beforeMetrics,
      // For the after metrics, we'll estimate based on what would be removed
      afterCleanup: await calculateProjectMetrics(projectRoot, {
        unusedFiles: unusedComponents,
        unusedDependencies: dependencies.unusedDependencies,
        unusedImports: unusedCode.imports,
        unusedVariables: unusedCode.variables,
        unusedCssSelectors,
        deadCodePaths,
        duplicateCode,
        complexCode,
        metrics: {
          beforeCleanup: beforeMetrics,
          afterCleanup: {
            projectSize: 0,
            fileCount: 0,
            dependencyCount: 0
          }
        }
      })
    },
  };
  
  console.log('Codebase analysis complete!');
  return result;
}

/**
 * Generate a full code cleanup plan based on analysis results
 * @param result - The analysis result
 * @returns A formatted cleanup plan
 */
export function generateCleanupPlan(result: AnalysisResult): string {
  let plan = `# Code Cleanup Plan\n\n`;
  
  // Add metrics summary
  plan += `## Metrics Summary\n\n`;
  plan += `- Current project size: ${result.metrics.beforeCleanup.projectSize} KB\n`;
  plan += `- Estimated size after cleanup: ${result.metrics.afterCleanup.projectSize} KB\n`;
  plan += `- Potential reduction: ${result.metrics.beforeCleanup.projectSize - result.metrics.afterCleanup.projectSize} KB (${
    Math.round(((result.metrics.beforeCleanup.projectSize - result.metrics.afterCleanup.projectSize) / result.metrics.beforeCleanup.projectSize) * 100)
  }%)\n\n`;
  
  // Add unused files section
  if (result.unusedFiles.length > 0) {
    plan += `## Unused Files (${result.unusedFiles.length})\n\n`;
    result.unusedFiles.forEach(file => {
      plan += `- \`${file}\`\n`;
    });
    plan += `\n`;
  }
  
  // Add unused imports section
  if (result.unusedImports.length > 0) {
    plan += `## Unused Imports (${result.unusedImports.length})\n\n`;
    result.unusedImports.forEach(item => {
      plan += `- \`${item.file}:${item.line}\` - \`${item.name}\`\n`;
    });
    plan += `\n`;
  }
  
  // Add other sections following the same pattern
  // ...
  
  // Add summary and next steps
  plan += `## Recommended Approach\n\n`;
  plan += `1. Start by removing unused files and imports (low risk)\n`;
  plan += `2. Remove unused CSS selectors\n`;
  plan += `3. Refactor duplicate code\n`;
  plan += `4. Address complex code sections\n`;
  plan += `5. Clean up dead code paths\n`;
  plan += `6. Remove unused dependencies\n\n`;
  
  plan += `## Safety Checklist\n\n`;
  plan += `- [ ] Create a backup or branch before starting\n`;
  plan += `- [ ] Run tests after each change\n`;
  plan += `- [ ] Verify no regressions in main functionality\n`;
  plan += `- [ ] Update documentation if necessary\n`;
  
  return plan;
}

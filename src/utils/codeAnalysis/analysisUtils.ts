import * as path from 'path';
import { parseCSS } from './cssAnalysis';
import { analyzeDependencies } from './dependencyAnalysis';
import { analyzeReactComponents, findUnusedComponents } from './reactAnalysis';
import { getAllFiles, groupFilesByType } from './fileUtils';
import { findUnusedImportsAndVariables } from './eslintAnalysis';
import { analyzeCSSUsage } from './cssAnalysisUtils';
import { generateAnalysisReport } from './reportGenerator';
import { AnalysisResult, ProjectStructure, SafetyCheckResult } from './types';
import { findDeadCodePaths } from './deadCodeAnalysis';
import { findComplexFunctions } from './complexityAnalysis';
import { findDuplicateCode } from './duplicateCodeAnalysis';
import { calculateProjectMetrics } from './metricsCalculator';

// Export the main functionality and type definitions
export { getAllFiles, generateAnalysisReport };
export type { AnalysisResult, ProjectStructure, SafetyCheckResult };

// Analyze project structure
export const analyzeProjectStructure = async (
  projectRoot: string,
  excludePatterns: string[] = ['node_modules', 'dist', 'build', 'coverage']
): Promise<ProjectStructure> => {
  const files = getAllFiles(projectRoot, excludePatterns);
  const filesByType = groupFilesByType(files);
  
  // Count languages
  const languages: Record<string, number> = {
    'JavaScript': filesByType.jsFiles.filter(f => f.endsWith('.js')).length,
    'TypeScript': filesByType.jsFiles.filter(f => f.endsWith('.ts') || f.endsWith('.tsx')).length,
    'CSS': filesByType.cssFiles.length,
    'HTML': filesByType.htmlFiles.length,
    'JSON': filesByType.jsonFiles.length,
    'Media': filesByType.mediaFiles.length,
    'Other': filesByType.otherFiles.length
  };
  
  // Detect frameworks (simplified implementation)
  const frameworks: string[] = [];
  // Look for React
  if (filesByType.jsFiles.some(f => f.includes('react'))) {
    frameworks.push('React');
  }
  
  // Look for build tools (simplified implementation)
  const buildTools: string[] = [];
  if (files.some(f => f.includes('webpack'))) {
    buildTools.push('Webpack');
  }
  if (files.some(f => f.includes('vite'))) {
    buildTools.push('Vite');
  }
  
  // Count files by directory
  const directoryStructure: Record<string, number> = {};
  files.forEach(file => {
    const dir = path.dirname(file).split(path.sep)[0];
    directoryStructure[dir] = (directoryStructure[dir] || 0) + 1;
  });
  
  return {
    languages,
    frameworks,
    buildTools,
    directoryStructure
  };
};

// Perform safety checks before code removal
export const performSafetyChecks = async (
  item: string,
  projectRoot: string
): Promise<SafetyCheckResult> => {
  // This would be a more complex implementation in a real tool
  return {
    hasRuntimeDependencies: false,
    hasDynamicReferences: false,
    hasBuildDependencies: false,
    hasTestDependencies: false,
    hasDocReferences: false
  };
};

// Main scanning function that coordinates the analysis
export const scanCodebase = async (
  projectRoot: string,
  excludePatterns: string[] = ['node_modules', 'dist', 'build', 'coverage'],
  options = {
    includeUnusedImports: true,
    includeUnusedVariables: true,
    includeUnusedFunctions: true,
    includeUnusedComponents: true,
    includeComplexFunctions: true,
    includeDuplicateCode: true,
    includeUnusedCSSSelectors: true,
    complexityThreshold: 10,
    duplicateLineThreshold: 5
  }
): Promise<AnalysisResult> => {
  // Initial empty result
  const result: AnalysisResult = {
    unusedFiles: [],
    unusedFunctions: [],
    unusedImports: [],
    unusedVariables: [],
    unusedCssSelectors: [],
    deadCodePaths: [],
    duplicateCode: [],
    complexCode: [],
    unusedDependencies: [],
    metrics: {
      beforeCleanup: { projectSize: 0, fileCount: 0, dependencyCount: 0 },
      afterCleanup: { projectSize: 0, fileCount: 0, dependencyCount: 0 }
    }
  };

  try {
    // Calculate initial metrics
    result.metrics.beforeCleanup = await calculateProjectMetrics(projectRoot);
    
    // Get all files in the project
    const files = getAllFiles(projectRoot, excludePatterns);
    
    // Group files by type
    const jsFiles = files.filter(file => /\.(js|jsx|ts|tsx)$/.test(file));
    const cssFiles = files.filter(file => /\.(css|scss|less)$/.test(file));
    
    // Start various analysis tasks in parallel
    const analysisPromises = [];
    
    if (options.includeUnusedImports || options.includeUnusedVariables) {
      analysisPromises.push(findUnusedImportsAndVariables(jsFiles));
    }
    
    if (options.includeUnusedComponents) {
      analysisPromises.push(findUnusedComponents(projectRoot, jsFiles));
    }
    
    if (options.includeUnusedCSSSelectors) {
      analysisPromises.push(analyzeCSSUsage(projectRoot, cssFiles, jsFiles));
    }
    
    if (options.includeComplexFunctions || options.includeDuplicateCode) {
      analysisPromises.push(analyzeReactComponents(jsFiles, {
        complexityThreshold: options.complexityThreshold
      }));
    }
    
    if (options.includeDuplicateCode) {
      analysisPromises.push(findDuplicateCode(jsFiles, options.duplicateLineThreshold));
    }
    
    // Add dependency analysis
    analysisPromises.push(analyzeDependencies(projectRoot, jsFiles));
    
    // Add dead code path analysis
    analysisPromises.push(findDeadCodePaths(jsFiles));
    
    // Wait for all analysis tasks to complete
    const [
      unusedImportsAndVars,
      unusedComponents,
      cssAnalysis,
      reactAnalysis,
      duplicateCodeResults,
      dependencyAnalysis,
      deadCodeResults
    ] = await Promise.all(analysisPromises);
    
    // Merge results
    if (options.includeUnusedImports) {
      result.unusedImports = unusedImportsAndVars.imports;
    }
    
    if (options.includeUnusedVariables) {
      result.unusedVariables = unusedImportsAndVars.variables;
    }
    
    if (options.includeUnusedComponents) {
      result.unusedFiles = unusedComponents;
    }
    
    if (options.includeUnusedCSSSelectors) {
      result.unusedCssSelectors = cssAnalysis;
    }
    
    if (options.includeComplexFunctions) {
      result.complexCode = reactAnalysis.complexComponents;
    }
    
    if (options.includeDuplicateCode) {
      result.duplicateCode = duplicateCodeResults || reactAnalysis.duplicateCode;
    }
    
    // Add dependency analysis results
    result.unusedDependencies = dependencyAnalysis.unusedDependencies;
    
    // Add dead code path results
    result.deadCodePaths = deadCodeResults;
    
    // Calculate metrics after potential cleanup
    result.metrics.afterCleanup = await calculateProjectMetrics(projectRoot);
    
    return result;
  } catch (error) {
    console.error('Error during code analysis:', error);
    return result;
  }
};

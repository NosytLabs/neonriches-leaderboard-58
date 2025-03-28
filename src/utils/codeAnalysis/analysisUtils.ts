
import * as path from 'path';
import { parseCSS } from './cssAnalysis';
import { analyzeDependencies } from './dependencyAnalysis';
import { analyzeReactComponents, findUnusedComponents } from './reactAnalysis';
import { getAllFiles } from './fileUtils';
import { findUnusedImportsAndVariables } from './eslintAnalysis';
import { analyzeCSSUsage } from './cssAnalysisUtils';
import { generateAnalysisReport } from './reportGenerator';
import { AnalysisResult } from './types';

// Export the main functionality and type definitions
export { AnalysisResult, generateAnalysisReport, getAllFiles };

// Main scanning function that coordinates the analysis
export const scanCodebase = async (
  projectRoot: string,
  excludePatterns: string[] = ['node_modules', 'dist', 'build', 'coverage']
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
    complexCode: []
  };

  try {
    // Get all files in the project
    const files = getAllFiles(projectRoot, excludePatterns);
    
    // Group files by type
    const jsFiles = files.filter(file => /\.(js|jsx|ts|tsx)$/.test(file));
    const cssFiles = files.filter(file => /\.(css|scss|less)$/.test(file));
    
    // Start various analysis tasks in parallel
    const [
      unusedImportsAndVars,
      unusedComponents,
      cssAnalysis,
      reactAnalysis,
      dependencyAnalysis
    ] = await Promise.all([
      findUnusedImportsAndVariables(jsFiles),
      findUnusedComponents(projectRoot, jsFiles),
      analyzeCSSUsage(projectRoot, cssFiles, jsFiles),
      analyzeReactComponents(jsFiles),
      analyzeDependencies(projectRoot, jsFiles)
    ]);
    
    // Merge results
    result.unusedImports = unusedImportsAndVars.imports;
    result.unusedVariables = unusedImportsAndVars.variables;
    result.unusedFiles = unusedComponents;
    result.unusedCssSelectors = cssAnalysis;
    result.complexCode = reactAnalysis.complexComponents;
    result.duplicateCode = reactAnalysis.duplicateCode;
    
    // Add dependency analysis results
    // This would populate unused dependencies info
    
    return result;
  } catch (error) {
    console.error('Error during code analysis:', error);
    return result;
  }
};

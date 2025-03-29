
import { AnalysisResult, FileInfo, ImportInfo, VariableInfo, DependencyInfo } from './types';

/**
 * Categorizes issues by severity
 * @param result Analysis result
 * @returns Categorized issues
 */
export const categorizeIssuesBySeverity = (result: AnalysisResult) => {
  const highImpact = [];
  const mediumImpact = [];
  const lowImpact = [];

  // Categorize unused files
  if (result.unusedFiles && result.unusedFiles.length > 0) {
    for (const file of result.unusedFiles) {
      if (file.size > 100) {
        highImpact.push({ type: 'file', item: file });
      } else if (file.size > 10) {
        mediumImpact.push({ type: 'file', item: file });
      } else {
        lowImpact.push({ type: 'file', item: file });
      }
    }
  }

  // Categorize unused imports
  for (const imp of result.unusedImports) {
    lowImpact.push({ type: 'import', item: imp });
  }

  // Categorize unused variables
  for (const variable of result.unusedVariables) {
    lowImpact.push({ type: 'variable', item: variable });
  }

  // Categorize complex code
  for (const complex of result.complexCode) {
    const complexity = complex.cyclomaticComplexity || complex.complexity || 0;
    if (complexity > 20) {
      highImpact.push({ type: 'complexity', item: complex });
    } else if (complexity > 10) {
      mediumImpact.push({ type: 'complexity', item: complex });
    } else {
      lowImpact.push({ type: 'complexity', item: complex });
    }
  }

  // Categorize duplicate code
  for (const dup of result.duplicateCode) {
    if (dup.similarity > 0.9 && (dup.lines || 0) > 30) {
      highImpact.push({ type: 'duplicate', item: dup });
    } else if (dup.similarity > 0.7) {
      mediumImpact.push({ type: 'duplicate', item: dup });
    } else {
      lowImpact.push({ type: 'duplicate', item: dup });
    }
  }

  // Categorize unused dependencies
  for (const dep of result.unusedDependencies) {
    mediumImpact.push({ type: 'dependency', item: dep });
  }

  return {
    highImpact,
    mediumImpact,
    lowImpact,
    totalCount: highImpact.length + mediumImpact.length + lowImpact.length
  };
};

/**
 * Generates a cleanup plan based on analysis
 * @param result Analysis result
 * @returns Cleanup plan steps
 */
export const generateCleanupPlan = (result: AnalysisResult) => {
  const plan = [];

  // Step 1: Zero-risk changes
  if (result.unusedImports.length > 0 || result.unusedVariables.length > 0) {
    plan.push({
      title: "Remove Zero-Risk Items",
      description: "These changes are safe to make with minimal testing required",
      steps: [
        result.unusedImports.length > 0 ? `Remove ${result.unusedImports.length} unused imports` : null,
        result.unusedVariables.length > 0 ? `Remove ${result.unusedVariables.length} unused variables` : null
      ].filter(Boolean)
    });
  }

  // Step 2: Low-risk changes
  if ((result.unusedFiles?.length || 0) > 0 || result.unusedDependencies.length > 0) {
    plan.push({
      title: "Remove Low-Risk Items",
      description: "These changes require some testing to ensure they don't break functionality",
      steps: [
        (result.unusedFiles?.length || 0) > 0 ? `Remove ${result.unusedFiles?.length} unused files` : null,
        result.unusedDependencies.length > 0 ? `Remove ${result.unusedDependencies.length} unused dependencies` : null
      ].filter(Boolean)
    });
  }

  // Step 3: Medium-risk changes
  if (result.deadCode.length > 0) {
    plan.push({
      title: "Remove Dead Code",
      description: "These changes require careful testing as they involve removing functional code",
      steps: [
        `Remove ${result.deadCode.length} dead code paths`
      ]
    });
  }

  // Step 4: High-risk changes
  if (result.duplicateCode.length > 0 || result.complexCode.length > 0) {
    plan.push({
      title: "Refactor Complex and Duplicate Code",
      description: "These changes require significant testing and careful implementation",
      steps: [
        result.duplicateCode.length > 0 ? `Refactor ${result.duplicateCode.length} duplicate code patterns` : null,
        result.complexCode.length > 0 ? `Simplify ${result.complexCode.length} complex functions` : null
      ].filter(Boolean)
    });
  }

  return plan;
};

/**
 * Estimates project impact after cleanup
 * @param result Analysis result
 * @returns Impact metrics
 */
export const estimateCleanupImpact = (result: AnalysisResult) => {
  const beforeMetrics = result.metrics?.beforeCleanup || {
    projectSize: 0,
    fileCount: 0,
    dependencyCount: 0
  };

  const afterMetrics = result.metrics?.afterCleanup || {
    projectSize: 0,
    fileCount: 0,
    dependencyCount: 0
  };

  // Calculate reductions
  const sizeReduction = beforeMetrics.projectSize - afterMetrics.projectSize;
  const fileReduction = beforeMetrics.fileCount - afterMetrics.fileCount;
  const dependencyReduction = beforeMetrics.dependencyCount - afterMetrics.dependencyCount;

  // Calculate percentages
  const sizePercentage = beforeMetrics.projectSize > 0 
    ? Math.round((sizeReduction / beforeMetrics.projectSize) * 100) 
    : 0;
  
  const filePercentage = beforeMetrics.fileCount > 0 
    ? Math.round((fileReduction / beforeMetrics.fileCount) * 100) 
    : 0;
  
  const dependencyPercentage = beforeMetrics.dependencyCount > 0 
    ? Math.round((dependencyReduction / beforeMetrics.dependencyCount) * 100) 
    : 0;

  return {
    sizeReduction,
    fileReduction,
    dependencyReduction,
    sizePercentage,
    filePercentage,
    dependencyPercentage
  };
};

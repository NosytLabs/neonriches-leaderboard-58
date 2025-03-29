
import { AnalysisResult } from './types';
import { formatFileSize } from '@/utils/formatters';

export const generateAnalysisReport = (analysisResult: AnalysisResult): string => {
  const {
    unusedFiles,
    unusedImports,
    unusedVariables,
    unusedFunctions,
    unusedCssSelectors,
    deadCodePaths,
    duplicateCode,
    complexCode,
    unusedDependencies,
    metrics
  } = analysisResult;

  // Calculate metrics
  const totalIssues = 
    unusedFiles.length +
    unusedImports.length +
    unusedVariables.length +
    unusedFunctions.length +
    unusedCssSelectors.length +
    deadCodePaths.length +
    duplicateCode.length +
    complexCode.length +
    unusedDependencies.length;
  
  const sizeSavingsKB = metrics.beforeCleanup.projectSize - metrics.afterCleanup.projectSize;
  const sizeSavingsPercent = ((sizeSavingsKB / metrics.beforeCleanup.projectSize) * 100).toFixed(2);
  const fileSavings = metrics.beforeCleanup.fileCount - metrics.afterCleanup.fileCount;
  const dependencySavings = metrics.beforeCleanup.dependencyCount - metrics.afterCleanup.dependencyCount;

  // Generate report
  let report = `# Code Cleanup Analysis Report\n\n`;
  
  report += `## Summary\n\n`;
  report += `- **Total Issues Found**: ${totalIssues}\n`;
  report += `- **Potential Size Savings**: ${formatFileSize(sizeSavingsKB * 1024)} (${sizeSavingsPercent}%)\n`;
  report += `- **File Count Reduction**: ${fileSavings} files\n`;
  report += `- **Dependency Reduction**: ${dependencySavings} packages\n\n`;
  
  report += `## Project Metrics\n\n`;
  report += `### Before Cleanup\n\n`;
  report += `- Project Size: ${formatFileSize(metrics.beforeCleanup.projectSize * 1024)}\n`;
  report += `- File Count: ${metrics.beforeCleanup.fileCount}\n`;
  report += `- Dependency Count: ${metrics.beforeCleanup.dependencyCount}\n`;
  report += `- Average File Size: ${formatFileSize(metrics.beforeCleanup.averageFileSize * 1024)}\n\n`;
  
  report += `### After Cleanup (Estimated)\n\n`;
  report += `- Project Size: ${formatFileSize(metrics.afterCleanup.projectSize * 1024)}\n`;
  report += `- File Count: ${metrics.afterCleanup.fileCount}\n`;
  report += `- Dependency Count: ${metrics.afterCleanup.dependencyCount}\n`;
  report += `- Average File Size: ${formatFileSize(metrics.afterCleanup.averageFileSize * 1024)}\n\n`;
  
  report += `## Detailed Findings\n\n`;
  
  if (unusedFiles.length > 0) {
    report += `### Unused Files (${unusedFiles.length})\n\n`;
    unusedFiles.forEach(file => {
      report += `- \`${file.filePath}\` - ${formatFileSize(file.size * 1024)} - Impact: ${file.impact}\n`;
    });
    report += `\n`;
  }
  
  if (unusedImports.length > 0) {
    report += `### Unused Imports (${unusedImports.length})\n\n`;
    unusedImports.forEach(imp => {
      report += `- \`${imp.filePath}\` (Line ${imp.line}): \`${imp.import}\` - Impact: ${imp.impact}\n`;
    });
    report += `\n`;
  }
  
  if (unusedVariables.length > 0) {
    report += `### Unused Variables (${unusedVariables.length})\n\n`;
    unusedVariables.forEach(variable => {
      report += `- \`${variable.filePath}\` (Line ${variable.line}): \`${variable.variable}\` - Impact: ${variable.impact}\n`;
    });
    report += `\n`;
  }
  
  if (unusedFunctions.length > 0) {
    report += `### Unused Functions (${unusedFunctions.length})\n\n`;
    unusedFunctions.forEach(func => {
      report += `- \`${func.filePath}\` (Line ${func.line}): \`${func.function}\` - Impact: ${func.impact}\n`;
    });
    report += `\n`;
  }
  
  if (unusedCssSelectors.length > 0) {
    report += `### Unused CSS Selectors (${unusedCssSelectors.length})\n\n`;
    unusedCssSelectors.forEach(selector => {
      report += `- \`${selector.filePath}\` (Line ${selector.line}): \`${selector.selector}\` - Impact: ${selector.impact}\n`;
    });
    report += `\n`;
  }
  
  if (deadCodePaths.length > 0) {
    report += `### Dead Code Paths (${deadCodePaths.length})\n\n`;
    deadCodePaths.forEach(dead => {
      report += `- \`${dead.filePath}\` (Line ${dead.line}) - Impact: ${dead.impact}\n`;
      report += `  \`\`\`javascript\n  ${dead.code}\n  \`\`\`\n`;
    });
    report += `\n`;
  }
  
  if (duplicateCode.length > 0) {
    report += `### Duplicate Code (${duplicateCode.length})\n\n`;
    duplicateCode.forEach((dup, index) => {
      report += `#### Duplicate Pattern ${index + 1} - Impact: ${dup.impact}\n\n`;
      report += `Found in:\n`;
      dup.instances.forEach(instance => {
        report += `- \`${instance.filePath}\` (Line ${instance.line})\n`;
      });
      report += `\n\`\`\`javascript\n${dup.code}\n\`\`\`\n\n`;
    });
  }
  
  if (complexCode.length > 0) {
    report += `### Complex Code (${complexCode.length})\n\n`;
    complexCode.forEach(complex => {
      report += `- \`${complex.filePath}\` (Line ${complex.line}): \`${complex.function}\` - Complexity: ${complex.complexity} - Impact: ${complex.impact}\n`;
    });
    report += `\n`;
  }
  
  if (unusedDependencies.length > 0) {
    report += `### Unused Dependencies (${unusedDependencies.length})\n\n`;
    unusedDependencies.forEach(dep => {
      report += `- \`${dep.name}@${dep.version}\` - Impact: ${dep.impact}\n`;
      if (dep.alternatives && dep.alternatives.length > 0) {
        report += `  - Alternatives: ${dep.alternatives.join(', ')}\n`;
      }
      if (dep.recommendation) {
        report += `  - Recommendation: ${dep.recommendation}\n`;
      }
    });
    report += `\n`;
  }
  
  report += `## Recommended Cleanup Approach\n\n`;
  report += `1. Start with zero-risk changes (unused imports, variables, CSS selectors)\n`;
  report += `2. Move to medium-risk changes (unused files, dependencies, dead code paths)\n`;
  report += `3. Finally address complex issues (code duplication, complexity)\n\n`;
  
  report += `## Verification Steps\n\n`;
  report += `After each change:\n`;
  report += `- Run the full test suite\n`;
  report += `- Test the application manually for the affected areas\n`;
  report += `- Check for any build warnings or errors\n`;
  report += `- Verify that the application still functions correctly\n\n`;
  
  report += `Report generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`;
  
  return report;
};

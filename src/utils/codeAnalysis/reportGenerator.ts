
import { AnalysisResult } from './types';

/**
 * Generates a markdown report for an analysis result
 */
export const generateAnalysisReport = (result: AnalysisResult): string => {
  let report = `# Code Analysis Report\n\n`;
  
  // Unused Files
  report += `## Unused Files\n\n`;
  if (result.unusedFiles.length === 0) {
    report += `No unused files found.\n\n`;
  } else {
    result.unusedFiles.forEach(file => {
      report += `- **${file.filePath}** (${file.size} KB, Impact: ${file.impact})\n`;
    });
    report += `\n`;
  }
  
  // Unused Imports
  report += `## Unused Imports\n\n`;
  if (result.unusedImports.length === 0) {
    report += `No unused imports found.\n\n`;
  } else {
    result.unusedImports.forEach(item => {
      report += `- **${item.filePath}** (Line ${item.line}): \`${item.import}\` (Impact: ${item.impact})\n`;
    });
    report += `\n`;
  }
  
  // Unused Variables
  report += `## Unused Variables\n\n`;
  if (result.unusedVariables.length === 0) {
    report += `No unused variables found.\n\n`;
  } else {
    result.unusedVariables.forEach(item => {
      report += `- **${item.filePath}** (Line ${item.line}): \`${item.variable}\` (Impact: ${item.impact})\n`;
    });
    report += `\n`;
  }
  
  // Unused CSS Selectors
  report += `## Unused CSS Selectors\n\n`;
  if (result.unusedCssSelectors.length === 0) {
    report += `No unused CSS selectors found.\n\n`;
  } else {
    result.unusedCssSelectors.forEach(item => {
      report += `- **${item.filePath}** (Line ${item.line}): \`${item.selector}\` (Impact: ${item.impact})\n`;
    });
    report += `\n`;
  }
  
  // Dead Code Paths
  report += `## Dead Code Paths\n\n`;
  if (result.deadCodePaths.length === 0) {
    report += `No dead code paths found.\n\n`;
  } else {
    result.deadCodePaths.forEach(item => {
      report += `- **${item.filePath}** (Line ${item.line}):\n\`\`\`typescript\n${item.code}\n\`\`\`\n(Impact: ${item.impact})\n\n`;
    });
  }
  
  // Duplicate Code
  report += `## Duplicate Code\n\n`;
  if (result.duplicateCode.length === 0) {
    report += `No duplicate code found.\n\n`;
  } else {
    result.duplicateCode.forEach((item, index) => {
      report += `### Duplicate Code ${index + 1}\n\n`;
      report += `Instances:\n`;
      item.instances.forEach(instance => {
        report += `- **${instance.filePath}** (Line ${instance.line})\n`;
      });
      report += `\nCode:\n\`\`\`typescript\n${item.code}\n\`\`\`\n\n`;
      report += `Impact: ${item.impact}\n\n`;
    });
  }
  
  // Complex Code
  report += `## Complex Code\n\n`;
  if (result.complexCode.length === 0) {
    report += `No overly complex code found.\n\n`;
  } else {
    result.complexCode.forEach(item => {
      report += `- **${item.filePath}** (Line ${item.line}): \`${item.function}\` (Complexity: ${item.complexity}, Impact: ${item.impact})\n`;
    });
    report += `\n`;
  }
  
  // Unused Dependencies
  report += `## Unused Dependencies\n\n`;
  if (result.unusedDependencies.length === 0) {
    report += `No unused dependencies found.\n\n`;
  } else {
    result.unusedDependencies.forEach(item => {
      report += `- **${item.name}** (${item.version})\n`;
      if (item.alternatives && item.alternatives.length > 0) {
        report += `  Alternatives: ${item.alternatives.join(', ')}\n`;
      }
      if (item.recommendation) {
        report += `  Recommendation: ${item.recommendation}\n`;
      }
      report += `  Impact: ${item.impact}\n\n`;
    });
  }
  
  // Metrics
  report += `## Project Metrics\n\n`;
  
  report += `### Before Cleanup\n\n`;
  report += `- Project Size: ${result.metrics.beforeCleanup.projectSize.toLocaleString()} KB\n`;
  report += `- File Count: ${result.metrics.beforeCleanup.fileCount}\n`;
  report += `- Dependency Count: ${result.metrics.beforeCleanup.dependencyCount}\n`;
  report += `- Average File Size: ${result.metrics.beforeCleanup.averageFileSize.toFixed(2)} KB\n`;
  report += `- Largest Files:\n`;
  result.metrics.beforeCleanup.largestFiles.forEach(file => {
    report += `  - ${file.filePath} (${file.size.toLocaleString()} KB)\n`;
  });
  
  report += `\n### After Cleanup\n\n`;
  report += `- Project Size: ${result.metrics.afterCleanup.projectSize.toLocaleString()} KB\n`;
  report += `- File Count: ${result.metrics.afterCleanup.fileCount}\n`;
  report += `- Dependency Count: ${result.metrics.afterCleanup.dependencyCount}\n`;
  report += `- Average File Size: ${result.metrics.afterCleanup.averageFileSize.toFixed(2)} KB\n`;
  report += `- Largest Files:\n`;
  result.metrics.afterCleanup.largestFiles.forEach(file => {
    report += `  - ${file.filePath} (${file.size.toLocaleString()} KB)\n`;
  });
  
  // Potential savings
  const sizeSavings = result.metrics.beforeCleanup.projectSize - result.metrics.afterCleanup.projectSize;
  const fileSavings = result.metrics.beforeCleanup.fileCount - result.metrics.afterCleanup.fileCount;
  const dependencySavings = result.metrics.beforeCleanup.dependencyCount - result.metrics.afterCleanup.dependencyCount;
  
  report += `\n## Potential Savings\n\n`;
  report += `- Size Reduction: ${sizeSavings.toLocaleString()} KB (${((sizeSavings / result.metrics.beforeCleanup.projectSize) * 100).toFixed(1)}%)\n`;
  report += `- File Reduction: ${fileSavings} files (${((fileSavings / result.metrics.beforeCleanup.fileCount) * 100).toFixed(1)}%)\n`;
  report += `- Dependency Reduction: ${dependencySavings} packages (${((dependencySavings / result.metrics.beforeCleanup.dependencyCount) * 100).toFixed(1)}%)\n`;
  
  return report;
};

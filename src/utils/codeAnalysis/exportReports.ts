
import { AnalysisResult } from './types';

/**
 * Export analysis results as markdown
 */
export const exportAnalysisReportAsMarkdown = (result: AnalysisResult): string => {
  const markdown = `# Code Analysis Report

## Summary
- Unused Imports: ${result.unusedImports.length}
- Unused Variables: ${result.unusedVariables.length}
- Unused Files: ${result.unusedFiles.length}
- Unused CSS Selectors: ${result.unusedSelectors.length}
- Dead Code Blocks: ${result.deadCode.length}
- Duplicate Code Instances: ${result.duplicateCode.length}
- Complex Code Functions: ${result.complexCode.length}
- Unused Dependencies: ${result.unusedDependencies.length}

## Project Metrics
- Before Cleanup: ${result.metrics.beforeCleanup.projectSize} KB, ${result.metrics.beforeCleanup.fileCount} files, ${result.metrics.beforeCleanup.dependencyCount} dependencies
- After Cleanup: ${result.metrics.afterCleanup.projectSize} KB, ${result.metrics.afterCleanup.fileCount} files, ${result.metrics.afterCleanup.dependencyCount} dependencies
- **Size Reduction**: ${result.metrics.beforeCleanup.projectSize - result.metrics.afterCleanup.projectSize} KB (${((result.metrics.beforeCleanup.projectSize - result.metrics.afterCleanup.projectSize) / result.metrics.beforeCleanup.projectSize * 100).toFixed(1)}%)

## Unused Imports
${result.unusedImports.map(item => `- \`${item.name}\` from \`${item.path}\` in ${item.file}:${item.line}`).join('\n')}

## Unused Variables
${result.unusedVariables.map(item => `- \`${item.name}\` (${item.type}) in ${item.file}:${item.line}`).join('\n')}

## Unused Files
${result.unusedFiles.map(item => `- ${item.path} (${item.size} KB)`).join('\n')}

## Unused CSS Selectors
${result.unusedSelectors.map(item => `- \`${item.name}\` in ${item.file}:${item.line}`).join('\n')}

## Dead Code
${result.deadCode.map(item => `- ${item.description} in ${item.file}:${item.line}`).join('\n')}

## Duplicate Code
${result.duplicateCode.map(item => `- ${item.similarity.toFixed(1)}% similarity across ${item.files.length} files (${item.lines} lines):
  ${item.files.map(file => `  - ${file.path}`).join('\n')}`).join('\n')}

## Complex Code
${result.complexCode.map(item => `- \`${item.name}\` in ${item.file}:${item.line} (complexity: ${item.complexity})`).join('\n')}

## Unused Dependencies
${result.unusedDependencies.map(item => `- ${item}`).join('\n')}
`;

  return markdown;
};

/**
 * Save report to file (for browser use)
 */
export const saveReportToFile = (content: string, filename: string): void => {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};


import { AnalysisResult } from './types';

/**
 * Generates a formatted markdown report based on the analysis results
 */
export const generateAnalysisReport = (analysis: AnalysisResult): string => {
  const {
    unusedImports = [],
    unusedVariables = [],
    unusedFiles = [],
    unusedSelectors = [],
    unusedDependencies = [],
    deadCode = [],
    duplicateCode = [],
    complexCode = []
  } = analysis;

  return `# Code Analysis Report

## Overview
${getTotalIssuesCount(analysis)} issues were found in the codebase.

## Unused Code Issues
- ${unusedImports.length} unused imports
- ${unusedVariables.length} unused variables
- ${Array.isArray(unusedFiles) ? unusedFiles.length : 0} unused files
- ${unusedSelectors?.length || 0} unused CSS selectors
- ${unusedDependencies?.length || 0} unused dependencies
- ${deadCode?.length || 0} dead code paths

## Code Quality Issues
- ${duplicateCode.length} instances of duplicate code
- ${complexCode.length} complex functions

## Detailed Findings

### Unused Imports
${unusedImports.map(item => `- \`${item.name}\` from \`${item.path}\` in \`${item.file}:${item.line}\``).join('\n')}

### Unused Variables
${unusedVariables.map(item => `- \`${item.name}\` (${item.type}) in \`${item.file}:${item.line}\``).join('\n')}

### Unused Files
${Array.isArray(unusedFiles) ? unusedFiles.map(file => {
    const path = typeof file === 'string' ? file : file.path;
    const size = typeof file === 'string' ? '?' : `${file.size}KB`;
    return `- \`${path}\` (${size})`;
  }).join('\n') : 'No unused files found'}

### Complex Code
${complexCode.map(item => `- \`${item.name}\` in \`${item.file}:${item.line}\` (complexity: ${item.complexity})`).join('\n')}

### Duplicate Code
${duplicateCode.map(item => `- Pattern #${item.id} (${Math.round(item.similarity * 100)}% similarity, ${item.lines} lines)
  Found in: ${item.files.map(f => `\`${f.path}\``).join(', ')}`).join('\n')}

## Recommendations
1. Remove unused imports and variables for cleaner code.
2. Delete or archive unused files to reduce project size.
3. Refactor complex functions to improve maintainability.
4. Extract duplicate code into shared functions or components.
5. Review and clean up unused dependencies to reduce bundle size.
`;
};

/**
 * Export the analysis report as a markdown file
 */
export const exportAnalysisReportAsMarkdown = (analysis: AnalysisResult): string => {
  return generateAnalysisReport(analysis);
};

/**
 * Save the report to a file
 */
export const saveReportToFile = (content: string, filename: string): void => {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  
  URL.revokeObjectURL(url);
};

/**
 * Count total issues found
 */
const getTotalIssuesCount = (analysis: AnalysisResult): number => {
  const {
    unusedImports = [],
    unusedVariables = [],
    unusedFiles = [],
    unusedSelectors = [],
    unusedDependencies = [],
    deadCode = [],
    duplicateCode = [],
    complexCode = []
  } = analysis;

  return (
    unusedImports.length +
    unusedVariables.length +
    (Array.isArray(unusedFiles) ? unusedFiles.length : 0) +
    (unusedSelectors?.length || 0) +
    (unusedDependencies?.length || 0) +
    (deadCode?.length || 0) +
    duplicateCode.length +
    complexCode.length
  );
};

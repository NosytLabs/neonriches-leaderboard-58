
import { AnalysisResult } from './types';

/**
 * Generate a full analysis report in markdown format
 * @param result The analysis result
 * @returns A markdown string of the full report
 */
export const generateAnalysisReport = (result: AnalysisResult): string => {
  const report = [];

  // Title
  report.push('# Code Analysis Report\n');
  report.push('## Overview\n');

  // Metrics
  if (result.metrics) {
    report.push('### Project Metrics\n');
    report.push('| Metric | Before Cleanup | After Cleanup | Reduction |\n');
    report.push('| ------ | -------------- | ------------- | --------- |\n');
    
    const { beforeCleanup, afterCleanup } = result.metrics;
    const projectSizeReduction = beforeCleanup.projectSize - afterCleanup.projectSize;
    const fileCountReduction = beforeCleanup.fileCount - afterCleanup.fileCount;
    const dependencyReduction = beforeCleanup.dependencyCount - afterCleanup.dependencyCount;
    
    report.push(`| Project Size | ${formatSize(beforeCleanup.projectSize * 1024)} | ${formatSize(afterCleanup.projectSize * 1024)} | ${formatSize(projectSizeReduction * 1024)} (${calculatePercentage(projectSizeReduction, beforeCleanup.projectSize)}%) |\n`);
    report.push(`| File Count | ${beforeCleanup.fileCount} | ${afterCleanup.fileCount} | ${fileCountReduction} (${calculatePercentage(fileCountReduction, beforeCleanup.fileCount)}%) |\n`);
    report.push(`| Dependencies | ${beforeCleanup.dependencyCount} | ${afterCleanup.dependencyCount} | ${dependencyReduction} (${calculatePercentage(dependencyReduction, beforeCleanup.dependencyCount)}%) |\n\n`);
  }

  // Summary of issues
  report.push('### Issues Summary\n');
  report.push('| Issue Type | Count |\n');
  report.push('| ---------- | ----- |\n');
  report.push(`| Unused Files | ${result.unusedFiles?.length || 0} |\n`);
  report.push(`| Unused Imports | ${result.unusedImports.length} |\n`);
  report.push(`| Unused Variables | ${result.unusedVariables.length} |\n`);
  report.push(`| Unused CSS Selectors | ${result.unusedSelectors?.length || 0} |\n`);
  report.push(`| Unused Dependencies | ${result.unusedDependencies?.length || 0} |\n`);
  report.push(`| Dead Code | ${result.deadCode?.length || 0} |\n`);
  report.push(`| Duplicate Code | ${result.duplicateCode.length} |\n`);
  report.push(`| Complex Code | ${result.complexCode.length} |\n\n`);

  // Detailed sections
  if (result.unusedFiles && result.unusedFiles.length > 0) {
    report.push('## Unused Files\n');
    report.push('| File Path | Size |\n');
    report.push('| --------- | ---- |\n');
    
    result.unusedFiles.forEach(file => {
      report.push(`| ${file.path} | ${file.size} KB |\n`);
    });
    
    report.push('\n');
  }

  if (result.unusedImports.length > 0) {
    report.push('## Unused Imports\n');
    report.push('| Import | From | File | Line |\n');
    report.push('| ------ | ---- | ---- | ---- |\n');
    
    result.unusedImports.forEach(imp => {
      report.push(`| \`${imp.name}\` | ${imp.path || ''} | ${imp.file} | ${imp.line} |\n`);
    });
    
    report.push('\n');
  }

  if (result.unusedVariables.length > 0) {
    report.push('## Unused Variables\n');
    report.push('| Variable | Type | File | Line |\n');
    report.push('| -------- | ---- | ---- | ---- |\n');
    
    result.unusedVariables.forEach(variable => {
      report.push(`| \`${variable.name}\` | ${variable.type || 'unknown'} | ${variable.file} | ${variable.line} |\n`);
    });
    
    report.push('\n');
  }

  if (result.deadCode && result.deadCode.length > 0) {
    report.push('## Dead Code\n');
    report.push('| Description | File | Line |\n');
    report.push('| ----------- | ---- | ---- |\n');
    
    result.deadCode.forEach(code => {
      report.push(`| ${code.description} | ${code.file} | ${code.line} |\n`);
    });
    
    report.push('\n');
  }

  if (result.duplicateCode.length > 0) {
    report.push('## Duplicate Code\n');
    
    result.duplicateCode.forEach((duplication, index) => {
      report.push(`### Duplication #${index + 1}\n`);
      report.push(`- **Similarity:** ${Math.round(duplication.similarity * 100)}%\n`);
      report.push(`- **Lines Affected:** ${duplication.lines}\n`);
      report.push('- **Files:**\n');
      
      duplication.files.forEach(file => {
        report.push(`  - ${file.path}\n`);
      });
      
      if (duplication.recommendation) {
        report.push(`- **Recommendation:** ${duplication.recommendation}\n`);
      }
      
      report.push('\n');
    });
  }

  if (result.complexCode.length > 0) {
    report.push('## Complex Code\n');
    report.push('| Function | File | Complexity | Line |\n');
    report.push('| -------- | ---- | ---------- | ---- |\n');
    
    result.complexCode.forEach(complex => {
      report.push(`| \`${complex.name}\` | ${complex.file} | ${complex.complexity} | ${complex.line} |\n`);
    });
    
    report.push('\n');
  }

  if (result.performanceIssues && result.performanceIssues.length > 0) {
    report.push('## Performance Issues\n');
    
    result.performanceIssues.forEach((issue, index) => {
      report.push(`### Issue #${index + 1}: ${issue.description}\n`);
      report.push(`- **File:** ${issue.file}:${issue.lineNumber}\n`);
      report.push(`- **Severity:** ${issue.severity}\n`);
      report.push(`- **Recommendation:** ${issue.recommendation}\n\n`);
    });
  }

  // Recommendations section
  report.push('## Recommendations\n');
  
  // Zero-risk changes
  if (result.unusedImports.length > 0 || result.unusedVariables.length > 0) {
    report.push('### 1. Zero-Risk Changes\n');
    report.push('These changes are likely safe to make without affecting functionality:\n');
    
    if (result.unusedImports.length > 0) {
      report.push(`- Remove ${result.unusedImports.length} unused imports\n`);
    }
    
    if (result.unusedVariables.length > 0) {
      report.push(`- Remove ${result.unusedVariables.length} unused variables\n`);
    }
    
    report.push('\n');
  }
  
  // Low-risk changes
  if ((result.unusedFiles?.length || 0) > 0 || (result.unusedDependencies?.length || 0) > 0) {
    report.push('### 2. Low-Risk Changes\n');
    report.push('These changes require some testing but are unlikely to break functionality:\n');
    
    if (result.unusedFiles && result.unusedFiles.length > 0) {
      report.push(`- Remove ${result.unusedFiles.length} unused files (potential savings: ${formatSize(result.unusedFiles.reduce((total, file) => total + file.size * 1024, 0))})\n`);
    }
    
    if (result.unusedDependencies && result.unusedDependencies.length > 0) {
      report.push(`- Remove ${result.unusedDependencies.length} unused dependencies\n`);
    }
    
    report.push('\n');
  }
  
  // Medium-risk changes
  if (result.deadCode && result.deadCode.length > 0) {
    report.push('### 3. Medium-Risk Changes\n');
    report.push('These changes require careful testing:\n');
    report.push(`- Remove ${result.deadCode.length} dead code paths\n\n`);
  }
  
  // High-risk changes
  if (result.duplicateCode.length > 0 || result.complexCode.length > 0) {
    report.push('### 4. High-Risk Changes\n');
    report.push('These changes require significant refactoring and thorough testing:\n');
    
    if (result.duplicateCode.length > 0) {
      report.push(`- Refactor ${result.duplicateCode.length} duplicate code patterns into shared utility functions\n`);
    }
    
    if (result.complexCode.length > 0) {
      const highComplexity = result.complexCode.filter(c => c.complexity > 15).length;
      report.push(`- Simplify ${highComplexity} high-complexity functions (complexity > 15)\n`);
    }
  }

  return report.join('');
};

/**
 * Export analysis report as markdown
 * @param result Analysis result
 * @returns Markdown content
 */
export const exportAnalysisReportAsMarkdown = (result: AnalysisResult): string => {
  return generateAnalysisReport(result);
};

/**
 * Save the report to a file
 * @param content Report content
 * @param filename Filename to save as
 */
export const saveReportToFile = (content: string, filename: string): void => {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  
  // Cleanup
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Helper functions

/**
 * Format file size in bytes to a human-readable string
 * @param bytes File size in bytes
 * @returns Formatted file size
 */
const formatSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return Math.round(bytes / Math.pow(1024, i)) + ' ' + units[i];
};

/**
 * Calculate percentage
 * @param part The part value
 * @param whole The whole value
 * @returns Formatted percentage
 */
const calculatePercentage = (part: number, whole: number): string => {
  if (whole === 0) return '0';
  return Math.round((part / whole) * 100).toString();
};


import { AnalysisResult } from './types';

/**
 * Creates a markdown version of the analysis report
 */
export const exportAnalysisReportAsMarkdown = (result: AnalysisResult): string => {
  const {
    unusedImports = [],
    unusedVariables = [],
    unusedFiles = [],
    unusedSelectors = [],
    deadCode = [],
    duplicateCode = [],
    complexCode = [],
    unusedDependencies = [],
    performanceIssues = [],
    metrics
  } = result;
  
  let report = `# Code Analysis Report\n\n`;
  report += `## Summary\n\n`;
  
  const totalIssues = unusedImports.length + 
    unusedVariables.length + 
    (unusedFiles?.length || 0) + 
    (unusedSelectors?.length || 0) + 
    (deadCode?.length || 0) + 
    duplicateCode.length + 
    complexCode.length +
    (unusedDependencies?.length || 0) +
    (performanceIssues?.length || 0);
  
  report += `- **Total Issues Found:** ${totalIssues}\n`;
  
  if (metrics?.beforeCleanup && metrics?.afterCleanup) {
    const currentSize = metrics.beforeCleanup.projectSize;
    const potentialSize = metrics.afterCleanup.projectSize;
    const savedSize = currentSize - potentialSize;
    const sizePercentage = (savedSize / currentSize * 100).toFixed(1);
    
    report += `- **Current Project Size:** ${formatFileSize(currentSize * 1024)}\n`;
    report += `- **Potential Size After Cleanup:** ${formatFileSize(potentialSize * 1024)}\n`;
    report += `- **Potential Size Reduction:** ${formatFileSize(savedSize * 1024)} (${sizePercentage}%)\n`;
  }
  
  report += `\n## Unused Imports (${unusedImports.length})\n\n`;
  
  if (unusedImports.length === 0) {
    report += `No unused imports detected.\n\n`;
  } else {
    report += `| Import | From | File | Line |\n`;
    report += `| ------ | ---- | ---- | ---- |\n`;
    
    for (const item of unusedImports) {
      report += `| \`${item.name}\` | ${item.path || ''} | ${item.file} | ${item.line} |\n`;
    }
    
    report += `\n`;
  }
  
  report += `\n## Unused Variables (${unusedVariables.length})\n\n`;
  
  if (unusedVariables.length === 0) {
    report += `No unused variables detected.\n\n`;
  } else {
    report += `| Variable | Type | File | Line |\n`;
    report += `| -------- | ---- | ---- | ---- |\n`;
    
    for (const item of unusedVariables) {
      report += `| \`${item.name}\` | ${item.type || ''} | ${item.file} | ${item.line} |\n`;
    }
    
    report += `\n`;
  }
  
  if (unusedFiles && unusedFiles.length > 0) {
    report += `\n## Unused Files (${unusedFiles.length})\n\n`;
    report += `| File Path | Size |\n`;
    report += `| --------- | ---- |\n`;
    
    for (const item of unusedFiles) {
      report += `| ${item.path} | ${item.size ? `${item.size} KB` : 'Unknown'} |\n`;
    }
    
    report += `\n`;
  }
  
  if (unusedSelectors && unusedSelectors.length > 0) {
    report += `\n## Unused CSS Selectors (${unusedSelectors.length})\n\n`;
    report += `| Selector | File | Line |\n`;
    report += `| -------- | ---- | ---- |\n`;
    
    for (const item of unusedSelectors) {
      report += `| \`${item.name}\` | ${item.file} | ${item.line} |\n`;
    }
    
    report += `\n`;
  }
  
  if (deadCode && deadCode.length > 0) {
    report += `\n## Dead Code Paths (${deadCode.length})\n\n`;
    report += `| Description | File | Line |\n`;
    report += `| ----------- | ---- | ---- |\n`;
    
    for (const item of deadCode) {
      report += `| ${item.description} | ${item.file} | ${item.line} |\n`;
    }
    
    report += `\n`;
  }
  
  report += `\n## Duplicate Code (${duplicateCode.length})\n\n`;
  
  if (duplicateCode.length === 0) {
    report += `No duplicate code patterns detected.\n\n`;
  } else {
    for (const item of duplicateCode) {
      report += `### Duplicate Pattern #${item.id}\n\n`;
      report += `- **Similarity:** ${Math.round(item.similarity * 100)}%\n`;
      report += `- **Lines of Code:** ${item.lines || item.linesCount || 'Unknown'}\n`;
      report += `- **Found in:**\n`;
      
      for (const file of item.files) {
        const lineInfo = file.lineStart && file.lineEnd ? ` (lines ${file.lineStart}-${file.lineEnd})` : '';
        report += `  - ${file.path}${lineInfo}\n`;
      }
      
      if (item.recommendation) {
        report += `- **Recommendation:** ${item.recommendation}\n`;
      }
      
      report += `\n`;
    }
  }
  
  report += `\n## Complex Code (${complexCode.length})\n\n`;
  
  if (complexCode.length === 0) {
    report += `No overly complex code detected.\n\n`;
  } else {
    for (const item of complexCode) {
      const complexityValue = item.cyclomaticComplexity || item.complexity;
      const complexityCategory = 
        complexityValue > 20 ? 'High' : 
        complexityValue > 10 ? 'Medium' : 'Low';
        
      report += `### ${item.name || item.function || 'Unnamed function'}\n\n`;
      report += `- **Location:** ${item.file}:${item.line}\n`;
      report += `- **Complexity:** ${complexityValue} (${complexityCategory})\n`;
      
      if (item.explanation) {
        report += `- **Issue:** ${item.explanation}\n`;
      }
      
      const recommendation = getComplexityRecommendation(complexityValue);
      report += `- **Recommendation:** ${recommendation}\n\n`;
    }
  }
  
  if (unusedDependencies && unusedDependencies.length > 0) {
    report += `\n## Unused Dependencies (${unusedDependencies.length})\n\n`;
    report += `| Package Name |\n`;
    report += `| ------------ |\n`;
    
    for (const dep of unusedDependencies) {
      report += `| ${dep} |\n`;
    }
    
    report += `\n`;
  }
  
  if (performanceIssues && performanceIssues.length > 0) {
    report += `\n## Performance Issues (${performanceIssues.length})\n\n`;
    
    for (const issue of performanceIssues) {
      report += `### ${issue.description}\n\n`;
      report += `- **Location:** ${issue.file}:${issue.lineNumber}\n`;
      report += `- **Severity:** ${issue.severity}\n`;
      report += `- **Recommendation:** ${issue.recommendation}\n\n`;
    }
  }
  
  if (metrics?.beforeCleanup && metrics?.afterCleanup) {
    report += `\n## Cleanup Impact\n\n`;
    report += `| Metric | Before | After | Savings | % |\n`;
    report += `| ------ | ------ | ----- | ------- | - |\n`;
    
    const projectSizeBefore = formatFileSize(metrics.beforeCleanup.projectSize * 1024);
    const projectSizeAfter = formatFileSize(metrics.afterCleanup.projectSize * 1024);
    const projectSizeSavings = formatFileSize((metrics.beforeCleanup.projectSize - metrics.afterCleanup.projectSize) * 1024);
    const projectSizePercentage = ((metrics.beforeCleanup.projectSize - metrics.afterCleanup.projectSize) / metrics.beforeCleanup.projectSize * 100).toFixed(1);
    
    report += `| Project Size | ${projectSizeBefore} | ${projectSizeAfter} | ${projectSizeSavings} | ${projectSizePercentage}% |\n`;
    report += `| File Count | ${metrics.beforeCleanup.fileCount} | ${metrics.afterCleanup.fileCount} | ${metrics.beforeCleanup.fileCount - metrics.afterCleanup.fileCount} | ${((metrics.beforeCleanup.fileCount - metrics.afterCleanup.fileCount) / metrics.beforeCleanup.fileCount * 100).toFixed(1)}% |\n`;
    report += `| Dependencies | ${metrics.beforeCleanup.dependencyCount} | ${metrics.afterCleanup.dependencyCount} | ${metrics.beforeCleanup.dependencyCount - metrics.afterCleanup.dependencyCount} | ${((metrics.beforeCleanup.dependencyCount - metrics.afterCleanup.dependencyCount) / metrics.beforeCleanup.dependencyCount * 100).toFixed(1)}% |\n`;
  }
  
  return report;
};

/**
 * Saves the report to a file that can be downloaded
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
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
};

// Helper functions
function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  else if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  else if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  else return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

function getComplexityRecommendation(complexity: number): string {
  if (complexity > 20) {
    return 'Split this function into multiple smaller functions with clear single responsibilities. Consider using design patterns to simplify the logic structure.';
  } else if (complexity > 10) {
    return 'Consider refactoring to reduce conditional logic and extract helper methods for clarity. Look for repeated logic that could be extracted.';
  } else {
    return 'The complexity is acceptable, but monitor for future increases. Add good documentation to explain the logic.';
  }
}

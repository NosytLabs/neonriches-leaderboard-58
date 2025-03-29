
import { AnalysisResult, FileInfo } from './types';
import { formatFileSize } from '@/utils/formatters';

/**
 * Generates a comprehensive analysis report in markdown format
 * @param result Analysis result
 * @returns Markdown formatted report
 */
export const generateAnalysisReport = (result: AnalysisResult): string => {
  const {
    unusedImports,
    unusedVariables,
    unusedFiles,
    unusedSelectors,
    unusedDependencies,
    deadCode,
    deadCodePaths,
    duplicateCode,
    complexCode,
    performanceIssues,
    metrics
  } = result;

  // Calculate totals
  const totalIssues = 
    (unusedImports?.length || 0) +
    (unusedVariables?.length || 0) +
    (unusedFiles?.length || 0) +
    (unusedSelectors?.length || 0) +
    (unusedDependencies?.length || 0) +
    (deadCode?.length || 0) +
    (duplicateCode?.length || 0) +
    (complexCode?.length || 0) +
    (performanceIssues?.length || 0);

  // Generate report header
  let report = `# Code Analysis Report\n\n`;
  
  // Summary section
  report += `## Summary\n\n`;
  report += `Total issues found: **${totalIssues}**\n\n`;
  
  if (metrics) {
    report += `### Project Metrics\n\n`;
    report += `- Current project size: ${formatFileSize((metrics.projectSize || 0) * 1024)}\n`;
    report += `- Number of files: ${metrics.fileCount || 0}\n`;
    report += `- Dependencies: ${metrics.dependencyCount || 0}\n`;
    
    if (metrics.beforeCleanup && metrics.afterCleanup) {
      const sizeReduction = metrics.beforeCleanup.projectSize - metrics.afterCleanup.projectSize;
      const percentReduction = ((sizeReduction / metrics.beforeCleanup.projectSize) * 100).toFixed(1);
      
      report += `- Potential size reduction: ${formatFileSize(sizeReduction * 1024)} (${percentReduction}%)\n`;
      report += `- Files that could be removed: ${metrics.beforeCleanup.fileCount - metrics.afterCleanup.fileCount}\n`;
      report += `- Dependencies that could be removed: ${metrics.beforeCleanup.dependencyCount - metrics.afterCleanup.dependencyCount}\n`;
    }
    
    report += `\n`;
  }
  
  // Issue breakdown
  report += `### Issue Breakdown\n\n`;
  report += `- Unused imports: ${unusedImports?.length || 0}\n`;
  report += `- Unused variables: ${unusedVariables?.length || 0}\n`;
  report += `- Unused files: ${unusedFiles?.length || 0}\n`;
  report += `- Unused CSS selectors: ${unusedSelectors?.length || 0}\n`;
  report += `- Unused dependencies: ${unusedDependencies?.length || 0}\n`;
  report += `- Dead code paths: ${(deadCode?.length || 0) + (deadCodePaths?.length || 0)}\n`;
  report += `- Duplicate code: ${duplicateCode?.length || 0}\n`;
  report += `- Complex code: ${complexCode?.length || 0}\n`;
  report += `- Performance issues: ${performanceIssues?.length || 0}\n\n`;
  
  // Detailed sections
  if (unusedFiles && unusedFiles.length > 0) {
    report += `## Unused Files\n\n`;
    unusedFiles.forEach(file => {
      report += `- \`${file}\`\n`;
    });
    report += `\n`;
  }
  
  if (unusedImports && unusedImports.length > 0) {
    report += `## Unused Imports\n\n`;
    report += `| File | Import | Line |\n`;
    report += `| --- | --- | --- |\n`;
    unusedImports.forEach(item => {
      report += `| \`${item.file || item.path}\` | \`${item.name}\` | ${item.line || 'N/A'} |\n`;
    });
    report += `\n`;
  }
  
  if (unusedVariables && unusedVariables.length > 0) {
    report += `## Unused Variables\n\n`;
    report += `| File | Variable | Line |\n`;
    report += `| --- | --- | --- |\n`;
    unusedVariables.forEach(item => {
      report += `| \`${item.file}\` | \`${item.name}\` | ${item.line || 'N/A'} |\n`;
    });
    report += `\n`;
  }
  
  if (deadCode && deadCode.length > 0) {
    report += `## Dead Code Paths\n\n`;
    report += `| File | Description | Line |\n`;
    report += `| --- | --- | --- |\n`;
    deadCode.forEach(item => {
      report += `| \`${item.file || item.path || ''}\` | ${item.description} | ${item.line || 'N/A'} |\n`;
    });
    report += `\n`;
  }
  
  if (duplicateCode && duplicateCode.length > 0) {
    report += `## Duplicate Code\n\n`;
    duplicateCode.forEach((item, index) => {
      report += `### Duplicate Pattern #${index + 1}\n\n`;
      report += `- Similarity: ${Math.round(item.similarity * 100)}%\n`;
      report += `- Lines: ${item.lines || item.linesCount || 'N/A'}\n`;
      report += `- Files affected: ${item.files.length}\n\n`;
      
      report += `**Files:**\n\n`;
      item.files.forEach(file => {
        report += `- \`${file.path}\`\n`;
      });
      
      if (item.codeSnippet || item.snippet || item.code) {
        report += `\n**Code snippet:**\n\n`;
        report += "```typescript\n";
        report += item.codeSnippet || item.snippet || item.code;
        report += "\n```\n\n";
      }
      
      if (item.recommendation) {
        report += `**Recommendation:** ${item.recommendation}\n\n`;
      }
    });
  }
  
  if (complexCode && complexCode.length > 0) {
    report += `## Complex Code\n\n`;
    report += `| File | Function | Complexity | Line | Issues |\n`;
    report += `| --- | --- | --- | --- | --- |\n`;
    complexCode.forEach(item => {
      const complexity = item.cyclomaticComplexity || item.complexity;
      const functionName = item.function || item.name;
      const issues = item.issues ? item.issues.join('; ') : '';
      
      report += `| \`${item.file}\` | \`${functionName}\` | ${complexity} | ${item.line || 'N/A'} | ${issues} |\n`;
    });
    report += `\n`;
    
    // Add explanations for complex code
    report += `### Complexity Explanations\n\n`;
    complexCode.forEach((item, index) => {
      if (item.explanation) {
        const functionName = item.function || item.name;
        report += `#### ${index + 1}. ${functionName}\n\n`;
        report += `${item.explanation}\n\n`;
      }
    });
  }
  
  if (performanceIssues && performanceIssues.length > 0) {
    report += `## Performance Issues\n\n`;
    report += `| File | Description | Line | Severity |\n`;
    report += `| --- | --- | --- | --- |\n`;
    performanceIssues.forEach(item => {
      report += `| \`${item.file}\` | ${item.description} | ${item.lineNumber} | ${item.severity} |\n`;
    });
    report += `\n`;
    
    // Add recommendations for performance issues
    report += `### Performance Recommendations\n\n`;
    performanceIssues.forEach((item, index) => {
      report += `#### ${index + 1}. ${item.description}\n\n`;
      report += `**File:** \`${item.file}\`\n\n`;
      report += `**Recommendation:** ${item.recommendation}\n\n`;
    });
  }
  
  // Recommendations section
  report += `## Cleanup Recommendations\n\n`;
  report += `### Recommended Cleanup Order\n\n`;
  report += `1. **Low-Risk Changes**\n`;
  report += `   - Unused imports\n`;
  report += `   - Unused variables\n`;
  report += `   - Unused CSS selectors\n\n`;
  
  report += `2. **Medium-Risk Changes**\n`;
  report += `   - Unused dependencies\n`;
  report += `   - Dead code paths\n`;
  report += `   - Unused files\n\n`;
  
  report += `3. **Higher-Risk Changes**\n`;
  report += `   - Refactoring duplicate code\n`;
  report += `   - Addressing complex functions\n`;
  report += `   - Fixing performance issues\n\n`;
  
  report += `### Verification Steps\n\n`;
  report += `After each set of changes:\n\n`;
  report += `1. Run all tests\n`;
  report += `2. Check application functionality\n`;
  report += `3. Verify build process completes successfully\n`;
  report += `4. Look for any regressions in performance or functionality\n\n`;
  
  return report;
};

/**
 * Formats a file size in a human-readable format
 * @param size Size in bytes
 * @returns Formatted string
 */
export const formatSize = (size: number): string => {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
  return `${(size / (1024 * 1024)).toFixed(2)} MB`;
};

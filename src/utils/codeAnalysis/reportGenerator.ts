import { AnalysisResult } from './types';

/**
 * Generates a markdown report from analysis results
 * @param result Analysis results
 * @returns Markdown formatted report
 */
export const generateAnalysisReport = (result: AnalysisResult): string => {
  let report = `# Code Analysis Report\n\n`;

  // Unused Files
  report += `## Unused Files (${result.unusedFiles.length})\n\n`;
  if (result.unusedFiles.length === 0) {
    report += `No unused files detected.\n\n`;
  } else {
    report += `| File | Size | Impact |\n`;
    report += `|------|------|--------|\n`;
    result.unusedFiles.forEach(file => {
      report += `| ${file.path || file.filePath} | ${Math.round(file.size / 1024)} KB | ${file.impact || 'Medium'} |\n`;
    });
    report += `\n`;
  }

  // Unused Imports
  report += `## Unused Imports (${result.unusedImports.length})\n\n`;
  if (result.unusedImports.length === 0) {
    report += `No unused imports detected.\n\n`;
  } else {
    report += `| File | Line | Import | Impact |\n`;
    report += `|------|------|--------|--------|\n`;
    result.unusedImports.forEach(imp => {
      report += `| ${imp.file || imp.filePath} | ${imp.line || 'N/A'} | ${imp.name || imp.import} | ${imp.impact || 'Low'} |\n`;
    });
    report += `\n`;
  }

  // Unused Variables
  report += `## Unused Variables (${result.unusedVariables.length})\n\n`;
  if (result.unusedVariables.length === 0) {
    report += `No unused variables detected.\n\n`;
  } else {
    report += `| File | Line | Variable | Impact |\n`;
    report += `|------|------|----------|--------|\n`;
    result.unusedVariables.forEach(variable => {
      report += `| ${variable.file || variable.filePath} | ${variable.line} | ${variable.name || variable.variable} | ${variable.impact || 'Low'} |\n`;
    });
    report += `\n`;
  }

  // Unused CSS Selectors
  report += `## Unused CSS Selectors (${result.unusedCssSelectors.length})\n\n`;
  if (result.unusedCssSelectors.length === 0) {
    report += `No unused CSS selectors detected.\n\n`;
  } else {
    report += `| File | Line | Selector | Impact |\n`;
    report += `|------|------|----------|--------|\n`;
    result.unusedCssSelectors.forEach(selector => {
      report += `| ${selector.file || selector.filePath} | ${selector.line} | \`${selector.selector}\` | ${selector.impact || 'Low'} |\n`;
    });
    report += `\n`;
  }

  // Dead Code Paths
  const deadCodePaths = result.deadCodePaths || result.deadCode;
  report += `## Dead Code (${deadCodePaths.length})\n\n`;
  if (deadCodePaths.length === 0) {
    report += `No dead code detected.\n\n`;
  } else {
    report += `| File | Function | Line |\n`;
    report += `|------|----------|------|\n`;
    deadCodePaths.forEach(deadCode => {
      report += `| ${deadCode.file} | ${deadCode.function} | ${deadCode.line} |\n`;
    });
    report += `\n`;
  }

  // Duplicate Code
  report += `## Duplicate Code (${result.duplicateCode.length})\n\n`;
  if (result.duplicateCode.length === 0) {
    report += `No duplicate code detected.\n\n`;
  } else {
    result.duplicateCode.forEach((dup, index) => {
      const occurrences = dup.occurrences || dup.instances || [];
      report += `### Pattern ${index + 1}: ${dup.pattern}\n\n`;
      report += `Similarity: ${Math.round(dup.similarity * 100)}%\n\n`;
      report += `**Found in:**\n`;
      if (Array.isArray(occurrences)) {
        occurrences.forEach((occ: any) => {
          // Format occurrence data
        });
      } else if (dup.code) {
        report += `\`\`\`typescript\n${dup.code}\n\`\`\`\n`;
      }
      report += `\n`;
    });
  }

  // Complex Code
  report += `## Complex Code (${result.complexCode.length})\n\n`;
  if (result.complexCode.length === 0) {
    report += `No overly complex code detected.\n\n`;
  } else {
    report += `| File | Line | Function | Complexity |\n`;
    report += `|------|------|----------|------------|\n`;
    result.complexCode.forEach(complex => {
      report += `| ${complex.file || complex.filePath} | ${complex.line || 'N/A'} | ${complex.function} | ${complex.cyclomaticComplexity || complex.complexity} |\n`;
    });
    report += `\n`;
  }

  // Unused Dependencies
  report += `## Unused Dependencies (${result.unusedDependencies.length})\n\n`;
  if (result.unusedDependencies.length === 0) {
    report += `No unused dependencies detected.\n\n`;
  } else {
    report += `| Package | Version | Alternatives | Recommendation |\n`;
    report += `|---------|---------|--------------|----------------|\n`;
    result.unusedDependencies.forEach(dep => {
      report += `| ${dep.name} | ${dep.version} | ${dep.alternatives.join(', ')} | ${dep.recommendation || 'Consider removal'} |\n`;
    });
    report += `\n${result.unusedDependencies.map(dep => dep.impact ? `- ${dep.name}: ${dep.impact} impact` : '').filter(Boolean).join('\n')}\n\n`;
  }

  // Project Metrics
  if (result.metrics) {
    report += `## Project Metrics\n\n`;
    report += `### Current\n\n`;
    report += `- Total Size: ${result.metrics.beforeCleanup.projectSize || result.metrics.projectSize} KB\n`;
    report += `- Files: ${result.metrics.beforeCleanup.fileCount || result.metrics.fileCount}\n`;
    report += `- Dependencies: ${result.metrics.beforeCleanup.dependencyCount || result.metrics.dependencyCount}\n`;
    report += `- Average File Size: ${result.metrics.averageFileSize?.toFixed(2) || 'N/A'} KB\n\n`;
    
    report += `### After Potential Cleanup\n\n`;
    report += `- Total Size: ${result.metrics.afterCleanup.projectSize || result.metrics.projectSize} KB\n`;
    report += `- Files: ${result.metrics.afterCleanup.fileCount || result.metrics.fileCount}\n`;
    report += `- Dependencies: ${result.metrics.afterCleanup.dependencyCount || result.metrics.dependencyCount}\n`;
    report += `- Average File Size: ${result.metrics.averageFileSize?.toFixed(2) || 'N/A'} KB\n\n`;
    
    report += `### Potential Savings\n\n`;
    const sizeSavings = (result.metrics.beforeCleanup.projectSize - result.metrics.afterCleanup.projectSize) || 0;
    const fileSavings = (result.metrics.beforeCleanup.fileCount - result.metrics.afterCleanup.fileCount) || 0;
    const dependencySavings = (result.metrics.beforeCleanup.dependencyCount - result.metrics.afterCleanup.dependencyCount) || 0;
    
    report += `- Size Reduction: ${sizeSavings} KB (${sizeSavings > 0 ? Math.round((sizeSavings / result.metrics.beforeCleanup.projectSize) * 100) : 0}%)\n`;
    report += `- Files Removed: ${fileSavings} (${fileSavings > 0 ? Math.round((fileSavings / result.metrics.beforeCleanup.fileCount) * 100) : 0}%)\n`;
    report += `- Dependencies Removed: ${dependencySavings} (${dependencySavings > 0 ? Math.round((dependencySavings / result.metrics.beforeCleanup.dependencyCount) * 100) : 0}%)\n\n`;
  }

  // Recommendations
  report += `## Recommendations\n\n`;
  if (result.recommendations && result.recommendations.length > 0) {
    result.recommendations.forEach(rec => {
      report += `- ${rec}\n`;
    });
  } else {
    report += `No specific recommendations generated.\n`;
  }

  return report;
};

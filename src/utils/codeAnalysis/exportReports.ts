
import { AnalysisResult } from './types';

/**
 * Exports the analysis report as markdown
 * @param results Analysis results
 * @returns Markdown formatted report
 */
export const exportAnalysisReportAsMarkdown = (results: AnalysisResult): string => {
  // This is just a wrapper around the existing report generator
  // Import and use the report generator function here
  const markdown = generateAnalysisReport(results);
  return markdown;
};

/**
 * Exports the analysis report as JSON
 * @param results Analysis results
 * @returns JSON formatted report
 */
export const exportAnalysisReportAsJSON = (results: AnalysisResult): string => {
  return JSON.stringify(results, null, 2);
};

/**
 * Exports the analysis report as HTML
 * @param results Analysis results
 * @returns HTML formatted report
 */
export const exportAnalysisReportAsHTML = (results: AnalysisResult): string => {
  const json = JSON.stringify(results, null, 2);
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Analysis Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1, h2, h3 {
      color: #0066cc;
    }
    .section {
      margin-bottom: 30px;
      padding: 20px;
      border-radius: 5px;
      background-color: #f8f9fa;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    code {
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      background-color: #f1f1f1;
      padding: 2px 5px;
      border-radius: 3px;
    }
    pre {
      background-color: #f1f1f1;
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px 12px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
  </style>
</head>
<body>
  <h1>Code Analysis Report</h1>
  <div class="section">
    <h2>Analysis Results</h2>
    <pre><code>${json}</code></pre>
  </div>
</body>
</html>
  `;
  
  return htmlContent;
};

/**
 * Saves a report to a file
 * @param content Report content
 * @param filename Filename to save as
 * @param contentType Content type for the file
 */
export const saveReportToFile = (
  content: string, 
  filename: string, 
  contentType: string = 'text/plain'
): void => {
  // Create a Blob with the content
  const blob = new Blob([content], { type: contentType });
  
  // Create URL for the Blob
  const url = URL.createObjectURL(blob);
  
  // Create a temporary link element to trigger the download
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  
  // Append to body, click, and remove
  document.body.appendChild(a);
  a.click();
  
  // Clean up
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);
};

// Placeholder for generateAnalysisReport import
// This should be imported from the actual module
const generateAnalysisReport = (results: AnalysisResult): string => {
  let report = `# Code Analysis Report\n\n`;
  
  // Add timestamp if available
  if (results.timestamp) {
    report += `Generated on: ${results.timestamp}\n\n`;
  }
  
  // Unused Files
  report += `## Unused Files (${results.unusedFiles?.length || 0})\n\n`;
  if (!results.unusedFiles || results.unusedFiles.length === 0) {
    report += `No unused files detected.\n\n`;
  } else {
    report += `| File | Size |\n`;
    report += `|------|------|\n`;
    results.unusedFiles.forEach(file => {
      report += `| ${file.path || file.filePath || ''} | ${file.size} KB |\n`;
    });
    report += `\n`;
  }
  
  // Unused Imports
  report += `## Unused Imports (${results.unusedImports.length})\n\n`;
  if (results.unusedImports.length === 0) {
    report += `No unused imports detected.\n\n`;
  } else {
    report += `| File | Import | Line |\n`;
    report += `|------|--------|------|\n`;
    results.unusedImports.forEach(imp => {
      report += `| ${imp.file || imp.filePath || ''} | ${imp.name} | ${imp.line || 'N/A'} |\n`;
    });
    report += `\n`;
  }
  
  // Unused Variables
  report += `## Unused Variables (${results.unusedVariables.length})\n\n`;
  if (results.unusedVariables.length === 0) {
    report += `No unused variables detected.\n\n`;
  } else {
    report += `| File | Variable | Line |\n`;
    report += `|------|----------|------|\n`;
    results.unusedVariables.forEach(variable => {
      report += `| ${variable.file || variable.filePath || ''} | ${variable.name} | ${variable.line || 'N/A'} |\n`;
    });
    report += `\n`;
  }
  
  // Unused CSS Selectors
  const unusedSelectors = results.unusedCssSelectors || results.unusedSelectors;
  report += `## Unused CSS Selectors (${unusedSelectors.length})\n\n`;
  if (unusedSelectors.length === 0) {
    report += `No unused CSS selectors detected.\n\n`;
  } else {
    report += `| File | Selector | Line |\n`;
    report += `|------|----------|------|\n`;
    unusedSelectors.forEach(selector => {
      report += `| ${selector.file || selector.filePath || ''} | \`${selector.selector}\` | ${selector.line || 'N/A'} |\n`;
    });
    report += `\n`;
  }
  
  // Dead Code Paths
  const deadCodePaths = results.deadCodePaths || results.deadCode;
  report += `## Dead Code (${deadCodePaths.length})\n\n`;
  if (deadCodePaths.length === 0) {
    report += `No dead code detected.\n\n`;
  } else {
    report += `| File | Function | Line |\n`;
    report += `|------|----------|------|\n`;
    deadCodePaths.forEach(deadCode => {
      report += `| ${deadCode.file || deadCode.path || ''} | ${deadCode.function || deadCode.name} | ${deadCode.line || 'N/A'} |\n`;
    });
    report += `\n`;
  }
  
  // Duplicate Code
  report += `## Duplicate Code (${results.duplicateCode.length})\n\n`;
  if (results.duplicateCode.length === 0) {
    report += `No duplicate code detected.\n\n`;
  } else {
    results.duplicateCode.forEach((dup, index) => {
      report += `### Pattern ${index + 1}: ${dup.pattern || `Duplicate Pattern ${dup.id}`}\n\n`;
      report += `Similarity: ${Math.round(dup.similarity * 100)}%\n\n`;
      report += `**Found in:**\n`;
      dup.files.forEach(file => {
        report += `- ${file.path}\n`;
      });
      report += `\n`;
    });
  }
  
  // Complex Code
  report += `## Complex Code (${results.complexCode.length})\n\n`;
  if (results.complexCode.length === 0) {
    report += `No overly complex code detected.\n\n`;
  } else {
    report += `| File | Function | Complexity |\n`;
    report += `|------|----------|------------|\n`;
    results.complexCode.forEach(complex => {
      report += `| ${complex.file} | ${complex.function} | ${complex.cyclomaticComplexity || complex.complexity} |\n`;
    });
    report += `\n`;
  }
  
  // Metrics
  if (results.metrics) {
    report += `## Project Metrics\n\n`;
    report += `**Before Cleanup:**\n`;
    report += `- Project Size: ${results.metrics.beforeCleanup?.projectSize || results.metrics.projectSize || 0} KB\n`;
    report += `- Files: ${results.metrics.beforeCleanup?.fileCount || results.metrics.fileCount || 0}\n`;
    report += `- Dependencies: ${results.metrics.beforeCleanup?.dependencyCount || results.metrics.dependencyCount || 0}\n\n`;
    
    report += `**After Cleanup:**\n`;
    report += `- Project Size: ${results.metrics.afterCleanup?.projectSize || 0} KB\n`;
    report += `- Files: ${results.metrics.afterCleanup?.fileCount || 0}\n`;
    report += `- Dependencies: ${results.metrics.afterCleanup?.dependencyCount || 0}\n\n`;
  }
  
  return report;
};

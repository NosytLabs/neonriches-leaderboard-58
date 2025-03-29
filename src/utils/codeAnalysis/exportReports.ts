import { AnalysisResult } from './types';

/**
 * Exports analysis report as Markdown
 * @param analysisResult Analysis result
 * @returns Markdown string
 */
export const exportAnalysisReportAsMarkdown = (analysisResult: AnalysisResult): string => {
  // Create a markdown representation of the analysis
  let markdown = `# Code Analysis Report\n\n`;
  markdown += `Generated: ${new Date(analysisResult.timestamp).toLocaleString()}\n\n`;
  
  // Summary section
  markdown += `## Summary\n\n`;
  markdown += `- Unused Files: ${analysisResult.unusedFiles.length}\n`;
  markdown += `- Unused Imports: ${analysisResult.unusedImports.length}\n`;
  markdown += `- Unused Variables: ${analysisResult.unusedVariables.length}\n`;
  markdown += `- Unused CSS Selectors: ${analysisResult.unusedCssSelectors.length}\n`;
  markdown += `- Dead Code: ${analysisResult.deadCode.length}\n`;
  markdown += `- Complex Code: ${analysisResult.complexCode.length}\n`;
  markdown += `- Duplicate Code: ${analysisResult.duplicateCode.length}\n`;
  markdown += `- Performance Issues: ${analysisResult.performanceIssues.length}\n\n`;
  
  // Details sections for each category
  if (analysisResult.unusedFiles.length > 0) {
    markdown += `## Unused Files\n\n`;
    analysisResult.unusedFiles.forEach(file => {
      markdown += `- ${file.path} (${Math.round(file.size / 1024)}KB)\n`;
    });
    markdown += `\n`;
  }
  
  if (analysisResult.unusedImports.length > 0) {
    markdown += `## Unused Imports\n\n`;
    markdown += `| File | Import | Source | Line |\n`;
    markdown += `| ---- | ------ | ------ | ---- |\n`;
    analysisResult.unusedImports.forEach(imp => {
      markdown += `| ${imp.file || imp.path || ''} | ${imp.name} | ${imp.source} | ${imp.line || 'N/A'} |\n`;
    });
    markdown += `\n`;
  }
  
  if (analysisResult.unusedVariables.length > 0) {
    markdown += `## Unused Variables\n\n`;
    markdown += `| File | Variable | Type | Line |\n`;
    markdown += `| ---- | -------- | ---- | ---- |\n`;
    analysisResult.unusedVariables.forEach(variable => {
      markdown += `| ${variable.file || ''} | ${variable.name} | ${variable.type} | ${variable.line || 'N/A'} |\n`;
    });
    markdown += `\n`;
  }
  
  if (analysisResult.deadCode.length > 0) {
    markdown += `## Dead Code\n\n`;
    markdown += `| File | Type | Name | Line |\n`;
    markdown += `| ---- | ---- | ---- | ---- |\n`;
    analysisResult.deadCode.forEach(code => {
      markdown += `| ${code.path} | ${code.type} | ${code.name} | ${code.line || 'N/A'} |\n`;
    });
    markdown += `\n`;
  }
  
  if (analysisResult.complexCode.length > 0) {
    markdown += `## Complex Code\n\n`;
    markdown += `| File | Function | Complexity | Lines |\n`;
    markdown += `| ---- | -------- | ---------- | ----- |\n`;
    analysisResult.complexCode.forEach(complex => {
      markdown += `| ${complex.file} | ${complex.name} | ${complex.complexity} | ${complex.lines} |\n`;
    });
    markdown += `\n`;
  }
  
  if (analysisResult.duplicateCode.length > 0) {
    markdown += `## Duplicate Code\n\n`;
    analysisResult.duplicateCode.forEach((dup, index) => {
      markdown += `### Pattern ${index + 1}\n\n`;
      markdown += `- Similarity: ${Math.round(dup.similarity * 100)}%\n`;
      markdown += `- Files: ${dup.files.map(f => f.path).join(', ')}\n`;
      markdown += `- Lines: ${dup.lines}\n\n`;
      markdown += "```\n";
      markdown += dup.snippet || dup.codeSnippet || '';
      markdown += "\n```\n\n";
    });
  }
  
  if (analysisResult.performanceIssues.length > 0) {
    markdown += `## Performance Issues\n\n`;
    markdown += `| File | Description | Severity | Recommendation |\n`;
    markdown += `| ---- | ----------- | -------- | -------------- |\n`;
    analysisResult.performanceIssues.forEach(issue => {
      markdown += `| ${issue.file} | ${issue.description} | ${issue.severity} | ${issue.recommendation} |\n`;
    });
    markdown += `\n`;
  }
  
  // Project metrics if available
  if (analysisResult.metrics) {
    markdown += `## Project Metrics\n\n`;
    markdown += `- Project Size: ${analysisResult.metrics.projectSize} KB\n`;
    markdown += `- File Count: ${analysisResult.metrics.fileCount}\n`;
    markdown += `- Dependency Count: ${analysisResult.metrics.dependencyCount}\n`;
    markdown += `- Average File Size: ${analysisResult.metrics.averageFileSize.toFixed(2)} KB\n\n`;
    
    if (analysisResult.metrics.largestFiles && analysisResult.metrics.largestFiles.length > 0) {
      markdown += `### Largest Files\n\n`;
      analysisResult.metrics.largestFiles.forEach((file, index) => {
        markdown += `${index + 1}. ${file.filePath} (${file.size} KB)\n`;
      });
      markdown += `\n`;
    }
    
    if (analysisResult.metrics.beforeCleanup && analysisResult.metrics.afterCleanup) {
      markdown += `### Potential Savings\n\n`;
      markdown += `| Metric | Before Cleanup | After Cleanup | Reduction |\n`;
      markdown += `| ------ | -------------- | ------------- | --------- |\n`;
      markdown += `| Project Size | ${analysisResult.metrics.beforeCleanup.projectSize} KB | ${analysisResult.metrics.afterCleanup.projectSize} KB | ${(analysisResult.metrics.beforeCleanup.projectSize - analysisResult.metrics.afterCleanup.projectSize)} KB |\n`;
      markdown += `| File Count | ${analysisResult.metrics.beforeCleanup.fileCount} | ${analysisResult.metrics.afterCleanup.fileCount} | ${analysisResult.metrics.beforeCleanup.fileCount - analysisResult.metrics.afterCleanup.fileCount} |\n`;
      markdown += `| Dependency Count | ${analysisResult.metrics.beforeCleanup.dependencyCount} | ${analysisResult.metrics.afterCleanup.dependencyCount} | ${analysisResult.metrics.beforeCleanup.dependencyCount - analysisResult.metrics.afterCleanup.dependencyCount} |\n`;
    }
  }
  
  // Recommendations if available
  if (analysisResult.recommendations && analysisResult.recommendations.length > 0) {
    markdown += `## Recommendations\n\n`;
    analysisResult.recommendations.forEach(rec => {
      markdown += `- ${rec}\n`;
    });
  }
  
  return markdown;
};

/**
 * Exports analysis report as JSON
 * @param analysisResult Analysis result
 * @returns JSON string
 */
export const exportAnalysisReportAsJSON = (analysisResult: AnalysisResult): string => {
  return JSON.stringify(analysisResult, null, 2);
};

/**
 * Exports analysis report as HTML
 * @param analysisResult Analysis result
 * @returns HTML string
 */
export const exportAnalysisReportAsHTML = (analysisResult: AnalysisResult): string => {
  // Create an HTML representation of the analysis
  let html = `<!DOCTYPE html>
<html>
<head>
  <title>Code Analysis Report</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; margin: 0; padding: 20px; line-height: 1.5; color: #333; }
    h1, h2, h3 { margin-top: 0; }
    table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
    th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
    th { background-color: #f2f2f2; }
    .summary { display: flex; flex-wrap: wrap; margin-bottom: 20px; }
    .summary-item { flex: 1; min-width: 200px; background-color: #f9f9f9; margin: 5px; padding: 15px; border-radius: 5px; }
    .summary-item h3 { margin-top: 0; }
    pre { background-color: #f5f5f5; padding: 10px; border-radius: 5px; overflow-x: auto; }
    .severity-high { color: #d9534f; }
    .severity-medium { color: #f0ad4e; }
    .severity-low { color: #5bc0de; }
  </style>
</head>
<body>
  <h1>Code Analysis Report</h1>
  <p>Generated: ${new Date(analysisResult.timestamp).toLocaleString()}</p>
  
  <div class="summary">
    <div class="summary-item">
      <h3>Unused Files</h3>
      <p>${analysisResult.unusedFiles.length}</p>
    </div>
    <div class="summary-item">
      <h3>Unused Imports</h3>
      <p>${analysisResult.unusedImports.length}</p>
    </div>
    <div class="summary-item">
      <h3>Unused Variables</h3>
      <p>${analysisResult.unusedVariables.length}</p>
    </div>
    <div class="summary-item">
      <h3>Dead Code</h3>
      <p>${analysisResult.deadCode.length}</p>
    </div>
    <div class="summary-item">
      <h3>Complex Code</h3>
      <p>${analysisResult.complexCode.length}</p>
    </div>
    <div class="summary-item">
      <h3>Duplicate Code</h3>
      <p>${analysisResult.duplicateCode.length}</p>
    </div>
    <div class="summary-item">
      <h3>Performance Issues</h3>
      <p>${analysisResult.performanceIssues.length}</p>
    </div>
  </div>`;

  // Add unused files section
  if (analysisResult.unusedFiles.length > 0) {
    html += `
  <h2>Unused Files</h2>
  <table>
    <thead>
      <tr>
        <th>File</th>
        <th>Size (KB)</th>
      </tr>
    </thead>
    <tbody>`;
    
    analysisResult.unusedFiles.forEach(file => {
      html += `
      <tr>
        <td>${file.path}</td>
        <td>${Math.round(file.size / 1024)}</td>
      </tr>`;
    });
    
    html += `
    </tbody>
  </table>`;
  }

  // Add unused imports section
  if (analysisResult.unusedImports.length > 0) {
    html += `
  <h2>Unused Imports</h2>
  <table>
    <thead>
      <tr>
        <th>File</th>
        <th>Import</th>
        <th>Source</th>
        <th>Line</th>
      </tr>
    </thead>
    <tbody>`;
    
    analysisResult.unusedImports.forEach(imp => {
      html += `
      <tr>
        <td>${imp.file || imp.path || ''}</td>
        <td>${imp.name}</td>
        <td>${imp.source}</td>
        <td>${imp.line || 'N/A'}</td>
      </tr>`;
    });
    
    html += `
    </tbody>
  </table>`;
  }

  // Add more sections for other analysis types...

  // Add project metrics if available
  if (analysisResult.metrics) {
    html += `
  <h2>Project Metrics</h2>
  <table>
    <tr>
      <td>Project Size</td>
      <td>${analysisResult.metrics.projectSize} KB</td>
    </tr>
    <tr>
      <td>File Count</td>
      <td>${analysisResult.metrics.fileCount}</td>
    </tr>
    <tr>
      <td>Dependency Count</td>
      <td>${analysisResult.metrics.dependencyCount}</td>
    </tr>
    <tr>
      <td>Average File Size</td>
      <td>${analysisResult.metrics.averageFileSize.toFixed(2)} KB</td>
    </tr>
  </table>`;
    
    if (analysisResult.metrics.beforeCleanup && analysisResult.metrics.afterCleanup) {
      html += `
  <h3>Potential Savings</h3>
  <table>
    <thead>
      <tr>
        <th>Metric</th>
        <th>Before Cleanup</th>
        <th>After Cleanup</th>
        <th>Reduction</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Project Size</td>
        <td>${analysisResult.metrics.beforeCleanup.projectSize} KB</td>
        <td>${analysisResult.metrics.afterCleanup.projectSize} KB</td>
        <td>${(analysisResult.metrics.beforeCleanup.projectSize - analysisResult.metrics.afterCleanup.projectSize)} KB</td>
      </tr>
      <tr>
        <td>File Count</td>
        <td>${analysisResult.metrics.beforeCleanup.fileCount}</td>
        <td>${analysisResult.metrics.afterCleanup.fileCount}</td>
        <td>${analysisResult.metrics.beforeCleanup.fileCount - analysisResult.metrics.afterCleanup.fileCount}</td>
      </tr>
      <tr>
        <td>Dependency Count</td>
        <td>${analysisResult.metrics.beforeCleanup.dependencyCount}</td>
        <td>${analysisResult.metrics.afterCleanup.dependencyCount}</td>
        <td>${analysisResult.metrics.beforeCleanup.dependencyCount - analysisResult.metrics.afterCleanup.dependencyCount}</td>
      </tr>
    </tbody>
  </table>`;
    }
  }

  html += `
</body>
</html>`;
  
  return html;
};

/**
 * Saves report to file
 * @param content Report content
 * @param filename Filename
 * @param type MIME type
 */
export const saveReportToFile = (content: string, filename: string, type: string = 'text/plain'): void => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  
  URL.revokeObjectURL(url);
};

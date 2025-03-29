
import { AnalysisResult } from './types';

/**
 * Exports an analysis report as a markdown string
 */
export const exportAnalysisReportAsMarkdown = (data: AnalysisResult): string => {
  let markdown = `# Code Analysis Report\n\n`;
  
  markdown += `## Unused Files\n\n`;
  if (data.unusedFiles.length > 0) {
    data.unusedFiles.forEach(file => {
      markdown += `- ${file.filePath} (${file.size} KB, Impact: ${file.impact})\n`;
    });
  } else {
    markdown += `No unused files found.\n`;
  }
  
  markdown += `\n## Unused Imports\n\n`;
  if (data.unusedImports.length > 0) {
    data.unusedImports.forEach(item => {
      markdown += `- ${item.filePath}:${item.line} - ${item.import} (Impact: ${item.impact})\n`;
    });
  } else {
    markdown += `No unused imports found.\n`;
  }
  
  markdown += `\n## Unused Variables\n\n`;
  if (data.unusedVariables.length > 0) {
    data.unusedVariables.forEach(item => {
      markdown += `- ${item.filePath}:${item.line} - ${item.variable} (Impact: ${item.impact})\n`;
    });
  } else {
    markdown += `No unused variables found.\n`;
  }
  
  // Continue with other sections...
  
  markdown += `\n## Project Metrics\n\n`;
  markdown += `### Before Cleanup\n\n`;
  markdown += `- Project Size: ${data.metrics.beforeCleanup.projectSize} KB\n`;
  markdown += `- File Count: ${data.metrics.beforeCleanup.fileCount}\n`;
  markdown += `- Dependency Count: ${data.metrics.beforeCleanup.dependencyCount}\n`;
  markdown += `- Average File Size: ${data.metrics.beforeCleanup.averageFileSize} KB\n`;
  
  markdown += `\n### After Cleanup\n\n`;
  markdown += `- Project Size: ${data.metrics.afterCleanup.projectSize} KB\n`;
  markdown += `- File Count: ${data.metrics.afterCleanup.fileCount}\n`;
  markdown += `- Dependency Count: ${data.metrics.afterCleanup.dependencyCount}\n`;
  markdown += `- Average File Size: ${data.metrics.afterCleanup.averageFileSize} KB\n`;
  
  return markdown;
};

/**
 * Exports an analysis report as a JSON string
 */
export const exportAnalysisReportAsJSON = (data: AnalysisResult): string => {
  return JSON.stringify(data, null, 2);
};

/**
 * Exports an analysis report as an HTML string
 */
export const exportAnalysisReportAsHTML = (data: AnalysisResult): string => {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Analysis Report</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
    h1, h2, h3 { color: #333; }
    .impact-high { color: #e53e3e; }
    .impact-medium { color: #dd6b20; }
    .impact-low { color: #718096; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    th, td { padding: 8px 12px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    th { background-color: #f7fafc; }
    .metrics { display: flex; gap: 40px; }
    .metrics-card { flex: 1; padding: 20px; background-color: #f7fafc; border-radius: 8px; }
  </style>
</head>
<body>
  <h1>Code Analysis Report</h1>

  <h2>Unused Files</h2>`;

  if (data.unusedFiles.length > 0) {
    html += `<table>
    <thead>
      <tr>
        <th>File Path</th>
        <th>Size (KB)</th>
        <th>Impact</th>
      </tr>
    </thead>
    <tbody>`;
    
    data.unusedFiles.forEach(file => {
      html += `<tr>
        <td>${file.filePath}</td>
        <td>${file.size}</td>
        <td class="impact-${file.impact}">${file.impact}</td>
      </tr>`;
    });
    
    html += `</tbody>
  </table>`;
  } else {
    html += `<p>No unused files found.</p>`;
  }

  // Continue with other sections...

  html += `
  <h2>Project Metrics</h2>
  <div class="metrics">
    <div class="metrics-card">
      <h3>Before Cleanup</h3>
      <p>Project Size: ${data.metrics.beforeCleanup.projectSize} KB</p>
      <p>File Count: ${data.metrics.beforeCleanup.fileCount}</p>
      <p>Dependency Count: ${data.metrics.beforeCleanup.dependencyCount}</p>
      <p>Average File Size: ${data.metrics.beforeCleanup.averageFileSize} KB</p>
    </div>
    <div class="metrics-card">
      <h3>After Cleanup</h3>
      <p>Project Size: ${data.metrics.afterCleanup.projectSize} KB</p>
      <p>File Count: ${data.metrics.afterCleanup.fileCount}</p>
      <p>Dependency Count: ${data.metrics.afterCleanup.dependencyCount}</p>
      <p>Average File Size: ${data.metrics.afterCleanup.averageFileSize} KB</p>
    </div>
  </div>
</body>
</html>`;

  return html;
};

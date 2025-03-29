
import { AnalysisResult } from './types';

/**
 * Exports the analysis report as Markdown
 * @param result The analysis result
 * @returns A markdown string
 */
export const exportAnalysisReportAsMarkdown = (result: AnalysisResult): string => {
  let markdown = `# Code Analysis Report\n\n`;
  
  // Summary
  markdown += `## Summary\n\n`;
  markdown += `- Total Project Size: ${result.metrics.projectSize} KB\n`;
  markdown += `- File Count: ${result.metrics.fileCount}\n`;
  markdown += `- Dependency Count: ${result.metrics.dependencyCount}\n`;
  markdown += `- Average File Size: ${result.metrics.averageFileSize.toFixed(2)} KB\n\n`;
  
  // Unused Files
  markdown += `## Unused Files (${result.unusedFiles.length})\n\n`;
  if (result.unusedFiles.length === 0) {
    markdown += `No unused files detected.\n\n`;
  } else {
    markdown += `| File Path | Size |\n`;
    markdown += `| --- | --- |\n`;
    result.unusedFiles.forEach(file => {
      markdown += `| ${file.path} | ${file.size / 1024} KB |\n`;
    });
    markdown += `\n`;
  }
  
  // Unused Imports
  markdown += `## Unused Imports (${result.unusedImports.length})\n\n`;
  if (result.unusedImports.length === 0) {
    markdown += `No unused imports detected.\n\n`;
  } else {
    markdown += `| File | Import | From |\n`;
    markdown += `| --- | --- | --- |\n`;
    result.unusedImports.forEach(imp => {
      markdown += `| ${imp.file} | ${imp.name} | ${imp.from} |\n`;
    });
    markdown += `\n`;
  }
  
  // Duplicate Code
  markdown += `## Duplicate Code (${result.duplicateCode.length})\n\n`;
  if (result.duplicateCode.length === 0) {
    markdown += `No duplicate code detected.\n\n`;
  } else {
    result.duplicateCode.forEach(dup => {
      markdown += `### ${dup.pattern}\n\n`;
      markdown += `Similarity: ${(dup.similarity * 100).toFixed(0)}%\n\n`;
      markdown += `Occurrences:\n`;
      dup.occurrences.forEach(occ => {
        markdown += `- ${occ.file} (lines ${occ.lines})\n`;
      });
      if (dup.recommendation) {
        markdown += `\nRecommendation: ${dup.recommendation}\n`;
      }
      markdown += `\n`;
    });
  }
  
  // Recommendations
  markdown += `## Recommendations\n\n`;
  result.recommendations.forEach(rec => {
    markdown += `- ${rec}\n`;
  });
  
  return markdown;
};

/**
 * Exports the analysis report as JSON
 * @param result The analysis result
 * @returns A JSON string
 */
export const exportAnalysisReportAsJSON = (result: AnalysisResult): string => {
  return JSON.stringify(result, null, 2);
};

/**
 * Exports the analysis report as HTML
 * @param result The analysis result
 * @returns An HTML string
 */
export const exportAnalysisReportAsHTML = (result: AnalysisResult): string => {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Analysis Report</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; padding: 2rem; }
    h1, h2, h3 { color: #333; }
    table { border-collapse: collapse; width: 100%; margin-bottom: 1rem; }
    th, td { padding: 0.5rem; text-align: left; border-bottom: 1px solid #ddd; }
    th { background-color: #f5f5f5; }
    .summary { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; }
    .summary-item { background: #f5f5f5; padding: 1rem; border-radius: 0.5rem; flex: 1; min-width: 200px; }
    .summary-item h3 { margin-top: 0; }
  </style>
</head>
<body>
  <h1>Code Analysis Report</h1>
  
  <div class="summary">
    <div class="summary-item">
      <h3>Project Size</h3>
      <p>${result.metrics.projectSize} KB</p>
    </div>
    <div class="summary-item">
      <h3>File Count</h3>
      <p>${result.metrics.fileCount}</p>
    </div>
    <div class="summary-item">
      <h3>Dependencies</h3>
      <p>${result.metrics.dependencyCount}</p>
    </div>
    <div class="summary-item">
      <h3>Avg. File Size</h3>
      <p>${result.metrics.averageFileSize.toFixed(2)} KB</p>
    </div>
  </div>
`;

  // Unused Files
  html += `<h2>Unused Files (${result.unusedFiles.length})</h2>`;
  if (result.unusedFiles.length === 0) {
    html += `<p>No unused files detected.</p>`;
  } else {
    html += `<table>
    <thead>
      <tr>
        <th>File Path</th>
        <th>Size (KB)</th>
      </tr>
    </thead>
    <tbody>`;
    result.unusedFiles.forEach(file => {
      html += `<tr>
        <td>${file.path}</td>
        <td>${(file.size / 1024).toFixed(2)}</td>
      </tr>`;
    });
    html += `</tbody></table>`;
  }

  // Finish the HTML document
  html += `</body></html>`;
  return html;
};

/**
 * Saves a report to a file
 * @param content The content to save
 * @param filename The filename
 */
export const saveReportToFile = (content: string, filename: string): void => {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

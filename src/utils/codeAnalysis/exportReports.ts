import { AnalysisResult } from './types';

/**
 * Exports the analysis report as markdown
 * @param result Analysis result to export
 * @returns Markdown string
 */
export const exportAnalysisReportAsMarkdown = (result: AnalysisResult): string => {
  const { 
    files, 
    unusedImports, 
    unusedVariables, 
    deadCode, 
    duplicateCode, 
    performanceIssues, 
    complexCode,
    metrics
  } = result;
  
  let markdown = `# Code Analysis Report\n\n`;
  
  // Project metrics
  if (metrics) {
    markdown += `## Project Metrics\n\n`;
    markdown += `- Total Files: ${metrics.totalFiles || files.length}\n`;
    markdown += `- Total Lines: ${metrics.totalLines || 'N/A'}\n`;
    markdown += `- Average Complexity: ${metrics.averageComplexity || 'N/A'}\n\n`;
  }
  
  // Unused imports
  if (unusedImports.length > 0) {
    markdown += `## Unused Imports (${unusedImports.length})\n\n`;
    unusedImports.forEach(item => {
      markdown += `- ${item.name} from '${item.source}' in ${item.file || 'Unknown file'}\n`;
    });
    markdown += '\n';
  }
  
  // Unused variables
  if (unusedVariables.length > 0) {
    markdown += `## Unused Variables (${unusedVariables.length})\n\n`;
    unusedVariables.forEach(item => {
      markdown += `- ${item.name} (${item.type}) in ${item.file || 'Unknown file'}\n`;
    });
    markdown += '\n';
  }
  
  // Dead code
  if (deadCode.length > 0) {
    markdown += `## Dead Code (${deadCode.length})\n\n`;
    deadCode.forEach(item => {
      markdown += `- ${item.type} '${item.name}' in ${item.file || item.location}\n`;
    });
    markdown += '\n';
  }
  
  // Duplicate code
  if (duplicateCode.length > 0) {
    markdown += `## Duplicate Code (${duplicateCode.length})\n\n`;
    duplicateCode.forEach(item => {
      markdown += `- Similar code found in ${item.files.length} files (${item.similarity}% similarity)\n`;
      markdown += `  Files: ${item.files.map(f => f.path).join(', ')}\n\n`;
    });
    markdown += '\n';
  }
  
  // Performance issues
  if (performanceIssues.length > 0) {
    markdown += `## Performance Issues (${performanceIssues.length})\n\n`;
    performanceIssues.forEach(item => {
      markdown += `- ${item.description} in ${item.file} (line ${item.line})\n`;
      markdown += `  Recommendation: ${item.recommendation}\n\n`;
    });
    markdown += '\n';
  }
  
  // Complex code
  if (complexCode.length > 0) {
    markdown += `## Complex Code (${complexCode.length})\n\n`;
    complexCode.forEach(item => {
      markdown += `- ${item.function} in ${item.file} (complexity: ${item.cyclomaticComplexity})\n`;
      markdown += `  Lines: ${item.lines}\n\n`;
    });
    markdown += '\n';
  }
  
  return markdown;
};

/**
 * Exports the analysis report as JSON
 * @param result Analysis result to export
 * @returns JSON string
 */
export const exportAnalysisReportAsJSON = (result: AnalysisResult): string => {
  return JSON.stringify(result, null, 2);
};

/**
 * Exports the analysis report as HTML
 * @param result Analysis result to export
 * @returns HTML string
 */
export const exportAnalysisReportAsHTML = (result: AnalysisResult): string => {
  const { 
    files, 
    unusedImports, 
    unusedVariables, 
    deadCode, 
    duplicateCode, 
    performanceIssues, 
    complexCode,
    metrics
  } = result;
  
  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Code Analysis Report</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; color: #333; }
        h1 { border-bottom: 1px solid #eee; padding-bottom: 10px; }
        h2 { margin-top: 30px; }
        .issue-item { margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 4px; }
        .issue-title { font-weight: bold; }
        .issue-details { margin-top: 5px; color: #666; }
        .metrics-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; margin: 20px 0; }
        .metric-card { background-color: #f5f5f5; padding: 15px; border-radius: 4px; text-align: center; }
        .metric-value { font-size: 24px; font-weight: bold; color: #0066cc; margin: 10px 0; }
        .metric-label { color: #666; }
      </style>
    </head>
    <body>
      <h1>Code Analysis Report</h1>
  `;
  
  // Project metrics
  if (metrics) {
    html += `
      <h2>Project Metrics</h2>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-label">Total Files</div>
          <div class="metric-value">${metrics.totalFiles || files.length}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Total Lines</div>
          <div class="metric-value">${metrics.totalLines || 'N/A'}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Average Complexity</div>
          <div class="metric-value">${metrics.averageComplexity || 'N/A'}</div>
        </div>
      </div>
    `;
  }
  
  // Unused imports
  if (unusedImports.length > 0) {
    html += `
      <h2>Unused Imports (${unusedImports.length})</h2>
    `;
    
    unusedImports.forEach(item => {
      html += `
        <div class="issue-item">
          <div class="issue-title">${item.name} from '${item.source}'</div>
          <div class="issue-details">File: ${item.file || 'Unknown file'}</div>
        </div>
      `;
    });
  }
  
  // Similar sections for other issue types...
  
  html += `
    </body>
    </html>
  `;
  
  return html;
};

/**
 * Saves a report to a file for download
 * @param content Content to save
 * @param filename Filename
 * @param contentType Content type
 */
export const saveReportToFile = (content: string, filename: string, contentType: string): void => {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  
  URL.revokeObjectURL(url);
};

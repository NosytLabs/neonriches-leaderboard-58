
import { AnalysisResult } from './types';
import { generateAnalysisReport } from './reportGenerator';

/**
 * Exports the analysis report in various formats
 */
export const exportAnalysisReportAsMarkdown = (analysis: AnalysisResult): string => {
  return generateAnalysisReport(analysis);
};

/**
 * Exports the analysis report as JSON
 */
export const exportAnalysisReportAsJSON = (analysis: AnalysisResult): string => {
  return JSON.stringify(analysis, null, 2);
};

/**
 * Exports the analysis report as HTML
 */
export const exportAnalysisReportAsHTML = (analysis: AnalysisResult): string => {
  // Convert markdown to HTML
  const markdown = generateAnalysisReport(analysis);
  
  // Simple markdown to HTML conversion (a real implementation would use a proper converter)
  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Code Cleanup Analysis Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
    }
    h1, h2, h3 {
      color: #333;
    }
    pre {
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    code {
      font-family: Consolas, Monaco, 'Andale Mono', monospace;
    }
    ul {
      padding-left: 20px;
    }
  </style>
</head>
<body>
  ${markdown
    .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
    .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
    .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/- (.*?)$/gm, '<li>$1</li>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')}
</body>
</html>`;

  return html;
};

/**
 * Saves the analysis report to a file
 */
export const saveReportToFile = (content: string, filename: string): void => {
  // Create a blob from the content
  const blob = new Blob([content], { type: 'text/plain' });
  
  // Create a URL for the blob
  const url = URL.createObjectURL(blob);
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  
  // Append the link to the body, click it, and remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Clean up the URL
  URL.revokeObjectURL(url);
};

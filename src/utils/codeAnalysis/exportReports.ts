
import { AnalysisResult } from './types';
import { generateAnalysisReport } from './reportGenerator';

// Export analysis report as markdown
export const exportAnalysisReportAsMarkdown = (analysis: AnalysisResult): string => {
  return generateAnalysisReport(analysis);
};

// Export analysis report as JSON
export const exportAnalysisReportAsJSON = (analysis: AnalysisResult): string => {
  return JSON.stringify(analysis, null, 2);
};

// Export analysis report as HTML
export const exportAnalysisReportAsHTML = (analysis: AnalysisResult): string => {
  const markdown = generateAnalysisReport(analysis);
  
  // Very basic Markdown to HTML conversion
  const html = markdown
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  return `
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
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    code {
      background-color: #f5f5f5;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 0.9em;
    }
    h1, h2, h3, h4 {
      margin-top: 1.5em;
    }
    h1 {
      border-bottom: 1px solid #eaecef;
      padding-bottom: 0.3em;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #dfe2e5;
      padding: 8px 12px;
      text-align: left;
    }
    th {
      background-color: #f6f8fa;
    }
    tr:nth-child(even) {
      background-color: #f6f8fa;
    }
  </style>
</head>
<body>
  <p>${html}</p>
</body>
</html>
  `;
};

// Save report to file
export const saveReportToFile = (content: string, filename: string, mimeType: string = 'text/plain'): void => {
  // Create a blob
  const blob = new Blob([content], { type: mimeType });
  
  // Create a URL for the blob
  const url = URL.createObjectURL(blob);
  
  // Create a link element
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  
  // Append to the body, click it, and remove it
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  // Release the object URL
  URL.revokeObjectURL(url);
};

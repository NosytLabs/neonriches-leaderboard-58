
import { AnalysisResult } from './types';
import { generateAnalysisReport } from './reportGenerator';

/**
 * Exports analysis report as JSON
 * @param result Analysis result
 * @returns JSON string
 */
export const exportAnalysisReportAsJSON = (result: AnalysisResult): string => {
  return JSON.stringify(result, null, 2);
};

/**
 * Exports analysis report as Markdown
 * @param result Analysis result
 * @returns Markdown formatted string
 */
export const exportAnalysisReportAsMarkdown = (result: AnalysisResult): string => {
  return generateAnalysisReport(result);
};

/**
 * Exports analysis report as HTML
 * @param result Analysis result
 * @returns HTML formatted string
 */
export const exportAnalysisReportAsHTML = (result: AnalysisResult): string => {
  const markdown = generateAnalysisReport(result);
  
  // Simple markdown to HTML conversion for basic elements
  const html = markdown
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gm, '<em>$1</em>')
    .replace(/!\[(.*?)\]\((.*?)\)/gm, '<img alt="$1" src="$2" />')
    .replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2">$1</a>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/\n\n/gm, '<br/><br/>')
    .replace(/^```([\s\S]*?)```$/gm, '<pre><code>$1</code></pre>');
  
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
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
          }
          h1, h2, h3 {
            margin-top: 24px;
            margin-bottom: 16px;
          }
          h1 { border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
          h2 { border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
          table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 16px;
          }
          th, td {
            padding: 8px 12px;
            border: 1px solid #ddd;
            text-align: left;
          }
          th {
            background-color: #f6f8fa;
          }
          pre {
            background-color: #f6f8fa;
            padding: 16px;
            border-radius: 3px;
            overflow: auto;
          }
          code {
            font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
          }
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;
};

/**
 * Saves content to a file
 * @param content Content to save
 * @param filename Filename
 * @param contentType Content type (MIME type)
 */
export const saveReportToFile = (
  content: string, 
  filename: string, 
  contentType: string = 'text/plain'
): void => {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  
  URL.revokeObjectURL(url);
};

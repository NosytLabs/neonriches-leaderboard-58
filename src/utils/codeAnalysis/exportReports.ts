
import { AnalysisResult } from './types';
import { generateAnalysisReport } from './reportGenerator';

/**
 * Exports the analysis report as markdown
 */
export const exportAnalysisReportAsMarkdown = (result: AnalysisResult): string => {
  return generateAnalysisReport(result);
};

/**
 * Saves report content to a file for download
 */
export const saveReportToFile = (
  content: string, 
  filename: string = 'code-analysis-report.md',
  mimeType: string = 'text/markdown'
): void => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 100);
};

/**
 * Exports the analysis data as JSON
 */
export const exportAnalysisDataAsJson = (result: AnalysisResult): string => {
  return JSON.stringify(result, null, 2);
};

/**
 * Creates a HTML report from analysis data
 */
export const createHtmlReport = (result: AnalysisResult): string => {
  const markdown = generateAnalysisReport(result);
  
  // Basic HTML wrapper for the markdown content (in a real app, would use a proper MD renderer)
  return `
<!DOCTYPE html>
<html>
<head>
  <title>Code Analysis Report</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1, h2, h3 { margin-top: 28px; margin-bottom: 12px; }
    code { background: #f5f5f5; padding: 2px 4px; border-radius: 4px; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; }
    pre { background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto; }
    table { border-collapse: collapse; width: 100%; }
    th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
    th { background-color: #f5f5f5; }
  </style>
</head>
<body>
  <div class="markdown-content">
    ${markdown.replace(/\n/g, '<br>')}
  </div>
</body>
</html>
  `;
};


import { AnalysisResult } from './types';
import { generateAnalysisReport } from './reportGenerator';

/**
 * Exports the analysis report as a markdown file
 */
export const exportAnalysisReportAsMarkdown = (analysis: AnalysisResult): string => {
  return generateAnalysisReport(analysis);
};

/**
 * Saves the report to a file
 */
export const saveReportToFile = (content: string, filename: string): void => {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  
  // Programmatically click the link to trigger the download
  document.body.appendChild(a);
  a.click();
  
  // Clean up
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

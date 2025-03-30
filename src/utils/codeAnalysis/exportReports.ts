
import { AnalysisResult } from './types';
import { generateAnalysisReport } from './index';

/**
 * Creates a markdown version of the analysis report
 */
export const exportAnalysisReportAsMarkdown = (result: AnalysisResult): string => {
  return generateAnalysisReport(result);
};

/**
 * Saves the report to a file that can be downloaded
 */
export const saveReportToFile = (content: string, filename: string): void => {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  
  // Cleanup
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
};

export default {
  exportAnalysisReportAsMarkdown,
  saveReportToFile
};

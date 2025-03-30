
import { AnalysisResult } from './types';
import { exportAnalysisReportAsMarkdown, saveReportToFile } from './reportGenerator';

/**
 * Export analysis report
 * @param result Analysis result
 * @param format Export format
 */
export const exportAnalysisReport = (result: AnalysisResult, format: 'md' | 'json' = 'md'): void => {
  if (format === 'md') {
    const markdown = exportAnalysisReportAsMarkdown(result);
    saveReportToFile(markdown, 'code-analysis-report.md');
  } else if (format === 'json') {
    const json = JSON.stringify(result, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code-analysis-report.json';
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};

// Re-export from reportGenerator for convenience
export { exportAnalysisReportAsMarkdown, saveReportToFile };


import { AnalysisResult } from './types';

// Function to generate a markdown report from analysis results
export const generateAnalysisReport = (analysis: AnalysisResult): string => {
  let report = '# Code Cleanup Analysis Report\n\n';
  
  // Add sections for each type of issue
  if (analysis.unusedFiles.length > 0) {
    report += '## Unused Files\n\n';
    analysis.unusedFiles.forEach(file => {
      report += `- ${file}\n`;
    });
    report += '\n';
  }
  
  if (analysis.unusedImports.length > 0) {
    report += '## Unused Imports\n\n';
    analysis.unusedImports.forEach(({file, name, line}) => {
      report += `- ${file}:${line} - \`${name}\`\n`;
    });
    report += '\n';
  }
  
  // Add more sections for other issues
  if (analysis.unusedVariables.length > 0) {
    report += '## Unused Variables\n\n';
    analysis.unusedVariables.forEach(({file, name, line}) => {
      report += `- ${file}:${line} - \`${name}\`\n`;
    });
    report += '\n';
  }
  
  if (analysis.unusedCssSelectors.length > 0) {
    report += '## Unused CSS Selectors\n\n';
    analysis.unusedCssSelectors.forEach(({file, selector, line}) => {
      report += `- ${file}:${line} - \`.${selector}\`\n`;
    });
    report += '\n';
  }
  
  if (analysis.complexCode.length > 0) {
    report += '## Complex Code\n\n';
    analysis.complexCode.forEach(({file, function: funcName, complexity, line}) => {
      report += `- ${file}:${line} - \`${funcName}\` (complexity: ${complexity})\n`;
    });
    report += '\n';
  }
  
  if (analysis.duplicateCode.length > 0) {
    report += '## Duplicate Code\n\n';
    analysis.duplicateCode.forEach(({files, similarity, lines}) => {
      report += `- Similar code found in: ${files.join(', ')} (${Math.round(similarity * 100)}% similar, ${lines} lines)\n`;
    });
    report += '\n';
  }
  
  return report;
};

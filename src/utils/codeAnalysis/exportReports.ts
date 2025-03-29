
import { AnalysisResult } from './types';

export const exportAnalysisReportAsMarkdown = (analysisResult: AnalysisResult): string => {
  const report = generateAnalysisReport(analysisResult);
  return report;
};

export const saveReportToFile = (content: string, filename: string): void => {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  
  // Clean up
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
};

// Helper function to generate a complete report
function generateAnalysisReport(analysisResult: AnalysisResult): string {
  const {
    unusedFiles,
    unusedImports,
    unusedVariables,
    deadCodePaths,
    duplicateCode,
    complexCode,
    unusedDependencies,
    metrics
  } = analysisResult;

  // Calculate savings
  const sizeReduction = metrics.beforeCleanup.projectSize - metrics.afterCleanup.projectSize;
  const percentReduction = ((sizeReduction / metrics.beforeCleanup.projectSize) * 100).toFixed(1);
  
  let markdown = `# Code Analysis Report\n\n`;
  
  // Summary section
  markdown += `## Summary\n\n`;
  markdown += `This report identifies potential code cleanup opportunities in the codebase.\n\n`;
  markdown += `- Project size: ${metrics.beforeCleanup.projectSize}KB\n`;
  markdown += `- Potential reduction: ${sizeReduction}KB (${percentReduction}%)\n`;
  markdown += `- Total issues found: ${
    unusedFiles.length + 
    unusedImports.length + 
    unusedVariables.length +
    unusedDependencies.length +
    deadCodePaths.length +
    duplicateCode.length +
    complexCode.length
  }\n\n`;
  
  // Unused files section
  if (unusedFiles.length > 0) {
    markdown += `## Unused Files\n\n`;
    markdown += `The following files appear to be unused and could potentially be removed:\n\n`;
    
    unusedFiles.forEach(file => {
      markdown += `- \`${file.filePath}\` (${file.size}KB)\n`;
    });
    
    markdown += `\n`;
  }
  
  // Unused imports section
  if (unusedImports.length > 0) {
    markdown += `## Unused Imports\n\n`;
    markdown += `The following imports are not used and could be removed:\n\n`;
    
    unusedImports.forEach(imp => {
      markdown += `- In \`${imp.filePath}\` line ${imp.line}: \`${imp.import}\`\n`;
    });
    
    markdown += `\n`;
  }
  
  // Unused variables section
  if (unusedVariables.length > 0) {
    markdown += `## Unused Variables\n\n`;
    markdown += `The following variables are declared but not used:\n\n`;
    
    unusedVariables.forEach(variable => {
      markdown += `- In \`${variable.filePath}\` line ${variable.line}: \`${variable.variable}\`\n`;
    });
    
    markdown += `\n`;
  }
  
  // Dead code paths section
  if (deadCodePaths.length > 0) {
    markdown += `## Dead Code Paths\n\n`;
    markdown += `The following code is unreachable and can be safely removed:\n\n`;
    
    deadCodePaths.forEach(path => {
      markdown += `### In \`${path.filePath}\` line ${path.line}:\n\n`;
      markdown += "```javascript\n";
      markdown += path.code + "\n";
      markdown += "```\n\n";
    });
  }
  
  // Duplicate code section
  if (duplicateCode.length > 0) {
    markdown += `## Duplicate Code\n\n`;
    markdown += `The following code patterns are duplicated and could be refactored:\n\n`;
    
    duplicateCode.forEach((dup, index) => {
      markdown += `### Pattern ${index + 1}\n\n`;
      markdown += `Found in:\n`;
      
      dup.instances.forEach(instance => {
        markdown += `- \`${instance.filePath}\` line ${instance.line}\n`;
      });
      
      markdown += "\n```javascript\n";
      markdown += dup.code + "\n";
      markdown += "```\n\n";
    });
  }
  
  // Complex code section
  if (complexCode.length > 0) {
    markdown += `## Complex Code\n\n`;
    markdown += `The following functions have high complexity and could be simplified:\n\n`;
    
    complexCode.forEach(complex => {
      markdown += `- \`${complex.filePath}\` line ${complex.line}: \`${complex.function}\` (complexity: ${complex.complexity})\n`;
    });
    
    markdown += `\n`;
  }
  
  // Unused dependencies section
  if (unusedDependencies.length > 0) {
    markdown += `## Unused Dependencies\n\n`;
    markdown += `The following dependencies appear to be unused and could be removed:\n\n`;
    
    unusedDependencies.forEach(dep => {
      markdown += `- \`${dep.name}@${dep.version}\`\n`;
      
      if (dep.alternatives && dep.alternatives.length > 0) {
        markdown += `  - Alternatives: ${dep.alternatives.join(', ')}\n`;
      }
      
      if (dep.recommendation) {
        markdown += `  - Recommendation: ${dep.recommendation}\n`;
      }
    });
    
    markdown += `\n`;
  }
  
  // Recommendations section
  markdown += `## Recommendations\n\n`;
  markdown += `1. Begin with removing unused imports and variables as they are low-risk changes\n`;
  markdown += `2. Next, address unused files and dependencies after careful verification\n`;
  markdown += `3. Refactor duplicate code into shared utilities\n`;
  markdown += `4. Break down complex functions into smaller, more manageable pieces\n\n`;
  
  // Footer
  markdown += `---\n\n`;
  markdown += `Report generated on ${new Date().toLocaleString()}\n`;
  
  return markdown;
}

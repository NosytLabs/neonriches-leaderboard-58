
import { AnalysisResult } from './types';

export const exportAnalysisReportAsMarkdown = (analysis: AnalysisResult): string => {
  return `# Code Analysis Report

## Summary

This analysis identified several opportunities for code cleanup and optimization in the project. Addressing these issues can improve performance, maintainability, and reduce bundle size.

${analysis.metrics ? `
### Project Metrics

| Metric | Before Cleanup | After Cleanup (Est.) | Reduction |
|--------|----------------|---------------------|-----------|
| Project Size | ${analysis.metrics.beforeCleanup?.projectSize || 0} KB | ${analysis.metrics.afterCleanup?.projectSize || 0} KB | ${analysis.metrics.beforeCleanup?.projectSize && analysis.metrics.afterCleanup?.projectSize ? (analysis.metrics.beforeCleanup.projectSize - analysis.metrics.afterCleanup.projectSize) : 0} KB (${analysis.metrics.beforeCleanup?.projectSize ? ((analysis.metrics.beforeCleanup.projectSize - (analysis.metrics.afterCleanup?.projectSize || 0)) / analysis.metrics.beforeCleanup.projectSize * 100).toFixed(1) : 0}%) |
| File Count | ${analysis.metrics.beforeCleanup?.fileCount || 0} | ${analysis.metrics.afterCleanup?.fileCount || 0} | ${analysis.metrics.beforeCleanup?.fileCount && analysis.metrics.afterCleanup?.fileCount ? (analysis.metrics.beforeCleanup.fileCount - analysis.metrics.afterCleanup.fileCount) : 0} files |
| Dependencies | ${analysis.metrics.beforeCleanup?.dependencyCount || 0} | ${analysis.metrics.afterCleanup?.dependencyCount || 0} | ${analysis.metrics.beforeCleanup?.dependencyCount && analysis.metrics.afterCleanup?.dependencyCount ? (analysis.metrics.beforeCleanup.dependencyCount - analysis.metrics.afterCleanup.dependencyCount) : 0} packages |
` : ''}

## Findings

### 1. Unused Files

${(analysis.unusedFiles && analysis.unusedFiles.length > 0) ? `
Found ${analysis.unusedFiles.length} unused files that can be safely removed:

${analysis.unusedFiles.map(file => `- \`${file.path}\``).join('\n')}
` : 'No unused files detected.'}

### 2. Unused Imports

${analysis.unusedImports.length > 0 ? `
Found ${analysis.unusedImports.length} unused imports:

${analysis.unusedImports.map(imp => `- \`${imp.name}\` from \`${imp.path}\` in \`${imp.file}\` (line ${imp.line})`).join('\n')}
` : 'No unused imports detected.'}

### 3. Unused Variables

${analysis.unusedVariables.length > 0 ? `
Found ${analysis.unusedVariables.length} unused variables:

${analysis.unusedVariables.map(v => `- \`${v.name}${v.type ? ': ' + v.type : ''}\` in \`${v.file}\` (line ${v.line})`).join('\n')}
` : 'No unused variables detected.'}

### 4. Unused CSS Selectors

${(analysis.unusedSelectors && analysis.unusedSelectors.length > 0) ? `
Found ${analysis.unusedSelectors.length} unused CSS selectors:

${analysis.unusedSelectors.map(s => `- \`${s.name}\` in \`${s.file}\` (line ${s.line})`).join('\n')}
` : 'No unused CSS selectors detected.'}

### 5. Dead Code Paths

${(analysis.deadCodePaths && analysis.deadCodePaths.length > 0) ? `
Found ${analysis.deadCodePaths.length} dead code paths:

${analysis.deadCodePaths.map(d => `- ${d.description} in \`${d.file}\` (line ${d.line})`).join('\n')}
` : 'No dead code paths detected.'}

### 6. Duplicate Code

${analysis.duplicateCode.length > 0 ? `
Found ${analysis.duplicateCode.length} instances of duplicate code:

${analysis.duplicateCode.map(d => `#### Duplicate Code #${d.id}
- Similarity: ${Math.round(d.similarity * 100)}%
- Found in: ${d.files.map(f => '`' + f.path + '`').join(', ')}
- Lines: ${d.lines || d.linesCount || 'N/A'}
${d.recommendation ? `- Recommendation: ${d.recommendation}` : ''}
`).join('\n')}
` : 'No duplicate code detected.'}

### 7. Complex Code

${analysis.complexCode.length > 0 ? `
Found ${analysis.complexCode.length} instances of overly complex code:

${analysis.complexCode.map(c => `#### ${c.name || c.function || 'Unnamed function'} in \`${c.file}\`
- Complexity score: ${c.complexity}
- Line: ${c.line}
- Issue: ${c.explanation || 'High cyclomatic complexity'}
`).join('\n')}
` : 'No overly complex code detected.'}

### 8. Unused Dependencies

${(analysis.unusedDependencies && analysis.unusedDependencies.length > 0) ? `
Found ${analysis.unusedDependencies.length} unused dependencies:

${analysis.unusedDependencies.map(d => `- \`${d}\``).join('\n')}
` : 'No unused dependencies detected.'}

### 9. Performance Issues

${(analysis.performanceIssues && analysis.performanceIssues.length > 0) ? `
Found ${analysis.performanceIssues.length} performance issues:

${analysis.performanceIssues.map(p => `#### ${p.description}
- File: \`${p.file}\` (line ${p.lineNumber})
- Severity: ${p.severity}
- Recommendation: ${p.recommendation}
`).join('\n')}
` : 'No performance issues detected.'}

## Recommendations

1. Start with removing unused imports and variables as these changes are low risk
2. Remove unused CSS selectors to reduce stylesheet size
3. Address duplicate code by creating shared utilities
4. Refactor complex code into smaller, more manageable functions
5. Finally, remove unused files and dependencies

## Notes

- Always test thoroughly after each change
- Consider updating tests when removing or refactoring code
- Document any removed public APIs that might have been used by consumers
`;
};

export const saveReportToFile = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

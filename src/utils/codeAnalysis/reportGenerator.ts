
import { AnalysisResult } from './types';

export const generateAnalysisReport = (analysis: AnalysisResult): string => {
  const { 
    unusedImports, 
    unusedVariables, 
    unusedFiles, 
    unusedSelectors, 
    deadCode, 
    duplicateCode, 
    complexCode, 
    unusedDependencies = [],
    performanceIssues = [],
    metrics
  } = analysis;

  const deadCodePaths = analysis.deadCodePaths || deadCode;
  
  const report = `# Code Analysis Report

## Summary

This analysis identified several opportunities for code cleanup and optimization in the project. Addressing these issues can improve performance, maintainability, and reduce bundle size.

${metrics ? `
### Project Metrics

| Metric | Before Cleanup | After Cleanup (Est.) | Reduction |
|--------|----------------|---------------------|-----------|
| Project Size | ${metrics.beforeCleanup?.projectSize || 0} KB | ${metrics.afterCleanup?.projectSize || 0} KB | ${metrics.beforeCleanup?.projectSize && metrics.afterCleanup?.projectSize ? (metrics.beforeCleanup.projectSize - metrics.afterCleanup.projectSize) : 0} KB (${metrics.beforeCleanup?.projectSize ? ((metrics.beforeCleanup.projectSize - (metrics.afterCleanup?.projectSize || 0)) / metrics.beforeCleanup.projectSize * 100).toFixed(1) : 0}%) |
| File Count | ${metrics.beforeCleanup?.fileCount || 0} | ${metrics.afterCleanup?.fileCount || 0} | ${metrics.beforeCleanup?.fileCount && metrics.afterCleanup?.fileCount ? (metrics.beforeCleanup.fileCount - metrics.afterCleanup.fileCount) : 0} files |
| Dependencies | ${metrics.beforeCleanup?.dependencyCount || 0} | ${metrics.afterCleanup?.dependencyCount || 0} | ${metrics.beforeCleanup?.dependencyCount && metrics.afterCleanup?.dependencyCount ? (metrics.beforeCleanup.dependencyCount - metrics.afterCleanup.dependencyCount) : 0} packages |
` : ''}

## Findings

### 1. Unused Files

${unusedFiles && unusedFiles.length > 0 ? `
Found ${unusedFiles.length} unused files that can be safely removed:

${unusedFiles.map(file => `- \`${file}\``).join('\n')}
` : 'No unused files detected.'}

### 2. Unused Imports

${unusedImports.length > 0 ? `
Found ${unusedImports.length} unused imports:

${unusedImports.map(imp => `- \`${imp.name}\` from \`${imp.path}\` in \`${imp.file}\` (line ${imp.line})`).join('\n')}
` : 'No unused imports detected.'}

### 3. Unused Variables

${unusedVariables.length > 0 ? `
Found ${unusedVariables.length} unused variables:

${unusedVariables.map(v => `- \`${v.name}${v.type ? ': ' + v.type : ''}\` in \`${v.file}\` (line ${v.line})`).join('\n')}
` : 'No unused variables detected.'}

### 4. Unused CSS Selectors

${unusedSelectors && unusedSelectors.length > 0 ? `
Found ${unusedSelectors.length} unused CSS selectors:

${unusedSelectors.map(s => `- \`${s.selector}\` in \`${s.file}\` (line ${s.line})`).join('\n')}
` : 'No unused CSS selectors detected.'}

### 5. Dead Code Paths

${deadCodePaths && deadCodePaths.length > 0 ? `
Found ${deadCodePaths.length} dead code paths:

${deadCodePaths.map(d => `- ${d.description} in \`${d.file}\` (line ${d.line})`).join('\n')}
` : 'No dead code paths detected.'}

### 6. Duplicate Code

${duplicateCode.length > 0 ? `
Found ${duplicateCode.length} instances of duplicate code:

${duplicateCode.map(d => `#### Duplicate Code #${d.id}
- Similarity: ${Math.round(d.similarity * 100)}%
- Found in: ${d.files.map(f => '`' + f.path + '`').join(', ')}
- Lines: ${d.lines || d.linesCount || 'N/A'}
${d.recommendation ? `- Recommendation: ${d.recommendation}` : ''}
`).join('\n')}
` : 'No duplicate code detected.'}

### 7. Complex Code

${complexCode.length > 0 ? `
Found ${complexCode.length} instances of overly complex code:

${complexCode.map(c => `#### ${c.name || 'Unnamed function'} in \`${c.file}\`
- Complexity score: ${c.complexity}
- Line: ${c.line}
- Issue: ${c.explanation || 'High cyclomatic complexity'}
`).join('\n')}
` : 'No overly complex code detected.'}

### 8. Unused Dependencies

${unusedDependencies && unusedDependencies.length > 0 ? `
Found ${unusedDependencies.length} unused dependencies:

${unusedDependencies.map(d => `- \`${d}\``).join('\n')}
` : 'No unused dependencies detected.'}

### 9. Performance Issues

${performanceIssues && performanceIssues.length > 0 ? `
Found ${performanceIssues.length} performance issues:

${performanceIssues.map(p => `#### ${p.description}
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

  return report;
};

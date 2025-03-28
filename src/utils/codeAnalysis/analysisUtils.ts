
import * as fs from 'fs';
import * as path from 'path';
import { parseCSS } from './cssAnalysis';
import { analyzeDependencies } from './dependencyAnalysis';
import { analyzeReactComponents, findUnusedComponents } from './reactAnalysis';

export interface AnalysisResult {
  unusedFiles: string[];
  unusedFunctions: Array<{
    file: string;
    name: string;
    line: number;
  }>;
  unusedImports: Array<{
    file: string;
    name: string;
    line: number;
  }>;
  unusedVariables: Array<{
    file: string;
    name: string;
    line: number;
  }>;
  unusedCssSelectors: Array<{
    file: string;
    selector: string;
    line: number;
  }>;
  deadCodePaths: Array<{
    file: string;
    description: string;
    line: number;
  }>;
  duplicateCode: Array<{
    files: string[];
    similarity: number;
    lines: number;
  }>;
  complexCode: Array<{
    file: string;
    function: string;
    complexity: number;
    line: number;
  }>;
}

export const scanCodebase = async (
  projectRoot: string,
  excludePatterns: string[] = ['node_modules', 'dist', 'build', 'coverage']
): Promise<AnalysisResult> => {
  // Initial empty result
  const result: AnalysisResult = {
    unusedFiles: [],
    unusedFunctions: [],
    unusedImports: [],
    unusedVariables: [],
    unusedCssSelectors: [],
    deadCodePaths: [],
    duplicateCode: [],
    complexCode: []
  };

  try {
    // Get all files in the project
    const files = getAllFiles(projectRoot, excludePatterns);
    
    // Group files by type
    const jsFiles = files.filter(file => /\.(js|jsx|ts|tsx)$/.test(file));
    const cssFiles = files.filter(file => /\.(css|scss|less)$/.test(file));
    
    // Start various analysis tasks in parallel
    const [
      unusedImportsAndVars,
      unusedComponents,
      cssAnalysis,
      reactAnalysis,
      dependencyAnalysis
    ] = await Promise.all([
      findUnusedImportsAndVariables(jsFiles),
      findUnusedComponents(projectRoot, jsFiles),
      analyzeCSSUsage(projectRoot, cssFiles, jsFiles),
      analyzeReactComponents(jsFiles),
      analyzeDependencies(projectRoot, jsFiles)
    ]);
    
    // Merge results
    result.unusedImports = unusedImportsAndVars.imports;
    result.unusedVariables = unusedImportsAndVars.variables;
    result.unusedFiles = unusedComponents;
    result.unusedCssSelectors = cssAnalysis;
    result.complexCode = reactAnalysis.complexComponents;
    result.duplicateCode = reactAnalysis.duplicateCode;
    
    // Add dependency analysis results
    // This would populate unused dependencies info
    
    return result;
  } catch (error) {
    console.error('Error during code analysis:', error);
    return result;
  }
};

// Function to get all files in a directory recursively
export const getAllFiles = (
  dirPath: string, 
  excludePatterns: string[] = []
): string[] => {
  let files: string[] = [];
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      // Skip excluded paths
      if (excludePatterns.some(pattern => fullPath.includes(pattern))) {
        continue;
      }
      
      if (entry.isDirectory()) {
        files = [...files, ...getAllFiles(fullPath, excludePatterns)];
      } else {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
  }
  
  return files;
};

// Mock ESLint interface for type safety
interface ESLintMessage {
  ruleId: string | null;
  message: string;
  line: number;
}

interface ESLintResult {
  filePath: string;
  messages: ESLintMessage[];
}

class MockESLint {
  async lintFiles(files: string[]): Promise<ESLintResult[]> {
    // This is a mock implementation
    return files.map(file => ({
      filePath: file,
      messages: []
    }));
  }
}

// Function to find unused imports and variables
const findUnusedImportsAndVariables = async (
  files: string[]
): Promise<{ 
  imports: Array<{ file: string; name: string; line: number }>;
  variables: Array<{ file: string; name: string; line: number }>;
}> => {
  const result = {
    imports: [],
    variables: []
  };
  
  try {
    // Use our mock ESLint implementation
    const eslint = new MockESLint();
    
    // Run ESLint on files
    for (const file of files) {
      const lintResults = await eslint.lintFiles([file]);
      
      for (const lintResult of lintResults) {
        for (const message of lintResult.messages) {
          if (message.ruleId === 'no-unused-vars') {
            const varName = message.message.match(/'([^']+)'/)?.[1] || '';
            result.variables.push({
              file: lintResult.filePath,
              name: varName,
              line: message.line
            });
          } else if (message.ruleId === 'unused-imports/no-unused-imports') {
            const importName = message.message.match(/'([^']+)'/)?.[1] || '';
            result.imports.push({
              file: lintResult.filePath,
              name: importName,
              line: message.line
            });
          }
        }
      }
    }
  } catch (error) {
    console.error('Error finding unused imports and variables:', error);
  }
  
  return result;
};

// Function to analyze CSS usage
const analyzeCSSUsage = async (
  projectRoot: string,
  cssFiles: string[],
  jsFiles: string[]
): Promise<Array<{ file: string; selector: string; line: number }>> => {
  const result: Array<{ file: string; selector: string; line: number }> = [];
  
  try {
    // Extract all CSS selectors
    const allSelectors: Record<string, { file: string; line: number }[]> = {};
    
    for (const cssFile of cssFiles) {
      const content = fs.readFileSync(cssFile, 'utf-8');
      const selectors = parseCSS(content);
      
      selectors.forEach(selector => {
        if (!allSelectors[selector.name]) {
          allSelectors[selector.name] = [];
        }
        
        allSelectors[selector.name].push({
          file: cssFile,
          line: selector.line
        });
      });
    }
    
    // Check for selector usage in JS/TSX files
    const usedSelectors = new Set<string>();
    
    for (const jsFile of jsFiles) {
      const content = fs.readFileSync(jsFile, 'utf-8');
      
      // Look for className usages
      Object.keys(allSelectors).forEach(selector => {
        // Simple check - could be improved with AST parsing
        if (content.includes(`className="${selector}"`) || 
            content.includes(`className='${selector}'`) ||
            content.includes(`className={\`${selector}\`}`) ||
            content.includes(`'${selector}'`) || 
            content.includes(`"${selector}"`)) {
          usedSelectors.add(selector);
        }
      });
    }
    
    // Identify unused selectors
    Object.keys(allSelectors).forEach(selector => {
      if (!usedSelectors.has(selector)) {
        allSelectors[selector].forEach(occurrence => {
          result.push({
            file: occurrence.file,
            selector,
            line: occurrence.line
          });
        });
      }
    });
  } catch (error) {
    console.error('Error analyzing CSS usage:', error);
  }
  
  return result;
};

// Export other utility functions
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
  
  // Add more sections for other types of issues
  
  return report;
};

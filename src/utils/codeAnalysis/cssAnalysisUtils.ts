
import * as fs from 'fs';
import { parseCSS } from './cssAnalysis';

// Function to analyze CSS usage
export const analyzeCSSUsage = async (
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

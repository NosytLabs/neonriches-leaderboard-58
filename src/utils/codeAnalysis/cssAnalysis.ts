
import { readFileSync } from 'fs';
import * as css from 'css';

// Find unused CSS selectors by comparing CSS files with JS/JSX files
export const findUnusedCSSSelectors = (cssFilePath: string, jsFilePaths: string[]): string[] => {
  try {
    // Read and parse CSS
    const cssContent = readFileSync(cssFilePath, 'utf8');
    const parsedCSS = css.parse(cssContent);
    
    if (!parsedCSS.stylesheet) {
      return [];
    }
    
    // Extract all class selectors from CSS
    const classSelectors: string[] = [];
    parsedCSS.stylesheet.rules.forEach((rule: any) => {
      if (rule.type === 'rule') {
        rule.selectors.forEach((selector: string) => {
          // Extract class names (e.g., '.my-class' -> 'my-class')
          const classes = selector.match(/\.([a-zA-Z0-9_-]+)/g);
          if (classes) {
            classes.forEach(className => {
              classSelectors.push(className.substring(1)); // Remove the leading dot
            });
          }
        });
      }
    });
    
    // Scan JS/JSX files for class usage
    const usedClasses = new Set<string>();
    jsFilePaths.forEach(filePath => {
      try {
        const content = readFileSync(filePath, 'utf8');
        
        // Look for className="..." patterns
        const classNameMatches = content.match(/className\s*=\s*["'`]([^"'`]+)["'`]/g) || [];
        classNameMatches.forEach(match => {
          const classes = match.replace(/className\s*=\s*["'`]/, '').replace(/["'`]$/, '').split(/\s+/);
          classes.forEach(className => {
            if (className) usedClasses.add(className);
          });
        });
        
        // Look for class names in template literals or string concatenation
        const templateLiteralMatches = content.match(/className\s*=\s*{[^}]+}/g) || [];
        templateLiteralMatches.forEach(match => {
          classSelectors.forEach(selector => {
            if (match.includes(selector)) {
              usedClasses.add(selector);
            }
          });
        });
      } catch (error) {
        console.error(`Error analyzing JS file ${filePath}:`, error);
      }
    });
    
    // Find unused selectors
    return classSelectors.filter(selector => !usedClasses.has(selector));
  } catch (error) {
    console.error(`Error analyzing CSS file ${cssFilePath}:`, error);
    return [];
  }
};

// Find duplicate CSS properties
export const findDuplicateCSSProperties = (cssFilePath: string): Array<{ 
  selector: string; 
  property: string; 
  occurrences: number;
}> => {
  try {
    const cssContent = readFileSync(cssFilePath, 'utf8');
    const parsedCSS = css.parse(cssContent);
    
    if (!parsedCSS.stylesheet) {
      return [];
    }
    
    const propertyMap = new Map<string, Map<string, number>>();
    
    // Process each rule
    parsedCSS.stylesheet.rules.forEach((rule: any) => {
      if (rule.type === 'rule' && rule.declarations) {
        rule.selectors.forEach((selector: string) => {
          if (!propertyMap.has(selector)) {
            propertyMap.set(selector, new Map<string, number>());
          }
          
          const selectorPropertyMap = propertyMap.get(selector)!;
          
          rule.declarations.forEach((declaration: any) => {
            if (declaration.type === 'declaration' && declaration.property) {
              const count = selectorPropertyMap.get(declaration.property) || 0;
              selectorPropertyMap.set(declaration.property, count + 1);
            }
          });
        });
      }
    });
    
    // Find duplicates
    const duplicates: Array<{ selector: string; property: string; occurrences: number }> = [];
    
    propertyMap.forEach((propertyCountMap, selector) => {
      propertyCountMap.forEach((count, property) => {
        if (count > 1) {
          duplicates.push({ selector, property, occurrences: count });
        }
      });
    });
    
    return duplicates;
  } catch (error) {
    console.error(`Error analyzing CSS file ${cssFilePath}:`, error);
    return [];
  }
};

// Find overly specific CSS selectors
export const findOverlySpecificSelectors = (cssFilePath: string): Array<{
  selector: string;
  specificity: number;
}> => {
  try {
    const cssContent = readFileSync(cssFilePath, 'utf8');
    const parsedCSS = css.parse(cssContent);
    
    if (!parsedCSS.stylesheet) {
      return [];
    }
    
    const selectors: Array<{ selector: string; specificity: number }> = [];
    
    // Calculate specificity for each selector
    parsedCSS.stylesheet.rules.forEach((rule: any) => {
      if (rule.type === 'rule') {
        rule.selectors.forEach((selector: string) => {
          // Simple specificity calculation:
          // - Count IDs (#foo)
          const idCount = (selector.match(/#[a-zA-Z0-9_-]+/g) || []).length * 100;
          
          // - Count classes (.foo), attributes ([foo]), and pseudo-classes (:foo)
          const classCount = (selector.match(/\.[a-zA-Z0-9_-]+|\[[^\]]+\]|:[a-zA-Z0-9_-]+/g) || []).length * 10;
          
          // - Count elements (div, span) and pseudo-elements (::before)
          const elementCount = (selector.match(/[a-zA-Z0-9_-]+|::[a-zA-Z0-9_-]+/g) || []).length;
          
          const specificity = idCount + classCount + elementCount;
          
          // Consider selectors with high specificity
          if (specificity >= 50) {
            selectors.push({ selector, specificity });
          }
        });
      }
    });
    
    // Sort by specificity (highest first)
    return selectors.sort((a, b) => b.specificity - a.specificity);
  } catch (error) {
    console.error(`Error analyzing CSS file ${cssFilePath}:`, error);
    return [];
  }
};

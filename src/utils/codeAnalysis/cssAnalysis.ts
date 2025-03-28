
import * as css from 'css';

interface CssSelector {
  name: string;
  line: number;
}

// Parse CSS content and extract selectors
export const parseCSS = (content: string): CssSelector[] => {
  const selectors: CssSelector[] = [];
  
  try {
    const parsed = css.parse(content);
    
    if (parsed.stylesheet) {
      parsed.stylesheet.rules.forEach((rule: any, ruleIndex: number) => {
        if (rule.type === 'rule') {
          rule.selectors.forEach((selector: string) => {
            // Extract class names (e.g., '.my-class' -> 'my-class')
            const classes = selector.match(/\.([a-zA-Z0-9_-]+)/g);
            if (classes) {
              classes.forEach(className => {
                selectors.push({
                  name: className.substring(1), // Remove the leading dot
                  line: rule.position?.start?.line || ruleIndex + 1
                });
              });
            }
          });
        }
      });
    }
  } catch (error) {
    console.error('Error parsing CSS:', error);
  }
  
  return selectors;
};

// Find unused CSS selectors in the codebase
export const findUnusedSelectors = (
  cssSelectors: CssSelector[],
  jsContent: string[]
): CssSelector[] => {
  const unusedSelectors: CssSelector[] = [];
  
  // Create a set of all selectors
  const allSelectors = new Set(cssSelectors.map(selector => selector.name));
  
  // Look for selectors in JS/JSX content
  jsContent.forEach(content => {
    allSelectors.forEach(selector => {
      // Check for various ways a selector might be used
      if (content.includes(`className="${selector}"`) || 
          content.includes(`className='${selector}'`) ||
          content.includes(`className={\`${selector}\`}`) ||
          content.includes(`'${selector}'`) || 
          content.includes(`"${selector}"`)) {
        allSelectors.delete(selector);
      }
    });
  });
  
  // What remains in the set is unused
  cssSelectors.forEach(selector => {
    if (allSelectors.has(selector.name)) {
      unusedSelectors.push(selector);
    }
  });
  
  return unusedSelectors;
};

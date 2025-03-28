import * as fs from 'fs';

// Calculate cyclomatic complexity of a function
const calculateComplexity = (functionBody: string): number => {
  let complexity = 1; // Base complexity
  
  // Count decision points
  const decisionPatterns = [
    /if\s*\(/g,       // if statements
    /else\s+if\s*\(/g, // else if statements
    /for\s*\(/g,      // for loops
    /while\s*\(/g,    // while loops
    /do\s*{/g,        // do-while loops
    /\?\s*[^:]+\s*:/g, // ternary operators
    /case\s+[^:]+:/g, // case statements
    /&&/g,            // logical AND
    /\|\|/g,          // logical OR
    /catch\s*\(/g     // catch statements
  ];
  
  decisionPatterns.forEach(pattern => {
    const matches = functionBody.match(pattern);
    if (matches) {
      complexity += matches.length;
    }
  });
  
  return complexity;
};

// Find complex functions in the codebase
export const findComplexFunctions = async (
  jsFiles: string[],
  complexityThreshold: number = 10
): Promise<Array<{ file: string; function: string; complexity: number; line: number; impact: string; suggestion: string }>> => {
  const result: Array<{ file: string; function: string; complexity: number; line: number; impact: string; suggestion: string }> = [];
  
  try {
    for (const file of jsFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      
      // Simple regex to find function declarations (this is a simplified approach)
      const functionRegex = /function\s+(\w+)\s*\([^)]*\)\s*{|const\s+(\w+)\s*=\s*(?:async\s*)?\([^)]*\)\s*=>|(\w+)\s*:\s*(?:async\s*)?\([^)]*\)\s*=>/g;
      let match;
      
      while ((match = functionRegex.exec(content)) !== null) {
        const functionName = match[1] || match[2] || match[3];
        const startIndex = match.index;
        
        // Find the function body (this is a simplified approach)
        let openBraces = 1;
        let endIndex = content.indexOf('{', startIndex) + 1;
        
        while (openBraces > 0 && endIndex < content.length) {
          if (content[endIndex] === '{') openBraces++;
          if (content[endIndex] === '}') openBraces--;
          endIndex++;
        }
        
        const functionBody = content.substring(startIndex, endIndex);
        const complexity = calculateComplexity(functionBody);
        
        if (complexity >= complexityThreshold) {
          // Get the line number
          const lineNumber = content.substring(0, startIndex).split('\n').length;
          
          // Generate appropriate suggestions based on complexity
          let impact = 'Low';
          let suggestion = 'Consider breaking into smaller functions.';
          
          if (complexity >= 15) {
            impact = 'Medium';
            suggestion = 'High complexity detected. Break into smaller functions and reduce nested conditions.';
          }
          
          if (complexity >= 20) {
            impact = 'High';
            suggestion = 'Critical complexity. Refactor urgently by extracting helper functions and simplifying logic.';
          }
          
          result.push({
            file,
            function: functionName,
            complexity,
            line: lineNumber,
            impact,
            suggestion
          });
        }
      }
    }
  } catch (error) {
    console.error('Error finding complex functions:', error);
  }
  
  return result;
};

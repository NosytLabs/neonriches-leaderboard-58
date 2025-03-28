
import * as fs from 'fs';

// Find dead code paths in the codebase
export const findDeadCodePaths = async (
  jsFiles: string[]
): Promise<Array<{ file: string; description: string; line: number }>> => {
  const result: Array<{ file: string; description: string; line: number }> = [];
  
  try {
    for (const file of jsFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      const lines = content.split('\n');
      
      // Simple check for code after return statements in the same block
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Look for return statements not in conditional blocks
        if (line.startsWith('return ') && !line.includes('if') && !line.includes('?')) {
          let blockLevel = 0;
          let foundCodeAfterReturn = false;
          
          // Check if there's any code after the return in the same block
          for (let j = i + 1; j < lines.length; j++) {
            const nextLine = lines[j].trim();
            
            if (nextLine.includes('{')) blockLevel++;
            if (nextLine.includes('}')) blockLevel--;
            
            // If we're back at the same block level and have non-empty code, it's unreachable
            if (blockLevel <= 0 && nextLine && !nextLine.startsWith('//') && nextLine !== '}') {
              result.push({
                file,
                description: 'Unreachable code after return statement',
                line: j + 1
              });
              foundCodeAfterReturn = true;
              break;
            }
            
            // If we've exited the block, stop checking
            if (blockLevel < 0) break;
          }
          
          if (foundCodeAfterReturn) break;
        }
        
        // Check for conditions that are always false
        if (line.includes('if (false)') || line.includes('if(false)')) {
          result.push({
            file,
            description: 'Condition always evaluates to false',
            line: i + 1
          });
        }
        
        // Check for conditions that are always true
        if (line.includes('if (true)') || line.includes('if(true)')) {
          result.push({
            file,
            description: 'Condition always evaluates to true',
            line: i + 1
          });
        }
      }
    }
  } catch (error) {
    console.error('Error finding dead code paths:', error);
  }
  
  return result;
};

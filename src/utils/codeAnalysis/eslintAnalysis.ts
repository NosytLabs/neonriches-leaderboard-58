
import { MockESLint } from './types';

// Function to find unused imports and variables
export const findUnusedImportsAndVariables = async (
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


import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

interface Component {
  name: string;
  file: string;
  complexity: number;
  imports: string[];
  exports: string[];
}

export const analyzeReactComponents = (
  fileList: string[]
): { 
  complexComponents: Array<{
    file: string;
    function: string;
    complexity: number;
    line: number;
  }>;
  duplicateCode: Array<{
    files: string[];
    similarity: number;
    lines: number;
  }>;
} => {
  const result = {
    complexComponents: [],
    duplicateCode: []
  };
  
  try {
    const jsxFiles = fileList.filter(file => /\.(jsx|tsx)$/.test(file));
    
    // Analyze each file
    for (const file of jsxFiles) {
      const complexity = analyzeComplexity(file);
      result.complexComponents.push(...complexity);
    }
    
    // Find duplicate code patterns (simplified implementation)
    result.duplicateCode = findDuplicateCode(jsxFiles);
    
  } catch (error) {
    console.error('Error analyzing React components:', error);
  }
  
  return result;
};

// Function to find unused components in React codebase
export const findUnusedComponents = (
  projectRoot: string,
  fileList: string[]
): string[] => {
  const unusedFiles: string[] = [];
  
  try {
    const reactFiles = fileList.filter(file => /\.(jsx|tsx)$/.test(file));
    const components: Record<string, Component> = {};
    
    // Extract all component definitions and their exports
    for (const file of reactFiles) {
      const sourceFile = ts.createSourceFile(
        file,
        fs.readFileSync(file, 'utf-8'),
        ts.ScriptTarget.Latest,
        true
      );
      
      // Simplified extraction - in a real implementation, would use proper traversal
      const componentNames = extractComponentNames(sourceFile);
      const fileImports = extractImports(sourceFile);
      
      componentNames.forEach(component => {
        components[component] = {
          name: component,
          file,
          complexity: 1, // placeholder
          imports: fileImports,
          exports: [] // will be filled later
        };
      });
    }
    
    // Map out component usage
    const usedComponents = new Set<string>();
    
    for (const file of reactFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      
      // Check for imports and JSX usage
      Object.keys(components).forEach(componentName => {
        // Skip checking the file where the component is defined
        if (components[componentName].file === file) return;
        
        // Look for import statements or JSX usage
        if (content.includes(`import ${componentName}`) || 
            content.includes(`<${componentName}`) || 
            content.includes(`from '${componentName}'`)) {
          usedComponents.add(componentName);
        }
      });
    }
    
    // Find files with unused components only
    // If no component in a file is used, mark the file as unused
    const fileComponentMap: Record<string, string[]> = {};
    
    Object.values(components).forEach(component => {
      if (!fileComponentMap[component.file]) {
        fileComponentMap[component.file] = [];
      }
      
      fileComponentMap[component.file].push(component.name);
    });
    
    for (const [file, componentList] of Object.entries(fileComponentMap)) {
      const allUnused = componentList.every(component => !usedComponents.has(component));
      
      if (allUnused && componentList.length > 0) {
        // Only mark as unused if it's not an entry point or layout component
        const relativePath = path.relative(projectRoot, file);
        if (!relativePath.includes('pages') && 
            !relativePath.includes('layouts') &&
            !relativePath.includes('App.tsx') &&
            !relativePath.includes('index.')) {
          unusedFiles.push(file);
        }
      }
    }
  } catch (error) {
    console.error('Error finding unused components:', error);
  }
  
  return unusedFiles;
};

// Helper functions
const extractComponentNames = (sourceFile: ts.SourceFile): string[] => {
  const components: string[] = [];
  
  // This is a simplified version - a real implementation would use AST traversal
  function visit(node: ts.Node) {
    // Look for function declarations or variable declarations that might be components
    if (ts.isFunctionDeclaration(node) && node.name) {
      components.push(node.name.text);
    } else if (ts.isVariableDeclaration(node) && 
               node.name && 
               ts.isIdentifier(node.name) &&
               node.initializer &&
               (ts.isArrowFunction(node.initializer) || ts.isFunctionExpression(node.initializer))) {
      components.push(node.name.text);
    } else if (ts.isJsxElement(node) && ts.isIdentifier(node.openingElement.tagName)) {
      // Extract custom component usage - note this is a simplified check
      const tagName = node.openingElement.tagName.getText(sourceFile);
      if (tagName[0] === tagName[0].toUpperCase()) {
        components.push(tagName);
      }
    }
    
    ts.forEachChild(node, visit);
  }
  
  visit(sourceFile);
  return components;
};

const extractImports = (sourceFile: ts.SourceFile): string[] => {
  const imports: string[] = [];
  
  function visit(node: ts.Node) {
    if (ts.isImportDeclaration(node)) {
      const importClause = node.importClause;
      if (importClause && importClause.name) {
        imports.push(importClause.name.text);
      }
      
      if (importClause && importClause.namedBindings) {
        if (ts.isNamedImports(importClause.namedBindings)) {
          importClause.namedBindings.elements.forEach(element => {
            imports.push(element.name.text);
          });
        }
      }
    }
    
    ts.forEachChild(node, visit);
  }
  
  visit(sourceFile);
  return imports;
};

const analyzeComplexity = (filePath: string): Array<{
  file: string;
  function: string;
  complexity: number;
  line: number;
}> => {
  const result: Array<{
    file: string;
    function: string;
    complexity: number;
    line: number;
  }> = [];
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const sourceFile = ts.createSourceFile(
      filePath,
      content,
      ts.ScriptTarget.Latest,
      true
    );
    
    // Traverse AST to find functions and calculate complexity
    function visit(node: ts.Node) {
      let complexity = 0;
      let nodeName = '';
      
      // Calculate complexity based on control flow structures
      if (ts.isFunctionDeclaration(node) || ts.isMethodDeclaration(node) || ts.isArrowFunction(node)) {
        // Get function name
        if (ts.isFunctionDeclaration(node) && node.name) {
          nodeName = node.name.text;
        } else if (ts.isMethodDeclaration(node) && node.name) {
          if (ts.isIdentifier(node.name)) {
            nodeName = node.name.text;
          } else {
            nodeName = '<method>';
          }
        } else {
          nodeName = '<anonymous>';
        }
        
        // Count control flow statements
        let functionComplexity = 1; // Base complexity
        
        // Count if statements, loops, etc.
        function countComplexity(innerNode: ts.Node) {
          if (ts.isIfStatement(innerNode) || 
              ts.isForStatement(innerNode) || 
              ts.isWhileStatement(innerNode) || 
              ts.isConditionalExpression(innerNode) ||
              ts.isSwitchStatement(innerNode)) {
            functionComplexity++;
          }
          
          // Also count logical expressions as complexity points
          if (ts.isBinaryExpression(innerNode) && 
             (innerNode.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken || 
              innerNode.operatorToken.kind === ts.SyntaxKind.BarBarToken)) {
            functionComplexity++;
          }
          
          ts.forEachChild(innerNode, countComplexity);
        }
        
        countComplexity(node);
        
        if (functionComplexity > 5) { // Report only complex functions
          result.push({
            file: filePath,
            function: nodeName,
            complexity: functionComplexity,
            line: sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1
          });
        }
      }
      
      ts.forEachChild(node, visit);
    }
    
    visit(sourceFile);
    
  } catch (error) {
    console.error(`Error analyzing complexity in ${filePath}:`, error);
  }
  
  return result;
};

const findDuplicateCode = (filePaths: string[]): Array<{
  files: string[];
  similarity: number;
  lines: number;
}> => {
  const result: Array<{
    files: string[];
    similarity: number;
    lines: number;
  }> = [];
  
  try {
    // This is a simplified implementation
    // Real duplicate detection would use more advanced algorithms
    
    // Create a map of content hashes or signatures to detect similarity
    const contentMap: Record<string, Array<{ file: string; lines: number }>> = {};
    
    for (const file of filePaths) {
      const content = fs.readFileSync(file, 'utf-8');
      const lines = content.split('\n');
      
      // Process file in chunks of 5 lines (simplistic approach)
      for (let i = 0; i < lines.length - 5; i += 5) {
        const chunk = lines.slice(i, i + 5).join('\n').trim();
        
        if (chunk.length > 100) { // Only consider substantial chunks
          const hash = simpleHash(chunk);
          
          if (!contentMap[hash]) {
            contentMap[hash] = [];
          }
          
          contentMap[hash].push({
            file,
            lines: i + 1
          });
        }
      }
    }
    
    // Find duplicates
    for (const [hash, occurrences] of Object.entries(contentMap)) {
      if (occurrences.length > 1) {
        result.push({
          files: occurrences.map(o => o.file),
          similarity: 1.0, // 100% similarity (this is simplified)
          lines: 5 // We're using 5-line chunks
        });
      }
    }
    
  } catch (error) {
    console.error('Error finding duplicate code:', error);
  }
  
  return result;
};

// Simple string hashing function
const simpleHash = (str: string): string => {
  let hash = 0;
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return hash.toString(16);
};

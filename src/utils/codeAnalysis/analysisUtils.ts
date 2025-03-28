
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import * as ts from 'typescript';
import * as parser from '@typescript-eslint/parser';
import { ESLint } from 'eslint';

// File extension types to analyze
const VALID_EXTENSIONS = [
  '.js', '.jsx', '.ts', '.tsx', '.vue', '.css', '.scss', '.less'
];

// Traverses a directory recursively to find all files
export const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []): string[] => {
  const files = readdirSync(dirPath);

  files.forEach(file => {
    const filePath = join(dirPath, file);
    
    if (statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      const ext = extname(filePath);
      if (VALID_EXTENSIONS.includes(ext)) {
        arrayOfFiles.push(filePath);
      }
    }
  });

  return arrayOfFiles;
};

// Parses a file and returns its AST (Abstract Syntax Tree)
export const parseFileToAST = (filePath: string): ts.SourceFile | null => {
  try {
    const fileContent = readFileSync(filePath, 'utf8');
    return ts.createSourceFile(
      filePath,
      fileContent,
      ts.ScriptTarget.ESNext,
      true
    );
  } catch (error) {
    console.error(`Error parsing file ${filePath}:`, error);
    return null;
  }
};

// Analyzes imports to find unused ones
export const findUnusedImports = (ast: ts.SourceFile): string[] => {
  const unusedImports: string[] = [];
  const importedSymbols: Map<string, boolean> = new Map();
  
  // Find all import declarations
  const importVisitor = (node: ts.Node) => {
    if (ts.isImportDeclaration(node)) {
      const importClause = node.importClause;
      if (importClause && importClause.name) {
        importedSymbols.set(importClause.name.text, false);
      }
      
      if (importClause && importClause.namedBindings) {
        if (ts.isNamedImports(importClause.namedBindings)) {
          importClause.namedBindings.elements.forEach(element => {
            importedSymbols.set(element.name.text, false);
          });
        }
      }
    }
    ts.forEachChild(node, importVisitor);
  };
  
  // Find all identifiers and mark them as used
  const identifierVisitor = (node: ts.Node) => {
    if (ts.isIdentifier(node) && importedSymbols.has(node.text)) {
      importedSymbols.set(node.text, true);
    }
    ts.forEachChild(node, identifierVisitor);
  };
  
  // Traverse the AST
  importVisitor(ast);
  identifierVisitor(ast);
  
  // Collect unused imports
  importedSymbols.forEach((used, symbol) => {
    if (!used) {
      unusedImports.push(symbol);
    }
  });
  
  return unusedImports;
};

// Calculate cyclomatic complexity of a function
export const calculateCyclomaticComplexity = (node: ts.Node): number => {
  let complexity = 1; // Start with 1 for the function itself
  
  const complexityVisitor = (node: ts.Node) => {
    if (
      ts.isIfStatement(node) ||
      ts.isConditionalExpression(node) ||
      ts.isCaseClause(node) ||
      ts.isForStatement(node) ||
      ts.isForInStatement(node) ||
      ts.isForOfStatement(node) ||
      ts.isWhileStatement(node) ||
      ts.isDoStatement(node)
    ) {
      complexity++;
    }
    
    if (ts.isBinaryExpression(node)) {
      if (
        node.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken ||
        node.operatorToken.kind === ts.SyntaxKind.BarBarToken
      ) {
        complexity++;
      }
    }
    
    ts.forEachChild(node, complexityVisitor);
  };
  
  complexityVisitor(node);
  return complexity;
};

// Find functions with high cyclomatic complexity
export const findComplexFunctions = (
  ast: ts.SourceFile, 
  threshold = 10
): Array<{ name: string; complexity: number; location: ts.LineAndCharacter }> => {
  const complexFunctions: Array<{ name: string; complexity: number; location: ts.LineAndCharacter }> = [];
  
  const functionVisitor = (node: ts.Node) => {
    if (
      ts.isFunctionDeclaration(node) || 
      ts.isMethodDeclaration(node) ||
      ts.isFunctionExpression(node) ||
      ts.isArrowFunction(node)
    ) {
      const complexity = calculateCyclomaticComplexity(node);
      
      if (complexity > threshold) {
        let name = 'anonymous';
        
        if (ts.isFunctionDeclaration(node) && node.name) {
          name = node.name.text;
        } else if (ts.isMethodDeclaration(node) && node.name) {
          name = node.name.getText();
        } else if (ts.isFunctionExpression(node) && node.name) {
          name = node.name.text;
        }
        
        const location = ts.getLineAndCharacterOfPosition(ast, node.getStart());
        complexFunctions.push({ name, complexity, location });
      }
    }
    
    ts.forEachChild(node, functionVisitor);
  };
  
  ts.forEachChild(ast, functionVisitor);
  return complexFunctions;
};

// Find unused variables
export const findUnusedVariables = (ast: ts.SourceFile): Array<{ name: string; location: ts.LineAndCharacter }> => {
  const variables: Map<string, { used: boolean; location: ts.LineAndCharacter }> = new Map();
  
  // Find all variable declarations
  const declarationVisitor = (node: ts.Node) => {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) {
      const location = ts.getLineAndCharacterOfPosition(ast, node.name.getStart());
      variables.set(node.name.text, { used: false, location });
    }
    ts.forEachChild(node, declarationVisitor);
  };
  
  // Find all identifiers and mark them as used
  const identifierVisitor = (node: ts.Node) => {
    if (ts.isIdentifier(node) && variables.has(node.text) && node.parent && !ts.isVariableDeclaration(node.parent)) {
      variables.set(node.text, { ...variables.get(node.text)!, used: true });
    }
    ts.forEachChild(node, identifierVisitor);
  };
  
  // Traverse the AST
  declarationVisitor(ast);
  identifierVisitor(ast);
  
  // Collect unused variables
  const unusedVariables: Array<{ name: string; location: ts.LineAndCharacter }> = [];
  variables.forEach((value, key) => {
    if (!value.used) {
      unusedVariables.push({ name: key, location: value.location });
    }
  });
  
  return unusedVariables;
};

// Detect duplicate code
export const findDuplicateCode = (files: string[]): Array<{ files: string[]; lineCount: number; similarity: number }> => {
  const duplicates: Array<{ files: string[]; lineCount: number; similarity: number }> = [];
  const fileContents: Map<string, string[]> = new Map();
  
  // Load all file contents
  files.forEach(file => {
    try {
      const content = readFileSync(file, 'utf8');
      const lines = content.split('\n').map(line => line.trim());
      fileContents.set(file, lines);
    } catch (error) {
      console.error(`Error reading file ${file}:`, error);
    }
  });
  
  // Compare files pairwise for duplicate code blocks
  const threshold = 5; // Minimum number of consecutive lines to consider a duplicate
  
  for (let i = 0; i < files.length; i++) {
    for (let j = i + 1; j < files.length; j++) {
      const file1 = files[i];
      const file2 = files[j];
      
      const lines1 = fileContents.get(file1) || [];
      const lines2 = fileContents.get(file2) || [];
      
      let maxDuplicateLines = 0;
      
      for (let line1 = 0; line1 < lines1.length; line1++) {
        for (let line2 = 0; line2 < lines2.length; line2++) {
          let consecutiveLines = 0;
          
          while (
            line1 + consecutiveLines < lines1.length &&
            line2 + consecutiveLines < lines2.length &&
            lines1[line1 + consecutiveLines] === lines2[line2 + consecutiveLines] &&
            lines1[line1 + consecutiveLines].trim().length > 0 // Ignore empty lines
          ) {
            consecutiveLines++;
          }
          
          if (consecutiveLines >= threshold) {
            maxDuplicateLines = Math.max(maxDuplicateLines, consecutiveLines);
          }
        }
      }
      
      if (maxDuplicateLines >= threshold) {
        const similarity = (maxDuplicateLines * 2) / (lines1.length + lines2.length);
        duplicates.push({
          files: [file1, file2],
          lineCount: maxDuplicateLines,
          similarity
        });
      }
    }
  }
  
  return duplicates;
};

// Run eslint to find linting issues
export const runEslintAnalysis = async (filePath: string): Promise<ESLint.LintResult[]> => {
  const eslint = new ESLint({
    useEslintrc: true
  });
  
  try {
    return await eslint.lintFiles([filePath]);
  } catch (error) {
    console.error(`Error running ESLint on ${filePath}:`, error);
    return [];
  }
};

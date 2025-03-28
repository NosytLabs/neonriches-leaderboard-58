
import * as ts from 'typescript';
import { calculateCyclomaticComplexity } from './analysisUtils';

// Find unused React components
export const findUnusedComponents = (
  ast: ts.SourceFile, 
  projectFiles: string[]
): Array<{ name: string; location: ts.LineAndCharacter }> => {
  const exportedComponents: Array<{ name: string; location: ts.LineAndCharacter }> = [];
  const usedComponents = new Set<string>();
  
  // First pass: find all exported components
  const exportVisitor = (node: ts.Node) => {
    if (
      (ts.isExportAssignment(node) || 
       ts.isExportDeclaration(node) ||
       (ts.isFunctionDeclaration(node) && node.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword))) &&
      node.name && ts.isIdentifier(node.name)
    ) {
      const location = ts.getLineAndCharacterOfPosition(ast, node.name.getStart());
      exportedComponents.push({ name: node.name.text, location });
    }
    
    // Handle default exports
    if (ts.isExportAssignment(node) && node.expression && ts.isIdentifier(node.expression)) {
      const location = ts.getLineAndCharacterOfPosition(ast, node.expression.getStart());
      exportedComponents.push({ name: node.expression.text, location });
    }
    
    ts.forEachChild(node, exportVisitor);
  };
  
  // Second pass: scan all files to find component usage
  projectFiles.forEach(file => {
    const fileAst = ts.createSourceFile(
      file,
      require('fs').readFileSync(file, 'utf8'),
      ts.ScriptTarget.ESNext,
      true
    );
    
    const usageVisitor = (node: ts.Node) => {
      if (ts.isJsxElement(node) && node.openingElement) {
        const tagName = node.openingElement.tagName.getText();
        // React components start with uppercase letter
        if (tagName[0] === tagName[0].toUpperCase()) {
          usedComponents.add(tagName);
        }
      } else if (ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText();
        if (tagName[0] === tagName[0].toUpperCase()) {
          usedComponents.add(tagName);
        }
      }
      
      ts.forEachChild(node, usageVisitor);
    };
    
    ts.forEachChild(fileAst, usageVisitor);
  });
  
  // Find components that are exported but not used
  return exportedComponents.filter(component => !usedComponents.has(component.name));
};

// Find React components with excessive props
export const findComponentsWithExcessiveProps = (
  ast: ts.SourceFile, 
  threshold = 10
): Array<{ name: string; propCount: number; location: ts.LineAndCharacter }> => {
  const componentsWithTooManyProps: Array<{ name: string; propCount: number; location: ts.LineAndCharacter }> = [];
  
  const visitor = (node: ts.Node) => {
    // Find function component declarations
    if (ts.isFunctionDeclaration(node) && node.name) {
      const params = node.parameters;
      if (params.length > 0 && ts.isObjectBindingPattern(params[0].name)) {
        const bindingPattern = params[0].name;
        const propCount = bindingPattern.elements.length;
        
        if (propCount > threshold) {
          const location = ts.getLineAndCharacterOfPosition(ast, node.name.getStart());
          componentsWithTooManyProps.push({
            name: node.name.text,
            propCount,
            location
          });
        }
      }
    }
    
    // Find functional components defined as variable declarations (arrow functions)
    if (ts.isVariableStatement(node)) {
      node.declarationList.declarations.forEach(declaration => {
        if (
          declaration.initializer && 
          (ts.isArrowFunction(declaration.initializer) || ts.isFunctionExpression(declaration.initializer)) &&
          declaration.name && 
          ts.isIdentifier(declaration.name)
        ) {
          const arrowFunction = declaration.initializer;
          const params = arrowFunction.parameters;
          
          if (params.length > 0 && ts.isObjectBindingPattern(params[0].name)) {
            const bindingPattern = params[0].name;
            const propCount = bindingPattern.elements.length;
            
            if (propCount > threshold) {
              const location = ts.getLineAndCharacterOfPosition(ast, declaration.name.getStart());
              componentsWithTooManyProps.push({
                name: declaration.name.text,
                propCount,
                location
              });
            }
          }
        }
      });
    }
    
    // Check class components
    if (
      ts.isClassDeclaration(node) && 
      node.name &&
      node.heritageClauses?.some(clause => 
        clause.token === ts.SyntaxKind.ExtendsKeyword &&
        clause.types.some(type => type.expression.getText().includes('React.Component'))
      )
    ) {
      // Find the propTypes static property
      let propCount = 0;
      node.members.forEach(member => {
        if (
          ts.isPropertyDeclaration(member) && 
          member.name && 
          member.name.getText() === 'propTypes' &&
          member.initializer &&
          ts.isObjectLiteralExpression(member.initializer)
        ) {
          propCount = member.initializer.properties.length;
        }
      });
      
      if (propCount > threshold) {
        const location = ts.getLineAndCharacterOfPosition(ast, node.name.getStart());
        componentsWithTooManyProps.push({
          name: node.name.text,
          propCount,
          location
        });
      }
    }
    
    ts.forEachChild(node, visitor);
  };
  
  ts.forEachChild(ast, visitor);
  return componentsWithTooManyProps;
};

// Find components that might have performance issues
export const findPotentialPerformanceIssues = (ast: ts.SourceFile): Array<{ 
  type: 'inline-function' | 'expensive-operation' | 'missing-memo' | 'missing-key'; 
  location: ts.LineAndCharacter;
  description: string;
}> => {
  const issues: Array<{ 
    type: 'inline-function' | 'expensive-operation' | 'missing-memo' | 'missing-key'; 
    location: ts.LineAndCharacter;
    description: string;
  }> = [];
  
  const visitor = (node: ts.Node) => {
    // Check for inline function creation in JSX (potential for excessive re-renders)
    if (
      (ts.isJsxAttribute(node) && 
       node.initializer && 
       (ts.isArrowFunction(node.initializer) || ts.isFunctionExpression(node.initializer))) ||
      (ts.isJsxAttribute(node) && 
       node.initializer && 
       ts.isJsxExpression(node.initializer) && 
       node.initializer.expression && 
       (ts.isArrowFunction(node.initializer.expression) || ts.isFunctionExpression(node.initializer.expression)))
    ) {
      const location = ts.getLineAndCharacterOfPosition(ast, node.getStart());
      issues.push({
        type: 'inline-function',
        location,
        description: `Inline function in JSX prop '${node.name.text}' could cause unnecessary re-renders`
      });
    }
    
    // Check for potentially expensive operations in render
    if (
      ts.isJsxExpression(node) && 
      node.expression && 
      (node.expression.getText().includes('.filter') || 
       node.expression.getText().includes('.map') || 
       node.expression.getText().includes('.reduce') || 
       node.expression.getText().includes('.sort'))
    ) {
      const location = ts.getLineAndCharacterOfPosition(ast, node.getStart());
      issues.push({
        type: 'expensive-operation',
        location,
        description: `Potentially expensive operation in JSX: ${node.expression.getText()}`
      });
    }
    
    // Check for potentially missing React.memo
    if (
      ts.isFunctionDeclaration(node) && 
      node.name && 
      node.name.text[0] === node.name.text[0].toUpperCase() && // Component name starts with uppercase
      calculateCyclomaticComplexity(node) > 5 // Non-trivial component
    ) {
      const location = ts.getLineAndCharacterOfPosition(ast, node.getStart());
      issues.push({
        type: 'missing-memo',
        location,
        description: `Consider using React.memo for component '${node.name.text}' to prevent unnecessary re-renders`
      });
    }
    
    // Check for missing key in list rendering
    if (
      ts.isJsxElement(node) && 
      node.parent && 
      ts.isJsxExpression(node.parent) && 
      node.parent.parent && 
      ts.isJsxElement(node.parent.parent) &&
      !node.openingElement.attributes.some(attr => 
        attr.name && attr.name.getText() === 'key'
      )
    ) {
      const location = ts.getLineAndCharacterOfPosition(ast, node.getStart());
      issues.push({
        type: 'missing-key',
        location,
        description: `JSX element inside what appears to be a list is missing a 'key' prop`
      });
    }
    
    ts.forEachChild(node, visitor);
  };
  
  ts.forEachChild(ast, visitor);
  return issues;
};

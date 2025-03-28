
import { readFileSync } from 'fs';
import * as path from 'path';

export interface PackageInfo {
  name: string;
  version: string;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
}

export interface UnusedDependency {
  name: string;
  version: string;
  type: 'dependency' | 'devDependency';
}

// Parse package.json
export const parsePackageJson = (projectRoot: string): PackageInfo | null => {
  try {
    const packageJsonPath = path.join(projectRoot, 'package.json');
    const packageJsonContent = readFileSync(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(packageJsonContent);
    
    return {
      name: packageJson.name || '',
      version: packageJson.version || '',
      dependencies: packageJson.dependencies || {},
      devDependencies: packageJson.devDependencies || {}
    };
  } catch (error) {
    console.error('Error parsing package.json:', error);
    return null;
  }
};

// Find unused dependencies by scanning import statements
export const findUnusedDependencies = (
  packageInfo: PackageInfo, 
  projectFiles: string[]
): UnusedDependency[] => {
  if (!packageInfo) {
    return [];
  }
  
  const dependencies = { ...packageInfo.dependencies };
  const devDependencies = { ...packageInfo.devDependencies };
  
  // Check all files for import statements
  projectFiles.forEach(filePath => {
    try {
      const content = readFileSync(filePath, 'utf8');
      
      // Check for ES6 imports
      const importMatches = content.match(/import\s+(?:.+\s+from\s+)?['"]([^'"]+)['"]/g) || [];
      importMatches.forEach(match => {
        const importPath = match.match(/['"]([^'"]+)['"]/)?.[1];
        if (!importPath) return;
        
        // Handle relative imports
        if (importPath.startsWith('.') || importPath.startsWith('/')) {
          return;
        }
        
        // Handle scoped packages (@org/package) and subpaths (package/subpath)
        const packageName = importPath.startsWith('@') 
          ? importPath.split('/').slice(0, 2).join('/')
          : importPath.split('/')[0];
        
        // Mark as used
        if (dependencies[packageName]) {
          delete dependencies[packageName];
        }
        if (devDependencies[packageName]) {
          delete devDependencies[packageName];
        }
      });
      
      // Check for require statements
      const requireMatches = content.match(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/g) || [];
      requireMatches.forEach(match => {
        const requirePath = match.match(/['"]([^'"]+)['"]/)?.[1];
        if (!requirePath) return;
        
        // Handle relative imports
        if (requirePath.startsWith('.') || requirePath.startsWith('/')) {
          return;
        }
        
        // Handle scoped packages (@org/package) and subpaths (package/subpath)
        const packageName = requirePath.startsWith('@') 
          ? requirePath.split('/').slice(0, 2).join('/')
          : requirePath.split('/')[0];
        
        // Mark as used
        if (dependencies[packageName]) {
          delete dependencies[packageName];
        }
        if (devDependencies[packageName]) {
          delete devDependencies[packageName];
        }
      });
    } catch (error) {
      console.error(`Error analyzing file ${filePath}:`, error);
    }
  });
  
  // Known packages that might be used without direct imports
  const commonlyUsedWithoutImport = [
    'typescript', '@types/react', '@types/node', 'eslint', 'prettier',
    'jest', '@testing-library/react', '@testing-library/jest-dom',
    'webpack', 'babel', 'postcss', 'tailwindcss'
  ];
  
  // Convert remaining dependencies to array
  const unusedDependencies: UnusedDependency[] = [];
  
  Object.entries(dependencies).forEach(([name, version]) => {
    if (!commonlyUsedWithoutImport.includes(name) && !name.startsWith('@types/')) {
      unusedDependencies.push({ name, version, type: 'dependency' });
    }
  });
  
  Object.entries(devDependencies).forEach(([name, version]) => {
    if (!commonlyUsedWithoutImport.includes(name) && !name.startsWith('@types/')) {
      unusedDependencies.push({ name, version, type: 'devDependency' });
    }
  });
  
  return unusedDependencies;
};

// Find outdated dependencies
export const findOutdatedDependencies = async (projectRoot: string): Promise<Record<string, { 
  current: string; 
  latest: string; 
  isOutdated: boolean;
}>> => {
  // This would typically use npm/yarn to check for outdated packages
  // For simplicity, we're returning a mock implementation
  const packageInfo = parsePackageJson(projectRoot);
  
  if (!packageInfo) {
    return {};
  }
  
  const result: Record<string, { current: string; latest: string; isOutdated: boolean }> = {};
  
  // In a real implementation, you'd run `npm outdated --json` or similar
  // and parse the results. This is a placeholder.
  [...Object.entries(packageInfo.dependencies), ...Object.entries(packageInfo.devDependencies)]
    .forEach(([name, version]) => {
      // Mock data - in a real implementation, this would be from npm/yarn
      result[name] = {
        current: version,
        latest: version, // In a real implementation, this would be the latest version
        isOutdated: false // In a real implementation, this would be a comparison
      };
    });
  
  return result;
};

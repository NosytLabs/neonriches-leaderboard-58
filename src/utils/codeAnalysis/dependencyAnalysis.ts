
import * as fs from 'fs';
import * as path from 'path';

// Analyze project dependencies
export const analyzeDependencies = async (
  projectRoot: string, 
  jsFiles: string[]
): Promise<{
  unusedDependencies: string[],
  outdatedDependencies: Record<string, { current: string, latest: string }>
}> => {
  try {
    const packageJsonPath = path.join(projectRoot, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      return { 
        unusedDependencies: [],
        outdatedDependencies: {}
      };
    }
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    // Track which dependencies are used
    const usedDependencies = new Set<string>();
    
    // Check all files for import statements
    for (const file of jsFiles) {
      try {
        const content = fs.readFileSync(file, 'utf-8');
        
        // Check for ES imports
        const importMatches = content.match(/from ['"]([^'"]+)['"]/g) || [];
        importMatches.forEach(match => {
          const packageName = match.replace(/from ['"]/, '').replace(/['"]$/, '').split('/')[0];
          if (dependencies[packageName]) {
            usedDependencies.add(packageName);
          }
        });
        
        // Check for require statements
        const requireMatches = content.match(/require\(['"]([^'"]+)['"]\)/g) || [];
        requireMatches.forEach(match => {
          const packageName = match.replace(/require\(['"]/, '').replace(/['"]\)$/, '').split('/')[0];
          if (dependencies[packageName]) {
            usedDependencies.add(packageName);
          }
        });
      } catch (error) {
        console.error(`Error analyzing file ${file}:`, error);
      }
    }
    
    // Find unused dependencies
    const unusedDependencies = Object.keys(dependencies).filter(
      dep => !usedDependencies.has(dep) && 
      !dep.startsWith('@types/') && 
      !['typescript', 'eslint', 'prettier', 'webpack', 'babel'].includes(dep)
    );
    
    // Mock for outdated dependencies (in a real tool, this would use npm outdated)
    const outdatedDependencies: Record<string, { current: string, latest: string }> = {};
    
    return {
      unusedDependencies,
      outdatedDependencies
    };
  } catch (error) {
    console.error('Error analyzing dependencies:', error);
    return {
      unusedDependencies: [],
      outdatedDependencies: {}
    };
  }
};


interface DependencyNode {
  name: string;
  dependencies: string[];
}

interface DependencyGraph {
  [key: string]: string[];
}

/**
 * Analyzes dependencies between components and identifies circular dependencies
 */
export const analyzeDependencies = (dependencies: DependencyNode[]): {
  graph: DependencyGraph;
  circularDependencies: string[][];
} => {
  // Build dependency graph
  const graph: DependencyGraph = {};
  
  dependencies.forEach(node => {
    graph[node.name] = node.dependencies;
  });
  
  // Detect circular dependencies
  const circularDependencies: string[][] = [];
  const visited = new Set<string>();
  const path: string[] = [];
  
  const dfs = (node: string): void => {
    if (path.includes(node)) {
      // Found circular dependency
      const cycle = path.slice(path.indexOf(node));
      cycle.push(node);
      circularDependencies.push(cycle);
      return;
    }
    
    if (visited.has(node)) {
      return;
    }
    
    visited.add(node);
    path.push(node);
    
    const dependencies = graph[node] || [];
    dependencies.forEach(dep => {
      if (typeof dep === 'string') {
        dfs(dep);
      }
    });
    
    path.pop();
  };
  
  Object.keys(graph).forEach(node => {
    dfs(node);
  });
  
  return {
    graph,
    circularDependencies
  };
};

/**
 * Formats dependency paths for display
 */
export const formatDependencyPath = (path: string[]): string => {
  return path.map(p => typeof p === 'string' ? p : 'unknown').join(' → ');
};

export default {
  analyzeDependencies,
  formatDependencyPath
};

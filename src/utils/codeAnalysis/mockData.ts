
import { FileInfo, ImportInfo, VariableInfo, CssSelectorInfo, DeadCodeInfo, DependencyInfo, PerformanceIssue, ComplexityItem } from '@/types/codeAnalysis';

// Mock data for code analysis features
export const mockFiles: FileInfo[] = [
  { path: 'src/components/Header.tsx', size: 4500, lines: 120 },
  { path: 'src/components/Footer.tsx', size: 2100, lines: 65 },
  { path: 'src/components/Dashboard.tsx', size: 8900, lines: 245 },
  { path: 'src/hooks/useAuth.ts', size: 3200, lines: 85 },
  { path: 'src/contexts/AuthContext.tsx', size: 7500, lines: 210 },
  { path: 'src/pages/Leaderboard.tsx', size: 5600, lines: 180 }
];

export const mockUnusedImports: ImportInfo[] = [
  { 
    file: 'src/components/Header.tsx', 
    name: 'Avatar', 
    source: '@/components/ui/avatar', 
    line: 5, 
    used: false 
  },
  { 
    file: 'src/components/Dashboard.tsx', 
    name: 'Dialog', 
    source: '@/components/ui/dialog', 
    line: 8, 
    used: false 
  },
  { 
    file: 'src/pages/Profile.tsx', 
    name: 'Skeleton', 
    source: '@/components/ui/skeleton', 
    line: 12, 
    used: false 
  }
];

export const mockUnusedVariables: VariableInfo[] = [
  { 
    file: 'src/components/Header.tsx', 
    name: 'isMenuOpen', 
    line: 15, 
    type: 'boolean', 
    used: false 
  },
  { 
    file: 'src/contexts/AuthContext.tsx', 
    name: 'refreshToken', 
    line: 45, 
    type: 'string', 
    used: false 
  },
  { 
    file: 'src/hooks/useAuth.ts', 
    name: 'retryCount', 
    line: 28, 
    type: 'number', 
    used: false 
  }
];

export const mockDeadCode: DeadCodeInfo[] = [
  { 
    path: 'src/components/Dashboard.tsx', 
    type: 'function', 
    name: 'formatCurrency', 
    line: 45, 
    location: 'Dashboard component', 
    description: 'Function declared but never used in component' 
  },
  { 
    path: 'src/utils/formatter.ts', 
    type: 'function', 
    name: 'formatTimestamp', 
    line: 23, 
    location: 'formatter.ts', 
    description: 'Exported but never imported anywhere' 
  },
  { 
    path: 'src/hooks/useProfile.ts', 
    type: 'hook', 
    name: 'useProfileData', 
    line: 58, 
    location: 'useProfile.ts', 
    description: 'Hook defined but not used in any component' 
  },
  { 
    path: 'src/components/Profile.tsx', 
    type: 'component', 
    name: 'ProfileBadge', 
    line: 112, 
    location: 'Profile.tsx', 
    description: 'Component declared but never rendered' 
  },
  { 
    path: 'src/constants/index.ts', 
    type: 'const', 
    name: 'API_STAGING_URL', 
    line: 5, 
    location: 'constants/index.ts', 
    description: 'Constant defined but never used' 
  }
];

export const mockUnusedDependencies: DependencyInfo[] = [
  { 
    name: 'framer-motion', 
    version: '6.2.8', 
    description: 'Animation library', 
    used: false, 
    size: 240000 
  },
  { 
    name: 'date-fns', 
    version: '2.28.0', 
    description: 'Date utility library', 
    used: false, 
    size: 180000 
  },
  { 
    name: 'lodash', 
    version: '4.17.21', 
    description: 'Utility library', 
    used: false, 
    size: 320000 
  }
];

export const mockPerformanceIssues: PerformanceIssue[] = [
  { 
    id: 'perf-001', 
    description: 'Unnecessary re-renders in Dashboard component', 
    file: 'src/components/Dashboard.tsx', 
    line: 45, 
    recommendation: 'Use React.memo or useCallback to prevent unnecessary re-renders', 
    severity: 'medium', 
    lineNumber: 45, 
    type: 'react', 
    impact: 'Performance degradation on dashboard page' 
  },
  { 
    id: 'perf-002', 
    description: 'Large bundle size due to importing entire library', 
    file: 'src/components/Charts.tsx', 
    line: 3, 
    recommendation: 'Use selective imports instead of importing the entire library', 
    severity: 'high', 
    lineNumber: 3, 
    type: 'bundle-size', 
    impact: 'Increased initial load time' 
  },
  { 
    id: 'perf-003', 
    description: 'Expensive computation in render function', 
    file: 'src/components/Leaderboard.tsx', 
    line: 78, 
    recommendation: 'Move calculation to useMemo hook or outside the render function', 
    severity: 'high', 
    lineNumber: 78, 
    type: 'react', 
    impact: 'UI freeze during leaderboard updates' 
  }
];

export const mockComplexityItems: ComplexityItem[] = [
  { 
    path: 'src/components/Dashboard.tsx', 
    name: 'handleFilterChange', 
    complexity: 15, 
    filePath: 'src/components/Dashboard.tsx', 
    line: 120 
  },
  { 
    path: 'src/contexts/AuthContext.tsx', 
    name: 'handleAuthentication', 
    complexity: 22, 
    filePath: 'src/contexts/AuthContext.tsx', 
    line: 67 
  },
  { 
    path: 'src/components/PaymentForm.tsx', 
    name: 'validatePaymentDetails', 
    complexity: 18, 
    filePath: 'src/components/PaymentForm.tsx', 
    line: 52 
  }
];

export const mockUnusedCss: CssSelectorInfo[] = [
  { 
    file: 'src/styles/globals.css', 
    selector: '.hero-gradient', 
    line: 45, 
    used: false 
  },
  { 
    file: 'src/styles/animations.css', 
    selector: '.fade-in-slow', 
    line: 23, 
    used: false 
  },
  { 
    file: 'src/styles/components.css', 
    selector: '.card-premium', 
    line: 78, 
    used: false 
  }
];

export const mockProjectMetrics = {
  beforeCleanup: {
    projectSize: 15400000, // 15.4 MB
    fileCount: 126,
    dependencyCount: 32
  },
  afterCleanup: {
    projectSize: 12800000, // 12.8 MB
    fileCount: 112,
    dependencyCount: 28
  }
};

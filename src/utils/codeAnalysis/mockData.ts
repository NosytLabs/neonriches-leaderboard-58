
import { DeadCodeInfo, DuplicateCodeInfo, ComplexityItem, PerformanceIssue } from './types';

// Mock data for unused imports
export const unusedImportsMock = [
  { id: 1, file: 'src/components/animations/ThreeDBoostShowcase.tsx', name: 'profileBoostEffects', line: 5 },
  { id: 2, file: 'src/components/profile/ProfileBoostDisplay.tsx', name: 'getBoostById', line: 4 },
  { id: 3, file: 'src/components/profile/ProfileBoostStore.tsx', name: 'profileBoostEffects', line: 3 },
  { id: 4, file: 'src/pages/VisibilityFeatures.tsx', name: 'profileBoostEffects', line: 9 },
  { id: 5, file: 'src/pages/VisibilityFeatures.tsx', name: 'getBoostsByType', line: 9 },
  { id: 6, file: 'src/components/pages/CertificatePage.tsx', name: 'theme', line: 57 },
  { id: 7, file: 'src/components/cosmetics/RoyalBoutique.tsx', name: 'ensureUser', line: 18 },
  { id: 8, file: 'src/contexts/auth/AuthContext.tsx', name: 'profileVisibility', line: 95 }
];

// Mock data for unused variables
export const unusedVariablesMock = [
  { id: 1, file: 'src/components/animations/EnhancedCrownEffect.tsx', name: 'mouseIsOver', line: 260 },
  { id: 2, file: 'src/components/leaderboard/LeaderboardItem.tsx', name: 'Sparkles', line: 92 },
  { id: 3, file: 'src/pages/Deposit.tsx', name: 'ChevronsUp', line: 258 },
  { id: 4, file: 'src/components/events/FireSaleEvent.tsx', name: 'cost', line: 45 },
  { id: 5, file: 'src/components/events/FireSaleEvent.tsx', name: 'type', line: 129 }
];

// Mock data for unused functions
export const unusedFunctionsMock = [
  { id: 1, file: 'src/utils/mockeryHelpers.ts', name: 'convertActionToTier', line: 174 },
  { id: 2, file: 'src/utils/mockeryHelpers.ts', name: 'getMockeryText', line: 7 },
  { id: 3, file: 'src/components/mockery/utils/mockeryUtils.ts', name: 'getMockeryActionTitle', line: 7 },
  { id: 4, file: 'src/components/mockery/utils/mockeryUtils.ts', name: 'getMockeryActionDescription', line: 8 },
  { id: 5, file: 'src/components/mockery/utils/mockeryUtils.ts', name: 'getMockeryActionPrice', line: 9 }
];

// Mock data for unused components
export const unusedComponentsMock = [
  { file: 'src/components/codeAnalysis/DuplicateCodeReport.tsx', line: 11 },
  { file: 'src/components/codeAnalysis/PerformanceReport.tsx', line: 5 },
  { file: 'src/components/codeAnalysis/UnusedCodeReport.tsx', line: 48 }
];

// Mock data for dead code
export const deadCodeMock: DeadCodeInfo[] = [
  {
    file: 'src/services/mockeryService.ts',
    line: 193,
    description: 'Accessing non-existent properties sourceUser and targetUser',
    type: 'unreachable'
  },
  {
    file: 'src/services/paymentService.ts',
    line: 97,
    description: 'Type comparison that can never be true (TransactionType vs "deposit")',
    type: 'conditional'
  },
  {
    file: 'src/utils/tierUtils.ts',
    line: 7,
    description: 'Type "bronze" is not comparable to type UserTier',
    type: 'conditional'
  },
  {
    file: 'src/services/walletService.ts',
    line: 72,
    description: 'Argument "deposit" is not assignable to parameter of type TransactionType',
    type: 'parameter'
  },
  {
    file: 'src/components/wishingwell/EnhancedWishingWell.tsx',
    line: 214,
    description: 'Expected 2 arguments, but got 4',
    type: 'call'
  }
];

// Mock data for duplicate code
export const duplicateCodeMock: DuplicateCodeInfo[] = [
  {
    id: 1,
    similarity: 0.95,
    files: [
      { path: 'src/components/events/utils/shameUtils.ts' },
      { path: 'src/components/mockery/utils/mockeryUtils.ts' }
    ],
    linesCount: 48,
    snippet: `export const getActionPrice = (action: ActionType): number => {
  const prices = {
    tomatoes: 5,
    eggs: 10,
    stocks: 20,
    silence: 30,
    jester: 50,
    courtJester: 100
  };
  
  return prices[action] || 10;
};`,
    recommendation: 'Create a shared utils file for pricing functions and use it in both modules.'
  },
  {
    id: 2,
    similarity: 0.88,
    files: [
      { path: 'src/components/codeAnalysis/sections/UnusedImportsSection.tsx' },
      { path: 'src/components/codeAnalysis/sections/UnusedVariablesSection.tsx' },
      { path: 'src/components/codeAnalysis/sections/UnusedCssSelectorsSection.tsx' }
    ],
    linesCount: 35,
    snippet: `const UnusedXSection: React.FC<UnusedXSectionProps> = ({ unusedX }) => {
  if (unusedX.length === 0) {
    return null;
  }
  
  return (
    <IssueSection 
      title="Unused X" 
      count={unusedX.length}
      description="These X are not used in the codebase."
    >
      <div className="space-y-2 mt-4">
        {unusedX.map((issue, index) => (
          <IssueItem
            key={index}
            file={issue.file}
            description={...}
          />
        ))}
      </div>
    </IssueSection>
  );
};`,
    recommendation: 'Create a generic UnusedItemsSection component that can be configured for different item types.'
  }
];

// Mock data for complex code
export const complexityReportMock: any[] = [
  {
    path: 'src/components/events/PublicShamingFestival.tsx',
    complexity: 18,
    linesOfCode: 252,
    parameters: 3,
    nestedLevel: 4,
    issues: ['Long component with multiple responsibilities', 'Nested conditionals'],
    line: 42,
    functions: [{ name: 'PublicShamingFestival' }],
    explanation: 'Consider breaking this component into smaller sub-components like ShameOptions, ShameStats, and ShameTargetList.'
  },
  {
    path: 'src/pages/CodeAnalysisReport.tsx',
    complexity: 15,
    linesOfCode: 229,
    parameters: 2,
    nestedLevel: 3,
    issues: ['Long component with many sections'],
    line: 17,
    functions: [{ name: 'CodeAnalysisReport' }],
    explanation: 'Split this into multiple components for different report sections to improve maintainability.'
  },
  {
    path: 'src/services/mockeryService.ts',
    complexity: 22,
    linesOfCode: 186,
    parameters: 4,
    nestedLevel: 5,
    issues: ['Multiple responsibilities', 'Deep nesting', 'Type inconsistencies'],
    line: 162,
    functions: [{ name: 'getMockeryStats' }],
    explanation: 'Refactor into separate functions for collecting stats, processing events, and formatting results.'
  },
  {
    path: 'src/contexts/auth/AuthContext.tsx',
    complexity: 19,
    linesOfCode: 142,
    parameters: 1,
    nestedLevel: 3,
    issues: ['Multiple state updates', 'Mixed responsibilities'],
    line: 67,
    functions: [{ name: 'AuthProvider' }],
    status: 'high',
    explanation: 'Extract user profile handling and settings management into separate hooks or context providers.'
  }
];

// Mock data for performance issues
export const mockPerformanceIssues: PerformanceIssue[] = [
  {
    id: 'perf-1',
    description: 'Inefficient re-rendering in leaderboard component',
    file: 'src/components/leaderboard/LeaderboardItem.tsx',
    lineNumber: 92,
    severity: 'medium',
    recommendation: 'Add React.memo() and useCallback for expensive operations to prevent unnecessary re-renders.'
  },
  {
    id: 'perf-2',
    description: 'Large bundle size from ThreeJS imports',
    file: 'src/components/3d/RoyalTrophyModel.tsx',
    lineNumber: 132,
    severity: 'high',
    recommendation: 'Use dynamic imports with React.lazy() and code-splitting to load 3D models only when needed.'
  },
  {
    id: 'perf-3',
    description: 'Inefficient CSS causing layout thrashing',
    file: 'src/components/animations/EnhancedCrownEffect.tsx',
    lineNumber: 260,
    severity: 'low',
    recommendation: 'Use CSS transforms instead of modifying width/height directly for animations.'
  }
];

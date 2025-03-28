
export interface MockUnusedImport {
  file: string;
  name: string;
  line: number;
}

export interface MockUnusedVariable {
  file: string;
  name: string;
  line: number;
}

export interface MockUnusedFunction {
  file: string;
  name: string;
  line: number;
}

export interface MockUnusedComponent {
  file: string;
  line: number;
}

export interface MockComplexFunction {
  id: number;
  file: string;
  function: string;
  complexity: number;
  line: number;
  explanation: string;
}

export interface MockDuplicateCode {
  id: number;
  files: string[];
  similarity: number;
  lines: number;
  codeSnippet: string;
}

export interface MockPerformanceIssue {
  id: number;
  file: string;
  issue: string;
  recommendation: string;
  severity: 'high' | 'medium' | 'low';
}

// Centralized mock data
export const unusedImportsMock: MockUnusedImport[] = [
  { file: 'src/components/Header.tsx', name: 'useState', line: 3 },
  { file: 'src/pages/Profile.tsx', name: 'useEffect', line: 5 },
  { file: 'src/components/TeamSection.tsx', name: 'Fragment', line: 2 },
];

export const unusedVariablesMock: MockUnusedVariable[] = [
  { file: 'src/components/profile/ProfileEditor.tsx', name: 'isAdmin', line: 15 },
  { file: 'src/hooks/useProfileData.ts', name: 'loadError', line: 22 },
];

export const unusedFunctionsMock: MockUnusedFunction[] = [
  { file: 'src/utils/formatting.ts', name: 'capitalizeAllWords', line: 45 },
  { file: 'src/hooks/useAnalytics.ts', name: 'trackUserClick', line: 78 },
];

export const unusedComponentsMock: MockUnusedComponent[] = [
  { file: 'src/components/ui/ExtraBadge.tsx', line: 1 },
  { file: 'src/components/marketing/OldPromoSection.tsx', line: 1 },
];

export const complexFunctionsMock: MockComplexFunction[] = [
  {
    id: 1,
    file: 'src/utils/codeAnalysis/reactAnalysis.ts',
    function: 'analyzeComplexity',
    complexity: 15,
    line: 213,
    explanation: 'This function contains many nested conditionals and loops, making it hard to follow and test.'
  },
  {
    id: 2,
    file: 'src/utils/codeAnalysis/analysisUtils.ts',
    function: 'analyzeCSSUsage',
    complexity: 12,
    line: 142,
    explanation: 'Multiple nested loops and conditions increase cyclomatic complexity.'
  },
  {
    id: 3,
    file: 'src/components/profile/ProfileEditor.tsx',
    function: 'handleSaveProfile',
    complexity: 8,
    line: 67,
    explanation: 'Contains several conditional blocks and error handling branches.'
  },
  {
    id: 4,
    file: 'src/hooks/useProfileData.ts',
    function: 'fetchProfileData',
    complexity: 9,
    line: 45,
    explanation: 'Many different cases and conditions for handling different user types.'
  }
];

export const duplicateCodeMock: MockDuplicateCode[] = [
  {
    id: 1,
    files: [
      'src/components/profile/ProfileEditor.tsx',
      'src/components/settings/SettingsForm.tsx'
    ],
    similarity: 0.85,
    lines: 15,
    codeSnippet: `const handleSaveProfile = async () => {
  setIsSaving(true);
  try {
    // API call logic here
    setTimeout(() => {
      toast({
        title: "Profile Updated",
        description: "Your royal profile has been successfully updated.",
      });
      setIsSaving(false);
    }, 1000);
  } catch (error) {
    toast({
      title: "Update Failed",
      description: "There was an error updating your profile.",
      variant: "destructive"
    });
    setIsSaving(false);
  }
};`
  },
  {
    id: 2,
    files: [
      'src/components/TeamSection.tsx',
      'src/components/leaderboard/TeamLeaderboard.tsx'
    ],
    similarity: 0.92,
    lines: 8,
    codeSnippet: `// Calculate total spending across all teams
const totalSpending = LUXURY_TEAMS.reduce((sum, team) => sum + team.totalSpent, 0);

// Calculate percentage for each team
const spendingPercentage = (team.totalSpent / totalSpending) * 100;`
  },
  {
    id: 3,
    files: [
      'src/components/ui/decorations/coat-of-arms.tsx',
      'src/components/ui/decorations/crown.tsx',
      'src/components/ui/decorations/royal-seal.tsx'
    ],
    similarity: 0.75,
    lines: 10,
    codeSnippet: `return (
  <div className={cn(
    'relative',
    sizeClasses[size].container,
    className
  )}>
    <MedievalIcon 
      name="..." 
      size={sizeClasses[size].icon} 
      color={toMedievalIconColor(color)} 
      animate={animate} 
    />
  </div>
);`
  }
];

export const performanceIssuesMock: MockPerformanceIssue[] = [
  {
    id: 1,
    file: 'src/components/profile/ProfileViewer.tsx',
    issue: 'Large component with multiple responsibilities',
    recommendation: 'Split into smaller, focused components',
    severity: 'medium',
  },
  {
    id: 2,
    file: 'src/hooks/useProfileData.ts',
    issue: 'Inefficient data fetching pattern',
    recommendation: 'Implement proper caching strategy',
    severity: 'high',
  },
  {
    id: 3,
    file: 'src/components/TeamSection.tsx',
    issue: 'Expensive calculations in render method',
    recommendation: 'Move calculations to useMemo or useCallback hooks',
    severity: 'medium',
  }
];

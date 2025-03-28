
// Mock data for code analysis reports

export const complexityReportMock = [
  { file: 'src/components/Header.tsx', complexity: 25, lineCount: 156, warningLevel: 'high' },
  { file: 'src/components/Leaderboard.tsx', complexity: 18, lineCount: 234, warningLevel: 'medium' },
  { file: 'src/components/UserProfile.tsx', complexity: 22, lineCount: 187, warningLevel: 'high' },
  { file: 'src/contexts/WalletContext.tsx', complexity: 15, lineCount: 98, warningLevel: 'medium' },
  { file: 'src/pages/Dashboard.tsx', complexity: 12, lineCount: 127, warningLevel: 'low' },
];

export const duplicateCodeMock = [
  {
    pattern: 'const handleSubmit = async (e) => { e.preventDefault(); ... }',
    occurrences: [
      { file: 'src/components/LoginForm.tsx', lines: '45-60' },
      { file: 'src/components/SignupForm.tsx', lines: '72-87' },
      { file: 'src/components/ContactForm.tsx', lines: '31-46' },
    ]
  },
  {
    pattern: 'const formatCurrency = (amount) => { return new Intl.NumberFormat(...) }',
    occurrences: [
      { file: 'src/utils/formatters.ts', lines: '12-16' },
      { file: 'src/components/PriceDisplay.tsx', lines: '8-12' },
      { file: 'src/hooks/useCurrency.ts', lines: '22-26' },
    ]
  },
];

export const unusedImportsMock = [
  { file: 'src/components/Header.tsx', imports: ['useState', 'useEffect', 'useCallback'] },
  { file: 'src/pages/Profile.tsx', imports: ['Button', 'Card', 'Avatar'] },
  { file: 'src/contexts/AuthContext.tsx', imports: ['createContext', 'useReducer'] },
];

export const unusedVariablesMock = [
  { file: 'src/components/Dashboard.tsx', variables: ['loading', 'error', 'data'] },
  { file: 'src/hooks/useWallet.ts', variables: ['balance', 'transactions'] },
  { file: 'src/utils/formatters.ts', variables: ['formatDate', 'formatTime'] },
];

export const unusedFunctionsMock = [
  { file: 'src/utils/helpers.ts', functions: ['calculateTax', 'validateEmail'] },
  { file: 'src/hooks/useAuth.ts', functions: ['refreshToken', 'validateSession'] },
  { file: 'src/contexts/ThemeContext.tsx', functions: ['getSystemTheme', 'applyTheme'] },
];

export const unusedComponentsMock = [
  { name: 'DebugPanel', file: 'src/components/debug/DebugPanel.tsx' },
  { name: 'TestFeature', file: 'src/components/TestFeature.tsx' },
  { name: 'OldNavigation', file: 'src/components/OldNavigation.tsx' },
];

export const mockedAnalysisResults = {
  complexity: complexityReportMock,
  duplicateCode: duplicateCodeMock,
  unusedImports: unusedImportsMock,
  unusedVariables: unusedVariablesMock,
  unusedFunctions: unusedFunctionsMock,
  unusedComponents: unusedComponentsMock,
};

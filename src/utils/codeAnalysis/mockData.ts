
import { AnalysisResult } from './types';

export const mockedAnalysisResults: AnalysisResult = {
  unusedFiles: [
    { filePath: 'src/components/legacy/OldComponent.tsx', size: 34.5, impact: 'medium' },
    { filePath: 'src/utils/deprecatedUtils.ts', size: 12.8, impact: 'low' },
    { filePath: 'src/styles/unused-styles.css', size: 45.2, impact: 'high' },
  ],
  unusedImports: [
    { filePath: 'src/components/Dashboard.tsx', line: 4, import: 'import { format } from "date-fns"', impact: 'low' },
    { filePath: 'src/pages/Profile.tsx', line: 12, import: 'import { useQuery } from "@tanstack/react-query"', impact: 'low' },
  ],
  unusedVariables: [
    { filePath: 'src/components/Header.tsx', line: 23, variable: 'const user', impact: 'low' },
    { filePath: 'src/hooks/use-auth.ts', line: 45, variable: 'const isError', impact: 'low' },
  ],
  unusedFunctions: [
    { filePath: 'src/utils/formatters.ts', line: 67, function: 'export const formatCurrency', impact: 'medium' },
    { filePath: 'src/hooks/use-data.ts', line: 89, function: 'const fetchData', impact: 'medium' },
  ],
  unusedCssSelectors: [
    { filePath: 'src/styles/components.css', line: 145, selector: '.old-button', impact: 'low' },
    { filePath: 'src/styles/utils.css', line: 67, selector: '.hidden-sm', impact: 'low' },
  ],
  deadCodePaths: [
    {
      filePath: 'src/components/UserProfile.tsx',
      line: 87,
      code: 'if (process.env.NODE_ENV === "test") { /* test-only code */ }',
      impact: 'medium'
    },
    {
      filePath: 'src/utils/api.ts',
      line: 112,
      code: 'if (false) { console.log("This will never run"); }',
      impact: 'low'
    },
  ],
  duplicateCode: [
    {
      instances: [
        { filePath: 'src/components/Button.tsx', line: 23 },
        { filePath: 'src/components/Link.tsx', line: 34 }
      ],
      code: '// Validation pattern repeated in multiple files\nconst validateInput = (value) => { /* validation logic */ }',
      impact: 'high'
    },
    {
      instances: [
        { filePath: 'src/utils/formatters.ts', line: 56 },
        { filePath: 'src/utils/stringUtils.ts', line: 78 }
      ],
      code: '// Duplicate string formatting logic\nconst capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);',
      impact: 'medium'
    },
  ],
  complexCode: [
    {
      filePath: 'src/components/DataTable.tsx',
      line: 156,
      function: 'processData',
      complexity: 24,
      impact: 'high'
    },
    {
      filePath: 'src/utils/calculations.ts',
      line: 89,
      function: 'calculateTotals',
      complexity: 18,
      impact: 'medium'
    },
  ],
  unusedDependencies: [
    { name: 'moment', version: '2.29.4', alternatives: ['date-fns', 'dayjs'], impact: 'medium' },
    { name: 'lodash', version: '4.17.21', recommendation: 'Use specific lodash functions or modern JS', impact: 'high' },
  ],
  metrics: {
    beforeCleanup: {
      projectSize: 8560, // in KB
      fileCount: 342,
      dependencyCount: 45,
      averageFileSize: 25.03, // in KB
      largestFiles: [
        { filePath: 'src/assets/images/background.jpg', size: 1240 },
        { filePath: 'src/components/DataGrid.tsx', size: 256 },
      ]
    },
    afterCleanup: {
      projectSize: 7250, // in KB
      fileCount: 324,
      dependencyCount: 38,
      averageFileSize: 22.38, // in KB
      largestFiles: [
        { filePath: 'src/assets/images/background.jpg', size: 1240 },
        { filePath: 'src/components/DataGrid.tsx', size: 215 },
      ]
    }
  }
};

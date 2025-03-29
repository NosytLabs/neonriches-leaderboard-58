
export interface UnusedImport {
  name: string;
  source: string;
  file: string;
  line: number;
  impact?: string;
}

export interface UnusedVariable {
  name: string;
  file: string;
  line: number;
  impact?: string;
}

export interface UnusedFunction {
  name: string;
  file: string;
  line: number;
  impact?: string;
}

export interface UnusedCssSelector {
  selector: string;
  file: string;
  line: number;
  impact?: string;
}

export interface ImportInfo extends UnusedImport {}
export interface VariableInfo extends UnusedVariable {}
export interface CssSelectorInfo extends UnusedCssSelector {}

export interface DuplicateCodeInfo {
  id: string;
  title: string;
  description: string;
  severity: string;
  impact: string;
  solution: string;
  instances: { file: string; lines: string }[];
  similarity: number;
  files: string[];
}

export interface ProjectMetrics {
  beforeCleanup?: {
    projectSize: number;
    fileCount: number;
    dependencyCount: number;
    linesOfCode?: number;
    duplicatedCodePercentage?: number;
    testCoverage?: number;
    averageComplexity?: number;
  };
  afterCleanup?: {
    projectSize: number;
    fileCount: number;
    dependencyCount: number;
    linesOfCode?: number;
    duplicatedCodePercentage?: number;
    testCoverage?: number;
    averageComplexity?: number;
  };
}

export interface AnalysisResult {
  unusedImports: UnusedImport[];
  unusedVariables: UnusedVariable[];
  unusedCssSelectors: UnusedCssSelector[];
  unusedFunctions: UnusedFunction[];
  duplicateCode: DuplicateCodeInfo[];
  summary: {
    totalIssues: number;
    criticalIssues: number;
    highIssues: number;
    mediumIssues: number;
    lowIssues: number;
    potentialSavings: {
      bytes: number;
      readabilityScore: number;
    };
  };
}

export interface EslintIssue {
  ruleId: string;
  severity: number;
  message: string;
  line: number;
  column: number;
  nodeType: string;
  messageId: string;
  endLine: number;
  endColumn: number;
}


// Core analysis result interface
export interface AnalysisResult {
  unusedFiles: string[];
  unusedFunctions: Array<{
    file: string;
    name: string;
    line: number;
  }>;
  unusedImports: Array<{
    file: string;
    name: string;
    line: number;
  }>;
  unusedVariables: Array<{
    file: string;
    name: string;
    line: number;
  }>;
  unusedCssSelectors: Array<{
    file: string;
    selector: string;
    line: number;
  }>;
  deadCodePaths: Array<{
    file: string;
    description: string;
    line: number;
  }>;
  duplicateCode: Array<{
    files: string[];
    similarity: number;
    lines: number;
  }>;
  complexCode: Array<{
    file: string;
    function: string;
    complexity: number;
    line: number;
  }>;
}

// Mock ESLint interface for type safety
export interface ESLintMessage {
  ruleId: string | null;
  message: string;
  line: number;
}

export interface ESLintResult {
  filePath: string;
  messages: ESLintMessage[];
}

export class MockESLint {
  async lintFiles(files: string[]): Promise<ESLintResult[]> {
    // This is a mock implementation
    return files.map(file => ({
      filePath: file,
      messages: []
    }));
  }
}

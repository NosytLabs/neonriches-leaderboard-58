
export interface AnalysisResult {
  timestamp: number;
  complexity: ComplexityAnalysis;
  duplication: DuplicationAnalysis;
  imports: ImportAnalysis;
  fileStructure: FileStructureAnalysis;
  maintenance: MaintenanceAnalysis;
  suggestions: SuggestionItem[];
  overallScore: number;
}

export interface ComplexityAnalysis {
  complexFunctions: ComplexityItem[];
  averageComplexity: number;
  maxComplexity: number;
  score: number;
}

export interface DuplicationAnalysis {
  duplicatedCode: DuplicationItem[];
  percentageDuplicated: number;
  score: number;
}

export interface ImportAnalysis {
  circularDependencies: CircularDependencyItem[];
  unusedImports: UnusedImportItem[];
  missingImports: MissingImportItem[];
  score: number;
}

export interface FileStructureAnalysis {
  largeFiles: LargeFileItem[];
  overNestedComponents: NestedComponentItem[];
  averageFileSize: number;
  score: number;
}

export interface MaintenanceAnalysis {
  unusedVariables: VariableInfo[];
  unusedFunctions: FunctionInfo[];
  unusedCssSelectors: CssSelectorInfo[];
  todoComments: TodoCommentItem[];
  warningComments: WarningCommentItem[];
  score: number;
}

export interface ComplexityItem {
  id: string;
  file: string;
  functionName: string;
  cyclomatic: number;
  cognitive: number;
  linesOfCode: number;
  score: number;
}

export interface DuplicationItem {
  id: string;
  files: string[];
  linesOfCode: number;
  similarity: number;
  snippet: string;
}

export interface CircularDependencyItem {
  id: string;
  cycle: string[];
  severity: number;
}

export interface UnusedImportItem {
  id: string;
  file: string;
  importName: string;
  importPath: string;
}

export interface MissingImportItem {
  id: string;
  file: string;
  importName: string;
  possiblePath: string;
}

export interface LargeFileItem {
  id: string;
  file: string;
  linesOfCode: number;
  componentCount: number;
  suggestions: string[];
}

export interface NestedComponentItem {
  id: string;
  file: string;
  component: string;
  nestingLevel: number;
}

export interface VariableInfo {
  id: string;
  file: string;
  variableName: string;
  type: string;
  declarationLine: number;
}

export interface FunctionInfo {
  id: string;
  file: string;
  functionName: string;
  type: string;
  declarationLine: number;
}

export interface CssSelectorInfo {
  id: string;
  file: string;
  selector: string;
  count: number;
}

export interface TodoCommentItem {
  id: string;
  file: string;
  line: number;
  comment: string;
  priority: 'low' | 'medium' | 'high';
}

export interface WarningCommentItem {
  id: string;
  file: string;
  line: number;
  comment: string;
  type: string;
}

export interface SuggestionItem {
  id: string;
  category: string;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  effort: 'low' | 'medium' | 'high';
  files: string[];
}

export interface FileInfo {
  path: string;
  size: number;
  linesOfCode: number;
  type: string;
  imports: string[];
  exports: string[];
  components: ComponentInfo[];
  functions: FunctionInfo[];
  dependencies: string[];
  impact?: 'low' | 'medium' | 'high';
}

export interface ComponentInfo {
  name: string;
  type: 'class' | 'function' | 'arrow';
  props: PropInfo[];
  state: StateInfo[];
  hooks: HookInfo[];
  complexity: number;
  linesOfCode: number;
  renders: string[];
}

export interface PropInfo {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
}

export interface StateInfo {
  name: string;
  type: string;
  initialValue?: string;
}

export interface HookInfo {
  name: string;
  type: string;
  dependencies?: string[];
}

export interface ImportIssue {
  file: string;
  import: string;
  issue: string;
  suggestion: string;
}

export interface FileIssue {
  file: string;
  issue: string;
  severity: 'low' | 'medium' | 'high';
  suggestion: string;
}

export interface ComplexCodeIssue {
  id?: string;
  file: string;
  function: string;
  complexity: number;
  issue: string;
  suggestion: string;
}

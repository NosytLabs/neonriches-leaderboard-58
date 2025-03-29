
export interface CodeLanguage {
  id: string;
  title: string;
  name: string;
  icon?: string;
  color?: string;
  description?: string;
  popular?: boolean;
  frameworks?: string[];
}

export interface CodeSnippet {
  id: string;
  language: string;
  code: string;
  description?: string;
  title?: string;
}

export interface CodeSection {
  title: string;
  description?: string;
  snippets: CodeSnippet[];
}

export interface CodeExplanation {
  title: string;
  content: string;
  code?: string;
  language?: string;
}

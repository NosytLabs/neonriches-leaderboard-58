
import React from 'react';
import { Copy } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'tsx' }) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative">
      <div className="absolute right-2 top-2">
        <button
          onClick={handleCopyCode}
          className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
          title="Copy code"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      <pre className="p-4 bg-black/30 rounded-md overflow-x-auto text-sm font-mono text-white/80">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;

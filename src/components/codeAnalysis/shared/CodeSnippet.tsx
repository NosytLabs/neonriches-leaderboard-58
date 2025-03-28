
import React from 'react';

interface CodeSnippetProps {
  code: string;
  language?: string;
  startLineNumber?: number;
  highlightLines?: number[];
  className?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  language = 'tsx',
  startLineNumber = 1,
  highlightLines = [],
  className = '',
}) => {
  const lines = code.split('\n');
  
  return (
    <div className={`code-block relative font-mono text-sm overflow-x-auto ${className}`}>
      <pre className="counter-reset: line" style={{ counterReset: `line ${startLineNumber - 1}` }}>
        {lines.map((line, i) => {
          const lineNumber = startLineNumber + i;
          const isHighlighted = highlightLines.includes(lineNumber);
          
          return (
            <div 
              key={i} 
              className={`code-line ${isHighlighted ? 'code-issue-marker' : ''}`}
              data-line={lineNumber}
            >
              {line || ' '}
            </div>
          );
        })}
      </pre>
    </div>
  );
};

export default CodeSnippet;

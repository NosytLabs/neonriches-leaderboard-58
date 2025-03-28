
import React from 'react';
import CodeAnalyzer from '@/components/codeAnalysis/CodeAnalyzer';

const CodeAnalysisPage: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold mb-6">Code Cleanup Analysis Tool</h1>
      <CodeAnalyzer />
    </div>
  );
};

export default CodeAnalysisPage;

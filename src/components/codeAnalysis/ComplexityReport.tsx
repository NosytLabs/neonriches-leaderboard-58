
import React from 'react';
import { AlertCircle, Code } from 'lucide-react';
import EmptyState from './shared/EmptyState';
import { complexityReportMock } from '@/utils/codeAnalysis/mockData';
import { ComplexityItem } from '@/utils/codeAnalysis/types';

const ComplexityReport: React.FC = () => {
  // Transform the mock data to match the ComplexityItem type
  const transformedMockData: ComplexityItem[] = complexityReportMock.map((item: any, index) => ({
    id: `complexity-${index}`,
    name: item.functions?.[0]?.name || `Function-${index}`,
    file: item.path || '',
    complexity: item.complexity || 0,
    linesOfCode: 0,
    parameters: 0,
    nestedLevel: 0,
    issues: [],
    function: item.functions?.[0]?.name || `function-${index}`, // Add the function field
    path: item.path,
    functions: item.functions,
    status: item.status
  }));

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Code className="h-5 w-5 mr-2 text-royal-gold" />
        Code Complexity Analysis
      </h3>
      
      {transformedMockData.length === 0 ? (
        <EmptyState
          icon={AlertCircle}
          message="No complexity issues detected."
        />
      ) : (
        <div className="space-y-4">
          <p className="text-white/70 mb-4">
            The following functions have been identified as potentially complex. Consider refactoring these to improve maintainability.
          </p>
          
          {transformedMockData.map((item) => (
            <div 
              key={item.id} 
              className="p-4 rounded-md glass-morphism border-white/10"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-lg text-royal-gold">
                  {item.functionName || item.name}
                </h4>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  item.complexity > 15 
                    ? 'bg-red-500/20 text-red-500' 
                    : item.complexity > 10
                      ? 'bg-amber-500/20 text-amber-500'
                      : 'bg-blue-500/20 text-blue-500'
                }`}>
                  Complexity: {item.complexity}
                </span>
              </div>
              
              <p className="text-sm text-white/70 mb-1">
                File: <code className="text-xs bg-white/10 px-1 py-0.5 rounded">{item.file}</code>
                {item.line && <span className="ml-2">Line: {item.line}</span>}
              </p>
              
              <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                <div className="bg-black/20 p-2 rounded">
                  <p className="text-white/50">Lines of Code</p>
                  <p className="text-white font-medium">{item.linesOfCode || 'N/A'}</p>
                </div>
                <div className="bg-black/20 p-2 rounded">
                  <p className="text-white/50">Parameters</p>
                  <p className="text-white font-medium">{item.parameters || 'N/A'}</p>
                </div>
                <div className="bg-black/20 p-2 rounded">
                  <p className="text-white/50">Nesting Level</p>
                  <p className="text-white font-medium">{item.nestedLevel || 'N/A'}</p>
                </div>
              </div>
              
              {item.issues && item.issues.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-medium mb-1">Issues:</p>
                  <ul className="list-disc pl-5 text-xs text-white/70 space-y-1">
                    {item.issues.map((issue, idx) => (
                      <li key={idx}>{issue}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {item.explanation && (
                <div className="mt-3 text-xs text-white/70 bg-black/20 p-2 rounded">
                  <p className="font-medium text-royal-gold">Recommendation:</p>
                  <p>{item.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComplexityReport;

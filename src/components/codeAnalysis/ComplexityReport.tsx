
import React from 'react';
import { AlertTriangle, Brain } from 'lucide-react';
import EmptyState from './shared/EmptyState';
import { complexFunctionsMock } from '@/utils/codeAnalysis/mockData';

const ComplexityReport: React.FC = () => {
  // Use centralized mock data
  const complexFunctions = complexFunctionsMock;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Brain className="h-5 w-5 mr-2 text-purple-500" />
        Code Complexity Analysis
      </h3>
      <p className="text-white/70 mb-6">
        The following functions exceed the complexity threshold. Consider refactoring these functions into smaller, more manageable pieces.
      </p>
      
      {complexFunctions.length === 0 ? (
        <EmptyState
          icon={AlertTriangle}
          message="No overly complex functions detected."
        />
      ) : (
        <div className="space-y-4">
          {complexFunctions.map((func) => (
            <div 
              key={func.id} 
              className={`glass-morphism border-white/10 p-4 rounded-lg ${
                func.complexity > 12 
                  ? 'border-l-4 border-l-red-500' 
                  : func.complexity > 8
                    ? 'border-l-4 border-l-amber-500'
                    : 'border-l-4 border-l-blue-500'
              }`}
            >
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold mb-1">{func.function}</h4>
                  <span className="file-path text-xs">{func.file}:{func.line}</span>
                </div>
                
                <div className={`text-sm px-2 py-1 rounded-full font-medium ${
                  func.complexity > 12 
                    ? 'bg-red-500/20 text-red-400' 
                    : func.complexity > 8
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-blue-500/20 text-blue-400'
                }`}>
                  Complexity: {func.complexity}
                </div>
              </div>
              
              <p className="text-sm text-white/70 mt-2">{func.explanation}</p>
              
              <div className="mt-3 text-sm">
                <h5 className="font-medium text-white/80 mb-1">Refactoring suggestions:</h5>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li>Break down into smaller functions with single responsibilities</li>
                  <li>Reduce nesting by extracting conditional logic</li>
                  <li>Consider using strategy pattern or other design patterns</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComplexityReport;

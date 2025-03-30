
import React from 'react';
import { ComplexityItem } from '@/utils/codeAnalysis/types';
import EmptyState from '@/components/ui/empty-state';
import { GitCommit } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ComplexityReportProps {
  complexItems?: ComplexityItem[];
}

const ComplexityReport: React.FC<ComplexityReportProps> = ({ complexItems = [] }) => {
  if (complexItems.length === 0) {
    return (
      <EmptyState 
        message="No complex code found" 
        icon={<GitCommit className="h-6 w-6 opacity-50" />}
      />
    );
  }

  // Sort by complexity (descending)
  const sortedItems = [...complexItems].sort((a, b) => {
    const complexityA = a.cyclomaticComplexity || a.complexity || 0;
    const complexityB = b.cyclomaticComplexity || b.complexity || 0;
    return complexityB - complexityA;
  });

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Complexity Issues</h3>
      <div className="space-y-4">
        {sortedItems.map((item, index) => (
          <div key={index} className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold">
                {item.name || item.function || 'Unnamed function'}
              </h4>
              <div className={`px-2 py-1 rounded ${getComplexityBadgeClass(item.complexity || item.cyclomaticComplexity || 0)}`}>
                Complexity: {item.complexity || item.cyclomaticComplexity || 'Unknown'}
              </div>
            </div>
            
            <div className="mb-3">
              <Progress 
                value={getPercentageValue(item.complexity || item.cyclomaticComplexity || 0)} 
                className={`h-2 ${getComplexityProgressClass(item.complexity || item.cyclomaticComplexity || 0)}`}
              />
            </div>
            
            <div className="flex flex-col gap-2 text-sm">
              <div className="font-mono text-xs text-white/70">{item.file}:{item.line}</div>
              
              {item.explanation && (
                <div className="text-white/70">{item.explanation}</div>
              )}
              
              <div className="mt-2 p-3 bg-white/5 rounded text-white/80">
                <span className="font-semibold">Recommendation: </span>
                {getRecommendation(item.complexity || item.cyclomaticComplexity || 0)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper functions
const getComplexityBadgeClass = (complexity: number): string => {
  if (complexity > 20) return 'bg-red-500/20 text-red-400';
  if (complexity > 10) return 'bg-amber-500/20 text-amber-400';
  return 'bg-emerald-500/20 text-emerald-400';
};

const getComplexityProgressClass = (complexity: number): string => {
  if (complexity > 20) return 'bg-red-500';
  if (complexity > 10) return 'bg-amber-500';
  return 'bg-emerald-500';
};

const getPercentageValue = (complexity: number): number => {
  // Scale complexity to percentage (assuming 30 is max)
  const percentage = (complexity / 30) * 100;
  return Math.min(percentage, 100);
};

const getRecommendation = (complexity: number): string => {
  if (complexity > 20) {
    return 'Split this function into multiple smaller functions. Extract repeated logic into utility functions. Consider redesigning the component or algorithm.';
  }
  if (complexity > 10) {
    return 'Refactor to reduce conditional logic. Look for opportunities to extract helper methods or use more declarative patterns.';
  }
  return 'This function is moderately complex. Consider adding comments to explain the logic and watch for future complexity increases.';
};

export default ComplexityReport;

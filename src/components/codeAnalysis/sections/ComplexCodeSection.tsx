
import React from 'react';
import { ComplexityItem } from '@/utils/codeAnalysis/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { GitCommit, Code } from 'lucide-react';
import EmptyState from '@/components/ui/empty-state';

interface ComplexCodeSectionProps {
  complexCode: ComplexityItem[];
}

const ComplexCodeSection: React.FC<ComplexCodeSectionProps> = ({ complexCode }) => {
  if (complexCode.length === 0) {
    return (
      <Card className="glass-morphism border-white/10 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <GitCommit className="h-5 w-5 mr-2" />
            Complex Code
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState 
            message="No complex code detected" 
            icon={<Code className="h-6 w-6 opacity-50" />}
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-morphism border-white/10 mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <GitCommit className="h-5 w-5 mr-2" />
          Complex Code ({complexCode.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {complexCode.map((item, index) => (
            <div key={index} className="glass-morphism border-white/10 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">
                  {item.name || item.function || 'Unnamed function'}
                </h3>
                <span className={`text-sm ${getComplexityColorClass(item.complexity || item.cyclomaticComplexity || 0)}`}>
                  Complexity: {item.complexity || item.cyclomaticComplexity || 'Unknown'}
                </span>
              </div>
              
              <div className="mb-3">
                <h4 className="text-sm font-medium mb-1">Location:</h4>
                <p className="font-mono text-xs text-white/70">
                  {item.file}:{item.line}
                </p>
              </div>
              
              {item.explanation && (
                <div>
                  <h4 className="text-sm font-medium mb-1">Issue:</h4>
                  <p className="text-sm text-white/70">{item.explanation}</p>
                </div>
              )}
              
              <div className="mt-3">
                <h4 className="text-sm font-medium mb-1">Recommendation:</h4>
                <p className="text-sm text-white/70">
                  {getRecommendation(item.complexity || item.cyclomaticComplexity || 0)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Helper functions
const getComplexityColorClass = (complexity: number): string => {
  if (complexity > 20) return 'text-red-400';
  if (complexity > 10) return 'text-amber-400';
  return 'text-emerald-400';
};

const getRecommendation = (complexity: number): string => {
  if (complexity > 20) {
    return 'Split this function into multiple smaller functions with clear single responsibilities.';
  }
  if (complexity > 10) {
    return 'Consider refactoring to reduce conditional logic and extract helper methods.';
  }
  return 'Monitor this function for future complexity increases.';
};

export default ComplexCodeSection;


import React from 'react';
import { AlertTriangle, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockPerformanceIssues } from '@/utils/codeAnalysis/mockData';

const PerformanceReport: React.FC = () => {
  const issues = mockPerformanceIssues;

  if (issues.length === 0) {
    return (
      <div className="rounded-lg p-6 border glass-morphism border-white/10">
        <div className="flex flex-col items-center justify-center text-center py-8">
          <Zap className="h-12 w-12 text-green-400 mb-3" />
          <h3 className="text-xl font-semibold mb-2">No Performance Issues</h3>
          <p className="text-white/70 max-w-md">
            No significant performance issues were detected in the codebase. Continue monitoring as the application grows.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">Performance Issues</h3>
        <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-400/20">
          {issues.length} issues
        </Badge>
      </div>
      
      <div className="space-y-3">
        {issues.map((issue) => (
          <Card key={issue.id} className="bg-black/20 border-white/5 overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle 
                  className={`h-5 w-5 mt-1 ${
                    issue.severity === 'high' ? 'text-red-400' : 
                    issue.severity === 'medium' ? 'text-amber-400' : 
                    'text-blue-400'
                  }`} 
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-sm">{issue.description}</h4>
                    <Badge 
                      variant="outline" 
                      className={`ml-2 ${
                        issue.severity === 'high' ? 'bg-red-500/10 text-red-400 border-red-400/20' : 
                        issue.severity === 'medium' ? 'bg-amber-500/10 text-amber-400 border-amber-400/20' : 
                        'bg-blue-500/10 text-blue-400 border-blue-400/20'
                      }`}
                    >
                      {issue.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-white/60 mt-1">
                    {issue.file}:{issue.lineNumber}
                  </p>
                  <p className="text-sm mt-2">
                    <span className="text-white/90">Recommendation:</span>{' '}
                    <span className="text-white/70">{issue.recommendation}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PerformanceReport;

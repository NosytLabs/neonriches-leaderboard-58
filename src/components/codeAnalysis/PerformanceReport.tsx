
import React from 'react';
import { PerformanceIssue } from '@/utils/codeAnalysis/types';
import EmptyState from '@/components/ui/empty-state';
import { Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PerformanceReportProps {
  performanceIssues?: PerformanceIssue[];
}

const PerformanceReport: React.FC<PerformanceReportProps> = ({ performanceIssues = [] }) => {
  if (performanceIssues.length === 0) {
    return (
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Performance Issues</h3>
        <EmptyState 
          message="No performance issues found" 
          icon={<Zap className="h-6 w-6 opacity-50" />}
        />
      </div>
    );
  }

  // Sort by severity
  const sortedIssues = [...performanceIssues].sort((a, b) => {
    const severityMap: Record<string, number> = { high: 3, medium: 2, low: 1 };
    return severityMap[b.severity] - severityMap[a.severity];
  });

  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium mb-4">Performance Issues</h3>
      <div className="space-y-4">
        {sortedIssues.map((issue, index) => (
          <div key={index} className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold">{issue.description}</h4>
              <Badge className={getSeverityBadgeClass(issue.severity)}>
                {issue.severity.toUpperCase()}
              </Badge>
            </div>
            
            <div className="flex flex-col gap-2 text-sm">
              <div className="font-mono text-xs text-white/70">{issue.file}:{issue.lineNumber}</div>
              
              <div className="mt-2 p-3 bg-white/5 rounded text-white/80">
                <span className="font-semibold">Recommendation: </span>
                {issue.recommendation}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function for severity badge styling
const getSeverityBadgeClass = (severity: string): string => {
  switch (severity) {
    case 'high':
      return 'bg-red-500/20 text-red-400 border-red-500/20';
    case 'medium':
      return 'bg-amber-500/20 text-amber-400 border-amber-500/20';
    case 'low':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/20';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/20';
  }
};

export default PerformanceReport;

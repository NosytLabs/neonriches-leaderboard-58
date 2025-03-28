
import React from 'react';
import { AlertTriangle, Zap, FileWarning } from 'lucide-react';

const PerformanceReport: React.FC = () => {
  // Mock data for performance issues
  const performanceIssues = [
    {
      id: 1,
      file: 'src/components/profile/ProfileViewer.tsx',
      issue: 'Large component with multiple responsibilities',
      recommendation: 'Split into smaller, focused components',
      severity: 'medium',
    },
    {
      id: 2,
      file: 'src/hooks/useProfileData.ts',
      issue: 'Inefficient data fetching pattern',
      recommendation: 'Implement proper caching strategy',
      severity: 'high',
    },
    {
      id: 3,
      file: 'src/components/TeamSection.tsx',
      issue: 'Expensive calculations in render method',
      recommendation: 'Move calculations to useMemo or useCallback hooks',
      severity: 'medium',
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Zap className="h-5 w-5 mr-2 text-amber-500" />
        Performance Issues
      </h3>
      
      {performanceIssues.length === 0 ? (
        <div className="text-center py-8 text-white/60">
          <FileWarning className="h-12 w-12 mx-auto mb-3 text-white/40" />
          <p>No performance issues detected.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-white/70 mb-4">
            The following performance issues were detected in your codebase. Addressing these can improve application responsiveness.
          </p>
          
          {performanceIssues.map((issue) => (
            <div 
              key={issue.id} 
              className={`p-4 rounded-md border ${
                issue.severity === 'high' 
                  ? 'border-red-500/30 bg-red-500/10' 
                  : issue.severity === 'medium'
                    ? 'border-amber-500/30 bg-amber-500/10'
                    : 'border-blue-500/30 bg-blue-500/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium flex items-center">
                  <AlertTriangle className={`h-4 w-4 mr-2 ${
                    issue.severity === 'high' ? 'text-red-500' : 
                    issue.severity === 'medium' ? 'text-amber-500' : 'text-blue-500'
                  }`} />
                  {issue.issue}
                </h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  issue.severity === 'high' ? 'bg-red-500/20 text-red-500' : 
                  issue.severity === 'medium' ? 'bg-amber-500/20 text-amber-500' : 'bg-blue-500/20 text-blue-500'
                }`}>
                  {issue.severity}
                </span>
              </div>
              <p className="text-sm text-white/70 mb-1">File: <code className="text-xs bg-white/10 px-1 py-0.5 rounded">{issue.file}</code></p>
              <p className="text-sm text-white/70">
                <span className="font-medium">Recommendation:</span> {issue.recommendation}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PerformanceReport;

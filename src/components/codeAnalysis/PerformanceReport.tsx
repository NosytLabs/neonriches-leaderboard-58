
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PerformanceIssue } from '@/utils/codeAnalysis/projectMetrics';
import { AlertCircle, AlertOctagon, AlertTriangle, FileWarning } from 'lucide-react';

interface PerformanceReportProps {
  issues: PerformanceIssue[];
}

const PerformanceReport: React.FC<PerformanceReportProps> = ({ issues }) => {
  // Sort issues by severity
  const sortedIssues = [...issues].sort((a, b) => {
    const severityMap = { critical: 4, high: 3, medium: 2, low: 1 };
    return severityMap[b.severity] - severityMap[a.severity];
  });

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <AlertOctagon className="h-5 w-5 text-red-500" />;
      case 'high':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'medium':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'low':
      default:
        return <FileWarning className="h-5 w-5 text-blue-500" />;
    }
  };

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500/10 text-red-500 border-red-500/50';
      case 'high':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/50';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/50';
      case 'low':
      default:
        return 'bg-blue-500/10 text-blue-500 border-blue-500/50';
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Performance Issues ({issues.length})</h2>
      
      {sortedIssues.length === 0 ? (
        <Alert className="bg-green-500/10 border-green-500/50">
          <AlertCircle className="h-4 w-4 text-green-500" />
          <AlertTitle>No Performance Issues</AlertTitle>
          <AlertDescription>Great job! No performance issues were detected in your codebase.</AlertDescription>
        </Alert>
      ) : (
        <div className="space-y-4">
          {sortedIssues.map((issue) => (
            <Card key={issue.id} className="overflow-hidden">
              <div className={`px-4 py-2 ${getSeverityClass(issue.severity)}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getSeverityIcon(issue.severity)}
                    <span className="font-medium capitalize">{issue.type}</span>
                  </div>
                  <Badge variant="outline" className={getSeverityClass(issue.severity)}>
                    {issue.severity}
                  </Badge>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm">{issue.description}</p>
                
                {issue.file && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    <code>
                      {issue.file}{issue.lineNumber ? `:${issue.lineNumber}` : ''}
                    </code>
                  </div>
                )}
                
                {issue.recommendation && (
                  <>
                    <Separator className="my-3" />
                    <div className="text-sm">
                      <strong>Recommendation:</strong> {issue.recommendation}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PerformanceReport;

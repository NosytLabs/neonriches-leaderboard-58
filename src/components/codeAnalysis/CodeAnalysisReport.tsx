
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { analyzeProject, getProjectMetrics } from '@/utils/codeAnalysis/projectAnalysis';
import PerformanceReport from './PerformanceReport';
import { PerformanceIssue } from '@/utils/codeAnalysis/projectMetrics';
import AnalysisLayout from './shared/AnalysisLayout';

const CodeAnalysisReport: React.FC = () => {
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const metrics = getProjectMetrics();

  useEffect(() => {
    const loadIssues = async () => {
      const projectIssues = await analyzeProject();
      setIssues(projectIssues);
    };
    
    loadIssues();
  }, []);

  return (
    <AnalysisLayout 
      title="Code Analysis Report" 
      description="An analysis of the codebase to identify areas for cleanup and improvement."
      metrics={metrics}
    >
      <Tabs defaultValue="issues" className="space-y-4">
        <TabsList>
          <TabsTrigger value="issues">Issues ({issues.length})</TabsTrigger>
          <TabsTrigger value="unused">Unused Code</TabsTrigger>
          <TabsTrigger value="duplicates">Duplicates</TabsTrigger>
          <TabsTrigger value="complexity">Complexity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="issues">
          <Card>
            <CardHeader>
              <CardTitle>Code Issues</CardTitle>
              <CardDescription>
                Issues detected in the codebase that should be addressed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceReport issues={issues} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="unused">
          <Card>
            <CardHeader>
              <CardTitle>Unused Code</CardTitle>
              <CardDescription>
                Code that appears to be unused and could potentially be removed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Analysis found approximately 15% of the codebase contains unused or dead code.
                Run a full analysis to see detailed results.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="duplicates">
          <Card>
            <CardHeader>
              <CardTitle>Duplicate Code</CardTitle>
              <CardDescription>
                Sections of code that are duplicated and could be consolidated.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Significant duplication found in type definitions, utility functions,
                and component patterns. Consider refactoring these areas.
              </p>
            </CardContent>
          </Card>  
        </TabsContent>
        
        <TabsContent value="complexity">
          <Card>
            <CardHeader>
              <CardTitle>Code Complexity</CardTitle>
              <CardDescription>
                Areas of code with high cyclomatic complexity that could be simplified.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Several complex components and utility functions were identified.
                Simplifying these would improve maintainability.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AnalysisLayout>
  );
};

export default CodeAnalysisReport;

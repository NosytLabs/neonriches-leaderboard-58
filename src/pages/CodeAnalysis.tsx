
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Code, AlertTriangle } from 'lucide-react';
import AnalysisLayout from '@/components/codeAnalysis/shared/AnalysisLayout';
import AnalysisControls from '@/components/codeAnalysis/AnalysisControls';
import UnusedFilesSection from '@/components/codeAnalysis/sections/UnusedFilesSection';
import UnusedImportsSection from '@/components/codeAnalysis/sections/UnusedImportsSection';
import UnusedVariablesSection from '@/components/codeAnalysis/sections/UnusedVariablesSection';
import UnusedCssSelectorsSection from '@/components/codeAnalysis/sections/UnusedCssSelectorsSection';
import UnusedDependenciesSection from '@/components/codeAnalysis/sections/UnusedDependenciesSection';
import DeadCodePathsSection from '@/components/codeAnalysis/sections/DeadCodePathsSection';
import DuplicateCodeSection from '@/components/codeAnalysis/sections/DuplicateCodeSection';
import ComplexCodeSection from '@/components/codeAnalysis/sections/ComplexCodeSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { getAnalysisResults } from '@/components/codeAnalysis/runAnalysis';
import { AnalysisResult } from '@/utils/codeAnalysis/types';
import { useToast } from '@/hooks/use-toast';
import { generateAnalysisReport } from '@/utils/codeAnalysis/reportGenerator';
import { Link } from 'react-router-dom';

const CodeAnalysis: React.FC = () => {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState('issues');
  const { toast } = useToast();

  const runAnalysis = async () => {
    try {
      setIsAnalyzing(true);
      const results = await getAnalysisResults();
      setAnalysisResult(results);
      toast({
        title: 'Analysis Complete',
        description: `Found ${
          results.unusedFiles.length + 
          results.unusedImports.length + 
          results.unusedVariables.length +
          results.unusedCssSelectors.length +
          results.deadCodePaths.length +
          results.duplicateCode.length +
          results.complexCode.length +
          results.unusedDependencies.length
        } potential issues.`,
        variant: 'default',
      });
    } catch (error) {
      console.error('Error running analysis:', error);
      toast({
        title: 'Analysis Failed',
        description: 'There was an error analyzing the codebase.',
        variant: 'destructive',
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  useEffect(() => {
    runAnalysis();
  }, []);

  if (!analysisResult) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <AlertTriangle className="h-12 w-12 text-amber-500 animate-pulse mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Analyzing Codebase...</h2>
        <p className="text-white/70">This may take a moment. We're scanning your code for issues.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="p-4 flex items-center justify-between mb-2">
        <Link to="/dashboard">
          <Button variant="outline" size="sm" className="glass-morphism border-white/10 hover:bg-white/10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
        <AnalysisControls 
          analysisResult={analysisResult}
          onRefresh={runAnalysis}
          isRefreshing={isAnalyzing}
        />
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-4">
          <TabsList className="glass-morphism border-white/10">
            <TabsTrigger value="issues" className="data-[state=active]:bg-white/10">
              <Code className="h-4 w-4 mr-2" />
              Issues
            </TabsTrigger>
            <TabsTrigger value="report" className="data-[state=active]:bg-white/10">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Report
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="issues" className="mt-0">
          <AnalysisLayout
            title="Code Cleanup Analysis"
            description="This report identifies potential issues in the codebase that could be improved or removed."
            metrics={analysisResult.metrics}
          >
            <UnusedFilesSection unusedFiles={analysisResult.unusedFiles} />
            <UnusedImportsSection unusedImports={analysisResult.unusedImports} />
            <UnusedVariablesSection unusedVariables={analysisResult.unusedVariables} />
            <UnusedCssSelectorsSection unusedCssSelectors={analysisResult.unusedCssSelectors} />
            <UnusedDependenciesSection unusedDependencies={analysisResult.unusedDependencies} />
            <DeadCodePathsSection deadCodePaths={analysisResult.deadCodePaths} />
            <DuplicateCodeSection duplicateCode={analysisResult.duplicateCode} />
            <ComplexCodeSection complexCode={analysisResult.complexCode as any} />
          </AnalysisLayout>
        </TabsContent>
        
        <TabsContent value="report" className="mt-0">
          <AnalysisLayout
            title="Analysis Report"
            description="Complete analysis report in markdown format."
          >
            <div className="glass-morphism border-white/10 p-6 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm font-mono text-white/80">
                {generateAnalysisReport(analysisResult)}
              </pre>
            </div>
          </AnalysisLayout>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CodeAnalysis;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, CheckCircle, Zap, FileCode, Code, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getAnalysisResults } from '@/components/codeAnalysis/runAnalysis';
import { AnalysisResult } from '@/utils/codeAnalysis/types';
import { exportAnalysisReportAsMarkdown, saveReportToFile } from '@/utils/codeAnalysis/exportReports';
import { generateAnalysisReport } from '@/utils/codeAnalysis/reportGenerator';
import { formatFileSize } from '@/utils/formatters';
import AnalysisLayout from '@/components/codeAnalysis/shared/AnalysisLayout';
import UnusedCodeReport from '@/components/codeAnalysis/UnusedCodeReport';
import DuplicateCodeReport from '@/components/codeAnalysis/DuplicateCodeReport';
import ComplexityReport from '@/components/codeAnalysis/ComplexityReport';
import PerformanceReport from '@/components/codeAnalysis/PerformanceReport';

const CodeCleanupReport: React.FC = () => {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('summary');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setIsLoading(true);
        const results = await getAnalysisResults();
        setAnalysisResult(results);
      } catch (error) {
        console.error('Error fetching analysis results:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, []);

  const handleDownloadReport = () => {
    if (analysisResult) {
      const markdown = exportAnalysisReportAsMarkdown(analysisResult);
      saveReportToFile(markdown, 'code-cleanup-report.md', 'text/markdown');
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-transparent border-royal-gold rounded-full animate-spin mb-4" />
        <p className="text-white/70">Analyzing codebase for cleanup opportunities...</p>
      </div>
    );
  }

  if (!analysisResult) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-white/70 mb-4">Failed to load analysis data.</p>
        <Link to="/dashboard">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  const metrics = analysisResult.metrics || {
    beforeCleanup: { projectSize: 0, fileCount: 0, dependencyCount: 0 },
    afterCleanup: { projectSize: 0, fileCount: 0, dependencyCount: 0 }
  };
  
  // Get counts with fallbacks
  const unusedFilesCount = analysisResult.unusedFiles?.length || 0;
  const unusedImportsCount = analysisResult.unusedImports?.length || 0;
  const unusedVariablesCount = analysisResult.unusedVariables?.length || 0;
  const unusedSelectorsCount = analysisResult.unusedSelectors?.length || 0;
  const deadCodeCount = analysisResult.deadCode?.length || 0;
  const duplicateCodeCount = analysisResult.duplicateCode?.length || 0;
  const complexCodeCount = analysisResult.complexCode?.length || 0;
  const unusedDependenciesCount = analysisResult.unusedDependencies?.length || 0;

  // Calculate potential savings
  const projectSize = metrics.beforeCleanup.projectSize || 0;
  const afterSize = metrics.afterCleanup.projectSize || 0;
  const sizeReduction = projectSize - afterSize;
  const percentReduction = projectSize > 0 ? ((sizeReduction / projectSize) * 100).toFixed(1) : "0.0";
  
  // Calculate total issues found
  const totalIssues = 
    unusedFilesCount +
    unusedImportsCount +
    unusedVariablesCount +
    unusedSelectorsCount +
    deadCodeCount +
    duplicateCodeCount +
    complexCodeCount +
    unusedDependenciesCount;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <Link to="/dashboard">
          <Button variant="outline" size="sm" className="glass-morphism border-white/10 hover:bg-white/10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
        
        <Button 
          onClick={handleDownloadReport}
          variant="outline"
          size="sm"
          className="glass-morphism border-white/10 hover:bg-white/10"
        >
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-center royal-gradient">Code Cleanup Analysis</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-4">
          <TabsList className="glass-morphism border-white/10">
            <TabsTrigger value="summary" className="data-[state=active]:bg-white/10">
              <Zap className="h-4 w-4 mr-2" />
              Summary
            </TabsTrigger>
            <TabsTrigger value="unused" className="data-[state=active]:bg-white/10">
              <FileCode className="h-4 w-4 mr-2" />
              Unused Code
            </TabsTrigger>
            <TabsTrigger value="duplicate" className="data-[state=active]:bg-white/10">
              <Copy className="h-4 w-4 mr-2" />
              Duplicate Code
            </TabsTrigger>
            <TabsTrigger value="complex" className="data-[state=active]:bg-white/10">
              <Code className="h-4 w-4 mr-2" />
              Complex Code
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="summary" className="mt-4">
          <div className="glass-morphism border-white/10 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Code Cleanup Analysis Summary</h2>
            <p className="text-white/70 mb-6">Analysis of potential code improvements and optimizations to enhance performance and maintainability.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">{totalIssues}</div>
                <div className="text-sm text-white/70">Total Issues Found</div>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">{formatFileSize((metrics.beforeCleanup?.projectSize || 0) * 1024)}</div>
                <div className="text-sm text-white/70">Current Project Size</div>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1 text-emerald-500">{percentReduction}%</div>
                <div className="text-sm text-white/70">Potential Size Reduction</div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Summary of Findings</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium">Unused Code</p>
                  <p className="text-sm text-white/70">
                    Found {unusedFilesCount} unused files, {unusedImportsCount} unused imports, 
                    and {unusedVariablesCount} unused variables. These can be safely removed to reduce bundle size.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium">Code Duplication</p>
                  <p className="text-sm text-white/70">
                    Identified {duplicateCodeCount} instances of duplicated code patterns.
                    Refactoring these into shared utilities would improve maintainability.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium">Complex Code</p>
                  <p className="text-sm text-white/70">
                    Found {complexCodeCount} functions with high complexity scores.
                    Breaking these down would improve readability and testability.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium">Type Definition Issues</p>
                  <p className="text-sm text-white/70">
                    Numerous type mismatches, especially in components using outdated property names.
                    Standardizing type definitions would resolve many build errors.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Recommended Cleanup Approach</h3>
            <ol className="space-y-3 list-decimal list-inside text-white/80">
              <li>Start with zero-risk changes (unused imports, variables, CSS selectors)</li>
              <li>Fix type definition mismatches to resolve build errors</li>
              <li>Remove unused files and dependencies</li>
              <li>Address code duplication by creating shared utilities</li>
              <li>Refactor complex components into smaller, focused components</li>
            </ol>
          </div>
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Project Metrics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Current Metrics</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Project Size: {formatFileSize((metrics.beforeCleanup?.projectSize || 0) * 1024)}</li>
                  <li>File Count: {metrics.beforeCleanup?.fileCount || 0}</li>
                  <li>Dependencies: {metrics.beforeCleanup?.dependencyCount || 0}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">After Cleanup (Estimated)</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Project Size: {formatFileSize((metrics.afterCleanup?.projectSize || 0) * 1024)}</li>
                  <li>File Count: {metrics.afterCleanup?.fileCount || 0}</li>
                  <li>Dependencies: {metrics.afterCleanup?.dependencyCount || 0}</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="unused" className="mt-4">
          <AnalysisLayout
            title="Unused Code"
            description="These elements are not being used in the codebase and can potentially be removed."
          >
            <UnusedCodeReport />
          </AnalysisLayout>
        </TabsContent>
        
        <TabsContent value="duplicate" className="mt-4">
          <AnalysisLayout
            title="Duplicate Code"
            description="These code patterns appear in multiple places and could be refactored into shared utilities."
          >
            <DuplicateCodeReport />
          </AnalysisLayout>
        </TabsContent>
        
        <TabsContent value="complex" className="mt-4">
          <AnalysisLayout
            title="Complex Code"
            description="These functions and components have high complexity and could benefit from refactoring."
          >
            <div className="space-y-8">
              <ComplexityReport />
              <PerformanceReport />
            </div>
          </AnalysisLayout>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 p-6 glass-morphism border-white/10 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Next Steps for Code Cleanup</h2>
        <p className="text-white/70 mb-4">
          To implement these cleanup recommendations, start with small, incremental changes that provide immediate value
          without risking application stability. Each change should be tested thoroughly before moving to the next.
        </p>
        
        <div className="space-y-3">
          <div className="p-3 glass-morphism border-white/10 rounded-lg">
            <h3 className="font-medium">1. Type Definition Standardization</h3>
            <p className="text-sm text-white/70">
              Resolve type mismatches by updating interface definitions to match actual usage patterns.
              This includes addressing MockeryAction, UserProfile, and other core types.
            </p>
          </div>
          
          <div className="p-3 glass-morphism border-white/10 rounded-lg">
            <h3 className="font-medium">2. Code Duplication Refactoring</h3>
            <p className="text-sm text-white/70">
              Extract common patterns from shameUtils.ts and mockeryUtils.ts into shared utility functions.
              Create generic components for repetitive UI patterns like the unused code sections.
            </p>
          </div>
          
          <div className="p-3 glass-morphism border-white/10 rounded-lg">
            <h3 className="font-medium">3. Component Decomposition</h3>
            <p className="text-sm text-white/70">
              Break down large components like PublicShamingFestival.tsx and CodeAnalysisReport.tsx into
              smaller, focused components with single responsibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeCleanupReport;

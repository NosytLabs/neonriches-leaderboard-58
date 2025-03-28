
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAnalysisResults } from '@/components/codeAnalysis/runAnalysis';
import { AnalysisResult } from '@/utils/codeAnalysis/types';
import { exportAnalysisReportAsMarkdown, saveReportToFile } from '@/utils/codeAnalysis/exportReports';
import { formatFileSize } from '@/utils/formatters';

const CodeAnalysisReport: React.FC = () => {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
      saveReportToFile(markdown, 'code-analysis-report.md');
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin mb-4" />
        <p className="text-white/70">Loading analysis report...</p>
      </div>
    );
  }

  if (!analysisResult) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-white/70 mb-4">Failed to load analysis data.</p>
        <Link to="/code-analysis">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Analysis
          </Button>
        </Link>
      </div>
    );
  }

  const {
    unusedFiles,
    unusedImports,
    unusedVariables,
    unusedFunctions,
    unusedCssSelectors,
    deadCodePaths,
    duplicateCode,
    complexCode,
    unusedDependencies,
    metrics
  } = analysisResult;

  // Calculate potential savings
  const sizeReduction = metrics.beforeCleanup.projectSize - metrics.afterCleanup.projectSize;
  const percentReduction = ((sizeReduction / metrics.beforeCleanup.projectSize) * 100).toFixed(1);
  
  // Calculate total issues found
  const totalIssues = 
    unusedFiles.length +
    unusedImports.length +
    unusedVariables.length +
    unusedFunctions.length +
    unusedCssSelectors.length +
    deadCodePaths.length +
    duplicateCode.length +
    complexCode.length +
    unusedDependencies.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <Link to="/code-analysis">
          <Button variant="outline" size="sm" className="glass-morphism border-white/10 hover:bg-white/10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Analysis
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
      
      <div className="glass-morphism border-white/10 p-6 rounded-lg mb-8">
        <h1 className="text-2xl font-bold mb-2">Code Cleanup Analysis Report</h1>
        <p className="text-white/70 mb-6">Generated report highlighting potential code improvements and optimizations.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-1">{totalIssues}</div>
            <div className="text-sm text-white/70">Total Issues Found</div>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-1">{formatFileSize(metrics.beforeCleanup.projectSize * 1024)}</div>
            <div className="text-sm text-white/70">Current Project Size</div>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-1 text-emerald-500">{percentReduction}%</div>
            <div className="text-sm text-white/70">Potential Size Reduction</div>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-3">Summary of Findings</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" />
            <div>
              <p className="font-medium">Unused Code</p>
              <p className="text-sm text-white/70">
                Found {unusedFiles.length} unused files, {unusedImports.length} unused imports, 
                {unusedVariables.length} unused variables, and {unusedFunctions.length} unused functions.
                These can be safely removed to reduce bundle size.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" />
            <div>
              <p className="font-medium">Code Duplication</p>
              <p className="text-sm text-white/70">
                Identified {duplicateCode.length} instances of duplicated code patterns.
                Refactoring these into shared utilities would improve maintainability.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" />
            <div>
              <p className="font-medium">Complex Code</p>
              <p className="text-sm text-white/70">
                Found {complexCode.length} functions with high complexity scores.
                Breaking these down would improve readability and testability.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" />
            <div>
              <p className="font-medium">CSS & Dependencies</p>
              <p className="text-sm text-white/70">
                Detected {unusedCssSelectors.length} unused CSS selectors and {unusedDependencies.length} unused dependencies.
                Removing these would reduce bundle size and improve load times.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-3">Recommended Cleanup Approach</h2>
        <ol className="space-y-3 list-decimal list-inside text-white/80">
          <li>Start with zero-risk changes (unused imports, variables, CSS selectors)</li>
          <li>Move to medium-risk changes (unused files, dependencies, dead code paths)</li>
          <li>Finally address complex issues (code duplication, complexity)</li>
        </ol>
      </div>
      
      <div className="glass-morphism border-white/10 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Project Metrics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Current Metrics</h3>
            <ul className="space-y-2 text-white/80">
              <li>Project Size: {formatFileSize(metrics.beforeCleanup.projectSize * 1024)}</li>
              <li>File Count: {metrics.beforeCleanup.fileCount}</li>
              <li>Dependencies: {metrics.beforeCleanup.dependencyCount}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">After Cleanup (Estimated)</h3>
            <ul className="space-y-2 text-white/80">
              <li>Project Size: {formatFileSize(metrics.afterCleanup.projectSize * 1024)}</li>
              <li>File Count: {metrics.afterCleanup.fileCount}</li>
              <li>Dependencies: {metrics.afterCleanup.dependencyCount}</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <Link to="/code-analysis">
          <Button variant="default" className="bg-royal-gold text-black hover:bg-royal-gold/90">
            View Detailed Analysis
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CodeAnalysisReport;

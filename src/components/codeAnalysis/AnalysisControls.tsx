
import React from 'react';
import { Download, FileJson, FileText, FileCode, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { exportAnalysisReportAsMarkdown, exportAnalysisReportAsJSON, exportAnalysisReportAsHTML, saveReportToFile } from '@/utils/codeAnalysis/exportReports';
import { AnalysisResult } from '@/utils/codeAnalysis/types';

interface AnalysisControlsProps {
  analysisResult: AnalysisResult;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

const AnalysisControls: React.FC<AnalysisControlsProps> = ({ 
  analysisResult, 
  onRefresh,
  isRefreshing = false
}) => {
  const handleExportMarkdown = () => {
    const markdown = exportAnalysisReportAsMarkdown(analysisResult);
    saveReportToFile(markdown, 'code-analysis-report.md');
  };
  
  const handleExportJSON = () => {
    const json = exportAnalysisReportAsJSON(analysisResult);
    saveReportToFile(json, 'code-analysis-report.json');
  };
  
  const handleExportHTML = () => {
    const html = exportAnalysisReportAsHTML(analysisResult);
    saveReportToFile(html, 'code-analysis-report.html');
  };
  
  return (
    <div className="flex gap-2 items-center">
      {onRefresh && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRefresh}
          disabled={isRefreshing}
          className="glass-morphism border-white/10 hover:bg-white/10"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Analyzing...' : 'Refresh Analysis'}
        </Button>
      )}
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="glass-morphism border-white/10 hover:bg-white/10"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="glass-morphism border-white/10">
          <DropdownMenuItem onClick={handleExportMarkdown}>
            <FileText className="h-4 w-4 mr-2" />
            Export as Markdown
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleExportJSON}>
            <FileJson className="h-4 w-4 mr-2" />
            Export as JSON
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleExportHTML}>
            <FileCode className="h-4 w-4 mr-2" />
            Export as HTML
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AnalysisControls;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw } from 'lucide-react';
import { AnalysisResult } from '@/utils/codeAnalysis/types';
import { exportAnalysisReportAsMarkdown, saveReportToFile } from '@/utils/codeAnalysis/exportReports';

interface AnalysisControlsProps {
  analysisResult: AnalysisResult;
  onRefresh: () => void;
  isRefreshing: boolean;
}

const AnalysisControls: React.FC<AnalysisControlsProps> = ({ 
  analysisResult, 
  onRefresh,
  isRefreshing
}) => {
  const handleDownloadReport = () => {
    if (!analysisResult) return;
    
    const markdown = exportAnalysisReportAsMarkdown(analysisResult);
    saveReportToFile(markdown, 'code-analysis-report.md');
  };
  
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        className="glass-morphism border-white/10 hover:bg-white/10"
        onClick={onRefresh}
        disabled={isRefreshing}
      >
        <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
        {isRefreshing ? 'Analyzing...' : 'Refresh Analysis'}
      </Button>
      
      <Button 
        variant="outline"
        size="sm"
        className="glass-morphism border-white/10 hover:bg-white/10"
        onClick={handleDownloadReport}
      >
        <Download className="h-4 w-4 mr-2" />
        Download Report
      </Button>
    </div>
  );
};

export default AnalysisControls;

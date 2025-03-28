import React from 'react';
import { FileSearch } from 'lucide-react';
import AnalysisTabs from './AnalysisTabs';
import { AnalysisResult } from '@/utils/codeAnalysis/types';

type AnalysisTab = 'unused' | 'duplicate' | 'complexity' | 'performance' | 'overview';

interface AnalysisResultsProps {
  analysisComplete: boolean;
  analysisResult: AnalysisResult | null;
  isAnalyzing: boolean;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  analysisComplete,
  analysisResult,
  isAnalyzing
}) => {
  const [activeTab, setActiveTab] = React.useState<AnalysisTab>('overview');

  if (isAnalyzing) {
    return (
      <div className="glass-morphism border-white/10 p-6 rounded-lg mt-6">
        <div className="flex items-center justify-center py-8">
          <FileSearch className="h-6 w-6 mr-3 animate-pulse text-royal-gold" />
          <p>Analyzing codebase... This may take a moment.</p>
        </div>
      </div>
    );
  }

  if (!analysisComplete || !analysisResult) {
    return null;
  }

  return (
    <div className="space-y-6">
      <AnalysisTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        analysisResult={analysisResult} 
      />
    </div>
  );
};

export default AnalysisResults;

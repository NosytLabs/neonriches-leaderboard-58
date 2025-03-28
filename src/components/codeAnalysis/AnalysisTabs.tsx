
import React from 'react';
import UnusedCodeReport from './UnusedCodeReport';
import DuplicateCodeReport from './DuplicateCodeReport';
import ComplexityReport from './ComplexityReport';
import PerformanceReport from './PerformanceReport';
import CodeAnalysisReport from './CodeAnalysisReport';
import { AnalysisResult } from '@/utils/codeAnalysis/analysisUtils';

type AnalysisTab = 'unused' | 'duplicate' | 'complexity' | 'performance' | 'overview';

interface AnalysisTabsProps {
  activeTab: AnalysisTab;
  setActiveTab: (tab: AnalysisTab) => void;
  analysisResult: AnalysisResult;
}

const AnalysisTabs: React.FC<AnalysisTabsProps> = ({ 
  activeTab, 
  setActiveTab, 
  analysisResult 
}) => {
  return (
    <div className="analysis-card rounded-md overflow-hidden glass-morphism border-white/10">
      <div className="p-4 border-b border-white/10 flex">
        <nav className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${activeTab === 'overview' ? 'bg-royal-gold/10 text-royal-gold' : 'text-white/70 hover:text-white/90'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('unused')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${activeTab === 'unused' ? 'bg-royal-gold/10 text-royal-gold' : 'text-white/70 hover:text-white/90'}`}
          >
            Unused Code
          </button>
          <button
            onClick={() => setActiveTab('duplicate')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${activeTab === 'duplicate' ? 'bg-royal-gold/10 text-royal-gold' : 'text-white/70 hover:text-white/90'}`}
          >
            Duplicate Code
          </button>
          <button
            onClick={() => setActiveTab('complexity')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${activeTab === 'complexity' ? 'bg-royal-gold/10 text-royal-gold' : 'text-white/70 hover:text-white/90'}`}
          >
            Complexity
          </button>
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${activeTab === 'performance' ? 'bg-royal-gold/10 text-royal-gold' : 'text-white/70 hover:text-white/90'}`}
          >
            Performance
          </button>
        </nav>
      </div>
      
      <div className="p-6">
        {activeTab === 'overview' && <CodeAnalysisReport analysis={analysisResult} />}
        {activeTab === 'unused' && <UnusedCodeReport />}
        {activeTab === 'duplicate' && <DuplicateCodeReport />}
        {activeTab === 'complexity' && <ComplexityReport />}
        {activeTab === 'performance' && <PerformanceReport />}
      </div>
    </div>
  );
};

export default AnalysisTabs;

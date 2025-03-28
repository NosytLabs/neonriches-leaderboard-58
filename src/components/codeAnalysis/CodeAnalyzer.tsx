
import React, { useState } from 'react';
import AnalysisSettings from './AnalysisSettings';
import UnusedCodeReport from './UnusedCodeReport';
import DuplicateCodeReport from './DuplicateCodeReport';
import ComplexityReport from './ComplexityReport';

type AnalysisTab = 'unused' | 'duplicate' | 'complexity' | 'performance';

const CodeAnalyzer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AnalysisTab>('unused');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <AnalysisSettings 
        onStartAnalysis={handleStartAnalysis} 
        isAnalyzing={isAnalyzing} 
      />
      
      {analysisComplete && (
        <div className="space-y-6">
          <div className="analysis-card rounded-md overflow-hidden">
            <div className="p-4 border-b border-white/10 flex">
              <nav className="flex space-x-4">
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
              {activeTab === 'unused' && <UnusedCodeReport />}
              {activeTab === 'duplicate' && <DuplicateCodeReport />}
              {activeTab === 'complexity' && <ComplexityReport />}
              {activeTab === 'performance' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Performance Issues</h3>
                  <p className="text-white/70">Analyzing performance issues in your codebase...</p>
                  <div className="my-6 p-4 border border-dashed border-white/20 rounded-md">
                    <p className="text-center text-white/60">Performance analysis will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeAnalyzer;

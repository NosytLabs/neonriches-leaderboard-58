
import React, { useState } from 'react';
import AnalysisSettings from './AnalysisSettings';
import UnusedCodeReport from './UnusedCodeReport';
import DuplicateCodeReport from './DuplicateCodeReport';
import ComplexityReport from './ComplexityReport';
import PerformanceReport from './PerformanceReport';
import { Button } from '@/components/ui/button';
import { AlertCircle, Code, FileSearch } from 'lucide-react';

type AnalysisTab = 'unused' | 'duplicate' | 'complexity' | 'performance';

const CodeAnalyzer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AnalysisTab>('unused');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [settings, setSettings] = useState({
    includeNodeModules: false,
    includeTests: true,
    complexityThreshold: 10,
    duplicateLineThreshold: 5,
    includeUnusedImports: true,
    includeUnusedVariables: true,
    includeUnusedFunctions: true,
    includeUnusedComponents: true,
    includeComplexFunctions: true,
    includeDuplicateCode: true,
    includeUnusedCSSSelectors: true,
    includePerformanceIssues: true,
  });

  const handleSettingChange = (settingName: string, value: boolean | number) => {
    setSettings(prev => ({
      ...prev,
      [settingName]: value
    }));
  };

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
      <div className="glass-morphism border-white/10 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <FileSearch className="h-5 w-5 mr-2 text-royal-gold" />
          <h2 className="text-xl font-semibold">Royal Code Analysis</h2>
        </div>
        <p className="text-white/70 mb-6">
          Analyze your codebase to identify opportunities for optimization and cleanup.
        </p>

        <AnalysisSettings 
          settings={settings}
          onSettingChange={handleSettingChange}
        />
        
        <div className="mt-6 flex justify-end">
          <Button
            onClick={handleStartAnalysis}
            disabled={isAnalyzing}
            className="bg-royal-gold hover:bg-royal-gold/90 text-black"
          >
            {isAnalyzing ? "Analyzing..." : "Start Analysis"}
          </Button>
        </div>
      </div>
      
      {analysisComplete && (
        <div className="space-y-6">
          <div className="analysis-card rounded-md overflow-hidden glass-morphism border-white/10">
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
              {activeTab === 'performance' && <PerformanceReport />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeAnalyzer;

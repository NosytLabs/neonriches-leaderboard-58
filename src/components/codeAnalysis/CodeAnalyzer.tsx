
import React, { useState } from 'react';
import AnalysisSettings from './AnalysisSettings';
import AnalysisResults from './AnalysisResults';
import { Button } from '@/components/ui/button';
import { FileSearch } from 'lucide-react';
import { AnalysisResult } from '@/utils/codeAnalysis/analysisUtils';

const CodeAnalyzer: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
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

  const handleStartAnalysis = async () => {
    setIsAnalyzing(true);
    
    try {
      // In a real application, we would call the actual analysis function
      // For now, we'll simulate it with a timeout and mock data
      setTimeout(() => {
        const mockResult: AnalysisResult = {
          unusedFiles: [
            'src/components/legacy/OldComponent.tsx',
            'src/utils/deprecated/helperFunctions.ts'
          ],
          unusedFunctions: [
            { file: 'src/utils/helpers.ts', name: 'formatLegacyDate', line: 42 },
            { file: 'src/components/common/Button.tsx', name: 'handleLegacyClick', line: 67 }
          ],
          unusedImports: [
            { file: 'src/components/Dashboard.tsx', name: 'useState', line: 3 },
            { file: 'src/utils/api.ts', name: 'axios', line: 1 }
          ],
          unusedVariables: [
            { file: 'src/context/AuthContext.tsx', name: 'loading', line: 12 },
            { file: 'src/hooks/useData.ts', name: 'error', line: 8 }
          ],
          unusedCssSelectors: [
            { file: 'src/styles/main.css', selector: 'legacy-button', line: 156 },
            { file: 'src/styles/components.css', selector: 'unused-container', line: 78 }
          ],
          deadCodePaths: [
            { file: 'src/utils/api.ts', description: 'Unreachable code after return statement', line: 45 },
            { file: 'src/components/User.tsx', description: 'Condition always evaluates to false', line: 92 }
          ],
          duplicateCode: [
            { files: ['src/utils/formatters.ts', 'src/utils/helpers.ts'], similarity: 0.95, lines: 12 },
            { files: ['src/components/Button.tsx', 'src/components/IconButton.tsx'], similarity: 0.85, lines: 8 }
          ],
          complexCode: [
            { file: 'src/utils/dataProcessing.ts', function: 'transformData', complexity: 15, line: 37 },
            { file: 'src/components/Table.tsx', function: 'renderRows', complexity: 12, line: 124 }
          ]
        };
        
        setAnalysisResult(mockResult);
        setIsAnalyzing(false);
        setAnalysisComplete(true);
      }, 2000);
    } catch (error) {
      console.error('Error during analysis:', error);
      setIsAnalyzing(false);
    }
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
      
      <AnalysisResults 
        analysisComplete={analysisComplete}
        analysisResult={analysisResult}
        isAnalyzing={isAnalyzing}
      />
    </div>
  );
};

export default CodeAnalyzer;

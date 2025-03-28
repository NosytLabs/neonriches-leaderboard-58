
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Loader2, FileCode, Search, AlertTriangle, X, Code, CheckCircle2 } from 'lucide-react';
import UnusedCodeReport from './UnusedCodeReport';
import DuplicateCodeReport from './DuplicateCodeReport';
import ComplexityReport from './ComplexityReport';
import AnalysisSettings from './AnalysisSettings';
import { useToast } from '@/hooks/use-toast';

export interface AnalysisResult {
  unusedImports: Array<{ file: string; imports: string[] }>;
  unusedVariables: Array<{ file: string; variables: Array<{ name: string; line: number; column: number }> }>;
  unusedFunctions: Array<{ file: string; functions: Array<{ name: string; line: number; column: number }> }>;
  unusedComponents: Array<{ file: string; components: Array<{ name: string; line: number; column: number }> }>;
  complexFunctions: Array<{ file: string; functions: Array<{ name: string; complexity: number; line: number; column: number }> }>;
  duplicateCode: Array<{ files: string[]; lineCount: number; similarity: number }>;
  overlySpecificSelectors: Array<{ file: string; selectors: Array<{ selector: string; specificity: number }> }>;
  unusedCSSSelectors: Array<{ file: string; selectors: string[] }>;
  unusedDependencies: Array<{ name: string; version: string; type: 'dependency' | 'devDependency' }>;
  performanceIssues: Array<{ file: string; issues: Array<{ type: string; line: number; column: number; description: string }> }>;
}

const CodeAnalyzer: React.FC = () => {
  const [projectPath, setProjectPath] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>('unused');
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
    includePerformanceIssues: true
  });
  
  const { toast } = useToast();
  
  const handleAnalyze = async () => {
    if (!projectPath.trim()) {
      toast({
        title: "Project path required",
        description: "Please enter a valid project path to analyze",
        variant: "destructive"
      });
      return;
    }
    
    setIsAnalyzing(true);
    setProgress(0);
    
    try {
      // This would be an actual analysis in a real implementation
      // For now, we'll simulate the process with timeouts
      
      // Simulating file scanning
      await simulateProgress(0, 20);
      
      // Simulating code parsing
      await simulateProgress(20, 40);
      
      // Simulating static analysis
      await simulateProgress(40, 70);
      
      // Simulating result compilation
      await simulateProgress(70, 100);
      
      // Mock results - in a real implementation, this would be from actual analysis
      const mockResults: AnalysisResult = {
        unusedImports: [
          { file: 'src/components/SomeComponent.tsx', imports: ['useState', 'useEffect'] },
          { file: 'src/utils/helpers.ts', imports: ['formatDate'] }
        ],
        unusedVariables: [
          { 
            file: 'src/components/AnotherComponent.tsx', 
            variables: [
              { name: 'tempData', line: 15, column: 10 },
              { name: 'isVisible', line: 22, column: 8 }
            ] 
          }
        ],
        unusedFunctions: [
          { 
            file: 'src/utils/formatters.ts', 
            functions: [
              { name: 'formatCurrency', line: 45, column: 0 },
              { name: 'sanitizeHtml', line: 78, column: 0 }
            ] 
          }
        ],
        unusedComponents: [
          { 
            file: 'src/components/ui/CustomButton.tsx', 
            components: [
              { name: 'CustomButtonGroup', line: 120, column: 0 }
            ] 
          }
        ],
        complexFunctions: [
          { 
            file: 'src/services/dataProcessor.ts', 
            functions: [
              { name: 'processUserData', complexity: 15, line: 28, column: 0 },
              { name: 'validateForm', complexity: 12, line: 105, column: 0 }
            ] 
          }
        ],
        duplicateCode: [
          { files: ['src/components/UserList.tsx', 'src/components/AdminList.tsx'], lineCount: 32, similarity: 0.78 },
          { files: ['src/utils/validation.ts', 'src/utils/formHelpers.ts'], lineCount: 18, similarity: 0.65 }
        ],
        overlySpecificSelectors: [
          { 
            file: 'src/styles/components.css', 
            selectors: [
              { selector: '.header .navigation .navbar .menu .item.active', specificity: 121 },
              { selector: '#main-content div.container > .card:first-child', specificity: 102 }
            ] 
          }
        ],
        unusedCSSSelectors: [
          { file: 'src/styles/global.css', selectors: ['.deprecated-warning', '.legacy-alert', '.beta-feature'] }
        ],
        unusedDependencies: [
          { name: 'moment', version: '2.29.1', type: 'dependency' },
          { name: 'lodash', version: '4.17.21', type: 'dependency' }
        ],
        performanceIssues: [
          { 
            file: 'src/components/DataTable.tsx', 
            issues: [
              { type: 'inline-function', line: 45, column: 15, description: 'Inline function in JSX prop \'onClick\' could cause unnecessary re-renders' },
              { type: 'expensive-operation', line: 78, column: 22, description: 'Potentially expensive operation in JSX: items.filter(i => i.isActive).map(renderItem)' }
            ] 
          }
        ]
      };
      
      setAnalysisResult(mockResults);
      toast({
        title: "Analysis Complete",
        description: "Code analysis finished successfully",
        variant: "default"
      });
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };
  
  const simulateProgress = (from: number, to: number): Promise<void> => {
    return new Promise(resolve => {
      const duration = 1000; // 1 second
      const steps = 10;
      const increment = (to - from) / steps;
      let current = from;
      let step = 0;
      
      const interval = setInterval(() => {
        current += increment;
        setProgress(Math.min(Math.round(current), to));
        step++;
        
        if (step >= steps) {
          clearInterval(interval);
          resolve();
        }
      }, duration / steps);
    });
  };
  
  const handleSettingChange = (settingName: string, value: boolean | number) => {
    setSettings(prev => ({
      ...prev,
      [settingName]: value
    }));
  };
  
  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileCode className="mr-2 h-5 w-5" />
          Code Cleanup Analysis Tool
        </CardTitle>
        <CardDescription>
          Identify unused code, duplications, and complexity issues in your codebase
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {!analysisResult && (
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter project path or repository URL"
                  value={projectPath}
                  onChange={(e) => setProjectPath(e.target.value)}
                  className="flex-1"
                  disabled={isAnalyzing}
                />
                <Button 
                  onClick={handleAnalyze} 
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Analyze Code
                    </>
                  )}
                </Button>
              </div>
              
              {isAnalyzing && (
                <div className="space-y-2">
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-muted-foreground text-center">{progress}% - Analyzing codebase...</p>
                </div>
              )}
              
              <AnalysisSettings 
                settings={settings} 
                onSettingChange={handleSettingChange} 
              />
            </div>
          )}
          
          {analysisResult && (
            <>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Analysis Results</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setAnalysisResult(null)}
                >
                  <X className="h-4 w-4 mr-1" /> Clear Results
                </Button>
              </div>
              
              <Tabs defaultValue="unused" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="unused">
                    <AlertTriangle className="h-4 w-4 mr-1" /> Unused Code
                  </TabsTrigger>
                  <TabsTrigger value="duplicate">
                    <Code className="h-4 w-4 mr-1" /> Duplications
                  </TabsTrigger>
                  <TabsTrigger value="complexity">
                    <CheckCircle2 className="h-4 w-4 mr-1" /> Complexity
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="unused">
                  <UnusedCodeReport
                    unusedImports={analysisResult.unusedImports}
                    unusedVariables={analysisResult.unusedVariables}
                    unusedFunctions={analysisResult.unusedFunctions}
                    unusedComponents={analysisResult.unusedComponents}
                    unusedCSSSelectors={analysisResult.unusedCSSSelectors}
                    unusedDependencies={analysisResult.unusedDependencies}
                  />
                </TabsContent>
                
                <TabsContent value="duplicate">
                  <DuplicateCodeReport
                    duplicateCode={analysisResult.duplicateCode}
                  />
                </TabsContent>
                
                <TabsContent value="complexity">
                  <ComplexityReport
                    complexFunctions={analysisResult.complexFunctions}
                    performanceIssues={analysisResult.performanceIssues}
                    overlySpecificSelectors={analysisResult.overlySpecificSelectors}
                  />
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeAnalyzer;

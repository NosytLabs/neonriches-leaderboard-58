
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Settings, Sliders } from 'lucide-react';

interface AnalysisSettingsProps {
  settings: {
    includeNodeModules: boolean;
    includeTests: boolean;
    complexityThreshold: number;
    duplicateLineThreshold: number;
    includeUnusedImports: boolean;
    includeUnusedVariables: boolean;
    includeUnusedFunctions: boolean;
    includeUnusedComponents: boolean;
    includeComplexFunctions: boolean;
    includeDuplicateCode: boolean;
    includeUnusedCSSSelectors: boolean;
    includePerformanceIssues: boolean;
  };
  onSettingChange: (settingName: string, value: boolean | number) => void;
}

const AnalysisSettings: React.FC<AnalysisSettingsProps> = ({ settings, onSettingChange }) => {
  return (
    <Card className="border-muted/40">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center">
          <Settings className="h-4 w-4 mr-2" />
          Analysis Settings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="text-sm font-medium mb-2 flex items-center">
              <Sliders className="h-4 w-4 mr-1" /> Analysis Scope
            </h4>
            
            <div className="flex items-center justify-between">
              <label className="text-sm" htmlFor="includeNodeModules">
                Include node_modules directory
              </label>
              <Switch
                id="includeNodeModules"
                checked={settings.includeNodeModules}
                onCheckedChange={(checked) => onSettingChange('includeNodeModules', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-sm" htmlFor="includeTests">
                Include test files
              </label>
              <Switch
                id="includeTests"
                checked={settings.includeTests}
                onCheckedChange={(checked) => onSettingChange('includeTests', checked)}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm" htmlFor="complexityThreshold">
                  Function Complexity Threshold
                </label>
                <span className="text-sm font-medium">{settings.complexityThreshold}</span>
              </div>
              <Slider
                id="complexityThreshold"
                min={5}
                max={20}
                step={1}
                value={[settings.complexityThreshold]}
                onValueChange={(value) => onSettingChange('complexityThreshold', value[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Simple (5)</span>
                <span>Complex (20)</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm" htmlFor="duplicateLineThreshold">
                  Duplicate Code Line Threshold
                </label>
                <span className="text-sm font-medium">{settings.duplicateLineThreshold}</span>
              </div>
              <Slider
                id="duplicateLineThreshold"
                min={3}
                max={15}
                step={1}
                value={[settings.duplicateLineThreshold]}
                onValueChange={(value) => onSettingChange('duplicateLineThreshold', value[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Few (3)</span>
                <span>Many (15)</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium mb-2">Check Types</h4>
            
            <div className="flex items-center justify-between">
              <label className="text-sm" htmlFor="includeUnusedImports">
                Unused Imports
              </label>
              <Switch
                id="includeUnusedImports"
                checked={settings.includeUnusedImports}
                onCheckedChange={(checked) => onSettingChange('includeUnusedImports', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-sm" htmlFor="includeUnusedVariables">
                Unused Variables
              </label>
              <Switch
                id="includeUnusedVariables"
                checked={settings.includeUnusedVariables}
                onCheckedChange={(checked) => onSettingChange('includeUnusedVariables', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-sm" htmlFor="includeUnusedFunctions">
                Unused Functions
              </label>
              <Switch
                id="includeUnusedFunctions"
                checked={settings.includeUnusedFunctions}
                onCheckedChange={(checked) => onSettingChange('includeUnusedFunctions', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-sm" htmlFor="includeUnusedComponents">
                Unused Components
              </label>
              <Switch
                id="includeUnusedComponents"
                checked={settings.includeUnusedComponents}
                onCheckedChange={(checked) => onSettingChange('includeUnusedComponents', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-sm" htmlFor="includeComplexFunctions">
                Complex Functions
              </label>
              <Switch
                id="includeComplexFunctions"
                checked={settings.includeComplexFunctions}
                onCheckedChange={(checked) => onSettingChange('includeComplexFunctions', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-sm" htmlFor="includeDuplicateCode">
                Duplicate Code
              </label>
              <Switch
                id="includeDuplicateCode"
                checked={settings.includeDuplicateCode}
                onCheckedChange={(checked) => onSettingChange('includeDuplicateCode', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-sm" htmlFor="includeUnusedCSSSelectors">
                Unused CSS Selectors
              </label>
              <Switch
                id="includeUnusedCSSSelectors"
                checked={settings.includeUnusedCSSSelectors}
                onCheckedChange={(checked) => onSettingChange('includeUnusedCSSSelectors', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-sm" htmlFor="includePerformanceIssues">
                Performance Issues
              </label>
              <Switch
                id="includePerformanceIssues"
                checked={settings.includePerformanceIssues}
                onCheckedChange={(checked) => onSettingChange('includePerformanceIssues', checked)}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalysisSettings;

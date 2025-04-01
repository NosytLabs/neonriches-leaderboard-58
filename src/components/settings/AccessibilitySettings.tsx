
import React from 'react';
import { Accessibility, Type, Zap, Eye } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import SettingsLayout from './SettingsLayout';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { useSettings } from '@/contexts/SettingsContext';

const AccessibilitySettings: React.FC = () => {
  const { toast } = useToast();
  const { accessibilitySettings, updateAccessibilitySettings, isLoading } = useSettings();
  
  const handleTextSizeChange = (value: number[]) => {
    updateAccessibilitySettings({ textSize: value[0] });
  };
  
  const handleToggleHighContrast = () => {
    updateAccessibilitySettings({ 
      highContrast: !accessibilitySettings.highContrast 
    });
  };
  
  const handleToggleReducedMotion = () => {
    updateAccessibilitySettings({ 
      reducedMotion: !accessibilitySettings.reducedMotion 
    });
  };
  
  const handleToggleReducedTransparency = () => {
    updateAccessibilitySettings({ 
      reducedTransparency: !accessibilitySettings.reducedTransparency 
    });
  };
  
  const saveChanges = () => {
    toast({
      title: "Settings Saved",
      description: "Your accessibility settings have been updated.",
    });
  };
  
  return (
    <SettingsLayout 
      title="Accessibility"
      description="Customize your experience for better accessibility"
      icon={<Accessibility className="h-5 w-5 text-purple-400" />}
      footerContent={
        <Button onClick={saveChanges} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      }
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="text-size" className="flex items-center">
            <Type className="mr-2 h-4 w-4" />
            Text Size
          </Label>
          <div className="flex items-center gap-4">
            <span className="text-sm">A</span>
            <Slider
              id="text-size"
              value={[accessibilitySettings.textSize]}
              min={75}
              max={150}
              step={5}
              onValueChange={handleTextSizeChange}
              className="flex-1"
            />
            <span className="text-lg">A</span>
            <span className="min-w-[45px] text-center text-sm">{accessibilitySettings.textSize}%</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="high-contrast" className="flex items-center">
              <Eye className="mr-2 h-4 w-4" />
              High Contrast Mode
            </Label>
            <p className="text-sm text-white/70">Increase contrast for better readability</p>
          </div>
          <Switch 
            id="high-contrast" 
            checked={accessibilitySettings.highContrast} 
            onCheckedChange={handleToggleHighContrast} 
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="reduced-motion" className="flex items-center">
              <Zap className="mr-2 h-4 w-4" />
              Reduced Motion
            </Label>
            <p className="text-sm text-white/70">Minimize animations and motion effects</p>
          </div>
          <Switch 
            id="reduced-motion" 
            checked={accessibilitySettings.reducedMotion} 
            onCheckedChange={handleToggleReducedMotion} 
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="reduced-transparency" className="flex items-center">
              <Eye className="mr-2 h-4 w-4" />
              Reduced Transparency
            </Label>
            <p className="text-sm text-white/70">Reduce blur and transparency effects</p>
          </div>
          <Switch 
            id="reduced-transparency" 
            checked={accessibilitySettings.reducedTransparency} 
            onCheckedChange={handleToggleReducedTransparency} 
          />
        </div>
        
        <div className="p-4 rounded-lg bg-black/20 mt-4">
          <h3 className="text-sm font-medium mb-2">Preview</h3>
          <div className={`p-4 rounded border border-white/20 ${accessibilitySettings.highContrast ? 'bg-black text-white' : 'bg-black/50 text-white/90'}`}>
            <p 
              style={{ 
                fontSize: `${accessibilitySettings.textSize}%`,
                transition: accessibilitySettings.reducedMotion ? 'none' : 'all 0.3s ease' 
              }}
            >
              This is how text will appear with your current settings.
            </p>
            <div 
              className={`
                mt-2 p-2 rounded 
                ${accessibilitySettings.reducedTransparency ? 'bg-black/90' : 'bg-black/50 backdrop-blur-sm'} 
                ${accessibilitySettings.highContrast ? 'text-white border border-white/40' : 'text-white/80 border border-white/10'}
              `}
              style={{ 
                fontSize: `${accessibilitySettings.textSize * 0.9}%`,
                transition: accessibilitySettings.reducedMotion ? 'none' : 'all 0.3s ease'
              }}
            >
              Sample UI element with your accessibility settings applied.
            </div>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default AccessibilitySettings;

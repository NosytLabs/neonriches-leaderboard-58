
import React from 'react';
import { Accessibility, Type, Zap, Eye } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import SettingsLayout from './SettingsLayout';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const AccessibilitySettings = () => {
  const { toast } = useToast();
  const [textSize, setTextSize] = React.useState(100);
  const [highContrast, setHighContrast] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [reducedTransparency, setReducedTransparency] = React.useState(false);
  
  const saveChanges = () => {
    // This would actually save the changes to the user's profile
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
        <Button onClick={saveChanges}>Save Changes</Button>
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
              value={[textSize]}
              min={75}
              max={150}
              step={5}
              onValueChange={(value) => setTextSize(value[0])}
              className="flex-1"
            />
            <span className="text-lg">A</span>
            <span className="min-w-[45px] text-center text-sm">{textSize}%</span>
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
            checked={highContrast} 
            onCheckedChange={setHighContrast} 
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
            checked={reducedMotion} 
            onCheckedChange={setReducedMotion} 
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
            checked={reducedTransparency} 
            onCheckedChange={setReducedTransparency} 
          />
        </div>
      </div>
    </SettingsLayout>
  );
};

export default AccessibilitySettings;

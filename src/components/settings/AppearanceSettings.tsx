
import React, { useState } from 'react';
import { Settings, Sun, Moon, Laptop, Crown } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SettingsLayout from './SettingsLayout';
import { ThemeType } from '@/types/settings';
import { useSettings } from '@/contexts/SettingsContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const AppearanceSettings: React.FC = () => {
  const { 
    theme, 
    setTheme, 
    userSettings, 
    updateSettings,
    isLoading 
  } = useSettings();
  
  const { toast } = useToast();
  
  const handleThemeChange = (value: string) => {
    setTheme(value as ThemeType);
  };
  
  const handleSaveChanges = () => {
    toast({
      title: "Appearance Settings Saved",
      description: "Your appearance preferences have been updated.",
    });
  };
  
  return (
    <SettingsLayout
      title="Appearance"
      description="Customize how SpendThrone looks and feels"
      icon={<Settings className="h-5 w-5 text-purple-400" />}
      footerContent={
        <Button onClick={handleSaveChanges} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      }
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Theme</h3>
          <RadioGroup
            value={theme}
            onValueChange={handleThemeChange}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <Label
              htmlFor="light"
              className={`
                flex flex-col items-center justify-between rounded-md border-2 p-4 hover:bg-slate-100/10 cursor-pointer
                transition-all
                ${theme === 'light' ? 'border-primary' : 'border-transparent'}
              `}
            >
              <RadioGroupItem value="light" id="light" className="sr-only" />
              <div className="rounded-md border border-slate-400/20 bg-white p-2">
                <Sun className="h-6 w-6 text-yellow-400" />
              </div>
              <span className="block w-full text-center mt-2">Light</span>
            </Label>

            <Label
              htmlFor="dark"
              className={`
                flex flex-col items-center justify-between rounded-md border-2 p-4 hover:bg-slate-100/10 cursor-pointer
                transition-all
                ${theme === 'dark' ? 'border-primary' : 'border-transparent'}
              `}
            >
              <RadioGroupItem value="dark" id="dark" className="sr-only" />
              <div className="rounded-md border border-slate-400/20 bg-slate-900 p-2">
                <Moon className="h-6 w-6 text-slate-300" />
              </div>
              <span className="block w-full text-center mt-2">Dark</span>
            </Label>

            <Label
              htmlFor="system"
              className={`
                flex flex-col items-center justify-between rounded-md border-2 p-4 hover:bg-slate-100/10 cursor-pointer
                transition-all
                ${theme === 'system' ? 'border-primary' : 'border-transparent'}
              `}
            >
              <RadioGroupItem value="system" id="system" className="sr-only" />
              <div className="rounded-md border border-slate-400/20 bg-gradient-to-br from-white to-slate-900 p-2">
                <Laptop className="h-6 w-6 text-slate-400" />
              </div>
              <span className="block w-full text-center mt-2">System</span>
            </Label>

            <Label
              htmlFor="royal"
              className={`
                flex flex-col items-center justify-between rounded-md border-2 p-4 hover:bg-slate-100/10 cursor-pointer
                transition-all
                ${theme === 'royal' ? 'border-primary' : 'border-transparent'}
              `}
            >
              <RadioGroupItem value="royal" id="royal" className="sr-only" />
              <div className="rounded-md border border-slate-400/20 bg-purple-900 p-2">
                <Crown className="h-6 w-6 text-yellow-400" />
              </div>
              <span className="block w-full text-center mt-2">Royal</span>
            </Label>
          </RadioGroup>
        </div>
        
        <div className="space-y-4">
          <Tabs defaultValue="theme" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="theme">Theme</TabsTrigger>
              <TabsTrigger value="behavior">Behavior</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            
            <TabsContent value="theme" className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="flex flex-col">
                  <span className="text-sm font-medium">Dark Mode</span>
                  <span className="text-xs text-slate-400">Enable darker interface</span>
                </Label>
                <Switch 
                  id="dark-mode" 
                  checked={userSettings.darkMode} 
                  onCheckedChange={(value) => updateSettings({ darkMode: value })} 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="show-badges" className="flex flex-col">
                  <span className="text-sm font-medium">Show Badges</span>
                  <span className="text-xs text-slate-400">Display achievement badges on profile</span>
                </Label>
                <Switch 
                  id="show-badges" 
                  checked={userSettings.showBadges} 
                  onCheckedChange={(value) => updateSettings({ showBadges: value })} 
                />
              </div>
            </TabsContent>
            
            <TabsContent value="behavior" className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="sound-effects" className="flex flex-col">
                  <span className="text-sm font-medium">Sound Effects</span>
                  <span className="text-xs text-slate-400">Enable or disable all sound effects</span>
                </Label>
                <Switch 
                  id="sound-effects" 
                  checked={userSettings.soundEffects} 
                  onCheckedChange={(value) => updateSettings({ soundEffects: value })} 
                />
              </div>
            </TabsContent>
            
            <TabsContent value="preview" className="mt-4">
              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-2">Theme Preview</h3>
                <div className={`rounded-md p-3 ${theme === 'dark' || userSettings.darkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'}`}>
                  <p className="mb-2">This is how the application will look with your selected theme.</p>
                  <div className={`
                    rounded border p-2 text-sm
                    ${theme === 'dark' || userSettings.darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}
                    ${theme === 'royal' ? 'border-purple-700 bg-purple-900 text-white' : ''}
                  `}>
                    Sample UI component in {theme === 'royal' ? 'Royal' : theme === 'dark' || userSettings.darkMode ? 'Dark' : 'Light'} theme
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default AppearanceSettings;

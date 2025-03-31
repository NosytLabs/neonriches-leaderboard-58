
import React from 'react';
import { Paintbrush } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import SettingsLayout from './SettingsLayout';
import { useSettings } from '@/contexts/SettingsContext';

const AppearanceSettings: React.FC = () => {
  const { theme, setTheme, isDarkTheme } = useSettings();
  
  const handleThemeChange = (value: string) => {
    setTheme(value as 'dark' | 'light' | 'system' | 'royal');
  };
  
  return (
    <SettingsLayout 
      title="Appearance"
      description="Customize how the application looks and feels"
      icon={<Paintbrush className="h-5 w-5 text-purple-400" />}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="theme">Theme</Label>
            <p className="text-sm text-white/70">
              Choose between light, dark, or system preference
            </p>
          </div>
          <Select value={theme} onValueChange={handleThemeChange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="royal">Royal</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="p-4 bg-black/20 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Current Theme: {theme === 'system' ? 'System default' : theme}</h3>
          <p className="text-sm text-white/70">
            {isDarkTheme 
              ? "Dark theme is currently active. This theme reduces eye strain in low-light environments." 
              : "Light theme is currently active. This theme provides better contrast in bright environments."}
          </p>
        </div>
        
        <div className="animate-fade-in">
          <div className="flex flex-col space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div 
                className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${theme === 'dark' || (theme === 'system' && isDarkTheme) ? 'border-royal-gold/80' : 'border-transparent'}`}
                onClick={() => setTheme('dark')}
              >
                <div className="h-20 bg-black rounded-md mb-2 shadow-md"></div>
                <p className="text-sm font-medium">Dark</p>
              </div>
              
              <div 
                className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${theme === 'light' || (theme === 'system' && !isDarkTheme) ? 'border-royal-gold/80' : 'border-transparent'}`}
                onClick={() => setTheme('light')}
              >
                <div className="h-20 bg-white rounded-md mb-2 shadow-md"></div>
                <p className="text-sm font-medium">Light</p>
              </div>
              
              <div 
                className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${theme === 'royal' ? 'border-royal-gold/80' : 'border-transparent'}`}
                onClick={() => setTheme('royal')}
              >
                <div className="h-20 bg-gradient-to-br from-purple-900 to-purple-600 rounded-md mb-2 shadow-md"></div>
                <p className="text-sm font-medium">Royal</p>
              </div>
              
              <div 
                className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${theme === 'system' ? 'border-royal-gold/80' : 'border-transparent'}`}
                onClick={() => setTheme('system')}
              >
                <div className="h-20 bg-gradient-to-r from-gray-800 to-gray-200 rounded-md mb-2 shadow-md"></div>
                <p className="text-sm font-medium">System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default AppearanceSettings;

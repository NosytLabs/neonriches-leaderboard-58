
import React from 'react';
import { Paintbrush } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import SettingsLayout from './SettingsLayout';
import { useSettings } from '@/contexts/SettingsContext';

const AppearanceSettings = () => {
  const { theme } = useSettings();
  
  return (
    <SettingsLayout 
      title="Appearance"
      description="Customize how the application looks and feels"
      icon={<Paintbrush className="h-5 w-5 text-purple-400" />}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Label htmlFor="theme">Theme</Label>
          <p className="text-sm text-white/70">
            Choose between light, dark, or system preference
          </p>
        </div>
        <ThemeToggle />
      </div>
      
      <p className="text-sm text-white/70 mt-2">
        Current theme: {theme === 'system' ? 'System default' : theme}
      </p>
    </SettingsLayout>
  );
};

export default AppearanceSettings;

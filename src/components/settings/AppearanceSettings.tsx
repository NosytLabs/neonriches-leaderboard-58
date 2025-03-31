
import React from 'react';
import { Paintbrush, Monitor, Sun, Moon, Crown } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import SettingsLayout from './SettingsLayout';
import { useSettings } from '@/contexts/SettingsContext';
import { motion } from 'framer-motion';

const AppearanceSettings: React.FC = () => {
  const { theme, setTheme, isDarkTheme } = useSettings();
  
  const handleThemeChange = (value: string) => {
    setTheme(value as 'dark' | 'light' | 'system' | 'royal');
  };
  
  const getThemeIcon = (currentTheme: string) => {
    switch (currentTheme) {
      case 'light': 
        return <Sun className="h-4 w-4" />;
      case 'dark': 
        return <Moon className="h-4 w-4" />;
      case 'royal': 
        return <Crown className="h-4 w-4" />;
      default: 
        return <Monitor className="h-4 w-4" />;
    }
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
            <SelectTrigger className="w-40 bg-black/20">
              <div className="flex items-center gap-2">
                {getThemeIcon(theme)}
                <SelectValue placeholder="Select theme" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light" className="flex items-center">
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4" />
                  <span>Light</span>
                </div>
              </SelectItem>
              <SelectItem value="dark">
                <div className="flex items-center gap-2">
                  <Moon className="h-4 w-4" />
                  <span>Dark</span>
                </div>
              </SelectItem>
              <SelectItem value="royal">
                <div className="flex items-center gap-2">
                  <Crown className="h-4 w-4 text-royal-gold" />
                  <span>Royal</span>
                </div>
              </SelectItem>
              <SelectItem value="system">
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  <span>System</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="p-4 bg-black/20 rounded-lg">
          <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
            {getThemeIcon(theme)}
            <span>
              Current Theme: {theme === 'system' ? 'System default' : theme.charAt(0).toUpperCase() + theme.slice(1)}
            </span>
          </h3>
          <p className="text-sm text-white/70">
            {isDarkTheme 
              ? "Dark theme is currently active. This theme reduces eye strain in low-light environments." 
              : "Light theme is currently active. This theme provides better contrast in bright environments."}
          </p>
        </div>
        
        <motion.div 
          className="animate-fade-in"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div 
                className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${theme === 'dark' || (theme === 'system' && isDarkTheme) ? 'border-royal-gold/80' : 'border-transparent'}`}
                onClick={() => setTheme('dark')}
              >
                <div className="h-20 bg-black rounded-md mb-2 shadow-md flex items-center justify-center">
                  <Moon className="h-8 w-8 text-blue-200" />
                </div>
                <p className="text-sm font-medium flex items-center">
                  <Moon className="h-4 w-4 mr-1" /> Dark
                </p>
              </div>
              
              <div 
                className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${theme === 'light' || (theme === 'system' && !isDarkTheme) ? 'border-royal-gold/80' : 'border-transparent'}`}
                onClick={() => setTheme('light')}
              >
                <div className="h-20 bg-white rounded-md mb-2 shadow-md flex items-center justify-center">
                  <Sun className="h-8 w-8 text-amber-500" />
                </div>
                <p className="text-sm font-medium flex items-center">
                  <Sun className="h-4 w-4 mr-1" /> Light
                </p>
              </div>
              
              <div 
                className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${theme === 'royal' ? 'border-royal-gold/80' : 'border-transparent'}`}
                onClick={() => setTheme('royal')}
              >
                <div className="h-20 bg-gradient-to-br from-purple-900 to-purple-600 rounded-md mb-2 shadow-md flex items-center justify-center">
                  <Crown className="h-8 w-8 text-royal-gold animate-pulse-subtle" />
                </div>
                <p className="text-sm font-medium flex items-center">
                  <Crown className="h-4 w-4 mr-1 text-royal-gold" /> Royal
                </p>
              </div>
              
              <div 
                className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${theme === 'system' ? 'border-royal-gold/80' : 'border-transparent'}`}
                onClick={() => setTheme('system')}
              >
                <div className="h-20 bg-gradient-to-r from-gray-800 to-gray-200 rounded-md mb-2 shadow-md flex items-center justify-center">
                  <Monitor className="h-8 w-8 text-blue-300" />
                </div>
                <p className="text-sm font-medium flex items-center">
                  <Monitor className="h-4 w-4 mr-1" /> System
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SettingsLayout>
  );
};

export default AppearanceSettings;

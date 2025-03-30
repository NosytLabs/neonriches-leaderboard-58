
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from '@/providers/ThemeProvider';

const AppearanceSettings = () => {
  const { theme } = useTheme();
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="theme">Theme</Label>
          <ThemeToggle />
        </div>
        <p className="text-sm text-white/70">
          Current theme: {theme === 'system' ? 'System default' : theme}
        </p>
      </CardContent>
    </Card>
  );
};

export default AppearanceSettings;

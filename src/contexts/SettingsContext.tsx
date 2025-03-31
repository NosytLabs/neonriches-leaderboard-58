
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSettingsStore } from '@/stores/settingsStore';
import { useSoundsConfig } from '@/hooks/sounds/use-sounds-config';
import { useTheme } from '@/providers/ThemeProvider';
import { UserSettings, SettingsContextType } from '@/types/settings';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme, isDarkTheme } = useTheme();
  const { soundConfig, toggleSounds, toggleMuted, setVolume, togglePremium } = useSoundsConfig();
  const { notifications, toggleNotifications } = useSettingsStore();
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // Extract profile settings from user.settings
  const profileSettings = {
    showRank: user?.settings?.showRank ?? true,
    showTeam: user?.settings?.showTeam ?? true,
    showSpending: user?.settings?.showSpending ?? true,
    publicProfile: user?.settings?.publicProfile ?? true,
    showEmailOnProfile: user?.settings?.showEmailOnProfile ?? false,
  };
  
  // Extract accessibility settings
  const accessibilitySettings = {
    textSize: user?.settings?.textSize ?? 100,
    highContrast: user?.settings?.highContrast ?? false,
    reducedMotion: user?.settings?.reducedMotion ?? false,
    reducedTransparency: user?.settings?.reducedTransparency ?? false,
  };
  
  // Extract marketing settings
  const marketingSettings = {
    allowProfileLinks: user?.settings?.allowProfileLinks ?? true,
    showEmailOnProfile: user?.settings?.showEmailOnProfile ?? false,
    marketingEmails: user?.settings?.marketingEmails ?? false,
  };
  
  const updateProfileSettings = async (settings: Partial<UserSettings>): Promise<boolean> => {
    if (!user) return false;
    
    setIsLoading(true);
    try {
      const updatedSettings = {
        ...user.settings,
        ...settings
      };
      
      const success = await updateUserProfile({
        settings: updatedSettings
      });
      
      if (success) {
        toast({
          title: "Settings updated",
          description: "Your profile settings have been updated successfully.",
        });
      }
      
      return !!success;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update settings. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  const updateAccessibilitySettings = async (settings: Partial<UserSettings>): Promise<boolean> => {
    if (!user) return false;
    
    setIsLoading(true);
    try {
      const updatedSettings = {
        ...user.settings,
        ...settings
      };
      
      const success = await updateUserProfile({
        settings: updatedSettings
      });
      
      if (success) {
        toast({
          title: "Accessibility settings updated",
          description: "Your accessibility preferences have been updated successfully.",
        });
      }
      
      return !!success;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update accessibility settings. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  const updateMarketingSettings = async (settings: Partial<UserSettings>): Promise<boolean> => {
    if (!user) return false;
    
    setIsLoading(true);
    try {
      const updatedSettings = {
        ...user.settings,
        ...settings
      };
      
      const success = await updateUserProfile({
        settings: updatedSettings
      });
      
      if (success) {
        toast({
          title: "Marketing settings updated",
          description: "Your marketing preferences have been updated successfully.",
        });
      }
      
      return !!success;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update marketing settings. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  const value: SettingsContextType = {
    // Theme settings
    theme,
    setTheme,
    isDarkTheme,
    
    // Sound settings
    soundConfig,
    toggleSounds,
    toggleMuted,
    setVolume,
    togglePremium,
    
    // Notification settings
    notifications,
    toggleNotifications,
    
    // Profile settings
    profileSettings,
    updateProfileSettings,
    
    // Accessibility settings
    accessibilitySettings,
    updateAccessibilitySettings,
    
    // Marketing settings
    marketingSettings,
    updateMarketingSettings,
    
    // Loading state
    isLoading
  };
  
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

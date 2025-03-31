
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Paintbrush, Volume2, Bell, Sparkles, Shield, Accessibility, Monitor } from 'lucide-react';
import { useTabState } from '@/hooks/useTabState';
import PageContainer from '@/components/layout/PageContainer';
import AppearanceSettings from '@/components/settings/AppearanceSettings';
import AudioSettings from '@/components/settings/AudioSettings';
import NotificationSettings from '@/components/settings/NotificationSettings';
import ProfileMarketingSettings from '@/components/profile/ProfileMarketingSettings';
import PrivacySettings from '@/components/settings/PrivacySettings';
import AccessibilitySettings from '@/components/settings/AccessibilitySettings';
import { SettingsProvider } from '@/contexts/SettingsContext';
import SettingsLayout from '@/components/settings/SettingsLayout';
import { useAuth } from '@/hooks/useAuth';
import { motion } from 'framer-motion';

const Settings: React.FC = () => {
  const { user, updateUserProfile } = useAuth();
  const { activeTab, changeTab } = useTabState('appearance');
  
  const handleProfileUpdate = async (updates: any) => {
    if (user && updateUserProfile) {
      await updateUserProfile(updates);
    }
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };
  
  return (
    <SettingsProvider>
      <PageContainer>
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-3xl font-bold mb-6 royal-gradient"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Royal Settings Chamber
          </motion.h1>
          
          <Tabs 
            value={activeTab} 
            onValueChange={changeTab} 
            className="space-y-6"
          >
            <TabsList className="glass-morphism mb-6 grid grid-cols-4 md:grid-cols-7">
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Paintbrush size={16} />
                <span className="hidden sm:inline">Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="audio" className="flex items-center gap-2">
                <Volume2 size={16} />
                <span className="hidden sm:inline">Audio</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell size={16} />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Shield size={16} />
                <span className="hidden sm:inline">Privacy</span>
              </TabsTrigger>
              <TabsTrigger value="accessibility" className="flex items-center gap-2">
                <Accessibility size={16} />
                <span className="hidden sm:inline">Accessibility</span>
              </TabsTrigger>
              <TabsTrigger value="marketing" className="flex items-center gap-2">
                <Sparkles size={16} />
                <span className="hidden sm:inline">Marketing</span>
              </TabsTrigger>
              <TabsTrigger value="advanced" className="flex items-center gap-2">
                <Monitor size={16} />
                <span className="hidden sm:inline">Advanced</span>
              </TabsTrigger>
            </TabsList>
            
            <motion.div 
              className="animate-fade-in"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              key={activeTab}
            >
              <TabsContent value="appearance">
                <AppearanceSettings />
              </TabsContent>
              
              <TabsContent value="audio">
                <AudioSettings />
              </TabsContent>
              
              <TabsContent value="notifications">
                <NotificationSettings />
              </TabsContent>
              
              <TabsContent value="privacy">
                <PrivacySettings />
              </TabsContent>
              
              <TabsContent value="accessibility">
                <AccessibilitySettings />
              </TabsContent>
              
              <TabsContent value="marketing">
                {user && (
                  <ProfileMarketingSettings 
                    user={user} 
                    onSave={handleProfileUpdate} 
                  />
                )}
              </TabsContent>
              
              <TabsContent value="advanced">
                <SettingsLayout 
                  title="Advanced Settings"
                  description="System-level configuration options"
                  icon={<Monitor className="h-5 w-5 text-purple-400" />}
                >
                  <p className="text-white/70">
                    Advanced settings are only available to administrators.
                  </p>
                </SettingsLayout>
              </TabsContent>
            </motion.div>
          </Tabs>
        </div>
      </PageContainer>
    </SettingsProvider>
  );
};

export default Settings;

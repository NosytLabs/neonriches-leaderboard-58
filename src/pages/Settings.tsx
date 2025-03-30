
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Paintbrush, Volume2, Bell, Sparkles } from 'lucide-react';
import ProfileMarketingSettings from '@/components/profile/ProfileMarketingSettings';
import { useAuth } from '@/hooks/useAuth';
import PageContainer from '@/components/layout/PageContainer';
import AppearanceSettings from '@/components/settings/AppearanceSettings';
import AudioSettings from '@/components/settings/AudioSettings';
import NotificationSettings from '@/components/settings/NotificationSettings';

const Settings: React.FC = () => {
  const { user, updateUserProfile } = useAuth();
  
  const handleProfileUpdate = async (updates: any) => {
    if (user && updateUserProfile) {
      await updateUserProfile(updates);
    }
  };
  
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <Tabs defaultValue="appearance" className="space-y-6">
        <TabsList className="glass-morphism mb-4 grid grid-cols-4">
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
          <TabsTrigger value="marketing" className="flex items-center gap-2">
            <Sparkles size={16} />
            <span className="hidden sm:inline">Marketing</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="appearance">
          <AppearanceSettings />
        </TabsContent>
        
        <TabsContent value="audio">
          <AudioSettings />
        </TabsContent>
        
        <TabsContent value="notifications">
          <NotificationSettings />
        </TabsContent>
        
        <TabsContent value="marketing">
          {user && (
            <ProfileMarketingSettings 
              user={user} 
              onSave={handleProfileUpdate} 
            />
          )}
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
};

export default Settings;

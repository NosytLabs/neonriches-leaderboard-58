
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Edit, Settings, Sparkles, BarChart3 } from 'lucide-react';

export type ProfileTab = 'view' | 'edit' | 'settings' | 'boost' | 'analytics';

interface ProfileTabNavigationProps {
  tab: ProfileTab;
  setTab: (tab: ProfileTab) => void;
  viewOnly: boolean;
}

const ProfileTabNavigation: React.FC<ProfileTabNavigationProps> = ({ 
  tab, 
  setTab, 
  viewOnly 
}) => {
  return (
    <div className="mb-6">
      <Tabs value={tab} onValueChange={(value) => setTab(value as ProfileTab)} className="w-full">
        <TabsList className="w-full md:w-auto glass-morphism border-white/10 bg-transparent">
          <TabsTrigger value="view" className="data-[state=active]:bg-white/10">
            <User className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">Profile</span>
          </TabsTrigger>
          
          {!viewOnly && (
            <>
              <TabsTrigger value="edit" className="data-[state=active]:bg-white/10">
                <Edit className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Edit</span>
              </TabsTrigger>
              
              <TabsTrigger value="settings" className="data-[state=active]:bg-white/10">
                <Settings className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Settings</span>
              </TabsTrigger>
              
              <TabsTrigger value="analytics" className="data-[state=active]:bg-white/10">
                <BarChart3 className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Analytics</span>
              </TabsTrigger>
            </>
          )}
          
          <TabsTrigger value="boost" className="data-[state=active]:bg-white/10">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">Boost</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ProfileTabNavigation;

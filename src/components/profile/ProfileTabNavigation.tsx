
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Edit, Settings, Sparkles } from 'lucide-react';

export type ProfileTab = 'view' | 'edit' | 'settings' | 'boost';

interface ProfileTabNavigationProps {
  viewOnly: boolean;
  tab: ProfileTab;
  setTab: (tab: ProfileTab) => void;
}

const ProfileTabNavigation: React.FC<ProfileTabNavigationProps> = ({ 
  viewOnly, 
  tab, 
  setTab 
}) => {
  return (
    <div className="mb-6">
      <Tabs value={tab} onValueChange={(value) => setTab(value as ProfileTab)}>
        <TabsList className="grid grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="view" className="flex items-center gap-2">
            <Eye size={16} />
            <span>View</span>
          </TabsTrigger>
          
          {!viewOnly && (
            <>
              <TabsTrigger value="edit" className="flex items-center gap-2">
                <Edit size={16} />
                <span>Edit</span>
              </TabsTrigger>
              
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings size={16} />
                <span>Settings</span>
              </TabsTrigger>
              
              <TabsTrigger value="boost" className="flex items-center gap-2">
                <Sparkles size={16} />
                <span>Boost</span>
              </TabsTrigger>
            </>
          )}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ProfileTabNavigation;

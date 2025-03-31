
import React from 'react';
import { Eye, Shield, DollarSign, Users } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import SettingsLayout from './SettingsLayout';
import { useSettings } from '@/contexts/SettingsContext';
import { Button } from '@/components/ui/button';

const PrivacySettings = () => {
  const { profileSettings, updateProfileSettings, isLoading } = useSettings();
  
  const saveChanges = async () => {
    // This function would batch any pending changes and save them at once
    // Currently, our changes are applied immediately with individual toggles
  };
  
  return (
    <SettingsLayout 
      title="Privacy Settings"
      description="Control what information is visible to others"
      icon={<Shield className="h-5 w-5 text-purple-400" />}
      footerContent={
        <Button disabled={isLoading} onClick={saveChanges}>
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      }
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="public-profile" className="flex items-center">
              <Eye className="mr-2 h-4 w-4" />
              Public Profile
            </Label>
            <p className="text-sm text-white/70">Make your profile visible to others</p>
          </div>
          <Switch 
            id="public-profile" 
            checked={profileSettings.publicProfile} 
            onCheckedChange={() => updateProfileSettings({ 
              publicProfile: !profileSettings.publicProfile 
            })} 
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="show-rank" className="flex items-center">
              <Crown className="mr-2 h-4 w-4" />
              Show Rank
            </Label>
            <p className="text-sm text-white/70">Display your ranking on your profile</p>
          </div>
          <Switch 
            id="show-rank" 
            checked={profileSettings.showRank} 
            onCheckedChange={() => updateProfileSettings({ 
              showRank: !profileSettings.showRank 
            })} 
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="show-team" className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Show Team
            </Label>
            <p className="text-sm text-white/70">Display your team membership</p>
          </div>
          <Switch 
            id="show-team" 
            checked={profileSettings.showTeam} 
            onCheckedChange={() => updateProfileSettings({ 
              showTeam: !profileSettings.showTeam 
            })} 
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="show-spending" className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4" />
              Show Spending
            </Label>
            <p className="text-sm text-white/70">Display your spending amount on your profile</p>
          </div>
          <Switch 
            id="show-spending" 
            checked={profileSettings.showSpending} 
            onCheckedChange={() => updateProfileSettings({ 
              showSpending: !profileSettings.showSpending 
            })} 
          />
        </div>
      </div>
    </SettingsLayout>
  );
};

export default PrivacySettings;

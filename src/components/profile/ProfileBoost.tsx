
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Zap } from 'lucide-react';
import { UserProfile } from '@/types/user';
import ProfileBoostDisplay from './ProfileBoostDisplay';
import ProfileBoostStore from './ProfileBoostStore';

interface ProfileBoostProps {
  user: UserProfile;
  updateUserProfile?: (data: Partial<UserProfile>) => Promise<void>;
}

const ProfileBoost: React.FC<ProfileBoostProps> = ({ user, updateUserProfile }) => {
  const [activeTab, setActiveTab] = useState('active');

  const handleBoostApplied = () => {
    // Refresh the active boosts by switching tabs
    setActiveTab('active');
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-royal-gold" />
          Profile Boosts
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="active" className="flex items-center gap-1.5">
              <Zap className="h-4 w-4" />
              Active Boosts
            </TabsTrigger>
            <TabsTrigger value="store" className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              Boost Store
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <ProfileBoostDisplay user={user} />
          </TabsContent>
          
          <TabsContent value="store">
            <ProfileBoostStore user={user} onBoostApplied={handleBoostApplied} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileBoost;

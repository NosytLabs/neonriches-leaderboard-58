import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Crown, Globe, Users } from 'lucide-react';
import RoyalCourtMember from './RoyalCourtMember';
import { LeaderboardList } from './components/LeaderboardList';

interface CombinedLeaderboardProps {
  royalCourt: any[];
  leaderboardUsers: any[];
  currentUserId: string;
  onProfileClick?: (userId: string, username: string) => void;
  onShameUser?: (user: any) => void;
}

const CombinedLeaderboard: React.FC<CombinedLeaderboardProps> = ({
  royalCourt,
  leaderboardUsers,
  currentUserId,
  onProfileClick,
  onShameUser
}) => {
  const [activeTab, setActiveTab] = useState('royal');

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          Royal Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 w-full mb-4">
            <TabsTrigger value="royal" className="flex items-center">
              <Crown className="h-4 w-4 mr-2" />
              Royal Court
            </TabsTrigger>
            <TabsTrigger value="spenders" className="flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              Top Spenders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="royal">
            <div className="space-y-4">
              {royalCourt.map((user, index) => (
                <RoyalCourtMember key={user.id} user={user} position={index + 1} />
              ))}
              {royalCourt.length === 0 && (
                <div className="text-center py-4 text-white/60">
                  No royal court members found.
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="spenders">
            <div className="space-y-4">
              <LeaderboardList
                users={leaderboardUsers}
                currentUserId={currentUserId}
                onProfileClick={onProfileClick}
                onShameUser={onShameUser}
              />
              {leaderboardUsers.length === 0 && (
                <div className="text-center py-4 text-white/60">
                  No top spenders found.
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CombinedLeaderboard;

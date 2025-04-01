
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, TrendingUp, Users, DollarSign } from 'lucide-react';
import SpotlightProfile from './SpotlightProfile';
import { UserProfile } from '@/types/user-consolidated';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { formatCurrency } from '@/utils/formatters';

interface SpotlightSectionProps {
  topSpenders: UserProfile[];
  risingStars: UserProfile[];
  topTeams: { name: string; totalSpent: number; members: number }[];
}

const SpotlightSection: React.FC<SpotlightSectionProps> = ({
  topSpenders,
  risingStars,
  topTeams
}) => {
  const [activeTab, setActiveTab] = useState('spenders');
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  
  const handleProfileClick = (profile: UserProfile) => {
    setSelectedProfile(profile);
    setShowProfileDialog(true);
  };
  
  const closeProfileDialog = () => {
    setShowProfileDialog(false);
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          Royal Spotlight
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="spenders" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span className="hidden md:inline">Top Spenders</span>
              <span className="md:hidden">Spenders</span>
            </TabsTrigger>
            <TabsTrigger value="rising" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden md:inline">Rising Stars</span>
              <span className="md:hidden">Rising</span>
            </TabsTrigger>
            <TabsTrigger value="teams" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Teams</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="spenders">
            <div className="space-y-2">
              {topSpenders.map((user, index) => (
                <SpotlightProfile 
                  key={user.id} 
                  user={user} 
                  rank={index + 1}
                  isTopSpender={index === 0} 
                  onClick={() => handleProfileClick(user)} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="rising">
            <div className="space-y-2">
              {risingStars.map((user, index) => (
                <SpotlightProfile 
                  key={user.id} 
                  user={user} 
                  rank={user.rank || index + 1}
                  onClick={() => handleProfileClick(user)} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="teams">
            <div className="space-y-3">
              {topTeams.map((team, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-black/20"
                >
                  <div>
                    <h3 className="font-semibold">{team.name}</h3>
                    <p className="text-xs text-white/60">{team.members} members</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-royal-gold">
                      {formatCurrency(team.totalSpent)}
                    </div>
                    <div className="text-xs text-white/60">
                      Rank #{index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-4">
          <Button variant="outline" className="w-full">
            View Full Leaderboard
          </Button>
        </div>
      </CardContent>
      
      {selectedProfile && (
        <Dialog open={showProfileDialog} onOpenChange={closeProfileDialog}>
          <DialogContent className="glass-morphism border-white/10">
            <DialogHeader>
              <DialogTitle>{selectedProfile.displayName || selectedProfile.username}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4 mt-2">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-white/60">Total Spent</p>
                  <p className="text-lg font-bold text-royal-gold">{formatCurrency(selectedProfile.totalSpent || 0)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-white/60">Rank</p>
                  <p className="text-lg font-bold">{selectedProfile.rank || '?'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-white/60">Team</p>
                  <p className="text-lg font-bold capitalize">{selectedProfile.team || 'None'}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-white/60 mb-1">Bio</p>
                <p className="text-sm">{selectedProfile.bio || 'No bio available.'}</p>
              </div>
              
              <Button className="w-full" onClick={closeProfileDialog}>Close</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </Card>
  );
};

export default SpotlightSection;

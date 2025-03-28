
import React from 'react';
import { UserProfile } from '@/types/user';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Clock, Crown, Zap } from 'lucide-react';
import { useProfileBoost } from '@/hooks/use-profile-boost';
import '../../styles/profile-boost.css';

interface ProfileBoostDisplayProps {
  user: UserProfile;
}

const ProfileBoostDisplay: React.FC<ProfileBoostDisplayProps> = ({ user }) => {
  const { getActiveBoosts, getTimeRemaining, boostEffects } = useProfileBoost(user);
  const activeBoosts = getActiveBoosts();
  
  if (activeBoosts.length === 0) {
    return null;
  }
  
  // Get icon for effect type
  const getEffectIcon = (effectId: string) => {
    switch (effectId) {
      case 'glow':
        return <Zap className="h-4 w-4 text-royal-gold" />;
      case 'crown':
        return <Crown className="h-4 w-4 text-royal-gold" />;
      case 'sparkle':
      default:
        return <Sparkles className="h-4 w-4 text-royal-gold" />;
    }
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center">
          <Sparkles className="mr-2 h-4 w-4 text-royal-gold" />
          Active Profile Boosts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activeBoosts.map((boost) => {
            const effect = boostEffects[boost.effectId] || { name: 'Unknown Effect', cssClass: '' };
            
            return (
              <div key={boost.id} className="flex items-center justify-between glass-morphism border-white/10 p-2 rounded-lg">
                <div className="flex items-center">
                  {getEffectIcon(boost.effectId)}
                  <span className={`ml-2 text-sm ${effect.cssClass}`}>{effect.name}</span>
                </div>
                <Badge variant="outline" className="bg-black/20 text-xs flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {getTimeRemaining(boost)}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileBoostDisplay;

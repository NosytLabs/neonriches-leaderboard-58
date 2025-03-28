
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Zap } from 'lucide-react';
import { useProfileBoost } from '@/hooks/use-profile-boost';
import { UserProfile } from '@/types/user';

interface ProfileBoostDisplayProps {
  user: UserProfile;
}

const ProfileBoostDisplay: React.FC<ProfileBoostDisplayProps> = ({ user }) => {
  const { 
    activeBoosts, 
    getBoostEffect, 
    getBoostTimeRemaining, 
    formatTimeRemaining 
  } = useProfileBoost(user);

  if (!activeBoosts || activeBoosts.length === 0) {
    return null;
  }

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Zap className="h-5 w-5 mr-2 text-royal-gold" />
          Active Boosts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {activeBoosts.map((boost) => {
          const effect = getBoostEffect(boost.effectId);
          const timeRemaining = getBoostTimeRemaining(boost);
          const formattedTime = formatTimeRemaining(timeRemaining);
          
          if (!effect) return null;
          
          return (
            <div key={boost.id} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
              <div>
                <div className="flex items-center">
                  {effect.icon && <span className="mr-2">{effect.icon}</span>}
                  <span className="font-medium">{effect.name}</span>
                </div>
                <div className="text-xs text-white/60">{effect.description}</div>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="bg-white/10 text-royal-gold border-royal-gold/30">
                  {effect.bonusText}
                </Badge>
                <div className="text-xs text-white/60 flex items-center mt-1">
                  <Clock size={12} className="mr-1" />
                  {formattedTime}
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ProfileBoostDisplay;

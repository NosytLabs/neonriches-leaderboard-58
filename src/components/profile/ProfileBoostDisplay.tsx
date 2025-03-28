
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { UserProfile } from '@/types/user';
import { useProfileBoost, BoostEffect } from '@/hooks/use-profile-boost';
import { Sparkles, Clock } from 'lucide-react';

// Define props interface explicitly and export it
export interface ProfileBoostDisplayProps {
  user: UserProfile;
}

// Explicitly type the component as React.FC with the props interface
const ProfileBoostDisplay: React.FC<ProfileBoostDisplayProps> = ({ user }) => {
  const { getActiveBoosts, boostEffects, getTimeRemaining } = useProfileBoost(user);
  const activeBoosts = getActiveBoosts();
  
  if (!activeBoosts || activeBoosts.length === 0) {
    return null;
  }
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Sparkles size={18} className="text-royal-gold mr-2" />
          Active Profile Boosts
        </CardTitle>
        <CardDescription>
          Special effects currently active on your profile
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {activeBoosts.map(boost => {
          // Safely cast the string effectId to the BoostEffect type
          const effectId = boost.effectId as BoostEffect;
          const effect = boostEffects[effectId];
          if (!effect) return null;
          
          return (
            <div 
              key={boost.id} 
              className="glass-morphism p-3 rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-2">{effect.icon}</span>
                <div>
                  <p className="font-medium">{effect.name}</p>
                  <p className="text-xs text-white/60">{effect.description}</p>
                </div>
              </div>
              <div className="text-xs text-white/70 flex items-center">
                <Clock size={12} className="mr-1" />
                {getTimeRemaining({
                  ...boost,
                  effectId: effectId // Ensure we pass the correctly typed effectId
                })}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ProfileBoostDisplay;

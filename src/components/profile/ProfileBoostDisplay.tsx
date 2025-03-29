
import React from 'react';
import { UserProfile } from '@/types/user';
import { Clock, Sparkles } from 'lucide-react';
import { getBoostById } from '@/data/boostEffects';
import useProfileBoost from '@/hooks/use-profile-boost';

interface ProfileBoostDisplayProps {
  className?: string;
}

const ProfileBoostDisplay: React.FC<ProfileBoostDisplayProps> = ({ 
  className = '' 
}) => {
  // Use a mock user for demonstration
  const mockUser: UserProfile = {
    id: 'user-123',
    username: 'royal_spender',
    displayName: 'Royal Spender',
    rank: 1,
    totalSpent: 10000,
    joinedAt: new Date().toISOString(),
    profileBoosts: [
      {
        id: 'boost-1',
        effectId: 'gold-aura',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        level: 1
      },
      {
        id: 'boost-2',
        effectId: 'royal-glow',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        level: 1
      }
    ]
  };

  const { activeBoosts, getBoostEffect, getBoostTimeLeft } = useProfileBoost(mockUser);

  if (activeBoosts.length === 0) {
    return (
      <div className={`text-center p-4 ${className}`}>
        <p className="text-white/60">No active boosts</p>
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="text-lg font-semibold flex items-center">
        <Sparkles className="h-5 w-5 mr-2 text-yellow-400" />
        Active Profile Boosts
      </h3>
      
      <div className="space-y-2">
        {activeBoosts.map(boost => {
          const boostEffect = getBoostEffect(boost.effectId?.toString() || '');
          const timeLeft = getBoostTimeLeft(boost.id);
          
          if (!boostEffect) return null;
          
          return (
            <div 
              key={boost.id} 
              className="glass-morphism border-white/10 p-3 rounded-lg flex justify-between items-center"
            >
              <div>
                <h4 className="font-medium">{boostEffect.name}</h4>
                <p className="text-sm text-white/60">{boostEffect.description}</p>
              </div>
              <div className="flex items-center text-sm text-white/80">
                <Clock className="h-4 w-4 mr-1 text-blue-400" />
                {timeLeft > 24 ? `${Math.floor(timeLeft / 24)}d remaining` : `${timeLeft}h remaining`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileBoostDisplay;


import React from 'react';
import { UserProfile } from '@/types/user';
import { Clock, Sparkles } from 'lucide-react';
import { ProfileBoost } from '@/types/boost';
import useProfileBoost from '@/hooks/use-profile-boost';

interface ProfileBoostDisplayProps {
  user: UserProfile;
  className?: string;
}

const ProfileBoostDisplay: React.FC<ProfileBoostDisplayProps> = ({ 
  user,
  className = '' 
}) => {
  const { activeBoosts, getBoostEffect, getBoostTimeLeft } = useProfileBoost(user);

  if (activeBoosts.length === 0) {
    return (
      <div className={`text-center p-4 ${className}`}>
        <p className="text-white/60">No active boosts found for your profile</p>
        <p className="text-sm text-white/40 mt-2">
          Purchase boosts from the store to enhance your profile visibility
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {activeBoosts.map((boost: ProfileBoost) => {
        const boostEffectId = typeof boost.effectId === 'string' ? boost.effectId : '';
        const boostEffect = getBoostEffect(boostEffectId);
        const timeLeft = getBoostTimeLeft(boost);
        
        return (
          <div 
            key={boost.id} 
            className="p-4 rounded-lg bg-black/20 border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-purple-500 to-pink-500 pointer-events-none"></div>
            
            <div className="flex items-start justify-between relative">
              <div>
                <h4 className="text-lg font-medium flex items-center">
                  <Sparkles className="mr-2 h-4 w-4 text-purple-400" />
                  {boostEffect?.name || 'Profile Boost'}
                </h4>
                
                <p className="text-sm text-white/70 mt-1">
                  {boostEffect?.description || 'Enhances your profile visibility'}
                </p>
                
                <div className="flex items-center mt-3 text-xs text-white/60">
                  <Clock className="h-3.5 w-3.5 mr-1.5" />
                  <span>{timeLeft}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <span className={`px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-300`}>
                  Level {boost.level}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileBoostDisplay;

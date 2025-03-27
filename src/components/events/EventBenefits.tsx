
import React from 'react';
import { Trophy, Award, Users } from 'lucide-react';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';

const EventBenefits = () => {
  return (
    <div className="glass-morphism rounded-xl p-6 border border-white/10 bg-gradient-to-r from-royal-purple/10 via-royal-gold/10 to-royal-blue/10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Event Benefits</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Participating in events offers unique cosmetic rewards to customize your profile. All events are just for fun and don't affect the $1 = 1 rank calculation.
        </p>
      </div>
      
      <RankingDisclaimer className="mb-6" variant="info" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-morphism rounded-lg p-4 border border-white/10 text-center">
          <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-royal-purple/10 mb-4">
            <Trophy size={24} className="text-royal-purple" />
          </div>
          <h3 className="font-medium mb-2">Exclusive Titles</h3>
          <p className="text-sm text-white/70">
            Event participants can earn special titles and badges to customize their profiles and show off their participation.
          </p>
        </div>
        
        <div className="glass-morphism rounded-lg p-4 border border-white/10 text-center">
          <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-royal-gold/10 mb-4">
            <Award size={24} className="text-royal-gold" />
          </div>
          <h3 className="font-medium mb-2">Profile Customization</h3>
          <p className="text-sm text-white/70">
            Unlock unique profile decorations, animations, and visual effects to make your profile stand out from the crowd.
          </p>
        </div>
        
        <div className="glass-morphism rounded-lg p-4 border border-white/10 text-center">
          <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-royal-blue/10 mb-4">
            <Users size={24} className="text-royal-blue" />
          </div>
          <h3 className="font-medium mb-2">Team Rewards</h3>
          <p className="text-sm text-white/70">
            Participate with your team to earn unique team-based cosmetic rewards and show your team spirit with exclusive team flair.
          </p>
        </div>
      </div>
      
      <div className="mt-6 bg-royal-gold/5 p-4 rounded-lg border border-royal-gold/20">
        <h3 className="font-semibold mb-2 text-center text-royal-gold">$1 = 1 Rank Guarantee</h3>
        <p className="text-sm text-white/80 text-center">
          We guarantee that your leaderboard rank is always calculated based solely on your total spending ($1 = 1 unit of rank).
          All event rewards are purely cosmetic and don't affect your rank calculation or give any numerical advantage.
        </p>
      </div>
    </div>
  );
};

export default EventBenefits;

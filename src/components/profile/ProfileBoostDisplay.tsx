
import React from 'react';
import { UserProfile } from '@/types/user';
import { getBoostById } from '@/data/boostEffects';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Sparkles, AlertTriangle } from 'lucide-react';

interface ProfileBoostDisplayProps {
  user: UserProfile;
}

const ProfileBoostDisplay: React.FC<ProfileBoostDisplayProps> = ({ user }) => {
  // Get active boosts from the user profile
  // This is mock data for now
  const activeBoosts = user.boosts || [];
  
  // Calculate time remaining for each boost
  const getTimeRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end.getTime() - now.getTime();
    
    if (diffTime <= 0) {
      return 'Expired';
    }
    
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (diffDays > 0) {
      return `${diffDays}d ${diffHours}h remaining`;
    } else {
      return `${diffHours}h remaining`;
    }
  };
  
  return (
    <div className="space-y-4">
      {activeBoosts.length > 0 ? (
        activeBoosts.map((boost) => {
          const boostDetails = getBoostById(boost.boostId);
          
          if (!boostDetails) return null;
          
          return (
            <Card key={boost.id} className={`border-white/10 ${boostDetails.cssClass}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-royal-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{boostDetails.name}</h3>
                      <p className="text-xs text-white/60">{boostDetails.description}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-black/30 border-white/10">
                    {boostDetails.type.charAt(0).toUpperCase() + boostDetails.type.slice(1)}
                  </Badge>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-white/60 text-sm">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{getTimeRemaining(boost.endDate)}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="h-8">
                    Renew Boost
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <div className="bg-gray-900/50 rounded-lg p-6 text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
            <AlertTriangle className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">No Active Boosts</h3>
          <p className="text-white/70 mb-4">
            You don't have any active profile boosts. Purchase boosts to enhance your profile's visibility and appearance.
          </p>
          <Button>
            <Sparkles className="mr-2 h-4 w-4" />
            Explore Available Boosts
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileBoostDisplay;

// Import all required dependencies and types
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ProfileBoost } from '@/types/user';
import { cn } from '@/lib/utils';

interface AdvertisementBannerProps {
  boosts: ProfileBoost[];
}

const AdvertisementBanner: React.FC<AdvertisementBannerProps> = ({ boosts }) => {
  const [activeBoost, setActiveBoost] = useState<ProfileBoost | null>(null);

  useEffect(() => {
    if (boosts && boosts.length > 0) {
      // Find the most potent active boost
      const now = new Date();
      const active = boosts
        .filter(boost => new Date(boost.startDate) <= now && new Date(boost.endDate) >= now)
        .sort((a, b) => b.level - a.level)[0];

      setActiveBoost(active || null);
    } else {
      setActiveBoost(null);
    }
  }, [boosts]);

  const getBoostMessage = (boost: ProfileBoost): string => {
    if (!boost) return "No active boosts.";

    const endDate = new Date(boost.endDate);
    const timeLeft = endDate.getTime() - Date.now();
    const daysLeft = Math.ceil(timeLeft / (1000 * 3600 * 24));

    return `Profile boosted! Enjoy ${boost.strength}x visibility for ${daysLeft} more days.`;
  };

  const createNewProfileBoost = (): ProfileBoost => {
    return {
      id: `boost-${Date.now()}`, // Generate an ID for the new boost
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
      level: 1,
      effectId: "default-boost",
      type: "visibility",
      strength: 1.5,
      appliedBy: "user"
    };
  };

  const handleUpdateBoost = () => {
    const newBoost: ProfileBoost = createNewProfileBoost();
    // Logic for updating the boost
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold mb-1">Profile Visibility Boost</h3>
            <p className={cn(
              "text-xs text-white/70",
              activeBoost ? "text-green-400" : "text-white/70"
            )}>
              {activeBoost ? getBoostMessage(activeBoost) : "No active boost. Purchase one to increase visibility!"}
            </p>
          </div>
          {/* You can add a button here to purchase a boost */}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvertisementBanner;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Achievement } from '@/components/achievements/AchievementDisplay';
import AchievementDisplay from '@/components/achievements/AchievementDisplay';

interface AchievementsTabProps {
  achievements: Achievement[];
}

const AchievementsTab: React.FC<AchievementsTabProps> = ({ achievements }) => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          Your Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <AchievementDisplay 
              key={achievement.id}
              achievement={achievement}
            />
          ))}
          
          {achievements.length === 0 && (
            <div className="col-span-full text-center py-8">
              <p className="text-white/60">No achievements unlocked yet.</p>
              <Button variant="outline" className="mt-4">
                View Available Achievements
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(AchievementsTab);

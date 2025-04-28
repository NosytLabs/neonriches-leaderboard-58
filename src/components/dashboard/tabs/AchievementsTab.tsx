
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Achievement } from '@/components/achievements/AchievementDisplay';

interface AchievementsTabProps {
  achievements: Achievement[];
}

const AchievementsTab: React.FC<AchievementsTabProps> = ({ achievements = [] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        {achievements.length > 0 ? (
          <ul className="space-y-2">
            {achievements.map(achievement => (
              <li key={achievement.id} className="flex items-center gap-2 p-2 rounded bg-black/20">
                <span className="text-royal-gold">{achievement.icon || '🏆'}</span>
                <div>
                  <h4 className="font-medium">{achievement.name}</h4>
                  <p className="text-sm text-white/70">{achievement.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white/50">No achievements yet. Keep spending to unlock some!</p>
        )}
      </CardContent>
    </Card>
  );
};

export default AchievementsTab;

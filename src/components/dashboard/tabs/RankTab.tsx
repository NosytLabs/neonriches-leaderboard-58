
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
import RankProgressChart from '@/components/dashboard/RankProgressChart';

const RankTab: React.FC = () => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
          Rank Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <RankProgressChart />
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(RankTab);

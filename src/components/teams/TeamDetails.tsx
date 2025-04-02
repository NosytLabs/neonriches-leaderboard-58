import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Users, Trophy, Star } from 'lucide-react';
import { Badge } from '@/components/ui/Badge'; // Fixed import casing

interface TeamDetailsProps {
  teamName: string;
  memberCount: number;
  totalSpent: number;
  rank: number;
  joinProgress: number;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({
  teamName,
  memberCount,
  totalSpent,
  rank,
  joinProgress,
}) => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="mr-2 h-4 w-4" />
          {teamName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
              <span>Rank</span>
            </div>
            <Badge>{rank}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="mr-2 h-4 w-4 text-blue-500" />
              <span>Total Spent</span>
            </div>
            <span>${totalSpent}</span>
          </div>
          <div>
            <span>Join Progress</span>
            <Progress value={joinProgress} />
          </div>
          <Button>View Team</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamDetails;

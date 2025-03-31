
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';
import { UserTier } from '@/types/user';
import RoyalCourtMember from './RoyalCourtMember';

interface RoyalCourtProps {
  className?: string;
}

const RoyalCourt: React.FC<RoyalCourtProps> = ({ className = '' }) => {
  // Mock data for the royal court
  const courtMembers = [
    {
      id: '1',
      username: 'KingMidas',
      displayName: 'King Midas',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      tier: 'royal' as UserTier,
      rank: 1,
      totalSpent: 150000,
      joinDate: '2023-01-01'
    },
    {
      id: '2',
      username: 'QueenFortune',
      displayName: 'Queen Fortune',
      profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      tier: 'royal' as UserTier,
      rank: 2,
      totalSpent: 120000,
      joinDate: '2023-01-15'
    },
    {
      id: '3',
      username: 'PrinceSpender',
      displayName: 'Prince Spender',
      profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      tier: 'premium' as UserTier,
      rank: 3,
      totalSpent: 95000,
      joinDate: '2023-02-01'
    }
  ];
  
  return (
    <Card className={`royal-card border-royal-gold/20 ${className}`}>
      <CardHeader className="royal-header pb-2">
        <CardTitle className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          Royal Court
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courtMembers.map((member, idx) => (
            <RoyalCourtMember 
              key={member.id}
              user={member}
              position={idx + 1}
            />
          ))}
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full mt-2 border-royal-gold/20 text-royal-gold hover:bg-royal-gold/10"
          >
            View Full Court
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalCourt;

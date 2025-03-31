
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Users } from 'lucide-react';
import { TeamColor, UserTier } from '@/types/team';
import RoyalCourtMember from './RoyalCourtMember';
import useNotificationSounds from '@/hooks/sounds/use-notification-sounds';
import { SoundOptions } from '@/types/sound-types';

interface RoyalCourtProps {
  user: any;
}

const RoyalCourt: React.FC<RoyalCourtProps> = ({ user }) => {
  const [courtMembers, setCourtMembers] = useState([
    {
      id: '1',
      username: 'RoyalHighness',
      displayName: 'King Arthur',
      profileImage: '/images/avatars/king.jpg',
      tier: 'royal' as UserTier,
      team: 'gold' as TeamColor,
      isAdmin: true
    },
    {
      id: '2',
      username: 'NobleKnight',
      displayName: 'Sir Lancelot',
      profileImage: '/images/avatars/knight.jpg',
      tier: 'premium' as UserTier,
      team: 'blue' as TeamColor,
      isAdmin: false
    },
    {
      id: '3',
      username: 'WiseWizard',
      displayName: 'Merlin',
      profileImage: '/images/avatars/wizard.jpg',
      tier: 'basic' as UserTier,
      team: 'red' as TeamColor,
      isAdmin: false
    },
    {
      id: '4',
      username: 'FairMaiden',
      displayName: 'Guinevere',
      profileImage: '/images/avatars/guinevere.jpg',
      tier: 'basic' as UserTier,
      team: 'green' as TeamColor,
      isAdmin: false
    },
    {
      id: '5',
      username: 'LoyalSubject',
      displayName: 'Peasant Pete',
      profileImage: '/images/avatars/peasant.jpg',
      tier: 'free' as UserTier,
      team: 'red' as TeamColor,
      isAdmin: false
    }
  ]);
  const { playSound } = useNotificationSounds();
  const [showAllMembers, setShowAllMembers] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playSound('notification', { volume: 0.3 });
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [playSound]);

  const toggleShowAllMembers = () => {
    setShowAllMembers(!showAllMembers);
  };

  const displayedMembers = showAllMembers ? courtMembers : courtMembers.slice(0, 3);

  return (
    <Card className="glass-morphism border-white/10" ref={containerRef}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold flex items-center">
          <Crown className="mr-2 h-5 w-5 text-yellow-500" />
          Royal Court
        </CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <CardDescription>
          These nobles have sworn fealty to the throne.
        </CardDescription>
        <div className="grid gap-4 py-4">
          {displayedMembers.map((member) => (
            <RoyalCourtMember key={member.id} 
              id={member.id}
              username={member.username}
              displayName={member.displayName}
              profileImage={member.profileImage}
              tier={member.tier}
              team={member.team}
              isAdmin={member.isAdmin}
            />
          ))}
        </div>
        {courtMembers.length > 3 && (
          <div className="flex justify-center">
            <button onClick={toggleShowAllMembers} className="text-sm text-muted-foreground hover:text-white transition-colors">
              {showAllMembers ? 'Show Less' : `Show All ${courtMembers.length} Members`}
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RoyalCourt;

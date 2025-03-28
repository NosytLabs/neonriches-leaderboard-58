
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useEventContext } from '@/contexts/EventContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { CalendarDays, Clock, Users, Trophy } from 'lucide-react';
import RoyalButton from '@/components/ui/royal-button';

interface CurrentEventProps {
  title?: string;
  description?: string;
  eventId?: string;
}

const CurrentEvent: React.FC<CurrentEventProps> = ({
  title = "Weekly Challenge",
  description = "Join the weekly challenge to earn bonus rewards and climb the leaderboard faster!",
  eventId = "weekly-challenge"
}) => {
  const { 
    hasJoinedEvent, 
    joinEvent, 
    daysUntilNextMonday 
  } = useEventContext();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinEvent = async () => {
    if (!user) {
      // Handle not logged in case
      toast({
        title: "Authentication Required",
        description: "You need to log in to join events",
        variant: "destructive"
      });
      return;
    }

    setIsJoining(true);
    try {
      const joined = await joinEvent();
      if (joined) {
        toast({
          title: "Success!",
          description: `You've joined the ${title} event!`,
          variant: "success"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join the event",
        variant: "destructive"
      });
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <Card className="shadow-lg border-royal-gold/30 bg-black/40">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4 text-royal-gold" />
            <span>
              {daysUntilNextMonday === 0
                ? "Ends today!"
                : `Ends in ${daysUntilNextMonday} days`}
            </span>
          </div>

          <div className="flex items-center text-sm">
            <CalendarDays className="mr-2 h-4 w-4 text-royal-gold" />
            <span>Weekly event - resets every Monday</span>
          </div>

          <div className="flex items-center text-sm">
            <Users className="mr-2 h-4 w-4 text-royal-gold" />
            <span>32 nobles participating</span>
          </div>
        </div>

        <div className="pt-2">
          {user ? (
            hasJoinedEvent(eventId) ? (
              <Button
                variant="outline"
                className="w-full border-royal-gold/30 text-royal-gold"
                disabled
              >
                You've joined this event
              </Button>
            ) : (
              <RoyalButton
                variant="royalGold"
                className="w-full"
                onClick={handleJoinEvent}
                disabled={isJoining}
              >
                {isJoining ? "Joining..." : "Join Event"}
              </RoyalButton>
            )
          ) : (
            <RoyalButton
              variant="outline"
              className="w-full"
              onClick={handleJoinEvent}
            >
              Sign In to Join
            </RoyalButton>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentEvent;

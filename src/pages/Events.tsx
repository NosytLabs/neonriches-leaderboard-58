
import React from 'react';
import { Shell } from '@/components/ui/Shell';
import { PageHeader } from '@/components/ui/page-header';
import PublicShamingFestival from '@/components/events/PublicShamingFestival';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RoyalDivider from '@/components/ui/royal-divider';
import { events, eventDetails } from '@/components/events/data';
import { useToast } from '@/hooks/use-toast';
import { EventDetails } from '@/types/events';

export default function EventsPage() {
  const allEvents = events;
  const { toast } = useToast();
  
  // Mock leaderboard users data for PublicShamingFestival
  const mockLeaderboardUsers = [
    {
      id: '1',
      userId: '1',
      username: 'GoldenKing',
      profileImage: '/avatars/user1.png',
      totalSpent: 5000,
      rank: 1,
      team: 'gold',
      tier: 'royal',
      spendStreak: 7,
      displayName: 'Golden King',
      walletBalance: 10000,
      previousRank: 2,
      joinDate: '2023-01-15T00:00:00.000Z',
      isVerified: true
    },
    {
      id: '2',
      userId: '2',
      username: 'DiamondDuchess',
      profileImage: '/avatars/user2.png',
      totalSpent: 3800,
      rank: 2,
      team: 'purple',
      tier: 'elite',
      spendStreak: 5,
      displayName: 'Diamond Duchess',
      walletBalance: 7500,
      previousRank: 3,
      joinDate: '2023-02-10T00:00:00.000Z',
      isVerified: true
    }
  ];
  
  const handleShameApplied = (userId: string, action: string) => {
    toast({
      title: "Shame Applied",
      description: `You have ${action}ed user ${userId}`,
      variant: "success"
    });
  };

  // Ensure all events have the required properties for EventDetails
  const eventsWithDetails: EventDetails[] = allEvents.map(event => ({
    ...event,
    rules: event.rules || [],
    prizes: event.prizes || []
  }));
  
  return (
    <Shell>
      <PageHeader
        title="Royal Events"
        description="Participate in various royal events to earn rewards and climb the leaderboard."
      />
      
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PublicShamingFestival 
              leaderboardUsers={mockLeaderboardUsers}
              onShameApplied={handleShameApplied}
            />
          </div>
          
          <div className="lg:col-span-1 space-y-8">
            <UpcomingEvents events={eventsWithDetails} maxEvents={4} />
            
            <Card className="border-royal-gold/20 glass-morphism">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-royal-gold" />
                  Event Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="grid w-full grid-cols-3 glass-morphism">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="mt-4">
                    <div className="space-y-2">
                      {allEvents.map(event => (
                        <div key={event.id} className="p-3 bg-black/20 rounded-lg hover:bg-black/30 transition">
                          <div className="font-medium">{event.title || event.name}</div>
                          <div className="text-sm text-white/60">{event.description.substring(0, 60)}...</div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="active" className="mt-4">
                    <div className="space-y-2">
                      {allEvents.filter(e => e.status === 'active').map(event => (
                        <div key={event.id} className="p-3 bg-black/20 rounded-lg hover:bg-black/30 transition">
                          <div className="font-medium">{event.title || event.name}</div>
                          <div className="text-sm text-white/60">{event.description.substring(0, 60)}...</div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="upcoming" className="mt-4">
                    <div className="space-y-2">
                      {allEvents.filter(e => e.status === 'upcoming').map(event => (
                        <div key={event.id} className="p-3 bg-black/20 rounded-lg hover:bg-black/30 transition">
                          <div className="font-medium">{event.title || event.name}</div>
                          <div className="text-sm text-white/60">{event.description.substring(0, 60)}...</div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <RoyalDivider variant="line" className="my-12" />
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold royal-gradient mb-3">Past Events</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore the history of our royal events and see the winners and rewards from past competitions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {allEvents.filter(e => e.status === 'completed').map(event => (
              <Card key={event.id} className="glass-morphism border-white/10">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={event.imageUrl || event.image || '/event-placeholder.jpg'} 
                    alt={event.title || event.name || ''} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-bold">{event.title || event.name}</h3>
                  <p className="text-sm text-white/60 mt-1">{event.description.substring(0, 100)}...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}

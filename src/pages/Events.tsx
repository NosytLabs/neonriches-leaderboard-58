
import React from 'react';
import Shell from '@/components/Shell';
import { PageHeader } from '@/components/ui/page-header';
import PublicShamingFestival from '@/components/events/PublicShamingFestival';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RoyalDivider from '@/components/ui/royal-divider';
import { events } from '@/components/events/data';

export default function EventsPage() {
  const allEvents = events;
  
  return (
    <Shell>
      <PageHeader
        title="Royal Events"
        description="Participate in various royal events to earn rewards and climb the leaderboard."
        size="sm"
      />
      
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PublicShamingFestival />
          </div>
          
          <div className="lg:col-span-1 space-y-8">
            <UpcomingEvents maxEvents={4} />
            
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
                          <div className="font-medium">{event.title}</div>
                          <div className="text-sm text-white/60">{event.description.substring(0, 60)}...</div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="active" className="mt-4">
                    <div className="space-y-2">
                      {allEvents.filter(e => e.status === 'active').map(event => (
                        <div key={event.id} className="p-3 bg-black/20 rounded-lg hover:bg-black/30 transition">
                          <div className="font-medium">{event.title}</div>
                          <div className="text-sm text-white/60">{event.description.substring(0, 60)}...</div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="upcoming" className="mt-4">
                    <div className="space-y-2">
                      {allEvents.filter(e => e.status === 'upcoming').map(event => (
                        <div key={event.id} className="p-3 bg-black/20 rounded-lg hover:bg-black/30 transition">
                          <div className="font-medium">{event.title}</div>
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
                    src={event.image || '/event-placeholder.jpg'} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-bold">{event.title}</h3>
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

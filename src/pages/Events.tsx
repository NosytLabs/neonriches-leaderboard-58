
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Trophy, Megaphone } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/hooks/useAuth';
import { PageTitle } from '@/components/ui/page-title';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { eventsData } from '@/components/events/data';
import EventCard from '@/components/events/EventCard';
import FireSaleEvent from '@/components/events/FireSaleEvent';
import PublicShamingFestival from '@/components/events/PublicShamingFestival';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import EventDetailsModal from '@/components/events/components/EventDetailsModal';
import PageSEO from '@/components/SEO/PageSEO';

const Events = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('current');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventDetails, setShowEventDetails] = useState(false);
  
  const currentEvents = eventsData.filter((event) => event.status === 'active');
  const upcomingEvents = eventsData.filter((event) => event.status === 'upcoming');
  const pastEvents = eventsData.filter((event) => event.status === 'completed');
  
  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setShowEventDetails(true);
  };
  
  const handleCloseDetails = () => {
    setShowEventDetails(false);
    setSelectedEvent(null);
  };
  
  const handleParticipate = (eventId) => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'You must be logged in to participate in events.',
        variant: 'destructive'
      });
      return;
    }
    
    toast({
      title: 'Participation Registered',
      description: 'You are now participating in this event. Check back for updates!',
      variant: 'default'
    });
  };
  
  return (
    <>
      <PageSEO
        title="Royal Events | Spend Throne"
        description="Participate in exclusive royal events to earn rewards and climb the ranks faster."
      />
      
      <PageTitle
        title="Royal Events"
        subtitle="Participate in exclusive events to earn rewards and climb the ranks faster"
        icon={<Calendar className="h-6 w-6 text-royal-gold" />}
      />
      
      <Tabs defaultValue="current" value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-center mb-4">
          <TabsList className="glass-morphism border-white/10">
            <TabsTrigger value="current" className="flex gap-1 items-center">
              <Trophy className="h-4 w-4" />
              <span>Current Events</span>
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="flex gap-1 items-center">
              <Megaphone className="h-4 w-4" />
              <span>Upcoming</span>
            </TabsTrigger>
            <TabsTrigger value="past" className="flex gap-1 items-center">
              <Calendar className="h-4 w-4" />
              <span>Past Events</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="current" className="space-y-6">
          {currentEvents.length === 0 ? (
            <Card className="glass-morphism border-white/10">
              <CardContent className="flex flex-col items-center justify-center p-12">
                <Calendar className="h-12 w-12 text-white/30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Current Events</h3>
                <p className="text-white/60 text-center max-w-md">
                  There are no events currently active. Check the Upcoming tab to see what events are coming soon.
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              <FireSaleEvent
                eventId="sale1"
                startDate="2023-07-01T00:00:00Z"
                endDate="2023-07-31T23:59:59Z"
              />
              <PublicShamingFestival />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {currentEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onViewDetails={() => handleViewDetails(event)}
                    onParticipate={() => handleParticipate(event.id)}
                  />
                ))}
              </div>
            </>
          )}
        </TabsContent>
      
        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <div className="flex items-center">
                    <Megaphone className="h-5 w-5 text-royal-gold mr-2" />
                    <CardTitle>Upcoming Events</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {upcomingEvents.length === 0 ? (
                    <div className="text-center py-10">
                      <Calendar className="h-12 w-12 text-white/30 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No Upcoming Events</h3>
                      <p className="text-white/60 max-w-md mx-auto">
                        There are no events scheduled at this time. Check back soon for new events!
                      </p>
                    </div>
                  ) : (
                    <ScrollArea className="h-[500px] pr-3">
                      <div className="space-y-6">
                        {upcomingEvents.map((event) => (
                          <EventCard
                            key={event.id}
                            event={event}
                            onViewDetails={() => handleViewDetails(event)}
                            onParticipate={() => handleParticipate(event.id)}
                          />
                        ))}
                      </div>
                    </ScrollArea>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="glass-morphism border-white/10 mb-6">
                <CardHeader>
                  <CardTitle>Event Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-6">
                    <Calendar className="h-12 w-12 text-white/30 mx-auto mb-4" />
                    <p className="text-white/60">Event calendar coming soon.</p>
                  </div>
                </CardContent>
              </Card>
              
              <UpcomingEvents maxEvents={3} />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="past" className="space-y-6">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-royal-gold mr-2" />
                  <CardTitle>Past Events</CardTitle>
                </div>
                <Badge variant="outline" className="glass-morphism border-white/10">
                  {pastEvents.length} Events
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {pastEvents.length === 0 ? (
                <div className="text-center py-10">
                  <Calendar className="h-12 w-12 text-white/30 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Past Events</h3>
                  <p className="text-white/60 max-w-md mx-auto">
                    The throne is still young. Past events will be recorded here once they have concluded.
                  </p>
                </div>
              ) : (
                <ScrollArea className="h-[600px] pr-3">
                  <div className="space-y-6">
                    {pastEvents.map((event) => (
                      <div key={event.id} className="relative">
                        <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center z-10">
                          <Badge variant="outline" className="text-lg border-white/20 bg-black/60 px-4 py-2">
                            Completed
                          </Badge>
                        </div>
                        <EventCard
                          event={event}
                          onViewDetails={() => handleViewDetails(event)}
                          isPast={true}
                        />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {selectedEvent && (
        <EventDetailsModal
          isOpen={showEventDetails}
          onClose={handleCloseDetails}
          event={selectedEvent}
        />
      )}
    </>
  );
};

export default Events;

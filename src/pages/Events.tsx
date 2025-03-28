
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Calendar, Trophy, Users, Flame, Clock, Lightbulb, Zap, ScrollText, Award, Star, Shield, Map } from 'lucide-react';
import CurrentEvent from '@/components/events/CurrentEvent';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import PublicShamingFestival from '@/components/events/PublicShamingFestival';
import TreasureHuntEvent from '@/components/events/TreasureHuntEvent';
import EventStats from '@/components/events/EventStats';
import EventBenefits from '@/components/events/EventBenefits';
import ThroneBackground from '@/components/ui/throne-background';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import RoyalDivider from '@/components/ui/royal-divider';
import { eventDetailsData } from '@/components/events/data';
import EventDetailsModal from '@/components/events/components/EventDetailsModal';

const Events = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const handleViewEventDetails = (eventId: string) => {
    setSelectedEvent(eventId);
  };

  return (
    <DashboardLayout user={user}>
      <div className="relative min-h-screen">
        <ThroneBackground variant="royal" particles density="medium" />
        
        <div className="container px-4 py-8 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 animate-parchment-unfurl">
            <div className="flex items-center">
              <div className="relative mr-4">
                <Crown className="h-8 w-8 text-royal-gold animate-crown-glow" />
                <div className="absolute -inset-3 bg-royal-gold/20 rounded-full blur-lg opacity-70"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold royal-gradient font-medieval">Royal Events</h1>
                <p className="text-white/70 mt-1">
                  Exclusive tournaments and ceremonies for nobility
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="royal-button-enhanced border-royal-gold/30 text-royal-gold">
                <Calendar className="h-4 w-4 mr-2" />
                Royal Calendar
              </Button>
              <Button className="royal-button-enhanced bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy text-white">
                <Trophy className="h-4 w-4 mr-2" />
                Join Current Event
              </Button>
            </div>
          </div>
          
          <RoyalDivider variant="line" label="CURRENT ROYAL AFFAIR" color="gold" className="mb-6" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <Card className="royal-card-enhanced col-span-1 lg:col-span-3 overflow-hidden border-royal-gold/20 animate-parchment-unfurl" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-royal-navy/30 via-transparent to-royal-crimson/30"></div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="flex items-center text-xl font-medieval">
                  <Flame className="h-5 w-5 text-royal-gold mr-3 animate-flame-flicker" />
                  The Public Shaming Festival
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CurrentEvent />
              </CardContent>
            </Card>
            
            <Card className="royal-card-enhanced col-span-1 lg:col-span-2 border-royal-gold/20 animate-parchment-unfurl" style={{animationDelay: '0.3s'}}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl font-medieval">
                  <ScrollText className="h-5 w-5 text-royal-gold mr-3" />
                  Royal Proclamations & Schedules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full bg-transparent grid grid-cols-4 glass-morphism border-white/10 mb-6">
                    <TabsTrigger value="upcoming" className="data-[state=active]:bg-royal-gold/10 data-[state=active]:text-royal-gold">
                      <Clock className="h-4 w-4 mr-2" />
                      Upcoming
                    </TabsTrigger>
                    <TabsTrigger value="shame" className="data-[state=active]:bg-royal-crimson/10 data-[state=active]:text-royal-crimson">
                      <Zap className="h-4 w-4 mr-2" />
                      Public Shaming
                    </TabsTrigger>
                    <TabsTrigger value="treasure" className="data-[state=active]:bg-royal-purple/10 data-[state=active]:text-royal-purple">
                      <Map className="h-4 w-4 mr-2" />
                      Treasure Hunt
                    </TabsTrigger>
                    <TabsTrigger value="ideas" className="data-[state=active]:bg-royal-navy/10 data-[state=active]:text-royal-navy">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Event Proposals
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="upcoming" className="animate-fade-in">
                    <UpcomingEvents onViewDetails={handleViewEventDetails} />
                  </TabsContent>
                  <TabsContent value="shame" className="animate-fade-in">
                    <PublicShamingFestival />
                  </TabsContent>
                  <TabsContent value="treasure" className="animate-fade-in">
                    <TreasureHuntEvent />
                  </TabsContent>
                  <TabsContent value="ideas" className="animate-fade-in">
                    <div className="space-y-4">
                      <p className="text-white/70">
                        Submit your ideas for future events and help shape royal entertainment for the court!
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {name: 'Royal Tournament', votes: Math.floor(Math.random() * 85) + 15, icon: <Award size={16} className="text-royal-gold" />},
                          {name: 'Treasure Hunt', votes: Math.floor(Math.random() * 85) + 15, icon: <Trophy size={16} className="text-royal-gold" />},
                          {name: 'Team War', votes: Math.floor(Math.random() * 85) + 15, icon: <Shield size={16} className="text-royal-gold" />},
                          {name: 'Commoner Humiliation', votes: Math.floor(Math.random() * 85) + 15, icon: <Crown size={16} className="text-royal-gold" />}
                        ].map((idea, i) => (
                          <div 
                            key={i} 
                            className="glass-morphism p-4 rounded-lg border border-royal-gold/20 hover:border-royal-gold/40 transition-all duration-300 group"
                          >
                            <div className="flex items-center">
                              <div className="mr-3">{idea.icon}</div>
                              <h3 className="font-medieval text-royal-gold">{idea.name}</h3>
                            </div>
                            <p className="text-sm text-white/70 mt-1">Vote on this royal event proposal</p>
                            <div className="mt-3 flex justify-between items-center">
                              <div className="bg-white/10 h-2.5 flex-1 rounded-full overflow-hidden">
                                <div 
                                  className="bg-royal-gold h-full rounded-full transition-all duration-500 group-hover:bg-gradient-to-r from-royal-gold to-royal-crimson" 
                                  style={{ width: `${idea.votes}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-white/70 ml-3 tabular-nums">
                                {idea.votes} votes
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="royal-button-enhanced mt-4 bg-foreground/10 hover:bg-foreground/20 text-white w-full">
                        <Star className="h-4 w-4 mr-2 text-royal-gold" />
                        Submit Your Royal Event Idea
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card className="royal-card-enhanced border-royal-gold/20 animate-parchment-unfurl" style={{animationDelay: '0.4s'}}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl font-medieval">
                  <Users className="h-5 w-5 text-royal-gold mr-3" />
                  Event Privileges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EventStats />
                <div className="mt-8">
                  <EventBenefits />
                </div>
                
                <div className="mt-6 p-4 royal-card-enhanced border-royal-gold/30 rounded-lg animate-gold-dust">
                  <h3 className="text-lg font-medieval text-royal-gold mb-2">King's Event Bonus</h3>
                  <p className="text-sm text-white/70 mb-3">
                    As the current ruler, the top spender receives a 2x multiplier on all event rewards!
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Crown className="h-5 w-5 text-royal-gold mr-2 animate-crown-glow" />
                      <span className="font-medieval">Lord Moneybags</span>
                    </div>
                    <div className="text-royal-gold font-bold">+100% Bonus</div>
                  </div>
                </div>
                
                <Button 
                  className="royal-button-enhanced mt-6 w-full bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy text-white"
                  onClick={() => setActiveTab("treasure")}
                >
                  <Map className="h-4 w-4 mr-2" />
                  Join Treasure Hunt
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <RoyalDivider variant="crown" label="WEEKLY ROYAL EVENTS" color="gold" className="mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-parchment-unfurl" style={{animationDelay: '0.5s'}}>
            {[
              {
                id: "public-shaming",
                title: "Public Shaming Festival",
                description: "Pay to drop other users down in rank temporarily",
                icon: <Zap className="h-6 w-6 text-royal-crimson" />,
                day: "First Monday of Every Month",
                color: "royal-crimson"
              },
              {
                id: "treasure-hunt",
                title: "Royal Treasure Hunt",
                description: "Solve riddles to find hidden treasures throughout the site",
                icon: <Map className="h-6 w-6 text-royal-gold" />,
                day: "Every Second Week",
                color: "royal-gold"
              },
              {
                id: "team-conquest",
                title: "Team Conquest",
                description: "Join forces with your team to dominate the leaderboard",
                icon: <Shield className="h-6 w-6 text-royal-navy" />,
                day: "Last Week of Every Month",
                color: "royal-navy"
              }
            ].map((event) => (
              <div 
                key={event.id} 
                className="glass-card-royal group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-${event.color}/20 mb-4 mx-auto`}>
                  {event.icon}
                </div>
                <h3 className="text-xl text-center font-medieval mb-2">{event.title}</h3>
                <p className="text-white/70 text-center text-sm mb-4">{event.description}</p>
                <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{event.day}</span>
                </div>
                <div className="mt-4 text-center">
                  <Button 
                    variant="outline" 
                    className="royal-button border-white/20 text-white/90"
                    onClick={() => handleViewEventDetails(event.id)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Event details modal */}
      <EventDetailsModal 
        event={selectedEvent ? eventDetailsData[selectedEvent] : null}
        open={!!selectedEvent}
        onOpenChange={(open) => {
          if (!open) setSelectedEvent(null);
        }}
      />
    </DashboardLayout>
  );
};

export default Events;

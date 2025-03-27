
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Calendar, Trophy, Users, Flame, Clock, Lightbulb, Zap } from 'lucide-react';
import CurrentEvent from '@/components/events/CurrentEvent';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import PublicShamingFestival from '@/components/events/PublicShamingFestival';
import EventStats from '@/components/events/EventStats';
import EventBenefits from '@/components/events/EventBenefits';
import ThroneBackground from '@/components/ui/throne-background';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Events = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout user={user}>
      <div className="relative min-h-screen">
        <ThroneBackground variant="royal" particles density="medium" />
        
        <div className="container px-4 py-8 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div className="flex items-center">
              <Crown className="h-7 w-7 text-royal-gold mr-3 animate-crown-glow" />
              <div>
                <h1 className="text-3xl font-bold royal-gradient">Royal Events</h1>
                <p className="text-white/70">
                  Exclusive events and tournaments for the nobility
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="royal-button-enhanced border-royal-gold/30 text-royal-gold">
                <Calendar className="h-4 w-4 mr-2" />
                Event Schedule
              </Button>
              <Button className="royal-button bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy text-white">
                <Trophy className="h-4 w-4 mr-2" />
                Join Current Event
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="royal-card-enhanced col-span-1 lg:col-span-3 overflow-hidden border-royal-gold/20">
              <div className="absolute inset-0 bg-gradient-to-r from-royal-navy/20 via-transparent to-royal-crimson/20"></div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="flex items-center text-xl">
                  <Flame className="h-5 w-5 text-royal-gold mr-2" />
                  Currently Active Event
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CurrentEvent />
              </CardContent>
            </Card>
            
            <Card className="royal-card-enhanced col-span-1 lg:col-span-2 border-royal-gold/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <Calendar className="h-5 w-5 text-royal-gold mr-2" />
                  Event Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming" className="w-full">
                  <TabsList className="w-full bg-transparent grid grid-cols-3 glass-morphism border-white/10 mb-6">
                    <TabsTrigger value="upcoming" className="data-[state=active]:bg-white/10">
                      <Clock className="h-4 w-4 mr-2" />
                      Upcoming
                    </TabsTrigger>
                    <TabsTrigger value="shame" className="data-[state=active]:bg-white/10">
                      <Zap className="h-4 w-4 mr-2" />
                      Public Shaming
                    </TabsTrigger>
                    <TabsTrigger value="ideas" className="data-[state=active]:bg-white/10">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Event Ideas
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="upcoming">
                    <UpcomingEvents />
                  </TabsContent>
                  <TabsContent value="shame">
                    <PublicShamingFestival />
                  </TabsContent>
                  <TabsContent value="ideas">
                    <div className="space-y-4">
                      <p className="text-white/70">
                        Submit your ideas for future events and help shape the royal entertainment!
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['Royal Tournament', 'Treasure Hunt', 'Team War', 'Commoner Humiliation'].map((idea, i) => (
                          <div key={i} className="glass-morphism p-4 rounded-lg border border-royal-gold/20">
                            <h3 className="font-medieval text-royal-gold">{idea}</h3>
                            <p className="text-sm text-white/70 mt-1">Vote on this event idea</p>
                            <div className="mt-2 flex justify-between items-center">
                              <div className="bg-white/10 h-2 flex-1 rounded-full overflow-hidden">
                                <div 
                                  className="bg-royal-gold h-full rounded-full" 
                                  style={{ width: `${Math.floor(Math.random() * 85) + 15}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-white/70 ml-2">
                                {Math.floor(Math.random() * 100) + 10} votes
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card className="royal-card-enhanced border-royal-gold/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <Users className="h-5 w-5 text-royal-gold mr-2" />
                  Event Stats & Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EventStats />
                <div className="mt-8">
                  <EventBenefits />
                </div>
                
                <div className="mt-6 p-4 royal-card-enhanced border-royal-gold/20 rounded-lg">
                  <h3 className="text-lg font-medieval text-royal-gold mb-2">King's Event Bonus</h3>
                  <p className="text-sm text-white/70 mb-3">
                    As the current ruler, the top spender receives a 2x multiplier on all event rewards!
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Crown className="h-4 w-4 text-royal-gold mr-1" />
                      <span className="text-sm">Lord Moneybags</span>
                    </div>
                    <div className="text-royal-gold font-bold">+100% Bonus</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Events;

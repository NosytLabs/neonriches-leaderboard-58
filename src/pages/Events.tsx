
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Calendar, Trophy, Users } from 'lucide-react';
import CurrentEvent from '@/components/events/CurrentEvent';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import PublicShamingFestival from '@/components/events/PublicShamingFestival';
import EventStats from '@/components/events/EventStats';
import EventBenefits from '@/components/events/EventBenefits';
import ThroneBackground from '@/components/ui/throne-background';

const Events = () => {
  return (
    <DashboardLayout>
      <div className="relative min-h-screen">
        <ThroneBackground variant="royal" particles density="medium" />
        
        <div className="container px-4 py-8 max-w-7xl mx-auto relative z-10">
          <div className="flex items-center mb-8">
            <Crown className="h-7 w-7 text-royal-gold mr-3" />
            <div>
              <h1 className="text-3xl font-bold">Royal Events</h1>
              <p className="text-white/70">
                Exclusive events and tournaments for the nobility
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="glass-morphism border-white/10 col-span-1 lg:col-span-3">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <Trophy className="h-5 w-5 text-royal-gold mr-2" />
                  Currently Active Event
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CurrentEvent />
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10 col-span-1 lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <Calendar className="h-5 w-5 text-royal-gold mr-2" />
                  Event Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming" className="w-full">
                  <TabsList className="w-full bg-transparent grid grid-cols-2 glass-morphism border-white/10 mb-6">
                    <TabsTrigger value="upcoming" className="data-[state=active]:bg-white/10">Upcoming</TabsTrigger>
                    <TabsTrigger value="shame" className="data-[state=active]:bg-white/10">Public Shaming</TabsTrigger>
                  </TabsList>
                  <TabsContent value="upcoming">
                    <UpcomingEvents />
                  </TabsContent>
                  <TabsContent value="shame">
                    <PublicShamingFestival />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <Users className="h-5 w-5 text-royal-gold mr-2" />
                  Event Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EventStats />
                <div className="mt-8">
                  <EventBenefits />
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

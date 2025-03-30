
import React, { useState } from 'react';
import { Calendar, Users, TrendingUp, Filter, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts';
import { formatDate } from '@/utils/formatters';

interface MarketingEvent {
  id: string;
  name: string;
  description: string;
  days: string[];
  visibilityBoost: number;
  requirements: string;
  recurrence?: string;
  benefit?: string;
  eligibility?: string[];
}

const MarketingEvents: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Mock marketing events data
  const events: MarketingEvent[] = [
    {
      id: '1',
      name: 'Monarchy Monday',
      description: 'Start your week with a 2x boost in profile visibility. Perfect for weekend spenders to showcase their new ranks.',
      days: ['Monday'],
      visibilityBoost: 2,
      requirements: 'Any rank',
      recurrence: 'Weekly',
      benefit: 'Double profile visibility',
      eligibility: ['All users']
    },
    {
      id: '2',
      name: 'Wallet Wednesday',
      description: 'Mid-week spending boost. All profile clicks are doubled leading to more traffic for your links.',
      days: ['Wednesday'],
      visibilityBoost: 1.5,
      requirements: 'Minimum $10 spent this week',
      recurrence: 'Weekly',
      benefit: 'Double click-through rate',
      eligibility: ['All paying users']
    },
    {
      id: '3',
      name: 'Royal Weekend',
      description: 'Premium weekend visibility boost. Your profile gets featured in the spotlight section.',
      days: ['Saturday', 'Sunday'],
      visibilityBoost: 3,
      requirements: 'Top 100 rank',
      recurrence: 'Weekly',
      benefit: 'Featured profile placement',
      eligibility: ['Premium tier', 'Top 100 rank']
    },
    {
      id: '4',
      name: 'Monthly Monarchy',
      description: 'Monthly profile reset celebration. Your activity this day counts double towards your presence score.',
      days: ['1'],
      visibilityBoost: 5,
      requirements: 'Any active user',
      recurrence: 'Monthly',
      benefit: 'Premium placement for 48 hours',
      eligibility: ['All active users']
    }
  ];
  
  const today = new Date();
  const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
  const dayOfMonth = today.getDate().toString();
  
  const isEventToday = (event: MarketingEvent) => {
    return event.days.includes(dayOfWeek) || event.days.includes(dayOfMonth);
  };
  
  const isUserEligible = (event: MarketingEvent) => {
    if (!event.eligibility) return true;
    if (event.eligibility.includes('All users')) return true;
    if (event.eligibility.includes('All paying users') && user?.totalSpent > 0) return true;
    if (event.eligibility.includes('Premium tier') && ['premium', 'royal'].includes(user?.tier || '')) return true;
    if (event.eligibility.includes('Top 100 rank') && (user?.rank || 999) <= 100) return true;
    return false;
  };
  
  const upcomingEvents = events.filter(event => !isEventToday(event));
  const activeEvents = events.filter(event => isEventToday(event));
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-royal-gold mr-2" />
          <span>Royal Marketing Calendar</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="active" className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Active Today
              {activeEvents.length > 0 && (
                <Badge variant="secondary" className="ml-2">{activeEvents.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="upcoming">
              <Clock className="h-4 w-4 mr-2" />
              Upcoming Events
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            {activeEvents.length === 0 ? (
              <div className="text-center py-10 text-white/60 glass-morphism border-white/10 rounded-lg">
                <Calendar className="h-10 w-10 mx-auto mb-2 opacity-50" />
                <p>No marketing events active today.</p>
                <p className="text-sm mt-2">Check the upcoming tab for future events.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {activeEvents.map((event) => (
                  <div 
                    key={event.id} 
                    className="glass-morphism border-royal-gold/30 p-4 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-royal-gold">{event.name}</h3>
                      <Badge 
                        variant="outline" 
                        className="bg-royal-gold/20 border-royal-gold/30 text-royal-gold"
                      >
                        {event.recurrence} • {event.days.join(', ')}
                      </Badge>
                    </div>
                    
                    <p className="text-white/80 mb-3">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mt-2">
                      <div className="flex items-center text-sm text-white/60">
                        <TrendingUp className="h-4 w-4 mr-1 text-royal-gold" />
                        <span>{event.benefit}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-white/60">
                        <Users className="h-4 w-4 mr-1 text-royal-gold" />
                        <span>{event.requirements}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      {isUserEligible(event) ? (
                        <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                          Activate Boost
                        </Button>
                      ) : (
                        <Button variant="outline">
                          View Requirements
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="upcoming">
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="glass-morphism border-white/10 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{event.name}</h3>
                    <Badge 
                      variant="outline" 
                      className="bg-white/10 border-white/20"
                    >
                      {event.recurrence} • {event.days.join(', ')}
                    </Badge>
                  </div>
                  
                  <p className="text-white/70 mb-3">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mt-2">
                    <div className="flex items-center text-sm text-white/60">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>{event.benefit}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-white/60">
                      <Filter className="h-4 w-4 mr-1" />
                      <span>{event.eligibility ? event.eligibility.join(', ') : 'All users'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MarketingEvents;

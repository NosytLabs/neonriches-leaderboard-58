
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Trophy, Users, Target, Zap, Award } from 'lucide-react';
import { MARKETING_EVENTS } from '@/config/subscriptions';
import { useAuth } from '@/contexts/AuthContext';

const MarketingEvents = () => {
  const { user } = useAuth();
  const userTier = user?.subscription?.tier || 'free';
  
  // Get current day of the week
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];
  
  // Get current date for "last day of month" calculation
  const currentDate = new Date();
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const isLastDayOfMonth = currentDate.getDate() === lastDayOfMonth;
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-purple-400" />
          Marketing Events
        </CardTitle>
        <CardDescription>
          Special promotional events to boost your visibility
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="p-3 bg-black/20 rounded-lg text-sm mb-4">
          <p className="flex items-center text-white/70">
            <Award size={16} className="text-purple-400 mr-2" />
            <span>Participate in weekly and monthly events to maximize your profile impact</span>
          </p>
        </div>
        
        {MARKETING_EVENTS.map((event) => {
          // Check if event is active today
          const isActive = 
            (event.day === today) || 
            (event.day === 'Last day of month' && isLastDayOfMonth);
          
          // Check if user is eligible
          const isEligible = 
            event.eligibility === 'All users' || 
            (event.eligibility === 'Standard tier and above' && userTier !== 'free') ||
            (event.eligibility === 'Premium tier and above' && (userTier === 'premium' || userTier === 'royal')) ||
            (event.eligibility === 'Royal tier only' && userTier === 'royal') ||
            (event.eligibility === 'Top 10 spenders of the month' && user?.rank && user.rank <= 10);
          
          return (
            <Card 
              key={event.id} 
              className={`border-white/5 ${isActive ? 'bg-purple-500/10' : 'bg-black/20'}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium">{event.name}</h3>
                      {isActive && (
                        <Badge className="ml-2 bg-green-500 text-white border-none">
                          Active Today
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-white/70 mt-1">{event.description}</p>
                  </div>
                  
                  <Badge 
                    variant="outline" 
                    className={`
                      ${isEligible 
                        ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
                        : 'bg-white/10 text-white/50 border-white/20'}
                    `}
                  >
                    {isEligible ? 'Eligible' : 'Not Eligible'}
                  </Badge>
                </div>
                
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="flex items-center text-xs text-white/60">
                    <Clock className="h-3.5 w-3.5 mr-1 text-purple-400" />
                    <span>{event.recurrence === 'weekly' ? 'Every ' + event.day : 'Monthly'}</span>
                  </div>
                  
                  <div className="flex items-center text-xs text-white/60">
                    <Trophy className="h-3.5 w-3.5 mr-1 text-royal-gold" />
                    <span>{event.benefit}</span>
                  </div>
                </div>
                
                {!isEligible && (
                  <div className="mt-2 p-2 bg-black/30 rounded-lg text-xs text-white/50">
                    <div className="flex items-start">
                      <Target className="h-3.5 w-3.5 mr-1 mt-0.5 text-white/30" />
                      <span>
                        Required: {event.eligibility}
                        {event.eligibility.includes('tier') && (
                          <span> - <a href="/subscription" className="text-purple-400 hover:underline">Upgrade Now</a></span>
                        )}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
        
        <div className="mt-6 flex items-center justify-center">
          <div className="text-center text-sm text-white/50">
            <Zap className="h-4 w-4 mx-auto mb-2 text-purple-400" />
            <p>New marketing events are added regularly. Check back often!</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketingEvents;

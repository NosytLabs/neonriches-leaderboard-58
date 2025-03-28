
import React, { useState } from 'react';
import { Zap, Trophy, Users, Calendar, Crown, Map, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import CountdownTimer from './CountdownTimer';
import { isPublicShamingFestivalActive } from './utils/shameUtils';
import { formatDate } from '@/utils/timeUtils';

const CurrentEvent = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>('treasure-hunt');
  
  // For the demo, let's pretend the Treasure Hunt is active
  // In a real app, you'd check server time and event schedule
  const activeTreasureHunt = true;
  const activePublicShaming = isPublicShamingFestivalActive();
  
  const handleJoinEvent = (eventName: string) => {
    toast({
      title: `Joined ${eventName}`,
      description: "You have successfully joined this royal event. Good luck!"
    });
  };
  
  // Current active event details (in a real app, this would come from the API)
  const currentEvent = {
    name: "Royal Treasure Hunt",
    description: "Explore the site to find hidden treasures! Solve riddles and collect valuable artifacts for special rewards.",
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
    participants: 248,
    topCollector: "DuchessDigits",
    treasuresFound: 1248,
    maxTreasures: 2500
  };
  
  // Public Shaming Festival (occurs first Monday of each month)
  const shamingEvent = {
    name: "Public Shaming Festival",
    description: "Humiliate your rivals in medieval fashion! During this special event, all public shaming actions are 25% off.",
    endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
    participants: 156,
    topShamer: "LordCashington",
    shamingsApplied: 324
  };
  
  return (
    <div className="relative">
      <div className="flex mb-6">
        <div className="flex-1 px-4">
          <div className="flex items-center mb-4">
            <Map className="h-6 w-6 text-royal-gold mr-2" />
            <h3 className="text-xl font-bold royal-gradient font-medieval">
              {activeTreasureHunt ? currentEvent.name : 
               activePublicShaming ? shamingEvent.name : 
               "No Active Event"}
            </h3>
          </div>
          
          <p className="text-white/80 mb-4">
            {activeTreasureHunt ? currentEvent.description : 
             activePublicShaming ? shamingEvent.description : 
             "There are no active events at the moment. Check the upcoming events section for future royal affairs."}
          </p>
          
          {(activeTreasureHunt || activePublicShaming) && (
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 glass-morphism border-white/10 p-3 rounded-lg mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-royal-gold mr-2" />
                <span className="text-sm text-white/70">
                  Ends: {formatDate(activeTreasureHunt ? currentEvent.endDate : shamingEvent.endDate)}
                </span>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-royal-gold mr-2" />
                <span className="text-sm text-white/70">
                  Time Remaining:
                  <CountdownTimer 
                    targetDate={activeTreasureHunt ? currentEvent.endDate : shamingEvent.endDate} 
                    variant="minimal" 
                  />
                </span>
              </div>
              
              <div className="flex items-center">
                <Users className="h-4 w-4 text-royal-gold mr-2" />
                <span className="text-sm text-white/70">
                  Participants: {activeTreasureHunt ? currentEvent.participants : shamingEvent.participants}
                </span>
              </div>
            </div>
          )}
          
          {activeTreasureHunt && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="glass-morphism border-white/10 p-3 rounded-lg flex items-center">
                <div className="w-10 h-10 rounded-full bg-royal-gold/20 flex items-center justify-center mr-3">
                  <Trophy className="h-5 w-5 text-royal-gold" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Top Collector</div>
                  <div className="font-medium flex items-center">
                    {currentEvent.topCollector}
                    <Crown className="h-3 w-3 text-royal-gold ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-3 rounded-lg flex items-center">
                <div className="w-10 h-10 rounded-full bg-royal-purple/20 flex items-center justify-center mr-3">
                  <Map className="h-5 w-5 text-royal-purple" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Treasures Found</div>
                  <div className="font-medium">{currentEvent.treasuresFound} / {currentEvent.maxTreasures}</div>
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-3 rounded-lg flex items-center">
                <div className="w-10 h-10 rounded-full bg-royal-crimson/20 flex items-center justify-center mr-3">
                  <Zap className="h-5 w-5 text-royal-crimson" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Your Treasures</div>
                  <div className="font-medium">0 / 5</div>
                </div>
              </div>
            </div>
          )}
          
          {activePublicShaming && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="glass-morphism border-white/10 p-3 rounded-lg flex items-center">
                <div className="w-10 h-10 rounded-full bg-royal-gold/20 flex items-center justify-center mr-3">
                  <Trophy className="h-5 w-5 text-royal-gold" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Top Shamer</div>
                  <div className="font-medium flex items-center">
                    {shamingEvent.topShamer}
                    <Crown className="h-3 w-3 text-royal-gold ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-3 rounded-lg flex items-center">
                <div className="w-10 h-10 rounded-full bg-royal-purple/20 flex items-center justify-center mr-3">
                  <Zap className="h-5 w-5 text-royal-purple" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Shamings Applied</div>
                  <div className="font-medium">{shamingEvent.shamingsApplied}</div>
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-3 rounded-lg flex items-center">
                <div className="w-10 h-10 rounded-full bg-royal-crimson/20 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-royal-crimson" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Your Applied</div>
                  <div className="font-medium">0</div>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              className="royal-button-enhanced bg-gradient-to-r from-royal-purple to-royal-gold text-white"
              onClick={() => {
                if (activeTreasureHunt) {
                  handleJoinEvent("Royal Treasure Hunt");
                  window.location.hash = "#treasure";
                } else if (activePublicShaming) {
                  handleJoinEvent("Public Shaming Festival");
                  window.location.hash = "#shame";
                }
              }}
            >
              {activeTreasureHunt ? <Map className="mr-2 h-4 w-4" /> : <Zap className="mr-2 h-4 w-4" />}
              {activeTreasureHunt || activePublicShaming ? "Participate Now" : "View Upcoming Events"}
            </Button>
            
            <Button 
              variant="outline" 
              className="royal-button-enhanced border-white/10 text-white"
              onClick={() => {
                toast({
                  title: "Event Rules",
                  description: activeTreasureHunt 
                    ? "Find hidden treasures throughout the site. All treasures are purely cosmetic and don't affect your actual rank." 
                    : "Public shaming is purely visual and lasts for 24 hours. It does not affect actual leaderboard rankings."
                });
              }}
            >
              Event Rules
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentEvent;

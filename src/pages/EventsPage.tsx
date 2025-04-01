
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Calendar, Gift, Award, Trophy, Crown, Badge, Target, Shield, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RoyalDivider from '@/components/ui/royal-divider';
import { Badge as UiBadge } from '@/components/ui/badge';
import MedievalIcon from '@/components/ui/medieval-icon';
import { isFireSaleMonth, getFireSaleDiscountPercentage } from '@/utils/eventHelpers';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const isFireSale = isFireSaleMonth();
  const fireDiscount = getFireSaleDiscountPercentage();
  
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold royal-gradient mb-2">Royal Events & Tournaments</h1>
          <p className="text-white/70">
            Special events, tournaments, and limited-time opportunities in the kingdom.
          </p>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <div className={`p-2 rounded-full ${isFireSale ? 'bg-red-500/20' : 'bg-gray-500/20'}`}>
            <Clock className={`h-5 w-5 ${isFireSale ? 'text-red-400' : 'text-gray-400'}`} />
          </div>
          <div>
            <p className="text-sm font-medium">
              {isFireSale 
                ? `Fire Sale Month! ${fireDiscount}% OFF` 
                : "No active global events"}
            </p>
            <p className="text-xs text-white/50">
              {isFireSale 
                ? "Limited time discount on all purchases" 
                : "Check back for upcoming global events"}
            </p>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="glass-morphism border-white/10 grid grid-cols-3 md:w-[400px]">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="active">Active Now</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <EventCard 
              title="Royal Tournament"
              description="Compete for prizes and glory in the kingdom-wide tournament."
              date="June 21-25, 2023"
              status="upcoming"
              icon={<Trophy className="h-8 w-8 text-royal-gold" />}
              rewards="1,000 Gold + Exclusive Title"
            />
            
            <EventCard 
              title="Treasure Hunt"
              description="Follow clues throughout the kingdom to discover hidden treasures."
              date="July 5-10, 2023"
              status="upcoming"
              icon={<MedievalIcon name="treasure-chest" size="lg" />}
              rewards="Random Cosmetic Rewards"
            />
            
            <EventCard 
              title="Throne Wars"
              description="Team-based competition to control territories and earn rewards."
              date="July 15-22, 2023"
              status="upcoming"
              icon={<Crown className="h-8 w-8 text-royal-gold" />}
              rewards="Team Bonuses + Special Effects"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <EventCard 
              title="Royal Ascension"
              description="Reach new tiers and earn special rewards during this boost event."
              date="May 18-24, 2023"
              status="active"
              icon={<MedievalIcon name="crown" size="lg" />}
              rewards="2x Tier Progress + Special Badge"
              remainingTime="3 days remaining"
            />
            
            <EventCard 
              title="Spring Festival"
              description="Celebrate the season with special rewards and activities."
              date="May 15-30, 2023"
              status="active"
              icon={<Gift className="h-8 w-8 text-emerald-400" />}
              rewards="Seasonal Cosmetics + Bonus Gold"
              remainingTime="9 days remaining"
            />
          </div>
          
          {activeTab === 'active' && isFireSale && (
            <Card className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border-red-500/30 animate-pulse-slow">
              <CardHeader>
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-red-400 mr-2" />
                  <CardTitle>Royal Fire Sale - {fireDiscount}% OFF</CardTitle>
                </div>
                <CardDescription>
                  Special discount on all purchases kingdom-wide!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  For a limited time, all items in the royal boutique, subscription plans, and special offers are available at discounted prices.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <UiBadge variant="outline" className="bg-red-950/40 text-red-300 border-red-500/50">Special Offer</UiBadge>
                  <UiBadge variant="outline" className="bg-orange-950/40 text-orange-300 border-orange-500/50">Limited Time</UiBadge>
                  <UiBadge variant="outline" className="bg-amber-950/40 text-amber-300 border-amber-500/50">All Kingdom</UiBadge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="bg-red-700 hover:bg-red-600">
                  Shop Now
                </Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="past" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <EventCard 
              title="Winter Gala"
              description="Celebrated the winter season with special rewards and festivities."
              date="January 15-30, 2023"
              status="completed"
              icon={<Badge className="h-8 w-8 text-blue-400" />}
              rewards="Winter Cosmetics + Bonus Gold"
              winner="Red Team"
            />
            
            <EventCard 
              title="Founder's Day"
              description="Special event celebrating the founding of the kingdom."
              date="April 1-3, 2023"
              status="completed"
              icon={<Calendar className="h-8 w-8 text-royal-gold" />}
              rewards="Founder's Badge + Special Title"
              winner="GoldenKing"
            />
            
            <EventCard 
              title="Dueling Tournament"
              description="One-on-one competitions for glory and prizes."
              date="March 10-12, 2023"
              status="completed"
              icon={<Shield className="h-8 w-8 text-royal-navy" />}
              rewards="Tournament Trophy + Title"
              winner="SilverKnight"
            />
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <RoyalDivider variant="fancy" />
        
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Upcoming Special Events</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            The kingdom is always bustling with activity. Stay tuned for these
            upcoming special events that will provide unique opportunities to
            earn rewards and glory.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-royal-crimson hover:bg-royal-crimson/90">
              <Calendar className="mr-2 h-4 w-4" />
              Event Calendar
            </Button>
            <Button variant="outline">
              <Bell className="mr-2 h-4 w-4" />
              Notification Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  status: 'upcoming' | 'active' | 'completed';
  icon: React.ReactNode;
  rewards: string;
  remainingTime?: string;
  winner?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  status,
  icon,
  rewards,
  remainingTime,
  winner
}) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'upcoming':
        return <UiBadge className="bg-blue-900 hover:bg-blue-900 text-blue-200">Upcoming</UiBadge>;
      case 'active':
        return <UiBadge className="bg-green-900 hover:bg-green-900 text-green-200">Active Now</UiBadge>;
      case 'completed':
        return <UiBadge className="bg-gray-700 hover:bg-gray-700 text-gray-200">Completed</UiBadge>;
      default:
        return null;
    }
  };
  
  return (
    <Card className={`glass-morphism ${status === 'active' ? 'border-green-500/30' : 'border-white/10'}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-3">
              {icon}
            </div>
            <CardTitle>{title}</CardTitle>
          </div>
          {getStatusBadge()}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-white/60" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Award className="h-4 w-4 mr-2 text-white/60" />
            <span>{rewards}</span>
          </div>
          {remainingTime && (
            <div className="flex items-center text-sm text-green-400">
              <Clock className="h-4 w-4 mr-2" />
              <span>{remainingTime}</span>
            </div>
          )}
          {winner && (
            <div className="flex items-center text-sm">
              <Trophy className="h-4 w-4 mr-2 text-royal-gold" />
              <span>Winner: {winner}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full">
          {status === 'completed' ? 'View Results' : 'View Details'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventsPage;

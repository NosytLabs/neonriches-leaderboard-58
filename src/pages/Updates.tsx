
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { CalendarDays, Trophy, Megaphone, Scroll, Clock, Crown, Gift } from 'lucide-react';
import RoyalButton from '@/components/ui/royal-button';
import ThroneBackground from '@/components/ui/throne-background';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const updates = [
  {
    id: 1,
    title: 'Royal Tournament Announced',
    date: 'Today',
    description: 'Introducing our first Royal Tournament where nobles can compete for exclusive titles and badges. Event starts in 3 days.',
    type: 'event',
    cta: 'View Details'
  },
  {
    id: 2,
    title: 'New Throne Mechanics',
    date: 'Yesterday',
    description: 'We\'ve updated how the Throne works with new visual effects for top spenders and enhanced public shaming features.',
    type: 'feature',
    cta: 'See Changes'
  },
  {
    id: 3,
    title: 'Royal Decree: Prize Pool Increases',
    date: '3 days ago',
    description: 'By order of the Royal Treasury, the prize pool allocation has increased to 20% of all spending, creating more incentive for whales.',
    type: 'announcement',
    cta: 'Read More'
  },
  {
    id: 4,
    title: 'Historical Spending Analytics',
    date: '1 week ago',
    description: 'Now you can view detailed analytics of your spending history and compare it to other nobles in similar spending tiers.',
    type: 'feature',
    cta: 'View Analytics'
  },
  {
    id: 5,
    title: 'Medieval Themed Profile Badges',
    date: '2 weeks ago',
    description: 'New medieval themed profile badges are now available for all spending tiers. Display your wealth with style!',
    type: 'feature',
    cta: 'Browse Badges'
  },
];

const getUpdateIcon = (type: string) => {
  switch (type) {
    case 'event': return <CalendarDays className="h-6 w-6 text-royal-gold" />;
    case 'feature': return <Gift className="h-6 w-6 text-royal-navy" />;
    case 'announcement': return <Megaphone className="h-6 w-6 text-royal-crimson" />;
    default: return <Scroll className="h-6 w-6 text-white/70" />;
  }
};

const getUpdateBadge = (type: string) => {
  switch (type) {
    case 'event':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-royal-gold/10 text-royal-gold">Event</span>;
    case 'feature':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-royal-navy/10 text-royal-navy">Feature</span>;
    case 'announcement':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-royal-crimson/10 text-royal-crimson">Announcement</span>;
    default:
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/70">Update</span>;
  }
};

const Updates = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="relative">
        <ThroneBackground variant="royal" particles />
        
        <div className="container px-4 py-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2 flex items-center">
                <Scroll className="mr-2 h-6 w-6 text-royal-gold" />
                Royal Proclamations & Updates
              </h1>
              <p className="text-white/70">
                Stay informed about the latest changes and events in the kingdom
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Link to="/events">
                <RoyalButton variant="royalGold" size="sm">
                  <Trophy className="mr-2 h-4 w-4" />
                  Current Events
                </RoyalButton>
              </Link>
            </div>
          </div>
          
          <div className="grid gap-6">
            {updates.map((update) => (
              <Card key={update.id} className="glass-morphism border-white/10 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {getUpdateIcon(update.type)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-semibold text-white">{update.title}</h3>
                          {getUpdateBadge(update.type)}
                        </div>
                        
                        <div className="flex items-center text-white/50 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {update.date}
                        </div>
                      </div>
                      
                      <p className="mt-2 text-white/70">{update.description}</p>
                      
                      <div className="mt-4">
                        <RoyalButton 
                          variant="outline" 
                          size="sm"
                        >
                          {update.cta}
                        </RoyalButton>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 glass-morphism border-white/10 p-6 rounded-lg bg-gradient-to-r from-royal-crimson/10 via-royal-gold/10 to-royal-navy/10">
            <div className="flex items-center">
              <Crown className="h-8 w-8 text-royal-gold mr-3" />
              <div>
                <h2 className="text-xl font-bold">Never Miss a Royal Decree</h2>
                <p className="text-white/70">Subscribe to notifications to get immediate updates on changes and events.</p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <RoyalButton variant="royalGold" className="w-full sm:w-auto">
                <Megaphone className="mr-2 h-4 w-4" />
                Subscribe to Royal Announcements
              </RoyalButton>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Updates;

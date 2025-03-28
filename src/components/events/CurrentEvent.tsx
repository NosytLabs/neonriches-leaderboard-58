
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Clock, Trophy, Users, Scroll, Sparkles } from 'lucide-react';
import { Dialog } from '@/components/ui/dialog';
import CountdownTimer from './CountdownTimer';
import EventDetailsModal from './components/EventDetailsModal';
import { useEventStatistics } from './hooks/useEventStatistics';
import { currentEvent } from './data';
import PublicShamingFestival from './PublicShamingFestival';
import OptimizedImage from '@/components/ui/optimized-image';
import { formatDate } from '@/utils/dateUtils';
import { getWeeklyDiscountedAction, getShameActionIcon, getDiscountedShamePrice, getShameActionPrice } from './utils/shameUtils';
import RoyalDivider from '@/components/ui/royal-divider';
import MedievalIcon from '@/components/ui/medieval-icon';

const CurrentEvent = () => {
  const { stats } = useEventStatistics();
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  // Get this week's featured discount
  const discountedAction = getWeeklyDiscountedAction();
  const regularPrice = getShameActionPrice(discountedAction);
  const discountedPrice = getDiscountedShamePrice(discountedAction);
  const discountPercentage = Math.round((1 - (discountedPrice / regularPrice)) * 100);
  
  return (
    <div className="space-y-6">
      <div className="glass-morphism border-royal-gold/20 overflow-hidden rounded-lg">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
          
          <OptimizedImage 
            src="/assets/events/public-shaming-banner.jpg"
            alt="Royal Public Shaming Festival"
            className="w-full h-60 object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="text-2xl font-bold royal-gradient">
                  Royal Public Shaming Festival
                </h2>
                <p className="text-white/70 line-clamp-2 md:max-w-xl">
                  Engage in medieval-style mockery with cosmetic public shaming effects! This week's special: {discountPercentage}% off {discountedAction} shaming!
                </p>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-end mb-2">
                  <span className="text-xs bg-royal-gold/20 text-royal-gold px-2 py-1 rounded-full flex items-center">
                    <Sparkles size={12} className="mr-1" />
                    Weekly Event
                  </span>
                </div>
                
                <Button 
                  className="royal-button bg-gradient-to-r from-royal-gold to-royal-crimson hover:opacity-90"
                  onClick={() => setShowDetailsModal(true)}
                >
                  <span className="mr-2">Event Details</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-black/40">
          <div className="flex items-center p-2 glass-morphism border-white/10 rounded-lg">
            <Scroll className="h-6 w-6 text-royal-gold mr-3" />
            <div>
              <p className="text-sm text-white/70">Current Feature</p>
              <p className="font-bold flex items-center">
                <span className="mr-2">{getShameActionIcon(discountedAction)}</span>
                {discountedAction.charAt(0).toUpperCase() + discountedAction.slice(1)}
              </p>
            </div>
          </div>
          
          <div className="flex items-center p-2 glass-morphism border-white/10 rounded-lg">
            <Sparkles className="h-6 w-6 text-royal-purple mr-3" />
            <div>
              <p className="text-sm text-white/70">Special Discount</p>
              <p className="font-bold">{discountPercentage}% Off!</p>
            </div>
          </div>
          
          <div className="flex items-center p-2 glass-morphism border-white/10 rounded-lg">
            <CalendarDays className="h-6 w-6 text-royal-navy mr-3" />
            <div>
              <p className="text-sm text-white/70">Refreshes</p>
              <p className="font-bold">Every Monday</p>
            </div>
          </div>
          
          <div className="flex items-center p-2 glass-morphism border-white/10 rounded-lg">
            <Clock className="h-6 w-6 text-royal-crimson mr-3" />
            <div>
              <p className="text-sm text-white/70">Next Rotation</p>
              <CountdownTimer 
                targetDate={getNextMondayDate()} 
                variant="compact"
                className="text-sm font-bold"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Weekly Featured Discount Banner */}
      <div className="glass-morphism border-royal-gold/20 p-4 rounded-lg flex items-center">
        <div className="mr-4 p-3 rounded-full bg-royal-gold/10 border border-royal-gold/30">
          <MedievalIcon name="scroll" size="xl" color="gold" animate={true} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg royal-gradient mb-1">Royal Decree of Weekly Discounts</h3>
          <p className="text-white/70">
            By royal proclamation, each week brings a new opportunity for affordable public ridicule! 
            This week, {discountedAction} are discounted by {discountPercentage}%!
          </p>
        </div>
        <div className="text-center px-4 py-2 glass-morphism border-royal-gold/30 rounded-lg">
          <div className="flex items-center justify-center text-2xl mb-1">
            {getShameActionIcon(discountedAction)}
          </div>
          <div className="text-xs text-white/70">Was: ${regularPrice.toFixed(2)}</div>
          <div className="text-royal-gold font-bold">Now: ${discountedPrice.toFixed(2)}</div>
        </div>
      </div>
      
      <RoyalDivider variant="ornate" color="royal" className="my-6" />
      
      <PublicShamingFestival />
      
      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <EventDetailsModal 
          eventId="public-shaming-festival" 
          onClose={() => setShowDetailsModal(false)} 
        />
      </Dialog>
    </div>
  );
};

// Helper function to get next Monday's date
function getNextMondayDate(): string {
  const today = new Date();
  const day = today.getDay(); // 0 is Sunday, 1 is Monday
  const daysUntilNextMonday = day === 1 ? 7 : (8 - day) % 7; // If today is Monday, get next Monday
  
  const nextMonday = new Date(today);
  nextMonday.setDate(today.getDate() + daysUntilNextMonday);
  nextMonday.setHours(0, 0, 0, 0);
  
  return nextMonday.toISOString();
}

export default CurrentEvent;

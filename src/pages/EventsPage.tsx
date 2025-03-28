
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CurrentEvent from '@/components/events/CurrentEvent';
import { Sparkles, Calendar, Clock, Info } from 'lucide-react';
import { isFireSaleMonth, getFireSaleDiscountPercentage } from '@/components/events/utils/shameUtils';
import MedievalIcon from '@/components/ui/medieval-icon';

const EventsPage = () => {
  // Check if it's a Fire Sale month
  const fireSaleActive = isFireSaleMonth();
  const fireSaleDiscount = fireSaleActive ? getFireSaleDiscountPercentage() : 0;
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Royal Events | SpendThrone</title>
        <meta 
          name="description" 
          content="Participate in our exclusive royal events and festivals. Weekly discounts and special offers await!" 
        />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold royal-gradient mb-2">Royal Events Calendar</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Participate in our exclusive events and gain special discounts on public shaming and cosmetic items.
              {fireSaleActive && (
                <span className="text-royal-crimson ml-1">
                  Fire Sale active: {fireSaleDiscount}% off select cosmetics!
                </span>
              )}
            </p>
          </div>
          
          <CurrentEvent />
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg mt-12">
            <div className="flex items-center mb-4">
              <MedievalIcon name="scroll" color="gold" className="mr-2" />
              <h3 className="text-xl font-bold royal-gradient">Royal Event Schedule</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-royal-purple mr-2" />
                  <h4 className="font-medium">Weekly Events</h4>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <Sparkles className="h-4 w-4 text-royal-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Public Shaming Festival: Randomized discounts between 5-80% each week</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-4 w-4 text-royal-purple mt-1 mr-2 flex-shrink-0" />
                    <span>Weekly rotation of discounted shaming methods</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="h-4 w-4 text-royal-navy mt-1 mr-2 flex-shrink-0" />
                    <span>Refreshes every Monday at midnight UTC</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Sparkles className="h-5 w-5 text-royal-crimson mr-2" />
                  <h4 className="font-medium">Monthly Events</h4>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <MedievalIcon name="sparkles" size="sm" color="crimson" className="mt-1 mr-2 flex-shrink-0" />
                    <span>Royal Fire Sale: 30-70% off selected cosmetic categories every third month (March, June, September, December)</span>
                  </li>
                  <li className="flex items-start">
                    <MedievalIcon name="crown" size="sm" color="gold" className="mt-1 mr-2 flex-shrink-0" />
                    <span>Special seasonal events with unique rewards and features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg text-center mt-12">
            <h3 className="text-xl font-bold royal-gradient mb-2">Upcoming Royal Events</h3>
            <p className="text-white/70">
              The royal court is preparing spectacular new events for your entertainment and participation.
              Visit this page regularly to discover new opportunities for spending and advancement.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsPage;

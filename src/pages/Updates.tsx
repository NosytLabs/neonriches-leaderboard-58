
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sparkles, ArrowRight, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoyalDivider from '@/components/ui/royal-divider';
import ThroneBackground from '@/components/ui/throne-background';

const updateItems = [
  {
    version: "1.2.0",
    date: "May 15, 2023",
    title: "The Royal Expansion",
    description: "Introducing royal titles, cosmetic upgrades, and the Crown Jewels Collection.",
    highlights: [
      "Added 15 new royal titles for purchase",
      "Introduced the Crown Jewels Collection - limited edition profile borders",
      "Improved leaderboard performance and sorting options",
      "Added team performance statistics"
    ]
  },
  {
    version: "1.1.5",
    date: "April 3, 2023",
    title: "The Shame Update",
    description: "Public shaming features and spending streak rewards.",
    highlights: [
      "New Public Shaming Festival event",
      "Implemented spending streak rewards",
      "Added notification system",
      "Fixed various profile page bugs"
    ]
  },
  {
    version: "1.0.0",
    date: "March 1, 2023",
    title: "Royal Launch",
    description: "Official launch of SpendThrone with core features.",
    highlights: [
      "Persistent leaderboard system",
      "Basic profile customization",
      "Team selection feature",
      "Payment processing system"
    ]
  }
];

const Updates = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Royal Updates | SpendThrone</title>
      </Helmet>
      
      <div className="absolute inset-0 -z-10">
        <ThroneBackground variant="royal" />
      </div>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-royal font-bold royal-gradient mb-4">
              Royal Decrees & Updates
            </h1>
            <p className="text-white/70 text-lg">
              Chronicles of our kingdom's evolution and expansion
            </p>
          </div>
          
          <div className="space-y-12">
            {updateItems.map((update, index) => (
              <div key={index} className="glass-morphism border-white/10 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <Sparkles className="h-5 w-5 text-royal-gold mr-2" />
                      <h2 className="text-2xl font-bold royal-gradient">{update.title}</h2>
                    </div>
                    <p className="text-white/80">{update.description}</p>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="text-lg font-royal text-royal-gold">v{update.version}</div>
                    <div className="flex items-center text-sm text-white/60">
                      <Calendar className="h-3 w-3 mr-1" />
                      {update.date}
                    </div>
                  </div>
                </div>
                
                <RoyalDivider variant="line" className="my-4" />
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Royal Highlights:</h3>
                  <ul className="space-y-2">
                    {update.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-royal-gold mt-1 mr-2 flex-shrink-0" />
                        <span className="text-white/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Updates;

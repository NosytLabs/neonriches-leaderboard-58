
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoyalBoutique from '@/components/cosmetics/RoyalBoutique';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Gem } from 'lucide-react';
import RoyalWishingWell from '@/components/wishingwell/RoyalWishingWell';

const RoyalPrestige = () => {
  // Mock data for the wishing well
  const recentWishes = [
    {
      username: "GoldenKing",
      amount: 50,
      result: "won 125 gold",
      timestamp: new Date(Date.now() - 5 * 60000).toISOString()
    },
    {
      username: "RichNoble",
      amount: 100,
      result: "won 320 gold",
      timestamp: new Date(Date.now() - 15 * 60000).toISOString()
    },
    {
      username: "DukeMoney",
      amount: 25,
      result: "lost",
      timestamp: new Date(Date.now() - 30 * 60000).toISOString()
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold royal-gradient">Royal Prestige</h1>
            <p className="text-white/70 mt-2">
              Enhance your royal presence with exclusive cosmetics and mystical features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <RoyalBoutique />
            </div>
            
            <div className="space-y-8">
              <RoyalWishingWell currentPool={5000} recentWishes={recentWishes} />
              
              <Card className="glass-morphism border-royal-gold/20">
                <CardHeader>
                  <div className="flex items-center">
                    <Gem className="mr-3 h-6 w-6 text-royal-gold" />
                    <CardTitle>Royal Benefits</CardTitle>
                  </div>
                  <CardDescription>
                    The privileges of nobility are manifold
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="glass-morphism border-white/10 rounded-lg p-4 flex items-center space-x-4">
                    <Crown className="h-8 w-8 text-royal-gold" />
                    <div>
                      <h3 className="font-semibold">Royal Recognition</h3>
                      <p className="text-sm text-white/70">
                        Your name shall be displayed with greater prominence throughout the realm
                      </p>
                    </div>
                  </div>
                  
                  <div className="glass-morphism border-white/10 rounded-lg p-4 flex items-center space-x-4">
                    <Gem className="h-8 w-8 text-royal-purple" />
                    <div>
                      <h3 className="font-semibold">Exclusive Features</h3>
                      <p className="text-sm text-white/70">
                        Access royal-only features and events with special rewards
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoyalPrestige;

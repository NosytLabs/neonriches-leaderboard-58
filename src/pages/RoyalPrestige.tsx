
import React, { useEffect } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ThroneBackground from '@/components/ui/throne-background';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Gem, ScrollText } from 'lucide-react';
import RoyalBoutique from '@/components/cosmetics/RoyalBoutique';
import RoyalWishingWell from '@/components/wishingwell/RoyalWishingWell';
import useNotificationSounds from '@/hooks/use-notification-sounds';

const RoyalPrestige = () => {
  const { user } = useAuth();
  const { playSound } = useNotificationSounds();

  useEffect(() => {
    // Play a subtle royal sound when the page loads
    playSound('pageTransition', 0.3);
  }, [playSound]);

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
    },
    {
      username: "LadyLuxury",
      amount: 75,
      result: "won 200 gold",
      timestamp: new Date(Date.now() - 45 * 60000).toISOString()
    },
    {
      username: "CountCash",
      amount: 10,
      result: "lost",
      timestamp: new Date(Date.now() - 60 * 60000).toISOString()
    }
  ];

  return (
    <DashboardLayout 
      user={user}
      title="Royal Prestige"
      subtitle="Enhance your noble presence and try your luck in the mystical wishing well."
      icon={<Crown size={32} className="text-royal-gold animate-crown-glow" />}
    >
      <div className="relative min-h-[calc(100vh-4rem)]">
        <ThroneBackground variant="royal" particles density="medium" />
        
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="boutique" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 glass-morphism bg-transparent border border-white/10">
              <TabsTrigger value="boutique" className="flex items-center gap-2 data-[state=active]:bg-royal-gold/20">
                <Crown size={16} />
                <span>Royal Boutique</span>
              </TabsTrigger>
              <TabsTrigger value="wishingwell" className="flex items-center gap-2 data-[state=active]:bg-royal-gold/20">
                <Gem size={16} />
                <span>Wishing Well</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="boutique" className="space-y-4 animate-fade-in">
              <div className="bg-black/30 backdrop-blur-md border border-royal-gold/10 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <ScrollText className="h-6 w-6 text-royal-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Enhance Your Royal Presence</h3>
                    <p className="text-white/70">
                      The Royal Boutique offers exclusive cosmetic enhancements to distinguish yourself among the commoners.
                      All purchases contribute to your total spending and improve your position in the kingdom.
                    </p>
                  </div>
                </div>
              </div>
              
              <RoyalBoutique />
            </TabsContent>
            
            <TabsContent value="wishingwell" className="space-y-4 animate-fade-in">
              <div className="bg-black/30 backdrop-blur-md border border-royal-gold/10 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <ScrollText className="h-6 w-6 text-royal-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">The Mystical Royal Wishing Well</h3>
                    <p className="text-white/70">
                      Cast your coins into the ancient wishing well and test your fortune. 
                      The well's mystical powers may grant you blessings beyond your wildest dreams—or simply consume your wealth.
                      All contributions remain in the royal treasury regardless of outcome.
                    </p>
                  </div>
                </div>
              </div>
              
              <RoyalWishingWell 
                currentPool={15760} 
                recentWishes={recentWishes} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RoyalPrestige;

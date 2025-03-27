
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Scroll, Sparkles, Crown, Swords, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "@/hooks/use-toast";

const RoyalDecrees = () => {
  const handleDecreeClick = (name: string, cost: number) => {
    toast({
      title: "Royal Decree Activated!",
      description: `Your ${name} decree has been issued at a cost of $${cost}.`,
      duration: 5000,
    });
  };

  return (
    <Card className="glass-morphism border-royal-gold/20 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-royal-purple/5 rounded-full blur-3xl"></div>
      
      <CardHeader>
        <div className="flex items-center">
          <Scroll className="mr-2 h-6 w-6 text-royal-gold" />
          <CardTitle>Royal Decrees</CardTitle>
        </div>
        <CardDescription>
          Issue expensive edicts to assert your digital dominance
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30 hover:-translate-y-1">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-royal-purple/20 mr-3">
                <Crown size={20} className="text-royal-gold" />
              </div>
              <div>
                <h3 className="font-medium">Royal Proclamation</h3>
                <p className="text-xs text-white/60">$25.00</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-3">
              Double your rank points for 24 hours. Show everyone what money can buy!
            </p>
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-royal-purple to-royal-gold text-white"
              onClick={() => handleDecreeClick("Royal Proclamation", 25)}
            >
              <Sparkles size={16} className="mr-2" />
              Proclaim Greatness
            </Button>
          </div>
          
          <div className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30 hover:-translate-y-1">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-royal-crimson/20 mr-3">
                <Swords size={20} className="text-royal-crimson" />
              </div>
              <div>
                <h3 className="font-medium">Force Abdication</h3>
                <p className="text-xs text-white/60">$5.00</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-3">
              Push someone down the ranks. Assert dominance through the power of your wallet!
            </p>
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-royal-crimson to-royal-purple text-white"
              onClick={() => handleDecreeClick("Force Abdication", 5)}
            >
              <Swords size={16} className="mr-2" />
              Dethrone Rival
            </Button>
          </div>
          
          <div className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30 hover:-translate-y-1">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-royal-blue/20 mr-3">
                <ShieldAlert size={20} className="text-royal-blue" />
              </div>
              <div>
                <h3 className="font-medium">Royal Protection</h3>
                <p className="text-xs text-white/60">$10.00</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-3">
              Immunity from rank drops for 12 hours. Money is the best shield!
            </p>
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-royal-blue to-royal-purple text-white"
              onClick={() => handleDecreeClick("Royal Protection", 10)}
            >
              <ShieldAlert size={16} className="mr-2" />
              Buy Protection
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalDecrees;


import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoyalBoutique from '@/components/cosmetics/RoyalBoutique';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Gem, Sparkles, ChevronsUp, Trophy, User, Shield } from 'lucide-react';
import RoyalWishingWell from '@/components/wishingwell/RoyalWishingWell';
import RoyalDepositEffect from '@/components/deposit/RoyalDepositEffect';
import MockeryEffect from '@/components/mockery/MockeryEffect';
import { useAuth } from '@/contexts/auth';
import { Button } from '@/components/ui/button';
import { MockeryAction } from '@/types/mockery-types';
import { useToast } from '@/hooks/use-toast';

const RoyalPrestige = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [showDepositEffect, setShowDepositEffect] = useState(false);
  const [depositAmount, setDepositAmount] = useState(0);
  const [showMockeryEffect, setShowMockeryEffect] = useState(false);
  const [mockeryAction, setMockeryAction] = useState<MockeryAction>('tomato');
  const [mockeryUsername, setMockeryUsername] = useState('');
  
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
  
  useEffect(() => {
    // Listen for deposit events
    const handleDeposit = (event: CustomEvent) => {
      const { amount } = event.detail;
      setDepositAmount(amount);
      setShowDepositEffect(true);
    };
    
    // Add event listener for deposit events
    window.addEventListener('user:deposit' as any, handleDeposit as EventListener);
    
    // Clean up
    return () => {
      window.removeEventListener('user:deposit' as any, handleDeposit as EventListener);
    };
  }, []);
  
  // Test functions for our interactive effects
  const testDepositEffect = (amount: number) => {
    setDepositAmount(amount);
    setShowDepositEffect(true);
  };
  
  const testMockeryEffect = (action: MockeryAction, username: string) => {
    setMockeryAction(action);
    setMockeryUsername(username);
    setShowMockeryEffect(true);
  };
  
  const handleDepositComplete = () => {
    setShowDepositEffect(false);
    toast({
      title: "Deposit Effect Complete",
      description: "Your deposit has been processed successfully!",
      variant: "default"
    });
  };
  
  const handleMockeryComplete = () => {
    setShowMockeryEffect(false);
    toast({
      title: "Mockery Complete",
      description: `${mockeryUsername} has been mocked with ${mockeryAction}!`,
      variant: "default"
    });
  };
  
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
              
              {/* Test interactive elements (for demo purposes) */}
              <Card className="glass-morphism border-royal-gold/20">
                <CardHeader>
                  <div className="flex items-center">
                    <Sparkles className="mr-3 h-6 w-6 text-royal-gold" />
                    <CardTitle>Interactive Effects</CardTitle>
                  </div>
                  <CardDescription>
                    Test the interactive elements of the royal court
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold mb-2 flex items-center">
                      <ChevronsUp className="h-4 w-4 mr-1 text-royal-gold" />
                      Deposit Effects
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" className="glass-morphism border-white/10" onClick={() => testDepositEffect(25)}>
                        $25 Deposit
                      </Button>
                      <Button variant="outline" className="glass-morphism border-white/10" onClick={() => testDepositEffect(100)}>
                        $100 Deposit
                      </Button>
                      <Button variant="outline" className="glass-morphism border-white/10" onClick={() => testDepositEffect(500)}>
                        $500 Deposit
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-2 flex items-center">
                      <User className="h-4 w-4 mr-1 text-royal-crimson" />
                      Mockery Effects
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="glass-morphism border-white/10" onClick={() => testMockeryEffect('tomato', 'PeasantUser')}>
                        Tomatoes
                      </Button>
                      <Button variant="outline" className="glass-morphism border-white/10" onClick={() => testMockeryEffect('egg', 'LowSpender')}>
                        Eggs
                      </Button>
                      <Button variant="outline" className="glass-morphism border-white/10" onClick={() => testMockeryEffect('courtJester', 'FoolishNoble')}>
                        Court Jester
                      </Button>
                      <Button variant="outline" className="glass-morphism border-white/10" onClick={() => testMockeryEffect('silence', 'AnnoyingTroll')}>
                        Silence
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-1 text-royal-navy" />
                      Team Interactions
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" className="bg-red-500/10 border-red-500/30 text-red-400">
                        Red Team
                      </Button>
                      <Button variant="outline" className="bg-green-500/10 border-green-500/30 text-green-400">
                        Green Team
                      </Button>
                      <Button variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400">
                        Blue Team
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Interactive Effects (these will be triggered by events) */}
      <RoyalDepositEffect 
        amount={depositAmount} 
        isActive={showDepositEffect} 
        onComplete={handleDepositComplete}
      />
      
      <MockeryEffect
        username={mockeryUsername}
        action={mockeryAction}
        isActive={showMockeryEffect}
        onComplete={handleMockeryComplete}
      />
    </div>
  );
};

export default RoyalPrestige;

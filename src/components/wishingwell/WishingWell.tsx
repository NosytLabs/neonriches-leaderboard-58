import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Coins, Info } from 'lucide-react';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { spendFromWallet } from '@/services/walletService';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { ensureUser } from '@/utils/userAdapter';

const WishingWell: React.FC = () => {
  const [isWishing, setIsWishing] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();
  const { playSound } = useNotificationSounds();
  
  const makeWish = async (amount: number) => {
    if (!user) {
      toast({
        title: "You must be logged in to make a wish",
        description: "Please sign in to continue.",
        variant: "destructive"
      });
      return;
    }
    
    if (user.walletBalance < amount) {
      toast({
        title: "Insufficient funds",
        description: "You don't have enough funds to make this wish.",
        variant: "destructive"
      });
      return;
    }
    
    setIsWishing(true);
    setAnimationComplete(false);
    
    playSound('coins');
    
    try {
      const success = await spendFromWallet(
        ensureUser(user),
        amount,
        'wish',
        `Made a ${amount} coin wish at the Wishing Well`
      );
      
      if (success) {
        setTimeout(() => {
          playSound('success');
          toast({
            title: "Your wish has been cast!",
            description: "The Well of Prosperity has received your offering.",
            variant: "success"
          });
          setAnimationComplete(true);
        }, 2000);
      } else {
        playSound('error');
        toast({
          title: "Wish Failed",
          description: "There was an error processing your wish.",
          variant: "destructive"
        });
        setAnimationComplete(true);
      }
    } catch (error) {
      console.error("Error making wish:", error);
      playSound('error');
      toast({
        title: "Wish Failed",
        description: "There was an error processing your wish.",
        variant: "destructive"
      });
      setAnimationComplete(true);
    } finally {
      setTimeout(() => {
        setIsWishing(false);
      }, 3000);
    }
  };

  return (
    <Card className="well-card border-royal-gold/30 bg-gradient-to-b from-slate-900/80 to-slate-950/90">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-serif text-royal-gold">The Wishing Well</CardTitle>
        <CardDescription>Cast your coins and make a wish</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-6 pb-8">
        <div className="well-container mb-6 relative">
          <div className={`well-water ${isWishing ? 'ripple' : ''}`}></div>
          {isWishing && (
            <div className="coins-animation">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="coin"
                  style={{ 
                    left: `${40 + Math.random() * 20}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${0.5 + Math.random()}s`
                  }}
                >
                  <Coins size={16} className="text-royal-gold" />
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <Button 
            variant="outline" 
            className="flex-1 border-royal-gold/40 hover:border-royal-gold/60 hover:bg-royal-gold/10"
            disabled={isWishing || !animationComplete || !user || (user?.walletBalance || 0) < 1}
            onClick={() => makeWish(1)}
          >
            <Coins size={14} className="mr-2 text-royal-gold" /> 
            Small Wish ($1)
          </Button>
          
          <Button 
            variant="outline" 
            className="flex-1 border-royal-gold/40 hover:border-royal-gold/60 hover:bg-royal-gold/10"
            disabled={isWishing || !animationComplete || !user || (user?.walletBalance || 0) < 5}
            onClick={() => makeWish(5)}
          >
            <Coins size={16} className="mr-2 text-royal-gold" /> 
            Medium Wish ($5)
          </Button>
          
          <Button 
            variant="outline" 
            className="flex-1 border-royal-gold/40 hover:border-royal-gold/60 hover:bg-royal-gold/10"
            disabled={isWishing || !animationComplete || !user || (user?.walletBalance || 0) < 10}
            onClick={() => makeWish(10)}
          >
            <Coins size={18} className="mr-2 text-royal-gold" /> 
            Grand Wish ($10)
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center px-6 pt-0 pb-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" className="text-xs text-slate-400 hover:text-slate-300">
              <Info size={12} className="mr-1" /> How does this work?
            </Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>The Wishing Well is a playful feature that accepts your "wishes" in the form of coins. 
            Your contribution goes toward your account's total spent amount, potentially affecting your ranking.</p>
          </TooltipContent>
        </Tooltip>
      </CardFooter>
      
      <style jsx>{`
        .well-container {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, #1a1a1a 0%, #111111 100%);
          border: 4px solid #333;
          overflow: hidden;
          position: relative;
        }
        
        .well-water {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 70%;
          background: linear-gradient(180deg, 
            rgba(23, 85, 126, 0.7) 0%, 
            rgba(11, 36, 52, 0.9) 100%);
          border-top: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .well-water.ripple::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: ripple 2s ease-out;
        }
        
        @keyframes ripple {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.8;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }
        
        .coins-animation {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .coin {
          position: absolute;
          top: 0;
          animation: fall-and-sink linear forwards;
        }
        
        @keyframes fall-and-sink {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(70px) rotate(180deg);
            opacity: 1;
          }
          75% {
            transform: translateY(90px) rotate(270deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(120px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </Card>
  );
};

export default WishingWell;

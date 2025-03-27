
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, ChevronsUp, DollarSign, Star, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SatiricalPaymentSuccessProps {
  amount: number;
  onClose: () => void;
}

const SatiricalPaymentSuccess: React.FC<SatiricalPaymentSuccessProps> = ({ amount, onClose }) => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Play celebratory sound
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3');
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio playback error:', e));
    
    // Show toast
    toast({
      title: "Royal Fortune Enhanced!",
      description: `Your generous contribution of $${amount} has been graciously accepted!`,
      duration: 5000,
    });
  }, [amount, toast]);
  
  const getTitle = () => {
    if (amount >= 500) return "MAGNIFICENT SPLENDOR!";
    if (amount >= 250) return "GLORIOUS CONTRIBUTION!";
    if (amount >= 100) return "NOBLE GENEROSITY!";
    return "ROYAL APPROVAL!";
  };
  
  const getMessage = () => {
    if (amount >= 500) {
      return "The royal accountants weep with joy at your lavish display of excess! Your digital status has skyrocketed to unprecedented heights of meaninglessness!";
    }
    if (amount >= 250) {
      return "The court heralds announce your impressive financial sacrifice to the realm! Your commitment to virtual prestige is truly commendable!";
    }
    if (amount >= 100) {
      return "The royal coffers grow heavier thanks to your contribution. The crown acknowledges your dedication to digital nobility!";
    }
    return "Your tribute has been added to the royal treasury. Every dollar brings you closer to illusory importance!";
  };
  
  const getStatusBoost = () => {
    if (amount >= 500) return "+++ ENORMOUS STATUS BOOST +++";
    if (amount >= 250) return "++ SIGNIFICANT STATUS BOOST ++";
    if (amount >= 100) return "+ SUBSTANTIAL STATUS BOOST +";
    return "STATUS INCREASED";
  };
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <Card className="glass-morphism border-royal-gold/30 max-w-md w-full overflow-hidden">
          <div className="bg-gradient-to-r from-royal-purple/20 via-royal-gold/20 to-royal-blue/20 p-6 relative">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-10 left-10 w-40 h-40 bg-royal-gold/20 rounded-full filter blur-[50px] animate-pulse-slow"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-royal-purple/20 rounded-full filter blur-[30px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Crown size={50} className="text-royal-gold animate-pulse-slow" />
                  <div className="absolute -inset-3 bg-royal-gold/20 rounded-full blur-lg"></div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-center royal-gradient mb-2">{getTitle()}</h2>
              
              <div className="flex justify-center mb-4">
                <div className="bg-white/10 rounded-full px-4 py-1 border border-royal-gold/30">
                  <div className="flex items-center">
                    <DollarSign size={14} className="text-royal-gold mr-1" />
                    <span className="font-mono font-bold">${amount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <CardContent className="p-6">
            <p className="text-center mb-6 italic">
              {getMessage()}
            </p>
            
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-royal-purple/10 via-royal-gold/20 to-royal-blue/10 rounded-lg px-5 py-2 border border-white/10">
                <div className="flex items-center">
                  <ChevronsUp size={16} className="text-royal-gold mr-2" />
                  <span className="font-medium">{getStatusBoost()}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              {amount >= 100 && (
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Trophy size={24} className="text-royal-gold" />
                  </div>
                  <div className="text-xs">Achievement Unlocked</div>
                </div>
              )}
              
              {amount >= 250 && (
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Star size={24} className="text-royal-gold" />
                  </div>
                  <div className="text-xs">Royal Favorite</div>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button 
                className="bg-gradient-to-r from-royal-purple via-royal-gold to-royal-blue hover:opacity-90"
                onClick={onClose}
              >
                Return to Court
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SatiricalPaymentSuccess;

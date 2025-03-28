
import React, { useState, useEffect } from 'react';
import { Scroll, Crown, Sparkles } from 'lucide-react';
import { useToastContext } from '@/contexts/ToastContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import useNotificationSounds from '@/hooks/use-notification-sounds';

const RoyalDecrees = () => {
  const { addToast } = useToastContext();
  const { playSound } = useNotificationSounds();
  const [activeDecreeIndex, setActiveDecreeIndex] = useState<number | null>(null);
  const [showNewDecree, setShowNewDecree] = useState<boolean>(false);
  
  const decrees = [
    {
      title: "Mandatory Spending",
      content: "A Royal Decree has been issued: All citizens must spend at least $10 today to maintain their digital status.",
      consequence: "Those who fail to comply may face digital exile!",
      importance: "high"
    },
    {
      title: "Treasury Demands",
      content: "By order of the Crown: Increase your spending by 20% or face digital exile!",
      consequence: "The crown is watching your contributions closely.",
      importance: "medium"
    },
    {
      title: "Royal Tribute",
      content: "The Royal Treasury demands tribute! Spend generously to climb the ranks of nobility.",
      consequence: "Show your loyalty through your generous donations.",
      importance: "high"
    },
    {
      title: "Royal Boutique",
      content: "New cosmetic items available in the Royal Boutique! Spend now to customize your profile.",
      consequence: "Limited time offers for those who act quickly!",
      importance: "low"
    },
    {
      title: "Public Shaming",
      content: "The Public Shaming Festival is now active! Humiliate your rivals with rotten tomatoes and eggs.",
      consequence: "A time-honored tradition of public ridicule.",
      importance: "medium"
    }
  ];

  // Simulate a new decree appearing occasionally
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewDecree(true);
      playSound('notification', 0.2);
    }, 15000);
    
    return () => clearTimeout(timer);
  }, [playSound]);

  const handleDecreeClick = (index: number) => {
    setActiveDecreeIndex(activeDecreeIndex === index ? null : index);
    playSound('pageChange', 0.3);
    
    if (activeDecreeIndex !== index) {
      addToast({
        title: `Royal Decree: ${decrees[index].title}`,
        description: `You have acknowledged the decree: "${decrees[index].content}"`,
        duration: 3000,
      });
    }
  };

  const handleDismissNewDecree = () => {
    setShowNewDecree(false);
    addToast({
      title: "Royal Notice Acknowledged", 
      description: "You have been marked as having read the latest royal proclamation.",
      duration: 3000,
    });
  };

  return (
    <div className="glass-morphism p-4 rounded-lg border border-white/10 relative overflow-hidden">
      <h3 className="font-medium royal-gradient flex items-center mb-3">
        <Scroll className="mr-2 h-4 w-4" /> Royal Decrees
      </h3>
      
      <AnimatePresence>
        {showNewDecree && (
          <motion.div 
            className="absolute top-0 right-0 left-0 bg-royal-gold/20 p-3 border-b border-royal-gold/30 flex justify-between items-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <div className="flex items-center">
              <Crown className="h-4 w-4 text-royal-gold mr-2 animate-pulse" />
              <span className="text-sm font-bold">New Royal Decree Issued!</span>
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-royal-gold hover:text-royal-gold/80 p-1 h-auto"
              onClick={handleDismissNewDecree}
            >
              Acknowledge
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <ul className="space-y-2 mt-2">
        {decrees.map((decree, index) => (
          <motion.li 
            key={index}
            className={`text-sm border border-white/10 rounded-md overflow-hidden transition-all duration-300 cursor-pointer
              ${activeDecreeIndex === index ? 'bg-black/40' : 'bg-black/20 hover:bg-black/30'}
              ${decree.importance === 'high' ? 'border-royal-gold/30' : 
                decree.importance === 'medium' ? 'border-royal-crimson/20' : 'border-white/10'}
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleDecreeClick(index)}
          >
            <div className="p-3 flex justify-between items-center">
              <div className="flex items-center">
                <Crown className={`h-4 w-4 mr-2 ${
                  decree.importance === 'high' ? 'text-royal-gold' : 
                  decree.importance === 'medium' ? 'text-royal-crimson' : 'text-white/60'
                }`} />
                <span className="font-medium">{decree.title}</span>
              </div>
              
              {decree.importance === 'high' && (
                <Sparkles className="h-3 w-3 text-royal-gold animate-pulse" />
              )}
            </div>
            
            <AnimatePresence>
              {activeDecreeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-white/10 p-3 bg-black/20"
                >
                  <p className="text-white/70 mb-2">{decree.content}</p>
                  <p className="text-white/50 italic text-xs">{decree.consequence}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default RoyalDecrees;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import WishResultModal from './WishResultModal';
import { CosmeticItem } from '@/types/cosmetics';

const EnhancedWishingWell: React.FC = () => {
  const { toast } = useToast();
  const sound = useSound();
  const [isWishing, setIsWishing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  // Sample cosmetic items
  const possibleRewards: CosmeticItem[] = [
    {
      id: 'crown-gold',
      name: 'Golden Crown',
      description: 'A majestic golden crown for your profile',
      price: 500,
      category: 'effect',
      cssClass: 'crown-gold',
      rarity: 'legendary',
      type: 'premium',
      enabled: true,
      previewUrl: '/images/cosmetics/crown-gold.png'
    },
    {
      id: 'aura-royal',
      name: 'Royal Aura',
      description: 'A shimmering royal aura around your avatar',
      price: 350,
      category: 'effect',
      cssClass: 'aura-royal',
      rarity: 'epic',
      type: 'premium',
      enabled: true,
      previewUrl: '/images/cosmetics/aura-royal.png'
    },
    {
      id: 'title-royal',
      name: 'Royal Spender',
      description: 'An exclusive title showing your royal spending status',
      price: 400,
      category: 'title',
      cssClass: 'title-royal',
      rarity: 'epic',
      type: 'premium',
      enabled: true,
      previewUrl: '/images/cosmetics/title-royal.png'
    },
    {
      id: 'border-gold',
      name: 'Golden Border',
      description: 'A luxurious golden border for your profile',
      price: 300,
      category: 'border',
      cssClass: 'border-gold',
      rarity: 'rare',
      type: 'premium',
      enabled: true,
      previewUrl: '/images/cosmetics/border-gold.png'
    },
    {
      id: 'background-throne',
      name: 'Throne Room Background',
      description: 'An opulent throne room background for your profile',
      price: 450,
      category: 'background',
      cssClass: 'bg-throne',
      rarity: 'epic',
      type: 'premium',
      enabled: true,
      previewUrl: '/images/cosmetics/bg-throne.png'
    },
    {
      id: 'font-royal',
      name: 'Royal Font',
      description: 'A majestic font for your profile text',
      price: 250,
      category: 'font',
      cssClass: 'font-royal',
      rarity: 'rare',
      type: 'premium',
      enabled: true,
      previewUrl: '/images/cosmetics/font-royal.png'
    }
  ];
  
  const handleWish = () => {
    setIsWishing(true);
    
    // Play wishing sound
    sound.playSound('chime');
    
    // Simulate delay for wishing
    setTimeout(() => {
      // Generate random result
      const randomResult = generateRandomResult();
      setResult(randomResult);
      setShowResult(true);
      setIsWishing(false);
      
      // Play result sound based on type
      if (randomResult.type === 'cosmetic') {
        sound.playSound('success');
      } else if (randomResult.type === 'money') {
        sound.playSound('coin');
      } else {
        sound.playSound('fanfare');
      }
      
      // Show toast notification
      toast({
        title: "Wish Granted!",
        description: getResultDescription(randomResult),
        variant: "default"
      });
    }, 2000);
  };
  
  const generateRandomResult = () => {
    const resultType = Math.random();
    
    if (resultType < 0.4) {
      // Cosmetic reward (40% chance)
      const randomIndex = Math.floor(Math.random() * possibleRewards.length);
      return {
        type: 'cosmetic',
        item: possibleRewards[randomIndex]
      };
    } else if (resultType < 0.8) {
      // Money reward (40% chance)
      const amount = Math.floor(Math.random() * 200) + 50; // $50-$250
      return {
        type: 'money',
        amount
      };
    } else {
      // Special token (20% chance)
      return {
        type: 'token',
        message: "You've received a Royal Wish Token! Use it to make a special wish later."
      };
    }
  };
  
  const getResultDescription = (result: any) => {
    switch (result.type) {
      case 'cosmetic':
        return `You received the ${result.item.name}!`;
      case 'money':
        return `You received $${result.amount}!`;
      case 'token':
        return "You received a Royal Wish Token!";
      default:
        return "Your wish was granted!";
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="glass-morphism border-gold-400/20 max-w-lg mx-auto">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gold-400 mb-4">Royal Wishing Well</h2>
          <p className="text-white/70 mb-6">Make a wish and see what fate brings you. You might receive rare cosmetics, money, or special tokens!</p>
          
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gold-400/20 to-gold-600/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-gradient-to-b from-gold-600/10 to-gold-800/10 rounded-full"></div>
            <div className="absolute inset-4 bg-black rounded-full flex items-center justify-center">
              <span className="text-3xl">💫</span>
            </div>
          </div>
          
          <Button
            onClick={handleWish}
            disabled={isWishing}
            className="bg-gradient-to-r from-gold-600 to-gold-800 hover:from-gold-500 hover:to-gold-700 text-white px-6 py-2 rounded-md transition-all"
          >
            {isWishing ? "Making Wish..." : "Make a Wish"}
          </Button>
          
          <p className="text-xs text-white/50 mt-4">Each wish has a chance to grant cosmetics, money, or special tokens.</p>
        </div>
      </Card>
      
      <WishResultModal
        isOpen={showResult}
        onClose={() => setShowResult(false)}
        result={result}
      />
    </div>
  );
};

export default EnhancedWishingWell;

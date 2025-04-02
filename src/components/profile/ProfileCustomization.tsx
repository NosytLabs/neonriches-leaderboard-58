import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Paintbrush, Sparkles, Star, Lock, Crown as CrownIcon, Square, Image as ImageIcon, Wallet } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { CosmeticItem } from '@/types/cosmetics';
import { formatCurrency } from '@/utils/formatters';
import CosmeticCard from './CosmeticCard';

interface ProfileCustomizationProps {
  user: UserProfile;
  onPurchaseCosmetic?: (item: CosmeticItem) => void;
  onApplyCosmetic?: (item: CosmeticItem) => void;
  isLoading?: boolean;
}

const ProfileCustomization: React.FC<ProfileCustomizationProps> = ({
  user,
  onPurchaseCosmetic,
  onApplyCosmetic,
  isLoading = false
}) => {
  const [activeCategory, setActiveCategory] = useState('title');
  const [availableItems, setAvailableItems] = useState<CosmeticItem[]>([]);
  const [unlockedItems, setUnlockedItems] = useState<CosmeticItem[]>([]);

  useEffect(() => {
    const mockAvailableCosmetics: CosmeticItem[] = [
      { 
        id: 'default', 
        name: 'Default', 
        description: 'The standard SpendThrone theme', 
        price: 0, 
        type: 'theme', 
        rarity: 'common', 
        category: 'theme', 
        enabled: true 
      },
      { 
        id: 'royal-gold', 
        name: 'Royal Gold', 
        description: 'A luxurious gold theme for royalty', 
        price: 500, 
        type: 'theme', 
        rarity: 'epic', 
        category: 'theme', 
        enabled: true 
      },
      { 
        id: 'neon-future', 
        name: 'Neon Future', 
        description: 'Cyberpunk-inspired neon styling', 
        price: 300, 
        type: 'theme', 
        rarity: 'rare', 
        category: 'theme', 
        enabled: true 
      },
      { 
        id: 'dark-court', 
        name: 'Dark Court', 
        description: 'Elegant dark styling for the sophisticated', 
        price: 250, 
        type: 'theme', 
        rarity: 'rare', 
        category: 'theme', 
        enabled: true 
      },
      { 
        id: 'default-bg', 
        name: 'Default Background', 
        description: 'Standard profile background', 
        price: 0, 
        type: 'background', 
        rarity: 'common', 
        category: 'background', 
        enabled: true 
      },
      { 
        id: 'throne-room', 
        name: 'Throne Room', 
        description: 'Show off your royal status', 
        price: 750, 
        type: 'background', 
        rarity: 'legendary', 
        category: 'background', 
        enabled: true 
      },
      { 
        id: 'space-station', 
        name: 'Space Station', 
        description: 'View your kingdom from orbit', 
        price: 500, 
        type: 'background', 
        rarity: 'epic', 
        category: 'background', 
        enabled: true 
      },
      { 
        id: 'treasure-vault', 
        name: 'Treasure Vault', 
        description: 'Surrounded by your wealth', 
        price: 400, 
        type: 'background', 
        rarity: 'rare', 
        category: 'background', 
        enabled: true 
      },
      { 
        id: 'no-effect', 
        name: 'No Effect', 
        description: 'No special effects', 
        price: 0, 
        type: 'effect', 
        rarity: 'common', 
        category: 'effect', 
        enabled: true 
      },
      { 
        id: 'sparkle', 
        name: 'Sparkle Effect', 
        description: 'Add a sparkling effect to your profile', 
        price: 200, 
        type: 'effect', 
        rarity: 'uncommon', 
        category: 'effect', 
        enabled: true 
      },
      { 
        id: 'glow', 
        name: 'Royal Glow', 
        description: 'Surround your profile with a royal glow', 
        price: 350, 
        type: 'effect', 
        rarity: 'rare', 
        category: 'effect', 
        enabled: true 
      },
      { 
        id: 'confetti', 
        name: 'Wealth Rain', 
        description: 'Make it rain coins on your profile', 
        price: 450, 
        type: 'effect', 
        rarity: 'epic', 
        category: 'effect', 
        enabled: true 
      },
      { 
        id: 'default-title', 
        name: 'No Title', 
        description: 'No special title', 
        price: 0, 
        type: 'title', 
        rarity: 'common', 
        category: 'title', 
        enabled: true 
      },
      { 
        id: 'highness', 
        name: 'Your Highness', 
        description: 'A title of distinction and nobility', 
        price: 1000, 
        type: 'title', 
        rarity: 'legendary', 
        category: 'title', 
        enabled: true 
      },
      { 
        id: 'lord', 
        name: 'Lord of Spending', 
        description: 'Show off your spending power', 
        price: 750, 
        type: 'title', 
        rarity: 'epic', 
        category: 'title', 
        enabled: true 
      },
      { 
        id: 'digital-noble', 
        name: 'Digital Noble', 
        description: 'A title for the virtual aristocracy', 
        price: 500, 
        type: 'title', 
        rarity: 'rare', 
        category: 'title', 
        enabled: true 
      }
    ];
    
    setAvailableItems(mockAvailableCosmetics);
  }, []);

  useEffect(() => {
    if (!user || !user.cosmetics) return;
    
    const unlockedTitles = user.cosmetics.title || [];
    const unlockedBorders = user.cosmetics.border || [];
    const unlockedBackgrounds = user.cosmetics.background || [];
    const unlockedEffects = user.cosmetics.effect || [];
    
    const unlocked = availableItems.filter(item => {
      if (item.category === 'title' && unlockedTitles.includes(item.id)) return true;
      if (item.category === 'border' && unlockedBorders.includes(item.id)) return true;
      if (item.category === 'background' && unlockedBackgrounds.includes(item.id)) return true;
      if (item.category === 'effect' && unlockedEffects.includes(item.id)) return true;
      return false;
    });
    
    setUnlockedItems(unlocked);
  }, [user, availableItems]);

  const handlePurchase = (item: CosmeticItem) => {
    if (onPurchaseCosmetic) {
      onPurchaseCosmetic(item);
    }
  };

  const handleApply = (item: CosmeticItem) => {
    if (onApplyCosmetic) {
      onApplyCosmetic(item);
    }
  };

  const isItemUnlocked = (item: CosmeticItem): boolean => {
    if (!user || !user.cosmetics) return false;
    
    switch (item.category) {
      case 'title':
        return (user.cosmetics.title || []).includes(item.id);
      case 'border':
        return (user.cosmetics.border || []).includes(item.id);
      case 'background':
        return (user.cosmetics.background || []).includes(item.id);
      case 'effect':
        return (user.cosmetics.effect || []).includes(item.id);
      default:
        return false;
    }
  };

  const isItemActive = (item: CosmeticItem): boolean => {
    if (!user || !user.cosmetics) return false;
    
    switch (item.category) {
      case 'title':
        return user.cosmetics.activeTitle === item.id;
      case 'border':
        return user.cosmetics.activeBorder === item.id;
      case 'background':
        return user.cosmetics.activeBackground === item.id;
      case 'effect':
        return user.cosmetics.activeEffect === item.id;
      default:
        return false;
    }
  };

  const getItemsForCategory = (category: string): CosmeticItem[] => {
    return availableItems.filter(item => item.category === category);
  };

  // Sample cosmetic items
  const themeItems: CosmeticItem[] = [
    {
      id: 'theme-royal',
      name: 'Royal Theme',
      description: 'A majestic theme fit for royalty',
      price: 500,
      type: 'premium',
      rarity: 'legendary',
      category: 'theme',
      enabled: true,
      cssClass: 'theme-royal'
    },
    {
      id: 'theme-gold',
      name: 'Gold Theme',
      description: 'A luxurious gold-accented theme',
      price: 350,
      type: 'premium',
      rarity: 'epic',
      category: 'theme',
      enabled: true,
      cssClass: 'theme-gold'
    },
    {
      id: 'theme-silver',
      name: 'Silver Theme',
      description: 'An elegant silver-accented theme',
      price: 250,
      type: 'standard',
      rarity: 'rare',
      category: 'theme',
      enabled: true,
      cssClass: 'theme-silver'
    },
    {
      id: 'theme-bronze',
      name: 'Bronze Theme',
      description: 'A classic bronze-accented theme',
      price: 150,
      type: 'standard',
      rarity: 'uncommon',
      category: 'theme',
      enabled: true,
      cssClass: 'theme-bronze'
    }
  ];

  const backgroundItems: CosmeticItem[] = [
    {
      id: 'bg-castle',
      name: 'Castle Background',
      description: 'A majestic castle background',
      price: 300,
      type: 'premium',
      rarity: 'epic',
      category: 'background',
      enabled: true,
      cssClass: 'bg-castle'
    },
    {
      id: 'bg-throne',
      name: 'Throne Room Background',
      description: 'An opulent throne room background',
      price: 400,
      type: 'premium',
      rarity: 'legendary',
      category: 'background',
      enabled: true,
      cssClass: 'bg-throne'
    },
    {
      id: 'bg-night',
      name: 'Night Sky Background',
      description: 'A beautiful starry night sky',
      price: 200,
      type: 'standard',
      rarity: 'rare',
      category: 'background',
      enabled: true,
      cssClass: 'bg-night'
    },
    {
      id: 'bg-forest',
      name: 'Enchanted Forest Background',
      description: 'A mystical forest background',
      price: 150,
      type: 'standard',
      rarity: 'uncommon',
      category: 'background',
      enabled: true,
      cssClass: 'bg-forest'
    }
  ];

  const effectItems: CosmeticItem[] = [
    {
      id: 'effect-glow',
      name: 'Royal Glow Effect',
      description: 'A subtle golden glow around your profile',
      price: 350,
      type: 'premium',
      rarity: 'epic',
      category: 'effect',
      enabled: true,
      cssClass: 'effect-glow'
    },
    {
      id: 'effect-sparkle',
      name: 'Sparkle Effect',
      description: 'Subtle sparkles around your profile',
      price: 250,
      type: 'premium',
      rarity: 'rare',
      category: 'effect',
      enabled: true,
      cssClass: 'effect-sparkle'
    },
    {
      id: 'effect-shadow',
      name: 'Royal Shadow Effect',
      description: 'A dramatic shadow effect for your profile',
      price: 200,
      type: 'standard',
      rarity: 'uncommon',
      category: 'effect',
      enabled: true,
      cssClass: 'effect-shadow'
    },
    {
      id: 'effect-pulse',
      name: 'Pulsing Aura Effect',
      description: 'A gently pulsing aura around your profile',
      price: 300,
      type: 'premium',
      rarity: 'rare',
      category: 'effect',
      enabled: true,
      cssClass: 'effect-pulse'
    }
  ];

  const titleItems: CosmeticItem[] = [
    {
      id: 'title-royal',
      name: 'Royal Spender',
      description: 'Show off your royal spending status',
      price: 500,
      type: 'premium',
      rarity: 'legendary',
      category: 'title',
      enabled: true,
      cssClass: 'title-royal'
    },
    {
      id: 'title-big-spender',
      name: 'Big Spender',
      description: 'Let everyone know you spend big',
      price: 300,
      type: 'premium',
      rarity: 'epic',
      category: 'title',
      enabled: true,
      cssClass: 'title-big-spender'
    },
    {
      id: 'title-generous',
      name: 'The Generous',
      description: 'Show off your generous nature',
      price: 200,
      type: 'standard',
      rarity: 'rare',
      category: 'title',
      enabled: true,
      cssClass: 'title-generous'
    },
    {
      id: 'title-elite',
      name: 'Elite Patron',
      description: 'Display your elite patron status',
      price: 400,
      type: 'premium',
      rarity: 'epic',
      category: 'title',
      enabled: true,
      cssClass: 'title-elite'
    }
  ];

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Paintbrush className="mr-2 h-5 w-5 text-royal-gold" />
          Profile Customization
        </CardTitle>
        <CardDescription>
          Customize your profile appearance with unique cosmetics
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="title" className="flex items-center gap-1.5">
              <CrownIcon className="h-4 w-4" />
              Titles
            </TabsTrigger>
            <TabsTrigger value="border" className="flex items-center gap-1.5">
              <Square className="h-4 w-4" />
              Borders
            </TabsTrigger>
            <TabsTrigger value="background" className="flex items-center gap-1.5">
              <ImageIcon className="h-4 w-4" />
              Backgrounds
            </TabsTrigger>
            <TabsTrigger value="effect" className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              Effects
            </TabsTrigger>
          </TabsList>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2 text-white/60">Unlocked Items</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {unlockedItems.filter(item => item.category === activeCategory).length > 0 ? (
                unlockedItems
                  .filter(item => item.category === activeCategory)
                  .map((item) => (
                    <CosmeticCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      type={item.type}
                      rarity={item.rarity}
                      isUnlocked={true}
                      isActive={isItemActive(item)}
                      onPurchase={() => {}}
                      onApply={() => handleApply(item)}
                    />
                  ))
              ) : (
                <div className="col-span-3 text-center py-4 text-white/40">
                  No unlocked items in this category
                </div>
              )}
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-white/60">Available for Purchase</h3>
              <Badge variant="outline" className="bg-black/20">
                <Wallet className="h-3 w-3 mr-1.5" />
                Balance: {formatCurrency(user?.walletBalance || 0)}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {getItemsForCategory(activeCategory).map((item) => (
                <CosmeticCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  type={item.type}
                  rarity={item.rarity}
                  isUnlocked={isItemUnlocked(item)}
                  isActive={isItemActive(item)}
                  onPurchase={() => handlePurchase(item)}
                  onApply={() => handleApply(item)}
                />
              ))}
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileCustomization;

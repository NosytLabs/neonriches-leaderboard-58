
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Paintbrush, Sparkles, Image, Crown, Lock } from 'lucide-react';
import { CosmeticItem } from '@/types/cosmetics';
import { UserProfile } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';

interface ProfileCustomizationProps {
  user: UserProfile;
  onApplyCosmeticItem?: (itemType: string, itemId: string) => void;
}

const ProfileCustomization: React.FC<ProfileCustomizationProps> = ({ 
  user,
  onApplyCosmeticItem 
}) => {
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState('themes');
  
  // Mock cosmetic items
  const availableCosmetics = {
    themes: [
      { id: 'default', name: 'Default', description: 'The standard SpendThrone theme', price: 0, type: 'theme', rarity: 'common' },
      { id: 'royal-gold', name: 'Royal Gold', description: 'A luxurious gold theme for royalty', price: 500, type: 'theme', rarity: 'epic' },
      { id: 'neon-future', name: 'Neon Future', description: 'Cyberpunk-inspired neon styling', price: 300, type: 'theme', rarity: 'rare' },
      { id: 'dark-court', name: 'Dark Court', description: 'Elegant dark styling for the sophisticated', price: 250, type: 'theme', rarity: 'rare' },
    ],
    backgrounds: [
      { id: 'default-bg', name: 'Default Background', description: 'Standard profile background', price: 0, type: 'background', rarity: 'common' },
      { id: 'throne-room', name: 'Throne Room', description: 'Show off your royal status', price: 750, type: 'background', rarity: 'legendary' },
      { id: 'space-station', name: 'Space Station', description: 'View your kingdom from orbit', price: 500, type: 'background', rarity: 'epic' },
      { id: 'treasure-vault', name: 'Treasure Vault', description: 'Surrounded by your wealth', price: 400, type: 'background', rarity: 'rare' },
    ],
    effects: [
      { id: 'no-effect', name: 'No Effect', description: 'No special effects', price: 0, type: 'effect', rarity: 'common' },
      { id: 'sparkle', name: 'Sparkle Effect', description: 'Add a sparkling effect to your profile', price: 200, type: 'effect', rarity: 'uncommon' },
      { id: 'glow', name: 'Royal Glow', description: 'Surround your profile with a royal glow', price: 350, type: 'effect', rarity: 'rare' },
      { id: 'confetti', name: 'Wealth Rain', description: 'Make it rain coins on your profile', price: 450, type: 'effect', rarity: 'epic' },
    ],
    titles: [
      { id: 'default-title', name: 'No Title', description: 'No special title', price: 0, type: 'title', rarity: 'common' },
      { id: 'highness', name: 'Your Highness', description: 'A title of distinction and nobility', price: 1000, type: 'title', rarity: 'legendary' },
      { id: 'lord', name: 'Lord of Spending', description: 'Show off your spending power', price: 750, type: 'title', rarity: 'epic' },
      { id: 'digital-noble', name: 'Digital Noble', description: 'A title for the virtual aristocracy', price: 500, type: 'title', rarity: 'rare' },
    ]
  };
  
  // Check if an item is locked (based on spend threshold or if it's already purchased)
  const isItemLocked = (item: CosmeticItem): boolean => {
    if (item.price === 0) return false;
    
    const userCosmetics = user.cosmetics || {};
    const userAmountSpent = user.amountSpent || 0;
    
    // Check if the user has already purchased this item
    const purchasedItems = [
      ...(userCosmetics.titles || []),
      ...(userCosmetics.borders || []),
      ...(userCosmetics.backgrounds || []),
      ...(userCosmetics.effects || []),
    ];
    
    if (purchasedItems.some(i => i === item.id || (typeof i === 'object' && i.id === item.id))) {
      return false;
    }
    
    // Check if the user has spent enough to unlock this item
    switch (item.rarity) {
      case 'legendary': return userAmountSpent < 10000;
      case 'epic': return userAmountSpent < 5000;
      case 'rare': return userAmountSpent < 1000;
      case 'uncommon': return userAmountSpent < 500;
      default: return false;
    }
  };
  
  // Handle selecting a cosmetic item
  const handleSelectItem = (item: CosmeticItem) => {
    if (isItemLocked(item)) {
      // If locked, show a toast explaining why
      const requiredAmount = getRequiredAmountForRarity(item.rarity as string);
      toast({
        title: "Item Locked",
        description: `This item requires a minimum spend of ${formatCurrency(requiredAmount)}. Keep spending to unlock!`,
        variant: "destructive"
      });
      return;
    }
    
    // Apply the selected cosmetic item
    if (onApplyCosmeticItem) {
      onApplyCosmeticItem(item.type, item.id);
      
      toast({
        title: "Item Applied",
        description: `${item.name} has been applied to your profile!`,
      });
    }
  };
  
  // Get required amount for a rarity level
  const getRequiredAmountForRarity = (rarity: string): number => {
    switch (rarity) {
      case 'legendary': return 10000;
      case 'epic': return 5000;
      case 'rare': return 1000;
      case 'uncommon': return 500;
      default: return 0;
    }
  };
  
  // Get color for rarity
  const getRarityColor = (rarity: string): string => {
    switch (rarity) {
      case 'legendary': return 'text-orange-400';
      case 'epic': return 'text-purple-400';
      case 'rare': return 'text-blue-400';
      case 'uncommon': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };
  
  // Render a cosmetic item card
  const renderCosmeticItem = (item: CosmeticItem) => {
    const isLocked = isItemLocked(item);
    const rarityColor = getRarityColor(item.rarity as string);
    
    return (
      <Card 
        key={item.id}
        className={`glass-morphism border-white/10 cursor-pointer transition-all hover:border-white/30 ${
          isLocked ? 'opacity-50' : ''
        }`}
        onClick={() => handleSelectItem(item)}
      >
        <div className="p-4 relative">
          {isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg z-10">
              <div className="text-center">
                <Lock className="mx-auto mb-1 text-white/70" />
                <p className="text-xs">Locked</p>
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium truncate">{item.name}</h3>
            <span className={`text-xs font-medium ${rarityColor}`}>
              {item.rarity ? (item.rarity as string).charAt(0).toUpperCase() + (item.rarity as string).slice(1) : 'Common'}
            </span>
          </div>
          
          <p className="text-xs text-white/60 mb-4 line-clamp-2">{item.description}</p>
          
          <div className="flex items-center justify-between">
            {item.price > 0 ? (
              <span className="text-xs text-royal-gold flex items-center">
                <DollarSign className="h-3 w-3 mr-0.5" />
                {item.price.toLocaleString()}
              </span>
            ) : (
              <span className="text-xs text-green-400">Free</span>
            )}
            
            <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
              {isLocked ? 'Locked' : 'Apply'}
            </Button>
          </div>
        </div>
      </Card>
    );
  };
  
  return (
    <div className="space-y-4">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Paintbrush className="h-5 w-5 mr-2 text-royal-gold" />
            Profile Customization
          </CardTitle>
          <CardDescription>
            Customize your profile appearance with themes, backgrounds, effects, and titles
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="glass-morphism mb-4">
              <TabsTrigger value="themes" className="flex items-center">
                <Paintbrush className="h-4 w-4 mr-1" />
                Themes
              </TabsTrigger>
              <TabsTrigger value="backgrounds" className="flex items-center">
                <Image className="h-4 w-4 mr-1" />
                Backgrounds
              </TabsTrigger>
              <TabsTrigger value="effects" className="flex items-center">
                <Sparkles className="h-4 w-4 mr-1" />
                Effects
              </TabsTrigger>
              <TabsTrigger value="titles" className="flex items-center">
                <Crown className="h-4 w-4 mr-1" />
                Titles
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="themes" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableCosmetics.themes.map(renderCosmeticItem)}
              </div>
            </TabsContent>
            
            <TabsContent value="backgrounds" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableCosmetics.backgrounds.map(renderCosmeticItem)}
              </div>
            </TabsContent>
            
            <TabsContent value="effects" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableCosmetics.effects.map(renderCosmeticItem)}
              </div>
            </TabsContent>
            
            <TabsContent value="titles" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableCosmetics.titles.map(renderCosmeticItem)}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-4 text-xs text-white/60 bg-white/5 p-3 rounded-md">
            <p className="mb-2">💎 Unlock more customizations by increasing your total contribution amount:</p>
            <ul className="space-y-1 pl-5 list-disc">
              <li><span className="text-green-400">Uncommon</span>: $500+ total contribution</li>
              <li><span className="text-blue-400">Rare</span>: $1,000+ total contribution</li>
              <li><span className="text-purple-400">Epic</span>: $5,000+ total contribution</li>
              <li><span className="text-orange-400">Legendary</span>: $10,000+ total contribution</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCustomization;

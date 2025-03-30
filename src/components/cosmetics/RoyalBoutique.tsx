
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Crown, ShoppingCart, Bell, Gift, ChevronRight, Star, BadgeCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CosmeticItem, CosmeticRarity } from '@/types/cosmetics';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { formatCurrency } from '@/utils/formatters';
import { getRarityColor, getRarityBgColor, getRarityBorderColor } from '@/utils/cosmeticUtils';
import useCosmeticPurchase from '@/hooks/useCosmeticPurchase';

// Mock cosmetic items
const cosmeticItems: CosmeticItem[] = [
  {
    id: 'border-1',
    name: 'Royal Gold Border',
    description: 'A luxurious gold border for your profile that befits true royalty.',
    price: 100,
    category: 'border',
    type: 'border',
    rarity: 'rare',
    imageSrc: '/assets/cosmetics/borders/royal-gold.png'
  },
  {
    id: 'title-1',
    name: 'Duke/Duchess',
    description: 'Address yourself as a Duke or Duchess of the realm.',
    price: 250,
    category: 'title',
    type: 'title',
    rarity: 'epic',
    imageSrc: '/assets/cosmetics/titles/duke.png'
  },
  {
    id: 'effect-1',
    name: 'Royal Sparkle',
    description: 'Add a sparkling effect to your profile picture.',
    price: 500,
    category: 'effect',
    type: 'effect',
    rarity: 'legendary',
    imageSrc: '/assets/cosmetics/effects/sparkle.png'
  }
];

const RoyalBoutique: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const { purchaseCosmetic } = useCosmeticPurchase();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('featured');
  
  const userCosmetics = user?.cosmetics || {
    unlockedBorders: [],
    unlockedColors: [],
    unlockedFonts: [],
    unlockedEmojis: [],
    unlockedTitles: [],
    unlockedBackgrounds: [],
    unlockedEffects: [],
    unlockedBadges: [],
    unlockedThemes: [],
    borders: [],
    colors: [],
    fonts: [],
    emojis: [],
    titles: [],
    backgrounds: [],
    effects: [],
    badges: [],
    themes: []
  };
  
  const filteredItems = cosmeticItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handlePurchase = (item: CosmeticItem) => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'You must be logged in to purchase items from the Royal Boutique.',
        variant: 'destructive'
      });
      return;
    }
    
    if (user.walletBalance && user.walletBalance < item.price) {
      toast({
        title: 'Insufficient Funds',
        description: 'Your treasury is too light to afford this royal item.',
        variant: 'destructive'
      });
      return;
    }
    
    // Check if user already owns the item
    const owned = isItemOwned(item);
    if (owned) {
      toast({
        title: 'Already Owned',
        description: 'You already possess this royal item.',
        variant: 'default'
      });
      return;
    }
    
    // Purchase the item
    purchaseCosmetic(item);
  };
  
  const isItemOwned = (item: CosmeticItem): boolean => {
    if (!userCosmetics) return false;
    
    switch (item.category) {
      case 'border':
        return userCosmetics.unlockedBorders?.includes(item.id) || (userCosmetics.borders?.includes(item.id) || false);
      case 'color':
        return userCosmetics.unlockedColors?.includes(item.id) || (userCosmetics.colors?.includes(item.id) || false);
      case 'font':
        return userCosmetics.unlockedFonts?.includes(item.id) || (userCosmetics.fonts?.includes(item.id) || false);
      case 'emoji':
        return userCosmetics.unlockedEmojis?.includes(item.id) || (userCosmetics.emojis?.includes(item.id) || false);
      case 'title':
        return userCosmetics.unlockedTitles?.includes(item.id) || (userCosmetics.titles?.includes(item.id) || false);
      case 'background':
        return userCosmetics.unlockedBackgrounds?.includes(item.id) || (userCosmetics.backgrounds?.includes(item.id) || false);
      case 'effect':
        return userCosmetics.unlockedEffects?.includes(item.id) || (userCosmetics.effects?.includes(item.id) || false);
      case 'badge':
        return userCosmetics.unlockedBadges?.includes(item.id) || (userCosmetics.badges?.includes(item.id) || false);
      case 'theme':
        return userCosmetics.unlockedThemes?.includes(item.id) || (userCosmetics.themes?.includes(item.id) || false);
      default:
        return false;
    }
  };
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'border': return <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center"></div>;
      case 'title': return <Crown className="w-6 h-6" />;
      case 'effect': return <Star className="w-6 h-6" />;
      case 'badge': return <BadgeCheck className="w-6 h-6" />;
      default: return <Gift className="w-6 h-6" />;
    }
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-royal-gold" />
            <div>
              <CardTitle>Royal Boutique</CardTitle>
              <CardDescription>Adorn yourself with regal cosmetics</CardDescription>
            </div>
          </div>
          
          <Button variant="outline" className="glass-morphism border-white/10 hover:bg-white/5 gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            <Input
              className="pl-9 glass-input"
              placeholder="Search boutique..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="featured" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 glass-morphism border-white/10">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="borders">Borders</TabsTrigger>
            <TabsTrigger value="titles">Titles</TabsTrigger>
            <TabsTrigger value="effects">Effects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="featured" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <CosmeticItemCard 
                  key={item.id} 
                  item={item} 
                  owned={isItemOwned(item)} 
                  onPurchase={() => handlePurchase(item)} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="borders" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems
                .filter(item => item.category === 'border')
                .map((item) => (
                  <CosmeticItemCard 
                    key={item.id} 
                    item={item} 
                    owned={isItemOwned(item)} 
                    onPurchase={() => handlePurchase(item)} 
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="titles" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems
                .filter(item => item.category === 'title')
                .map((item) => (
                  <CosmeticItemCard 
                    key={item.id} 
                    item={item} 
                    owned={isItemOwned(item)} 
                    onPurchase={() => handlePurchase(item)} 
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="effects" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems
                .filter(item => item.category === 'effect')
                .map((item) => (
                  <CosmeticItemCard 
                    key={item.id} 
                    item={item} 
                    owned={isItemOwned(item)} 
                    onPurchase={() => handlePurchase(item)} 
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter>
        <div className="w-full flex justify-between items-center">
          <span className="text-sm text-white/60">
            {user?.walletBalance ? `Treasury: ${formatCurrency(user.walletBalance)}` : 'Login to view your treasury'}
          </span>
          
          <Button className="gap-1">
            <ShoppingCart className="h-4 w-4" />
            <span>View Equipped</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

interface CosmeticItemCardProps {
  item: CosmeticItem;
  owned: boolean;
  onPurchase: () => void;
}

const CosmeticItemCard: React.FC<CosmeticItemCardProps> = ({ item, owned, onPurchase }) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all",
      getRarityBorderColor(item.rarity),
      "hover:shadow-md"
    )}>
      <div className={cn(
        "h-2",
        getRarityBgColor(item.rarity)
      )} />
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              getRarityBgColor(item.rarity),
              getRarityColor(item.rarity)
            )}>
              {item.category === 'border' ? (
                <div className="w-6 h-6 rounded-full border-2 border-current"></div>
              ) : item.category === 'title' ? (
                <Crown className="w-5 h-5" />
              ) : (
                <Star className="w-5 h-5" />
              )}
            </div>
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-white/60">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
            </div>
          </div>
          
          <div className={cn(
            "px-2 py-1 rounded text-xs font-semibold",
            getRarityBgColor(item.rarity),
            getRarityColor(item.rarity)
          )}>
            {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
          </div>
        </div>
        
        <p className="text-sm text-white/80 mb-4">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">{formatCurrency(item.price)}</div>
          
          <Button 
            variant={owned ? "outline" : "default"} 
            size="sm" 
            onClick={onPurchase}
            disabled={owned}
            className={owned ? "glass-morphism border-white/10" : ""}
          >
            {owned ? (
              <>
                <BadgeCheck className="h-4 w-4 mr-1" />
                Owned
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-1" />
                Purchase
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalBoutique;

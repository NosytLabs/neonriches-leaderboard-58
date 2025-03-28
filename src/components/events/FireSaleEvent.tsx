
import React, { useState, useEffect } from 'react';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Flame, Tag, Sparkles, Crown, Clock } from 'lucide-react';
import { formatCategoryName } from '@/utils/stringUtils';
import { getCosmeticPreviewStyle, CosmeticItem, CosmeticCategory } from '@/types/cosmetics';
import { getFireSaleFeaturedCategories } from './utils/shameUtils';
import RoyalDivider from '@/components/ui/royal-divider';
import { mockedCosmeticsData } from '@/data/cosmeticsData';
import { useAuth } from '@/contexts/auth';
import { useToastContext } from '@/contexts/ToastContext';
import PaymentModal from '@/components/PaymentModal';
import CountdownTimer from './CountdownTimer';
import MedievalIcon from '@/components/ui/medieval-icon';

interface FireSaleEventProps {
  onClose: () => void;
  discountPercentage: number;
  featuredCategories: string[];
  daysRemaining: number;
}

const FireSaleEvent: React.FC<FireSaleEventProps> = ({
  onClose,
  discountPercentage,
  featuredCategories,
  daysRemaining
}) => {
  const { user } = useAuth();
  const { addToast } = useToastContext();
  const [selectedCategory, setSelectedCategory] = useState<string>(featuredCategories[0] || 'border');
  const [selectedItem, setSelectedItem] = useState<CosmeticItem | null>(null);
  
  // Get the end of the month date for countdown
  const getEndOfMonthDate = (): string => {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    lastDay.setHours(23, 59, 59, 999);
    return lastDay.toISOString();
  };
  
  // Filter cosmetics that belong to featured categories
  const filteredCosmetics = mockedCosmeticsData.filter(item => 
    featuredCategories.includes(item.category)
  );
  
  // Get cosmetics for the currently selected category
  const getCosmeticsForCategory = (): CosmeticItem[] => {
    return filteredCosmetics.filter(item => item.category === selectedCategory);
  };
  
  // Calculate discounted price
  const getDiscountedPrice = (originalPrice: number): number => {
    return Number((originalPrice * (1 - discountPercentage / 100)).toFixed(2));
  };
  
  // Helper function to get rarity style
  const getCosmeticPreviewStyleForRarity = (rarity: string) => {
    // Converting string rarity to CosmeticRarity type
    const typedRarity = rarity as CosmeticRarity;
    
    // Create a dummy cosmetic item with the rarity
    const dummyItem: CosmeticItem = {
      id: 'dummy',
      name: 'Dummy Item',
      description: 'Dummy description',
      category: 'border',
      type: 'profile',
      rarity: typedRarity,
      cost: 0
    };
    
    return getCosmeticPreviewStyle(dummyItem);
  };
  
  // Handle purchase
  const handlePurchase = (item: CosmeticItem) => {
    // This would typically call a real purchase API
    const discountedPrice = getDiscountedPrice(item.cost);
    
    addToast({
      title: "Cosmetic Purchased!",
      description: `You've acquired "${item.name}" for $${discountedPrice.toFixed(2)}!`,
      variant: "royal",
      sound: "success"
    });
    
    // Close the modal after purchase
    setTimeout(() => {
      onClose();
    }, 1500);
  };
  
  return (
    <DialogContent className="glass-morphism border-royal-crimson/30 sm:max-w-3xl relative overflow-hidden">
      {/* Animated flame effect background */}
      <div className="absolute inset-0 bg-gradient-to-t from-royal-crimson/10 to-transparent opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/assets/patterns/flames.svg')] opacity-5 animate-flame-flicker pointer-events-none"></div>
      
      <DialogHeader className="relative z-10">
        <div className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-royal-crimson animate-flame-flicker" />
          <DialogTitle className="text-xl bg-gradient-to-r from-yellow-500 via-royal-crimson to-amber-500 text-transparent bg-clip-text">
            Royal Fire Sale: {discountPercentage}% Off!
          </DialogTitle>
        </div>
        <DialogDescription className="flex items-center justify-between">
          <span>Limited time discount on select royal cosmetics</span>
          <div className="flex items-center text-royal-crimson font-medium">
            <Clock className="h-4 w-4 mr-2" />
            <CountdownTimer 
              targetDate={getEndOfMonthDate()} 
              variant="compact" 
              className="text-sm"
            />
          </div>
        </DialogDescription>
      </DialogHeader>
      
      <div className="relative z-10 bg-black/30 border border-white/5 p-3 rounded-lg shadow-inner">
        <p className="text-white/70 mb-2">
          By royal decree, these prestigious cosmetic categories have been marked down to celebrate our kingdom's prosperity:
        </p>
        <div className="flex flex-wrap gap-2">
          {featuredCategories.map(category => (
            <div key={category} className="flex items-center glass-morphism border-white/10 px-2 py-1 rounded-full text-sm">
              <Sparkles className="h-3 w-3 mr-1 text-royal-gold" />
              <span>{formatCategoryName(category as CosmeticCategory)}</span>
            </div>
          ))}
        </div>
      </div>
      
      <RoyalDivider variant="line" label="ROYAL OFFERINGS" color="crimson" className="my-4" />
      
      <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="glass-morphism border-white/10 grid" style={{ gridTemplateColumns: `repeat(${featuredCategories.length}, 1fr)` }}>
          {featuredCategories.map(category => (
            <TabsTrigger key={category} value={category}>
              {formatCategoryName(category as CosmeticCategory)}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {featuredCategories.map(category => (
          <TabsContent key={category} value={category} className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-80 overflow-y-auto p-1">
              {getCosmeticsForCategory().map((item) => {
                const discountedPrice = getDiscountedPrice(item.cost);
                
                return (
                  <div 
                    key={item.id}
                    className={`glass-morphism rounded-lg p-3 transition-all cursor-pointer relative overflow-hidden ${
                      selectedItem?.id === item.id 
                        ? 'border-royal-crimson/50 bg-royal-crimson/5' 
                        : 'border-white/10 hover:border-royal-crimson/30'
                    }`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="absolute top-0 right-0">
                      <div className="bg-royal-crimson text-white text-xs px-2 py-0.5 rounded-bl-lg flex items-center">
                        <Tag size={10} className="mr-1" />
                        {discountPercentage}% OFF
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getCosmeticPreviewStyleForRarity(item.rarity)}`}>
                        {item.imageSrc ? (
                          <img 
                            src={item.imageSrc} 
                            alt={item.name} 
                            className="w-10 h-10 object-contain" 
                          />
                        ) : (
                          <MedievalIcon 
                            name={
                              item.category === 'border' ? 'scroll' :
                              item.category === 'background' ? 'castle' :
                              item.category === 'badge' ? 'medal' :
                              item.category === 'title' ? 'crown' :
                              item.category === 'effect' ? 'sparkles' :
                              'star'
                            } 
                            size="md"
                            color={
                              item.rarity === 'legendary' ? 'gold' :
                              item.rarity === 'epic' ? 'purple' :
                              item.rarity === 'rare' ? 'navy' :
                              item.rarity === 'uncommon' ? 'emerald' :
                              'silver'
                            }
                          />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          {item.rarity === 'legendary' && (
                            <Crown className="ml-1 h-3 w-3 text-royal-gold" />
                          )}
                        </div>
                        <p className="text-xs text-white/60 line-clamp-1">{item.description}</p>
                        <div className="mt-1 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-xs line-through text-white/40">${item.cost.toFixed(2)}</span>
                            <span className="ml-2 text-sm font-bold text-royal-gold">${discountedPrice.toFixed(2)}</span>
                          </div>
                          <div className="text-xs px-1.5 py-0.5 rounded-full bg-white/10 capitalize">
                            {item.rarity}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="flex justify-between mt-4">
        <Button variant="outline" className="glass-morphism border-white/10" onClick={onClose}>
          Close
        </Button>
        
        {selectedItem && (
          <PaymentModal
            amount={getDiscountedPrice(selectedItem.cost)}
            onSuccess={() => handlePurchase(selectedItem)}
            title={`Purchase ${selectedItem.name}`}
            description={`Acquire this ${selectedItem.rarity} ${selectedItem.category} at ${discountPercentage}% off!`}
            trigger={
              <Button className="bg-gradient-to-r from-royal-crimson to-amber-600 hover:opacity-90 animate-pulse-slow">
                <Flame className="mr-2 h-4 w-4" />
                <span>Buy for ${getDiscountedPrice(selectedItem.cost).toFixed(2)}</span>
              </Button>
            }
          />
        )}
      </div>
    </DialogContent>
  );
};

export default FireSaleEvent;

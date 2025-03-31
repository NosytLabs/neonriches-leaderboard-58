
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { CosmeticItem, CosmeticCategory } from '@/types/cosmetics';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Check, DollarSign } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

const RoyalBoutique = () => {
  const { user, awardCosmetic } = useAuth();
  const { toast } = useToast();

  const handlePurchase = async (item: CosmeticItem) => {
    if (!user) {
      toast({
        title: "Not authenticated",
        description: "You must be logged in to purchase cosmetics.",
      });
      return;
    }

    if (user.walletBalance < item.price) {
      toast({
        title: "Insufficient funds",
        description: "You do not have enough funds to purchase this cosmetic.",
      });
      return;
    }

    // Fixed: Changed the parameters to match expected number of arguments (item.id, item.category) and removed the third argument
    const success = await awardCosmetic(item.id, item.category);

    if (success) {
      toast({
        title: "Purchase successful",
        description: `You have successfully purchased ${item.name}.`,
      });
    } else {
      toast({
        title: "Purchase failed",
        description: "There was an error processing your purchase.",
      });
    }
  };

  const bordersCategory: CosmeticItem[] = [
    {
      id: 'border-1',
      name: 'Royal Gold Border',
      description: 'A luxurious gold border for your profile',
      price: 50,
      category: 'border',
      type: 'premium',
      rarity: 'rare',
      cssClass: 'border-gold',
      imageSrc: '/images/cosmetics/border-gold.png'
    },
    {
      id: 'border-2',
      name: 'Silver Filigree Border',
      description: 'An elegant silver border with delicate filigree',
      price: 35,
      category: 'border',
      type: 'standard',
      rarity: 'uncommon',
      cssClass: 'border-silver',
      imageSrc: '/images/cosmetics/border-silver.png'
    },
    {
      id: 'border-3',
      name: 'Crimson Dragon Scale Border',
      description: 'A border with a pattern resembling crimson dragon scales',
      price: 65,
      category: 'border',
      type: 'exclusive',
      rarity: 'epic',
      cssClass: 'border-dragon-scale',
      imageSrc: '/images/cosmetics/border-dragon.png'
    },
  ];

  const colorsCategory: CosmeticItem[] = [
    {
      id: 'color-1',
      name: 'Royal Purple',
      description: 'The color of royalty',
      price: 75,
      category: 'color',
      type: 'premium',
      rarity: 'epic',
      cssClass: 'text-royal-purple',
      imageSrc: '/images/cosmetics/color-purple.png'
    },
    {
      id: 'color-2',
      name: 'Emerald Green',
      description: 'A vibrant emerald green color',
      price: 45,
      category: 'color',
      type: 'standard',
      rarity: 'uncommon',
      cssClass: 'text-emerald-green',
      imageSrc: '/images/cosmetics/color-emerald.png'
    },
    {
      id: 'color-3',
      name: 'Golden Yellow',
      description: 'A bright and cheerful golden yellow color',
      price: 55,
      category: 'color',
      type: 'exclusive',
      rarity: 'rare',
      cssClass: 'text-golden-yellow',
      imageSrc: '/images/cosmetics/color-gold.png'
    },
  ];

  const fontsCategory: CosmeticItem[] = [
    {
      id: 'font-1',
      name: 'Medieval Script',
      description: 'An authentic medieval script font',
      price: 100,
      category: 'font',
      type: 'premium',
      rarity: 'legendary',
      cssClass: 'font-medieval',
      imageSrc: '/images/cosmetics/font-medieval.png'
    },
    {
      id: 'font-2',
      name: 'Elegant Serif',
      description: 'A refined serif font for formal occasions',
      price: 60,
      category: 'font',
      type: 'standard',
      rarity: 'rare',
      cssClass: 'font-elegant-serif',
      imageSrc: '/images/cosmetics/font-serif.png'
    },
    {
      id: 'font-3',
      name: 'Bold Sans-Serif',
      description: 'A modern and bold sans-serif font',
      price: 40,
      category: 'font',
      type: 'standard',
      rarity: 'uncommon',
      cssClass: 'font-bold-sans',
      imageSrc: '/images/cosmetics/font-sans.png'
    },
  ];

  // Create empty arrays for remaining categories
  const emptyArray: CosmeticItem[] = [];
  
  // Updated to include all required categories
  const allCosmetics: Record<CosmeticCategory, CosmeticItem[]> = {
    border: bordersCategory,
    color: colorsCategory,
    font: fontsCategory,
    emoji: emptyArray,
    title: emptyArray,
    background: emptyArray,
    effect: emptyArray,
    badge: emptyArray,
    theme: emptyArray,
    appearance: emptyArray,
    profile: emptyArray,
    interaction: emptyArray
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle>Royal Boutique</CardTitle>
          <CardDescription>
            Enhance your profile with exclusive cosmetics.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(allCosmetics).map(([category, items]) => {
                // Skip empty categories
                if (items.length === 0) return null;
                
                return (
                  <div key={category} className="space-y-4">
                    <h3 className="text-xl font-semibold capitalize">{category}</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {items.map((item) => (
                        <Card key={item.id} className="glass-morphism border-white/10">
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              <span>{item.name}</span>
                              <Badge variant="secondary">
                                {formatCurrency(item.price)}
                              </Badge>
                            </CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex items-center justify-between">
                            <img
                              src={item.imageSrc || '/images/cosmetics/default.png'}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-md"
                            />
                            <Button onClick={() => handlePurchase(item)} disabled={!user}>
                              {user ? (
                                user.cosmetics && user.cosmetics[item.category]?.includes(item.id) ? (
                                  <Check className="mr-2 h-4 w-4" />
                                ) : (
                                  <DollarSign className="mr-2 h-4 w-4" />
                                )
                              ) : null}
                              {user ? (
                                user.cosmetics && user.cosmetics[item.category]?.includes(item.id) ? (
                                  "Owned"
                                ) : (
                                  "Purchase"
                                )
                              ) : (
                                "Login to purchase"
                              )}
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoyalBoutique;

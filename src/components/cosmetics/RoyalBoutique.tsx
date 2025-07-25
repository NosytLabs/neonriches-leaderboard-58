
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

    // Call awardCosmetic with the right parameters
    const success = await awardCosmetic(item.category, item.id);

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

  // Create sample cosmetic items with correct properties and fixed type values
  const bordersCategory: CosmeticItem[] = [
    {
      id: 'border-1',
      name: 'Royal Gold Border',
      description: 'A luxurious gold border for your profile',
      cost: 50,
      price: 50,
      category: 'border',
      cssClass: 'border-gold',
      rarity: 'rare',
      type: 'border', // Changed from 'premium' to 'border'
      enabled: true,
      previewUrl: '/images/cosmetics/border-gold.png'
    },
    {
      id: 'border-2',
      name: 'Silver Filigree Border',
      description: 'An elegant silver border with delicate filigree',
      cost: 35,
      price: 35,
      category: 'border',
      cssClass: 'border-silver',
      rarity: 'uncommon',
      type: 'border', // Changed from 'standard' to 'border'
      enabled: true,
      previewUrl: '/images/cosmetics/border-silver.png'
    },
    {
      id: 'border-3',
      name: 'Crimson Dragon Scale Border',
      description: 'A border with a pattern resembling crimson dragon scales',
      cost: 65,
      price: 65,
      category: 'border',
      cssClass: 'border-dragon-scale',
      rarity: 'epic',
      type: 'border', // Changed from 'exclusive' to 'border'
      enabled: true,
      previewUrl: '/images/cosmetics/border-dragon.png'
    },
  ];

  const colorsCategory: CosmeticItem[] = [
    {
      id: 'color-1',
      name: 'Royal Purple',
      description: 'The color of royalty',
      cost: 75,
      price: 75,
      category: 'color',
      cssClass: 'text-royal-purple',
      rarity: 'epic',
      type: 'color', // Changed from 'premium' to 'color'
      enabled: true,
      previewUrl: '/images/cosmetics/color-purple.png'
    },
    {
      id: 'color-2',
      name: 'Emerald Green',
      description: 'A vibrant emerald green color',
      cost: 45,
      price: 45,
      category: 'color',
      cssClass: 'text-emerald-green',
      rarity: 'uncommon',
      type: 'color', // Changed from 'standard' to 'color'
      enabled: true,
      previewUrl: '/images/cosmetics/color-emerald.png'
    },
    {
      id: 'color-3',
      name: 'Golden Yellow',
      description: 'A bright and cheerful golden yellow color',
      cost: 55,
      price: 55,
      category: 'color',
      cssClass: 'text-golden-yellow',
      rarity: 'rare',
      type: 'color', // Changed from 'exclusive' to 'color'
      enabled: true,
      previewUrl: '/images/cosmetics/color-gold.png'
    },
  ];

  const fontsCategory: CosmeticItem[] = [
    {
      id: 'font-1',
      name: 'Medieval Script',
      description: 'An authentic medieval script font',
      cost: 100,
      price: 100,
      category: 'font',
      cssClass: 'font-medieval',
      rarity: 'legendary',
      type: 'font', // Changed from 'premium' to 'font'
      enabled: true,
      previewUrl: '/images/cosmetics/font-medieval.png'
    },
    {
      id: 'font-2',
      name: 'Elegant Serif',
      description: 'A refined serif font for formal occasions',
      cost: 60,
      price: 60,
      category: 'font',
      cssClass: 'font-elegant-serif',
      rarity: 'rare',
      type: 'font', // Changed from 'standard' to 'font'
      enabled: true,
      previewUrl: '/images/cosmetics/font-serif.png'
    },
    {
      id: 'font-3',
      name: 'Bold Sans-Serif',
      description: 'A modern and bold sans-serif font',
      cost: 40,
      price: 40,
      category: 'font',
      cssClass: 'font-bold-sans',
      rarity: 'uncommon',
      type: 'font', // Changed from 'standard' to 'font'
      enabled: true,
      previewUrl: '/images/cosmetics/font-sans.png'
    },
  ];

  // Create empty arrays for remaining categories
  const emptyArray: CosmeticItem[] = [];
  
  // Updated to include all required categories and valid types
  const allCosmetics: Record<string, CosmeticItem[]> = {
    border: bordersCategory,
    color: colorsCategory,
    font: fontsCategory,
    emoji: emptyArray,
    title: emptyArray,
    background: emptyArray,
    effect: emptyArray,
    badge: emptyArray,
    theme: emptyArray
  };

  // Helper function to check if a user owns a cosmetic
  const userOwnsCosmetic = (category: string, itemId: string): boolean => {
    if (!user || !user.cosmetics) return false;
    
    const categoryItems = user.cosmetics[category as keyof typeof user.cosmetics];
    if (!categoryItems) return false;
    
    // Check if the category items is an array and contains the item id
    return Array.isArray(categoryItems) && categoryItems.indexOf(itemId) !== -1;
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
                                {formatCurrency(item.price || item.cost)}
                              </Badge>
                            </CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex items-center justify-between">
                            <img
                              src={item.previewUrl || '/images/cosmetics/default.png'}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-md"
                            />
                            <Button onClick={() => handlePurchase(item)} disabled={!user}>
                              {user ? (
                                userOwnsCosmetic(item.category, item.id) ? (
                                  <Check className="mr-2 h-4 w-4" />
                                ) : (
                                  <DollarSign className="mr-2 h-4 w-4" />
                                )
                              ) : null}
                              {user ? (
                                userOwnsCosmetic(item.category, item.id) ? (
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

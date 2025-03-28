
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Crown, Gem, Palette, Type, Sparkles, Award } from 'lucide-react';
import RoyalButton from '@/components/ui/royal-button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { spendFromWallet } from '@/services/walletService';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import ProfileDecorations from './ProfileDecorations';
import ProfileColors from './ProfileColors';
import ProfileFonts from './ProfileFonts';
import ProfileEmojis from './ProfileEmojis';

const RoyalBoutique = () => {
  const [activeTab, setActiveTab] = useState('decorations');
  const { toast } = useToast();
  const { user, updateUserProfile } = useAuth();
  const { playSound } = useNotificationSounds();

  const handlePurchase = async (itemName: string, price: number, category: string, itemId: string) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to make a purchase.",
        variant: "destructive"
      });
      return;
    }
    
    const success = await spendFromWallet(
      user,
      price,
      'cosmetic',
      `Purchased ${itemName}`,
      { itemId, category }
    );
    
    if (success) {
      // Update user profile with the purchased item
      const cosmeticItems = user.cosmetics || {
        borders: [],
        colors: [],
        fonts: [],
        emojis: []
      };
      
      const categoryItems = cosmeticItems[category as keyof typeof cosmeticItems] || [];
      
      if (!categoryItems.includes(itemId)) {
        const updatedCosmetics = {
          ...cosmeticItems,
          [category]: [...categoryItems, itemId],
        };
        
        await updateUserProfile({
          ...user,
          cosmetics: updatedCosmetics,
        });
        
        playSound('purchase');
        toast({
          title: "Royal Purchase Complete",
          description: `${itemName} has been added to your royal collection!`,
        });
      } else {
        toast({
          title: "Item Already Owned",
          description: "You already possess this royal item.",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center">
          <Crown className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>SpendThrone Boutique</CardTitle>
        </div>
        <CardDescription>
          Enhance your profile with exclusive cosmetic options
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="p-3 bg-black/20 rounded-lg text-sm mb-4">
          <p className="flex items-center text-white/70">
            <Award size={16} className="text-royal-gold mr-2" />
            <span>All items are purely cosmetic and provide visual enhancements only.</span>
          </p>
        </div>
        
        <Tabs defaultValue="decorations" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 glass-morphism">
            <TabsTrigger value="decorations" className="flex items-center gap-2">
              <Award size={16} />
              <span className="hidden sm:inline">Decorations</span>
            </TabsTrigger>
            <TabsTrigger value="colors" className="flex items-center gap-2">
              <Palette size={16} />
              <span className="hidden sm:inline">Colors</span>
            </TabsTrigger>
            <TabsTrigger value="fonts" className="flex items-center gap-2">
              <Type size={16} />
              <span className="hidden sm:inline">Fonts</span>
            </TabsTrigger>
            <TabsTrigger value="emojis" className="flex items-center gap-2">
              <Sparkles size={16} />
              <span className="hidden sm:inline">Emojis</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-4">
            <ScrollArea className="h-[500px] rounded-md pr-4">
              <TabsContent value="decorations">
                <ProfileDecorations onPurchase={handlePurchase} user={user} />
              </TabsContent>
              <TabsContent value="colors">
                <ProfileColors onPurchase={handlePurchase} user={user} />
              </TabsContent>
              <TabsContent value="fonts">
                <ProfileFonts onPurchase={handlePurchase} user={user} />
              </TabsContent>
              <TabsContent value="emojis">
                <ProfileEmojis onPurchase={handlePurchase} user={user} />
              </TabsContent>
            </ScrollArea>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RoyalBoutique;

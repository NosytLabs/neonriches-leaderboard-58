
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Crown, Gem, Palette, Type, Sparkles, Award, ScrollText, X } from 'lucide-react';
import RoyalButton from '@/components/ui/royal-button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { spendFromWallet } from '@/services/walletService';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import ProfileDecorations from './ProfileDecorations';
import ProfileColors from './ProfileColors';
import ProfileFonts from './ProfileFonts';
import ProfileEmojis from './ProfileEmojis';
import ProfileTitles from './ProfileTitles';
import FoundersPass from '../founder/FoundersPass';
import { Button } from '../ui/button';

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
        emojis: [],
        titles: []
      };
      
      const categoryItems = cosmeticItems[category as keyof typeof cosmeticItems] || [];
      
      if (Array.isArray(categoryItems) && !categoryItems.includes(itemId)) {
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

  const handleSelectTitle = async (titleId: string | null) => {
    if (!user) return;
    
    await updateUserProfile({
      ...user,
      activeTitle: titleId
    });
    
    if (titleId === null) {
      toast({
        title: "Title Removed",
        description: "Your title has been removed.",
      });
    } else {
      toast({
        title: "Title Selected",
        description: "Your new title has been applied.",
      });
    }
    
    playSound('notification');
  };
  
  const handleSelectBorder = async (borderId: string | null) => {
    if (!user) return;
    
    const updatedCosmetics = {
      ...user.cosmetics,
      activeBorder: borderId
    };
    
    await updateUserProfile({
      ...user,
      cosmetics: updatedCosmetics,
    });
    
    if (borderId === null) {
      toast({
        title: "Border Removed",
        description: "Your border has been removed.",
      });
    } else {
      toast({
        title: "Border Selected",
        description: "Your new border has been applied.",
      });
    }
    
    playSound('notification');
  };
  
  const handleSelectColor = async (colorId: string | null) => {
    if (!user) return;
    
    const updatedCosmetics = {
      ...user.cosmetics,
      activeColor: colorId
    };
    
    await updateUserProfile({
      ...user,
      cosmetics: updatedCosmetics,
    });
    
    if (colorId === null) {
      toast({
        title: "Color Removed",
        description: "Your color scheme has been removed.",
      });
    } else {
      toast({
        title: "Color Selected",
        description: "Your new color scheme has been applied.",
      });
    }
    
    playSound('notification');
  };
  
  const handleSelectFont = async (fontId: string | null) => {
    if (!user) return;
    
    const updatedCosmetics = {
      ...user.cosmetics,
      activeFont: fontId
    };
    
    await updateUserProfile({
      ...user,
      cosmetics: updatedCosmetics,
    });
    
    if (fontId === null) {
      toast({
        title: "Font Removed",
        description: "Your font has been reset to default.",
      });
    } else {
      toast({
        title: "Font Selected",
        description: "Your new font has been applied.",
      });
    }
    
    playSound('notification');
  };

  const handleFoundersPurchase = async () => {
    if (!user) return;
    
    const success = await spendFromWallet(
      user,
      100,
      'founder',
      'Purchased Founder\'s Pass',
      {}
    );
    
    if (success) {
      const updatedCosmetics = {
        ...user.cosmetics,
        foundersPass: true,
        titles: [...(user.cosmetics?.titles || []), 'founder']
      };
      
      await updateUserProfile({
        ...user,
        cosmetics: updatedCosmetics,
      });
      
      playSound('purchase');
    }
  };

  const renderClearSelectionButton = (
    category: 'title' | 'border' | 'color' | 'font', 
    activeId: string | null | undefined, 
    onClear: () => void
  ) => {
    if (!activeId) return null;
    
    return (
      <Button
        variant="outline"
        size="sm"
        className="ml-2 px-2 h-8 bg-black/20 border-white/10 hover:bg-black/30"
        onClick={onClear}
      >
        <X size={14} className="mr-1" />
        Clear
      </Button>
    );
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
        
        {user && user.cosmetics && user.cosmetics.foundersPass !== true && (
          <div className="mb-6">
            <FoundersPass onPurchase={handleFoundersPurchase} user={user} />
          </div>
        )}
        
        <Tabs defaultValue="decorations" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 glass-morphism">
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
            <TabsTrigger value="titles" className="flex items-center gap-2">
              <ScrollText size={16} />
              <span className="hidden sm:inline">Titles</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-white/80">
                {activeTab === 'decorations' && 'Profile Borders'}
                {activeTab === 'colors' && 'Color Schemes'}
                {activeTab === 'fonts' && 'Font Styles'}
                {activeTab === 'emojis' && 'Special Emojis'}
                {activeTab === 'titles' && 'Royal Titles'}
              </h3>
              
              {activeTab === 'decorations' && renderClearSelectionButton(
                'border', 
                user?.cosmetics?.activeBorder, 
                () => handleSelectBorder(null)
              )}
              
              {activeTab === 'colors' && renderClearSelectionButton(
                'color', 
                user?.cosmetics?.activeColor, 
                () => handleSelectColor(null)
              )}
              
              {activeTab === 'fonts' && renderClearSelectionButton(
                'font', 
                user?.cosmetics?.activeFont, 
                () => handleSelectFont(null)
              )}
              
              {activeTab === 'titles' && renderClearSelectionButton(
                'title', 
                user?.activeTitle, 
                () => handleSelectTitle(null)
              )}
            </div>
            
            <ScrollArea className="h-[500px] rounded-md pr-4">
              <TabsContent value="decorations">
                <ProfileDecorations 
                  onPurchase={handlePurchase} 
                  user={user} 
                  onSelectBorder={handleSelectBorder}
                  activeBorder={user?.cosmetics?.activeBorder}
                />
              </TabsContent>
              <TabsContent value="colors">
                <ProfileColors 
                  onPurchase={handlePurchase} 
                  user={user} 
                  onSelectColor={handleSelectColor}
                  activeColor={user?.cosmetics?.activeColor}
                />
              </TabsContent>
              <TabsContent value="fonts">
                <ProfileFonts 
                  onPurchase={handlePurchase} 
                  user={user} 
                  onSelectFont={handleSelectFont}
                  activeFont={user?.cosmetics?.activeFont}
                />
              </TabsContent>
              <TabsContent value="emojis">
                <ProfileEmojis onPurchase={handlePurchase} user={user} />
              </TabsContent>
              <TabsContent value="titles">
                <ProfileTitles 
                  onPurchase={handlePurchase} 
                  user={user} 
                  onSelectTitle={handleSelectTitle}
                  activeTitle={user?.activeTitle}
                />
              </TabsContent>
            </ScrollArea>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RoyalBoutique;

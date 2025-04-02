
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CosmeticItem, CosmeticCategory } from '@/types/cosmetics';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { Grid, Diamond, Sparkles, Award } from 'lucide-react';

const ProfileCustomization = () => {
  const [activeTab, setActiveTab] = useState<CosmeticCategory>('theme');
  const { toast } = useToast();
  const sound = useSound();

  // Mock data for themes
  const themes: CosmeticItem[] = [
    {
      id: 'theme-royal',
      name: 'Royal Theme',
      description: 'Premium royal theme with gold accents',
      price: 5000,
      type: 'premium',
      rarity: 'legendary',
      category: 'theme',
      enabled: true,
      cssClass: 'theme-royal'
    },
    {
      id: 'theme-dark',
      name: 'Dark Mode',
      description: 'Classic dark theme',
      price: 1000,
      type: 'standard',
      rarity: 'common',
      category: 'theme',
      enabled: true,
      cssClass: 'theme-dark'
    },
    {
      id: 'theme-neon',
      name: 'Neon Vibes',
      description: 'Bright neon colors for your profile',
      price: 3000,
      type: 'premium',
      rarity: 'rare',
      category: 'theme',
      enabled: true,
      cssClass: 'theme-neon'
    },
    {
      id: 'theme-minimal',
      name: 'Minimalist',
      description: 'Clean and simple design',
      price: 2000,
      type: 'standard',
      rarity: 'uncommon',
      category: 'theme',
      enabled: true,
      cssClass: 'theme-minimal'
    }
  ];

  // Mock data for backgrounds
  const backgrounds: CosmeticItem[] = [
    {
      id: 'bg-galaxy',
      name: 'Galaxy',
      description: 'Starry space background',
      price: 3500,
      type: 'premium',
      rarity: 'epic',
      category: 'background',
      enabled: true,
      cssClass: 'bg-galaxy'
    },
    {
      id: 'bg-sunset',
      name: 'Sunset',
      description: 'Beautiful gradient sunset',
      price: 2500,
      type: 'standard',
      rarity: 'rare',
      category: 'background',
      enabled: true,
      cssClass: 'bg-sunset'
    },
    {
      id: 'bg-geometric',
      name: 'Geometric',
      description: 'Modern geometric patterns',
      price: 2000,
      type: 'standard',
      rarity: 'uncommon',
      category: 'background',
      enabled: true,
      cssClass: 'bg-geometric'
    },
    {
      id: 'bg-royal',
      name: 'Royal Gold',
      description: 'Luxurious royal background',
      price: 5000,
      type: 'premium',
      rarity: 'legendary',
      category: 'background',
      enabled: true,
      cssClass: 'bg-royal'
    }
  ];

  // Mock data for effects
  const effects: CosmeticItem[] = [
    {
      id: 'effect-sparkle',
      name: 'Sparkle',
      description: 'Sparkle effect around your profile',
      price: 4000,
      type: 'premium',
      rarity: 'epic',
      category: 'effect',
      enabled: true,
      cssClass: 'effect-sparkle'
    },
    {
      id: 'effect-glow',
      name: 'Glow',
      description: 'Subtle glow effect',
      price: 3000,
      type: 'standard',
      rarity: 'rare',
      category: 'effect',
      enabled: true,
      cssClass: 'effect-glow'
    },
    {
      id: 'effect-pulse',
      name: 'Pulse',
      description: 'Pulsing animation effect',
      price: 3500,
      type: 'premium',
      rarity: 'epic',
      category: 'effect',
      enabled: true,
      cssClass: 'effect-pulse'
    },
    {
      id: 'effect-confetti',
      name: 'Confetti',
      description: 'Celebration confetti effect',
      price: 4500,
      type: 'premium',
      rarity: 'legendary',
      category: 'effect',
      enabled: true,
      cssClass: 'effect-confetti'
    }
  ];

  // Mock data for titles
  const titles: CosmeticItem[] = [
    {
      id: 'title-royal',
      name: 'Royal',
      description: 'Royal title for your profile',
      price: 5000,
      type: 'premium',
      rarity: 'legendary',
      category: 'title',
      enabled: true,
      cssClass: 'title-royal'
    },
    {
      id: 'title-champion',
      name: 'Champion',
      description: 'Champion title',
      price: 3500,
      type: 'premium',
      rarity: 'epic',
      category: 'title',
      enabled: true,
      cssClass: 'title-champion'
    },
    {
      id: 'title-veteran',
      name: 'Veteran',
      description: 'Veteran user title',
      price: 2500,
      type: 'standard',
      rarity: 'rare',
      category: 'title',
      enabled: true,
      cssClass: 'title-veteran'
    },
    {
      id: 'title-founder',
      name: 'Founder',
      description: 'Exclusive founder title',
      price: 10000,
      type: 'exclusive',
      rarity: 'legendary',
      category: 'title',
      enabled: true,
      cssClass: 'title-founder'
    }
  ];

  const getItemsForCategory = (category: CosmeticCategory) => {
    switch (category) {
      case 'theme':
        return themes;
      case 'background':
        return backgrounds;
      case 'effect':
        return effects;
      case 'title':
        return titles;
      default:
        return [];
    }
  };

  const handlePurchase = (item: CosmeticItem) => {
    // In a real app, this would call an API to purchase the item
    toast({
      title: `Purchased ${item.name}`,
      description: `You have successfully purchased the ${item.name} ${item.category}.`,
      variant: "success"
    });
    sound.playSound('purchase');
  };

  const handlePreview = (item: CosmeticItem) => {
    toast({
      title: `Previewing ${item.name}`,
      description: `Now previewing the ${item.name} ${item.category}.`,
    });
    sound.playSound('click');
  };

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'text-gray-400';
      case 'uncommon':
        return 'text-green-400';
      case 'rare':
        return 'text-blue-400';
      case 'epic':
        return 'text-purple-400';
      case 'legendary':
        return 'text-amber-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle>Profile Customization</CardTitle>
          <p className="text-sm text-muted-foreground">
            Personalize your profile with themes, backgrounds, effects, and titles.
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="theme" value={activeTab} onValueChange={(value) => setActiveTab(value as CosmeticCategory)}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="theme" className="flex items-center gap-1.5">
                <Grid className="h-4 w-4" />
                Themes
              </TabsTrigger>
              <TabsTrigger value="background" className="flex items-center gap-1.5">
                <Diamond className="h-4 w-4" />
                Backgrounds
              </TabsTrigger>
              <TabsTrigger value="effect" className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" />
                Effects
              </TabsTrigger>
              <TabsTrigger value="title" className="flex items-center gap-1.5">
                <Award className="h-4 w-4" />
                Titles
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              <TabsContent value="theme">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {themes.map((theme) => (
                    <CosmeticItemCard 
                      key={theme.id} 
                      item={theme} 
                      onPurchase={handlePurchase} 
                      onPreview={handlePreview}
                      getRarityClass={getRarityClass}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="background">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {backgrounds.map((bg) => (
                    <CosmeticItemCard 
                      key={bg.id} 
                      item={bg} 
                      onPurchase={handlePurchase} 
                      onPreview={handlePreview}
                      getRarityClass={getRarityClass}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="effect">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {effects.map((effect) => (
                    <CosmeticItemCard 
                      key={effect.id} 
                      item={effect} 
                      onPurchase={handlePurchase} 
                      onPreview={handlePreview}
                      getRarityClass={getRarityClass}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="title">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {titles.map((title) => (
                    <CosmeticItemCard 
                      key={title.id} 
                      item={title} 
                      onPurchase={handlePurchase} 
                      onPreview={handlePreview}
                      getRarityClass={getRarityClass}
                    />
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

interface CosmeticItemCardProps {
  item: CosmeticItem;
  onPurchase: (item: CosmeticItem) => void;
  onPreview: (item: CosmeticItem) => void;
  getRarityClass: (rarity: string) => string;
}

const CosmeticItemCard: React.FC<CosmeticItemCardProps> = ({ item, onPurchase, onPreview, getRarityClass }) => {
  return (
    <Card className="glass-morphism border-white/10 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{item.name}</h3>
          <span className={`text-xs ${getRarityClass(item.rarity)}`}>
            {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
        
        <div className="flex justify-between items-center mt-4">
          <span className="font-medium">${item.price?.toLocaleString()}</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => onPreview(item)}>
              Preview
            </Button>
            <Button variant="default" size="sm" onClick={() => onPurchase(item)}>
              Purchase
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCustomization;

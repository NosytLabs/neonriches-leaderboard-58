
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const colors = [
  {
    id: 'royal-gold',
    name: 'Royal Gold',
    description: 'The color of royalty and wealth',
    price: 0,
    cssClass: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    textClass: 'text-yellow-400'
  },
  {
    id: 'emerald',
    name: 'Emerald',
    description: 'Deep green like precious gemstones',
    price: 25,
    cssClass: 'bg-gradient-to-r from-emerald-600 to-emerald-800',
    textClass: 'text-emerald-400'
  },
  {
    id: 'royal-blue',
    name: 'Royal Blue',
    description: 'The elegant blue of nobility',
    price: 25,
    cssClass: 'bg-gradient-to-r from-blue-700 to-indigo-800',
    textClass: 'text-blue-400'
  },
  {
    id: 'crimson',
    name: 'Crimson',
    description: 'Bold and powerful red',
    price: 25,
    cssClass: 'bg-gradient-to-r from-red-700 to-rose-800',
    textClass: 'text-red-400'
  },
  {
    id: 'royal-purple',
    name: 'Royal Purple',
    description: 'The mystic color of wisdom',
    price: 50,
    cssClass: 'bg-gradient-to-r from-purple-700 to-purple-900',
    textClass: 'text-purple-400'
  },
  {
    id: 'cosmic',
    name: 'Cosmic',
    description: 'Like a nebula in deep space',
    price: 100,
    cssClass: 'bg-gradient-to-r from-violet-600 via-fuchsia-700 to-pink-700',
    textClass: 'text-fuchsia-400'
  },
  {
    id: 'abyssal',
    name: 'Abyssal',
    description: 'Dark and mysterious like the deep sea',
    price: 75,
    cssClass: 'bg-gradient-to-r from-slate-800 to-cyan-900',
    textClass: 'text-cyan-400'
  },
  {
    id: 'sunset',
    name: 'Sunset',
    description: 'Warm colors of the setting sun',
    price: 75,
    cssClass: 'bg-gradient-to-r from-orange-600 to-amber-700',
    textClass: 'text-orange-400'
  }
];

const ProfileColors: React.FC = () => {
  const { user, awardCosmetic } = useAuth();
  const { toast } = useToast();
  
  const handleSelect = async (colorId: string) => {
    if (!user) {
      toast({
        title: "Not signed in",
        description: "Please sign in to select a color theme",
        variant: "destructive"
      });
      return;
    }
    
    const success = await awardCosmetic('color', colorId);
    
    if (success) {
      toast({
        title: "Color selected",
        description: "Your profile color has been updated",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to update color theme",
        variant: "destructive"
      });
    }
  };
  
  const isColorOwned = (colorId: string): boolean => {
    if (!user || !user.cosmetics) return colorId === 'royal-gold'; // Default is always owned
    
    const { cosmetics } = user;
    
    // Safe check if color is in cosmetics array
    if (typeof cosmetics === 'object') {
      const colorArray = Array.isArray(cosmetics.color) ? cosmetics.color : [];
      // Fix for the includes error - check if array includes the colorId
      return colorArray.some(item => item === colorId);
    }
    
    return colorId === 'royal-gold'; // Default fallback
  };
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Profile Colors</h3>
      <p className="text-muted-foreground text-sm">
        Choose a color theme for your profile
      </p>
      
      <Separator />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {colors.map((color) => (
          <Card 
            key={color.id}
            className={cn(
              "overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md",
              isColorOwned(color.id) ? "border-yellow-500/50" : "border-white/10"
            )}
            onClick={() => handleSelect(color.id)}
          >
            <div className={cn("h-12", color.cssClass)}></div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className={cn("font-medium", color.textClass)}>{color.name}</h4>
                  <p className="text-xs text-muted-foreground">{color.description}</p>
                </div>
                
                {isColorOwned(color.id) ? (
                  <div className="text-green-500">
                    <Check className="h-5 w-5" />
                  </div>
                ) : (
                  <div className="text-amber-500 text-xs font-medium">
                    {color.price > 0 ? `${color.price} coins` : 'Free'}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-xs text-muted-foreground mt-4">
        Note: The Royal Gold theme is available to all users.
      </div>
    </div>
  );
};

export default ProfileColors;

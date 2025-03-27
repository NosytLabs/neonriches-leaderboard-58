
import React from 'react';
import { UserProfile } from '@/contexts/AuthContext';
import { Sparkles, Crown, Star, Award, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';

interface DecorationItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  price: number;
  preview: React.ReactNode;
}

interface ProfileDecorationsProps {
  onPurchase: (name: string, price: number, category: string, itemId: string) => Promise<void>;
  user: UserProfile | null;
}

const ProfileDecorations: React.FC<ProfileDecorationsProps> = ({ onPurchase, user }) => {
  const userDecorations = user?.cosmetics?.decorations || [];

  const decorations: DecorationItem[] = [
    {
      id: 'royal-crown',
      name: 'Royal Crown',
      description: 'Display a majestic crown above your name on the leaderboard',
      icon: <Crown className="text-royal-gold h-6 w-6" />,
      price: 50,
      preview: (
        <div className="flex flex-col items-center">
          <Crown className="text-royal-gold h-10 w-10 animate-crown-glow" />
          <span className="mt-2 font-medieval">Username</span>
        </div>
      )
    },
    {
      id: 'golden-sparkle',
      name: 'Golden Sparkle',
      description: 'Add a sparkling effect to your profile throughout the kingdom',
      icon: <Sparkles className="text-royal-gold h-6 w-6" />,
      price: 30,
      preview: (
        <div className="relative flex items-center justify-center">
          <Sparkles className="absolute -top-2 -right-2 text-royal-gold h-4 w-4 animate-sparkle" />
          <Sparkles className="absolute -bottom-2 -left-2 text-royal-gold h-4 w-4 animate-sparkle" style={{ animationDelay: '0.5s' }} />
          <span className="font-medieval">Username</span>
        </div>
      )
    },
    {
      id: 'noble-star',
      name: 'Noble Star',
      description: 'A distinguished star emblem appears beside your name',
      icon: <Star className="text-royal-gold h-6 w-6" />,
      price: 25,
      preview: (
        <div className="flex items-center">
          <Star className="text-royal-gold h-6 w-6 mr-2 animate-pulse-slow" />
          <span className="font-medieval">Username</span>
        </div>
      )
    },
    {
      id: 'royal-crest',
      name: 'Royal Crest',
      description: 'Display your nobility with an elegant family crest',
      icon: <Shield className="text-royal-purple h-6 w-6" />,
      price: 75,
      preview: (
        <div className="relative">
          <Shield className="text-royal-purple h-12 w-12 mx-auto mb-1 opacity-80" />
          <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold mt-1">P2W</span>
          <span className="font-medieval text-center block">Username</span>
        </div>
      )
    },
    {
      id: 'medal-of-honor',
      name: 'Medal of Honor',
      description: 'A prestigious medal that shows your commitment to status',
      icon: <Award className="text-royal-gold h-6 w-6" />,
      price: 40,
      preview: (
        <div className="flex items-center">
          <Award className="text-royal-gold h-8 w-8 mr-2" />
          <span className="font-medieval">Username</span>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold royal-gradient font-medieval">Profile Decorations</h3>
      <p className="text-white/70">Adorn your profile with symbols of nobility and distinction.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {decorations.map((item) => {
          const isOwned = userDecorations.includes(item.id);
          
          return (
            <div key={item.id} className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-royal-gold/10 mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-xs text-white/60">${item.price}</p>
                  </div>
                </div>
                {isOwned && (
                  <Badge variant="outline" className="bg-royal-gold/20 border-royal-gold/40 text-royal-gold">
                    Owned
                  </Badge>
                )}
              </div>
              
              <p className="text-sm text-white/70 mb-4">
                {item.description}
              </p>
              
              <div className="bg-black/30 rounded-lg p-3 mb-4 flex items-center justify-center">
                {item.preview}
              </div>
              
              <RoyalButton
                variant={isOwned ? "outline" : "royalGold"}
                size="sm"
                className="w-full"
                disabled={isOwned}
                onClick={() => onPurchase(item.name, item.price, 'decorations', item.id)}
              >
                {isOwned ? 'Already Owned' : `Purchase for $${item.price}`}
              </RoyalButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileDecorations;


import React from 'react';
import { UserProfile } from '@/contexts/AuthContext';
import { Type } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';

interface FontItem {
  id: string;
  name: string;
  description: string;
  price: number;
  fontFamily: string;
  sampleText: string;
}

interface ProfileFontsProps {
  onPurchase: (name: string, price: number, category: string, itemId: string) => Promise<void>;
  user: UserProfile | null;
}

const ProfileFonts: React.FC<ProfileFontsProps> = ({ onPurchase, user }) => {
  const userFonts = user?.cosmetics?.fonts || [];

  const fonts: FontItem[] = [
    {
      id: 'royal-script',
      name: 'Royal Script',
      description: 'An elegant, flowing script fit for nobility',
      price: 30,
      fontFamily: "'Playfair Display', serif",
      sampleText: 'Your Noble Username'
    },
    {
      id: 'medieval-blackletter',
      name: 'Medieval Blackletter',
      description: 'A traditional gothic style from ancient scrolls',
      price: 40,
      fontFamily: "'Cinzel', serif",
      sampleText: 'Your Noble Username'
    },
    {
      id: 'majestic-serif',
      name: 'Majestic Serif',
      description: 'A distinguished serif font with regal flourishes',
      price: 35,
      fontFamily: "'Cormorant Garamond', serif",
      sampleText: 'Your Noble Username'
    },
    {
      id: 'royal-modern',
      name: 'Royal Modern',
      description: 'A contemporary font with classic royal influences',
      price: 25,
      fontFamily: "'Crimson Text', serif",
      sampleText: 'Your Noble Username'
    },
    {
      id: 'noble-sans',
      name: 'Noble Sans',
      description: 'A clean, distinguished sans-serif with noble proportions',
      price: 25,
      fontFamily: "'Spectral', serif",
      sampleText: 'Your Noble Username'
    },
    {
      id: 'courtly-display',
      name: 'Courtly Display',
      description: 'An ornate display font for making a grand impression',
      price: 45,
      fontFamily: "'Fredericka the Great', cursive",
      sampleText: 'Your Noble Username'
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold royal-gradient font-medieval">Noble Typefaces</h3>
      <p className="text-white/70">Distinguished fonts to display your royal status throughout the kingdom.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {fonts.map((item) => {
          const isOwned = userFonts.includes(item.id);
          
          return (
            <div key={item.id} className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-royal-gold/10 mr-3">
                    <Type className="h-5 w-5 text-royal-gold" />
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
              
              <div className="bg-black/30 rounded-lg p-6 mb-4 flex items-center justify-center">
                <span style={{ fontFamily: item.fontFamily, fontSize: '1.5rem', color: 'white' }}>
                  {item.sampleText}
                </span>
              </div>
              
              <RoyalButton
                variant={isOwned ? "outline" : "royalGold"}
                size="sm"
                className="w-full"
                disabled={isOwned}
                onClick={() => onPurchase(item.name, item.price, 'fonts', item.id)}
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

export default ProfileFonts;

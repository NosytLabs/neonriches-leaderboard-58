
import React from 'react';
import { UserProfile } from '@/contexts/AuthContext';
import { Palette } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';

interface ColorItem {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  gradient?: string;
}

interface ProfileColorsProps {
  onPurchase: (name: string, price: number, category: string, itemId: string) => Promise<void>;
  user: UserProfile | null;
  onSelectColor?: (colorId: string | null) => Promise<void>;
  activeColor?: string | null;
}

const ProfileColors: React.FC<ProfileColorsProps> = ({ 
  onPurchase, 
  user, 
  onSelectColor, 
  activeColor 
}) => {
  const userColors = user?.cosmetics?.colors || [];

  const colors: ColorItem[] = [
    {
      id: 'royal-purple',
      name: 'Royal Purple',
      description: 'The color of nobility and luxury',
      price: 35,
      color: '#7851A9',
      gradient: 'linear-gradient(135deg, #7851A9, #9B59B6)'
    },
    {
      id: 'emerald-green',
      name: 'Emerald Green',
      description: 'A rich, prestigious green fit for nobility',
      price: 35,
      color: '#2C784A',
      gradient: 'linear-gradient(135deg, #2C784A, #38A169)'
    },
    {
      id: 'sapphire-blue',
      name: 'Sapphire Blue',
      description: 'A deep royal blue exuding wealth and power',
      price: 35,
      color: '#1F4788',
      gradient: 'linear-gradient(135deg, #1F4788, #2B6CB0)'
    },
    {
      id: 'crimson-glory',
      name: 'Crimson Glory',
      description: 'The deep red of power and prestige',
      price: 35,
      color: '#9B2335',
      gradient: 'linear-gradient(135deg, #9B2335, #C41E3A)'
    },
    {
      id: 'royal-gold',
      name: 'Royal Gold',
      description: 'The ultimate display of wealth and power',
      price: 50,
      color: '#D4AF37',
      gradient: 'linear-gradient(135deg, #D4AF37, #F1C40F)'
    },
    {
      id: 'platinum-silver',
      name: 'Platinum Silver',
      description: 'A refined, exclusive metallic sheen',
      price: 45,
      color: '#C0C0C0',
      gradient: 'linear-gradient(135deg, #C0C0C0, #E5E5E5)'
    },
    {
      id: 'royal-rainbow',
      name: 'Royal Rainbow',
      description: 'A prestigious, shifting display of all noble colors',
      price: 75,
      color: '#F00',
      gradient: 'linear-gradient(135deg, #9B2335, #D4AF37, #1F4788, #7851A9)'
    },
    {
      id: 'midnight-aura',
      name: 'Midnight Aura',
      description: 'A mysterious deep blue with hints of purple',
      price: 40,
      color: '#2C3E50',
      gradient: 'linear-gradient(135deg, #2C3E50, #4A69BD)'
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold royal-gradient font-medieval">Noble Color Schemes</h3>
      <p className="text-white/70">Display your status with exclusive color themes for your profile.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {colors.map((item) => {
          const isOwned = userColors.includes(item.id);
          const isActive = activeColor === item.id;
          
          return (
            <div key={item.id} className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" 
                       style={{ background: item.gradient || item.color }}>
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-xs text-white/60">${item.price}</p>
                  </div>
                </div>
                {isOwned && !onSelectColor && (
                  <Badge variant="outline" className="bg-royal-gold/20 border-royal-gold/40 text-royal-gold">
                    Owned
                  </Badge>
                )}
                {isOwned && isActive && (
                  <Badge variant="outline" className="bg-royal-gold/20 border-royal-gold/40 text-royal-gold">
                    Active
                  </Badge>
                )}
              </div>
              
              <p className="text-sm text-white/70 mb-4">
                {item.description}
              </p>
              
              <div className="h-12 rounded-lg mb-4" style={{ background: item.gradient || item.color }}></div>
              
              <div className="bg-black/30 rounded-lg p-3 mb-4 flex flex-col items-center justify-center">
                <p className="text-sm mb-2">Preview with your username:</p>
                <span className="font-medieval text-lg" style={{ color: item.color }}>
                  {user?.username || 'Your Username'}
                </span>
              </div>
              
              <div className="flex flex-col space-y-2">
                <RoyalButton
                  variant={isOwned ? "outline" : "royalGold"}
                  size="sm"
                  className="w-full"
                  disabled={isOwned && !onSelectColor}
                  onClick={() => isOwned && onSelectColor ? 
                    onSelectColor(item.id) : 
                    onPurchase(item.name, item.price, 'colors', item.id)}
                >
                  {isOwned ? 
                    (onSelectColor ? (isActive ? 'Selected' : 'Select Color') : 'Already Owned') : 
                    `Purchase for $${item.price}`}
                </RoyalButton>
                
                {isOwned && onSelectColor && isActive && (
                  <RoyalButton
                    variant="outline"
                    size="sm"
                    className="w-full border-royal-gold/30"
                    onClick={() => onSelectColor(null)}
                  >
                    Remove Color
                  </RoyalButton>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileColors;

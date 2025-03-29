
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Crown, 
  Feather, 
  Calendar, 
  User, 
  Twitter, 
  Instagram, 
  Globe, 
  Star, 
  ArrowRight, 
  Shield, 
  Gem 
} from 'lucide-react';
import { formatDate } from '@/utils/formatters';
import { formatCurrency } from '@/lib/utils';
import { TeamBadge } from '@/components/ui/theme-components';
import RoyalDecoration from '@/components/ui/royal-decoration';
import { User as UserType } from '@/types/user';

const RoyalShowcase: React.FC = () => {
  const [topSpender, setTopSpender] = useState<UserType | null>(null);
  
  useEffect(() => {
    // Mock data for top spender
    const mockUser: UserType = {
      id: "usr123456",
      username: "LordGolden",
      email: "lord@spendthrone.com",
      rank: 1,
      joinDate: "2023-01-15T10:30:00Z",
      displayName: "Earl of Extravagance",
      gender: "king",
      profileImage: "/throne-assets/avatars/royal-2.jpg",
      amountSpent: 25000,
      totalSpent: 25000,
      spentAmount: 25000,
      walletBalance: 1000,
      team: "red",
      bio: "The most profligate nobleman in all the realm. While peasants toil, I adorn my digital profile with meaningless trinkets. Bow before my superior spending ability!",
      tier: "royal",
      createdAt: "2023-01-15T10:30:00Z",
      badges: ['top_spender', 'early_noble', 'golden_throne', 'royal_patron', 'money_baron'],
      spendStreak: 7
    };
    
    setTopSpender(mockUser);
  }, []);
  
  if (!topSpender) {
    return null;
  }
  
  const socialLinks = [
    {
      id: "twitter1",
      platform: "twitter",
      url: "https://twitter.com/lordgolden",
      clicks: 342
    },
    {
      id: "instagram1",
      platform: "instagram",
      url: "https://instagram.com/lordgolden",
      clicks: 156
    },
    {
      id: "website1",
      platform: "website",
      url: "https://lordgolden.com",
      clicks: 98
    }
  ];
  
  const genderTitle = topSpender.gender === 'king' ? 'His Majesty' : 
                      topSpender.gender === 'queen' ? 'Her Majesty' : 
                      'Their Excellency';
  
  return (
    <div className="rounded-xl glass-morphism overflow-hidden border border-royal-gold/20 relative z-10">
      <RoyalDecoration
        variant="corner-flourish"
        position="top-left"
        color="gold"
        size="lg"
      />
      <RoyalDecoration
        variant="corner-flourish"
        position="bottom-right"
        color="gold"
        size="lg"
      />
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "url('/throne-assets/patterns/royal-pattern.svg')",
            backgroundSize: '150px',
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
          {/* Crown & Trophy Icon */}
          <div className="md:hidden flex-shrink-0 mb-2">
            <div className="relative">
              <Crown size={40} className="text-royal-gold animate-crown-glow" />
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/3">
                <Trophy size={20} className="text-royal-gold" />
              </div>
            </div>
          </div>
          
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-royal-gold/80 shadow-glow relative">
              <img 
                src={topSpender.profileImage || '/throne-assets/avatars/default.jpg'} 
                alt={topSpender.displayName || topSpender.username} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="absolute -top-2 -right-2 hidden md:block">
              <div className="relative">
                <Crown size={30} className="text-royal-gold animate-crown-glow" />
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/3">
                  <Trophy size={16} className="text-royal-gold" />
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -left-2">
              <TeamBadge team={topSpender.team || 'red'} className="shadow-lg" />
            </div>
          </div>
          
          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
              <h2 className="text-2xl md:text-3xl font-bold font-royal royal-gradient">
                {topSpender.displayName || topSpender.username}
              </h2>
              
              <div className="hidden md:block">
                <Badge variant="outline" className="ml-2 border-royal-gold/30 text-royal-gold">
                  <Crown size={12} className="mr-1" />
                  {genderTitle}
                </Badge>
              </div>
            </div>
            
            <div className="md:hidden flex justify-center mb-3">
              <Badge variant="outline" className="border-royal-gold/30 text-royal-gold">
                <Crown size={12} className="mr-1" />
                {genderTitle}
              </Badge>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4">
              <div className="flex flex-col items-center md:items-start">
                <div className="text-white/60 text-sm mb-1 flex items-center">
                  <Trophy size={14} className="mr-1.5 text-royal-gold/70" />
                  <span>Rank</span>
                </div>
                <div className="text-2xl font-bold royal-text-shimmer">#{topSpender.rank}</div>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="text-white/60 text-sm mb-1 flex items-center">
                  <Gem size={14} className="mr-1.5 text-royal-gold/70" />
                  <span>Noble Investment</span>
                </div>
                <div className="text-2xl font-bold royal-text-shimmer">{formatCurrency(topSpender.totalSpent)}</div>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="text-white/60 text-sm mb-1 flex items-center">
                  <Calendar size={14} className="mr-1.5 text-royal-gold/70" />
                  <span>Nobility Established</span>
                </div>
                <div className="text-base font-medium">{formatDate(topSpender.joinDate || topSpender.createdAt)}</div>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-white/80 italic">"{topSpender.bio}"</p>
            </div>
            
            {/* Badges Section */}
            {topSpender.badges && topSpender.badges.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {topSpender.badges.map((badge, index) => (
                    <Badge 
                      key={index} 
                      className="bg-gradient-to-r from-royal-gold/20 to-royal-gold/10 border border-royal-gold/30 text-royal-gold"
                    >
                      <Star size={12} className="mr-1" />
                      {badge.replace('_', ' ')}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {/* Spend Streak */}
            {topSpender.spendStreak && topSpender.spendStreak > 0 && (
              <div className="mb-4 bg-gradient-to-r from-royal-gold/10 to-transparent p-2 rounded-lg inline-flex items-center">
                <Feather size={16} className="text-royal-gold mr-2" />
                <span>Noble spending streak: <span className="font-bold">{topSpender.spendStreak} days</span> of continuous wealth flaunting</span>
              </div>
            )}
            
            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start mb-4">
              {socialLinks.map(link => (
                <Link
                  key={link.id}
                  to={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center glass-morphism border border-white/10 hover:border-royal-gold/30 transition-colors"
                >
                  {link.platform === 'twitter' && <Twitter className="h-5 w-5 text-white/70" />}
                  {link.platform === 'instagram' && <Instagram className="h-5 w-5 text-white/70" />}
                  {link.platform === 'website' && <Globe className="h-5 w-5 text-white/70" />}
                </Link>
              ))}
            </div>
            
            <div className="flex justify-center md:justify-start">
              <Link to={`/profile/${topSpender.username}`}>
                <Button className="royal-button-enhanced font-royal text-black">
                  <span>Visit Noble Profile</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with Royal Decree */}
      <div className="bg-gradient-to-r from-black/40 via-royal-gold/5 to-black/40 p-4 border-t border-royal-gold/20">
        <div className="flex items-center justify-center">
          <Shield size={16} className="text-royal-gold mr-2" />
          <p className="text-white/70 text-sm italic">
            By decree of the SpendThrone: "This noble hath demonstrated extraordinary dedication to parting with worldly wealth for digital prestige."
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoyalShowcase;

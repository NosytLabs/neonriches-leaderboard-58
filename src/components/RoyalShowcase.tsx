
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Crown, 
  ExternalLink, 
  Shield, 
  Trophy, 
  Clock, 
  DollarSign, 
  Award, 
  Zap,
  ArrowUpRight,
  Star,
  Sparkles,
  Users,
  Gem
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MedievalFrame from '@/components/ui/medieval-frame';
import ProfileBoostedContent from '@/components/ui/ProfileBoostedContent';
import InteractiveRoyalCrown from '@/components/3d/InteractiveRoyalCrown';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useToastContext } from '@/contexts/ToastContext';
import { UserProfile } from '@/types/user';

interface RoyalShowcaseProps {
  topSpender: UserProfile;
  onInspect?: () => void;
}

const LUXURY_TEAMS = {
  red: {
    name: "House Crimson Dynasty",
    description: "Masters of opulent displays and lavish investments",
    color: "text-red-500",
    bg: "bg-red-500/20",
    border: "border-red-500/30"
  },
  green: {
    name: "Emerald Empire Collective",
    description: "Architects of wealth and strategic spending",
    color: "text-emerald-500",
    bg: "bg-emerald-500/20", 
    border: "border-emerald-500/30"
  },
  blue: {
    name: "Sapphire Sovereign Alliance",
    description: "Nobility through calculated financial dominance",
    color: "text-blue-500",
    bg: "bg-blue-500/20",
    border: "border-blue-500/30"
  }
};

const RoyalShowcase: React.FC<RoyalShowcaseProps> = ({ topSpender, onInspect }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { playSound } = useNotificationSounds();
  const { addToast } = useToastContext();
  
  // Fallback if no gender is specified
  const royalTitle = topSpender.gender === 'queen' ? 'Queen' : 'King';
  
  const handleCrownClick = () => {
    setIsAnimating(true);
    playSound('royalAnnouncement', 0.2);
    
    addToast({
      title: `${royalTitle} of Spending`,
      description: `All hail ${topSpender.displayName || topSpender.username}, who has contributed $${topSpender.amountSpent?.toLocaleString()} to their meaningless digital status!`,
      duration: 5000,
    });
    
    setTimeout(() => setIsAnimating(false), 3000);
  };
  
  // Get team details with fallback
  const getTeamDetails = () => {
    if (!topSpender.team || !LUXURY_TEAMS[topSpender.team]) {
      return {
        name: "Unaligned", 
        description: "Not affiliated with any royal house",
        color: "text-gray-400",
        bg: "bg-gray-500/10",
        border: "border-gray-500/20"
      };
    }
    return LUXURY_TEAMS[topSpender.team];
  };
  
  const teamDetails = getTeamDetails();
  
  return (
    <div className="relative">
      <div className="mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold font-medieval royal-gradient mb-2 flex items-center justify-center">
          <Crown size={28} className="text-royal-gold mr-3 animate-pulse-slow" />
          Current Reigning {royalTitle}
          <Crown size={28} className="text-royal-gold ml-3 animate-pulse-slow" />
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto font-medieval-text">
          The highest paying member of our digital court, with purely cosmetic privileges and absolutely no real power.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 items-stretch">
        {/* 3D Crown - 2 column span */}
        <div className="hidden lg:block lg:col-span-2 h-full">
          <MedievalFrame variant="royal" cornerDecoration className="h-full p-4">
            <Card className="h-full bg-transparent border-0 flex items-center justify-center">
              <InteractiveRoyalCrown 
                onCrownClick={handleCrownClick}
                showCoins={isAnimating}
                size="large"
              />
            </Card>
          </MedievalFrame>
        </div>
        
        {/* Royal Profile - 3 column span */}
        <div className="lg:col-span-3">
          <MedievalFrame 
            variant="royal" 
            cornerDecoration 
            borderDecoration 
            seal 
            className="h-full"
          >
            <div className="absolute top-2 left-2 z-10">
              <div className="flex items-center gap-1 bg-royal-gold/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                <Crown className="h-3 w-3 text-royal-gold animate-crown-glow" />
                <span className="text-royal-gold font-medieval">Reigning {royalTitle}</span>
              </div>
            </div>
            
            <CardContent className="pt-12 pb-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute -inset-1 rounded-full bg-royal-gold/30 animate-pulse-slow"></div>
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-royal-gold">
                    <img 
                      src={topSpender.profileImage} 
                      alt={topSpender.username} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-royal-gold rounded-full p-1.5 shadow-lg animate-crown-glow">
                    <Crown className="h-5 w-5 text-black" />
                  </div>
                </div>
                
                <ProfileBoostedContent user={topSpender}>
                  <h3 className="text-2xl font-bold royal-gradient font-medieval">
                    {topSpender.displayName || topSpender.username}
                  </h3>
                </ProfileBoostedContent>
                
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {topSpender.badges && topSpender.badges.map((badge, idx) => (
                    <Badge key={idx} variant="outline" className="bg-royal-gold/10 text-royal-gold">
                      {badge}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-3 w-full mt-6">
                  <div className="glass-morphism border-royal-gold/20 p-3 rounded-lg flex justify-between items-center hover:border-royal-gold/50 transition-colors duration-300">
                    <span className="text-white/80 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1.5 text-royal-gold" />
                      Royal Treasury
                    </span>
                    <span className="font-mono text-royal-gold font-bold text-lg">${topSpender.amountSpent?.toLocaleString()}</span>
                  </div>
                  
                  <div className="glass-morphism border-royal-gold/20 p-3 rounded-lg flex justify-between items-center hover:border-royal-gold/50 transition-colors duration-300">
                    <span className="text-white/80 flex items-center">
                      <Crown className="h-4 w-4 mr-1.5 text-royal-gold" />
                      Court Rank
                    </span>
                    <span className="font-mono text-royal-gold-bright font-bold">#{topSpender.rank}</span>
                  </div>
                  
                  <div className="glass-morphism border-royal-gold/20 p-3 rounded-lg flex justify-between items-center hover:border-royal-gold/50 transition-colors duration-300">
                    <span className="text-white/80 flex items-center">
                      <Shield className="h-4 w-4 mr-1.5" style={{color: teamDetails.color}} />
                      Royal House
                    </span>
                    <span className="font-mono font-bold" style={{color: teamDetails.color}}>{teamDetails.name}</span>
                  </div>
                  
                  {topSpender.spendStreak && topSpender.spendStreak > 0 && (
                    <div className="glass-morphism border-royal-gold/20 p-3 rounded-lg flex justify-between items-center hover:border-royal-gold/50 transition-colors duration-300">
                      <span className="text-white/80 flex items-center">
                        <Clock className="h-4 w-4 mr-1.5 text-royal-gold" />
                        Spending Streak
                      </span>
                      <span className="font-mono text-royal-gold-bright font-bold">{topSpender.spendStreak} weeks</span>
                    </div>
                  )}
                  
                  {topSpender.joinDate && (
                    <div className="glass-morphism border-royal-gold/20 p-3 rounded-lg flex justify-between items-center hover:border-royal-gold/50 transition-colors duration-300">
                      <span className="text-white/80 flex items-center">
                        <Trophy className="h-4 w-4 mr-1.5 text-royal-gold" />
                        Court Member Since
                      </span>
                      <span className="font-mono text-royal-gold-bright font-bold">{new Date(topSpender.joinDate).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 glass-morphism border-royal-gold/10 px-4 py-3 rounded-lg w-full">
                  <p className="text-sm text-white/80 italic font-medieval-text text-center">
                    "{topSpender.bio || "A noble achievement that cost real money for digital prestige with absolutely no practical benefits."}"
                  </p>
                </div>
              </div>
            </CardContent>
          </MedievalFrame>
        </div>
        
        {/* Royal Marketing Section - 2 column span */}
        <div className="lg:col-span-2">
          <MedievalFrame variant="noble" className="h-full">
            <div className="absolute top-2 left-2 z-10">
              <div className="flex items-center gap-1 bg-purple-500/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                <Zap className="h-3 w-3 text-purple-400" />
                <span className="text-purple-300 font-medieval">Royal Advertisement</span>
              </div>
            </div>
            
            <CardContent className="pt-12 pb-6">
              <h3 className="text-lg font-bold royal-gradient mb-4 font-medieval flex items-center">
                <Star className="h-5 w-5 mr-2 text-royal-gold" />
                Premium Royal Promotion
              </h3>
              
              <div className="space-y-4 mb-6">
                {topSpender.socialLinks && topSpender.socialLinks.length > 0 ? (
                  topSpender.socialLinks.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 glass-morphism border-purple-500/20 p-3 rounded-lg hover:bg-purple-900/20 transition-colors group block"
                    >
                      <ExternalLink size={16} className="text-royal-gold flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{link.platform}</div>
                        <div className="text-xs text-white/60 truncate">{link.url.replace(/^https?:\/\/(www\.)?/, '')}</div>
                      </div>
                      <Badge variant="outline" className="text-[10px] bg-purple-900/60 text-purple-300 border-0 flex-shrink-0">
                        {link.clicks || 0} clicks
                      </Badge>
                      <ArrowUpRight size={14} className="text-royal-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </a>
                  ))
                ) : (
                  <div className="glass-morphism border-purple-500/20 p-4 rounded-lg text-center">
                    <Sparkles className="h-5 w-5 text-royal-gold mx-auto mb-2" />
                    <p className="text-sm text-white/70">
                      This space could showcase <strong>{royalTitle} {topSpender.displayName || topSpender.username}'s</strong> promotion, blog, products, or social media.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="glass-morphism border-royal-gold/10 p-3 rounded-lg text-center">
                  <Users className="h-4 w-4 mx-auto mb-1 text-royal-gold" />
                  <p className="text-xs text-white/70">Premium Visibility</p>
                  <p className="text-sm font-semibold text-royal-gold">Top of Homepage</p>
                </div>
                
                <div className="glass-morphism border-royal-gold/10 p-3 rounded-lg text-center">
                  <Gem className="h-4 w-4 mx-auto mb-1 text-royal-gold" />
                  <p className="text-xs text-white/70">Exclusive Status</p>
                  <p className="text-sm font-semibold text-royal-gold">Royal Advertisement</p>
                </div>
              </div>
              
              <Link to={`/profile/${topSpender.username}`}>
                <Button variant="secondary" size="sm" className="w-full bg-royal-gold/10 hover:bg-royal-gold/20 text-royal-gold border border-royal-gold/30">
                  <Award className="h-4 w-4 mr-1.5" />
                  Visit {royalTitle}'s Full Profile
                </Button>
              </Link>
              
              <div className="mt-4 text-xs text-white/40 italic text-center">
                "The top spender earns this promotional space. All cosmetic, no real power - just digital prestige."
              </div>
            </CardContent>
          </MedievalFrame>
        </div>
      </div>
    </div>
  );
};

export default RoyalShowcase;

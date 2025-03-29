
import React, { useEffect, useState } from 'react';
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
import { Card, CardContent } from '@/components/ui/card';
import { UserProfile, User, SocialLink } from '@/types/user';
import { useToast } from '@/hooks/use-toast';
import ProfileBoostedContent from '@/components/ui/ProfileBoostedContent';

interface TopSpenderShowcaseProps {
  topSpender?: UserProfile;
  onInspect?: () => void;
  highlightTop?: boolean;
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

const TopSpenderShowcase: React.FC<TopSpenderShowcaseProps> = ({ 
  topSpender, 
  onInspect, 
  highlightTop = true 
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTopSpender, setCurrentTopSpender] = useState<UserProfile | undefined>(topSpender);
  const { toast } = useToast();
  
  // Mock data for development
  useEffect(() => {
    if (!topSpender) {
      // Mock top spender if none provided
      const mockTopSpender: UserProfile = {
        id: "top-1",
        username: "RoyalSpender",
        displayName: "Duke of Dollars",
        email: "",
        profileImage: "/throne-assets/avatars/royal-1.jpg",
        bio: "I've spent more on virtual status than most spend on food. Bow before my fiscal irresponsibility!",
        tier: "platinum",
        team: "red",
        rank: 1,
        amountSpent: 2500,
        spentAmount: 2500,
        walletBalance: 150,
        totalSpent: 2500,
        spendStreak: 5,
        gender: "king",
        joinDate: "2023-05-15T00:00:00Z",
        joinedAt: "2023-05-15T00:00:00Z",
        createdAt: "2023-05-15T00:00:00Z",
        profileViews: 450,
        profileClicks: 120,
        followers: 28,
        badges: ["big_spender", "early_supporter", "team_champion"],
        socialLinks: {
          twitter: "https://twitter.com/dukeofdollars",
          website: "https://spendthrone.example.com/duke",
          discord: "https://discord.com/users/dukeofdollars"
        }
      };
      
      setCurrentTopSpender(mockTopSpender);
    } else {
      setCurrentTopSpender(topSpender);
    }
  }, [topSpender]);
  
  if (!currentTopSpender) {
    return null;
  }
  
  const getSocialLinks = () => {
    if (!currentTopSpender.socialLinks) return [];
    
    if (Array.isArray(currentTopSpender.socialLinks)) {
      return currentTopSpender.socialLinks;
    }
    
    const links: SocialLink[] = [];
    const socialObj = currentTopSpender.socialLinks as Record<string, string>;
    
    Object.entries(socialObj).forEach(([platform, url]) => {
      if (url) {
        links.push({
          id: platform,
          platform,
          url,
          clicks: Math.floor(Math.random() * 30) // Mock data
        });
      }
    });
    
    return links;
  };
  
  const royalTitle = currentTopSpender.gender === 'queen' ? 'Queen' : 'King';
  
  const handleCrownClick = () => {
    setIsAnimating(true);
    
    toast({
      title: `${royalTitle} of Spending`,
      description: `All hail ${currentTopSpender.displayName || currentTopSpender.username}, who has contributed $${currentTopSpender.amountSpent?.toLocaleString()} to their meaningless digital status!`,
      duration: 5000,
    });
    
    setTimeout(() => setIsAnimating(false), 3000);
  };
  
  const getTeamDetails = () => {
    if (!currentTopSpender.team || !LUXURY_TEAMS[currentTopSpender.team]) {
      return {
        name: "Unaligned", 
        description: "Not affiliated with any royal house",
        color: "text-gray-400",
        bg: "bg-gray-500/10",
        border: "border-gray-500/20"
      };
    }
    return LUXURY_TEAMS[currentTopSpender.team];
  };
  
  if (highlightTop && currentTopSpender.rank !== 1) {
    return null;
  }
  
  const socialLinks = getSocialLinks();
  
  return (
    <div className="relative">
      <div className="mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold font-medieval royal-gradient mb-2 flex items-center justify-center">
          <Crown size={28} className="text-royal-gold mr-3 animate-pulse-slow" />
          Current Reigning {royalTitle}
          <Crown size={28} className="text-royal-gold ml-3 animate-pulse-slow" />
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto font-medieval-text">
          The highest paying member receives this exclusive advertising space as a purely cosmetic benefit.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="col-span-3">
          <Card className="glass-morphism border-royal-gold/20 h-full relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-royal-gold/10 rounded-full blur-3xl"></div>
            
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
                      src={currentTopSpender.profileImage} 
                      alt={currentTopSpender.username} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-royal-gold rounded-full p-1.5 shadow-lg animate-crown-glow">
                    <Crown className="h-5 w-5 text-black" />
                  </div>
                </div>
                
                <ProfileBoostedContent user={currentTopSpender}>
                  <h3 className="text-2xl font-bold royal-gradient font-medieval">
                    {currentTopSpender.displayName || currentTopSpender.username}
                  </h3>
                </ProfileBoostedContent>
                
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {currentTopSpender.badges && currentTopSpender.badges?.map((badge, idx) => (
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
                    <span className="font-mono text-royal-gold font-bold text-lg">${currentTopSpender.amountSpent?.toLocaleString()}</span>
                  </div>
                  
                  <div className="glass-morphism border-royal-gold/20 p-3 rounded-lg flex justify-between items-center hover:border-royal-gold/50 transition-colors duration-300">
                    <span className="text-white/80 flex items-center">
                      <Crown className="h-4 w-4 mr-1.5 text-royal-gold" />
                      Court Rank
                    </span>
                    <span className="font-mono text-royal-gold-bright font-bold">#{currentTopSpender.rank}</span>
                  </div>
                  
                  <div className="glass-morphism border-royal-gold/20 p-3 rounded-lg flex justify-between items-center hover:border-royal-gold/50 transition-colors duration-300">
                    <span className="text-white/80 flex items-center">
                      <Shield className="h-4 w-4 mr-1.5" style={{color: getTeamDetails().color}} />
                      Royal House
                    </span>
                    <span className="font-mono font-bold" style={{color: getTeamDetails().color}}>{getTeamDetails().name}</span>
                  </div>
                  
                  {currentTopSpender.spendStreak && currentTopSpender.spendStreak > 0 && (
                    <div className="glass-morphism border-royal-gold/20 p-3 rounded-lg flex justify-between items-center hover:border-royal-gold/50 transition-colors duration-300">
                      <span className="text-white/80 flex items-center">
                        <Clock className="h-4 w-4 mr-1.5 text-royal-gold" />
                        Spending Streak
                      </span>
                      <span className="font-mono text-royal-gold-bright font-bold">{currentTopSpender.spendStreak} weeks</span>
                    </div>
                  )}
                  
                  {currentTopSpender.joinDate && (
                    <div className="glass-morphism border-royal-gold/20 p-3 rounded-lg flex justify-between items-center hover:border-royal-gold/50 transition-colors duration-300">
                      <span className="text-white/80 flex items-center">
                        <Trophy className="h-4 w-4 mr-1.5 text-royal-gold" />
                        Court Member Since
                      </span>
                      <span className="font-mono text-royal-gold-bright font-bold">{new Date(currentTopSpender.joinDate).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 glass-morphism border-royal-gold/10 px-4 py-3 rounded-lg w-full">
                  <p className="text-sm text-white/80 italic font-medieval-text text-center">
                    "{currentTopSpender.bio || "A noble achievement that cost real money for digital prestige with absolutely no practical benefits."}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card className="glass-morphism border-purple-500/20 h-full relative overflow-hidden">
            <div className="absolute top-2 left-2 z-10">
              <div className="flex items-center gap-1 bg-purple-500/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                <Zap className="h-3 w-3 text-purple-400" />
                <span className="text-purple-300 font-medieval">Royal Advertisement</span>
              </div>
            </div>
            
            <CardContent className="pt-12 pb-6">
              <div className="flex flex-col h-full">
                <h3 className="text-lg font-bold text-purple-300 mb-4 flex items-center">
                  <Zap className="h-4 w-4 mr-1.5" />
                  ROYAL PROMOTION SPACE
                </h3>
                
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {socialLinks.length > 0 ? (
                    socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={typeof link === 'string' ? link : link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 glass-morphism border-purple-500/20 p-2.5 rounded-lg hover:bg-purple-800/20 transition-colors group"
                      >
                        <ExternalLink size={14} className="text-purple-400" />
                        <span className="flex-1 truncate text-sm">
                          {typeof link === 'string' 
                            ? link.replace(/^https?:\/\/(www\.)?/, '') 
                            : `${link.platform}: ${link.url.replace(/^https?:\/\/(www\.)?/, '')}`}
                        </span>
                        <Badge variant="outline" className="text-[10px] bg-purple-900/60 text-purple-100 border-0">
                          {typeof link === 'string' ? '0' : link.clicks || 0} clicks
                        </Badge>
                      </a>
                    ))
                  ) : (
                    <>
                      <div className="glass-morphism border-purple-500/20 p-2.5 rounded-lg">
                        <span className="text-sm text-white/30">This space is reserved for the #1 ranked spender</span>
                      </div>
                      <div className="glass-morphism border-purple-500/20 p-2.5 rounded-lg">
                        <span className="text-sm text-white/30">The top spender can promote their social links here</span>
                      </div>
                      <div className="glass-morphism border-purple-500/20 p-2.5 rounded-lg">
                        <span className="text-sm text-white/30">Become the top spender to claim this promotion space</span>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentTopSpender.team && (
                      <Badge variant="outline" className={`bg-${currentTopSpender.team}-500/20 text-${currentTopSpender.team}-400`}>
                        <Shield size={10} className="mr-1" />
                        Team {currentTopSpender.team.charAt(0).toUpperCase() + currentTopSpender.team.slice(1)}
                      </Badge>
                    )}
                    
                    {currentTopSpender.spendStreak && currentTopSpender.spendStreak > 0 && (
                      <Badge variant="outline" className="bg-purple-800/20 text-purple-300">
                        <Clock size={10} className="mr-1" />
                        {currentTopSpender.spendStreak} week streak
                      </Badge>
                    )}
                    
                    <Badge variant="outline" className="bg-purple-900/20 text-purple-200">
                      <Crown size={10} className="mr-1" />
                      {currentTopSpender.gender === 'king' ? 'King' : currentTopSpender.gender === 'queen' ? 'Queen' : 'Ruler'}
                    </Badge>
                  </div>
                  
                  <Link to={`/profile/${currentTopSpender.username}`}>
                    <Button variant="outline" size="sm" className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-900/30">
                      <Award className="h-3.5 w-3.5 mr-1.5" />
                      View Full Royal Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="text-center mt-6 text-xs text-white/40 italic max-w-2xl mx-auto">
        "The top spender on SpendThrone receives this premium advertising space. This cosmetic perk transfers immediately when rankings change."
      </div>
    </div>
  );
};

export default TopSpenderShowcase;

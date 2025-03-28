
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, ExternalLink, Shield, Trophy, Clock, DollarSign, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { UserProfile } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';

interface TopSpenderShowcaseProps {
  topSpender: UserProfile;
}

const TopSpenderShowcase: React.FC<TopSpenderShowcaseProps> = ({ topSpender }) => {
  // Only show this component if there is a top spender and they are rank 1
  if (!topSpender || topSpender.rank !== 1) {
    return null;
  }
  
  return (
    <div className="relative w-full rounded-xl overflow-hidden glass-morphism border border-purple-500/30 mb-8">
      {/* Hero banner with gradient overlay */}
      <div className="h-32 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${topSpender.profileImage || 'https://source.unsplash.com/random/?purple,luxury'})`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        
        {/* Royal top spender badge */}
        <div className="absolute top-3 right-3 flex items-center gap-2 bg-purple-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-500/50">
          <Crown className="h-4 w-4 text-purple-300 animate-pulse" />
          <span className="text-xs text-purple-100 font-semibold">CURRENT RULER</span>
        </div>
        
        {/* Spending amount badge */}
        <div className="absolute bottom-3 right-3 glass-morphism rounded-full px-3 py-1.5 text-sm font-bold">
          <DollarSign className="h-3.5 w-3.5 inline-block text-purple-300 mr-1" />
          <span className="text-purple-100">{topSpender.amountSpent?.toLocaleString()}</span>
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Profile section */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-800 absolute -top-14">
              <img 
                src={topSpender.profileImage || "https://source.unsplash.com/random/?profile"} 
                alt={topSpender.username}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-10 pb-3">
              <h3 className="text-xl font-bold">{topSpender.username}</h3>
              <p className="text-white/70 text-sm italic mt-1">
                "{topSpender.bio || "Pay-to-win champion and current ruler of the digital hierarchy"}"
              </p>
            </div>
          </div>
          
          {/* Marketing section */}
          <div className="flex-1">
            <div className="mb-4">
              <h4 className="text-sm font-bold text-purple-300 mb-2 flex items-center">
                <Zap className="h-4 w-4 mr-1.5" />
                SPONSORED LINKS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(topSpender.socialLinks || []).map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass-morphism border-purple-500/20 p-2 rounded-lg hover:bg-purple-800/20 transition-colors group"
                  >
                    <ExternalLink size={14} className="text-purple-400" />
                    <span className="flex-1 truncate text-sm">{link.platform}: {link.url.replace(/^https?:\/\/(www\.)?/, '')}</span>
                    <Badge variant="outline" className="text-[10px] bg-purple-900/60 text-purple-100 border-0">
                      {link.clicks || 0} clicks
                    </Badge>
                  </a>
                ))}
                
                {/* If user has no social links, show placeholders */}
                {(!topSpender.socialLinks || topSpender.socialLinks.length === 0) && (
                  <>
                    <div className="glass-morphism border-purple-500/20 p-2 rounded-lg">
                      <span className="text-sm text-white/30">No links provided</span>
                    </div>
                    <div className="glass-morphism border-purple-500/20 p-2 rounded-lg">
                      <span className="text-sm text-white/30">No links provided</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {/* Team badge */}
              {topSpender.team && topSpender.team !== 'none' && (
                <Badge variant="outline" className={`bg-team-${topSpender.team}/20 text-team-${topSpender.team}`}>
                  <Shield size={10} className="mr-1" />
                  Team {topSpender.team.charAt(0).toUpperCase() + topSpender.team.slice(1)}
                </Badge>
              )}
              
              {/* Spend streak badge */}
              {topSpender.spendStreak && topSpender.spendStreak > 0 && (
                <Badge variant="outline" className="bg-purple-800/20 text-purple-300">
                  <Clock size={10} className="mr-1" />
                  {topSpender.spendStreak} week streak
                </Badge>
              )}
              
              {/* Title badge */}
              <Badge variant="outline" className="bg-purple-900/20 text-purple-200">
                <Crown size={10} className="mr-1" />
                {topSpender.gender === 'king' ? 'King' : topSpender.gender === 'queen' ? 'Queen' : 'Ruler'}
              </Badge>
              
              {/* Join date badge */}
              <Badge variant="outline" className="bg-purple-800/20 text-purple-300">
                <Trophy size={10} className="mr-1" />
                Member since {new Date(topSpender.joinDate).toLocaleDateString()}
              </Badge>
            </div>
            
            <Link to={`/profile/${topSpender.username}`}>
              <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30">
                <Award className="h-3.5 w-3.5 mr-1.5" />
                View Full Profile
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-4 text-xs text-white/40 italic text-center">
          "In our digital kingdom, money speaks. This user has paid the most to be at the top of our leaderboard."
        </div>
      </CardContent>
    </div>
  );
};

export default TopSpenderShowcase;

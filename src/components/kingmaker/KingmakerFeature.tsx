
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Crown, ArrowUp, ChevronRight, DollarSign, Zap } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { formatCurrency } from "@/utils/formatters";
import { UserProfile } from '@/types/user-consolidated';

interface KingmakerFeatureProps {
  onShowDetails?: () => void;
  isShown?: boolean;
}

const KingmakerFeature: React.FC<KingmakerFeatureProps> = ({ 
  onShowDetails, 
  isShown = false
}) => {
  const { user } = useAuth();
  const [kingmaker, setKingmaker] = useState<UserProfile | null>(null);
  
  // Mocked data
  useEffect(() => {
    // In a real implementation, this would fetch from an API
    const mockKingmaker: Partial<UserProfile> = {
      id: "king123",
      username: "RoyaltySupreme",
      displayName: "The Benevolent",
      profileImage: "/images/avatars/kingmaker.jpg",
      rank: 1,
      totalSpent: 25000,
      amountSpent: 25000,
      joinedDate: "2023-01-01",
      bio: "I raise others to glory through my royal generosity.",
      tier: "legendary",
      team: "red",
      boostCount: 154
    };
    
    // Type assertion after ensuring required fields are present
    setKingmaker(mockKingmaker as UserProfile);
  }, []);
  
  if (!kingmaker) {
    return (
      <Card className="border-royal-gold/30 bg-black/40 animate-pulse">
        <CardHeader className="pb-2">
          <div className="h-7 w-3/4 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-full bg-gray-700 rounded"></div>
        </CardHeader>
        <CardContent>
          <div className="h-36 bg-gray-800 rounded"></div>
        </CardContent>
      </Card>
    );
  }
  
  // Fix string | number id by ensuring it's a string
  const kingmakerId = kingmaker.id.toString();
  
  return (
    <Card className="border-royal-gold/30 bg-black/40 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/10 rounded-bl-full z-0"></div>
      
      <CardHeader className="pb-2 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Crown className="w-5 h-5 text-royal-gold mr-2" />
            <CardTitle className="text-royal-gold font-medieval">The Kingmaker</CardTitle>
          </div>
          <Badge variant="outline" className="border-royal-gold/50 text-royal-gold">
            Royal Feature
          </Badge>
        </div>
        <CardDescription>
          The noble who raises others to glory through generous boosts
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="flex items-center mb-3">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-royal-gold bg-black/60">
              <img 
                src={kingmaker.profileImage || "/images/avatars/default.jpg"} 
                alt={kingmaker.displayName || kingmaker.username}
                className="w-full h-full object-cover"
              />
            </div>
            <Badge 
              className="absolute -top-2 -right-2 bg-royal-gold text-black font-bold" 
              variant="secondary"
            >
              #{kingmaker.rank}
            </Badge>
          </div>
          
          <div className="ml-4">
            <h3 className="font-bold text-lg">{kingmaker.displayName || kingmaker.username}</h3>
            <p className="text-white/60 text-sm">{kingmaker.username}</p>
            <div className="flex items-center mt-1">
              <DollarSign className="w-3.5 h-3.5 text-royal-gold mr-1" />
              <span className="text-sm text-royal-gold font-medium">
                {formatCurrency(kingmaker.totalSpent || 0)}
              </span>
            </div>
          </div>
        </div>
        
        <Separator className="my-3 bg-white/10" />
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-black/30 rounded p-3 text-center">
            <p className="text-white/60 text-xs mb-1">Boosts Given</p>
            <div className="flex items-center justify-center">
              <Zap className="w-4 h-4 text-royal-gold mr-1" />
              <span className="font-bold text-lg">{kingmaker.boostCount || 0}</span>
            </div>
          </div>
          
          <div className="bg-black/30 rounded p-3 text-center">
            <p className="text-white/60 text-xs mb-1">Rank Boosted</p>
            <div className="flex items-center justify-center">
              <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="font-bold text-lg">+58</span>
            </div>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
          onClick={onShowDetails}
        >
          {isShown ? "Hide Details" : "View Details"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default KingmakerFeature;

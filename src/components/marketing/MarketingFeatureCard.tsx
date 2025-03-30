
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, Star, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts';
import useFeatureAccess from '@/hooks/use-feature-access';

interface MarketingFeatureCardProps {
  id: string;
  title: string;
  description: string;
  tier: string;
  price: number;
  icon?: React.ReactNode;
  className?: string;
  features?: string[];
}

const MarketingFeatureCard: React.FC<MarketingFeatureCardProps> = ({
  id,
  title,
  description,
  tier,
  price,
  icon,
  className,
  features = []
}) => {
  const { user } = useAuth();
  const { isUserPro, getUpgradeUrl } = useFeatureAccess();
  
  const userTier = user?.tier || 'basic';
  const userSubscription = user?.subscription;
  
  const isActiveSubscription = userSubscription?.status === 'active';
  const isTierAvailable = userTier === tier || (userSubscription?.tier === tier && isActiveSubscription);
  
  // Check if user already has this tier or higher
  const getTierLevel = (tier: string) => {
    const levels: Record<string, number> = {
      'free': 0,
      'basic': 1,
      'plus': 2,
      'premium': 3,
      'royal': 4,
      'diamond': 5
    };
    return levels[tier] || 0;
  };
  
  const currentTierLevel = getTierLevel(userTier);
  const cardTierLevel = getTierLevel(tier);
  const isCurrentTier = currentTierLevel === cardTierLevel;
  const isAlreadyUpgraded = currentTierLevel > cardTierLevel;
  
  return (
    <Card className={cn(
      "glass-morphism border-white/10 transition-all duration-300 hover:shadow-lg",
      isTierAvailable && "border-royal-gold/30",
      isCurrentTier && "border-royal-gold/50 shadow-royal-gold/20 shadow-sm",
      className
    )}>
      <CardHeader className={cn(
        "text-center",
        isCurrentTier && "bg-royal-gold/10"
      )}>
        <div className="flex justify-center mb-2">
          {icon}
        </div>
        <CardTitle className="font-bold text-lg capitalize">{title}</CardTitle>
        
        {isCurrentTier && (
          <Badge className="bg-royal-gold text-black font-medium mx-auto mt-2">
            Current Plan
          </Badge>
        )}
        
        {isAlreadyUpgraded && (
          <Badge variant="outline" className="bg-gray-800/50 border-white/20 mx-auto mt-2">
            <Check className="h-3 w-3 mr-1" />
            Included in your plan
          </Badge>
        )}
      </CardHeader>
      
      <CardContent className="pt-4">
        <p className="text-white/70 text-center mb-4">{description}</p>
        
        <div className="text-center mb-6">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-white/60 ml-1">/month</span>
        </div>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-4 w-4 mr-2 mt-1 text-royal-gold" />
              <p className="text-sm text-white/80">{feature}</p>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        {isCurrentTier ? (
          <Button className="w-full" disabled>
            Current Plan
          </Button>
        ) : isAlreadyUpgraded ? (
          <Button variant="outline" className="w-full" disabled>
            Included in {userTier}
          </Button>
        ) : (
          <Button 
            className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black"
            onClick={() => window.location.href = getUpgradeUrl(id)}
          >
            {!isUserPro && <Lock className="h-4 w-4 mr-2" />}
            {isUserPro ? 'Change Plan' : 'Upgrade Now'}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MarketingFeatureCard;

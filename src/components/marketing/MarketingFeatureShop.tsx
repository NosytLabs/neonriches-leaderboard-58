
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, Sparkles, BarChart3, Link, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { MARKETING_FEATURES } from '@/config/subscriptions';
import { useToast } from '@/hooks/use-toast';

interface Feature {
  id: string;
  name: string;
  description: string;
  price: number;
  tier: string;
}

const MarketingFeatureShop: React.FC = () => {
  const { toast } = useToast();
  const [purchasing, setPurchasing] = useState<string | null>(null);
  
  // Map of feature IDs to their respective icons
  const featureIcons: Record<string, React.ReactNode> = {
    basic_analytics: <BarChart3 className="h-5 w-5 text-blue-400" />,
    profile_boost: <Sparkles className="h-5 w-5 text-amber-400" />,
    extra_links: <Link className="h-5 w-5 text-indigo-400" />,
    profile_protection: <Shield className="h-5 w-5 text-green-400" />
  };
  
  const handlePurchase = (feature: Feature) => {
    setPurchasing(feature.id);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Feature Purchased",
        description: `You have successfully unlocked ${feature.name}!`,
        variant: "success"
      });
      setPurchasing(null);
    }, 1500);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Marketing Features</h3>
        <Badge variant="outline" className="bg-royal-gold/10 text-royal-gold">
          Premium
        </Badge>
      </div>
      
      <p className="text-white/70 text-sm">
        Enhance your profile with premium marketing features to increase visibility and engagement.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MARKETING_FEATURES.map((feature) => (
          <Card 
            key={feature.id} 
            className="overflow-hidden border-white/10 hover:border-white/20 transition-colors"
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="bg-black/30 p-3 rounded-lg">
                  {featureIcons[feature.id] || <Sparkles className="h-5 w-5 text-royal-gold" />}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{feature.name}</h4>
                  <p className="text-white/70 text-sm mb-3">{feature.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-bold">${feature.price}</span>
                    <Button 
                      size="sm" 
                      onClick={() => handlePurchase(feature)}
                      disabled={purchasing === feature.id}
                      className="space-x-1"
                    >
                      {purchasing === feature.id ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent border-white"></span>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Purchase</span>
                          <ChevronRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="border-dashed border-white/10 bg-black/10">
        <CardContent className="p-4 flex justify-between items-center">
          <div>
            <h4 className="font-medium">Upgrade to Royal Tier</h4>
            <p className="text-white/70 text-sm">Get all marketing features included with the Royal subscription</p>
          </div>
          <Button>
            <Crown className="h-4 w-4 mr-2" />
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const Crown = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
  </svg>
);

export default MarketingFeatureShop;

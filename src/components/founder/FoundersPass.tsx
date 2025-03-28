
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Scroll, Shield, Gem, Key, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';
import { UserProfile } from '@/types/user';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import MedievalIcon from '@/components/ui/medieval-icon';

interface FoundersPassProps {
  onPurchase: () => Promise<void>;
  user: UserProfile | null;
}

const FoundersPass: React.FC<FoundersPassProps> = ({ onPurchase, user }) => {
  const { toast } = useToast();
  const hasFoundersPass = user?.cosmetics?.borders?.includes('founders-pass');

  const foundersPassFeatures = [
    {
      icon: <Crown size={16} className="text-royal-gold" />,
      title: "Exclusive 'Founder' Title",
      description: "Permanent display of your early patronage with a special golden title"
    },
    {
      icon: <Shield size={16} className="text-royal-gold" />,
      title: "Royal Coat of Arms",
      description: "Custom profile decoration showing your founding status"
    },
    {
      icon: <Scroll size={16} className="text-royal-gold" />,
      title: "Extended Bio (2000 chars)",
      description: "Double the character limit of Pro users for your profile story"
    },
    {
      icon: <Gem size={16} className="text-royal-gold" />,
      title: "Priority Profile Visibility",
      description: "Your profile receives featured placement in relevant sections"
    },
    {
      icon: <Key size={16} className="text-royal-gold" />,
      title: "Exclusive Color Schemes",
      description: "Access to Founder-only royal color palettes"
    },
    {
      icon: <Award size={16} className="text-royal-gold" />,
      title: "Permanent Pro Benefits",
      description: "All Pro tier features permanently unlocked without subscription"
    }
  ];

  const handleFounderPurchase = async () => {
    try {
      await onPurchase();
      toast({
        title: "Founders Pass Acquired!",
        description: "You now hold a permanent position in the royal court history.",
      });
    } catch (error) {
      toast({
        title: "Purchase Failed",
        description: "Could not secure your Founders Pass. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="glass-morphism border-royal-gold/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-royal-gold/10 blur-xl"></div>
      <div className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-royal-purple/10 blur-xl"></div>
      
      <div className="absolute top-2 right-2">
        <Badge className="bg-royal-gold text-black font-medieval">LIMITED TIME</Badge>
      </div>
      
      <div className="absolute top-12 left-0 w-16 h-32 overflow-hidden opacity-30">
        <MedievalIcon name="pattern" size="2xl" color="gold" />
      </div>
      
      <CardHeader>
        <div className="flex items-center">
          <MedievalIcon name="crown" size="md" color="gold" animate />
          <div className="ml-3">
            <CardTitle className="font-medieval royal-gradient text-xl">Founder's Pass</CardTitle>
            <CardDescription>
              Secure your permanent place in royal history
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col items-center mb-6">
          <div className="h-20 w-20 relative mb-4">
            <MedievalIcon name="seal" size="2xl" color="gold" animate />
          </div>
          <p className="text-center text-white/80 italic font-serif mb-4 max-w-md">
            "For those who seek to immortalize their name in the royal archives, the Founder's Pass grants permanent privileges beyond the reach of common nobility."
          </p>
          <div className="glass-morphism border-royal-gold/30 py-2 px-4 rounded-full text-center font-medieval text-xl royal-gradient">
            $100
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {foundersPassFeatures.map((feature, index) => (
            <div key={index} className="glass-morphism border-white/10 rounded-lg p-3 flex items-start">
              <div className="mr-3 mt-0.5">{feature.icon}</div>
              <div>
                <h4 className="text-sm font-bold">{feature.title}</h4>
                <p className="text-xs text-white/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <RoyalButton
          variant={hasFoundersPass ? "outline" : "royalGold"}
          size="lg"
          className="w-full font-medieval"
          disabled={hasFoundersPass}
          onClick={handleFounderPurchase}
        >
          {hasFoundersPass 
            ? 'Already a Founder' 
            : 'Claim Your Founder\'s Status'}
        </RoyalButton>
        
        <p className="text-center text-white/50 text-xs mt-4">
          A one-time purchase that grants permanent access to exclusive features.
          Limited availability by royal decree.
        </p>
      </CardContent>
    </Card>
  );
};

export default FoundersPass;

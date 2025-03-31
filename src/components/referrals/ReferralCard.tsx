import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Users, Copy, Share2, Link } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getUserReferralCode } from '@/services/referralService';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { NotificationSoundOptions } from '@/types/mockery';

interface ReferralCardProps {
  userId: string;
  className?: string;
}

const ReferralCard: React.FC<ReferralCardProps> = ({ userId, className }) => {
  const [referralCode, setReferralCode] = useState<string>('');
  const [referralLink, setReferralLink] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  
  useEffect(() => {
    const loadReferralCode = async () => {
      try {
        const code = await getUserReferralCode(userId);
        setReferralCode(code);
        
        // Create referral link
        const baseUrl = window.location.origin;
        setReferralLink(`${baseUrl}/signup?ref=${code}`);
      } catch (error) {
        console.error('Error loading referral code:', error);
        toast({
          title: "Error",
          description: "Could not load your referral code. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadReferralCode();
  }, [userId, toast]);
  
  const copyToClipboard = (text: string, type: 'code' | 'link') => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    playSound('success', 0.3);
    
    toast({
      title: "Copied!",
      description: `Your referral ${type} has been copied to clipboard.`,
      variant: "default",
    });
    
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  const shareReferral = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join me on SpendThrone',
          text: 'Use my referral code to join SpendThrone, where your rank is determined by how much you spend!',
          url: referralLink,
        });
        playSound('success', 0.3);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      copyToClipboard(referralLink, 'link');
    }
  };
  
  return (
    <Card className={cn("glass-morphism border-white/10", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-royal-gold" />
          <span>Recruit More Nobles</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-white/70 text-sm">
            Share your royal invitation and earn rewards when others join your court!
            Both you and your referred noble will receive bonuses.
          </p>
          
          <div className="space-y-2">
            <label className="text-sm text-white/70">Your Unique Referral Code</label>
            <div className="flex gap-2">
              <Input
                value={referralCode}
                readOnly
                disabled={loading}
                className="font-mono bg-black/20"
              />
              <Button
                variant="outline"
                size="icon"
                disabled={loading}
                onClick={() => copyToClipboard(referralCode, 'code')}
                className="glass-morphism border-white/10"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-white/70">Referral Link</label>
            <div className="flex gap-2">
              <Input
                value={referralLink}
                readOnly
                disabled={loading}
                className="font-mono text-xs bg-black/20"
              />
              <Button
                variant="outline"
                size="icon"
                disabled={loading}
                onClick={() => copyToClipboard(referralLink, 'link')}
                className="glass-morphism border-white/10"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-xs text-white/50">
          You'll earn 10% of your referrals' first deposit
        </p>
        <Button
          variant="royalGold"
          size="sm"
          disabled={loading}
          onClick={shareReferral}
          className="flex items-center gap-1"
        >
          <Share2 className="h-4 w-4 mr-1" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReferralCard;

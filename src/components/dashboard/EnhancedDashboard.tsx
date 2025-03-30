
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Crown, Trophy, Users, DollarSign, Award, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { formatCurrency } from '@/utils/formatters';
import RealTimeLeaderboard from '@/components/leaderboard/RealTimeLeaderboard';
import MilestoneTracker from '@/components/milestones/MilestoneTracker';
import MilestonesList from '@/components/milestones/MilestonesList';
import ReferralCard from '@/components/referrals/ReferralCard';
import ReferralStats from '@/components/referrals/ReferralStats';
import ReferralsList from '@/components/referrals/ReferralsList';
import RoyalDivider from '@/components/ui/royal-divider';

const EnhancedDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>('overview');
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  
  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-white/70">Please log in to view your dashboard.</p>
      </div>
    );
  }
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    playSound('tab', 0.3);
  };
  
  return (
    <div className="container mx-auto p-4 py-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold royal-gradient">Royal Dashboard</h1>
        
        <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList className="glass-morphism">
              <TabsTrigger value="overview" className="relative">
                <Crown className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="milestones">
                <Trophy className="h-4 w-4 mr-2" />
                Milestones
              </TabsTrigger>
              <TabsTrigger value="referrals">
                <Users className="h-4 w-4 mr-2" />
                Referrals
              </TabsTrigger>
            </TabsList>
            
            <Link to="/deposit">
              <Button variant="royalGold" size="sm">
                <DollarSign className="h-4 w-4 mr-2" />
                Add Funds
              </Button>
            </Link>
          </div>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-morphism border-white/10 col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="h-5 w-5 text-royal-gold" />
                    Your Royal Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="space-y-1">
                      <p className="text-sm text-white/60">Current Rank</p>
                      <p className="text-2xl font-bold flex items-center">
                        #{user.rank || 'N/A'}
                        {user.rank === 1 && <Crown className="h-4 w-4 text-royal-gold ml-1" />}
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-white/60">Total Spent</p>
                      <p className="text-2xl font-bold font-mono">
                        {formatCurrency(user.amountSpent || 0)}
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-white/60">Wallet Balance</p>
                      <p className="text-2xl font-bold font-mono">
                        {formatCurrency(user.walletBalance || 0)}
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-white/60">Royal Tier</p>
                      <p className="text-2xl font-bold text-royal-gold">
                        {user.tier ? user.tier.charAt(0).toUpperCase() + user.tier.slice(1) : 'Basic'}
                      </p>
                    </div>
                  </div>
                  
                  <MilestoneTracker 
                    userId={user.id} 
                    currentSpent={user.amountSpent || 0} 
                    compact={true} 
                  />
                </CardContent>
              </Card>
              
              <RealTimeLeaderboard />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ReferralStats userId={user.id} />
              <ReferralCard userId={user.id} />
            </div>
          </TabsContent>
          
          <TabsContent value="milestones" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <MilestoneTracker userId={user.id} currentSpent={user.amountSpent || 0} />
              </div>
              <div className="col-span-1 md:col-span-2">
                <MilestonesList userId={user.id} currentSpent={user.amountSpent || 0} />
              </div>
            </div>
            
            <RoyalDivider label="REWARDS PREVIEW" color="gold" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-morphism border-white/10 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-royal-gold/20 flex items-center justify-center mr-3">
                    <Trophy className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold">Royal Titles</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Earn prestigious titles that display on your profile and in the leaderboard.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-royal-gold mr-2" />
                    <span>Aspiring Noble</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-royal-gold mr-2" />
                    <span>Royal Patron</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-royal-gold mr-2" />
                    <span>Digital Aristocrat</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-morphism border-white/10 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
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
                      className="text-purple-400"
                    >
                      <path d="M12 3.5c4.97 0 9 2.64 9 6s-4.03 6-9 6c-.3 0-.6 0-.89-.03-.31.35-.65.76-1.11 1.13"></path>
                      <path d="M8 19c-1.5-3-3-4-3-9.5 0-4.17 2.95-7.2 7-7.5"></path>
                      <path d="M18 10.5c0 .6-.13 1.46-.32 2.52a10 10 0 0 1-2.18 4.48"></path>
                      <path d="M12 12.5V17l-2 2"></path>
                      <line x1="10" y1="19" x2="14" y2="19"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Profile Effects</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Unlock special visual effects for your profile and leaderboard entry.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="h-4 w-4 rounded-full bg-silver-glow mr-2"></span>
                    <span>Silver Glow Effect</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-4 w-4 rounded-full bg-gold-glow mr-2"></span>
                    <span>Gold Nameplate</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-4 w-4 rounded-full animate-pulse bg-purple-400 mr-2"></span>
                    <span>Sparkle Aura Animation</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-morphism border-white/10 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
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
                      className="text-green-400"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Platform Features</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Access exclusive platform features based on your milestone achievements.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="h-4 w-4 rounded-full bg-green-400/20 text-green-400 flex items-center justify-center mr-2">✓</span>
                    <span>Custom Profile Backgrounds</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-4 w-4 rounded-full bg-green-400/20 text-green-400 flex items-center justify-center mr-2">✓</span>
                    <span>Enhanced Privacy Controls</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-4 w-4 rounded-full bg-green-400/20 text-green-400 flex items-center justify-center mr-2">✓</span>
                    <span>Royal Certificate of Status</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="referrals" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <ReferralStats userId={user.id} />
                <div className="mt-6">
                  <ReferralCard userId={user.id} />
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <ReferralsList userId={user.id} />
              </div>
            </div>
            
            <RoyalDivider label="HOW REFERRALS WORK" color="gold" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-morphism border-white/10 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-royal-gold/20 flex items-center justify-center mr-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold">Share Your Code</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Invite friends to join SpendThrone using your unique referral code or link.
                </p>
                <div className="text-sm text-white/50">
                  Share via social media, email, or messaging apps to maximize your reach.
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-morphism border-white/10 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-royal-gold/20 flex items-center justify-center mr-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold">Friends Join & Deposit</h3>
                </div>
                <p className="text-white/70 mb-4">
                  When friends sign up with your code and make their first deposit, you both get rewarded.
                </p>
                <div className="text-sm text-white/50">
                  Your referral must enter your code during registration or their first deposit.
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-morphism border-white/10 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-royal-gold/20 flex items-center justify-center mr-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold">Earn Royal Rewards</h3>
                </div>
                <p className="text-white/70 mb-4">
                  You earn 10% of their first deposit amount, and your tier multiplier increases your earnings.
                </p>
                <div className="text-sm text-white/50">
                  The more people you refer, the higher your tier and multiplier become!
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EnhancedDashboard;

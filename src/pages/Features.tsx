
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { RoyalSection } from '@/components/ui/theme-components';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import { Link } from 'react-router-dom';
import {
  Crown,
  Shield,
  Users,
  DollarSign,
  Medal,
  Sparkles,
  MessageSquare,
  Zap,
  Layout,
  Image,
  Link as LinkIcon,
  BarChart,
  ScrollText,
  UserPlus
} from 'lucide-react';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  tier = 'basic',
  callToAction
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  tier?: 'basic' | 'pro' | 'royal';
  callToAction?: string;
}) => {
  const tierColors = {
    basic: "from-purple-700/20 to-purple-900/20 border-purple-700/30",
    pro: "from-royal-gold/20 to-royal-gold-dark/20 border-royal-gold/30",
    royal: "from-royal-crimson/20 to-royal-purple/20 border-royal-purple/30"
  };

  const tierBadges = {
    basic: "Basic ($1+)",
    pro: "Pro ($25+)",
    royal: "Royal ($100+)"
  };

  return (
    <Card className={`glass-morphism border-white/10 hover:bg-gradient-to-br ${tierColors[tier]} transition-all duration-300 hover:shadow-lg hover:shadow-${tier === 'royal' ? 'royal-purple' : tier === 'pro' ? 'royal-gold' : 'purple-700'}/5`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tier === 'royal' ? 'bg-royal-purple/20' : tier === 'pro' ? 'bg-royal-gold/20' : 'bg-purple-700/20'} mr-3`}>
              {icon}
            </div>
            <CardTitle>{title}</CardTitle>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs ${tier === 'royal' ? 'bg-royal-purple/20 text-royal-purple-light' : tier === 'pro' ? 'bg-royal-gold/20 text-royal-gold' : 'bg-purple-700/20 text-purple-400'}`}>
            {tierBadges[tier]}
          </div>
        </div>
        <CardDescription className="pl-[52px]">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

const Features = () => {
  return (
    <Shell>
      <RoyalSection
        title="Features of the Realm"
        description="A comprehensive catalog of the meaningless yet prestigious features available to nobles"
        centered={true}
        className="mt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <FeatureCard 
            icon={<Crown className="h-5 w-5 text-purple-400" />}
            title="Leaderboard Rankings"
            description="Thy position in our hierarchy is determined solely by the amount of real money thou hast exchanged for digital prestige."
            tier="basic"
          />
          
          <FeatureCard 
            icon={<Shield className="h-5 w-5 text-purple-400" />}
            title="Team Allegiance" 
            description="Declare allegiance to House Red, Green, or Blue and contribute to thy team's collective standing."
            tier="basic"
          />
          
          <FeatureCard 
            icon={<DollarSign className="h-5 w-5 text-purple-400" />}
            title="Spending Streak"
            description="Maintain thy wasteful habits for consecutive weeks to earn streak bonuses and badges."
            tier="basic"
          />
          
          <FeatureCard 
            icon={<Layout className="h-5 w-5 text-royal-gold" />}
            title="Enhanced Profile Editing"
            description="Customize thy noble profile with rich text content, multiple images, and various display options."
            tier="pro"
          />
          
          <FeatureCard 
            icon={<Image className="h-5 w-5 text-royal-gold" />}
            title="Multiple Profile Images"
            description="Display up to 5 images on thy profile to better showcase thy digital opulence."
            tier="pro"
          />
          
          <FeatureCard 
            icon={<LinkIcon className="h-5 w-5 text-royal-gold" />}
            title="External Link Promotion"
            description="Add up to 5 external links to thy profile, turning it into a personal billboard."
            tier="pro"
          />
          
          <FeatureCard 
            icon={<BarChart className="h-5 w-5 text-royal-gold" />}
            title="Profile Analytics"
            description="View detailed statistics on profile views, link clicks, and engagement metrics."
            tier="pro"
          />
          
          <FeatureCard 
            icon={<Sparkles className="h-5 w-5 text-royal-gold" />}
            title="Custom Animations"
            description="Add animated RGB borders, backgrounds, and effects to thy profile to dazzle the peasantry."
            tier="pro"
          />
          
          <FeatureCard 
            icon={<MessageSquare className="h-5 w-5 text-royal-gold" />}
            title="Royal Comments"
            description="Allow other nobles to leave comments on thy profile, praising thy spending prowess."
            tier="pro"
          />
          
          <FeatureCard 
            icon={<Zap className="h-5 w-5 text-royal-purple-light" />}
            title="Profile Boosting"
            description="Temporarily increase thy profile's visibility and prominence throughout the kingdom."
            tier="royal"
          />
          
          <FeatureCard 
            icon={<Medal className="h-5 w-5 text-royal-purple-light" />}
            title="Royal Certificates"
            description="Receive on-chain certificates documenting thy remarkable financial decisions."
            tier="royal"
          />
          
          <FeatureCard 
            icon={<UserPlus className="h-5 w-5 text-royal-purple-light" />}
            title="Followers & Following"
            description="Build a network of admirers who receive notifications of thy spending activity."
            tier="royal"
          />
        </div>
      </RoyalSection>
      
      <RoyalDivider variant="ornate" color="gold" className="my-16" />
      
      <RoyalSection
        title="Noble Profile Evolution"
        description="Watch thy digital presence evolve as thou ascendest through the ranks of wasteful spending"
        centered={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card className="glass-morphism border-white/10 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 text-purple-400 mr-2" />
                Basic Nobility ($1+)
              </CardTitle>
              <CardDescription>
                The entry level of conspicuous consumption
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-purple-400 mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Basic Profile</h4>
                    <p className="text-xs text-white/70">200 character bio, one image, one external link</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-purple-400 mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Team Membership</h4>
                    <p className="text-xs text-white/70">Join one of three houses and compete collectively</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Crown className="h-4 w-4 text-purple-400 mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Leaderboard Listing</h4>
                    <p className="text-xs text-white/70">Thy rank displayed based on total spent</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/pay/fiat" className="w-full">
                <Button variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/20 text-purple-400">
                  Become Basic Noble ($1)
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="glass-morphism border-royal-gold/30 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-royal-gold/5 rounded-full blur-3xl"></div>
            <div className="h-1 bg-gradient-to-r from-royal-gold-dark via-royal-gold to-royal-gold-bright"></div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Crown className="h-5 w-5 text-royal-gold mr-2" />
                Pro Nobility ($25+)
              </CardTitle>
              <CardDescription>
                Enhanced vanity for the discerning nobility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ScrollText className="h-4 w-4 text-royal-gold mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Enhanced Profile</h4>
                    <p className="text-xs text-white/70">1000 character bio, rich text editor, up to 5 images</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <LinkIcon className="h-4 w-4 text-royal-gold mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Multiple External Links</h4>
                    <p className="text-xs text-white/70">Add up to 5 promotional links with tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Sparkles className="h-4 w-4 text-royal-gold mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Custom Animations</h4>
                    <p className="text-xs text-white/70">RGB borders, backgrounds, and animated effects</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <BarChart className="h-4 w-4 text-royal-gold mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Analytics Dashboard</h4>
                    <p className="text-xs text-white/70">Track profile views and link click data</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MessageSquare className="h-4 w-4 text-royal-gold mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Profile Comments</h4>
                    <p className="text-xs text-white/70">Allow others to praise thy lavish spending</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/pay/fiat" className="w-full">
                <Button className="w-full bg-gradient-to-r from-royal-gold/80 via-royal-gold to-royal-gold-bright text-black">
                  Upgrade to Pro Noble ($25)
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="glass-morphism border-royal-purple/30 overflow-hidden relative">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-royal-purple/5 rounded-full blur-3xl"></div>
            <div className="h-1 bg-gradient-to-r from-royal-crimson via-royal-purple to-royal-purple-light"></div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Crown className="h-5 w-5 text-royal-purple-light mr-2" />
                Royal Nobility ($100+)
              </CardTitle>
              <CardDescription>
                The pinnacle of digital excess and ostentation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Medal className="h-4 w-4 text-royal-purple-light mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Royal Certificate</h4>
                    <p className="text-xs text-white/70">On-chain certification of thy financial folly</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-royal-purple-light mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Profile Boosting</h4>
                    <p className="text-xs text-white/70">Increase visibility throughout the kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <UserPlus className="h-4 w-4 text-royal-purple-light mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Social Network</h4>
                    <p className="text-xs text-white/70">Followers, following, and activity notifications</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-royal-purple-light mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Team Leadership</h4>
                    <p className="text-xs text-white/70">Special privileges within thy chosen house</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Crown className="h-4 w-4 text-royal-purple-light mr-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">All Pro Features</h4>
                    <p className="text-xs text-white/70">Includes all Pro level features and enhancements</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/pay/fiat" className="w-full">
                <Button className="w-full bg-gradient-to-r from-royal-crimson via-royal-purple to-royal-purple-light hover:opacity-90">
                  Ascend to Royal Noble ($100)
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/50 italic max-w-2xl mx-auto">
            "Remember, noble visitor, spending larger sums grants thee absolutely no practical benefits beyond more elaborate visual flourishes and meaningless digital badges. That's precisely the point."
          </p>
        </div>
      </RoyalSection>
      
      <RoyalDivider variant="simple" color="purple" className="my-16" />
      
      <RoyalSection
        title="Founder's Privilege"
        description="Special benefits for the earliest supporters of our satirical experiment"
        centered={true}
      >
        <div className="max-w-3xl mx-auto">
          <Card className="glass-morphism border-royal-gold/30 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-royal-gold/10 to-royal-purple/10 rounded-full blur-3xl"></div>
            <CardHeader className="relative">
              <div className="absolute -top-6 -right-6 text-royal-gold/10 transform rotate-12">
                <Crown size={80} />
              </div>
              <CardTitle className="text-xl font-medieval flex items-center">
                <Crown className="h-6 w-6 text-royal-gold mr-2" />
                The Founder's Pass
              </CardTitle>
              <CardDescription>
                An exclusive honor for the first 100 nobles to spend $50+ in our realm
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-morphism border-royal-gold/20 p-4 rounded-lg">
                  <h4 className="font-bold font-medieval flex items-center text-royal-gold mb-2">
                    <Medal className="h-4 w-4 mr-2" />
                    Exclusive Cosmetics
                  </h4>
                  <p className="text-sm text-white/70">
                    Receive unique profile decorations, animations, and badges unavailable to later nobles, ensuring everyone knows you wasted money earlier than others.
                  </p>
                </div>
                
                <div className="glass-morphism border-royal-gold/20 p-4 rounded-lg">
                  <h4 className="font-bold font-medieval flex items-center text-royal-gold mb-2">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Reduced Mockery Fees
                  </h4>
                  <p className="text-sm text-white/70">
                    Enjoy a permanent 25% discount when spending real money to mock, shame, or ridicule other users through our mockery system.
                  </p>
                </div>
                
                <div className="glass-morphism border-royal-gold/20 p-4 rounded-lg">
                  <h4 className="font-bold font-medieval flex items-center text-royal-gold mb-2">
                    <Users className="h-4 w-4 mr-2" />
                    Founder's Chat Access
                  </h4>
                  <p className="text-sm text-white/70">
                    Participate in an exclusive chat channel with fellow founders, where you can collectively justify your questionable financial decisions.
                  </p>
                </div>
                
                <div className="glass-morphism border-royal-gold/20 p-4 rounded-lg">
                  <h4 className="font-bold font-medieval flex items-center text-royal-gold mb-2">
                    <Shield className="h-4 w-4 mr-2" />
                    Immunity Shield
                  </h4>
                  <p className="text-sm text-white/70">
                    Gain one free immunity shield per month, protecting you from mockery by other users for a limited time.
                  </p>
                </div>
              </div>
              
              <div className="glass-morphism border-royal-gold/20 p-5 rounded-lg text-center">
                <h3 className="text-lg font-medieval text-royal-gold mb-3">On-Chain Founder's Certificate</h3>
                <p className="text-white/70 mb-4">
                  Receive an on-chain certificate documenting your status as one of the first 100 nobles to participate in this satire of conspicuous consumption. Own permanent proof that you spent real money on absolutely nothing of practical value.
                </p>
                <div className="flex justify-center">
                  <Link to="/pay/fiat">
                    <Button className="bg-gradient-to-r from-royal-gold/90 to-royal-gold text-black hover:opacity-90">
                      <Crown className="mr-2 h-4 w-4" />
                      Claim Founder Status ($50)
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="text-center text-white/50 italic text-sm">
                <p>
                  "The Founder's Pass has limited availability by design. When we reach 100 holders, this meaningless yet highly coveted privilege will disappear forever."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </RoyalSection>
    </Shell>
  );
};

export default Features;

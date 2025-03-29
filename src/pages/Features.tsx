
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Crown, 
  DollarSign, 
  Users, 
  Award, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  Gem,
  Shield,
  MessageCircle,
  Smartphone,
  ZapOff,
  Wallet,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';

const Features: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Hero Section */}
          <section className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="bg-royal-gold/10 text-royal-gold border-royal-gold/30 mb-4">
              Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The Ultimate Pay-to-Win Experience</h1>
            <p className="text-white/70 text-lg mb-8">
              SpendThrone offers a unique social experience where your wealth directly translates to status and power.
              Explore our features designed to create the most transparent hierarchy money can buy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/signup">
                  Start Your Reign
                  <Crown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/leaderboard">
                  View Leaderboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
          
          {/* Core Features Grid */}
          <section>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold">Core Features</h2>
              <div className="hidden md:block">
                <Button variant="link" asChild className="text-royal-gold">
                  <Link to="/signup">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Dollar-Driven Rank */}
              <div className="glass-morphism border-white/10 rounded-lg overflow-hidden group hover:border-royal-gold/30 transition-all">
                <div className="bg-gradient-to-br from-royal-gold/10 to-royal-gold/5 p-6">
                  <div className="h-12 w-12 rounded-lg bg-royal-gold/20 flex items-center justify-center mb-4 group-hover:bg-royal-gold/30 transition-all">
                    <DollarSign className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Dollar-Driven Rank</h3>
                  <p className="text-white/70 mb-4">
                    Your rank is exactly equal to how much you've spent. $1 = 1 rank point, creating the most
                    transparent hierarchy on the internet.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Permanent leaderboard that never resets</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Daily, weekly, and monthly spending charts</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Achievement badges for spending milestones</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 flex justify-end bg-black/30">
                  <Button variant="link" asChild size="sm" className="text-royal-gold p-0">
                    <Link to="/leaderboard" className="flex items-center">
                      <span>View Leaderboard</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* RGB Teams */}
              <div className="glass-morphism border-white/10 rounded-lg overflow-hidden group hover:border-royal-gold/30 transition-all">
                <div className="bg-gradient-to-br from-royal-gold/10 to-royal-gold/5 p-6">
                  <div className="h-12 w-12 rounded-lg bg-royal-gold/20 flex items-center justify-center mb-4 group-hover:bg-royal-gold/30 transition-all">
                    <Users className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">RGB Teams</h3>
                  <p className="text-white/70 mb-4">
                    Join Red (neon fire), Green (lime zap), or Blue (cool pulse) and compete for team dominance through collective spending.
                  </p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="h-8 bg-red-500/80 rounded flex items-center justify-center text-xs font-bold">Red Team</div>
                    <div className="h-8 bg-green-500/80 rounded flex items-center justify-center text-xs font-bold">Green Team</div>
                    <div className="h-8 bg-blue-500/80 rounded flex items-center justify-center text-xs font-bold">Blue Team</div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Team-based challenges and rewards</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Exclusive team chat rooms</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 flex justify-end bg-black/30">
                  <Button variant="link" asChild size="sm" className="text-royal-gold p-0">
                    <Link to="/teams" className="flex items-center">
                      <span>Explore Teams</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Profile Customization */}
              <div className="glass-morphism border-white/10 rounded-lg overflow-hidden group hover:border-royal-gold/30 transition-all">
                <div className="bg-gradient-to-br from-royal-gold/10 to-royal-gold/5 p-6">
                  <div className="h-12 w-12 rounded-lg bg-royal-gold/20 flex items-center justify-center mb-4 group-hover:bg-royal-gold/30 transition-all">
                    <Sparkles className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Profile Customization</h3>
                  <p className="text-white/70 mb-4">
                    Unlock premium customization options for your profile based on your tier level, with higher tiers accessing more prestigious features.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="glass-morphism border-white/10 p-2 rounded text-center text-sm">
                      <span className="text-white/90 block font-bold">Free Tier</span>
                      <span className="text-white/60 text-xs">Basic Profile</span>
                    </div>
                    <div className="glass-morphism border-royal-gold/20 bg-royal-gold/10 p-2 rounded text-center text-sm">
                      <span className="text-royal-gold block font-bold">Pro Tier</span>
                      <span className="text-white/60 text-xs">Enhanced Profile</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">RGB borders, backgrounds, and effects</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Custom titles and badges</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 flex justify-end bg-black/30">
                  <Button variant="link" asChild size="sm" className="text-royal-gold p-0">
                    <Link to="/royal-prestige" className="flex items-center">
                      <span>See Customization Options</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Royal Mockery */}
              <div className="glass-morphism border-white/10 rounded-lg overflow-hidden group hover:border-royal-gold/30 transition-all">
                <div className="bg-gradient-to-br from-royal-gold/10 to-royal-gold/5 p-6">
                  <div className="h-12 w-12 rounded-lg bg-royal-gold/20 flex items-center justify-center mb-4 group-hover:bg-royal-gold/30 transition-all">
                    <Crown className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Royal Mockery</h3>
                  <p className="text-white/70 mb-4">
                    Spend to apply temporary visual effects to other users' profiles, or purchase immunity to protect yourself from mockery.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Multiple mockery tiers and effects</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Protection and immunity options</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Public hall of shame leaderboard</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 flex justify-end bg-black/30">
                  <Button variant="link" asChild size="sm" className="text-royal-gold p-0">
                    <Link to="/mockery" className="flex items-center">
                      <span>Explore Mockery</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Royal Boutique */}
              <div className="glass-morphism border-white/10 rounded-lg overflow-hidden group hover:border-royal-gold/30 transition-all">
                <div className="bg-gradient-to-br from-royal-gold/10 to-royal-gold/5 p-6">
                  <div className="h-12 w-12 rounded-lg bg-royal-gold/20 flex items-center justify-center mb-4 group-hover:bg-royal-gold/30 transition-all">
                    <Gem className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Royal Boutique</h3>
                  <p className="text-white/70 mb-4">
                    Shop for exclusive cosmetic items to enhance your profile and showcase your status.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Rare and limited-edition items</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Rotating selection of premium cosmetics</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Special event collections</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 flex justify-end bg-black/30">
                  <Button variant="link" asChild size="sm" className="text-royal-gold p-0">
                    <Link to="/boutique" className="flex items-center">
                      <span>Visit Boutique</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Royal Certificate */}
              <div className="glass-morphism border-white/10 rounded-lg overflow-hidden group hover:border-royal-gold/30 transition-all">
                <div className="bg-gradient-to-br from-royal-gold/10 to-royal-gold/5 p-6">
                  <div className="h-12 w-12 rounded-lg bg-royal-gold/20 flex items-center justify-center mb-4 group-hover:bg-royal-gold/30 transition-all">
                    <Award className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Royal Certificate</h3>
                  <p className="text-white/70 mb-4">
                    Generate a prestigious certificate of nobility documenting your rank and wealth, suitable for sharing or printing.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Personalized with your profile details</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Shareable on social media</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                      <span className="text-white/60 text-sm">Optional NFT certificate for higher tiers</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 flex justify-end bg-black/30">
                  <Button variant="link" asChild size="sm" className="text-royal-gold p-0">
                    <Link to="/certificate/example" className="flex items-center">
                      <span>View Sample Certificate</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Advanced Features */}
          <section>
            <div className="flex items-center mb-10">
              <Shield className="h-6 w-6 text-royal-gold mr-2" />
              <h2 className="text-3xl font-bold">Advanced Features</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 text-royal-gold mr-2" />
                  Royal Chat Systems
                </h3>
                <p className="text-white/70 mb-4">
                  Exclusive chat features based on your tier and team membership.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">Team-specific chat rooms</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">Whale-only private discussions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">Royal emoji reactions for higher tiers</span>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <Button variant="link" asChild size="sm" className="text-royal-gold p-0">
                    <Link to="/chat">
                      <span>Explore Chat</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Smartphone className="h-5 w-5 text-royal-gold mr-2" />
                  Mobile Experience
                </h3>
                <p className="text-white/70 mb-4">
                  Spend on the go with our fully responsive mobile experience.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">Responsive design for all devices</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">Real-time notifications</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">Mobile-optimized payment methods</span>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <Button variant="link" size="sm" className="text-royal-gold p-0 cursor-default">
                    <span>Available on all devices</span>
                  </Button>
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <ZapOff className="h-5 w-5 text-royal-gold mr-2" />
                  Anti-Talent System
                </h3>
                <p className="text-white/70 mb-4">
                  Our revolutionary system ensures that no talents, skills, or merits matter—only your spending.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">Perfect equality through spending disparity</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">No skill-based achievements</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">Pure monetary meritocracy</span>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <Button variant="link" size="sm" className="text-royal-gold p-0 cursor-default">
                    <span>Built into our philosophy</span>
                  </Button>
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Wallet className="h-5 w-5 text-royal-gold mr-2" />
                  Multiple Payment Options
                </h3>
                <p className="text-white/70 mb-4">
                  Flexible payment methods to maximize your spending potential.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">Credit/debit cards and PayPal</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">Cryptocurrency support (BTC, ETH, SOL)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold flex-shrink-0 mr-1 mt-0.5" />
                    <span className="text-white/60">Secure payment processing</span>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <Button variant="link" asChild size="sm" className="text-royal-gold p-0">
                    <Link to="/pay/crypto">
                      <span>View Payment Options</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg md:col-span-2">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 text-royal-gold mr-2" />
                  Social Analytics
                </h3>
                <p className="text-white/70 mb-4">
                  Premium users gain access to detailed profile analytics and visibility metrics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="glass-morphism bg-white/5 p-4 rounded-lg text-center">
                    <span className="block text-3xl font-bold text-royal-gold mb-1">5.2K</span>
                    <span className="text-white/60 text-sm">Profile Views</span>
                  </div>
                  <div className="glass-morphism bg-white/5 p-4 rounded-lg text-center">
                    <span className="block text-3xl font-bold text-royal-gold mb-1">43%</span>
                    <span className="text-white/60 text-sm">Engagement Rate</span>
                  </div>
                  <div className="glass-morphism bg-white/5 p-4 rounded-lg text-center">
                    <span className="block text-3xl font-bold text-royal-gold mb-1">127</span>
                    <span className="text-white/60 text-sm">Link Clicks</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button variant="link" asChild size="sm" className="text-royal-gold p-0">
                    <Link to="/dashboard">
                      <span>View Dashboard</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="glass-morphism border-white/10 overflow-hidden rounded-lg">
            <div className="bg-gradient-to-br from-royal-navy via-royal-purple to-royal-crimson p-8 text-center">
              <div className="h-20 w-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-royal-gold/20 rounded-full animate-ping"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Crown className="h-10 w-10 text-royal-gold animate-pulse" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 font-royal">Ready to Claim Your Throne?</h2>
              <p className="text-lg mb-6 max-w-xl mx-auto">
                Take your place in our hierarchy today. Remember, in SpendThrone, your worth is determined solely by your wallet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-royal-gold hover:bg-royal-gold/90 text-black">
                  <Link to="/signup">Start Your Reign</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                  <Link to="/leaderboard">View the Hierarchy</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Features;

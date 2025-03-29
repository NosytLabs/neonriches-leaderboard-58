
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { 
  Crown, Coins, Trophy, Shield, Users, Sparkles, 
  Gift, Star, AlertTriangle, Wallet, Clock, Scroll 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ThroneChair from '@/components/brand/ThroneChair';

const Features = () => {
  return (
    <Shell>
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <ThroneChair size="md" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight royal-gradient font-medieval">
            Royal Features
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the extravagant features that make SpendThrone the ultimate pay-to-win social experience, where your wealth truly determines your worth.
          </p>
        </div>
        
        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto glass-morphism mb-8">
            <TabsTrigger value="core" className="font-medieval">Core Features</TabsTrigger>
            <TabsTrigger value="social" className="font-medieval">Social Features</TabsTrigger>
            <TabsTrigger value="premium" className="font-medieval">Premium Features</TabsTrigger>
          </TabsList>
          
          {/* Core Features */}
          <TabsContent value="core" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pay to Rank Feature */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Crown className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Pay-to-Rank System</CardTitle>
                  <CardDescription>
                    Your spending determines your nobility level
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    The core of SpendThrone: spend more, rank higher. It's that simple. Your rank is calculated based solely on your total spending.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/60">1$ = 1 Rank Point</span>
                      <span className="text-royal-gold">Permanent</span>
                    </div>
                    <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-royal-gold/70 to-royal-gold animate-pulse" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3 text-xs text-white/60">
                    <p>"I spent $500 and now I'm Duke of the Digital Realm!" - Satisfied Noble</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Leaderboard Feature */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Trophy className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Persistent Leaderboard</CardTitle>
                  <CardDescription>
                    A permanent showcase of the wealthiest nobles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Our royal leaderboard never resets. Your position is a testament to your financial commitment to digital status.
                  </p>
                  <div className="space-y-3 my-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Global Ranks</span>
                      <span className="text-royal-gold">Always Visible</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Team Rankings</span>
                      <span className="text-royal-gold">Weekly Updates</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Royal Titles</span>
                      <span className="text-royal-gold">By Spending Tier</span>
                    </div>
                  </div>
                  <Link to="/leaderboard">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      View Leaderboard
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Royal Teams Feature */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Shield className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Royal Houses</CardTitle>
                  <CardDescription>
                    Join a powerful faction and compete together
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Pledge allegiance to one of three royal houses: The Crimson Dragons, The Emerald Vipers, or The Sapphire Phoenixes.
                  </p>
                  <div className="grid grid-cols-3 gap-2 my-4">
                    <div className="bg-team-red/20 rounded-lg p-2 text-center">
                      <div className="h-6 w-6 bg-team-red rounded-full mx-auto mb-1"></div>
                      <span className="text-xs text-white/70">Dragons</span>
                    </div>
                    <div className="bg-team-green/20 rounded-lg p-2 text-center">
                      <div className="h-6 w-6 bg-team-green rounded-full mx-auto mb-1"></div>
                      <span className="text-xs text-white/70">Vipers</span>
                    </div>
                    <div className="bg-team-blue/20 rounded-lg p-2 text-center">
                      <div className="h-6 w-6 bg-team-blue rounded-full mx-auto mb-1"></div>
                      <span className="text-xs text-white/70">Phoenixes</span>
                    </div>
                  </div>
                  <Link to="/teams">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      Choose Your House
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Royal Cosmetics */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Sparkles className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Royal Cosmetics</CardTitle>
                  <CardDescription>
                    Adorn your profile with prestigious decorations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Customize your royal profile with borders, colors, fonts, and more. Show off your status with exclusive cosmetic items.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-royal-gold to-amber-500"></div>
                      <span className="text-sm text-white/70">Legendary Borders</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-royal-purple"></div>
                      <span className="text-sm text-white/70">Epic Color Schemes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-royal-blue"></div>
                      <span className="text-sm text-white/70">Rare Font Styles</span>
                    </div>
                  </div>
                  <Link to="/boutique">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      Visit Boutique
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Wishing Well */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Gift className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Royal Wishing Well</CardTitle>
                  <CardDescription>
                    Cast coins for a chance at rare cosmetics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Toss your coins into the magical wishing well for a chance to receive exclusive cosmetic items of varying rarity.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/60">Cosmetic Rewards</span>
                      <span className="text-royal-gold">5 Rarity Tiers</span>
                    </div>
                    <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-gray-500 via-green-500 via-blue-500 via-purple-500 to-royal-gold"></div>
                    </div>
                    <div className="flex justify-between text-xs text-white/60">
                      <span>Common</span>
                      <span>Uncommon</span>
                      <span>Rare</span>
                      <span>Epic</span>
                      <span>Legendary</span>
                    </div>
                  </div>
                  <Link to="/wishingwell">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      Make a Wish
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Royal Mockery */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Star className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Royal Mockery</CardTitle>
                  <CardDescription>
                    Pay to shame other users in public
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Spend your wealth to publicly mock other users. Higher payments result in more dramatic and longer-lasting effects.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/60">Mockery Types</span>
                      <span className="text-royal-gold">12 Options</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs text-white/60">
                      <div className="bg-black/20 rounded-lg p-1">Tomatoes</div>
                      <div className="bg-black/20 rounded-lg p-1">Dunce Cap</div>
                      <div className="bg-black/20 rounded-lg p-1">Stocks</div>
                      <div className="bg-black/20 rounded-lg p-1">Silence</div>
                      <div className="bg-black/20 rounded-lg p-1">Jester</div>
                      <div className="bg-black/20 rounded-lg p-1">Immunity</div>
                    </div>
                  </div>
                  <Link to="/mockery">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      Enter Court of Mockery
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Social Features */}
          <TabsContent value="social" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Royal Profiles */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Users className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Royal Profiles</CardTitle>
                  <CardDescription>
                    Showcase your wealth and status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Customize your royal profile with images, bio, and other personal information to impress the kingdom.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Basic Profile</span>
                      <span className="text-royal-gold">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Premium Profile</span>
                      <span className="text-royal-gold">$25+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Royal Profile</span>
                      <span className="text-royal-gold">$100+</span>
                    </div>
                  </div>
                  <Link to="/profile">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      View Your Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Team Chat */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Shield className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>House Chat</CardTitle>
                  <CardDescription>
                    Communicate with your house members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Join exclusive chat rooms for your royal house, strategize with your fellow nobles, and plot your rise to power.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">House Chat</span>
                      <span className="text-royal-gold">House Members Only</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Royal Council</span>
                      <span className="text-royal-gold">Top 10 Members</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Whale Chat</span>
                      <span className="text-royal-gold">$1000+ Spenders</span>
                    </div>
                  </div>
                  <Link to="/chat">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      Enter Chat Rooms
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Certificates */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Scroll className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Royal Certificates</CardTitle>
                  <CardDescription>
                    Prestigious documents certifying your nobility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Receive official royal certificates that commemorate your spending milestones and achievements in the kingdom.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Digital Certificate</span>
                      <span className="text-royal-gold">All Nobles</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Printable Version</span>
                      <span className="text-royal-gold">$50+ Nobles</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">NFT Certificate</span>
                      <span className="text-royal-gold">$500+ Nobles</span>
                    </div>
                  </div>
                  <Link to="/certificate">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      View Your Certificate
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Public Events */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Star className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Royal Events</CardTitle>
                  <CardDescription>
                    Special kingdom-wide celebrations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Participate in seasonal events with special rewards, competitions, and limited-time opportunities to display your wealth.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Seasonal Sales</span>
                      <span className="text-royal-gold">Quarterly</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Public Shaming Festival</span>
                      <span className="text-royal-gold">Monthly</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Royal Tournament</span>
                      <span className="text-royal-gold">Bi-Annual</span>
                    </div>
                  </div>
                  <Link to="/events">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      View Current Events
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Trending Page */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Trophy className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Trending Nobles</CardTitle>
                  <CardDescription>
                    See who's rising quickly in the ranks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    View the fastest-rising nobles, biggest spenders of the day, and most mocked users in our trending section.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Daily Trends</span>
                      <span className="text-royal-gold">Updated Hourly</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Weekly Highlights</span>
                      <span className="text-royal-gold">Every Monday</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Hall of Fame</span>
                      <span className="text-royal-gold">All-Time Best</span>
                    </div>
                  </div>
                  <Link to="/trending">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      See What's Trending
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Royal News */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Scroll className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Royal Herald</CardTitle>
                  <CardDescription>
                    News and updates from the kingdom
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Stay updated on the latest happenings in the kingdom, including noble achievements, royal scandals, and upcoming events.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Daily News</span>
                      <span className="text-royal-gold">For All</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Noble Gossip</span>
                      <span className="text-royal-gold">$25+ Nobles</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Royal Secrets</span>
                      <span className="text-royal-gold">$100+ Nobles</span>
                    </div>
                  </div>
                  <Link to="/news">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      Read the Royal Herald
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Premium Features */}
          <TabsContent value="premium" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Subscription Tiers */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Crown className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Premium Subscriptions</CardTitle>
                  <CardDescription>
                    Enhanced features for dedicated nobles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Subscribe to premium tiers for exclusive benefits, enhanced customization options, and special privileges.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Basic</span>
                      <span className="text-royal-gold">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Premium</span>
                      <span className="text-royal-gold">$25/month</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Royal</span>
                      <span className="text-royal-gold">$100/month</span>
                    </div>
                  </div>
                  <Link to="/subscription">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      View Subscription Plans
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Solana Integration */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Wallet className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Crypto Integration</CardTitle>
                  <CardDescription>
                    Connect Solana wallet for royal transactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Connect your Solana wallet for seamless payments, NFT certificates, and exclusive crypto-only features.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Wallet Connection</span>
                      <span className="text-royal-gold">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">SOL Payments</span>
                      <span className="text-royal-gold">All Users</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">NFT Certificates</span>
                      <span className="text-royal-gold">$500+ Spenders</span>
                    </div>
                  </div>
                  <Link to="/wallet">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      Connect Wallet
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Auto-Spending */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Clock className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Auto-Spending</CardTitle>
                  <CardDescription>
                    Schedule regular payments to maintain rank
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Set up automated spending schedules to ensure your rank continues to rise even when you're away from the kingdom.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Daily Auto-Spend</span>
                      <span className="text-royal-gold">Premium+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Weekly Auto-Spend</span>
                      <span className="text-royal-gold">Basic+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Spending Strategy</span>
                      <span className="text-royal-gold">Royal Only</span>
                    </div>
                  </div>
                  <Link to="/auto-spend">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      Setup Auto-Spending
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Analytics Dashboard */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Trophy className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Royal Analytics</CardTitle>
                  <CardDescription>
                    Detailed insights into your royal journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Access detailed analytics about your spending, rank changes, profile views, and how you compare to other nobles.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Basic Stats</span>
                      <span className="text-royal-gold">All Users</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Detailed Analytics</span>
                      <span className="text-royal-gold">Premium+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Predictive Insights</span>
                      <span className="text-royal-gold">Royal Only</span>
                    </div>
                  </div>
                  <Link to="/analytics">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      View Your Analytics
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Gift Cards */}
              <Card className="glass-morphism border-royal-gold/20 hover:border-royal-gold/50 transition-all">
                <CardHeader>
                  <Gift className="h-10 w-10 text-royal-gold mb-2" />
                  <CardTitle>Royal Gift Cards</CardTitle>
                  <CardDescription>
                    Bestow wealth upon your royal friends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    Purchase gift cards to bestow upon your friends and allies, allowing them to increase their own rank and status.
                  </p>
                  <div className="space-y-2 my-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Digital Gift Cards</span>
                      <span className="text-royal-gold">$10-$1000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Custom Messages</span>
                      <span className="text-royal-gold">Included</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Bulk Gifting</span>
                      <span className="text-royal-gold">Premium+</span>
                    </div>
                  </div>
                  <Link to="/gift-cards">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      Purchase Gift Cards
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Disclaimers */}
              <Card className="glass-morphism border-royal-purple/20 hover:border-royal-purple/50 transition-all">
                <CardHeader>
                  <AlertTriangle className="h-10 w-10 text-royal-purple mb-2" />
                  <CardTitle>Royal Disclaimers</CardTitle>
                  <CardDescription>
                    Important notes for all kingdom citizens
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">
                    SpendThrone is a satirical platform. All transactions contribute to purely digital status with no real-world value or benefits.
                  </p>
                  <div className="space-y-2 my-4 text-sm text-white/70">
                    <p>• All purchases are final and non-refundable</p>
                    <p>• SpendThrone is parody and satire</p>
                    <p>• No real nobility titles are conferred</p>
                    <p>• Please spend responsibly</p>
                  </div>
                  <Link to="/terms">
                    <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10">
                      View Full Terms
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-royal-crimson/20 to-royal-purple/20 rounded-lg p-8 text-center mt-12">
          <h2 className="text-3xl font-medieval royal-gradient mb-4">
            Ready to Claim Your Royal Status?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            The kingdom awaits your arrival. Join SpendThrone now and begin your journey to digital nobility through the power of your wallet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-royal-gold text-black hover:bg-royal-gold/90 royal-button-enhanced">
                Begin Your Royal Journey
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button variant="outline" className="glass-morphism border-white/10 hover:bg-white/10">
                View Current Nobility
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default Features;

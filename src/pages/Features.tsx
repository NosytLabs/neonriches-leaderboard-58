
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Crown, 
  Shield, 
  Target, 
  Gem, 
  ArrowRight, 
  Users, 
  MessageSquare, 
  ScrollText, 
  BookOpen, 
  Coins, 
  Sparkles 
} from 'lucide-react';
import { HeadingText } from '@/components/ui/heading-text';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import { RoyalSection } from '@/components/ui/theme-components';

const Features = () => {
  return (
    <Shell>
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <Crown size={40} className="text-royal-gold" />
          </div>
          <HeadingText 
            title="Noble Features & Royal Privileges" 
            description="Discover the many ways to flaunt thy wealth and status in our digital kingdom"
            gradient={true}
            align="center"
            as="h1"
          />
        </div>
        
        <Card className="glass-morphism border-royal-gold/10 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-royal-gold" />
                  </div>
                  <h2 className="text-2xl font-bold royal-gradient">Dollar-Driven Rank</h2>
                </div>
                
                <p className="text-white/70 mb-4">
                  The most transparent hierarchy ever devised! Each dollar spent equals one unit of rank. No skills, talent, or redeeming qualities needed—just the willingness to part with real currency for digital prestige.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-royal-gold/10 flex items-center justify-center mt-0.5">
                      <Crown className="h-3 w-3 text-royal-gold" />
                    </div>
                    <span className="text-white/70">Persistent leaderboard that never resets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-royal-gold/10 flex items-center justify-center mt-0.5">
                      <Crown className="h-3 w-3 text-royal-gold" />
                    </div>
                    <span className="text-white/70">Real-time updates as nobles outspend each other</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-royal-gold/10 flex items-center justify-center mt-0.5">
                      <Crown className="h-3 w-3 text-royal-gold" />
                    </div>
                    <span className="text-white/70">Noble titles based on thy rank (and nothing else)</span>
                  </li>
                </ul>
                
                <Link to="/leaderboard">
                  <Button variant="outline" className="border-royal-gold/30 hover:border-royal-gold/70">
                    <span>View Rankings</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative h-full min-h-[300px] md:min-h-full overflow-hidden bg-gradient-to-br from-black/50 to-black/90">
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url('/throne-assets/features/leaderboard.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="glass-morphism border-white/10 p-6 rounded-lg w-full max-w-md bg-gradient-to-r from-black/30 to-black/10">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold royal-gradient mb-2">Leaderboard Preview</h3>
                      <p className="text-white/60 text-sm">Witness the glory of nobles ranked purely by wealth</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-royal-gold/20 to-transparent rounded-lg border border-royal-gold/30">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-royal-gold/20 flex items-center justify-center">
                            <span className="font-bold">1</span>
                          </div>
                          <span className="font-bold">DukeOfDollars</span>
                        </div>
                        <span className="font-mono font-bold">$25,000</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-white/5 to-transparent rounded-lg border border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="font-bold">2</span>
                          </div>
                          <span>EarlOfExcess</span>
                        </div>
                        <span className="font-mono">$15,750</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-white/5 to-transparent rounded-lg border border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="font-bold">3</span>
                          </div>
                          <span>LordMoneybags</span>
                        </div>
                        <span className="font-mono">$10,325</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-royal-gold/10 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-full min-h-[300px] md:min-h-full overflow-hidden bg-gradient-to-br from-black/50 to-black/90 order-2 md:order-1">
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url('/throne-assets/features/profile-editor.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="glass-morphism border-white/10 p-6 rounded-lg w-full max-w-md bg-gradient-to-r from-black/30 to-black/10">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold royal-gradient mb-2">Profile Tiers</h3>
                      <p className="text-white/60 text-sm">Pay more, get more (meaningless features)</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-gradient-to-r from-gray-700/20 to-transparent rounded-lg border border-gray-700/30">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold">Basic Noble</div>
                          <div className="text-sm bg-gray-700/30 px-2 py-0.5 rounded">$1+</div>
                        </div>
                        <p className="text-sm text-white/60">Basic profile with limited customization</p>
                      </div>
                      
                      <div className="p-3 bg-gradient-to-r from-royal-gold/20 to-transparent rounded-lg border border-royal-gold/30">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold">Pro Noble</div>
                          <div className="text-sm bg-royal-gold/30 px-2 py-0.5 rounded">$25+</div>
                        </div>
                        <p className="text-sm text-white/60">Enhanced profile with animations, custom colors, and more!</p>
                      </div>
                      
                      <div className="p-3 bg-gradient-to-r from-royal-purple/20 to-transparent rounded-lg border border-royal-purple/30">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold">Royal Noble</div>
                          <div className="text-sm bg-royal-purple/30 px-2 py-0.5 rounded">$100+</div>
                        </div>
                        <p className="text-sm text-white/60">Ultimate profile with exclusive effects and privileges</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
                    <Gem className="h-5 w-5 text-royal-gold" />
                  </div>
                  <h2 className="text-2xl font-bold royal-gradient">Customizable Profiles</h2>
                </div>
                
                <p className="text-white/70 mb-4">
                  Create thy digital noble persona with our tiered profile system where those who spend more gain access to increasingly meaningless cosmetic features!
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-royal-gold/10 flex items-center justify-center mt-0.5">
                      <Crown className="h-3 w-3 text-royal-gold" />
                    </div>
                    <span className="text-white/70">Basic profiles for peasant spenders ($1+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-royal-gold/10 flex items-center justify-center mt-0.5">
                      <Crown className="h-3 w-3 text-royal-gold" />
                    </div>
                    <span className="text-white/70">Pro profiles with animated borders, custom colors, and more ($25+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-royal-gold/10 flex items-center justify-center mt-0.5">
                      <Crown className="h-3 w-3 text-royal-gold" />
                    </div>
                    <span className="text-white/70">Royal profiles with exclusive effects, custom gradients, and analytics ($100+)</span>
                  </li>
                </ul>
                
                <Link to="/profile/DukeOfDollars">
                  <Button variant="outline" className="border-royal-gold/30 hover:border-royal-gold/70">
                    <span>View Sample Profile</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-royal-gold/10 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-royal-gold" />
                  </div>
                  <h2 className="text-2xl font-bold royal-gradient">Royal Houses (Teams)</h2>
                </div>
                
                <p className="text-white/70 mb-4">
                  Pledge thy allegiance to one of three noble houses, each competing for collective prestige through the combined spending of their members!
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-royal-crimson flex items-center justify-center mt-0.5">
                      <Shield className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/70"><span className="text-royal-crimson font-bold">House Red</span> - Flamboyant nobles who believe in conspicuous consumption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                      <Shield className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/70"><span className="text-emerald-500 font-bold">House Green</span> - Strategic spenders focused on consistent contributions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-royal-navy flex items-center justify-center mt-0.5">
                      <Shield className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/70"><span className="text-royal-navy font-bold">House Blue</span> - Analytical nobles who calculate optimal spending patterns</span>
                  </li>
                </ul>
                
                <Link to="/teams">
                  <Button variant="outline" className="border-royal-gold/30 hover:border-royal-gold/70">
                    <span>View Houses</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative h-full min-h-[300px] md:min-h-full overflow-hidden bg-gradient-to-br from-black/50 to-black/90">
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url('/throne-assets/features/teams.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="glass-morphism border-white/10 p-6 rounded-lg w-full max-w-md bg-gradient-to-r from-black/30 to-black/10">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold royal-gradient mb-2">House Rankings</h3>
                      <p className="text-white/60 text-sm">Teams compete through collective spending</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-royal-crimson/20 to-transparent rounded-lg border border-royal-crimson/30">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-royal-crimson flex items-center justify-center">
                            <Shield className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-bold text-royal-crimson">House Red</span>
                        </div>
                        <span className="font-mono">$103,750</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-royal-navy/20 to-transparent rounded-lg border border-royal-navy/30">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-royal-navy flex items-center justify-center">
                            <Shield className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-bold text-royal-navy">House Blue</span>
                        </div>
                        <span className="font-mono">$85,325</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-lg border border-emerald-500/30">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                            <Shield className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-bold text-emerald-500">House Green</span>
                        </div>
                        <span className="font-mono">$72,980</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-royal-gold/10 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-full min-h-[300px] md:min-h-full overflow-hidden bg-gradient-to-br from-black/50 to-black/90 order-2 md:order-1">
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url('/throne-assets/features/mockery.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="glass-morphism border-white/10 p-6 rounded-lg w-full max-w-md bg-gradient-to-r from-black/30 to-black/10">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold royal-gradient mb-2">Mockery Options</h3>
                      <p className="text-white/60 text-sm">Pay to subject others to public ridicule</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-gradient-to-r from-royal-crimson/20 to-transparent rounded-lg border border-royal-crimson/30">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold">Tomatoes</div>
                          <div className="text-sm bg-royal-crimson/30 px-2 py-0.5 rounded">$5</div>
                        </div>
                        <p className="text-sm text-white/60">Pelt the target with virtual rotten tomatoes</p>
                      </div>
                      
                      <div className="p-3 bg-gradient-to-r from-amber-600/20 to-transparent rounded-lg border border-amber-600/30">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold">Stocks</div>
                          <div className="text-sm bg-amber-600/30 px-2 py-0.5 rounded">$25</div>
                        </div>
                        <p className="text-sm text-white/60">Place the target in public stocks for all to ridicule</p>
                      </div>
                      
                      <div className="p-3 bg-gradient-to-r from-royal-purple/20 to-transparent rounded-lg border border-royal-purple/30">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold">Court Jester</div>
                          <div className="text-sm bg-royal-purple/30 px-2 py-0.5 rounded">$100</div>
                        </div>
                        <p className="text-sm text-white/60">The ultimate shame - appoint as the royal court's jester</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-royal-gold" />
                  </div>
                  <h2 className="text-2xl font-bold royal-gradient">Court Mockery</h2>
                </div>
                
                <p className="text-white/70 mb-4">
                  Spend thy gold to publicly shame other nobles with various medieval punishments! A most delightful way to assert dominance while ensuring our treasury continues to grow.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-royal-gold/10 flex items-center justify-center mt-0.5">
                      <Crown className="h-3 w-3 text-royal-gold" />
                    </div>
                    <span className="text-white/70">Purchase various mockery effects to apply to other users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-royal-gold/10 flex items-center justify-center mt-0.5">
                      <Crown className="h-3 w-3 text-royal-gold" />
                    </div>
                    <span className="text-white/70">Buy protection from mockery effects (more spending!)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-royal-gold/10 flex items-center justify-center mt-0.5">
                      <Crown className="h-3 w-3 text-royal-gold" />
                    </div>
                    <span className="text-white/70">Visit the Hall of Shame to see currently mocked nobles</span>
                  </li>
                </ul>
                
                <Link to="/mockery">
                  <Button variant="outline" className="border-royal-gold/30 hover:border-royal-gold/70">
                    <span>Visit Court Mockery</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <RoyalDivider variant="ornate" color="gold" />
        
        <RoyalSection
          title="Additional Noble Features"
          description="Even more ways to part with thy gold for meaningless digital prestige"
          centered={true}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="glass-morphism border-white/10 hover:border-royal-gold/20 transition-all duration-300 hover:shadow-gold">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                    <ScrollText className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Certificates of Nobility</h3>
                  <p className="text-white/70 mb-4">
                    Purchase elegant digital parchments declaring thy status in our kingdom, suitable for displaying to confused friends and family.
                  </p>
                  <Link to="/certificate/sample">
                    <Button variant="outline" size="sm" className="border-white/20 hover:border-royal-gold/30 mt-auto">
                      <span>View Sample</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10 hover:border-royal-gold/20 transition-all duration-300 hover:shadow-gold">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">House Chat Chambers</h3>
                  <p className="text-white/70 mb-4">
                    Communicate with thy fellow house members to coordinate spending strategies and mock the financially inferior masses together.
                  </p>
                  <Link to="/chat">
                    <Button variant="outline" size="sm" className="border-white/20 hover:border-royal-gold/30 mt-auto">
                      <span>View Chat</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10 hover:border-royal-gold/20 transition-all duration-300 hover:shadow-gold">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Royal Events</h3>
                  <p className="text-white/70 mb-4">
                    Seasonal competitions and spending frenzies where nobles can waste even more money in pursuit of limited-time digital trinkets.
                  </p>
                  <Link to="/events">
                    <Button variant="outline" size="sm" className="border-white/20 hover:border-royal-gold/30 mt-auto">
                      <span>View Events</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10 hover:border-royal-gold/20 transition-all duration-300 hover:shadow-gold">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Royal Cosmetics</h3>
                  <p className="text-white/70 mb-4">
                    Purchase an assortment of completely valueless digital cosmetics to adorn thy profile with meaningless flair.
                  </p>
                  <Link to="/royal-prestige">
                    <Button variant="outline" size="sm" className="border-white/20 hover:border-royal-gold/30 mt-auto">
                      <span>View Cosmetics</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10 hover:border-royal-gold/20 transition-all duration-300 hover:shadow-gold">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Royal Council</h3>
                  <p className="text-white/70 mb-4">
                    Top spenders gain access to an exclusive forum where they can suggest new ways for everyone to waste money on digital nonsense.
                  </p>
                  <Button variant="outline" size="sm" className="border-white/20 hover:border-royal-gold/30 mt-auto" disabled>
                    <span>Requires Rank Advancement</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10 hover:border-royal-gold/20 transition-all duration-300 hover:shadow-gold">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                    <Coins className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Wishing Well</h3>
                  <p className="text-white/70 mb-4">
                    Toss thy coins into our magical well for a chance to win prizes that are worth less than what thou spent to get them.
                  </p>
                  <Link to="/royal-prestige">
                    <Button variant="outline" size="sm" className="border-white/20 hover:border-royal-gold/30 mt-auto">
                      <span>Visit Wishing Well</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </RoyalSection>
        
        <div className="text-center mt-8">
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-royal-gold-dark via-royal-gold to-royal-gold-bright text-black hover:opacity-90 shadow-glow">
              <Crown className="mr-2 h-5 w-5" />
              <span>Join The Noble Ranks</span>
            </Button>
          </Link>
          <p className="mt-4 text-white/50 text-sm">
            Remember: In our kingdom, money is the only qualification needed for prestige.
          </p>
        </div>
      </div>
    </Shell>
  );
};

export default Features;

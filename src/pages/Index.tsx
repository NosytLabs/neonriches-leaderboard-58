
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Crown, 
  DollarSign, 
  Users, 
  Award, 
  Sparkles, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import RoyalHero from '@/components/RoyalHero';
import HeroShowcase from '@/components/home/HeroShowcase';
import ThroneChair from '@/components/logos/ThroneChair';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <RoyalHero />
      
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="flex items-center mb-6">
              <DollarSign className="h-8 w-8 text-royal-gold mr-2" />
              <h2 className="text-2xl font-bold">How It Works</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-royal-gold/20 flex items-center justify-center mb-4">
                  <span className="font-bold text-royal-gold">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Pay to Rank</h3>
                <p className="text-white/70">
                  Your rank is exactly equal to the amount you've spent. $1 = 1 rank point. The more you spend, the higher you climb.
                </p>
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-royal-gold/20 flex items-center justify-center mb-4">
                  <span className="font-bold text-royal-gold">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Join a Team</h3>
                <p className="text-white/70">
                  Choose Red, Green, or Blue team and compete for collective status. Team rankings are based on total member spending.
                </p>
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-royal-gold/20 flex items-center justify-center mb-4">
                  <span className="font-bold text-royal-gold">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Unlock Cosmetics</h3>
                <p className="text-white/70">
                  Customize your profile with exclusive cosmetic items. Higher tiers unlock more prestigious options.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-royal-gold mr-2" />
              <h2 className="text-2xl font-bold">Features</h2>
            </div>
            
            <div className="glass-morphism border-white/10 p-6 rounded-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-lg bg-royal-gold/20 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-royal-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Dollar-Driven Rank</h3>
                    <p className="text-white/70">A persistent leaderboard where your spending directly determines your position. No resets, ever.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-lg bg-royal-gold/20 flex items-center justify-center">
                      <Users className="h-6 w-6 text-royal-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">RGB Teams</h3>
                    <p className="text-white/70">Join Red, Green, or Blue and compete for team dominance through collective spending.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-lg bg-royal-gold/20 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-royal-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Profile Customization</h3>
                    <p className="text-white/70">Personalize your profile with borders, effects, and other cosmetics based on your tier.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-lg bg-royal-gold/20 flex items-center justify-center">
                      <Crown className="h-6 w-6 text-royal-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Royal Mockery</h3>
                    <p className="text-white/70">Spend to mock other users with temporary effects, or purchase immunity to protect yourself.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center pt-4">
                <Button asChild>
                  <Link to="/features">
                    <span>Explore All Features</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
          
          <section>
            <div className="glass-morphism border-white/10 overflow-hidden rounded-lg">
              <div className="bg-gradient-to-br from-royal-navy via-royal-purple to-royal-crimson p-8 text-center">
                <ThroneChair size={80} className="mx-auto mb-4" animate={true} />
                <h2 className="text-3xl font-bold mb-4 font-royal">Ready to Join the Hierarchy?</h2>
                <p className="text-lg mb-6 max-w-xl mx-auto">
                  The throne awaits those bold enough to claim it through the power of their wallet. Will you rise to the challenge?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-royal-gold hover:bg-royal-gold/90 text-black">
                    <Link to="/signup">
                      <span>Start Your Reign</span>
                      <Crown className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                    <Link to="/leaderboard">
                      <span>View Leaderboard</span>
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div className="space-y-8">
          <HeroShowcase />
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Award className="h-5 w-5 text-royal-gold mr-2" />
              Why SpendThrone?
            </h3>
            
            <ul className="space-y-4">
              <li className="flex">
                <ChevronRight className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-white/80">No skills or talents required - only your wallet matters here</p>
              </li>
              <li className="flex">
                <ChevronRight className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-white/80">Transparent ranking system - what you see is what you get</p>
              </li>
              <li className="flex">
                <ChevronRight className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-white/80">Team competitions add a social dimension to your spending</p>
              </li>
              <li className="flex">
                <ChevronRight className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-white/80">Multiple payment options including cryptocurrency</p>
              </li>
              <li className="flex">
                <ChevronRight className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-white/80">Satirical social commentary on digital status games</p>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-white/10">
              <Link to="/about" className="text-royal-gold hover:underline flex items-center">
                <span>Learn more about our vision</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">FAQ</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Is this a joke?</h4>
                <p className="text-white/80">Yes and no. SpendThrone is a satirical platform that parodies pay-to-win mechanics and digital status games, but the transactions are real.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-1">Can I get my money back?</h4>
                <p className="text-white/80">All transactions are final and non-refundable. Spend wisely!</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-1">What do I get for my money?</h4>
                <p className="text-white/80">Digital status, profile customization options, and the right to mock those beneath you in the hierarchy.</p>
              </div>
            </div>
            
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link to="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;


import React, { useState } from 'react';
import { Shell } from '@/components/ui/shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth';
import { Button } from '@/components/ui/button';
import { HeadingText } from '@/components/ui/heading-text';
import { Banner } from '@/components/ui/banner';
import { Plus, Info, Users, Sparkles, DollarSign, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { User } from '@/types/user';

const About = () => {
  const { user } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleAddSpending = async () => {
    if (!user) return;
    
    setIsUpdating(true);
    
    try {
      // Simulate API call to update user's spending
      setTimeout(() => {
        if (!user) return;
        
        // Ensure that createdAt is included, as required by the User type
        const mockUpdatedUser: User = {
          ...user,
          amountSpent: (user.amountSpent || 0) + 100,
          spentAmount: (user.spentAmount || 0) + 100,
          totalSpent: (user.totalSpent || 0) + 100,
          createdAt: user.createdAt || new Date().toISOString()
        };
        
        // Update the user in state (if you have this functionality)
        console.log('User updated:', mockUpdatedUser);
        setIsUpdating(false);
      }, 800);
    } catch (error) {
      console.error('Error updating user:', error);
      setIsUpdating(false);
    }
  };

  return (
    <Shell>
      <div className="flex flex-col gap-6">
        <HeadingText 
          title="About SpendThrone" 
          description="Where your worth is measured in dollars, not sense"
          gradient={true}
          as="h1"
        />
        
        <Banner 
          variant="royal"
          title="Embrace the Absurdity"
          description="SpendThrone is a satirical social experiment exploring the relationship between wealth, status, and digital identity."
          icon={<Crown className="h-5 w-5 text-royal-gold" />}
        />
        
        {user && (
          <div className="flex justify-end">
            <Button
              onClick={handleAddSpending}
              disabled={isUpdating}
              className="bg-royal-gold text-black hover:bg-royal-gold/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              {isUpdating ? 'Adding...' : 'Add $100 to Your Total'}
            </Button>
          </div>
        )}
        
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-royal-gold" />
                  What is SpendThrone?
                </h2>
                <p className="text-white/70 mb-4">
                  SpendThrone is a satirical social experiment that explores the dynamics of wealth, prestige, and digital status. It's a persistent leaderboard where your rank is determined solely by the amount of money you've spent.
                </p>
                <p className="text-white/70 mb-4">
                  Unlike traditional games where skill determines your ranking, SpendThrone embraces the "pay-to-win" concept with self-aware humor, creating a mirror that reflects our complicated relationship with money and status.
                </p>
                <p className="text-white/70 mb-4">
                  The leaderboard never resets. Your spending is permanent, your rank eternal (or at least until someone outspends you). We've created the ultimate digital status symbol – one that requires no talent, just a willingness to part with your cash.
                </p>
                <div className="flex items-center mt-6 p-3 bg-white/5 rounded-lg">
                  <DollarSign className="h-6 w-6 text-royal-gold mr-3" />
                  <div>
                    <h3 className="font-medium">The Golden Rule</h3>
                    <p className="text-sm text-white/70">$1 spent = 1 unit of rank. It's that simple.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-royal-gold" />
                  The Community
                </h2>
                <p className="text-white/70 mb-4">
                  SpendThrone has attracted a diverse community of nobles, from those who spend a dollar to secure their place on the leaderboard to "whales" who invest thousands to claim top positions.
                </p>
                <p className="text-white/70 mb-4">
                  Teams add another dimension to the experience. Join the Red, Green, or Blue team and contribute to your team's overall rank. It's like a medieval battle, but fought with credit cards instead of swords.
                </p>
                <p className="text-white/70 mb-4">
                  Weekly events like "Poke Party" where you can pay to drop another user down the ranks add interactive elements to the purely spending-based progression.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-center p-3 bg-white/5 rounded-lg">
                    <Sparkles className="h-5 w-5 text-red-400 mr-3" />
                    <div>
                      <h3 className="font-medium">Red Team: The Flamboyant</h3>
                      <p className="text-sm text-white/70">Flashy spenders who love to show off their luxury.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-white/5 rounded-lg">
                    <Sparkles className="h-5 w-5 text-green-400 mr-3" />
                    <div>
                      <h3 className="font-medium">Green Team: The Status Seekers</h3>
                      <p className="text-sm text-white/70">Always climbing the social ladder, one dollar at a time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-white/5 rounded-lg">
                    <Sparkles className="h-5 w-5 text-blue-400 mr-3" />
                    <div>
                      <h3 className="font-medium">Blue Team: The Collectors</h3>
                      <p className="text-sm text-white/70">Accumulating digital prestige like limited edition NFTs.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-6">
                  <Link to="/leaderboard">
                    <Button variant="outline" className="glass-morphism border-white/10 hover:bg-white/10">
                      <Crown className="mr-2 h-4 w-4 text-royal-gold" />
                      View the Royal Leaderboard
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="h-5 w-5 mr-2 text-royal-gold" />
              Our Satirical Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p>
              In a world where expensive water bottles are status symbols and people wait in line for hours to buy limited-edition sneakers, we thought: why not take consumer culture to its logical extreme?
            </p>
            <p>
              SpendThrone is a mirror reflecting our society's obsession with status, wealth, and digital clout. We've stripped away all pretense and created a transparent economy of prestige: your rank is directly proportional to your spending.
            </p>
            <p>
              Think of it as a social experiment wrapped in a game, wrapped in satire, wrapped in a medieval aesthetic, because why not add crowns and kingdoms to the mix? After all, aren't we all just trying to be royalty in our own digital castles?
            </p>
            <blockquote className="border-l-4 border-royal-gold/50 pl-4 italic">
              "In SpendThrone, we don't ask what your talents are or what you've achieved. We only care about one thing: how much are you willing to spend to see your name in lights?"
            </blockquote>
            <p>
              So go ahead, claim your throne. Your wallet is your weapon, your credit card your crown. In this kingdom, the only ceiling is your credit limit.
            </p>
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
};

export default About;

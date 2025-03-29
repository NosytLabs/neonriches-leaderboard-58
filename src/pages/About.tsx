
import React, { useState } from 'react';
import { Shell } from '@/components/ui/shell';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth';
import { Button } from '@/components/ui/button';
import { Plus, Info, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { User } from '@/types/user';

const About = () => {
  const { user, updateUser } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleAddSpending = async () => {
    if (!user) return;
    
    setIsUpdating(true);
    
    try {
      // Simulate API call to update user's spending
      setTimeout(() => {
        if (!user) return;
        
        const mockUpdatedUser: User = {
          ...user,
          amountSpent: (user.amountSpent || 0) + 100,
          spentAmount: (user.spentAmount || 0) + 100,
          totalSpent: (user.totalSpent || 0) + 100,
          createdAt: user.createdAt || new Date().toISOString() // Ensure createdAt is not missing
        };
        
        updateUser(mockUpdatedUser);
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
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">About P2W.FUN</h1>
          
          {user && (
            <Button
              onClick={handleAddSpending}
              disabled={isUpdating}
              className="bg-royal-gold text-black hover:bg-royal-gold/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              {isUpdating ? 'Adding...' : 'Add $100 to Your Total'}
            </Button>
          )}
        </div>
        
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-royal-gold" />
                  What is P2W.FUN?
                </h2>
                <p className="text-white/70 mb-4">
                  P2W.FUN is a satirical social experiment that explores the dynamics of wealth, prestige, and digital status. It's a persistent leaderboard where your rank is determined solely by the amount of money you've spent.
                </p>
                <p className="text-white/70 mb-4">
                  Unlike traditional games where skill determines your ranking, P2W.FUN embraces the "pay-to-win" concept with self-aware humor, creating a mirror that reflects our complicated relationship with money and status.
                </p>
                <p className="text-white/70">
                  The leaderboard never resets. Your spending is permanent, your rank eternal (or at least until someone outspends you).
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-royal-gold" />
                  The Community
                </h2>
                <p className="text-white/70 mb-4">
                  P2W.FUN has attracted a diverse community of players, from those who spend a dollar to secure their place on the leaderboard to "whales" who invest thousands to claim top positions.
                </p>
                <p className="text-white/70 mb-4">
                  Teams add another dimension to the experience. Join the Red, Green, or Blue team and contribute to your team's overall rank.
                </p>
                <p className="text-white/70 mb-4">
                  Weekly events like "Poke Party" where you can pay to drop another user down the ranks add interactive elements to the purely spending-based progression.
                </p>
                
                <div className="flex justify-center mt-6">
                  <Link to="/leaderboard">
                    <Button variant="outline" className="glass-morphism border-white/10 hover:bg-white/10">
                      View the Leaderboard
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
};

export default About;

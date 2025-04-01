
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Trophy } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

const Home = () => {
  const totalMoneyWasted = Math.floor(Math.random() * 1000000) + 500000;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Crown className="h-16 w-16 text-yellow-500" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SPEND THRONE
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            The ultimate pay-to-win leaderboard where your rank equals your spending.
          </p>
          
          <div className="mt-4 text-lg">
            <span className="font-medium">Total Money Wasted: </span>
            <span className="font-bold">
              {formatCurrency(totalMoneyWasted)}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link to="/leaderboard">
              <Button 
                size="lg" 
                className="text-lg font-bold"
              >
                <Trophy className="mr-2 h-5 w-5" />
                View Leaderboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

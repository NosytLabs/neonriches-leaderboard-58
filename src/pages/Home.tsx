
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, TrendingUp, Users, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-gold to-amber-500 bg-clip-text text-transparent">
          Welcome to SpendThrone
        </h1>
        <p className="text-xl text-white/70 mb-8">
          The royal platform where spending power determines your throne position
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/leaderboard">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              <Crown className="h-5 w-5 mr-2" />
              View Leaderboard
            </Button>
          </Link>
          <Link to="/marketing">
            <Button size="lg" variant="outline">
              <Sparkles className="h-5 w-5 mr-2" />
              Marketing Hub
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6 text-center">
            <Crown className="h-12 w-12 text-royal-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Royal Rankings</h3>
            <p className="text-white/70">
              Climb the leaderboard and claim your rightful place on the throne
            </p>
          </CardContent>
        </Card>

        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-12 w-12 text-royal-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Track Progress</h3>
            <p className="text-white/70">
              Monitor your spending power and watch your royal status grow
            </p>
          </CardContent>
        </Card>

        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6 text-center">
            <Users className="h-12 w-12 text-royal-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Join Teams</h3>
            <p className="text-white/70">
              Form alliances and compete with other royal houses
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;

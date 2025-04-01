
import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import { motion } from 'framer-motion';
import { 
  Crown, Trophy, Target, Coins, 
  Users, Shield, Award, BarChart 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold royal-gradient mb-4">Royal Features</h1>
          <p className="text-xl text-white/70">
            Explore the many ways to display your status and mock the peasants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-morphism border-white/10 h-full overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-gold/20 to-royal-purple/20 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/70 mb-4">{feature.description}</p>
                  
                  {feature.link && (
                    <Link to={feature.link}>
                      <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                        Explore
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="glass-morphism border-royal-gold/20 p-8 rounded-lg text-center max-w-3xl mx-auto">
          <Crown className="h-12 w-12 text-royal-gold mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Ready to Join the Nobility?</h2>
          <p className="text-white/80 mb-6">
            The more you spend, the higher you'll climb in our satirical kingdom's social hierarchy.
          </p>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-royal-gold to-amber-500 text-black hover:opacity-90">
              Claim Your Title
            </Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

const features = [
  {
    title: "Leaderboard",
    description: "See who's wasting the most money for digital clout in our royal hierarchy.",
    icon: <Trophy className="h-6 w-6 text-royal-gold" />,
    link: "/leaderboard"
  },
  {
    title: "Royal Mockery",
    description: "Humiliate those below you with various satirical effects on their profile.",
    icon: <Target className="h-6 w-6 text-royal-crimson" />,
    link: "/mockery"
  },
  {
    title: "Noble Donations",
    description: "Boost your rank by making 'donations' to your digital status.",
    icon: <Coins className="h-6 w-6 text-amber-400" />,
    link: "/deposit"
  },
  {
    title: "Royal Teams",
    description: "Join forces with other nobles to collectively showcase your wealth.",
    icon: <Users className="h-6 w-6 text-blue-400" />,
    link: "/teams"
  },
  {
    title: "Protection",
    description: "Shield yourself from mockery by spending even more.",
    icon: <Shield className="h-6 w-6 text-emerald-400" />,
    link: "/profile"
  },
  {
    title: "Royal Badges",
    description: "Collect and display badges showing your spending achievements.",
    icon: <Award className="h-6 w-6 text-purple-400" />,
    link: "/profile"
  },
  {
    title: "Spending Stats",
    description: "Analyze your wasteful spending with detailed charts and graphs.",
    icon: <BarChart className="h-6 w-6 text-blue-400" />,
    link: "/stats"
  },
  {
    title: "Noble History",
    description: "Learn about historical figures who wasted fortunes for status.",
    icon: <Crown className="h-6 w-6 text-royal-gold" />,
    link: "/status-through-history"
  }
];

export default Features;


import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Target, ShieldAlert, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MockeryComponent from '@/components/mockery/MockeryComponent';

const Mockery = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold royal-gradient mb-4">Royal Mockery Festival</h1>
          <p className="text-xl text-white/70 leading-relaxed">
            A satirical take on medieval public mockery, allowing nobles to express their 
            dominance through humorous profile effects and public jests.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <MockeryComponent />
          </div>
          
          <div className="space-y-6">
            <Card className="glass-morphism border-royal-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                  <span>How Mockery Works</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex">
                    <Target className="h-5 w-5 text-royal-crimson mr-2 mt-0.5 flex-shrink-0" />
                    <span>Select a target from the leaderboard or profile</span>
                  </li>
                  <li className="flex">
                    <Star className="h-5 w-5 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Choose a mockery effect based on your rank</span>
                  </li>
                  <li className="flex">
                    <ShieldAlert className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Higher-ranking nobles get access to more powerful mockery options</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 rounded-lg bg-black/30 border border-white/10">
                  <p className="text-sm text-white/70">
                    <span className="text-royal-gold">Premium members</span> can apply mockery 
                    without revealing their identity and access exclusive effects.
                  </p>
                </div>
                
                <div className="mt-6">
                  <Link to="/status-through-history">
                    <Button className="w-full bg-gradient-to-r from-royal-crimson to-royal-purple text-white">
                      View Status History
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Recent Mockery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex p-3 rounded-md bg-black/20 border border-white/5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-royal-gold to-royal-crimson mr-3 flex items-center justify-center">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">LordUser was mocked with {i === 0 ? 'Rotten Tomatoes' : i === 1 ? 'Jester Hat' : 'Dunce Cap'}</p>
                        <p className="text-xs text-white/50">
                          {new Date(Date.now() - i * 3600000).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Mockery;

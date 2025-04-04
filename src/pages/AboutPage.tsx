
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, DollarSign, Trophy, Target, History } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Crown className="text-royal-gold h-8 w-8 mr-2" />
              About SpendThrone
            </h1>
            <p className="text-lg text-white/70">
              A satirical social experiment in digital status
            </p>
          </div>
          
          <Card className="glass-morphism border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p>
                SpendThrone is a satirical social platform that turns conspicuous consumption into a competitive sport. 
                We've created a digital playground where the richest and most extravagant spenders can compete for status, 
                recognition, and the coveted top positions on our leaderboard.
              </p>
              <p>
                By gamifying wealth and status, we hold up a mirror to society's obsession with material displays of success. 
                SpendThrone creates a space where users can experience the absurdity of status-seeking taken to its logical extreme.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="text-royal-gold h-5 w-5 mr-2" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Users deposit real money into their accounts, competing to reach the top of our spending leaderboard. 
                  The more you spend, the higher your rank. It's that simple. Your status is directly proportional to your 
                  willingness to part with your cash.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="text-royal-gold h-5 w-5 mr-2" />
                  The Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Our global leaderboard showcases the biggest spenders in real-time. Watch as users compete for the throne, 
                  with ranks fluctuating based on recent spending activity. Special badges and cosmetic items are awarded to 
                  the most prolific spenders.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="text-royal-gold h-5 w-5 mr-2" />
                  Team Competition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Join one of our noble houses and compete not just as an individual, but as part of a team. 
                  Team rankings are determined by the collective spending of all members, creating a sense of 
                  community around shared financial excess.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="text-royal-gold h-5 w-5 mr-2" />
                  Historical Context
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Throughout human history, the wealthy have found ways to display their status through consumption. 
                  From ancient royal courts to modern luxury brands, SpendThrone simply digitizes this age-old practice 
                  for the modern era.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl">The Fine Print</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p>
                <strong>SpendThrone is a satirical art project</strong>. While the platform allows users to deposit real money, we want to be clear that there is no financial return on investment. The "value" you receive is entirely status-based and exists only within our platform.
              </p>
              <p>
                By participating, you acknowledge that you are willingly spending money solely for the purpose of status, competition, and the experience of our platform. Think of it as paying for entertainment, not as an investment.
              </p>
              <p>
                We encourage responsible participation. Please do not spend money you cannot afford to lose. SpendThrone is meant to provoke thought about consumer culture and status-seeking, not to encourage financial hardship.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;

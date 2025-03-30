
import React from 'react';
import { Crown, Users, ScrollText, DollarSign, Sparkles, Heart, Trophy, Gem, Coins, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-royal-gold to-amber-400">About SpendThrone</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          A satirical social experiment where your wallet determines your worth and mockery is an art form.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <div className="mb-2 text-royal-gold">
              <Crown size={24} />
            </div>
            <CardTitle>The Kingdom's Premise</CardTitle>
            <CardDescription>Understanding the SpendThrone experiment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/70">
              SpendThrone is a satirical social platform that explores the dynamics of wealth, status, and digital prestige. 
              It deliberately takes the "pay-to-win" concept to its logical extreme, creating a transparent system where your 
              rank is determined solely by how much money you deposit.
            </p>
            <p className="text-white/70">
              The leaderboard never resets, creating a persistent hierarchy where your position reflects your total contribution. 
              This absurdist take on digital status serves as both entertainment and a mirror reflecting our relationship with 
              wealth and online prestige.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <div className="mb-2 text-royal-gold">
              <ScrollText size={24} />
            </div>
            <CardTitle>Royal Rules</CardTitle>
            <CardDescription>How the system works</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start mb-4">
              <div className="bg-royal-gold/20 p-2 rounded-full mr-3">
                <DollarSign className="h-5 w-5 text-royal-gold" />
              </div>
              <div>
                <h3 className="font-medium mb-1">$1 = 1 Rank Point</h3>
                <p className="text-sm text-white/70">
                  Every dollar deposited to your account adds one point to your ranking score. Only deposits count toward leaderboard position.
                </p>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <div className="bg-royal-crimson/20 p-2 rounded-full mr-3">
                <ScrollText className="h-5 w-5 text-royal-crimson" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Mockery is Cosmetic</h3>
                <p className="text-sm text-white/70">
                  Spending on mockery features and cosmetic enhancements doesn't affect leaderboard rankings. These are purely visual and satirical elements.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-royal-purple/20 p-2 rounded-full mr-3">
                <Trophy className="h-5 w-5 text-royal-purple" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Team Competitions</h3>
                <p className="text-sm text-white/70">
                  Join one of three teams (Red, Green, or Blue) and contribute to team rankings based on collective spending.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="relative py-8 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-royal-purple/10 to-royal-gold/10"></div>
        <div className="relative text-center">
          <h2 className="text-2xl font-semibold mb-2">KEY FEATURES</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-purple to-royal-gold mx-auto"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <Crown className="h-6 w-6 text-royal-gold mb-2" />
            <CardTitle>Royal Mockery Festival</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/70 mb-4">
              Engage in medieval-style mockery by applying visual effects to other users. From tomatoes and eggs to jester crowns and dunce caps, express your royal disdain with style.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center">
                <span className="text-royal-gold mr-2">✓</span>
                <span>8 unique mockery styles</span>
              </li>
              <li className="flex items-center">
                <span className="text-royal-gold mr-2">✓</span>
                <span>Visual effects last 24 hours</span>
              </li>
              <li className="flex items-center">
                <span className="text-royal-gold mr-2">✓</span>
                <span>Royal Protection available</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <Users className="h-6 w-6 text-royal-gold mb-2" />
            <CardTitle>Team Warfare</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/70 mb-4">
              Join one of three colored teams and compete for collective dominance. Team rankings are based on the combined contributions of all members.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center">
                <span className="text-royal-gold mr-2">✓</span>
                <span>Red, Green, and Blue teams</span>
              </li>
              <li className="flex items-center">
                <span className="text-royal-gold mr-2">✓</span>
                <span>Weekly team challenges</span>
              </li>
              <li className="flex items-center">
                <span className="text-royal-gold mr-2">✓</span>
                <span>Team-based rewards</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <Gem className="h-6 w-6 text-royal-gold mb-2" />
            <CardTitle>Royal Profiles</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/70 mb-4">
              Customize your noble presence with tiered profile features. Higher tiers unlock more extensive customization options to showcase your royal status.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center">
                <span className="text-royal-gold mr-2">✓</span>
                <span>Custom banners and themes</span>
              </li>
              <li className="flex items-center">
                <span className="text-royal-gold mr-2">✓</span>
                <span>Animated profile elements</span>
              </li>
              <li className="flex items-center">
                <span className="text-royal-gold mr-2">✓</span>
                <span>Royal titles and badges</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-royal-gold to-amber-400 mb-4">Join the Royal Court</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-6">
          SpendThrone awaits nobles willing to pay for prestige in this satirical kingdom. Will you rise through the ranks or enjoy the mockery from the sidelines?
        </p>
        <a href="/register" className="inline-block px-6 py-3 bg-gradient-to-r from-royal-gold to-yellow-600 text-black font-medium rounded-lg hover:shadow-lg transition-all">
          Claim Your Throne
        </a>
      </div>
    </div>
  );
};

export default AboutPage;


import React from 'react';
import { Shell } from '@/components/ui/shell';
import { RoyalEncyclopedia } from '@/components/help/RoyalEncyclopedia';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  ScrollText, 
  HelpCircle, 
  FileText, 
  Target,
  Crown,
  Shield,
  Users
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// For RoyalDivider
const RoyalDivider = () => <Separator className="my-6 bg-white/10" />;

const HelpPage = () => {
  return (
    <Shell className="container mx-auto px-4 py-6">
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">Help & Support</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-morphism border border-white/10 rounded-lg p-4 flex flex-col items-center text-center hover:bg-white/5 transition cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center mb-3">
              <ScrollText size={24} className="text-royal-gold" />
            </div>
            <h3 className="font-semibold">User Guide</h3>
            <p className="text-sm text-white/60 mt-2">Learn how to use the platform</p>
          </div>
          
          <div className="glass-morphism border border-white/10 rounded-lg p-4 flex flex-col items-center text-center hover:bg-white/5 transition cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
              <HelpCircle size={24} className="text-blue-500" />
            </div>
            <h3 className="font-semibold">FAQ</h3>
            <p className="text-sm text-white/60 mt-2">Frequently asked questions</p>
          </div>
          
          <div className="glass-morphism border border-white/10 rounded-lg p-4 flex flex-col items-center text-center hover:bg-white/5 transition cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
              <FileText size={24} className="text-green-500" />
            </div>
            <h3 className="font-semibold">Documentation</h3>
            <p className="text-sm text-white/60 mt-2">Detailed platform documentation</p>
          </div>
          
          <div className="glass-morphism border border-white/10 rounded-lg p-4 flex flex-col items-center text-center hover:bg-white/5 transition cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
              <Target size={24} className="text-purple-500" />
            </div>
            <h3 className="font-semibold">Getting Started</h3>
            <p className="text-sm text-white/60 mt-2">Quick start guide for new users</p>
          </div>
        </div>
        
        <Card className="bg-black/20 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5 text-royal-gold" />
              Royal Encyclopedia
            </CardTitle>
            <CardDescription>
              Learn about all aspects of the Royal Court
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="prose prose-invert max-w-none">
              <h3>What are Royal Points?</h3>
              <p>
                Royal Points are the currency of status within the royal court. You earn them primarily by making purchases, 
                but also through various activities like participating in events, referring friends, and completing challenges.
              </p>
              
              <h3>What are Teams?</h3>
              <p>
                Teams allow users to band together under a common banner. Each team has unique benefits, specialties, and a distinct 
                visual identity. Teams compete on leaderboards for glory and real rewards.
              </p>
              
              <h3>What is Mockery?</h3>
              <p>
                Mockery is a playful feature that allows users to interact with each other through various actions like taunts, 
                challenges, and light-hearted jests. It's all in good fun and adds to the competitive atmosphere.
              </p>
              
              <h3>How do Ranks work?</h3>
              <p>
                Ranks are calculated based on your total spending, activity level, and team contributions. Higher ranks grant 
                additional benefits and visibility. You can view your current rank on the Leaderboard page.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-black/20 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5 text-royal-gold" />
              Quick Tips
            </CardTitle>
            <CardDescription>
              Fast ways to improve your royal experience
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-royal-gold/20 text-royal-gold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                <span>Complete your profile to increase visibility and enable all features</span>
              </li>
              <li className="flex items-start">
                <span className="bg-royal-gold/20 text-royal-gold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                <span>Join a team to receive team bonuses and participate in team competitions</span>
              </li>
              <li className="flex items-start">
                <span className="bg-royal-gold/20 text-royal-gold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                <span>Maintain a spending streak for additional bonus multipliers</span>
              </li>
              <li className="flex items-start">
                <span className="bg-royal-gold/20 text-royal-gold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                <span>Participate in events for exclusive rewards and rapid rank progression</span>
              </li>
              <li className="flex items-start">
                <span className="bg-royal-gold/20 text-royal-gold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">5</span>
                <span>Check the leaderboard regularly to see your position and set goals</span>
              </li>
            </ul>

            <RoyalDivider />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="glass-morphism border border-white/10 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-royal-gold/20 flex items-center justify-center mr-3">
                    <Crown size={16} className="text-royal-gold" />
                  </div>
                  <h4 className="font-semibold">Royal Status</h4>
                </div>
                <p className="text-sm text-white/70">Higher ranks give you more visibility and exclusive features</p>
              </div>
              
              <div className="glass-morphism border border-white/10 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                    <Shield size={16} className="text-blue-500" />
                  </div>
                  <h4 className="font-semibold">Team Benefits</h4>
                </div>
                <p className="text-sm text-white/70">Teams provide bonuses and exclusive cosmetic options</p>
              </div>
              
              <div className="glass-morphism border border-white/10 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <Users size={16} className="text-green-500" />
                  </div>
                  <h4 className="font-semibold">Community</h4>
                </div>
                <p className="text-sm text-white/70">Engage with other users for additional rewards</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Render the RoyalEncyclopedia component */}
        <RoyalEncyclopedia />
      </div>
    </Shell>
  );
};

export default HelpPage;

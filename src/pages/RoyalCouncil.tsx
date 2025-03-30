
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, MessageSquare, Users, Vote, Plus } from 'lucide-react';
import { useAuth } from '@/contexts/auth';

const RoyalCouncil: React.FC = () => {
  const { user } = useAuth();
  
  const councilTopics = [
    {
      id: "1",
      title: "Royal Feature Vote: Profile Animations",
      description: "Vote on new animated profile effects for Platinum tier and above",
      votes: 28,
      comments: 12,
      status: "Open"
    },
    {
      id: "2",
      title: "Team Competition: Quarterly Bonus Structure",
      description: "Discussing the prize distribution for the next quarterly team competition",
      votes: 43,
      comments: 24,
      status: "Open"
    },
    {
      id: "3",
      title: "Mockery Festival Expansion Proposal",
      description: "New mockery effects and expanded festival duration",
      votes: 15,
      comments: 7,
      status: "Closed"
    }
  ];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold royal-gradient">Royal Council</h1>
              <p className="text-white/70 mt-2">
                Where the nobility gathers to shape the future of our kingdom
              </p>
            </div>
            
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Proposal
            </Button>
          </div>
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Crown className="h-6 w-6 text-royal-gold" />
              <h2 className="text-xl font-bold">Council Status</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-white/70 text-sm mb-1">Your Voting Power</p>
                <p className="text-2xl font-bold">{user?.tier === 'royal' ? '3x' : user?.tier === 'diamond' ? '2x' : '1x'}</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-white/70 text-sm mb-1">Active Proposals</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-white/70 text-sm mb-1">Council Members</p>
                <p className="text-2xl font-bold">94</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Active Topics</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Latest</Button>
                <Button variant="ghost" size="sm">Popular</Button>
                <Button variant="ghost" size="sm">My Votes</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {councilTopics.map(topic => (
                <Card key={topic.id} className={`glass-morphism ${topic.status === 'Open' ? 'border-white/10' : 'border-white/5 opacity-70'}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          {topic.title}
                          {topic.status === 'Closed' && (
                            <span className="ml-2 text-xs bg-white/10 px-2 py-1 rounded-full">Closed</span>
                          )}
                        </CardTitle>
                        <CardDescription>{topic.description}</CardDescription>
                      </div>
                      
                      {topic.status === 'Open' && (
                        <Button size="sm">Vote Now</Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-6 text-sm text-white/70">
                      <div className="flex items-center">
                        <Vote className="h-4 w-4 mr-2" />
                        {topic.votes} votes
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        {topic.comments} comments
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Silver tier and above
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center text-white/50 text-sm">
            <p>
              The Royal Council is a feature where users can vote on new features and changes to SpendThrone.
              Your voting power increases with your tier level.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoyalCouncil;

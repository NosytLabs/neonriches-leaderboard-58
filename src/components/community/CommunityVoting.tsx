import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, ThumbsUp, ThumbsDown, Vote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { useNotificationSounds } from '@/hooks/sounds/use-notification-sounds';
import { motion } from 'framer-motion';

const mockProposals = [
  {
    id: 1,
    title: "Add Seasonal Themed Events",
    description: "Implement special events for holidays and seasons with unique rewards and challenges.",
    status: "active",
    votes: { up: 145, down: 32 },
    author: "RoyalAdvisor",
    created: "2023-10-15",
    deadline: "2023-11-15",
    category: "feature",
    implemented: false
  },
  {
    id: 2,
    title: "Expand Team Competitions",
    description: "Add more team-based weekly challenges with unique prizes for the winning faction.",
    status: "active",
    votes: { up: 98, down: 45 },
    author: "StrategicKnight",
    created: "2023-10-10",
    deadline: "2023-11-10",
    category: "feature",
    implemented: false
  },
  {
    id: 3,
    title: "Royal Tournament System",
    description: "Create monthly tournaments where nobles can compete for exclusive cosmetics and titles.",
    status: "active",
    votes: { up: 210, down: 25 },
    author: "TourneyMaster",
    created: "2023-10-05",
    deadline: "2023-11-05",
    category: "feature",
    implemented: false
  },
  {
    id: 4,
    title: "Enhanced Profile Customization",
    description: "Allow users to add animated backgrounds and custom layouts to their profile pages.",
    status: "completed",
    votes: { up: 178, down: 12 },
    author: "RoyalDesigner",
    created: "2023-09-15",
    deadline: "2023-10-15",
    category: "improvement",
    implemented: true
  },
  {
    id: 5,
    title: "Public Wall of Shame",
    description: "Implement a public wall that shows recent shame actions for added visibility.",
    status: "completed",
    votes: { up: 142, down: 67 },
    author: "MischievousNoble",
    created: "2023-09-10",
    deadline: "2023-10-10",
    category: "feature",
    implemented: true
  }
];

const CommunityVoting: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("active");
  const [userVotes, setUserVotes] = useState<Record<number, 'up' | 'down' | null>>({});
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  
  const handleVote = (proposalId: number, voteType: 'up' | 'down') => {
    if (userVotes[proposalId] === voteType) {
      setUserVotes(prev => ({
        ...prev,
        [proposalId]: null
      }));
      
      playSound('click');
      toast({
        title: "Vote Removed",
        description: "Your vote has been removed from this proposal.",
      });
    } else {
      setUserVotes(prev => ({
        ...prev,
        [proposalId]: voteType
      }));
      
      playSound(voteType === 'up' ? 'success' : 'error');
      toast({
        title: "Vote Recorded",
        description: `You ${voteType === 'up' ? 'supported' : 'opposed'} this royal proposal.`,
      });
    }
  };
  
  const getFilteredProposals = () => {
    switch (activeTab) {
      case "active":
        return mockProposals.filter(p => p.status === "active");
      case "completed":
        return mockProposals.filter(p => p.status === "completed");
      case "all":
      default:
        return mockProposals;
    }
  };
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Vote className="mr-2 h-5 w-5 text-royal-gold" />
            Royal Proposals
          </CardTitle>
          <CardDescription>
            Vote on proposals to shape the future of our kingdom
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="glass-morphism">
              <TabsTrigger value="active">Active Proposals</TabsTrigger>
              <TabsTrigger value="completed">Implemented</TabsTrigger>
              <TabsTrigger value="all">All Proposals</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="space-y-4">
              {getFilteredProposals().map((proposal) => (
                <motion.div 
                  key={proposal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass-morphism border-white/10">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base md:text-lg">{proposal.title}</CardTitle>
                          <div className="flex items-center mt-1">
                            <Badge variant="outline" className="mr-2">
                              {proposal.category}
                            </Badge>
                            {proposal.implemented ? (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Implemented
                              </Badge>
                            ) : (
                              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/40">
                                <Clock className="h-3 w-3 mr-1" />
                                In Review
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className={`glass-morphism ${userVotes[proposal.id] === 'up' ? 'border-green-500 text-green-400' : 'border-white/10'}`}
                            onClick={() => handleVote(proposal.id, 'up')}
                            disabled={proposal.status === "completed"}
                          >
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            <span>{proposal.votes.up + (userVotes[proposal.id] === 'up' ? 1 : 0)}</span>
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            className={`glass-morphism ${userVotes[proposal.id] === 'down' ? 'border-red-500 text-red-400' : 'border-white/10'}`}
                            onClick={() => handleVote(proposal.id, 'down')}
                            disabled={proposal.status === "completed"}
                          >
                            <ThumbsDown className="h-4 w-4 mr-1" />
                            <span>{proposal.votes.down + (userVotes[proposal.id] === 'down' ? 1 : 0)}</span>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-white/70 text-sm mb-4">{proposal.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-white/60">
                          <span>Support Level</span>
                          <span>
                            {Math.round((proposal.votes.up / (proposal.votes.up + proposal.votes.down)) * 100)}%
                          </span>
                        </div>
                        <Progress 
                          value={Math.round((proposal.votes.up / (proposal.votes.up + proposal.votes.down)) * 100)} 
                          className="h-2 bg-white/10"
                        />
                        <div className="flex justify-between text-xs text-white/60">
                          <span>Proposed by {proposal.author}</span>
                          <span>Deadline: {new Date(proposal.deadline).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityVoting;

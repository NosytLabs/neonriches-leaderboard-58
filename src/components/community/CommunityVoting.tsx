
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ThumbsUp, ThumbsDown, MessageSquare, Plus, AlertTriangle } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { useToastContext } from '@/contexts/ToastContext';
import SuggestionForm from './SuggestionForm';

// Mock data for community suggestions
const mockSuggestions = [
  {
    id: 1,
    title: "Solana Integration for Prize Pools",
    description: "Implement a Solana blockchain integration that would allow for cryptocurrency prize pools and withdrawals for event winners.",
    category: "crypto",
    status: "planned",
    votes: 124,
    comments: 32,
    author: "SolanaFan",
    date: "2023-12-15",
    isVotedUp: false,
    isVotedDown: false
  },
  {
    id: 2,
    title: "More Public Shaming Features",
    description: "Add additional medieval-themed public shaming options like pillory and dunking booth effects.",
    category: "feature",
    status: "under-review",
    votes: 89,
    comments: 15,
    author: "MedievalMocker",
    date: "2023-12-10",
    isVotedUp: true,
    isVotedDown: false
  },
  {
    id: 3,
    title: "Team Tournaments",
    description: "Weekly tournaments between teams with special prizes for winners and exclusive cosmetics.",
    category: "events",
    status: "implemented",
    votes: 210,
    comments: 47,
    author: "TeamLoyalist",
    date: "2023-11-28",
    isVotedUp: false,
    isVotedDown: false
  },
  {
    id: 4,
    title: "Custom Title Creator",
    description: "Add a feature to let users create custom titles with a set of pre-approved medieval-themed words.",
    category: "profile",
    status: "planned",
    votes: 57,
    comments: 8,
    author: "LordOfWords",
    date: "2023-12-12",
    isVotedUp: false,
    isVotedDown: false
  },
  {
    id: 5,
    title: "Royal Currency Token on Solana",
    description: "Create a 'Royal Coin' token on Solana that can be earned through events and spent on the platform for premium features.",
    category: "crypto",
    status: "idea",
    votes: 76,
    comments: 29,
    author: "CryptoNoble",
    date: "2023-12-18",
    isVotedUp: false,
    isVotedDown: false
  }
];

// Component to render each suggestion card
const SuggestionCard = ({ suggestion, onVote, onComment }) => {
  const { user } = useAuth();
  const { addToast } = useToastContext();
  
  const handleVote = (voteType) => {
    if (!user) {
      addToast({
        title: "Authentication Required",
        description: "You must be logged in to vote.",
        variant: "destructive"
      });
      return;
    }
    onVote(suggestion.id, voteType);
  };
  
  const handleComment = () => {
    if (!user) {
      addToast({
        title: "Authentication Required",
        description: "You must be logged in to comment.",
        variant: "destructive"
      });
      return;
    }
    onComment(suggestion.id);
  };
  
  const getStatusBadge = (status) => {
    switch (status) {
      case 'implemented':
        return <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Implemented</Badge>;
      case 'planned':
        return <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Planned</Badge>;
      case 'under-review':
        return <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">Under Review</Badge>;
      case 'idea':
        return <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Idea</Badge>;
      default:
        return <Badge className="bg-white/10 text-white/70">Unknown</Badge>;
    }
  };
  
  const getCategoryBadge = (category) => {
    switch (category) {
      case 'crypto':
        return <Badge variant="outline" className="bg-emerald-500/10 text-emerald-300 border-emerald-500/30">Crypto</Badge>;
      case 'feature':
        return <Badge variant="outline" className="bg-indigo-500/10 text-indigo-300 border-indigo-500/30">Feature</Badge>;
      case 'events':
        return <Badge variant="outline" className="bg-pink-500/10 text-pink-300 border-pink-500/30">Events</Badge>;
      case 'profile':
        return <Badge variant="outline" className="bg-sky-500/10 text-sky-300 border-sky-500/30">Profile</Badge>;
      default:
        return <Badge variant="outline">General</Badge>;
    }
  };
  
  return (
    <Card className="glass-morphism border-white/10 mb-4 hover:border-white/20 transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{suggestion.title}</CardTitle>
            <div className="flex space-x-2 mt-1">
              {getStatusBadge(suggestion.status)}
              {getCategoryBadge(suggestion.category)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-white/60">Posted by:</div>
            <div className="font-medium">{suggestion.author}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-white/80">{suggestion.description}</p>
        <div className="text-sm text-white/60 mt-2">Posted on: {suggestion.date}</div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t border-white/10">
        <div className="flex space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center ${suggestion.isVotedUp ? 'text-green-400' : 'text-white/70'}`}
            onClick={() => handleVote('up')}
          >
            <ThumbsUp className="h-4 w-4 mr-1.5" />
            <span>{suggestion.votes}</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center ${suggestion.isVotedDown ? 'text-red-400' : 'text-white/70'}`}
            onClick={() => handleVote('down')}
          >
            <ThumbsDown className="h-4 w-4 mr-1.5" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center text-white/70"
            onClick={handleComment}
          >
            <MessageSquare className="h-4 w-4 mr-1.5" />
            <span>{suggestion.comments}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const CommunityVoting = () => {
  const { user } = useAuth();
  const { addToast } = useToastContext();
  const [suggestions, setSuggestions] = useState(mockSuggestions);
  const [activeTab, setActiveTab] = useState("all");
  const [showSuggestionForm, setShowSuggestionForm] = useState(false);
  
  const filteredSuggestions = activeTab === "all" 
    ? suggestions 
    : suggestions.filter(s => s.category === activeTab);
  
  const handleVote = (id, voteType) => {
    setSuggestions(prev => 
      prev.map(s => {
        if (s.id === id) {
          if (voteType === 'up' && !s.isVotedUp) {
            return {
              ...s,
              votes: s.isVotedDown ? s.votes + 2 : s.votes + 1,
              isVotedUp: true,
              isVotedDown: false
            };
          } else if (voteType === 'down' && !s.isVotedDown) {
            return {
              ...s,
              votes: s.isVotedUp ? s.votes - 2 : s.votes - 1,
              isVotedDown: true,
              isVotedUp: false
            };
          }
        }
        return s;
      })
    );
    
    addToast({
      title: "Vote Recorded",
      description: "Your vote has been counted!",
      variant: "royal"
    });
  };
  
  const handleComment = (id) => {
    addToast({
      title: "Coming Soon",
      description: "Comments feature will be available soon!",
      variant: "default"
    });
  };
  
  const handleAddSuggestion = (newSuggestion) => {
    // In a real implementation, this would send the suggestion to a backend
    addToast({
      title: "Suggestion Submitted",
      description: "Thank you for your suggestion! It will be reviewed by our team.",
      variant: "royal"
    });
    setShowSuggestionForm(false);
  };
  
  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold royal-gradient mb-2">Community Voting</h2>
          <p className="text-white/70">Vote on feature suggestions and propose new ideas for SpendThrone.</p>
        </div>
        
        <Button 
          onClick={() => setShowSuggestionForm(true)}
          className="mt-4 md:mt-0 royal-button"
          disabled={!user}
        >
          <Plus className="h-4 w-4 mr-1.5" />
          Suggest Feature
        </Button>
      </div>
      
      {!user && (
        <div className="glass-morphism border-white/10 p-4 rounded-lg flex items-center mb-6 bg-royal-navy/10">
          <AlertTriangle className="h-5 w-5 text-royal-navy mr-3 flex-shrink-0" />
          <p className="text-white/80">
            You need to be logged in to submit suggestions or vote. Please sign in to participate in community decisions.
          </p>
        </div>
      )}
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="glass-morphism border-white/10 grid grid-cols-5 mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="feature">Features</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
        </TabsList>
        
        {/* No need for individual TabsContent since we're filtering the list */}
        <div className="space-y-4">
          {showSuggestionForm ? (
            <SuggestionForm 
              onSubmit={handleAddSuggestion} 
              onCancel={() => setShowSuggestionForm(false)} 
            />
          ) : (
            filteredSuggestions.map(suggestion => (
              <SuggestionCard 
                key={suggestion.id} 
                suggestion={suggestion} 
                onVote={handleVote}
                onComment={handleComment}
              />
            ))
          )}
          
          {filteredSuggestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">No suggestions found in this category.</p>
            </div>
          )}
        </div>
      </Tabs>
      
      <div className="glass-morphism border-royal-gold/20 p-4 rounded-lg mt-8 bg-royal-gold/5">
        <h3 className="font-medium mb-2 text-royal-gold">Future Cryptocurrency Integration</h3>
        <p className="text-white/80 mb-4">
          We're exploring the possibility of integrating a SpendThrone token on the Solana blockchain. This would enable:
        </p>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start">
            <span className="text-royal-gold mr-2">•</span>
            Prize pools funded by a percentage of weekly spending
          </li>
          <li className="flex items-start">
            <span className="text-royal-gold mr-2">•</span>
            The ability to withdraw winnings from community events
          </li>
          <li className="flex items-start">
            <span className="text-royal-gold mr-2">•</span>
            Team competitions with cryptocurrency rewards
          </li>
          <li className="flex items-start">
            <span className="text-royal-gold mr-2">•</span>
            Integration with platforms like PumpSwap or PumpFun
          </li>
        </ul>
        <Separator className="my-4 bg-white/10" />
        <p className="text-white/80 text-sm">
          <strong>Important:</strong> This is currently just an idea under exploration. We have no tokens as of yet, and we will conduct a community vote before implementing any major site changes related to cryptocurrency.
        </p>
      </div>
    </div>
  );
};

export default CommunityVoting;

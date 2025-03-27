
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { 
  History, 
  Star, 
  FileText, 
  MessageSquare, 
  ThumbsUp, 
  AlertTriangle, 
  Zap, 
  Shield, 
  RefreshCw,
  Send
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Update {
  id: string;
  version: string;
  date: string;
  title: string;
  description: string;
  changes: {
    features: string[];
    improvements: string[];
    fixes: string[];
  };
  major: boolean;
}

// Sample updates data
const updates: Update[] = [
  {
    id: 'v2.0.0',
    version: '2.0.0',
    date: '2023-10-15',
    title: 'The Royal Upgrade',
    description: 'Complete redesign with a royal theme, enhanced security, and Solana integration',
    changes: {
      features: [
        'New royal-themed UI with purple and gold accents',
        'Solana wallet integration for prize pool',
        'Monthly subscription model for PRO tier',
        'Enhanced security with multi-factor authentication',
        'Role-based access control system',
        'Magic link authentication option'
      ],
      improvements: [
        'Improved loading animations',
        'More consistent styling across the application',
        'Better mobile responsiveness',
        'Enhanced profile customization options',
        'Streamlined payment process'
      ],
      fixes: [
        'Fixed leaderboard sorting issues',
        'Resolved profile image upload errors',
        'Fixed team assignment bugs',
        'Corrected prize pool calculation errors',
        'Fixed authentication token expiration issues'
      ]
    },
    major: true
  },
  {
    id: 'v1.5.0',
    version: '1.5.0',
    date: '2023-09-01',
    title: 'Events Update',
    description: 'New events system and performance improvements',
    changes: {
      features: [
        'Introduced weekly events system',
        'Added Poke Party event',
        'New event rewards and badges'
      ],
      improvements: [
        'Improved leaderboard performance',
        'Enhanced profile editor',
        'Better mobile experience'
      ],
      fixes: [
        'Fixed profile link validation',
        'Resolved team switching issues',
        'Fixed payment processing errors'
      ]
    },
    major: false
  },
  {
    id: 'v1.2.0',
    version: '1.2.0',
    date: '2023-07-15',
    title: 'Teams & Profiles',
    description: 'Team functionality and profile enhancements',
    changes: {
      features: [
        'Added RGB team system',
        'Team competition and rankings',
        'Enhanced profile customization'
      ],
      improvements: [
        'Improved payment flow',
        'Better error messaging',
        'Enhanced UI animations'
      ],
      fixes: [
        'Fixed authentication issues',
        'Resolved profile image loading',
        'Fixed spending streak calculation'
      ]
    },
    major: false
  },
  {
    id: 'v1.0.0',
    version: '1.0.0',
    date: '2023-06-01',
    title: 'Initial Release',
    description: 'The first public release of SpendThrone',
    changes: {
      features: [
        'Basic pay-to-win leaderboard',
        'User profiles and rankings',
        'Payment processing',
        'Authentication system'
      ],
      improvements: [],
      fixes: []
    },
    major: true
  }
];

const Updates = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmitFeedback = async () => {
    if (!feedback.trim()) {
      toast({
        title: "Error",
        description: "Please enter your feedback before submitting",
        variant: "destructive"
      });
      return;
    }
    
    setSubmitting(true);
    
    // Mock API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback!",
      });
      
      setFeedback('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  const filteredUpdates = activeTab === 'all' ? updates : 
                          activeTab === 'major' ? updates.filter(u => u.major) :
                          updates.slice(0, 1);
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center mb-2">
              <History size={28} className="text-royal-gold mr-2" />
              <h1 className="text-3xl font-bold">Updates & Changelog</h1>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Track the evolution of SpendThrone with our detailed changelog. 
              See new features, improvements, and bug fixes across versions.
            </p>
          </div>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center">
              <TabsList className="glass-morphism border-white/10">
                <TabsTrigger value="all">All Updates</TabsTrigger>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="major">Major Releases</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
          
          <div className="space-y-8">
            {filteredUpdates.map((update) => (
              <Card key={update.id} className="glass-morphism border-white/10 overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle>{update.title}</CardTitle>
                        {update.major && (
                          <Badge className="bg-royal-gold text-black">
                            <Star className="h-3 w-3 mr-1" />
                            Major Update
                          </Badge>
                        )}
                      </div>
                      <CardDescription>
                        Version {update.version} • Released on {update.date}
                      </CardDescription>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="glass-morphism border-white/10">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Discuss
                      </Button>
                      <Button variant="outline" size="sm" className="glass-morphism border-white/10">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-white/70">{update.description}</p>
                  
                  <div className="space-y-4">
                    {update.changes.features.length > 0 && (
                      <div>
                        <h3 className="text-md font-semibold flex items-center mb-2">
                          <Zap className="h-4 w-4 mr-2 text-royal-gold" />
                          New Features
                        </h3>
                        <ul className="space-y-1">
                          {update.changes.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-royal-gold mr-2">•</span>
                              <span className="text-white/70 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {update.changes.improvements.length > 0 && (
                      <div>
                        <h3 className="text-md font-semibold flex items-center mb-2">
                          <RefreshCw className="h-4 w-4 mr-2 text-blue-400" />
                          Improvements
                        </h3>
                        <ul className="space-y-1">
                          {update.changes.improvements.map((improvement, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              <span className="text-white/70 text-sm">{improvement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {update.changes.fixes.length > 0 && (
                      <div>
                        <h3 className="text-md font-semibold flex items-center mb-2">
                          <Shield className="h-4 w-4 mr-2 text-green-400" />
                          Bug Fixes
                        </h3>
                        <ul className="space-y-1">
                          {update.changes.fixes.map((fix, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-400 mr-2">•</span>
                              <span className="text-white/70 text-sm">{fix}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="glass-morphism border-white/10 mt-12">
            <CardHeader>
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-royal-gold" />
                <CardTitle>Submit Feedback</CardTitle>
              </div>
              <CardDescription>
                We value your input! Let us know what you think about our recent updates.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <Textarea 
                  placeholder="Share your thoughts, suggestions, or report issues..."
                  className="min-h-[120px] glass-morphism border-white/10"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
                
                <div className="flex justify-end">
                  <Button 
                    className="bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white"
                    onClick={handleSubmitFeedback}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="animate-spin mr-2">⚙️</span> Submitting
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" /> Submit Feedback
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Updates;

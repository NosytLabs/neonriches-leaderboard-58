import React from 'react';
import { Shell } from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MessageSquare, Heart, Star, AlertTriangle, Award, Users } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';
import { useAuth } from '@/hooks/useAuth';

const Community: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <Shell>
      <PageSEO 
        title="Community Hub | SpendThrone"
        description="Connect with the SpendThrone community, participate in discussions, and see community events."
      />
      
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold royal-gradient mb-2">Royal Community Hub</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Connect with fellow nobles, participate in discussions, share your achievements, and collaborate on the future of the realm.
          </p>
        </div>
        
        <Tabs defaultValue="discussions" className="mb-12">
          <div className="flex justify-center mb-6">
            <TabsList className="glass-morphism border-white/10">
              <TabsTrigger value="discussions" className="data-[state=active]:bg-white/10">
                <MessageSquare className="h-4 w-4 mr-2" />
                Discussions
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-white/10">
                <Star className="h-4 w-4 mr-2" />
                Events
              </TabsTrigger>
              <TabsTrigger value="teams" className="data-[state=active]:bg-white/10">
                <Users className="h-4 w-4 mr-2" />
                Team Activities
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="discussions">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Popular Discussions</CardTitle>
                  <CardDescription>Hot topics in the royal court</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start space-x-4 p-3 hover:bg-white/5 rounded-lg transition-colors">
                        <Avatar>
                          <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 10}`} />
                          <AvatarFallback>{`N${i}`}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-white">
                              {["Is pay-to-win the future of social status?", 
                                "What would you do with unlimited wealth?",
                                "The psychology behind digital status symbols"][i-1]}
                            </h4>
                            <Badge variant="outline">{["Hot", "New", "Trending"][i-1]}</Badge>
                          </div>
                          <p className="text-sm text-white/70">
                            {["42 comments • 3 hours ago", 
                              "18 comments • 1 day ago", 
                              "36 comments • 5 hours ago"][i-1]}
                          </p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">View All Discussions</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Community Spotlight</CardTitle>
                  <CardDescription>Members making an impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center space-x-4 p-3 hover:bg-white/5 rounded-lg transition-colors">
                        <div className="relative">
                          <Avatar className="h-12 w-12 border-2 border-royal-gold">
                            <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 15}`} />
                            <AvatarFallback>{`S${i}`}</AvatarFallback>
                          </Avatar>
                          <Award className="absolute -bottom-1 -right-1 h-5 w-5 text-royal-gold" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{["LordMoneybags", "GoldThrone", "RoyalSpender"][i-1]}</h4>
                          <p className="text-sm text-white/70">{["Epic charity donation", "Community guide creator", "Most helpful member"][i-1]}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4 text-red-500" />
                          <span className="text-sm">{[248, 192, 163][i-1]}</span>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">View All Contributors</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="events">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Upcoming Community Events</CardTitle>
                <CardDescription>Mark your calendars for these royal gatherings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      title: "Royal Charity Auction",
                      date: "June 15, 2025",
                      description: "Bid on exclusive digital assets with proceeds going to charity",
                      badge: "Featured"
                    },
                    {
                      title: "Throne Wars: Team Competition",
                      date: "July 1-7, 2025",
                      description: "Teams compete for glory and exclusive rewards",
                      badge: "Team Event"
                    },
                    {
                      title: "VIP Roundtable with Developers",
                      date: "July 20, 2025",
                      description: "Premium members get to discuss future features directly with the team",
                      badge: "Premium"
                    }
                  ].map((event, i) => (
                    <div key={i} className="relative">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg bg-white/5">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{event.title}</h3>
                            <Badge variant="outline" className="bg-royal-gold/20 text-royal-gold border-royal-gold/50">
                              {event.badge}
                            </Badge>
                          </div>
                          <p className="text-sm text-white/70">{event.date}</p>
                          <p className="text-sm">{event.description}</p>
                        </div>
                        <Button size="sm" className="shrink-0">
                          Register
                        </Button>
                      </div>
                      {i < 2 && <Separator className="my-4 bg-white/10" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="teams">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Crimson Crown",
                  color: "text-red-500",
                  bgColor: "bg-red-500/10",
                  borderColor: "border-red-500/50",
                  members: 1243,
                  activity: "High"
                },
                {
                  name: "Azure Knights",
                  color: "text-blue-500",
                  bgColor: "bg-blue-500/10",
                  borderColor: "border-blue-500/50",
                  members: 1056,
                  activity: "Medium"
                },
                {
                  name: "Emerald Empire",
                  color: "text-green-500",
                  bgColor: "bg-green-500/10",
                  borderColor: "border-green-500/50",
                  members: 987,
                  activity: "Very High"
                }
              ].map((team, i) => (
                <Card key={i} className={`glass-morphism ${team.borderColor}`}>
                  <CardHeader>
                    <CardTitle className={team.color}>{team.name}</CardTitle>
                    <CardDescription>
                      {team.members} members • Activity: {team.activity}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className={`${team.bgColor} p-4 rounded-lg mb-4`}>
                      <h4 className="font-medium mb-2">Current Team Goal</h4>
                      <p className="text-sm">
                        {[
                          "Reach 2000 total members by end of month",
                          "Complete 500 charitable donations",
                          "Maintain top position on the leaderboard for 14 days"
                        ][i]}
                      </p>
                      <div className="w-full bg-white/10 rounded-full h-2.5 mt-3">
                        <div 
                          className={`h-2.5 rounded-full ${team.color.replace('text-', 'bg-')}`} 
                          style={{ width: ['45%', '62%', '78%'][i] }}
                        ></div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      {user?.team === (i === 0 ? 'red' : i === 1 ? 'blue' : 'green') 
                        ? 'Enter Team Hub' 
                        : 'View Team'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <RoyalDivider variant="crown" label="Community Guidelines" />
        
        <div className="mt-12 glass-morphism border-white/10 p-6 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-white/10 p-2 rounded-full mt-1">
                <Award className="h-5 w-5 text-royal-gold" />
              </div>
              <div>
                <h3 className="font-medium">Show Respect</h3>
                <p className="text-sm text-white/70">Treat all community members with respect, regardless of their rank or spending.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-white/10 p-2 rounded-full mt-1">
                <MessageSquare className="h-5 w-5 text-royal-gold" />
              </div>
              <div>
                <h3 className="font-medium">Constructive Communication</h3>
                <p className="text-sm text-white/70">Keep discussions constructive and on-topic. Avoid excessive self-promotion.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-white/10 p-2 rounded-full mt-1">
                <AlertTriangle className="h-5 w-5 text-royal-gold" />
              </div>
              <div>
                <h3 className="font-medium">Stay Satire-Aware</h3>
                <p className="text-sm text-white/70">Remember that SpendThrone is a satirical platform. Keep a sense of humor about the pay-to-win concept.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-white/10 p-2 rounded-full mt-1">
                <Users className="h-5 w-5 text-royal-gold" />
              </div>
              <div>
                <h3 className="font-medium">Team Spirit</h3>
                <p className="text-sm text-white/70">Support your team members and engage in friendly team rivalry. No harassment or toxicity.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button>Join the Discord</Button>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default Community;


import React from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineBody } from '@/components/ui/timeline';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Star, Award, Lightbulb, BookOpen, BriefcaseBusiness, Swords } from 'lucide-react';

const StatusThroughHistory = () => {
  return (
    <>
      <PageSEO 
        title="Status Through History" 
        description="Explore how wealth, status, and prestige have manifested throughout human history, from ancient civilizations to modern digital economies."
        canonicalUrl="/status-through-history"
      />
      
      <Container className="py-10">
        <h1 className="text-4xl font-bold mb-2 royal-gradient text-center">Status Through History</h1>
        <p className="text-white/70 text-center mb-10 max-w-3xl mx-auto">
          Throughout human civilization, the pursuit of status and prestige has taken many forms. 
          This satirical exploration shows how SpendThrone reflects ancient patterns in a modern digital context.
        </p>
        
        <Tabs defaultValue="ancient" className="w-full">
          <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-6">
            <TabsTrigger value="ancient">Ancient World</TabsTrigger>
            <TabsTrigger value="medieval">Medieval</TabsTrigger>
            <TabsTrigger value="industrial">Industrial</TabsTrigger>
            <TabsTrigger value="digital">Digital Age</TabsTrigger>
          </TabsList>
          
          {/* Ancient World Timeline */}
          <TabsContent value="ancient">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-royal-gold" />
                  Ancient Status Symbols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Timeline>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                      <TimelineIcon>
                        <Crown className="h-4 w-4" />
                      </TimelineIcon>
                      <h3 className="text-lg font-semibold">Ancient Egypt (3100-30 BCE)</h3>
                    </TimelineHeader>
                    <TimelineBody className="text-white/70">
                      <p>Pharaohs displayed wealth through massive pyramids and golden artifacts. The size of one's tomb and quality of burial goods directly indicated status.</p>
                      <p className="mt-2 text-sm italic text-royal-gold/80">Digital parallel: Profile customization and virtual badges serve as modern "burial goods" - expressions of digital afterlife.</p>
                    </TimelineBody>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                      <TimelineIcon>
                        <Swords className="h-4 w-4" />
                      </TimelineIcon>
                      <h3 className="text-lg font-semibold">Roman Empire (27 BCE-476 CE)</h3>
                    </TimelineHeader>
                    <TimelineBody className="text-white/70">
                      <p>Romans displayed status through lavish homes, slaves, public games, and political offices. Patrons supported clients in exchange for loyalty.</p>
                      <p className="mt-2 text-sm italic text-royal-gold/80">Digital parallel: Subscription tiers and public displays of spending create a modern patronage system in the digital realm.</p>
                    </TimelineBody>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineIcon>
                        <Star className="h-4 w-4" />
                      </TimelineIcon>
                      <h3 className="text-lg font-semibold">Han Dynasty China (206 BCE-220 CE)</h3>
                    </TimelineHeader>
                    <TimelineBody className="text-white/70">
                      <p>The scholar-official class displayed status through knowledge of classics, calligraphy, and civil service examination ranks.</p>
                      <p className="mt-2 text-sm italic text-royal-gold/80">Digital parallel: Badges, titles, and special access serve as modern insignia of rank and achievement in the digital meritocracy.</p>
                    </TimelineBody>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Medieval Timeline */}
          <TabsContent value="medieval">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                  Medieval Status Symbols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Timeline>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                      <TimelineIcon>
                        <Crown className="h-4 w-4" />
                      </TimelineIcon>
                      <h3 className="text-lg font-semibold">European Feudalism (9th-15th century)</h3>
                    </TimelineHeader>
                    <TimelineBody className="text-white/70">
                      <p>Nobles displayed status through land ownership, castles, and private armies. Titles were inherited and determined one's place in society.</p>
                      <p className="mt-2 text-sm italic text-royal-gold/80">Digital parallel: Premium profiles and exclusive digital spaces serve as virtual "castles" in the digital landscape.</p>
                    </TimelineBody>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineIcon>
                        <Award className="h-4 w-4" />
                      </TimelineIcon>
                      <h3 className="text-lg font-semibold">Medieval Guilds (12th-16th century)</h3>
                    </TimelineHeader>
                    <TimelineBody className="text-white/70">
                      <p>Craftsmen displayed status through guild membership, quality of work, and apprentice numbers. Guild masters held significant social status.</p>
                      <p className="mt-2 text-sm italic text-royal-gold/80">Digital parallel: Team affiliations and mockery privileges reflect guild hierarchies, where some users gain power to judge and mock others.</p>
                    </TimelineBody>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Industrial Timeline */}
          <TabsContent value="industrial">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BriefcaseBusiness className="mr-2 h-5 w-5 text-royal-gold" />
                  Industrial Age Status Symbols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Timeline>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                      <TimelineIcon>
                        <BriefcaseBusiness className="h-4 w-4" />
                      </TimelineIcon>
                      <h3 className="text-lg font-semibold">Victorian Era (1837-1901)</h3>
                    </TimelineHeader>
                    <TimelineBody className="text-white/70">
                      <p>The new industrial wealthy displayed status through elaborate homes, servants, fashionable clothing, and leisure activities.</p>
                      <p className="mt-2 text-sm italic text-royal-gold/80">Digital parallel: Profile customization options and visitation statistics mirror the Victorian obsession with displays of consumption.</p>
                    </TimelineBody>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineIcon>
                        <Award className="h-4 w-4" />
                      </TimelineIcon>
                      <h3 className="text-lg font-semibold">Gilded Age America (1870s-1900)</h3>
                    </TimelineHeader>
                    <TimelineBody className="text-white/70">
                      <p>Robber barons displayed status through conspicuous consumption, elaborate mansions, philanthropy, and exclusive social clubs.</p>
                      <p className="mt-2 text-sm italic text-royal-gold/80">Digital parallel: Leaderboards and public spending totals recreate the Gilded Age's ostentatious displays of wealth and competition.</p>
                    </TimelineBody>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Digital Age Timeline */}
          <TabsContent value="digital">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-royal-gold" />
                  Digital Age Status Symbols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Timeline>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                      <TimelineIcon>
                        <Lightbulb className="h-4 w-4" />
                      </TimelineIcon>
                      <h3 className="text-lg font-semibold">Social Media Era (2000s-present)</h3>
                    </TimelineHeader>
                    <TimelineBody className="text-white/70">
                      <p>Digital citizens display status through follower counts, engagement metrics, verified badges, and exclusive account features.</p>
                      <p className="mt-2 text-sm italic text-royal-gold/80">Digital parallel: SpendThrone directly quantifies digital status through spending, creating a transparent hierarchy based on financial contribution.</p>
                    </TimelineBody>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineIcon>
                        <Crown className="h-4 w-4" />
                      </TimelineIcon>
                      <h3 className="text-lg font-semibold">SpendThrone Era (Present)</h3>
                    </TimelineHeader>
                    <TimelineBody className="text-white/70">
                      <p>The ultimate culmination of status displays: a direct, unapologetic correlation between spending and status, with added mockery dynamics reminiscent of ancient court jesters.</p>
                      <p className="mt-2 text-sm italic text-royal-gold/80">Meta parallel: By explicitly gamifying status through spending, SpendThrone satirizes all previous status systems throughout human history.</p>
                    </TimelineBody>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Container>
    </>
  );
};

export default StatusThroughHistory;

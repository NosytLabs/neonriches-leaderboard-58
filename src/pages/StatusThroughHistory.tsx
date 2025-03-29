
import React from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Star, Award, Lightbulb, BookOpen, BriefcaseBusiness, Swords, Youtube, DollarSign, Trophy, ExternalLink } from 'lucide-react';

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
          <TabsList className="grid grid-cols-4 max-w-3xl mx-auto mb-6">
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
                <div className="space-y-6">
                  <div className="border-l-2 border-royal-gold/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Crown className="h-4 w-4 mr-2 text-royal-gold" />
                      Ancient Egypt (3100-30 BCE)
                    </h3>
                    <p className="text-white/70 mt-2">
                      Pharaohs displayed wealth through massive pyramids and golden artifacts. The size of one's tomb and quality of burial goods directly indicated status.
                    </p>
                    <p className="mt-2 text-sm italic text-royal-gold/80">
                      Digital parallel: Profile customization and virtual badges serve as modern "burial goods" - expressions of digital afterlife.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-royal-gold/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Swords className="h-4 w-4 mr-2 text-royal-gold" />
                      Roman Empire (27 BCE-476 CE)
                    </h3>
                    <p className="text-white/70 mt-2">
                      Romans displayed status through lavish homes, slaves, public games, and political offices. Patrons supported clients in exchange for loyalty.
                    </p>
                    <p className="mt-2 text-sm italic text-royal-gold/80">
                      Digital parallel: Subscription tiers and public displays of spending create a modern patronage system in the digital realm.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-royal-gold/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-2 text-royal-gold" />
                      Han Dynasty China (206 BCE-220 CE)
                    </h3>
                    <p className="text-white/70 mt-2">
                      The scholar-official class displayed status through knowledge of classics, calligraphy, and civil service examination ranks.
                    </p>
                    <p className="mt-2 text-sm italic text-royal-gold/80">
                      Digital parallel: Badges, titles, and special access serve as modern insignia of rank and achievement in the digital meritocracy.
                    </p>
                  </div>
                </div>
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
                <div className="space-y-6">
                  <div className="border-l-2 border-royal-gold/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Crown className="h-4 w-4 mr-2 text-royal-gold" />
                      European Feudalism (9th-15th century)
                    </h3>
                    <p className="text-white/70 mt-2">
                      Nobles displayed status through land ownership, castles, and private armies. Titles were inherited and determined one's place in society.
                    </p>
                    <p className="mt-2 text-sm italic text-royal-gold/80">
                      Digital parallel: Premium profiles and exclusive digital spaces serve as virtual "castles" in the digital landscape.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-royal-gold/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Award className="h-4 w-4 mr-2 text-royal-gold" />
                      Medieval Guilds (12th-16th century)
                    </h3>
                    <p className="text-white/70 mt-2">
                      Craftsmen displayed status through guild membership, quality of work, and apprentice numbers. Guild masters held significant social status.
                    </p>
                    <p className="mt-2 text-sm italic text-royal-gold/80">
                      Digital parallel: Team affiliations and mockery privileges reflect guild hierarchies, where some users gain power to judge and mock others.
                    </p>
                  </div>
                </div>
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
                <div className="space-y-6">
                  <div className="border-l-2 border-royal-gold/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <BriefcaseBusiness className="h-4 w-4 mr-2 text-royal-gold" />
                      Victorian Era (1837-1901)
                    </h3>
                    <p className="text-white/70 mt-2">
                      The new industrial wealthy displayed status through elaborate homes, servants, fashionable clothing, and leisure activities.
                    </p>
                    <p className="mt-2 text-sm italic text-royal-gold/80">
                      Digital parallel: Profile customization options and visitation statistics mirror the Victorian obsession with displays of consumption.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-royal-gold/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Award className="h-4 w-4 mr-2 text-royal-gold" />
                      Gilded Age America (1870s-1900)
                    </h3>
                    <p className="text-white/70 mt-2">
                      Robber barons displayed status through conspicuous consumption, elaborate mansions, philanthropy, and exclusive social clubs.
                    </p>
                    <p className="mt-2 text-sm italic text-royal-gold/80">
                      Digital parallel: Leaderboards and public spending totals recreate the Gilded Age's ostentatious displays of wealth and competition.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Digital Age Timeline - Now includes MrBeast content */}
          <TabsContent value="digital">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-royal-gold" />
                  Digital Age Status Symbols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-royal-gold/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2 text-royal-gold" />
                      Social Media Era (2000s-present)
                    </h3>
                    <p className="text-white/70 mt-2">
                      Digital citizens display status through follower counts, engagement metrics, verified badges, and exclusive account features.
                    </p>
                    <p className="mt-2 text-sm italic text-royal-gold/80">
                      Digital parallel: SpendThrone directly quantifies digital status through spending, creating a transparent hierarchy based on financial contribution.
                    </p>
                  </div>
                  
                  {/* MrBeast section - moved from separate tab to Digital Age */}
                  <div className="border-l-2 border-royal-gold/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Youtube className="h-4 w-4 mr-2 text-red-500" />
                      The MrBeast Revolution (2017-Present)
                    </h3>
                    <p className="text-white/70 mt-2">
                      MrBeast (Jimmy Donaldson) revolutionized online status by transforming excessive spending into content and philanthropy. His videos featuring extravagant giveaways and challenges with six-figure budgets created a new form of status: the benevolent spender.
                    </p>
                    <div className="mt-2 text-sm text-white/80">
                      <span className="font-semibold">Key innovations:</span>
                      <ul className="mt-1 space-y-2">
                        <li className="flex items-start">
                          <DollarSign className="h-4 w-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Monetized Philanthropy:</span> Transformed excessive spending into content and philanthropy, where giving away money generates more revenue and status.
                            <a href="https://www.forbes.com/profile/mrbeast/" className="flex items-center text-blue-400 hover:text-blue-300 mt-1 text-xs">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Forbes: MrBeast Net Worth
                            </a>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Trophy className="h-4 w-4 mr-2 text-royal-gold mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Extreme Challenge Economy:</span> "Last To Leave" challenges and "Spend $1,000,000 in 24 Hours" videos created a new economy where spending becomes public entertainment.
                            <a href="https://www.youtube.com/watch?v=OjXlp0-SZCs" className="flex items-center text-blue-400 hover:text-blue-300 mt-1 text-xs">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              MrBeast: I Spent $1,000,000 In 24 Hours
                            </a>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Star className="h-4 w-4 mr-2 text-yellow-400 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Meta-Spending Philosophy:</span> Created a system where spending money generates more money, transforming "costs" into investments with incredible ROI.
                            <a href="https://www.businessinsider.com/how-much-does-mrbeast-make-per-video-youtube-earnings-merch-2023-1" className="flex items-center text-blue-400 hover:text-blue-300 mt-1 text-xs">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Business Insider: MrBeast's Earnings Model
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <p className="mt-2 text-sm italic text-royal-gold/80">
                      SpendThrone parallel: Our platform's public spending model turns financial transactions into entertainment, much like MrBeast turned excessive spending into watchable content.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-royal-gold/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Crown className="h-4 w-4 mr-2 text-royal-gold" />
                      SpendThrone Era (Present)
                    </h3>
                    <p className="text-white/70 mt-2">
                      The ultimate culmination of status displays: a direct, unapologetic correlation between spending and status, with added mockery dynamics reminiscent of ancient court jesters.
                    </p>
                    <p className="mt-2 text-sm italic text-royal-gold/80">
                      Meta parallel: By explicitly gamifying status through spending, SpendThrone satirizes all previous status systems throughout human history.
                    </p>
                  </div>
                </div>
                
                {/* Sources and Further Reading Section */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-royal-gold" />
                    Sources & Further Reading
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-400" />
                      <a href="https://www.businessofapps.com/data/most-expensive-youtube-videos/" className="text-blue-400 hover:underline">
                        Business of Apps: Most Expensive YouTube Videos (2023)
                      </a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-400" />
                      <a href="https://www.cnbc.com/2023/01/13/how-mrbeast-became-the-first-person-to-reach-100-million-youtube-subs.html" className="text-blue-400 hover:underline">
                        CNBC: How MrBeast Became YouTube's First 100M Subscriber Creator
                      </a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-400" />
                      <a href="https://www.nytimes.com/2022/05/29/style/youtube-mrbeast-philanthropy.html" className="text-blue-400 hover:underline">
                        New York Times: The Philanthropy of MrBeast, YouTube's Top Creator
                      </a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-400" />
                      <a href="https://www.forbes.com/sites/abrambrown/2022/09/23/beast-philanthropy-jimmy-donaldson-youtube-mrbeast-charity/" className="text-blue-400 hover:underline">
                        Forbes: MrBeast's Charitable Revolution
                      </a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-400" />
                      <a href="https://www.theatlantic.com/technology/archive/2018/05/inside-the-gilded-age-history-of-internet-moderation/555485/" className="text-blue-400 hover:underline">
                        The Atlantic: Status in Digital Communities
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 p-4 bg-green-900/10 rounded-lg border border-green-500/20">
                  <p className="text-white font-bold flex items-center">
                    <Award className="h-5 w-5 mr-2 text-green-400" />
                    The MrBeast Effect on SpendThrone
                  </p>
                  <p className="mt-2 text-white/90">
                    "What MrBeast did for YouTube, SpendThrone does for social status. We've created a platform where spending isn't just consumption—it's content, it's competition, it's community. In the attention economy, visible spending is the ultimate currency."
                  </p>
                  <p className="mt-1 text-white/70 italic text-right">
                    — SpendThrone Founder
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Container>
    </>
  );
};

export default StatusThroughHistory;

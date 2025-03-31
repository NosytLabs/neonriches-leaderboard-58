
import React from 'react';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, History, Trophy, Crown, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import usePageTracking from '@/hooks/usePageTracking';
import RoyalDivider from '@/components/ui/royal-divider';
import { cn } from '@/lib/utils';

const StatusThroughHistory: React.FC = () => {
  usePageTracking();
  const navigate = useNavigate();

  return (
    <Shell>
      <PageSEO 
        title="The History of Status - SpendThrone" 
        description="Explore the fascinating and often ridiculous history of status symbols through the ages." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold royal-gradient mb-4 font-medieval">
              The History of Status
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Humans have always found elaborate ways to waste money on status symbols.
            </p>
          </motion.div>

          <Tabs defaultValue="timeline" className="mb-12">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="timeline">Era Timeline</TabsTrigger>
              <TabsTrigger value="examples">Absurd Examples</TabsTrigger>
            </TabsList>

            {/* TIMELINE TAB */}
            <TabsContent value="timeline">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <History className="mr-2 h-5 w-5 text-royal-gold" />
                    <span>Status Through The Ages</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <div className="relative border-l-2 border-royal-gold/50 pl-6 pb-6 space-y-8">
                    <TimelineItem
                      year="10,000 BCE"
                      title="Prehistoric Status"
                      description="Early humans showed status with shells, feathers, and shiny rocks. 'Ooh, look at my sparkly rock collection' was the original flex."
                      icon={<Info />}
                    />
                    
                    <TimelineItem
                      year="3000 BCE"
                      title="Ancient Civilizations"
                      description="Egyptians built pyramids to show how important they were... even after death. Classic overcompensation."
                      icon={<Crown />}
                    />
                    
                    <TimelineItem
                      year="500 BCE"
                      title="Classical Status"
                      description="Greeks and Romans made purple fabric illegal for non-royals. Imagine getting executed for wearing the wrong color. Talk about fashion police."
                      icon={<Info />}
                    />
                    
                    <TimelineItem
                      year="1700s"
                      title="Aristocratic Excess"
                      description="European nobles bankrupted themselves buying clothes to impress people they hated at court. Not much has changed, really."
                      icon={<Crown />}
                    />
                    
                    <TimelineItem
                      year="1900s"
                      title="Consumer Status"
                      description="The age of 'conspicuous consumption' — buying useless stuff just to show you can. We gave it a fancy name to make it sound less pathetic."
                      icon={<Trophy />}
                    />
                    
                    <TimelineItem
                      year="2000s"
                      title="Digital Status"
                      description="$69 million JPEGs, blue checkmarks, and follower counts. We've digitized status but kept all the absurdity."
                      icon={<Info />}
                    />
                    
                    <TimelineItem
                      year="Today"
                      title="SpendThrone"
                      description="Why pretend your spending is for anything other than status? We've eliminated the middlemen. Just pay for rank directly!"
                      icon={<Crown />}
                      isLast={true}
                    />
                  </div>
                  
                  <div className="bg-black/30 p-6 rounded-lg border border-royal-gold/20 mt-10">
                    <h3 className="text-xl font-semibold mb-3 text-royal-gold">Let's Be Honest Here</h3>
                    <p className="text-white/90">
                      You're reading this because you're considering paying real money for a higher position on a digital leaderboard.
                    </p>
                    <p className="text-white/90 mt-2">
                      And honestly? That might be <i>more</i> rational than spending thousands on a handbag or millions on a JPEG. At least here, you know exactly what you're buying: pure, unfiltered status.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* EXAMPLES TAB */}
            <TabsContent value="examples">
              <Tabs defaultValue="ancient" className="mb-12">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="ancient">Ancient</TabsTrigger>
                  <TabsTrigger value="medieval">Medieval</TabsTrigger>
                  <TabsTrigger value="industrial">Industrial</TabsTrigger>
                  <TabsTrigger value="digital">Digital</TabsTrigger>
                </TabsList>

                <TabsContent value="ancient">
                  <Card className="glass-morphism border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <Crown className="mr-3 h-6 w-6 text-royal-gold" />
                        Ancient Status Symbols
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Tyrian Purple</h3>
                          <p className="text-white/80 mb-3">
                            This rare dye made from sea snails was so expensive that one pound cost more than a skilled worker would earn in a year. Only emperors could legally wear it.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "SpendThrone Equivalent: Paying $10,000 to have your username in a slightly different color."
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Caligula's Horse</h3>
                          <p className="text-white/80 mb-3">
                            Roman Emperor Caligula appointed his horse as a senator and built it a marble stable. History's first recorded instance of "weird flex, but ok."
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "SpendThrone Equivalent: Paying for your pet to have its own rank on our leaderboard."
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="medieval">
                  <Card className="glass-morphism border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <Crown className="mr-3 h-6 w-6 text-royal-gold" />
                        Medieval Status Symbols
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Sumptuary Laws</h3>
                          <p className="text-white/80 mb-3">
                            Medieval governments had to pass laws restricting what lower classes could wear because too many people were "faking" status with fancy clothes.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "We don't need laws—just a paywall. Much more efficient."
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Versailles</h3>
                          <p className="text-white/80 mb-3">
                            Louis XIV created a system where nobles had to bankrupt themselves buying outfits just to attend court. Many competed for the "honor" of helping the king get dressed.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "At least on SpendThrone, you don't have to wake up at 5am to put the king's socks on."
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="industrial">
                  <Card className="glass-morphism border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <Crown className="mr-3 h-6 w-6 text-royal-gold" />
                        Industrial Age Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Veblen Goods</h3>
                          <p className="text-white/80 mb-3">
                            Economist Thorstein Veblen identified products that people want more of as they get more expensive—literally things that sell better because they cost more.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "SpendThrone is the purest Veblen good ever created."
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">The Titanic</h3>
                          <p className="text-white/80 mb-3">
                            A ship built as a floating palace for the ultra-wealthy to cross the Atlantic slightly faster, while literally putting poor people in the basement.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "At least our leaderboard won't hit an iceberg. Probably."
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="digital">
                  <Card className="glass-morphism border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <Crown className="mr-3 h-6 w-6 text-royal-gold" />
                        Digital Age Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">NFT Profile Pictures</h3>
                          <p className="text-white/80 mb-3">
                            People spent millions on algorithmically generated JPEGs to use as profile pictures, despite anyone being able to right-click and save them.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "Let's be honest—if you bought an NFT in 2021, you would have been better off spending that money on SpendThrone rank."
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">$8 Checkmarks</h3>
                          <p className="text-white/80 mb-3">
                            People pay monthly for a tiny blue icon next to their name that originally meant "this is really them" but now means "this person pays for a tiny blue icon."
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "For just $8/month, you can be slightly higher on our leaderboard than someone who doesn't pay $8/month."
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <RoyalDivider variant="fancy" label="THE FUTURE OF STATUS" />
                      
                      <div className="bg-black/20 p-6 rounded-lg border border-royal-gold/10">
                        <h3 className="text-xl font-semibold mb-3 text-royal-gold">SpendThrone: The Logical End Point</h3>
                        <p className="text-white/80 mb-3">
                          Throughout history, status symbols have been about spending money to signal wealth and importance. We've simply removed the pretense: money in, status out.
                        </p>
                        <p className="text-white/70 italic">
                          "If you're reading this far down the page, you're probably considering spending money for rank. At least you're self-aware about your status-seeking behavior. That's more than can be said for most of human history."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <motion.button
              onClick={() => navigate('/')}
              className="bg-royal-gold/20 border border-royal-gold/50 px-6 py-3 rounded-lg text-royal-gold hover:bg-royal-gold/30 transition duration-300 font-medieval-title"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Return to SpendThrone
            </motion.button>
            
            <p className="mt-4 text-sm text-white/50">
              Ready to skip the history lesson and just buy some status directly?
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
};

// Timeline Item Component - Simplified
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, icon, link, isLast = false }) => {
  return (
    <div className="relative">
      <div className="absolute -left-9 mt-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-royal-gold text-black">
        {icon}
      </div>
      <div className={`pb-6 ${!isLast ? "border-b border-white/10" : ""}`}>
        <time className="text-sm font-semibold text-royal-gold/70">{year}</time>
        <h3 className="text-lg font-semibold text-royal-gold mt-1">{title}</h3>
        <p className="text-white/80 mt-2">{description}</p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-royal-gold/70 hover:text-royal-gold mt-2"
          >
            <Info className="h-4 w-4 mr-1" />
            <span>Learn More</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default StatusThroughHistory;

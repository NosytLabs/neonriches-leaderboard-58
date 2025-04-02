import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shell } from '@/components/ui/shell';
import PageSEO from '@/components/common/PageSEO';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, History, Trophy, Crown, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="timeline">Era Timeline</TabsTrigger>
              <TabsTrigger value="examples">Absurd Examples</TabsTrigger>
              <TabsTrigger value="famous">Famous Flexers</TabsTrigger>
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
                      link="https://en.wikipedia.org/wiki/Egyptian_pyramids"
                    />
                    
                    <TimelineItem
                      year="500 BCE"
                      title="Classical Status"
                      description="Greeks and Romans made purple fabric illegal for non-royals. Imagine getting executed for wearing the wrong color. Talk about fashion police."
                      icon={<Info />}
                      link="https://en.wikipedia.org/wiki/Tyrian_purple"
                    />
                    
                    <TimelineItem
                      year="1700s"
                      title="Aristocratic Excess"
                      description="European nobles bankrupted themselves buying clothes to impress people they hated at court. Not much has changed, really."
                      icon={<Crown />}
                      link="https://en.wikipedia.org/wiki/Palace_of_Versailles"
                    />
                    
                    <TimelineItem
                      year="1900s"
                      title="Consumer Status"
                      description="The age of 'conspicuous consumption' — buying useless stuff just to show you can. We gave it a fancy name to make it sound less pathetic."
                      icon={<Trophy />}
                      link="https://en.wikipedia.org/wiki/Conspicuous_consumption"
                    />
                    
                    <TimelineItem
                      year="2000s"
                      title="Digital Status"
                      description="$69 million JPEGs, blue checkmarks, and follower counts. We've digitized status but kept all the absurdity."
                      icon={<Info />}
                      link="https://en.wikipedia.org/wiki/Non-fungible_token"
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
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Crown className="mr-3 h-6 w-6 text-royal-gold" />
                    Ridiculous Status Symbols
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
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* FAMOUS FLEXERS TAB */}
            <TabsContent value="famous">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Crown className="mr-3 h-6 w-6 text-royal-gold" />
                    Famous Status Seekers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6">
                    <FamousFlex 
                      name="Louis XIV of France"
                      era="1600s"
                      description="Built Versailles, the most expensive palace in history, required nobles to be in debt just to dress appropriately for court."
                      modernEquivalent="Buying a $80 million mansion and forcing all your friends to wear Gucci just to visit."
                      link="https://en.wikipedia.org/wiki/Louis_XIV"
                    />

                    <FamousFlex 
                      name="Cleopatra"
                      era="Ancient Egypt"
                      description="Allegedly dissolved a priceless pearl in vinegar and drank it to win a bet about who could host the most expensive dinner."
                      modernEquivalent="Dissolving a Rolex in champagne for TikTok views."
                      link="https://en.wikipedia.org/wiki/Cleopatra"
                    />
                    
                    <FamousFlex 
                      name="Elon Musk"
                      era="2000s-Present"
                      description="Bought Twitter for $44 billion when it was worth around $25 billion, essentially paying a $19 billion premium for digital status and control."
                      modernEquivalent="Well... buying SpendThrone rank, but on a billionaire scale."
                      link="https://en.wikipedia.org/wiki/Elon_Musk"
                    />
                    
                    <FamousFlex 
                      name="MrBeast"
                      era="2010s-Present"
                      description="Built an entire career around spending and giving away absurd amounts of money on camera. The more he spends, the more views and status he gets."
                      modernEquivalent="SpendThrone's unofficial mascot - his entire business model is 'spend money to make more money and gain status'."
                      link="https://en.wikipedia.org/wiki/MrBeast"
                    />
                    
                    <FamousFlex 
                      name="Gilded Age Robber Barons"
                      era="Late 1800s"
                      description="The Vanderbilts, Rockefellers, and others built absurdly massive mansions, threw parties where they'd hammer gold dust into their horses' hooves."
                      modernEquivalent="Buying a yacht so big it needs its own smaller yacht."
                      link="https://en.wikipedia.org/wiki/Gilded_Age"
                    />
                    
                    <FamousFlex 
                      name="Bored Ape NFT Owners"
                      era="2021-2022"
                      description="Spent hundreds of thousands on procedurally generated monkey JPEGs during the height of crypto wealth, primarily to use as profile pictures."
                      modernEquivalent="Buying the worst art in the world for the price of a house, then making it your profile picture so everyone knows you made a terrible financial decision."
                      link="https://en.wikipedia.org/wiki/Bored_Ape_Yacht_Club"
                    />
                  </div>
                  
                  <div className="bg-black/30 p-6 rounded-lg border border-royal-gold/20 mt-6">
                    <h3 className="text-xl font-semibold mb-3 text-royal-gold">The Modern Status Race</h3>
                    <p className="text-white/80 mb-3">
                      Today's status symbols are increasingly digital: blue checkmarks, follower counts, NFTs, and online clout. SpendThrone simply cuts to the chase - why pretend your expensive watch is about "craftsmanship" when it's really about showing you can afford it?
                    </p>
                    <div className="flex justify-end mt-3">
                      <Link to="/leaderboard" className="inline-flex items-center text-royal-gold hover:underline">
                        <span>See today's status leaders</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
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

// Timeline Item Component
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
            <ExternalLink className="h-4 w-4 mr-1" />
            <span>Learn More</span>
          </a>
        )}
      </div>
    </div>
  );
};

// Famous Flexer Component
interface FamousFlexProps {
  name: string;
  era: string;
  description: string;
  modernEquivalent: string;
  link?: string;
}

const FamousFlex: React.FC<FamousFlexProps> = ({ name, era, description, modernEquivalent, link }) => {
  return (
    <div className="p-4 bg-black/20 rounded-lg border border-white/10 hover:border-royal-gold/50 transition-colors duration-300">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-royal-gold">{name}</h3>
        <span className="text-sm text-white/50 italic">{era}</span>
      </div>
      <p className="text-white/80 mb-3">{description}</p>
      <div className="bg-black/30 p-3 rounded-lg">
        <p className="text-sm text-white/60">
          <span className="text-royal-gold/80 font-medium">Modern Equivalent:</span> {modernEquivalent}
        </p>
      </div>
      {link && (
        <div className="mt-3 flex justify-end">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-royal-gold/70 hover:text-royal-gold text-sm"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            <span>Read More</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default StatusThroughHistory;

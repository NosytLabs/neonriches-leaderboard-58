
import React, { useState } from 'react';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, History, Trophy, Crown, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import usePageTracking from '@/hooks/usePageTracking';
import RoyalDivider from '@/components/ui/royal-divider';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';

const StatusThroughHistory: React.FC = () => {
  usePageTracking();
  const navigate = useNavigate();
  const [showFact, setShowFact] = useState(true);

  return (
    <Shell>
      <PageSEO 
        title="The History of Status - SpendThrone" 
        description="Explore the fascinating and often ridiculous history of status symbols from ancient civilizations to the digital age." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold royal-gradient mb-4 font-medieval">
              The History of Status
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From royal purple to NFT profile pictures, humans have always found elaborate ways to waste money on status symbols.
            </p>
          </motion.div>

          <Tabs defaultValue="eras" className="mb-12">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="timeline">Brief Timeline</TabsTrigger>
              <TabsTrigger value="eras">Status By Era</TabsTrigger>
            </TabsList>

            {/* TIMELINE TAB */}
            <TabsContent value="timeline">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <History className="mr-2 h-5 w-5 text-royal-gold" />
                    <span>Humanity's Absurd Status Journey</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <div className="relative border-l-2 border-royal-gold/50 pl-6 pb-6 space-y-12">
                    <TimelineItem
                      year="10,000 BCE"
                      title="Sparkly Rocks & Feathers"
                      description="Early humans: 'This shell is shiny. Therefore, I am better than you.'"
                      icon={<Info />}
                    />
                    
                    <TimelineItem
                      year="3,000 BCE"
                      title="Egyptian Gold"
                      description="Pharaohs built massive pyramids just to show off how rich they were... even after death. The original 'flexing from the grave.'"
                      icon={<Crown />}
                    />
                    
                    <TimelineItem
                      year="50 CE"
                      title="Purple = Royal (It's Science)"
                      description="Romans made it illegal for non-royals to wear purple fabric. Seriously. The punishment? Death. Talk about fashion police."
                      icon={<Info />}
                    />
                    
                    <TimelineItem
                      year="1700s"
                      title="Versailles Excess"
                      description="French nobles spent fortunes to wear uncomfortable clothes at court, bankrupting themselves to impress people they hated."
                      icon={<Crown />}
                    />
                    
                    <TimelineItem
                      year="1900s"
                      title="Conspicuous Consumption"
                      description="Rich people buying useless stuff just to show they can. We gave it a fancy name to make it sound less pathetic."
                      icon={<Trophy />}
                    />
                    
                    <TimelineItem
                      year="2021"
                      title="$69 Million JPEGs"
                      description="People spent millions on digital ape pictures that anyone can right-click and save. We've officially reached peak status absurdity."
                      icon={<Info />}
                    />
                    
                    <TimelineItem
                      year="Today"
                      title="SpendThrone: Cutting Out The Middleman"
                      description="Why pretend your spending is for anything other than status? We've eliminated the art, fashion, and real estate middlemen. Just pay for rank directly!"
                      icon={<Crown />}
                      isLast={true}
                    />
                  </div>
                  
                  <div className="bg-black/30 p-6 rounded-lg border border-royal-gold/20 mt-10">
                    <h3 className="text-xl font-semibold mb-3 text-royal-gold">Breaking The Fourth Wall</h3>
                    <p className="text-white/90 mb-4">
                      Let's be honest: you're reading this because you're considering paying real money for a higher position on a digital leaderboard.
                    </p>
                    <p className="text-white/90">
                      And you know what? That might actually be <i>more</i> rational than spending $10,000 on a handbag or $3.4 million on a JPEG of a bored ape. At least here, you know exactly what you're buying: pure, unadulterated status.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ERAS TAB */}
            <TabsContent value="eras">
              <Tabs defaultValue="ancient" className="mb-12">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="ancient">Ancient</TabsTrigger>
                  <TabsTrigger value="medieval">Medieval</TabsTrigger>
                  <TabsTrigger value="modern">Modern</TabsTrigger>
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
                            The first "designer label" was actually a color. This dye from sea snails was so expensive in ancient Rome that one pound cost more than a skilled worker would earn in a year. Only emperors could legally wear it.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "SpendThrone Equivalent: Paying $10,000 to have your username in a slightly different color than the plebs."
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Caligula's Horse Senator</h3>
                          <p className="text-white/80 mb-3">
                            Roman Emperor Caligula appointed his favorite horse, Incitatus, as a senator, built it a marble stable with ivory mangers, and invited dignitaries to dine with it. History's most expensive flex.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "SpendThrone Equivalent: Paying for your pet to have its own rank on our leaderboard. Coming soon?"
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <RoyalDivider variant="fancy" label="ANCIENT WISDOM" />
                      
                      <div className="bg-black/20 p-6 rounded-lg border border-royal-gold/10">
                        <h3 className="text-xl font-semibold mb-3 text-royal-gold">The First Status Hack</h3>
                        <p className="text-white/80 mb-3">
                          Emperor Nero, running low on funds but wanting to maintain status, debased Roman currency by reducing its silver content. He essentially created inflation to fund his lifestyle—the first monetary "hack" for status maintenance.
                        </p>
                        <p className="text-white/70 italic">
                          "At least SpendThrone is honest about how much your status costs. No monetary policy manipulation required!"
                        </p>
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
                            Governments had to pass laws restricting what lower classes could wear because status symbols were becoming too democratized. Only nobles could wear certain colors and fabrics—medieval "verified badges."
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "We don't need laws to keep you peasants away from our royal tiers—just a paywall."
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Ornate Codpieces</h3>
                          <p className="text-white/80 mb-3">
                            Renaissance men wore increasingly elaborate, padded, and bejeweled codpieces to emphasize their... status. King Henry VIII was particularly fond of this display—the 16th-century equivalent of a Lamborghini.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "SpendThrone Equivalent: Profile banners and animations. Thankfully less anatomical."
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <RoyalDivider variant="fancy" label="REALITY CHECK" />
                      
                      <div className="bg-black/20 p-6 rounded-lg border border-royal-gold/10">
                        <h3 className="text-xl font-semibold mb-3 text-royal-gold">Versailles: The Original Pay-to-Win</h3>
                        <p className="text-white/80 mb-3">
                          Louis XIV built Versailles and created an elaborate system where nobles had to bankrupt themselves buying outfits just to attend court functions. Many competed for the "honor" of helping the king get dressed in the morning.
                        </p>
                        <p className="text-white/70 italic">
                          "At least on SpendThrone, you don't have to wake up at 5am to put the king's socks on. You just pay directly for the privilege of being recognized."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="modern">
                  <Card className="glass-morphism border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <Crown className="mr-3 h-6 w-6 text-royal-gold" />
                        Modern Status Symbols
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Supreme Branded Objects</h3>
                          <p className="text-white/80 mb-3">
                            Supreme sold a brick. A literal brick with their logo on it. For $30. It resold for up to $1,000. If that doesn't perfectly capture modern status insanity, nothing does.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "For $1000, we'll put a crown icon next to your name. At least you can see it without carrying a brick around."
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Designer Water</h3>
                          <p className="text-white/80 mb-3">
                            Acqua di Cristallo Tributo a Modigliani sold for $60,000 per bottle. It's water. In a fancy bottle. That's 7.5 million percent more expensive than tap water.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "We considered selling digital water, but even we thought that was too absurd."
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <RoyalDivider variant="fancy" label="INFLUENCER ERA" />
                      
                      <div className="bg-black/20 p-6 rounded-lg border border-royal-gold/10">
                        <h3 className="text-xl font-semibold mb-3 text-royal-gold">MrBeast: Status Content</h3>
                        <p className="text-white/80 mb-3">
                          YouTuber MrBeast spent $3.5 million recreating Squid Game and routinely gives away houses and luxury cars on camera. The spending itself is the content—meta-status at its finest.
                        </p>
                        <p className="text-white/70 italic">
                          "At least MrBeast is helping people while flexing. SpendThrone just helps your ego."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="digital">
                  <Card className="glass-morphism border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <Crown className="mr-3 h-6 w-6 text-royal-gold" />
                        Digital Age Status Symbols
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">NFT Profile Pictures</h3>
                          <p className="text-white/80 mb-3">
                            People spent millions on algorithmically generated JPEGs to use as profile pictures. Bored Ape #8817 sold for $3.4 million, despite being freely viewable and downloadable by anyone.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "Let's be honest—if you bought an NFT in 2021, you'd probably be better off spending that money on SpendThrone rank today."
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">$69 Million JPEG</h3>
                          <p className="text-white/80 mb-3">
                            Beeple's "Everydays" NFT sold for $69.3 million at Christie's, making it the third most expensive artwork sold by a living artist—despite being a digital file anyone can view for free online.
                          </p>
                          <div className="bg-black/30 p-3 rounded border border-white/10">
                            <p className="text-sm italic text-white/60">
                              "For just 0.001% of that price, you could be in our top 10 leaderboard positions. A much better deal, honestly."
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <RoyalDivider variant="fancy" label="META COMMENTARY" />
                      
                      <div className="bg-black/20 p-6 rounded-lg border border-royal-gold/10">
                        <h3 className="text-xl font-semibold mb-3 text-royal-gold">SpendThrone: The Logical Conclusion</h3>
                        <p className="text-white/80 mb-3">
                          Throughout history, status symbols have been about spending money to signal wealth and importance. We've simply removed the pretense and created a direct pathway: money in, status out.
                        </p>
                        <p className="text-white/70 italic">
                          "If you're reading this far down the page, you're probably considering spending money for rank. And honestly? At least you're self-aware about your status-seeking behavior. That's more than can be said for most of human history."
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

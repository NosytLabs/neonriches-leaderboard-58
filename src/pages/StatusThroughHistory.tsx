
import React, { useState } from 'react';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Info, AlertTriangle, Coins, Gem, Trophy, Clock, Crown, 
  DollarSign, Bitcoin, Sparkles, ShieldCheck, Twitter, Image, Sandwich, History } from 'lucide-react';
import RandomAbsurdFact from '@/components/ui/random-absurd-fact';
import { Link, useNavigate } from 'react-router-dom';
import usePageTracking from '@/hooks/usePageTracking';
import { formatHistoricalValue } from '@/utils/formatters';
import RoyalDivider from '@/components/ui/royal-divider';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';

const StatusThroughHistory: React.FC = () => {
  usePageTracking();
  const navigate = useNavigate();
  const [showFact, setShowFact] = useState(true);

  const handleCloseFact = () => {
    setShowFact(false);
    // Re-show after 30 seconds
    setTimeout(() => setShowFact(true), 30000);
  };

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

          {showFact && (
            <div className="mb-10">
              <RandomAbsurdFact 
                variant="banner"
                onClose={handleCloseFact}
              />
            </div>
          )}

          <Tabs defaultValue="timeline" className="mb-12">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="absurdities">Absurd Examples</TabsTrigger>
              <TabsTrigger value="eras">Historical Eras</TabsTrigger>
            </TabsList>

            {/* TIMELINE TAB */}
            <TabsContent value="timeline">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-royal-gold" />
                    <span>The Timeline of Human Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <div className="relative border-l-2 border-royal-gold/50 pl-6 pb-6 space-y-12">
                    <TimelineItem
                      year="10,000 BCE"
                      title="Rare Shells and Feathers"
                      description="Early humans used rare shells, feathers, and stones as status markers. Some tribes reserved specific colors for chieftains only."
                      icon={<Gem />}
                    />
                    
                    <TimelineItem
                      year="3,000 BCE"
                      title="Egyptian Gold and Royal Insignia"
                      description="Pharaohs claimed divine lineage and wore specific headdresses and jewelry that would mean death for commoners who dared to wear them."
                      icon={<Crown />}
                      link="https://en.wikipedia.org/wiki/Regalia"
                    />
                    
                    <TimelineItem
                      year="50 CE"
                      title="Tyrian Purple & Roman Status"
                      description="Romans created strict rules about who could wear purple-trimmed togas based on social rank, with the Emperor having exclusive rights to full purple garments."
                      icon={<Info />}
                      link="https://en.wikipedia.org/wiki/Tyrian_purple"
                    />
                    
                    <TimelineItem
                      year="1500s"
                      title="Sumptuary Laws"
                      description="European nations passed laws restricting what commoners could wear to preserve class distinctions, criminalizing the wearing of certain fabrics by non-nobles."
                      icon={<AlertTriangle />}
                    />
                    
                    <TimelineItem
                      year="1700s"
                      title="Court Fashion at Versailles"
                      description="French nobles spent fortunes on clothing just to attend court, often bankrupting themselves to maintain appearances among peers."
                      icon={<Coins />}
                      link="https://en.wikipedia.org/wiki/Palace_of_Versailles"
                    />
                    
                    <TimelineItem
                      year="1900s"
                      title="Conspicuous Consumption"
                      description="The term coined by Thorstein Veblen described the practice of publicly displaying wealth through obviously expensive goods to signal social status."
                      icon={<DollarSign />}
                      link="https://en.wikipedia.org/wiki/Conspicuous_consumption"
                    />
                    
                    <TimelineItem
                      year="1980s"
                      title="Designer Label Era"
                      description="Visible logos became status symbols themselves, with brands like Gucci, Louis Vuitton and Chanel turning their marks into highly visible status indicators."
                      icon={<Sandwich />}
                    />
                    
                    <TimelineItem
                      year="2010s"
                      title="Social Media Influence"
                      description="Likes, followers and engagement became new currencies of status, with people buying fake followers and staging elaborate photos for the appearance of wealth."
                      icon={<Trophy />}
                    />
                    
                    <TimelineItem
                      year="2021"
                      title="NFTs and Digital Ownership"
                      description="The apex of digital status: spending millions on procedurally generated JPEGs that exist primarily as status symbols and speculation vehicles."
                      icon={<Bitcoin />}
                      link="https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq"
                    />
                    
                    <TimelineItem
                      year="Today"
                      title="SpendThrone's Honest Approach"
                      description="The logical conclusion: a platform that strips away the pretense and lets you directly exchange money for status on a transparent leaderboard."
                      icon={<Crown />}
                      isLast={true}
                    />
                  </div>
                  
                  <div className="bg-black/30 p-6 rounded-lg border border-royal-gold/20 mt-10">
                    <h3 className="text-xl font-semibold mb-3 text-royal-gold">The Emperor's New Clothes</h3>
                    <p className="text-white/90 mb-4">
                      Throughout history, status symbols have functioned like the Emperor's new clothes - visible only to those who want to see them, or fear appearing foolish by questioning their value.
                    </p>
                    <p className="text-white/90">
                      SpendThrone is different only in our honesty: we acknowledge there's nothing to see. Our leaderboard positions are as invisible as the Emperor's new clothes, but we've dispensed with the pretense that they're anything other than purchased status.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ABSURDITIES TAB */}
            <TabsContent value="absurdities">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-royal-gold" />
                    <span>Gallery of Historical Absurdities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-8 text-center">
                    A satirical showcase of humanity's most ridiculous displays of status and wealth
                  </p>
                
                  <RoyalDivider variant="crown" label="ABSURD EXTRAVAGANCE" color="gold" />
                  
                  <div className="space-y-12 mt-12">
                    {/* Modern Influencer Section */}
                    <section>
                      <h2 className="text-3xl font-bold mb-6 flex items-center">
                        <Icon name="TrendingUp" className="mr-3 text-royal-gold" />
                        Modern Influence Empires
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <AbsurdityCard
                          title="MrBeast's Money Spectacles"
                          description="Jimmy Donaldson (MrBeast) spent $3.5 million to recreate Squid Game, $1 million to bury himself alive for 50 hours, and regularly hands out houses, islands, and luxury cars on camera."
                          fact="His 'Last To Leave Circle' video cost $500,000 to produce but generated approximately $5+ million in revenue."
                          quote="I'm literally giving away millions of dollars for content. It's a perfect business model!"
                          source="Modern Entertainment Economy"
                        />
                        
                        <AbsurdityCard
                          title="Kardashian Empire"
                          description="The Kardashian-Jenner family transformed gossip and controversy into a multi-billion dollar empire, perfecting the art of monetizing mere existence."
                          fact="Kylie Jenner reportedly charged brands $1.2 million per sponsored Instagram post at her peak influence."
                          quote="We're not famous for talent. We're famous for being famous."
                          source="Celebrity Economics"
                        />
                      </div>
                    </section>
                    
                    {/* Historical Money Waste Section */}
                    <section>
                      <h2 className="text-3xl font-bold mb-6 flex items-center">
                        <Icon name="History" className="mr-3 text-royal-gold" />
                        Historical Wealth Absurdities
                      </h2>
                      
                      <AbsurdityCard
                        title="Caligula's Horse Senator"
                        description="Roman Emperor Caligula made his favorite horse, Incitatus, a senator, built it a marble stable, assigned it a household staff, and invited dignitaries to dine with it."
                        fact={formatHistoricalValue(100000, "aurei", 40, 5000000) + " estimated spent on maintaining the horse's lifestyle."}
                        quote="My horse has better political sense than half the Roman Senate!"
                        source="Ancient Rome (40 CE)"
                      />
                      
                      <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <AbsurdityCard
                          title="Louis XIV's Versailles"
                          description="The Sun King transformed a hunting lodge into the most extravagant palace in Europe, with 700 rooms, 1,250 fireplaces, and 67 staircases."
                          fact={formatHistoricalValue(2, "billion livres", 1710, 300000000000) + " spent on construction and maintenance (half of France's annual GDP)."}
                          quote="It is legal because I wish it."
                          source="French Monarchy (1682)"
                        />
                        
                        <AbsurdityCard
                          title="Cleopatra's Pearl Cocktail"
                          description="To win a bet with Mark Antony about hosting the most expensive dinner in history, Cleopatra dissolved one of her massive pearl earrings in vinegar and drank it."
                          fact={formatHistoricalValue(10, "million sesterces", 41, 9500000) + " for a single pearl (equivalent to 1/3 the annual tax revenue of Egypt)."}
                          quote="Egypt will drink Rome under the table."
                          source="Ancient Egypt (41 BCE)"
                        />
                      </div>
                    </section>
                    
                    {/* Digital Status Section */}
                    <section>
                      <h2 className="text-3xl font-bold mb-6 flex items-center">
                        <Icon name="Bitcoin" className="mr-3 text-royal-gold" />
                        Digital Status Wars
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <AbsurdityCard
                          title="Crypto Flexing"
                          description="Crypto millionaires purchased digital art for millions, only to use them as profile pictures and watch their value plummet months later."
                          fact="A single Bored Ape NFT (#8817) sold for $3.4 million in 2021, then crashed to under $100,000 in value just 18 months later."
                          quote="I don't care that it lost 97% of its value. I'm still early to the future of art!"
                          source="Web3 Economy (2021-2023)"
                        />
                        
                        <AbsurdityCard
                          title="The $69M JPEG"
                          description="Beeple's 'Everydays: The First 5000 Days', a digital collage of 5,000 individual images, sold for $69.3 million as an NFT despite being freely viewable by anyone online."
                          fact="The buyer paid more than the value of works by Frida Kahlo, Salvador Dalí, and Pablo Picasso for a file that can be right-clicked and saved."
                          quote="It's not about the image, it's about the prestige of the receipt."
                          source="Digital Art Market (2021)"
                        />
                      </div>
                    </section>
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
                  <TabsTrigger value="digital">Digital Age</TabsTrigger>
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
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Tyrian Purple Dye</h3>
                          <p className="text-white/80 mb-3">
                            This rare dye, harvested from sea snails, was so expensive in ancient Rome that one pound cost more than a skilled worker would earn in a year. Only emperors and senators could afford to wear it.
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <a 
                              href="https://en.wikipedia.org/wiki/Tyrian_purple" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                            >
                              <Info className="h-4 w-4 mr-1" />
                              <span>Learn More</span>
                            </a>
                            <span className="text-white/50 text-sm">Cost: 20,000 denarii per pound</span>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Egyptian Burial Treasures</h3>
                          <p className="text-white/80 mb-3">
                            Pharaohs were buried with astronomical wealth they couldn't even use while alive. King Tut's tomb contained 5,000+ artifacts including a solid gold coffin, proving ancient royals pioneered "flex from beyond the grave."
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <a 
                              href="https://en.wikipedia.org/wiki/Tutankhamun" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                            >
                              <Info className="h-4 w-4 mr-1" />
                              <span>View Treasures</span>
                            </a>
                            <span className="text-white/50 text-sm">Estimated Value: Priceless</span>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-6" />
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-royal-gold">Caligula's Horse Senator</h3>
                        <p className="text-white/80 mb-3">
                          Roman Emperor Caligula appointed his favorite horse, Incitatus, as a senator. He built the horse a marble stable with an ivory manger, dressed it in purple cloths, and invited dignitaries to dine with it.
                        </p>
                        <p className="text-white/70 italic mb-3">
                          "This horse has better political judgment than most of the Senate." - Caligula (allegedly)
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <a 
                            href="https://en.wikipedia.org/wiki/Incitatus" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                          >
                            <Info className="h-4 w-4 mr-1" />
                            <span>Read About Incitatus</span>
                          </a>
                          <span className="text-white/50 text-sm">SpendThrone Equivalent: Paying to have your pet on the leaderboard</span>
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
                            Medieval governments actually had to pass laws restricting what lower classes could wear because status symbols were becoming too democratized. Only nobles could wear certain colors and fabrics.
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <a 
                              href="https://en.wikipedia.org/wiki/Sumptuary_law" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                            >
                              <Info className="h-4 w-4 mr-1" />
                              <span>Learn More</span>
                            </a>
                            <span className="text-white/50 text-sm">Modern Equivalent: Verified badges</span>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Ornate Codpieces</h3>
                          <p className="text-white/80 mb-3">
                            Renaissance men wore increasingly elaborate and padded codpieces to emphasize their... status. King Henry VIII wore a particularly large, bejeweled codpiece to demonstrate his virility and wealth simultaneously.
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <a 
                              href="https://en.wikipedia.org/wiki/Codpiece" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                            >
                              <Info className="h-4 w-4 mr-1" />
                              <span>Fashion History</span>
                            </a>
                            <span className="text-white/50 text-sm">Modern Equivalent: Luxury sports cars</span>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-6" />
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-royal-gold">Versailles and Court Etiquette</h3>
                        <p className="text-white/80 mb-3">
                          Louis XIV built Versailles at a cost of over $2 billion in today's money. Court nobles would bankrupt themselves buying outfits just to attend royal functions, where they competed for the "honor" of helping the king dress in the morning.
                        </p>
                        <p className="text-white/70 italic mb-3">
                          "Some aristocrats spent a year's income on a single outfit for attendance at court." - Historian Will Durant
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <a 
                            href="https://en.wikipedia.org/wiki/Palace_of_Versailles" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                          >
                            <Info className="h-4 w-4 mr-1" />
                            <span>Versailles History</span>
                          </a>
                          <span className="text-white/50 text-sm">SpendThrone Equivalent: Our entire business model</span>
                        </div>
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
                            Supreme has sold branded bricks, crowbars, fire extinguishers, and even a literal clay pigeon for hundreds or thousands of dollars. Their branded brick originally sold for $30 and resold for up to $1,000.
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <a 
                              href="https://www.thrillist.com/news/nation/supreme-brick-selling-for-1000-on-ebay" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                            >
                              <Info className="h-4 w-4 mr-1" />
                              <span>$1000 Brick Story</span>
                            </a>
                            <span className="text-white/50 text-sm">Markup: 3,333%</span>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Designer Water</h3>
                          <p className="text-white/80 mb-3">
                            Acqua di Cristallo Tributo a Modigliani sold for $60,000 per 750ml bottle. It's water. In a fancy bottle. That's 7.5 million percent more expensive than tap water.
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <a 
                              href="https://financesonline.com/top-10-most-expensive-bottled-water-in-the-world/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                            >
                              <Info className="h-4 w-4 mr-1" />
                              <span>Expensive Waters</span>
                            </a>
                            <span className="text-white/50 text-sm">Cost: $60,000 per bottle</span>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-6" />
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-royal-gold">MrBeast's Stunts</h3>
                        <p className="text-white/80 mb-3">
                          YouTuber MrBeast spent $3.5 million recreating Squid Game, $1 million to bury himself alive for 50 hours, and regularly gives away houses and luxury cars on camera. The absurd spending is the content itself.
                        </p>
                        <p className="text-white/70 italic mb-3">
                          "I literally just give away money and film it. That's the business model." - Jimmy Donaldson (MrBeast)
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <a 
                            href="https://www.youtube.com/watch?v=0e3GPea1Tyg" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            <span>$456,000 Squid Game</span>
                          </a>
                          <span className="text-white/50 text-sm">SpendThrone Equivalent: Spending to get on the leaderboard</span>
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
                          <div className="flex items-center space-x-4 mt-2">
                            <a 
                              href="https://opensea.io/collection/boredapeyachtclub" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                            >
                              <Image className="h-4 w-4 mr-1" />
                              <span>View Collection</span>
                            </a>
                            <span className="text-white/50 text-sm">Cost: Millions for a JPEG receipt</span>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-royal-gold">Twitter Blue Verification</h3>
                          <p className="text-white/80 mb-3">
                            People pay $8 per month for a blue check mark next to their name, a feature that was previously reserved for noteworthy accounts but is now simply purchasable.
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <a 
                              href="https://help.twitter.com/en/using-twitter/twitter-blue" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                            >
                              <Twitter className="h-4 w-4 mr-1" />
                              <span>Twitter Blue Info</span>
                            </a>
                            <span className="text-white/50 text-sm">Cost: $8/month for a blue pixel cluster</span>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-6" />
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-royal-gold">$69 Million JPEG</h3>
                        <p className="text-white/80 mb-3">
                          Beeple's "Everydays: The First 5000 Days" NFT sold for $69.3 million at Christie's auction house in 2021, making it the third most expensive artwork sold by a living artist - despite being a digital file that anyone can view online.
                        </p>
                        <p className="text-white/70 italic mb-3">
                          "I'm not sure it's about the image anymore. It's about the flex of owning the token." - Digital art collector
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <a 
                            href="https://onlineonly.christies.com/s/beeple-first-5000-days/beeple-b-1981-1/112924" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-royal-gold/80 hover:text-royal-gold flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            <span>Auction Details</span>
                          </a>
                          <span className="text-white/50 text-sm">SpendThrone Equivalent: At least we're honest about selling status</span>
                        </div>
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
              Continue your journey in the ultimate status marketplace
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
};

// Absurdity Card Component
interface AbsurdityCardProps {
  title: string;
  description: string;
  fact: string;
  quote: string;
  source: string;
  variant?: 'default' | 'bordered';
}

const AbsurdityCard: React.FC<AbsurdityCardProps> = ({ 
  title, 
  description, 
  fact, 
  quote, 
  source,
  variant = 'default'
}) => {
  return (
    <motion.div 
      className={cn(
        "glass-morphism rounded-lg overflow-hidden transition-all duration-300",
        variant === 'default' ? "border border-royal-gold/30" : "border-2 border-dashed border-royal-gold/50"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 royal-gradient">{title}</h3>
        <p className="mb-4 text-white/80">{description}</p>
        
        <div className="bg-black/30 p-4 rounded-md mb-4">
          <div className="flex items-start">
            <Icon name="AlertCircle" className="text-royal-gold mr-2 mt-1 flex-shrink-0" />
            <p className="text-royal-gold/90 font-medium">{fact}</p>
          </div>
        </div>
        
        <div className="border-t border-royal-gold/20 pt-4">
          <div className="flex items-start">
            <Icon name="Quote" className="text-royal-gold/60 mr-2 mt-1 flex-shrink-0" size={18} />
            <div>
              <p className="text-white/70 italic">"{quote}"</p>
              <p className="text-sm text-white/50 mt-1">— {source}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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

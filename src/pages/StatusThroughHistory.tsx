
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Scroll, 
  Crown, 
  Gem, 
  Shell, 
  Medal, 
  Castle, 
  Coins, 
  LandPlot,
  Feather,
  Wine,
  Bitcoin,
  Youtube,
  Instagram,
  Smartphone,
  Rocket,
  ExternalLink
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import HeroBackground from '@/components/ui/hero/HeroBackground';
import { cn } from '@/lib/utils';

type ArticleLink = {
  title: string;
  url: string;
  source: string;
  description: string;
};

const StatusThroughHistory: React.FC = () => {
  const { toast } = useToast();
  const [activeEra, setActiveEra] = useState('digital');
  
  const showToast = (era: string, fact: string) => {
    toast({
      title: `${era.charAt(0).toUpperCase()}${era.slice(1)} Era Fact`,
      description: fact,
      variant: "default",
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Status Through History | SpendThrone</title>
        <meta name="description" content="Explore how social status has been bought and sold throughout human history, from ancient displays of wealth to modern NFTs and social media influence." />
      </Helmet>

      <div className="relative min-h-screen">
        <HeroBackground intensity="low" color="purple" className="absolute inset-0" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-12 text-center">
              <Badge className="mb-4 bg-royal-purple/30 text-white border-royal-purple/50 py-1 px-3">Historical Perspective</Badge>
              <h1 className="text-4xl md:text-5xl font-bold royal-gradient mb-4 font-medieval">Status Through History</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                A satirical exploration of how humans have always paid for social standing, from medieval indulgences to MrBeast's million-dollar spectacles.
              </p>
              <p className="mt-2 italic text-white/60 max-w-2xl mx-auto">
                "Throughout history, people have always worn their wealth. Only the medium changes." — <span className="not-italic font-medium">The SpendThrone Royal Historian</span>
              </p>
            </div>

            <Tabs defaultValue={activeEra} onValueChange={setActiveEra} className="mb-12">
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList className="bg-black/30 border border-white/10">
                  <TabsTrigger value="ancient" className="data-[state=active]:bg-royal-purple/20">
                    <Shell className="mr-2 h-4 w-4" />
                    Ancient
                  </TabsTrigger>
                  <TabsTrigger value="medieval" className="data-[state=active]:bg-royal-purple/20">
                    <Crown className="mr-2 h-4 w-4" />
                    Medieval
                  </TabsTrigger>
                  <TabsTrigger value="renaissance" className="data-[state=active]:bg-royal-purple/20">
                    <Feather className="mr-2 h-4 w-4" />
                    Renaissance
                  </TabsTrigger>
                  <TabsTrigger value="industrial" className="data-[state=active]:bg-royal-purple/20">
                    <Castle className="mr-2 h-4 w-4" />
                    Industrial
                  </TabsTrigger>
                  <TabsTrigger value="modern" className="data-[state=active]:bg-royal-purple/20">
                    <Gem className="mr-2 h-4 w-4" />
                    Modern
                  </TabsTrigger>
                  <TabsTrigger value="digital" className="data-[state=active]:bg-royal-purple/20">
                    <Bitcoin className="mr-2 h-4 w-4" />
                    Digital
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="ancient" className="focus-visible:outline-none focus-visible:ring-0">
                <StatusEraCard 
                  title="Ancient Status Symbols"
                  description="From Roman purple dyes to Egyptian gold, the ancient world knew how to flaunt wealth."
                  icon={<Shell className="h-8 w-8 text-royal-gold" />}
                  facts={[
                    "Tyrian purple dye cost more than gold by weight in ancient Rome, making it exclusively for the elite.",
                    "In ancient Egypt, only pharaohs could wear certain types of gold jewelry.",
                    "Chinese emperors had exclusive rights to wear yellow silk robes.",
                    "The ultimate ancient flex? Sponsoring public buildings and games, as immortalized on stone tablets."
                  ]}
                  absurdFact="The Roman Emperor Caligula made his horse a senator. We've come a long way... or have we?"
                  onLearnMore={() => showToast("ancient", "Wealthy Romans would sometimes hire professional mourners for their funerals - the more mourners, the more important you appeared to be.")}
                  links={[
                    {
                      title: "Purple: The Color of Royalty",
                      url: "https://www.smithsonianmag.com/smart-news/in-ancient-rome-purple-dye-was-made-from-snails-180980897/",
                      source: "Smithsonian Magazine",
                      description: "How a dye made from thousands of sea snails created the ancient world's most exclusive color"
                    },
                    {
                      title: "Conspicuous Consumption in Ancient Rome",
                      url: "https://www.worldhistory.org/article/999/roman-luxury/",
                      source: "World History Encyclopedia",
                      description: "The extreme displays of wealth that would make even modern billionaires blush"
                    }
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="medieval" className="focus-visible:outline-none focus-visible:ring-0">
                <StatusEraCard 
                  title="Medieval Hierarchy"
                  description="When your birth determined your worth, unless you had enough coin to change the rules."
                  icon={<Crown className="h-8 w-8 text-royal-gold" />}
                  facts={[
                    "Medieval church indulgences let you literally buy your way out of sin and into heaven.",
                    "Sumptuary laws prevented commoners from wearing certain fabrics and colors, no matter how rich they became.",
                    "Knights would spend fortunes on tournaments just to impress nobles and ladies.",
                    "Can't afford real nobility? No problem! Many medieval merchants simply purchased titles."
                  ]}
                  absurdFact="In 1517, the Catholic Church sold 'Premium Heaven Passes' (indulgences) that promised to reduce time in purgatory. SpendThrone's spiritual ancestor?"
                  onLearnMore={() => showToast("medieval", "Medieval people would sometimes spend more on a single feast than they would on a year's worth of food, just to show off their wealth to guests.")}
                  links={[
                    {
                      title: "The Selling of Indulgences",
                      url: "https://www.christianitytoday.com/history/issues/issue-14/selling-of-indulgences.html",
                      source: "Christianity Today",
                      description: "How the medieval church monetized salvation in ways eerily similar to modern microtransactions"
                    },
                    {
                      title: "Medieval Sumptuary Laws",
                      url: "https://daily.jstor.org/sumptuary-laws-kept-people-in-their-place/",
                      source: "JSTOR Daily",
                      description: "Legal codes that regulated who could wear what, based on social status"
                    }
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="renaissance" className="focus-visible:outline-none focus-visible:ring-0">
                <StatusEraCard 
                  title="Renaissance Patronage"
                  description="When commissioning art became the ultimate flex of wealth and cultural refinement."
                  icon={<Feather className="h-8 w-8 text-royal-gold" />}
                  facts={[
                    "The Medici family of Florence spent the equivalent of billions on art commissioning to elevate their social status.",
                    "Renaissance portraits were the Instagram of their day — carefully posed to show off wealth and connections.",
                    "Wealthy merchants would compete to fund the most impressive chapels and artworks.",
                    "The ultimate renaissance flex? Having your family inserted into religious paintings."
                  ]}
                  absurdFact="The Medici family essentially bought their way into heaven by funding church art. Think of it as the original 'pay-to-win' spiritual strategy."
                  onLearnMore={() => showToast("renaissance", "Renaissance elites would commission portraits with objects symbolizing their wealth, like exotic fruits, that most viewers would never have seen in real life.")}
                  links={[
                    {
                      title: "How the Medici Made and Lost Their Fortune",
                      url: "https://www.history.com/news/medici-family-rise-and-fall",
                      source: "History.com",
                      description: "Banking, art patronage, and using cultural capital to wash away the sins of usury"
                    },
                    {
                      title: "Status Symbols in Renaissance Art",
                      url: "https://www.metmuseum.org/toah/hd/rpor/hd_rpor.htm",
                      source: "Metropolitan Museum of Art",
                      description: "How wealthy patrons used specific clothing, jewelry, and backgrounds to flex in their portraits"
                    }
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="industrial" className="focus-visible:outline-none focus-visible:ring-0">
                <StatusEraCard 
                  title="Industrial Wealth Display"
                  description="When new money industrialists built mansions to outdo aristocrats."
                  icon={<Castle className="h-8 w-8 text-royal-gold" />}
                  facts={[
                    "America's 'Gilded Age' saw industrial barons build increasingly ostentatious mansions.",
                    "The Victorians invented 'conspicuous consumption' as a deliberate strategy to display wealth.",
                    "No expense was spared on luxuries that guests would see, from sterling silver tea services to crystal chandeliers.",
                    "The social season was designed primarily to show who could host the most lavish parties."
                  ]}
                  absurdFact="Cornelius Vanderbilt built a 250-room mansion just to show the old money families that his railroad fortune could buy better status. It was basically an 1890s version of a flex on social media."
                  onLearnMore={() => showToast("industrial", "The term 'Keeping up with the Joneses' originated in this era, referring to the pressure to match your neighbors' conspicuous consumption.")}
                  links={[
                    {
                      title: "The Theory of the Leisure Class",
                      url: "https://www.gutenberg.org/files/833/833-h/833-h.htm",
                      source: "Thorstein Veblen (1899)",
                      description: "The original critique of conspicuous consumption that identified how wealth is performatively displayed"
                    },
                    {
                      title: "America's Gilded Age",
                      url: "https://www.pbs.org/wgbh/americanexperience/features/carnegie-gilded/",
                      source: "PBS",
                      description: "How industrial titans flaunted their wealth during America's most unequal era"
                    }
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="modern" className="focus-visible:outline-none focus-visible:ring-0">
                <StatusEraCard 
                  title="Celebrity Status Economy"
                  description="When luxury watches, private jets, and designer fashion became the new coat of arms."
                  icon={<Gem className="h-8 w-8 text-royal-gold" />}
                  facts={[
                    "Celebrities wear outfits worth hundreds of thousands for events that last hours.",
                    "Luxury watches serve no practical purpose a $10 digital watch doesn't - they're pure status symbols.",
                    "Private jets burn 40x more carbon per passenger than commercial flights, but signal ultimate status.",
                    "Designer brands intentionally raise prices to maintain exclusivity, not because of production costs."
                  ]}
                  absurdFact="Kim Kardashian once spent $10,000 on a golden toilet. At least on SpendThrone, we don't pretend your money is buying anything but status."
                  onLearnMore={() => showToast("modern", "Some luxury car manufacturers artificially limit production to ensure their vehicles remain exclusive, even when they could produce more and make higher profits.")}
                  links={[
                    {
                      title: "The Psychology of Luxury",
                      url: "https://www.psychologytoday.com/us/blog/the-science-behind-behavior/201912/why-luxury-brands-are-psychology-gold-mine",
                      source: "Psychology Today",
                      description: "How luxury brands manipulate our desire for status and exclusivity"
                    },
                    {
                      title: "The Kardashian Economy",
                      url: "https://www.forbes.com/sites/maddieberg/2016/11/16/inside-the-business-of-kardashian-jenner-fame-and-fortune/",
                      source: "Forbes",
                      description: "How one family turned being famous for being famous into a multi-billion dollar empire"
                    }
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="digital" className="focus-visible:outline-none focus-visible:ring-0">
                <StatusEraCard 
                  title="Digital Status Economy"
                  description="When NFT profile pictures, crypto wallets, and follower counts became the new status currency."
                  icon={<Bitcoin className="h-8 w-8 text-royal-gold" />}
                  facts={[
                    "People spent millions on NFTs primarily to display as profile pictures.",
                    "MrBeast spent $3.5 million recreating Squid Game just for YouTube views and status.",
                    "Social media verification badges have become the digital equivalent of noble titles.",
                    "Influencers stage fake private jet photos for the illusion of wealth and status."
                  ]}
                  absurdFact="A JPEG of a rock sold for $1.3 million as an NFT. At least SpendThrone is honest about selling you nothing but digital status."
                  onLearnMore={() => showToast("digital", "Some crypto investors bought expensive NFTs solely to use as profile pictures, spending more on a digital image than most people spend on a house.")}
                  links={[
                    {
                      title: "MrBeast: Philanthropy or Performance?",
                      url: "https://www.nytimes.com/2021/05/14/style/mrbeast-youtube.html",
                      source: "New York Times",
                      description: "How YouTube's biggest star turned spending money into content and status"
                    },
                    {
                      title: "The $69 Million JPEG",
                      url: "https://www.theverge.com/2021/3/11/22325054/beeple-christies-nft-sale-cost-everydays-69-million",
                      source: "The Verge",
                      description: "How Beeple's 'Everydays' NFT sold for $69 million despite being freely viewable by anyone"
                    },
                    {
                      title: "The Economics of Clout",
                      url: "https://www.theatlantic.com/technology/archive/2019/04/influencers-status-instagram-and-future-fame/587803/",
                      source: "The Atlantic",
                      description: "How social media has created an entire economy around digital status"
                    },
                    {
                      title: "Inside the Fake Instagram Jets",
                      url: "https://www.businessinsider.com/instagrammers-are-taking-fake-private-jet-photos-la-studio-2019-9",
                      source: "Business Insider",
                      description: "How influencers pay $64 to fake photos on private jets they don't actually own"
                    }
                  ]}
                  extraContent={
                    <div className="mt-8 bg-black/30 rounded-lg p-6 border border-royal-gold/20">
                      <h3 className="text-xl font-semibold mb-4 text-royal-gold">The Emperor's New Digital Clothes</h3>
                      
                      <div className="space-y-4">
                        <p>
                          While we at SpendThrone satirize the concept of paying for digital status, we're merely holding up a mirror to what already happens across the digital landscape:
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="bg-black/30 border-white/10">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg flex items-center">
                                <Youtube className="h-5 w-5 text-red-500 mr-2" />
                                MrBeast Economy
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="text-sm text-white/70">
                                Jimmy Donaldson (MrBeast) spends millions on elaborate stunts for views, turning money itself into content. His "$1,000,000 challenge" videos monetize spectacles of wealth in ways that would make medieval kings envious.
                              </p>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-black/30 border-white/10">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg flex items-center">
                                <Instagram className="h-5 w-5 text-pink-500 mr-2" />
                                Influencer Illusions
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="text-sm text-white/70">
                                From renting designer bags for photoshoots to staging fake private jet photos, influencers create elaborate illusions of wealth and status that exist only on their feeds.
                              </p>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-black/30 border-white/10">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg flex items-center">
                                <Bitcoin className="h-5 w-5 text-yellow-500 mr-2" />
                                Crypto Flexing
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="text-sm text-white/70">
                                "Web3" millionaires spent fortunes on cartoon apes and pixelated punks purely for profile picture status. The $24 million Cryptopunk #5822 exists solely as a status symbol.
                              </p>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-black/30 border-white/10">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg flex items-center">
                                <Smartphone className="h-5 w-5 text-blue-500 mr-2" />
                                Digital Microtransactions
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="text-sm text-white/70">
                                People spend billions on virtual items in games and apps - skins, emotes, and virtual currency that exist only as pixels and status. At least we're honest about it.
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <p className="italic text-white/60 mt-6">
                          "At SpendThrone, we've merely removed the pretense that digital status isn't directly purchasable. We're not creating a new paradigm - we're just being refreshingly blunt about the existing one."
                        </p>
                      </div>
                    </div>
                  }
                />
              </TabsContent>
            </Tabs>

            <Card className="glass-morphism border-white/10 mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Scroll className="mr-2 h-6 w-6 text-royal-gold" />
                  <span>The More Things Change...</span>
                </CardTitle>
                <CardDescription>
                  Throughout history, one constant remains: humans love to display their status through wealth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  From ancient Roman senators flaunting purple-trimmed togas to modern influencers showing off designer handbags, the specifics change but the fundamental human desire remains the same — to signal status through exclusive displays of wealth.
                </p>
                <p className="mb-4">
                  SpendThrone merely continues this grand tradition, with a refreshingly honest approach. We've simply removed the pretense that your digital status isn't directly tied to your willingness to spend.
                </p>
                <p className="italic text-white/70 mb-6">
                  At least we're transparent about it. No algorithmic complications, no pretending it's about "engagement" or "quality content" — just cold, hard cash translated directly to status.
                </p>
                
                <div className="p-4 bg-black/20 rounded-lg border border-royal-gold/10">
                  <h3 className="text-lg font-semibold text-royal-gold mb-2">The Emperor's New Clothes: Digital Edition</h3>
                  <p className="text-white/80">
                    "But the emperor has nothing on at all!" cried a little child. In Hans Christian Andersen's tale, the emperor paraded in invisible clothes that swindlers claimed only the worthy could see.
                  </p>
                  <p className="text-white/80 mt-2">
                    Today's digital status economy is much the same - we're all admiring NFTs, verification badges, and follower counts as if they have inherent value, when they're merely collective illusions we've agreed to respect.
                  </p>
                  <p className="text-white/80 mt-2">
                    SpendThrone is both a participation in and critique of this grand tradition. We're selling nothing but status - exactly like everyone else, just more honest about it.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 text-center space-y-4">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="default" 
                  className="bg-royal-gold text-black hover:bg-royal-gold/90"
                  onClick={() => {
                    window.open('/leaderboard', '_self');
                  }}
                >
                  <Rocket className="mr-2 h-4 w-4" />
                  Join The Status Race
                </Button>
              </motion.div>
              
              <p className="text-white/60 text-sm italic">
                Self-aware enough to critique status games, not self-aware enough to stop playing them? <br/>
                Welcome to SpendThrone. At least we're honest about it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

// StatusEraCard Component
interface StatusEraCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  facts: string[];
  absurdFact: string;
  onLearnMore: () => void;
  links?: ArticleLink[];
  extraContent?: React.ReactNode;
}

const StatusEraCard: React.FC<StatusEraCardProps> = ({ 
  title, 
  description, 
  icon, 
  facts, 
  absurdFact, 
  onLearnMore,
  links,
  extraContent
}) => {
  return (
    <motion.div
      className="glass-morphism rounded-lg border border-royal-gold/20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-royal-gold/20 p-3 rounded-full mr-4">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-white/70">{description}</p>
          </div>
        </div>
        
        <div className="space-y-4 mt-6">
          <h3 className="text-lg font-medium text-royal-gold">Historical Status Markers</h3>
          <ul className="space-y-2">
            {facts.map((fact, index) => (
              <li key={index} className="flex items-start">
                <span className="text-royal-gold mr-2 mt-1">•</span>
                <span className="text-white/80">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-black/30 p-4 rounded-md my-6">
          <p className="italic text-royal-gold/90 font-medium">{absurdFact}</p>
        </div>
        
        {links && links.length > 0 && (
          <>
            <h3 className="text-lg font-medium text-royal-gold mt-6 mb-3">Historical Deep Dives</h3>
            <div className="space-y-3">
              {links.map((link, index) => (
                <Card key={index} className="bg-black/20 border-white/10">
                  <CardContent className="p-4">
                    <h4 className="font-medium flex items-center justify-between">
                      <span>{link.title}</span>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-royal-gold/80 hover:text-royal-gold text-sm inline-flex items-center"
                      >
                        <span className="mr-1">{link.source}</span>
                        <ExternalLink size={12} />
                      </a>
                    </h4>
                    <p className="text-sm text-white/70 mt-1">{link.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
        
        {extraContent}
      </div>
      
      <CardFooter className="bg-black/40 border-t border-white/10 p-4 flex justify-between items-center">
        <div className="text-sm text-white/60">
          <span>Status markers change, human nature doesn't</span>
        </div>
        <Button variant="ghost" onClick={onLearnMore} className="hover:bg-white/10">
          Learn More
        </Button>
      </CardFooter>
    </motion.div>
  );
};

export default StatusThroughHistory;

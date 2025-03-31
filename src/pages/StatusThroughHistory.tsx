
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Wine
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import HeroBackground from '@/components/ui/hero/HeroBackground';

const StatusThroughHistory: React.FC = () => {
  const { toast } = useToast();
  const [activeEra, setActiveEra] = useState('medieval');
  
  const showToast = (era: string) => {
    toast({
      title: "Historical Insight",
      description: `In the ${era} era, social status was often tied directly to wealth and display.`,
      variant: "default",
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Status Through History | SpendThrone</title>
        <meta name="description" content="Explore how social status has been bought and sold throughout human history, and how SpendThrone continues this grand tradition." />
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
                A satirical exploration of how humans have always paid for social standing, from medieval indulgences to modern Instagram influencers.
              </p>
            </div>

            <Tabs defaultValue={activeEra} onValueChange={setActiveEra} className="mb-12">
              <div className="flex justify-center mb-8">
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
                  onLearnMore={() => showToast("ancient")}
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
                  onLearnMore={() => showToast("medieval")}
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
                  onLearnMore={() => showToast("renaissance")}
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
                  onLearnMore={() => showToast("industrial")}
                />
              </TabsContent>
              
              <TabsContent value="modern" className="focus-visible:outline-none focus-visible:ring-0">
                <StatusEraCard 
                  title="Digital Status Economy"
                  description="When luxury watch Instagram posts and NFT profile pictures became the new coat of arms."
                  icon={<Gem className="h-8 w-8 text-royal-gold" />}
                  facts={[
                    "Social media 'verification' badges have become the digital equivalent of noble titles.",
                    "NFT profile pictures sold for millions simply to signal wealth and exclusivity online.",
                    "Influencers stage fake private jet photos to create the illusion of wealth and status.",
                    "Streaming donation systems let viewers literally pay for attention and recognition."
                  ]}
                  absurdFact="People spent over $400 million on Bored Ape NFTs primarily to display as profile pictures, making them possibly the most expensive social media avatars in history."
                  onLearnMore={() => showToast("modern")}
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
                <p className="italic text-white/70">
                  At least we're transparent about it. No algorithmic complications, no pretending it's about "engagement" or "quality content" — just cold, hard cash translated directly into digital prestige.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Medal className="mr-2 h-5 w-5 text-royal-gold" />
                    <span>Social Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Throughout history, humans have paid for recognition, admiration, and exclusivity. We're just more honest about the transaction.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <LandPlot className="mr-2 h-5 w-5 text-royal-gold" />
                    <span>Digital Estates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    From medieval land holdings to digital profile enhancements, humans have always paid for territory others can see and envy.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Wine className="mr-2 h-5 w-5 text-royal-gold" />
                    <span>Conspicuous Consumption</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    From royal feasts to Instagram lifestyle posts, spending visibly has always been the quickest path to social recognition.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-xl text-white/80 mb-8 italic">
                "SpendThrone didn't invent pay-to-win status — we just perfected it for the digital age."
              </p>
              <Button 
                size="lg" 
                className="bg-royal-purple hover:bg-royal-purple/90"
                onClick={() => {
                  toast({
                    title: "Historical Truth",
                    description: "Throughout human history, status has always been purchasable. We're just more honest about it.",
                  });
                }}
              >
                <Coins className="mr-2 h-5 w-5" />
                Embrace Tradition, Join SpendThrone
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

interface StatusEraCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  facts: string[];
  absurdFact: string;
  onLearnMore: () => void;
}

const StatusEraCard: React.FC<StatusEraCardProps> = ({ 
  title, 
  description, 
  icon, 
  facts, 
  absurdFact, 
  onLearnMore 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {icon}
              <div className="ml-3">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={onLearnMore}>Learn More</Button>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 mb-6">
            {facts.map((fact, index) => (
              <li key={index} className="flex">
                <span className="text-royal-gold mr-2">•</span>
                <span className="text-white/80">{fact}</span>
              </li>
            ))}
          </ul>
          
          <div className="p-4 bg-black/30 rounded-lg border border-royal-gold/20">
            <p className="text-white/90 italic">
              <span className="text-royal-gold font-semibold">Absurd Historical Fact: </span>
              {absurdFact}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatusThroughHistory;


import React, { useState } from 'react';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import RandomAbsurdFact from '@/components/ui/random-absurd-fact';
import { formatHistoricalValue } from '@/utils/formatters';
import { motion } from 'framer-motion';
import RoyalDivider from '@/components/ui/royal-divider';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import usePageTracking from '@/hooks/usePageTracking';

const HistoricalAbsurdities = () => {
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
        title="Historical Absurdities - SpendThrone" 
        description="Explore the most absurd historical displays of wealth and status throughout human civilization." 
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 royal-gradient text-center">
            The Gallery of Historical Absurdities
          </h1>
          <p className="text-xl text-white/70 text-center mb-8">
            A satirical showcase of humanity's most ridiculous displays of status and wealth
          </p>
          
          {showFact && (
            <div className="mb-8">
              <RandomAbsurdFact 
                variant="banner" 
                onClose={handleCloseFact} 
              />
            </div>
          )}
          
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
              
              <div className="mt-8">
                <AbsurdityCard
                  title="Floyd 'Money' Mayweather"
                  description="Floyd Mayweather built his brand around ostentatious wealth displays, regularly posting photos of private jets filled with cash, $10 million in diamond jewelry worn simultaneously, and his collection of 100+ luxury cars he rarely drives."
                  fact={formatHistoricalValue(275, "million USD", 2017, 314000000) + " earned for a single 36-minute boxing match against Conor McGregor."}
                  quote="They call me 'Money' Mayweather for a reason. I'm gonna get the private jet and I could bring the money, thrown it on the private jet. That's $100 million and I can go have a great time."
                  source="Sports Entertainment"
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
              
              <div className="mt-8">
                <AbsurdityCard
                  title="Social Media Status Economy"
                  description="An entire economy emerged around purchasing fake followers, likes, and engagement to create the illusion of influence and status."
                  fact="In 2023, an estimated $1.3 billion was spent on fake engagement metrics across major platforms."
                  quote="I'd rather look important than be important."
                  source="Digital Influence Market"
                  variant="bordered"
                />
              </div>
            </section>
            
            {/* Corporate Excess Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Icon name="Building" className="mr-3 text-royal-gold" />
                Corporate Excess Chronicles
              </h2>
              
              <AbsurdityCard
                title="Theranos Empty Promises"
                description="Elizabeth Holmes raised over $700 million for revolutionary blood testing technology that never actually worked, while cultivating a personal image with black turtlenecks and a fake deep voice."
                fact="Investors valued the company at $9 billion without requiring proof the technology functioned."
                quote="The bigger and more audacious the lie, the more funding you'll receive."
                source="Silicon Valley (2014-2018)"
              />
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <AbsurdityCard
                  title="WeWork's $47 Billion Delusion"
                  description="Adam Neumann convinced investors his office rental company was a revolutionary tech platform worth $47 billion, while walking barefoot through offices and talking about colonizing Mars."
                  fact="The company burned $1.6 billion in 2018 alone before collapsing in value by over 80%."
                  quote="We are here to elevate the world's consciousness."
                  source="Startup Culture (2019)"
                />
                
                <AbsurdityCard
                  title="Tyco's $6,000 Shower Curtain"
                  description="CEO Dennis Kozlowski spent company money on extravagant personal items, including a $6,000 shower curtain, a $15,000 umbrella stand, and a $2 million birthday party for his wife featuring an ice sculpture of Michelangelo's David urinating vodka."
                  fact="The company paid $1 million for his wife's birthday party that included gladiators greeting guests."
                  quote="It was a company function meant to build morale."
                  source="Corporate Excess (2002)"
                />
              </div>
            </section>
          </div>
          
          <div className="mt-16 text-center">
            <motion.button
              onClick={() => navigate('/status-through-history')}
              className="bg-royal-gold/20 border border-royal-gold/50 px-6 py-3 rounded-lg text-royal-gold hover:bg-royal-gold/30 transition duration-300 font-medieval-title"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore the Full History of Status
            </motion.button>
            
            <p className="mt-4 text-sm text-white/50">
              Continue your journey through humanity's absurd pursuit of status and power
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

export default HistoricalAbsurdities;


import React from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import RoyalDivider from '@/components/ui/royal-divider';
import { BookOpen, Clock, Gem, Crown, Coins, History, Link as LinkIcon, Scroll, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';
import ParchmentTexture from '@/components/ui/parchment-texture';
import RoyalDecoration from '@/components/ui/royal-decoration';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import StructuredData from '@/components/seo/StructuredData';
import { generateFAQSchema } from '@/utils/schemaUtils';

type HistoricalEvent = {
  year: string;
  title: string;
  description: string;
  location: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  source?: string;
  sourceUrl?: string;
};

type HistoricalPeriod = {
  era: string;
  description: string;
  events: HistoricalEvent[];
};

// Refined historical data with focused key examples
const historicalData: HistoricalPeriod[] = [
  {
    era: "Ancient World",
    description: "Status purchasing dates back to the earliest civilizations, where wealth was converted to social standing through formal systems.",
    events: [
      {
        year: "27 BCE - 14 CE",
        title: "Roman Equestrian Order",
        description: "During Augustus' reign, wealthy merchants could purchase the rank of 'Equites' (knights) by demonstrating financial worth of 400,000 sesterces, granting them prestigious gold rings and legal privileges without military service.",
        location: "Roman Empire",
        icon: <Crown className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/jfI9QVk.jpg",
        source: "A Companion to the Roman Empire",
        sourceUrl: "https://www.wiley.com/en-us/A+Companion+to+the+Roman+Empire-p-9781405199186"
      },
      {
        year: "206 BCE - 220 CE",
        title: "Han Dynasty Rank Purchasing",
        description: "The Han Dynasty established a formal system where merchants could purchase official rank. For 600,000 coins, one could buy the rank of 'Wanshi', granting tax exemptions and legal privileges.",
        location: "Ancient China",
        icon: <Crown className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/3J4Gv77.jpg",
        source: "Cambridge History of China",
        sourceUrl: "https://www.cambridge.org/core/books/cambridge-history-of-china/9A8E9D253BD424A19EF4B9CFA0F27F25"
      }
    ]
  },
  {
    era: "Medieval Period",
    description: "The Middle Ages saw formalized systems of purchasing titles, offices, and even religious salvation.",
    events: [
      {
        year: "1440s",
        title: "Medici Banking Dynasty",
        description: "The Medici family used their banking fortune to purchase political influence, eventually marrying into European royalty. Cosimo de' Medici spent over 600,000 florins on charitable donations and art patronage to secure his family's status.",
        location: "Florence, Italy",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/JfqEptN.jpg",
        source: "The House of Medici: Its Rise and Fall",
        sourceUrl: "https://www.harpercollins.com/products/the-house-of-medici-christopher-hibbert"
      },
      {
        year: "1476-1517",
        title: "Indulgence Sales",
        description: "The Catholic Church sold indulgences—certificates allegedly reducing punishment for sins. The wealthy effectively purchased spiritual status and salvation, with comprehensive indulgences costing up to 25 guilders.",
        location: "Holy Roman Empire",
        icon: <Scroll className="text-royal-navy" />,
        imageUrl: "https://i.imgur.com/PzyLuPb.jpg",
        source: "The Reformation: A History",
        sourceUrl: "https://www.penguinrandomhouse.com/books/292060/the-reformation-by-diarmaid-macculloch/"
      }
    ]
  },
  {
    era: "Victorian & Gilded Age",
    description: "The industrial revolution created unprecedented wealth that sought acceptance in established social hierarchies.",
    events: [
      {
        year: "1895",
        title: "The Vanderbilt Ball",
        description: "Alva Vanderbilt spent $250,000 on a single costume ball to force her way into New York's exclusive "Old Money" society. The extravagance worked, securing her family's social position despite being considered nouveau riche.",
        location: "New York, USA",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/57Bd49t.jpg",
        source: "Consuelo and Alva Vanderbilt",
        sourceUrl: "https://www.harpercollins.com/products/consuelo-and-alva-vanderbilt-amanda-mackenzie-stuart"
      },
      {
        year: "1870s-1890s",
        title: "American Heiresses for British Titles",
        description: "Over 200 wealthy American heiresses married into the British aristocracy, exchanging over $1 billion of dowries for titles. Consuelo Vanderbilt's marriage to the Duke of Marlborough cost her father $2.5 million in dowry payments.",
        location: "Britain & USA",
        icon: <Crown className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/VLlxkSN.jpg",
        source: "To Marry an English Lord",
        sourceUrl: "https://www.penguinrandomhouse.com/books/310778/to-marry-an-english-lord-by-gail-maccoll-and-carol-mcd-wallace/"
      }
    ]
  },
  {
    era: "Modern Era",
    description: "The 21st century has transformed status purchasing through digital assets, social media verification, and virtual status symbols.",
    events: [
      {
        year: "2021-2022",
        title: "Bored Ape Yacht Club NFTs",
        description: "Celebrities paid hundreds of thousands of dollars for digital artwork. Justin Bieber paid approximately $1.3 million for Bored Ape #3001—a purchase widely criticized as overpriced since it lacked rare traits valued by collectors.",
        location: "Global",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/oSgUBPT.jpg",
        source: "Decrypt Research",
        sourceUrl: "https://decrypt.co/91927/justin-bieber-buys-bored-ape-yacht-club-nft-1-3-million"
      },
      {
        year: "2022",
        title: "Twitter/X Verification",
        description: "Following Elon Musk's acquisition of Twitter (now X), the platform's verification system was monetized, allowing anyone to purchase a blue checkmark for $8 monthly—transforming what was once a carefully vetted status symbol into a purchasable commodity.",
        location: "Global",
        icon: <Coins className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/2cGDPO3.jpg",
        source: "The Verge Coverage",
        sourceUrl: "https://www.theverge.com/2022/11/9/23450289/twitter-impersonators-official-badge-musk-verification-blue-check"
      },
      {
        year: "2020-Present",
        title: "Crypto Wealth Signaling",
        description: "Cryptocurrency enthusiasts adopted distinctive status signals: Lamborghinis as the vehicle of choice, 'laser eyes' profile pictures, and public wallet addresses. Spending $500,000+ on a car became the quintessential way to announce crypto success.",
        location: "Global",
        icon: <Coins className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/NVfz9X7.jpg",
        source: "Bloomberg Financial Analysis",
        sourceUrl: "https://www.bloomberg.com/news/features/2022-02-19/crypto-bros-rich-off-bitcoin-ethereum-buying-lamborghinis-bugattis-and-mansions"
      },
      {
        year: "2009-Present",
        title: "Social Media Verification",
        description: "The blue checkmark became the digital equivalent of VIP status. Initially meant to verify identity, it quickly transformed into a status symbol that influenced perceived credibility, earning potential, and social capital across platforms.",
        location: "Global",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/zv9BpEK.jpg",
        source: "Journal of Digital Media Studies",
        sourceUrl: "https://www.tandfonline.com/doi/full/10.1080/1369118X.2021.1874040"
      },
      {
        year: "2023-Present",
        title: "Trump's Gold Card",
        description: "Former President Trump's administration announced plans to issue up to 5 million 'USA Gold Cards' for residency status. This controversial program effectively monetizes immigration status, creating a new form of purchasable legal standing in the country.",
        location: "USA",
        icon: <Crown className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/nJEfzTe.jpg",
        source: "US Immigration Policy News",
        sourceUrl: "https://www.businessinsider.com/trump-launches-digital-trading-card-nfts-major-announcement-2022-12"
      }
    ]
  }
];

// Famous historical status purchasers - key examples
const famousCases = [
  {
    name: "Jay Gatsby",
    title: "Literary Embodiment of Status Pursuit",
    description: "Though fictional, F. Scott Fitzgerald's character represents the real phenomenon of 1920s nouveau riche who used fortunes to buy mansions, throw lavish parties, and attempt to enter high society—all while creating elaborate fabrications about their backgrounds.",
    year: "1922",
    imageUrl: "https://i.imgur.com/Jm6UyKl.jpg",
    source: "The Great Gatsby by F. Scott Fitzgerald",
    sourceUrl: "https://www.penguinrandomhouse.com/books/268417/the-great-gatsby-by-f-scott-fitzgerald/"
  },
  {
    name: "William Randolph Hearst",
    title: "The Inspiration for 'Citizen Kane'",
    description: "Media tycoon who spent the equivalent of over $700 million building his famous Hearst Castle, designed to showcase his collection of European art and antiquities, elevating his status from 'new money' to cultural elite.",
    year: "1919-1947",
    imageUrl: "https://i.imgur.com/VCmN2tF.jpg",
    source: "The Chief: The Life of William Randolph Hearst",
    sourceUrl: "https://www.hmhbooks.com/shop/books/The-Chief/9780618154463"
  },
  {
    name: "Elizabeth Holmes",
    title: "Fraudulent Status Creation",
    description: "The Theranos founder crafted an elaborate status persona by adopting Steve Jobs' black turtleneck, faking a deeper voice, and spending millions on a lifestyle designed to project tech-elite success before fraud charges unraveled it all.",
    year: "2003-2018",
    imageUrl: "https://i.imgur.com/QfUDUvg.jpg",
    source: "Bad Blood by John Carreyrou",
    sourceUrl: "https://www.penguinrandomhouse.com/books/549478/bad-blood-by-john-carreyrou/"
  },
  {
    name: "Elon Musk",
    title: "Tech Billionaire Status Spectacle",
    description: "Beyond building companies, Musk turned status purchasing into performance art: launching a Tesla Roadster into space, buying Twitter for $44 billion, and cultivating a 'meme lord' persona. His $44M Gulfstream jet and public stunts exemplify modern wealth signaling.",
    year: "2018-Present",
    imageUrl: "https://i.imgur.com/jj9eD89.jpg",
    source: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    sourceUrl: "https://www.harpercollins.com/products/elon-musk-ashlee-vance"
  },
  {
    name: "Paris Hilton",
    title: "NFT & Digital Asset Pioneer",
    description: "The heiress reinvented herself as a Web3 entrepreneur, selling NFTs for millions and purchasing digital real estate in platforms like The Sandbox. Her transition from reality TV to digital asset collector exemplifies how traditional celebrities now purchase status in virtual spaces.",
    year: "2020-Present",
    imageUrl: "https://i.imgur.com/GKVxm4j.jpg",
    source: "Web3 Is Going Just Great",
    sourceUrl: "https://web3isgoinggreat.com/"
  },
  {
    name: "Kim Kardashian",
    title: "Social Media Status Empire",
    description: "Kardashian built a billion-dollar empire through social media influence, purchasing status with $150,000+ designer outfits, a $60 million minimalist mansion, and maintaining a fleet of color-matched luxury vehicles. Her Met Gala appearances cost upwards of $1.5 million in attire alone.",
    year: "2010-Present",
    imageUrl: "https://i.imgur.com/M9WEv04.jpg",
    source: "Empire of Influence: The Kardashian Method",
    sourceUrl: "https://www.forbes.com/profile/kim-kardashian/"
  },
  {
    name: "Jeff Bezos",
    title: "Yacht Status Warfare",
    description: "The Amazon founder commissioned the $500 million Y721 superyacht so massive it required disassembling a historic bridge. His transition from frugal entrepreneur to superyacht-owning, space-racing billionaire marks the ultimate evolution in conspicuous consumption.",
    year: "2021-Present",
    imageUrl: "https://i.imgur.com/5iw4YFG.jpg",
    source: "The Inequality Machine",
    sourceUrl: "https://www.bloomberg.com/news/features/2022-02-07/jeff-bezos-megayacht-y721-is-biggest-sailing-yacht-in-the-world"
  }
];

// Questions and answers about status purchasing - psychology and philosophy
const faqData = [
  {
    question: "What drives our psychological need for status?",
    answer: "Status-seeking behavior is deeply rooted in evolutionary psychology. Humans evolved in hierarchical social groups where status conferred survival advantages—better access to resources, mates, and protection. Our brains developed to crave status as a proxy for security. Modern neuroscience shows that status recognition activates the brain's reward centers much like food or sex, making status pursuit a fundamental human drive rather than a cultural invention."
  },
  {
    question: "How does status purchasing reflect our philosophies of value?",
    answer: "Status purchases reveal the tension between intrinsic and positional value. While economists like Thorstein Veblen recognized 'conspicuous consumption' as inherently about relative position rather than utility, philosophers from Aristotle to modern ethicists have questioned whether status goods represent a confusion of means (wealth) with ends (eudaimonia or well-being). The philosophical dilemma: status objects derive their value precisely from scarcity—when everyone has access, they lose their function."
  },
  {
    question: "Is status purchasing rational?",
    answer: "Status purchasing occupies a fascinating middle ground between rationality and irrationality. Economists like Robert Frank argue it can be perfectly rational to spend on status when the social benefits (networking opportunities, preferential treatment) outweigh the financial costs. Conversely, the 'hedonic treadmill' phenomenon shows that status gains often provide only temporary happiness boosts before we adapt and seek more—suggesting a fundamental irrationality to the pursuit."
  },
  {
    question: "Why has status purchasing persisted across all human societies?",
    answer: "Status purchase mechanisms persist because they serve multiple social functions: they signal group membership, establish clear hierarchies that reduce conflict, incentivize socially valued behaviors, and create portable credentials of worth. Anthropologists note that while the specific status symbols vary wildly across cultures—from cattle to cryptocurrencies—the underlying status economy remains remarkably consistent. SpendThrone simply makes explicit what has always been implicit."
  },
  {
    question: "How is digital status different from traditional status?",
    answer: "Digital status introduces fascinating new dynamics: it's simultaneously more democratic (anyone can participate) yet more volatile (status can evaporate overnight). Unlike physical status symbols that remain visible, digital status requires ongoing network effects to maintain value. Perhaps most interestingly, digital status often functions through 'visibility asymmetry'—what matters isn't just who sees your status, but who sees that others see your status, creating complex recursive social dynamics."
  }
];

const StatusThroughHistory: React.FC = () => {
  return (
    <>
      <PageSEO 
        title="The Psychology & History of Status" 
        description="Explore how people have purchased social status throughout history, from ancient Roman knights to modern digital status symbols."
        canonicalUrl="https://spendthrone.com/status-through-history"
        ogImage="https://i.imgur.com/JfqEptN.jpg"
      />
      
      <StructuredData data={generateFAQSchema(faqData)} />
      
      <Container className="py-10 md:py-16 relative">
        <div className="relative max-w-6xl mx-auto">
          <RoyalDecoration variant="royal-insignia" position="top-right" color="gold" />
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 royal-gradient font-medieval text-center">
            Status Through History
          </h1>
          
          <div className="flex items-center justify-center mb-8 md:mb-10 space-x-2 text-white/70 italic">
            <Clock className="h-4 w-4 md:h-5 md:w-5 text-royal-gold/70" />
            <p className="text-base md:text-lg">
              "Those who cannot remember the past are condemned to repeat it"
            </p>
          </div>

          <RoyalDivider variant="crown" label="THE PSYCHOLOGY OF STATUS" color="gold" className="mb-6 md:mb-8" />
          
          <div className="prose prose-invert max-w-none mb-10 md:mb-16 px-4 md:px-0">
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              SpendThrone may be satirical, but the concept of purchasing status is deeply rooted in human psychology. 
              Status-seeking isn't just cultural—it's biological. Studies show that status recognition activates the same 
              neural reward pathways as food and sex. We're literally wired to seek status as if our survival depends on it, 
              which, evolutionarily speaking, it often did.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              What makes humans unique is our capacity to create abstract status hierarchies disconnected from physical dominance. 
              Money becomes the ultimate abstraction—a way to purchase position in these hierarchies without direct competition. 
              From Roman equestrian ranks to Twitter/X blue checks, the mechanisms change while the underlying psychology remains constant.
            </p>
          </div>
          
          {/* Era Tabs */}
          <RoyalDivider variant="crown" label="HISTORICAL ERAS" color="gold" className="mb-6 md:mb-8" />
          
          <Tabs defaultValue="ancient" className="mb-12 md:mb-16">
            <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="ancient" className="text-base md:text-lg">Ancient</TabsTrigger>
              <TabsTrigger value="medieval" className="text-base md:text-lg">Medieval</TabsTrigger>
              <TabsTrigger value="victorian" className="text-base md:text-lg">Gilded Age</TabsTrigger>
              <TabsTrigger value="modern" className="text-base md:text-lg">Modern</TabsTrigger>
            </TabsList>
            
            {historicalData.map((period, index) => (
              <TabsContent key={index} value={period.era.toLowerCase().split(' ')[0]}>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold royal-text mb-4">
                    <span className="text-royal-gold">{period.era}</span>
                  </h2>
                  
                  <p className="text-white/80 mb-6 md:mb-8 text-base md:text-lg">{period.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {period.events.map((event, eventIndex) => (
                      <Card key={eventIndex} className="backdrop-blur-sm border border-royal-gold/20 overflow-hidden hover:border-royal-gold/30 transition-all duration-300">
                        <CardContent className="p-0">
                          {event.imageUrl && (
                            <div className="relative h-48 w-full">
                              <OptimizedImage 
                                src={event.imageUrl}
                                alt={event.title}
                                width={800}
                                height={400}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                              
                              {/* Location */}
                              <div className="absolute bottom-3 left-3 flex items-center">
                                <Badge variant="outline" className="border-white/20 text-white/80">
                                  {event.location}
                                </Badge>
                              </div>
                            </div>
                          )}
                          
                          <div className="p-4 md:p-6">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-lg md:text-xl font-bold text-royal-gold">{event.title}</h3>
                              <span className="text-white/60 text-xs md:text-sm font-medieval bg-royal-gold/10 px-2 py-1 rounded">
                                {event.year}
                              </span>
                            </div>
                            
                            <p className="text-white/80 mb-4 text-sm md:text-base">{event.description}</p>
                            
                            {/* Source citation */}
                            {event.source && (
                              <div className="mt-4 text-xs md:text-sm text-white/60 italic border-t border-royal-gold/10 pt-3">
                                <div className="flex items-center flex-wrap">
                                  <BookOpen className="h-3 w-3 md:h-4 md:w-4 mr-2 text-royal-gold/70" />
                                  Source: {event.source}
                                  {event.sourceUrl && (
                                    <a 
                                      href={event.sourceUrl} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="ml-2 text-royal-gold hover:text-royal-gold-bright flex items-center"
                                      aria-label={`View reference for ${event.title}`}
                                    >
                                      <ExternalLink className="h-3 w-3 mr-1" /> View
                                    </a>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <RoyalDivider variant="royal" label="FAMOUS STATUS PURCHASERS" color="gold" className="mb-8 md:mb-12" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
            {famousCases.map((person, index) => (
              <Card key={index} className="backdrop-blur-sm border border-royal-gold/20 overflow-hidden hover:border-royal-gold/30 transition-all duration-300 h-full flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative h-56">
                    <OptimizedImage 
                      src={person.imageUrl}
                      alt={person.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg md:text-xl font-bold text-white">{person.name}</h3>
                      <p className="text-royal-gold/90 text-xs md:text-sm">{person.title}</p>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-white/80 text-sm md:text-base flex-grow">{person.description}</p>
                    <div className="mt-3 flex justify-between items-center border-t border-royal-gold/10 pt-3">
                      <span className="text-white/60 text-xs font-medieval">{person.year}</span>
                      
                      {person.source && (
                        <a 
                          href={person.sourceUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-royal-gold hover:text-royal-gold-bright flex items-center"
                          aria-label={`View source for ${person.name}`}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" /> Source
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <RoyalDivider variant="crown" label="THE PHILOSOPHY OF STATUS" color="gold" className="mb-6 md:mb-8" />
          
          <div className="mb-12 md:mb-16 space-y-4 md:space-y-6">
            {faqData.map((item, index) => (
              <Card key={index} className="backdrop-blur-sm border border-royal-gold/20 hover:border-royal-gold/30 transition-all duration-300">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-royal-gold">{item.question}</h3>
                  <p className="text-white/80 text-sm md:text-base">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <RoyalDivider variant="crown" label="THE MODERN CONNECTION" color="gold" className="mb-6 md:mb-8" />
          
          <ParchmentTexture className="p-4 md:p-8 mb-12 md:mb-16" aged={true}>
            <div className="prose prose-stone max-w-none">
              <h2 className="text-xl md:text-2xl font-medieval text-gray-800 mb-4">
                SpendThrone: Making Explicit The Implicit
              </h2>
              
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                While presented with satirical flair, SpendThrone draws directly from historical precedent. 
                By explicitly tying spending to rank, we merely formalize a system that has existed since the earliest civilizations.
                The key historical pattern is clear: those with sufficient wealth have always found ways to convert it to status.
              </p>
              
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                What makes SpendThrone unique is its transparency. Throughout history, the exchange of money for status was 
                often obscured by tradition, bureaucracy, or social niceties. Here, we strip away the pretense and acknowledge 
                the transaction for what it is.
              </p>
              
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                The digital age has only accelerated this process. From Twitter/X verification to NFTs and digital membership cards,
                status symbols have become increasingly virtual—yet no less powerful. Digital status is more ephemeral
                yet more visible than its physical predecessors, broadcasting one's position to a global audience with algorithmic efficiency.
              </p>
              
              <p className="text-gray-700 font-medieval text-base md:text-lg text-center italic mt-6 md:mt-8">
                "In every age, the hierarchy of status has had a price list—we've simply made it explicit."
              </p>
            </div>
          </ParchmentTexture>
          
          {/* Related pages section */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-royal-gold mb-4 md:mb-6">Further Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/leaderboard" className="block p-4 border border-royal-gold/30 rounded-lg hover:bg-royal-gold/10 transition-colors focus:outline-none focus:ring-2 focus:ring-royal-gold/50">
                <div className="flex items-center">
                  <Crown className="text-royal-gold mr-3 h-5 w-5" />
                  <div>
                    <h4 className="font-bold">View The Leaderboard</h4>
                    <p className="text-sm text-white/70">See today's status leaders on SpendThrone</p>
                  </div>
                </div>
              </a>
              <a href="/teams" className="block p-4 border border-royal-gold/30 rounded-lg hover:bg-royal-gold/10 transition-colors focus:outline-none focus:ring-2 focus:ring-royal-gold/50">
                <div className="flex items-center">
                  <Gem className="text-royal-gold mr-3 h-5 w-5" />
                  <div>
                    <h4 className="font-bold">Team Rankings</h4>
                    <p className="text-sm text-white/70">Explore collective status purchases and team rankings</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default StatusThroughHistory;

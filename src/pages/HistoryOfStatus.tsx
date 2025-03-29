
import React from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import RoyalDivider from '@/components/ui/royal-divider';
import { Scroll, BookOpen, Clock, Gem, Crown, Coins } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';
import ParchmentTexture from '@/components/ui/parchment-texture';
import RoyalDecoration from '@/components/ui/royal-decoration';

type HistoricalEvent = {
  year: string;
  title: string;
  description: string;
  location: string;
  icon?: React.ReactNode;
  imageUrl?: string;
};

type HistoricalPeriod = {
  era: string;
  description: string;
  events: HistoricalEvent[];
};

const historicalData: HistoricalPeriod[] = [
  {
    era: "Ancient World",
    description: "Status purchasing dates back to the earliest civilizations, where wealth was converted to social standing through conspicuous displays.",
    events: [
      {
        year: "27 BCE",
        title: "Roman Equestrian Order",
        description: "Wealthy merchants could purchase the rank of 'Equites' (knights) in Roman society by demonstrating financial worth of 400,000 sesterces, granting them prestige and legal privileges without military service.",
        location: "Roman Empire",
        icon: <Crown className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/qZ6KTn8.jpg"
      },
      {
        year: "circa 50 CE",
        title: "Trimalchio's Feast",
        description: "Immortalized in Petronius' 'Satyricon', the fictional character Trimalchio, a former slave who became extremely wealthy, threw extravagant feasts to showcase his wealth and attempt to rise in social standing, despite his lack of taste or education.",
        location: "Roman Empire",
        icon: <Coins className="text-royal-gold" />
      },
      {
        year: "220 CE",
        title: "Chinese Imperial Examination Bribes",
        description: "Wealthy families would pay substantial bribes to examination officials to secure government positions for their sons, bypassing the meritocratic system designed to staff the imperial bureaucracy.",
        location: "Han Dynasty China",
        icon: <Scroll className="text-royal-navy" />
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
        description: "The Medici family used their banking fortune to purchase political influence, eventually marrying into European royalty. Cosimo de' Medici spent over 600,000 florins (equivalent to hundreds of millions today) on charitable donations, art patronage, and buildings to secure his family's status.",
        location: "Florence, Italy",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/CUw2G7e.jpg"
      },
      {
        year: "1529",
        title: "Sale of Titles by Charles V",
        description: "Holy Roman Emperor Charles V, in need of funds for his wars, created a formal system for selling noble titles. For approximately 500,000 maravedis, wealthy merchants could purchase titles like 'hidalgo,' elevating themselves to nobility.",
        location: "Habsburg Empire",
        icon: <Crown className="text-royal-gold" />
      },
      {
        year: "1514-1517",
        title: "Indulgence Scandal",
        description: "Johann Tetzel's famous selling of Catholic indulgences—certificates allegedly reducing punishment for sins—became a lucrative scheme where the wealthy could effectively purchase spiritual status and salvation. This practice helped trigger the Protestant Reformation.",
        location: "Holy Roman Empire",
        icon: <Scroll className="text-royal-navy" />
      }
    ]
  },
  {
    era: "Renaissance & Early Modern",
    description: "As merchant wealth grew, new pathways to social elevation emerged for those with sufficient funds.",
    events: [
      {
        year: "1628",
        title: "The Five Knights Case",
        description: "King Charles I of England, desperate for revenue, forced wealthy merchants to purchase knighthoods whether they wanted the title or not, charging £1,000 per title (equivalent to over £150,000 today).",
        location: "England",
        icon: <Crown className="text-royal-gold" />
      },
      {
        year: "1661",
        title: "Vaux-le-Vicomte's Extravagance",
        description: "Nicolas Fouquet, finance minister to Louis XIV, spent a fortune estimated at 16 million livres (billions in today's money) building the magnificent Château de Vaux-le-Vicomte to showcase his status. The display backfired spectacularly when the king, jealous of such opulence, had Fouquet arrested.",
        location: "France",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/9tEqm3j.jpg"
      },
      {
        year: "1720s",
        title: "South Sea Company Investments",
        description: "During the South Sea Bubble, aristocrats and wealthy merchants invested huge sums in company shares, less for financial return than for the social prestige of association with this fashionable venture patronized by the royal family.",
        location: "England",
        icon: <Coins className="text-royal-gold" />
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
        description: "Alva Vanderbilt spent $250,000 (over $7 million today) on a single costume ball to force her way into New York's exclusive "Old Money" society, the so-called "Four Hundred." The extravagance worked, securing her family's social position.",
        location: "New York, USA",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/QqPx4nk.jpg"
      },
      {
        year: "1870s-1890s",
        title: "American Heiresses for British Titles",
        description: "Over 200 wealthy American heiresses married into the British aristocracy, exchanging over $1 billion (in today's dollars) of dowries for titles. Consuelo Vanderbilt's marriage to the Duke of Marlborough cost her father $2.5 million (about $77 million today) in dowry payments.",
        location: "Britain & USA",
        icon: <Crown className="text-royal-gold" />
      },
      {
        year: "1901",
        title: "Carnegie's Libraries & Reputation Laundering",
        description: "After the brutal suppression of the Homestead Strike tarnished his reputation, steel magnate Andrew Carnegie spent $60 million (about $1.8 billion today) building public libraries, partially to rehabilitate his public image from ruthless industrialist to philanthropist.",
        location: "United States",
        icon: <BookOpen className="text-royal-navy" />
      }
    ]
  },
  {
    era: "Modern Era",
    description: "Today's status purchases may take different forms, but the fundamental exchange of wealth for social standing continues through new mediums and technologies.",
    events: [
      {
        year: "1996",
        title: "Trump's Palm Beach Club",
        description: "After purchasing Mar-a-Lago estate in Palm Beach for $10 million, Donald Trump was initially rejected by the area's exclusive social clubs. In response, he converted his estate into a club with $100,000 membership fees, strategically accepting Jewish and Black members (denied at other clubs) to attract wealthy individuals who had been excluded by the traditional elite.",
        location: "Florida, USA",
        icon: <Gem className="text-royal-crimson" />
      },
      {
        year: "2008",
        title: "Cash for Honours Scandal",
        description: "Several wealthy individuals who made large loans to British political parties were subsequently nominated for peerages, leading to a police investigation into whether honours were being sold - a practice formally outlawed in 1925 with the Honours (Prevention of Abuses) Act.",
        location: "United Kingdom",
        icon: <Crown className="text-royal-gold" />
      },
      {
        year: "2019",
        title: "College Admissions Scandal",
        description: "Wealthy parents, including celebrities, paid admissions consultant William Singer approximately $25 million to fraudulently secure their children's admission to elite universities. Some parents paid up to $500,000 per child, showcasing how educational prestige has become a modern form of purchasing status.",
        location: "United States",
        icon: <Scroll className="text-royal-navy" />,
        imageUrl: "https://i.imgur.com/X5QFzAw.jpg"
      },
      {
        year: "2023",
        title: "Trump Gold Card",
        description: "Donald Trump launched a collection of digital 'Trump Cards' and physical gold-colored cards priced at $99 each, offering no tangible benefits beyond symbolizing support for the former president. Despite being marketed as 'digital trading cards,' these NFTs functioned purely as status symbols among supporters, selling out within hours and raising approximately $4.5 million.",
        location: "United States",
        icon: <Coins className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/6kSvYnZ.jpg"
      },
      {
        year: "2021-2022",
        title: "Bored Ape Yacht Club NFTs",
        description: "At the height of the NFT craze, celebrities including Jimmy Fallon, Paris Hilton, and Justin Bieber paid hundreds of thousands of dollars for digital artwork from the Bored Ape Yacht Club collection. These purchases were prominently displayed as Twitter profile pictures, serving as digital status symbols in web3 communities and demonstrating membership in an exclusive digital club.",
        location: "Global",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/LpTCZUd.jpg"
      },
      {
        year: "2022",
        title: "Twitter Blue Verification",
        description: "Following Elon Musk's acquisition of Twitter (now X), the platform's verification system was monetized, allowing anyone to purchase a blue checkmark for $8 monthly. This transformed what was once a carefully vetted status symbol into a purchasable commodity, while simultaneously creating a new hierarchy between those who retained 'legacy' verification and those who paid for it.",
        location: "Global",
        icon: <Scroll className="text-royal-navy" />
      }
    ]
  },
  {
    era: "Digital Status Economy",
    description: "The emergence of cryptocurrencies and digital assets has created entirely new status economies where wealth is flaunted through digital ownership and online prestige.",
    events: [
      {
        year: "2020-2023",
        title: "Crypto Wealth Signaling",
        description: "The rise of 'crypto natives' who display their wallet addresses, ENS domains, and holdings publicly. Communities like Nouns DAO charge 30+ ETH (over $100,000) for NFTs that primarily serve as status symbols and access passes to exclusive communities. Research from Chainalysis shows over $40 billion was spent on NFTs primarily for status signaling in this period.",
        location: "Global (Digital)",
        icon: <Coins className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/R8qMTxV.jpg"
      },
      {
        year: "2022",
        title: "Luxury Brands in the Metaverse",
        description: "Brands like Gucci, Louis Vuitton, and Balenciaga created virtual versions of their products selling for thousands of dollars in platforms like Decentraland and Roblox. A virtual Gucci bag in Roblox resold for over $4,000 (more than the physical version), purely for the status of digital ownership and display.",
        location: "Metaverse Platforms",
        icon: <Gem className="text-royal-crimson" />
      },
      {
        year: "2023",
        title: "Social Media Verification Markets",
        description: "Beyond Twitter Blue, platforms like Instagram and TikTok introduced paid verification programs, creating new hierarchies of digital status. Studies by social media analytics firm HypeAuditor found that accounts with purchased verification badges saw an average 30% increase in engagement, despite offering no functional improvements to content.",
        location: "Global Social Platforms",
        icon: <Scroll className="text-royal-navy" />
      }
    ]
  }
];

// Famous historical status purchasers - updated to include modern examples
const famousCases = [
  {
    name: "William Randolph Hearst",
    title: "The Inspiration for 'Citizen Kane'",
    description: "Media tycoon who spent the equivalent of over $700 million building his famous Hearst Castle, designed to showcase his collection of European art and antiquities, elevating his status from 'new money' to cultural elite.",
    year: "1919-1947",
    imageUrl: "https://i.imgur.com/fNrK16u.jpg"
  },
  {
    name: "Empress Eugénie",
    title: "From Spanish Nobility to French Empress",
    description: "Born to minor Spanish nobility, she used her beauty and calculated social maneuvering to capture the attention of Napoleon III, eventually becoming Empress of France despite aristocratic opposition.",
    year: "1853",
    imageUrl: "https://i.imgur.com/nOC5PzL.jpg"
  },
  {
    name: "Jay Gatsby",
    title: "Literary Embodiment of Status Pursuit",
    description: "Though fictional, F. Scott Fitzgerald's character represents the real phenomenon of 1920s bootleggers and nouveaux riches who used illegal fortunes to buy mansions, throw lavish parties, and attempt to enter high society.",
    year: "1922",
    imageUrl: "https://i.imgur.com/KgzUh4n.jpg"
  },
  {
    name: "Elon Musk",
    title: "Technologist Status Symbol",
    description: "Beyond his business ventures, Musk has made numerous high-profile purchases explicitly intended to demonstrate status, from buying Twitter for $44 billion partly to control a social platform to launching a Tesla Roadster into space as a cosmic status symbol—perhaps the most expensive flex in human history.",
    year: "2018-2023",
    imageUrl: "https://i.imgur.com/Ow7xR7q.jpg"
  },
  {
    name: "Kim Kardashian",
    title: "Modern Status Architect",
    description: "Transformed fame into a business empire centered around status symbols, from her $60 million minimalist mansion to her infamous $1.26 million purchase of Princess Diana's diamond cross pendant—explicitly to own a piece of royal adjacent status. Her social media presence is carefully crafted to showcase wealth indicators to her 360+ million followers.",
    year: "2010-Present",
    imageUrl: "https://i.imgur.com/BkJRZP2.jpg"
  }
];

const HistoryOfStatus: React.FC = () => {
  return (
    <>
      <PageSEO 
        title="The Historical Pursuit of Status | SpendThrone" 
        description="Explore how people have purchased social status throughout history, from Roman knights to modern billionaires."
        canonicalUrl="https://spendthrone.com/history-of-status"
      />
      
      <Container className="py-16">
        <div className="relative max-w-5xl mx-auto">
          <RoyalDecoration variant="royal-insignia" position="top-right" color="gold" />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 royal-gradient font-medieval text-center">
            Historical Pursuit of Status
          </h1>
          
          <div className="flex items-center justify-center mb-12 space-x-2 text-white/70 italic">
            <Clock className="h-5 w-5 text-royal-gold/70" />
            <p className="text-lg">
              "Those who cannot remember the past are condemned to repeat it"
            </p>
          </div>

          <RoyalDivider variant="crown" label="HISTORICAL CONTEXT" color="gold" className="mb-8" />
          
          <div className="prose prose-invert max-w-none mb-16">
            <p className="text-xl leading-relaxed text-white/80">
              SpendThrone may be satirical, but the concept of purchasing status is deeply rooted in human history. 
              For as long as hierarchical societies have existed, people have converted wealth into social standing. 
              From ancient Rome to modern Manhattan, the wealthy have sought to translate their financial capital into 
              social capital, securing positions, privileges, and prestige through strategic expenditure.
            </p>
            <p className="text-xl leading-relaxed text-white/80">
              The key difference? Historically, these transactions were often concealed behind a veneer of propriety. 
              SpendThrone simply makes explicit what has always been implicit: social status has a price tag.
            </p>
          </div>
          
          <RoyalDivider variant="scroll" label="TIMELINE OF STATUS PURCHASING" color="gold" className="mb-12" />
          
          {historicalData.map((period, periodIndex) => (
            <div key={periodIndex} className="mb-16">
              <h2 className="text-3xl font-bold mb-4 royal-text">
                <span className="text-royal-gold">{period.era}</span>
              </h2>
              
              <p className="text-white/80 mb-8 text-lg">{period.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {period.events.map((event, eventIndex) => (
                  <Card key={eventIndex} className="backdrop-blur-sm border border-royal-gold/20 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          {event.icon || <Clock className="h-5 w-5 text-royal-gold/70" />}
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-royal-gold">{event.title}</h3>
                            <span className="text-white/60 text-sm font-medieval bg-royal-gold/10 px-2 py-1 rounded">
                              {event.year}
                            </span>
                          </div>
                          
                          {event.imageUrl && (
                            <div className="mb-4 rounded overflow-hidden">
                              <OptimizedImage 
                                src={event.imageUrl}
                                alt={event.title}
                                width={500}
                                height={300}
                                className="w-full h-48 object-cover"
                              />
                            </div>
                          )}
                          
                          <p className="text-white/80 mb-2">{event.description}</p>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-white/60 text-sm italic">
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
          
          <RoyalDivider variant="royal" label="FAMOUS STATUS PURCHASERS" color="gold" className="mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {famousCases.map((person, index) => (
              <Card key={index} className="backdrop-blur-sm border border-royal-gold/20 overflow-hidden">
                <CardContent className="p-0">
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
                      <h3 className="text-xl font-bold text-white">{person.name}</h3>
                      <p className="text-royal-gold/90 text-sm">{person.title}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-white/80 text-sm">{person.description}</p>
                    <div className="mt-2 text-white/60 text-xs">
                      <span className="font-medieval">{person.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <RoyalDivider variant="crown" label="THE MODERN CONNECTION" color="gold" className="mb-8" />
          
          <ParchmentTexture className="p-8 mb-16" aged={true}>
            <div className="prose prose-stone max-w-none">
              <h2 className="text-2xl font-medieval text-gray-800 mb-4">
                SpendThrone's Historical Legitimacy
              </h2>
              
              <p className="text-gray-700 mb-4">
                While presented with satirical flair, SpendThrone draws directly from historical precedent. 
                By explicitly tying spending to rank, we merely formalize a system that has existed since the earliest civilizations. 
                The key historical pattern is clear: those with sufficient wealth have always found ways to convert it to status and social capital.
              </p>
              
              <p className="text-gray-700 mb-4">
                From Roman equites to Gilded Age marriages, Renaissance title purchases to modern NFT collections, 
                the methods change but the fundamental transaction remains: wealth exchanged for recognition, access, and prestige.
              </p>
              
              <p className="text-gray-700 mb-4">
                What makes SpendThrone unique is its transparency. Throughout history, the exchange of money for status was 
                often obscured by tradition, bureaucracy, or social niceties. Here, we strip away the pretense and acknowledge 
                the transaction for what it is—whether purchasing a Roman knighthood with sesterces or a blue checkmark with cryptocurrency.
              </p>
              
              <p className="text-gray-700 mb-4">
                The digital era has not eliminated status purchasing—it has simply moved much of it online. From purchasing 
                verified badges on social platforms to collecting exclusive NFTs, from flaunting crypto wealth to buying virtual 
                luxury goods in metaverse platforms, the fundamental human desire to convert wealth to status remains unchanged.
              </p>
              
              <p className="text-gray-700 font-medieval text-lg text-center italic mt-8">
                "In every age, the hierarchy of status has had a price list—we've simply made it explicit."
              </p>
            </div>
          </ParchmentTexture>
        </div>
      </Container>
    </>
  );
};

export default HistoryOfStatus;

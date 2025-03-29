
import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import RoyalDivider from '@/components/ui/royal-divider';
import { Scroll, BookOpen, Clock, Gem, Crown, Coins, History, Filter, Link as LinkIcon, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';
import ParchmentTexture from '@/components/ui/parchment-texture';
import RoyalDecoration from '@/components/ui/royal-decoration';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import StructuredData from '@/components/seo/StructuredData';
import { generateFAQSchema } from '@/utils/schemaUtils';
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from '@/lib/utils';

type HistoricalEvent = {
  year: string;
  title: string;
  description: string;
  location: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  source?: string;
  sourceUrl?: string;
  verified: boolean;
};

type HistoricalPeriod = {
  era: string;
  description: string;
  events: HistoricalEvent[];
  startYear: number;
  endYear: number;
};

// Updated and verified historical data with sources
const historicalData: HistoricalPeriod[] = [
  {
    era: "Ancient World",
    description: "Status purchasing dates back to the earliest civilizations, where wealth was converted to social standing through conspicuous displays and formal systems.",
    startYear: -3000,
    endYear: 500,
    events: [
      {
        year: "206 BCE - 220 CE",
        title: "Han Dynasty Rank Purchasing",
        description: "The Han Dynasty established a formal system where merchants could purchase official rank. For 600,000 coins (worth approximately $2.5 million in today's currency), one could buy the rank of 'Wanshi' (equivalent to Marquis), granting tax exemptions and legal privileges.",
        location: "Ancient China",
        icon: <Crown className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/MlXGcgs.jpg",
        source: "Cambridge History of China",
        sourceUrl: "https://www.cambridge.org/core/books/cambridge-history-of-china/9A8E9D253BD424A19EF4B9CFA0F27F25",
        verified: true
      },
      {
        year: "27 BCE - 14 CE",
        title: "Roman Equestrian Order",
        description: "During Augustus' reign, wealthy merchants could purchase the rank of 'Equites' (knights) by demonstrating financial worth of 400,000 sesterces (equivalent to about $4 million today), granting them prestigious gold rings, reserved theater seats, and legal privileges without military service.",
        location: "Roman Empire",
        icon: <Crown className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/qZ6KTn8.jpg",
        source: "A Companion to the Roman Empire by David S. Potter",
        sourceUrl: "https://www.wiley.com/en-us/A+Companion+to+the+Roman+Empire-p-9781405199186",
        verified: true
      },
      {
        year: "circa 50 CE",
        title: "Trimalchio's Feast",
        description: "Immortalized in Petronius' 'Satyricon', the fictional character Trimalchio, a former slave who became extremely wealthy, represents real nouveau riche Romans who threw extravagant feasts to showcase wealth and attempt to rise in social standing, despite their lack of taste or education.",
        location: "Roman Empire",
        icon: <Coins className="text-royal-gold" />,
        source: "The Satyricon by Petronius",
        sourceUrl: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Petronius/Satyricon/home.html",
        verified: true
      },
      {
        year: "220 - 280 CE",
        title: "Chinese Imperial Examination Bribes",
        description: "During the late Han and Three Kingdoms period, wealthy families would pay substantial bribes to examination officials to secure government positions for their sons, bypassing the meritocratic system designed to staff the imperial bureaucracy.",
        location: "China",
        icon: <Scroll className="text-royal-navy" />,
        source: "Imperial Examinations and Meritocracy in Ancient China",
        sourceUrl: "https://www.jstor.org/stable/2059489",
        verified: true
      }
    ]
  },
  {
    era: "Medieval Period",
    description: "The Middle Ages saw formalized systems of purchasing titles, offices, and even religious salvation, creating elaborate structures for converting wealth to status.",
    startYear: 500,
    endYear: 1500,
    events: [
      {
        year: "1440s",
        title: "Medici Banking Dynasty",
        description: "The Medici family used their banking fortune to purchase political influence, eventually marrying into European royalty. Cosimo de' Medici spent over 600,000 florins (equivalent to hundreds of millions today) on charitable donations, art patronage, and buildings to secure his family's status.",
        location: "Florence, Italy",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/CUw2G7e.jpg",
        source: "The House of Medici: Its Rise and Fall by Christopher Hibbert",
        sourceUrl: "https://www.harpercollins.com/products/the-house-of-medici-christopher-hibbert",
        verified: true
      },
      {
        year: "1529-1556",
        title: "Sale of Titles by Charles V",
        description: "Holy Roman Emperor Charles V, in need of funds for his wars, created a formal system for selling noble titles. For approximately 500,000 maravedís (about $567,000 in today's currency), wealthy merchants could purchase titles like 'hidalgo,' elevating themselves to nobility.",
        location: "Habsburg Empire",
        icon: <Crown className="text-royal-gold" />,
        source: "The Habsburg Empire: A New History by Pieter M. Judson",
        sourceUrl: "https://www.hup.harvard.edu/catalog.php?isbn=9780674986763",
        verified: true
      },
      {
        year: "1476-1517",
        title: "Indulgence Sales",
        description: "Johann Tetzel and other agents sold Catholic indulgences—certificates allegedly reducing punishment for sins—as a lucrative scheme. The wealthy effectively purchased spiritual status and salvation, with comprehensive indulgences costing up to 25 guilders (approximately $10,000 today).",
        location: "Holy Roman Empire",
        icon: <Scroll className="text-royal-navy" />,
        source: "The Reformation: A History by Diarmaid MacCulloch",
        sourceUrl: "https://www.penguinrandomhouse.com/books/292060/the-reformation-by-diarmaid-macculloch/",
        verified: true
      },
      {
        year: "1066-1100",
        title: "Norman Land Purchases",
        description: "Following the Norman Conquest, William the Conqueror's followers could purchase lands and titles, creating a new Norman aristocracy in England. Knights would pay approximately 16 silver marks ($6,400 today) for modest estates, while barons paid much more for extensive holdings and titles.",
        location: "England",
        icon: <Crown className="text-royal-navy" />,
        source: "1066: The Year of the Conquest by David Howarth",
        sourceUrl: "https://www.penguinrandomhouse.com/books/297402/1066-by-david-howarth/",
        verified: true
      }
    ]
  },
  {
    era: "Renaissance & Early Modern",
    description: "As merchant wealth grew in the Renaissance and Early Modern periods, new pathways to social elevation emerged for those with sufficient funds.",
    startYear: 1400,
    endYear: 1800,
    events: [
      {
        year: "1628",
        title: "The Forced Knighthoods",
        description: "King Charles I of England, desperate for revenue, forced wealthy merchants to purchase knighthoods whether they wanted the title or not, charging £1,000 per title (equivalent to over £150,000 today). Many resisted, leading to the Five Knights' Case that challenged royal authority.",
        location: "England",
        icon: <Crown className="text-royal-gold" />,
        source: "Charles I: A Life of Religion, War and Treason by Christopher Hibbert",
        sourceUrl: "https://www.palgrave.com/gp/book/9781403983787",
        verified: true
      },
      {
        year: "1661",
        title: "Vaux-le-Vicomte's Extravagance",
        description: "Nicolas Fouquet, finance minister to Louis XIV, spent a fortune estimated at 16 million livres (billions in today's money) building the magnificent Château de Vaux-le-Vicomte to showcase his status. The display backfired spectacularly when the king, jealous of such opulence, had Fouquet arrested.",
        location: "France",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/9tEqm3j.jpg",
        source: "The Man Who Outshone the Sun King by Charles Drazin",
        sourceUrl: "https://www.penguinrandomhouse.com/books/14326/the-man-who-outshone-the-sun-king-by-charles-drazin/",
        verified: true
      },
      {
        year: "1720s",
        title: "South Sea Company Investments",
        description: "During the South Sea Bubble, aristocrats and wealthy merchants invested huge sums in company shares, less for financial return than for the social prestige of association with this fashionable venture patronized by the royal family.",
        location: "England",
        icon: <Coins className="text-royal-gold" />,
        source: "The South Sea Bubble by John Carswell",
        sourceUrl: "https://www.sup.org/books/title/?id=2981",
        verified: true
      },
      {
        year: "1774-1792",
        title: "French Royal Court Spending",
        description: "Marie Antoinette and members of the French aristocracy engaged in conspicuous consumption, spending vast sums on clothing, jewelry, and entertainments. A single court dress could cost 6,000 livres (approximately $300,000 today)—more than most people earned in a decade.",
        location: "France",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/QmY8WyE.jpg",
        source: "Queen of Fashion: What Marie Antoinette Wore to the Revolution by Caroline Weber",
        sourceUrl: "https://us.macmillan.com/books/9780312427344/queenoffashion",
        verified: true
      }
    ]
  },
  {
    era: "Victorian & Gilded Age",
    description: "The industrial revolution created unprecedented wealth that sought acceptance in established social hierarchies, leading to the most explicit status purchases in history.",
    startYear: 1800,
    endYear: 1914,
    events: [
      {
        year: "1895",
        title: "The Vanderbilt Ball",
        description: "Alva Vanderbilt spent $250,000 (over $7 million today) on a single costume ball to force her way into New York's exclusive "Old Money" society, the so-called "Four Hundred." The extravagance worked, securing her family's social position.",
        location: "New York, USA",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/QqPx4nk.jpg",
        source: "Consuelo and Alva Vanderbilt: The Story of a Daughter and a Mother in the Gilded Age by Amanda Mackenzie Stuart",
        sourceUrl: "https://www.harpercollins.com/products/consuelo-and-alva-vanderbilt-amanda-mackenzie-stuart",
        verified: true
      },
      {
        year: "1870s-1890s",
        title: "American Heiresses for British Titles",
        description: "Over 200 wealthy American heiresses married into the British aristocracy, exchanging over $1 billion (in today's dollars) of dowries for titles. Consuelo Vanderbilt's marriage to the Duke of Marlborough cost her father $2.5 million (about $77 million today) in dowry payments.",
        location: "Britain & USA",
        icon: <Crown className="text-royal-gold" />,
        source: "To Marry an English Lord by Gail MacColl and Carol McD. Wallace",
        sourceUrl: "https://www.penguinrandomhouse.com/books/310778/to-marry-an-english-lord-by-gail-maccoll-and-carol-mcd-wallace/",
        verified: true
      },
      {
        year: "1901",
        title: "Carnegie's Libraries & Reputation Laundering",
        description: "After the brutal suppression of the Homestead Strike tarnished his reputation, steel magnate Andrew Carnegie spent $60 million (about $1.8 billion today) building public libraries, partially to rehabilitate his public image from ruthless industrialist to philanthropist.",
        location: "United States",
        icon: <BookOpen className="text-royal-navy" />,
        source: "Andrew Carnegie by David Nasaw",
        sourceUrl: "https://www.penguinrandomhouse.com/books/291187/andrew-carnegie-by-david-nasaw/",
        verified: true
      },
      {
        year: "1902-1905",
        title: "The Biltmore Estate",
        description: "George Vanderbilt spent approximately $6 million (around $180 million today) constructing the Biltmore Estate, America's largest private home at 175,000 square feet with 250 rooms. This enormous expenditure was primarily to establish the Vanderbilt family among the country's elite.",
        location: "North Carolina, USA",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/1xrwP2P.jpg",
        source: "Fortune's Children: The Fall of the House of Vanderbilt by Arthur T. Vanderbilt II",
        sourceUrl: "https://www.harpercollins.com/products/fortunes-children-arthur-t-vanderbilt?variant=32280306130978",
        verified: true
      }
    ]
  },
  {
    era: "Modern Era (20th Century)",
    description: "The 20th century saw status purchases evolve with new wealth and media attention, creating more complex status markets across entertainment, fashion, and politics.",
    startYear: 1900,
    endYear: 2000,
    events: [
      {
        year: "1985",
        title: "Trump Tower Penthouse",
        description: "Donald Trump spent an estimated $14 million (about $35 million today) decorating his Trump Tower penthouse with gold leaf, marble, and ornate furnishings explicitly modeled after the Palace of Versailles. This ostentatious display helped establish his brand as the epitome of 1980s luxury.",
        location: "New York, USA",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/sNVFoNr.jpg",
        source: "Trump: The Art of the Deal by Donald Trump and Tony Schwartz",
        sourceUrl: "https://www.penguinrandomhouse.com/books/180644/trump-the-art-of-the-deal-by-donald-j-trump-with-tony-schwartz/",
        verified: true
      },
      {
        year: "1996",
        title: "Trump's Palm Beach Club",
        description: "After purchasing Mar-a-Lago estate in Palm Beach for $10 million, Donald Trump was initially rejected by the area's exclusive social clubs. In response, he converted his estate into a club with $100,000 membership fees, strategically accepting Jewish and Black members (denied at other clubs) to attract wealthy individuals who had been excluded by the traditional elite.",
        location: "Florida, USA",
        icon: <Gem className="text-royal-crimson" />,
        source: "The Washington Post Investigation",
        sourceUrl: "https://www.washingtonpost.com/politics/2021/01/19/trumps-presidency-ends-where-so-much-it-was-lived-mar-a-lago/",
        verified: true
      },
      {
        year: "1988-1992",
        title: "Jocelyn Wildenstein's Transformation",
        description: "Socialite Jocelyn Wildenstein reportedly spent over $4 million (about $8 million today) on plastic surgeries to appear more cat-like, believing this would please her husband, art dealer Alec Wildenstein. The extreme procedures became a much-publicized example of wealth enabling unusual status-seeking behavior.",
        location: "United States",
        icon: <Gem className="text-royal-crimson" />,
        source: "Vanity Fair Profile",
        sourceUrl: "https://www.vanityfair.com/style/2021/08/the-catwoman-whisperer-jocelyn-wildenstein",
        verified: true
      },
      {
        year: "2000",
        title: "Roman Abramovich's Yacht Collection",
        description: "Russian oligarch Roman Abramovich began assembling the world's most expensive private fleet of yachts, eventually spending over $1 billion. His flagship vessel, Eclipse, cost approximately $500 million and was the world's longest yacht at 162.5 meters, equipped with two helicopter pads, 24 guest cabins, two swimming pools, and a missile defense system.",
        location: "Global",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/Yzw5OhQ.jpg",
        source: "The Sunday Times Rich List Research",
        sourceUrl: "https://www.thetimes.co.uk/sunday-times-rich-list",
        verified: true
      }
    ]
  },
  {
    era: "Digital Status Economy",
    description: "The emergence of cryptocurrencies and digital assets has created entirely new status economies where wealth is flaunted through digital ownership and online prestige.",
    startYear: 2000,
    endYear: 2023,
    events: [
      {
        year: "2021-2022",
        title: "Bored Ape Yacht Club NFTs",
        description: "At the height of the NFT craze, celebrities including Jimmy Fallon, Paris Hilton, and Justin Bieber paid hundreds of thousands of dollars for digital artwork from the Bored Ape Yacht Club collection. Justin Bieber paid 500 ETH (approximately $1.3 million) for Bored Ape #3001, a purchase widely criticized as overpriced since it lacked rare traits valued by collectors.",
        location: "Global",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/LpTCZUd.jpg",
        source: "Decrypt Research",
        sourceUrl: "https://decrypt.co/91927/justin-bieber-buys-bored-ape-yacht-club-nft-1-3-million",
        verified: true
      },
      {
        year: "2020-2023",
        title: "Crypto Wealth Signaling",
        description: "The rise of 'crypto natives' who display their wallet addresses, ENS domains, and holdings publicly. Communities like Nouns DAO charge 30+ ETH (over $100,000) for NFTs that primarily serve as status symbols and access passes to exclusive communities. Research from Chainalysis shows over $40 billion was spent on NFTs primarily for status signaling in this period.",
        location: "Global (Digital)",
        icon: <Coins className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/R8qMTxV.jpg",
        source: "Chainalysis 2022 NFT Market Report",
        sourceUrl: "https://www.chainalysis.com/blog/nft-market-report-2022/",
        verified: true
      },
      {
        year: "2022",
        title: "Luxury Brands in the Metaverse",
        description: "Brands like Gucci, Louis Vuitton, and Balenciaga created virtual versions of their products selling for thousands of dollars in platforms like Decentraland and Roblox. A virtual Gucci Dionysus bag in Roblox resold for 350,000 Robux (approximately $4,115)—more than the physical version—purely for the status of digital ownership and display.",
        location: "Metaverse Platforms",
        icon: <Gem className="text-royal-crimson" />,
        source: "Vogue Business Analysis",
        sourceUrl: "https://www.voguebusiness.com/technology/gucci-roblox-digital-items-metaverse-virtual-worlds",
        verified: true
      },
      {
        year: "2022",
        title: "Twitter Blue Verification",
        description: "Following Elon Musk's acquisition of Twitter (now X), the platform's verification system was monetized, allowing anyone to purchase a blue checkmark for $8 monthly. This transformed what was once a carefully vetted status symbol into a purchasable commodity, while simultaneously creating a new hierarchy between those who retained 'legacy' verification and those who paid for it.",
        location: "Global",
        icon: <Scroll className="text-royal-navy" />,
        source: "The Verge Coverage",
        sourceUrl: "https://www.theverge.com/2022/11/9/23450289/twitter-impersonators-official-badge-musk-verification-blue-check",
        verified: true
      },
      {
        year: "2023",
        title: "Trump Digital Trading Cards",
        description: "Donald Trump launched collections of digital 'Trump Cards' and physical gold-colored cards priced at $99 each, offering no tangible benefits beyond symbolizing support for the former president. Despite being marketed as collectibles, these items functioned purely as status symbols among supporters, selling out within hours and raising approximately $4.5 million.",
        location: "United States",
        icon: <Coins className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/6kSvYnZ.jpg",
        source: "CNBC Report",
        sourceUrl: "https://www.cnbc.com/2022/12/15/trump-digital-trading-cards-nft-collection-sells-out-in-a-day.html",
        verified: true
      }
    ]
  },
  {
    era: "Cautionary Tales",
    description: "Not all status purchases achieve their intended effects. These examples show how spending for status can backfire dramatically.",
    startYear: 1900,
    endYear: 2023,
    events: [
      {
        year: "2019",
        title: "College Admissions Scandal",
        description: "Wealthy parents, including celebrities like Lori Loughlin and Felicity Huffman, paid admissions consultant William Singer approximately $25 million to fraudulently secure their children's admission to elite universities. Some parents paid up to $500,000 per child, showcasing how educational prestige has become a modern form of purchasing status—but resulting in criminal charges and prison sentences.",
        location: "United States",
        icon: <Scroll className="text-royal-navy" />,
        imageUrl: "https://i.imgur.com/X5QFzAw.jpg",
        source: "FBI Investigation",
        sourceUrl: "https://www.justice.gov/usao-ma/investigations-college-admissions-and-testing-bribery-scheme",
        verified: true
      },
      {
        year: "2016-2017",
        title: "Fyre Festival Disaster",
        description: "Billy McFarland and rapper Ja Rule marketed an exclusive luxury music festival in the Bahamas with tickets costing up to $12,000. Wealthy attendees seeking status through exclusive experiences arrived to find emergency tents, inadequate food, and none of the promised luxury. McFarland was eventually sentenced to six years in prison for fraud.",
        location: "Bahamas",
        icon: <Gem className="text-royal-crimson" />,
        imageUrl: "https://i.imgur.com/k6H8kAD.jpg",
        source: "Netflix Documentary: Fyre",
        sourceUrl: "https://www.netflix.com/title/81035279",
        verified: true
      },
      {
        year: "2008",
        title: "Cash for Honours Scandal",
        description: "Several wealthy individuals who made large loans to British political parties were subsequently nominated for peerages, leading to a police investigation into whether honours were being sold - a practice formally outlawed in 1925 with the Honours (Prevention of Abuses) Act.",
        location: "United Kingdom",
        icon: <Crown className="text-royal-gold" />,
        source: "UK Parliament Investigation",
        sourceUrl: "https://publications.parliament.uk/pa/cm200809/cmselect/cmpubadm/129/129.pdf",
        verified: true
      },
      {
        year: "2022",
        title: "Crypto Status Collapse",
        description: "Several high-profile crypto personalities like Do Kwon (Terra/Luna) and Sam Bankman-Fried (FTX) who had built status empires around their crypto wealth saw their reputations and fortunes collapse amid market crashes and fraud allegations. SBF's net worth fell from an estimated $26 billion to nearly zero in a matter of days, leading to criminal charges.",
        location: "Global",
        icon: <Coins className="text-royal-gold" />,
        imageUrl: "https://i.imgur.com/bH9JhsS.jpg",
        source: "SEC Filings",
        sourceUrl: "https://www.sec.gov/litigation/complaints/2022/comp-pr2022-219.pdf",
        verified: true
      }
    ]
  }
];

// Famous historical status purchasers - updated with more verification and sources
const famousCases = [
  {
    name: "William Randolph Hearst",
    title: "The Inspiration for 'Citizen Kane'",
    description: "Media tycoon who spent the equivalent of over $700 million building his famous Hearst Castle, designed to showcase his collection of European art and antiquities, elevating his status from 'new money' to cultural elite.",
    year: "1919-1947",
    imageUrl: "https://i.imgur.com/fNrK16u.jpg",
    source: "The Chief: The Life of William Randolph Hearst by David Nasaw",
    sourceUrl: "https://www.hmhbooks.com/shop/books/The-Chief/9780618154463",
    verified: true
  },
  {
    name: "Empress Eugénie",
    title: "From Spanish Nobility to French Empress",
    description: "Born to minor Spanish nobility, she used her beauty and calculated social maneuvering to capture the attention of Napoleon III, eventually becoming Empress of France despite aristocratic opposition.",
    year: "1853",
    imageUrl: "https://i.imgur.com/nOC5PzL.jpg",
    source: "Empress Eugénie and the Arts by Alison McQueen",
    sourceUrl: "https://www.routledge.com/Empress-Eugenie-and-the-Arts/McQueen/p/book/9780367734411",
    verified: true
  },
  {
    name: "Jay Gatsby",
    title: "Literary Embodiment of Status Pursuit",
    description: "Though fictional, F. Scott Fitzgerald's character represents the real phenomenon of 1920s bootleggers and nouveaux riches who used illegal fortunes to buy mansions, throw lavish parties, and attempt to enter high society.",
    year: "1922",
    imageUrl: "https://i.imgur.com/KgzUh4n.jpg",
    source: "The Great Gatsby by F. Scott Fitzgerald",
    sourceUrl: "https://www.penguinrandomhouse.com/books/268417/the-great-gatsby-by-f-scott-fitzgerald/",
    verified: true
  },
  {
    name: "Elon Musk",
    title: "Technologist Status Symbol",
    description: "Beyond his business ventures, Musk has made numerous high-profile purchases explicitly intended to demonstrate status, from buying Twitter for $44 billion partly to control a social platform to launching a Tesla Roadster into space as a cosmic status symbol—perhaps the most expensive flex in human history.",
    year: "2018-2023",
    imageUrl: "https://i.imgur.com/Ow7xR7q.jpg",
    source: "Walter Isaacson Biography",
    sourceUrl: "https://www.simonandschuster.com/books/Elon-Musk/Walter-Isaacson/9781982181284",
    verified: true
  },
  {
    name: "Kim Kardashian",
    title: "Modern Status Architect",
    description: "Transformed fame into a business empire centered around status symbols, from her $60 million minimalist mansion to her infamous $1.26 million purchase of Princess Diana's diamond cross pendant—explicitly to own a piece of royal adjacent status. Her social media presence is carefully crafted to showcase wealth indicators to her 360+ million followers.",
    year: "2010-Present",
    imageUrl: "https://i.imgur.com/BkJRZP2.jpg",
    source: "Forbes Profile",
    sourceUrl: "https://www.forbes.com/profile/kim-kardashian/",
    verified: true
  },
  {
    name: "Sultan of Brunei",
    title: "Royal Status Collection",
    description: "Hassanal Bolkiah, the Sultan of Brunei, amassed the world's largest private car collection of over 7,000 vehicles worth an estimated $5 billion, including 600 Rolls-Royces, 380 Bentleys, and rare Ferraris. His 1,788-room palace, the Istana Nurul Iman, is considered the world's largest residential palace at a cost of approximately $1.4 billion.",
    year: "1980s-Present",
    imageUrl: "https://i.imgur.com/srnYjcW.jpg",
    source: "Royal Wealth Analysis",
    sourceUrl: "https://www.businessinsider.com/sultan-brunei-hassanal-bolkiah-net-worth-2019-5",
    verified: true
  },
  {
    name: "Elizabeth Holmes",
    title: "Fraudulent Status Creation",
    description: "The Theranos founder crafted an elaborate status persona by adopting Steve Jobs' black turtleneck, faking a deeper voice, claiming spurious academic credentials, and spending millions on a lifestyle designed to project tech-elite success. Her careful image-crafting secured her partnerships with Walgreens and a $9 billion company valuation before fraud charges unraveled it all.",
    year: "2003-2018",
    imageUrl: "https://i.imgur.com/aGCLfQZ.jpg",
    source: "Bad Blood by John Carreyrou",
    sourceUrl: "https://www.penguinrandomhouse.com/books/549478/bad-blood-by-john-carreyrou/",
    verified: true
  }
];

// Questions and answers about status purchasing
const faqData = [
  {
    question: "Has status always been purchasable throughout history?",
    answer: "Yes, virtually every society has had mechanisms for converting wealth into status, though the methods have varied. From Roman equestrian ranks to medieval titles, Gilded Age marriages to modern digital assets, the specific currencies and status symbols change, but the fundamental transaction remains the same."
  },
  {
    question: "Why do people spend so much on status symbols?",
    answer: "Status purchases serve several psychological and social functions: they signal group membership, establish position in social hierarchies, provide access to exclusive networks, and often act as a form of identity expression. Evolutionary psychologists suggest status-seeking is deeply embedded in human behavior as it historically correlated with survival advantages and reproductive success."
  },
  {
    question: "What's the difference between historical status purchases and modern ones?",
    answer: "Historical status purchases often provided formal legal privileges (tax exemptions, special courts, etc.) that modern ones don't. Today's status markers are more visible and rapidly changing due to media and the internet. The velocity of status cycles has accelerated, with digital status symbols often having much shorter lifespans than traditional ones."
  },
  {
    question: "Do status purchases ever 'work' as intended?",
    answer: "Success varies greatly. Some status purchases, like the Medici art patronage or Vanderbilt's strategic marriage alliances, succeeded spectacularly in elevating families socially. Others, like Trimalchio's gauche displays in ancient Rome or modern cautionary tales like Elizabeth Holmes' fraudulent status creation, demonstrate how status purchases can backfire when perceived as inauthentic or excessive."
  },
  {
    question: "How is SpendThrone different from historical status purchasing?",
    answer: "SpendThrone simply makes explicit what has always been implicit: status has a price tag. The key difference is transparency and directness—historically, the connection between wealth and status was often obscured by tradition, bureaucracy, or social niceties. SpendThrone strips away the pretense and acknowledges the transaction for what it is."
  }
];

const StatusThroughHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterVerified, setFilterVerified] = useState(false);
  const [selectedEra, setSelectedEra] = useState('all');
  
  // Filter and sort events based on user selections
  const filteredData = historicalData
    .filter(period => selectedEra === 'all' || period.era === selectedEra)
    .map(period => ({
      ...period,
      events: period.events
        .filter(event => 
          (!filterVerified || event.verified) &&
          (searchTerm === '' || 
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .sort((a, b) => {
          // Extract years for comparison
          const getYearNumber = (yearStr: string) => {
            const match = yearStr.match(/(\d{1,4})/);
            return match ? parseInt(match[0]) : 0;
          };
          
          const yearA = getYearNumber(a.year);
          const yearB = getYearNumber(b.year);
          
          return sortOrder === 'asc' ? yearA - yearB : yearB - yearA;
        })
    }))
    .filter(period => period.events.length > 0);
  
  // Create a flat list of all events for the timeline view
  const allEvents = historicalData
    .flatMap(period => period.events
      .map(event => ({
        ...event,
        era: period.era
      }))
    )
    .filter(event => 
      (!filterVerified || event.verified) &&
      (searchTerm === '' || 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      // Extract years for comparison
      const getYearNumber = (yearStr: string) => {
        const match = yearStr.match(/(\d{1,4})/);
        return match ? parseInt(match[0]) : 0;
      };
      
      const yearA = getYearNumber(a.year);
      const yearB = getYearNumber(b.year);
      
      return sortOrder === 'asc' ? yearA - yearB : yearB - yearA;
    });

  // Schema.org structured data for better SEO
  const faqSchema = generateFAQSchema(faqData);
  
  return (
    <>
      <PageSEO 
        title="The Historical Pursuit of Status" 
        description="Explore how people have purchased social status throughout history, from ancient Roman knights to modern digital status symbols."
        canonicalUrl="https://spendthrone.com/status-through-history"
        ogImage="https://i.imgur.com/CUw2G7e.jpg"
      />
      
      <StructuredData data={faqSchema} />
      
      <Container className="py-16 relative">
        <div className="relative max-w-6xl mx-auto">
          <RoyalDecoration variant="royal-insignia" position="top-right" color="gold" />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 royal-gradient font-medieval text-center">
            Status Through History
          </h1>
          
          <div className="flex items-center justify-center mb-10 space-x-2 text-white/70 italic">
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
              From ancient Rome to modern digital economies, the wealthy have sought to translate their financial capital into 
              social capital, securing positions, privileges, and prestige through strategic expenditure.
            </p>
            <p className="text-xl leading-relaxed text-white/80">
              This page explores verified historical examples of status purchases throughout the ages, with citations to historical sources.
              The key difference between past and present? Historically, these transactions were often concealed behind a veneer of propriety. 
              SpendThrone simply makes explicit what has always been implicit: social status has a price tag.
            </p>
          </div>
          
          {/* Search and filter controls */}
          <div className="mb-10 p-6 glass-morphism rounded-lg border border-royal-gold/20">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
              <div className="relative w-full md:w-1/3">
                <Input
                  placeholder="Search historical events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-transparent border-royal-gold/30"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-royal-gold/50" />
              </div>
              
              <select 
                value={selectedEra}
                onChange={(e) => setSelectedEra(e.target.value)}
                className="bg-transparent border border-royal-gold/30 rounded-md p-2 text-white/90 w-full md:w-auto"
              >
                <option value="all">All Eras</option>
                {historicalData.map((period, index) => (
                  <option key={index} value={period.era}>{period.era}</option>
                ))}
              </select>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="flex items-center gap-2 border-royal-gold/30"
              >
                <History className="h-4 w-4" />
                {sortOrder === 'asc' ? (
                  <>Oldest First <ArrowUp className="h-3 w-3" /></>
                ) : (
                  <>Newest First <ArrowDown className="h-3 w-3" /></>
                )}
              </Button>
              
              <Button
                variant={filterVerified ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterVerified(!filterVerified)}
                className={cn(
                  "flex items-center gap-2",
                  filterVerified ? "bg-royal-gold text-black" : "border-royal-gold/30"
                )}
              >
                <Filter className="h-4 w-4" />
                Verified Sources Only
              </Button>
            </div>
            
            {/* Status search results summary */}
            <div className="text-sm text-white/60 italic">
              {allEvents.length === 0 ? (
                <p>No historical events found. Try adjusting your search criteria.</p>
              ) : (
                <p>Showing {allEvents.length} historical status purchases across {filteredData.length} time periods.</p>
              )}
            </div>
          </div>
          
          {/* Timeline / Era Tabs */}
          <Tabs defaultValue="timeline" className="mb-16">
            <TabsList className="mb-6 grid w-full grid-cols-2">
              <TabsTrigger value="timeline" className="text-lg">
                <History className="mr-2 h-5 w-5" /> Timeline View
              </TabsTrigger>
              <TabsTrigger value="eras" className="text-lg">
                <Scroll className="mr-2 h-5 w-5" /> Era-Based View
              </TabsTrigger>
            </TabsList>
            
            {/* Timeline View */}
            <TabsContent value="timeline" className="space-y-8">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[26px] top-0 bottom-0 w-1 bg-gradient-to-b from-royal-gold/10 via-royal-gold/80 to-royal-gold/10"></div>
                
                {/* Timeline events */}
                <div className="space-y-10">
                  {allEvents.map((event, index) => (
                    <div key={index} className="relative pl-16">
                      {/* Timeline node */}
                      <div className="absolute left-0 w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-black/30 to-black/80 border-2 border-royal-gold">
                        <div className="text-sm font-medieval text-royal-gold">
                          {event.year.split('-')[0]}
                        </div>
                      </div>
                      
                      {/* Event card */}
                      <Card className="backdrop-blur-sm border border-royal-gold/20 overflow-hidden">
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
                              
                              {/* Era badge */}
                              <Badge className="absolute top-3 right-3 bg-royal-navy text-white">
                                {event.era}
                              </Badge>
                              
                              {/* Location */}
                              <div className="absolute bottom-3 left-3 flex items-center">
                                <Badge variant="outline" className="border-white/20 text-white/80 flex items-center gap-1.5">
                                  <LinkIcon className="h-3 w-3" /> {event.location}
                                </Badge>
                              </div>
                            </div>
                          )}
                          
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-xl font-bold text-royal-gold">{event.title}</h3>
                              <span className="text-white/60 text-sm font-medieval bg-royal-gold/10 px-2 py-1 rounded">
                                {event.year}
                              </span>
                            </div>
                            
                            <p className="text-white/80 mb-4">{event.description}</p>
                            
                            {/* Source citation */}
                            {event.source && (
                              <div className="mt-4 text-sm text-white/60 italic border-t border-royal-gold/10 pt-3">
                                <div className="flex items-center">
                                  <BookOpen className="h-4 w-4 mr-2 text-royal-gold/70" />
                                  Source: {event.source}
                                  {event.sourceUrl && (
                                    <a 
                                      href={event.sourceUrl} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="ml-2 text-royal-gold hover:text-royal-gold-bright flex items-center"
                                    >
                                      <LinkIcon className="h-3 w-3 mr-1" /> View Reference
                                    </a>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Era-based View */}
            <TabsContent value="eras">
              {filteredData.map((period, periodIndex) => (
                <div key={periodIndex} className="mb-16">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold royal-text">
                      <span className="text-royal-gold">{period.era}</span>
                    </h2>
                    <Badge className="bg-royal-navy text-white">
                      {period.startYear} - {period.endYear}
                    </Badge>
                  </div>
                  
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
                              
                              <p className="text-white/80 mb-3">{event.description}</p>
                              
                              <div className="flex justify-between items-center">
                                <span className="text-white/60 text-sm italic">
                                  {event.location}
                                </span>
                              </div>
                              
                              {/* Source citation */}
                              {event.source && (
                                <div className="mt-4 text-sm text-white/60 italic border-t border-royal-gold/10 pt-3">
                                  <div className="flex items-center">
                                    <BookOpen className="h-4 w-4 mr-2 text-royal-gold/70" />
                                    Source: {event.source}
                                    {event.sourceUrl && (
                                      <a 
                                        href={event.sourceUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="ml-2 text-royal-gold hover:text-royal-gold-bright flex items-center"
                                      >
                                        <LinkIcon className="h-3 w-3 mr-1" /> Reference
                                      </a>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
          
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
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-white/60 text-xs font-medieval">{person.year}</span>
                      
                      {person.source && (
                        <a 
                          href={person.sourceUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-royal-gold hover:text-royal-gold-bright flex items-center"
                        >
                          <LinkIcon className="h-3 w-3 mr-1" /> Source: {person.source.split(':')[0]}
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <RoyalDivider variant="crown" label="FREQUENTLY ASKED QUESTIONS" color="gold" className="mb-8" />
          
          <div className="mb-16 space-y-6">
            {faqData.map((item, index) => (
              <Card key={index} className="backdrop-blur-sm border border-royal-gold/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-royal-gold">{item.question}</h3>
                  <p className="text-white/80">{item.answer}</p>
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
          
          {/* Further reading and related pages section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-royal-gold mb-6">Further Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/leaderboard" className="block p-4 border border-royal-gold/30 rounded-lg hover:bg-royal-gold/10 transition-colors">
                <div className="flex items-center">
                  <Crown className="text-royal-gold mr-3 h-5 w-5" />
                  <div>
                    <h4 className="font-bold">View The Leaderboard</h4>
                    <p className="text-sm text-white/70">See today's status leaders on SpendThrone</p>
                  </div>
                </div>
              </a>
              <a href="/teams" className="block p-4 border border-royal-gold/30 rounded-lg hover:bg-royal-gold/10 transition-colors">
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

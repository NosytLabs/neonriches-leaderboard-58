
// Generate absurd CTAs for the hero section and other satirical content

export type AbsurdityLevel = 'mild' | 'medium' | 'extreme' | 'ridiculous' | 'unhinged';

const mildCtas = [
  "Add Funds",
  "Increase Your Rank",
  "Make a Deposit",
  "Boost Your Status",
  "Enhance Your Standing",
  "Elevate Your Position",
  "Secure Your Place",
  "Rise in the Ranks",
  "Climb the Hierarchy",
  "Advance Your Status",
];

const mediumCtas = [
  "Fund Your Ego",
  "Buy Some Status",
  "Exchange Money for Clout",
  "Inflate Your Importance",
  "Purchase Digital Nobility",
  "Convert Cash to Prestige",
  "Trade Currency for Rank",
  "Secure Your Digital Crown",
  "Invest in Vanity Points",
  "Acquire Status Tokens",
  "Lease Some Dignity",
];

const extremeCtas = [
  "Sacrifice to the Status Gods",
  "Burn Money, Gain Pixels",
  "Literally Buy Nothing",
  "Exchange Real Worth for Fake Worth",
  "Invest in Digital Hot Air",
  "Waste Money for Validation",
  "Throw Cash into the Void",
  "Feed the Status Algorithm",
  "Convert Life Energy to Numbers",
  "Transform Labor into Pixels",
  "Upgrade Your Digital Self-Worth",
];

const ridiculousCtas = [
  "Financially Self-Harm for Fun",
  "Set Your Wallet on Fire",
  "Buy This Worthless Number",
  "Spend Real Money on Fake Importance",
  "Make Your Bank Account Cry",
  "Convert Life Energy to a Number",
  "Participate in Economic Self-Flagellation",
  "Monetize Your Insecurities",
  "Purchase Digital Snake Oil",
  "Accelerate Your Financial Entropy",
  "Trade Your Future for a Leaderboard Position",
];

const unhingedCtas = [
  "INCINERATE YOUR FINANCIAL FUTURE",
  "LIQUIDATE YOUR ASSETS FOR PIXELS",
  "SACRIFICE ECONOMIC SECURITY FOR CLOUT",
  "DESTROY WEALTH FOR INTERNET POINTS",
  "MAXIMIZE SPENDING, MINIMIZE RATIONALITY",
  "ABANDON FISCAL RESPONSIBILITY",
  "PURSUE RUINOUS DIGITAL VANITY",
  "EXCHANGE REAL VALUE FOR IMAGINARY STATUS",
  "CONVERT YOUR LIFE SAVINGS TO NOTHING",
  "ACHIEVE FINANCIAL IMPLOSION FOR STATUS",
  "OBLITERATE RESOURCES FOR DIGITAL RECOGNITION",
];

export const generateAbsurdCTA = (level: AbsurdityLevel): string => {
  const getRandomCta = (list: string[]) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  switch (level) {
    case 'mild':
      return getRandomCta(mildCtas);
    case 'medium':
      return getRandomCta(mediumCtas);
    case 'extreme':
      return getRandomCta(extremeCtas);
    case 'ridiculous':
      return getRandomCta(ridiculousCtas);
    case 'unhinged':
      return getRandomCta(unhingedCtas);
    default:
      return getRandomCta(mediumCtas);
  }
};

// Generate absurd team names for the royal orders
export const royalOrderNames = [
  "Royal Order of Status Seekers",
  "Knights of the Digital Realm",
  "Order of the Empty Wallet",
  "Brotherhood of the Burning Credit Card",
  "Sisterhood of Spending Superiority",
  "Loyal Legion of Leaderboard Climbers",
  "The Prestigious Paupers",
  "The Bankrupt Barons",
  "Grand Order of Meaningless Measurements",
  "The Nouveau Niche",
  "The Order of Illusory Importance",
  "Cult of Currency Converters",
  "Fellowship of Fiscal Folly",
  "The Sacred Order of Self-Importance",
];

// Random team descriptions that explain their satirical "mission"
export const royalOrderDescriptions = [
  "Dedicated to the proposition that all dollars are created to be spent for status.",
  "Boldly going where no wallet has gone before — usually empty.",
  "Proving that the more you spend, the more you're worth (to our shareholders).",
  "Transforming financial responsibility into digital prestige since 2023.",
  "Where your bank account goes to die, but your status lives forever.",
  "Converting tangible assets into intangible validation since we launched.",
  "Specializing in the alchemy of turning money into meaningless metrics.",
  "Experts at transmuting cash into social confirmation.",
  "Upholding the noble tradition of spending money you don't have on things you don't need.",
  "The premier fellowship for those who value digital numbers over retirement planning.",
];

// Generate absurd facts about status and wealth
const absurdFacts = [
  "A study found that 73% of social media users edit their vacation photos to look more expensive than they actually were.",
  "The average Instagram user spends 5.4 years of their life comparing themselves to wealthier people online.",
  "Researchers found that expensive wines taste better when people believe they cost more, even when it's the same wine.",
  "A $25 million NFT of a rock sold in 2021, despite being freely viewable by anyone with an internet connection.",
  "Studies show people rate the exact same content as higher quality when they believe it comes from a high-status source.",
  "Medieval nobles sometimes wore outfits so expensive they needed financial assistance for a single social event.",
  "In ancient Rome, wealthy citizens would hire professional mourners for their funerals to appear more important in death.",
  "A social experiment found 64% of people would rather appear wealthy than actually be wealthy.",
  "The average luxury car owner drives their vehicle only 4.6 hours per week despite spending 10+ hours per week maintaining it.",
  "Research shows that 42% of luxury purchases are motivated by what others will think, not personal enjoyment.",
  "In one survey, 51% of luxury goods owners admitted they sometimes regretted their purchase within a week.",
  "French aristocrats in the 1700s spent the equivalent of a year's middle-class salary on a single outfit to attend court.",
  "At SpendThrone HQ, we have a wall displaying all the therapists who've warned their patients about us.",
  "If you printed out a list of people who spent over $10,000 on virtual items last year, it would be 26 miles long.",
  "Social psychologists found that people unconsciously stand straighter when using products they think are expensive.",
  "The entire global economy of digital status is estimated to be worth more than the GDP of Denmark.",
  "87% of people report feeling momentary happiness after a status purchase, followed by status anxiety about maintaining it.",
  "A 2023 study found NFT owners spent an average of 4.2 hours per day looking at their own purchases.",
  "In a blind test, crypto enthusiasts couldn't distinguish between a $2 million NFT and one created in 5 minutes.",
  "The wealthiest 0.1% spend more on digital status than the bottom 50% spend on healthcare.",
  "On average, a person sees 5,000 status signals per day, mostly without conscious awareness.",
  "More money is spent on digital status goods annually than on solving global hunger.",
  "Psychological studies show status anxiety has increased 43% since the rise of social media.",
  "A SpendThrone user once sold their car to move up 3 positions on our leaderboard.",
  "There is no difference between SpendThrone and other social media - we're just honest about the business model.",
  "MrBeast spent $3.5 million to recreate Squid Game, yet somehow we're the ones called absurd.",
  "A luxury watch company once charged $45,000 extra for a limited edition that was identical except for the color.",
  "Tech billionaires wear $10 t-shirts while selling you $1,000 phones. At least we're honest about the markup.",
  "The Emperor's New Clothes were very expensive indeed - but at least we're honest about selling you nothing but status.",
  "A study found people are willing to pay up to 400% more for items with visible luxury branding than the exact same item without.",
  "Digital influencers spend thousands on outfits just for Instagram photos, then return them to the store. We call that 'renting status'.",
  "The world's most expensive NFT sold for $91.8 million. The buyer later admitted they 'mostly wanted to see the reaction'.",
  "People pay $8/month for a Twitter verification check. At least our leaderboard numbers have more digits.",
  "One crypto enthusiast spent $450,000 to be Snoop Dogg's neighbor in the metaverse. The real Snoop has never visited.",
  "Studies show social media users experience a dopamine hit when their status updates receive engagement. We just skip the middleman.",
  "A survey of luxury car owners found 78% admitted they rarely use most of the premium features they paid for.",
  "Kim Kardashian earned $1 million per minute during her makeup line launch. Her products cost 300% more than chemically identical alternatives.",
  "In one experiment, subjects consistently rated the same water as 'smoother' and 'purer' when told it was an expensive brand.",
  "One SpendThrone royal spent $5,000 to have their profile displayed for 6 hours, during which time they were actually asleep.",
  "Studies show wearing luxury brands in job interviews increases chances of being hired by 30%, regardless of qualifications.",
  "One Russian oligarch spent $35,000 on a gold-plated fidget spinner in 2017. It was used exactly twice.",
  "The most expensive domain name ever sold was Cars.com for $872 million. At least we're selling something more substantial: your ego.",
  "A tech CEO spent $10 million on a digital yacht in a metaverse game that shut down 6 months later.",
  "The average person spends 2 years of their life choosing filters for social media posts to appear more attractive and wealthy.",
  "A 2022 study found that 65% of teenagers would rather be internet famous than win a Nobel Prize.",
  "Guests at the Met Gala wore outfits worth more than $12 million collectively, then discussed global inequality during dinner.",
  "An NFT collector spent their child's college fund on digital art, explaining 'This is a better investment in their future.'",
  "A social media influencer charged fans $1,000 to watch them unbox luxury products on a private livestream.",
  "The world's most expensive virtual real estate sold for $4.3 million. Its only difference from cheaper land was its location.",
  "A dating app for 'elite singles' charges $10,000 per year, but a data leak revealed 82% of members earned less than six figures.",
  "One startup raised $85 million to create a premium blockchain-based social network. It shut down after 3 months with 41 users.",
  "SpendThrone was almost named 'Honest Social Media' because we admit we're exploiting your status anxiety.",
  "In the 1890s, people would rent pineapples as table centerpieces to signal wealth, returning them the next day. Not much has changed.",
  "Psychologists estimate we waste 27% of our mental energy comparing ourselves to others we perceive as having higher status.",
  "One SpendThrone user created 12 different accounts to compete with themselves on the leaderboard.",
  "93% of Lamborghini owners admit their purchase was primarily motivated by what others would think of them.",
  "A fashion brand sold a paper shopping bag for $290. It sold out in 3 days.",
  "A study found that 41% of people have pretended to be on an important call to appear busier and more important in public.",
  "The inventor of the pet rock made $15 million selling literal rocks in custom cardboard boxes.",
  "A virtual sword in an online game sold for $330,000. The game shut down 2 years later.",
  "Scientists estimate that humans evolved status-seeking behaviors 40,000 years ago. SpendThrone just made it more efficient.",
  "A survey of luxury homeowners found 17% had rooms they had never entered after the initial tour.",
];

export const getRandomAbsurdFact = (): string => {
  return absurdFacts[Math.floor(Math.random() * absurdFacts.length)];
};

// Generate satirical quotes about status and wealth
export const statusQuotes = [
  { quote: "The Emperor's New Clothes were very expensive indeed - but at least we're honest about selling you nothing but status.", author: "SpendThrone Philosophy" },
  { quote: "When everyone is special, no one is. That's why we have a leaderboard.", author: "SpendThrone Design Team" },
  { quote: "Money can't buy happiness, but it can buy a higher position on our leaderboard, which is basically the same thing.", author: "Economic Wisdom" },
  { quote: "We've gamified capitalism so you can see exactly how much your life is worth.", author: "SpendThrone Mission Statement" },
  { quote: "The greatest innovation of SpendThrone is removing the pretense that social media isn't just a giant status game.", author: "Digital Anthropology Journal" },
  { quote: "In a world of endless status games, we just made the scoring system transparent.", author: "SpendThrone Founder" },
  { quote: "It's not about the money you spend, it's about the envy you generate.", author: "Marketing Department" },
  { quote: "Your grandparents saved for retirement. You're saving for a better position on our leaderboard. Evolution is beautiful.", author: "Financial Advisor" },
  { quote: "If people weren't willing to spend money on nothing, the entire luxury goods industry would collapse overnight.", author: "Status Economics" },
  { quote: "We didn't invent status anxiety, we just monetized it more efficiently.", author: "SpendThrone Business Model" },
];

export const getRandomStatusQuote = () => {
  return statusQuotes[Math.floor(Math.random() * statusQuotes.length)];
};

export default { 
  generateAbsurdCTA, 
  getRandomAbsurdFact,
  getRandomStatusQuote,
  royalOrderNames,
  royalOrderDescriptions
};

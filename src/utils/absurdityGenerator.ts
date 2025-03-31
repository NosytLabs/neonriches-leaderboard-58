
// Generate absurd CTAs for the hero section

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
];

export const getRandomAbsurdFact = (): string => {
  return absurdFacts[Math.floor(Math.random() * absurdFacts.length)];
};

export default { generateAbsurdCTA, getRandomAbsurdFact };

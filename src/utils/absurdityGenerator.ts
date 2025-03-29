
import { formatCurrency } from './formatters';

export type AbsurdityLevel = 'mild' | 'medium' | 'extreme' | 'ridiculous' | 'unhinged';

interface AbsurdityOptions {
  level?: AbsurdityLevel;
  userName?: string;
  amount?: number;
  tier?: string;
  team?: string;
}

export const generateAbsurdTitle = (options: AbsurdityOptions = {}): string => {
  const { level = 'medium', userName = 'User', tier = 'bronze' } = options;
  
  const tierTitles: Record<string, string[]> = {
    'free': ['Peasant', 'Commoner', 'Pleb', 'Nobody'],
    'bronze': ['Squire', 'Page', 'Apprentice', 'Minor Noble'],
    'silver': ['Knight', 'Baron', 'Viscount', 'Lord'],
    'gold': ['Duke', 'Earl', 'Marquis', 'Count'],
    'platinum': ['Prince', 'Archduke', 'Grand Duke', 'Viceroy'],
    'royal': ['King', 'Emperor', 'Sovereign', 'Overlord']
  };
  
  const absurdPrefixes: Record<AbsurdityLevel, string[]> = {
    'mild': ['Honorable', 'Esteemed', 'Respected'],
    'medium': ['Magnificent', 'Illustrious', 'Grandiose', 'Splendid'],
    'extreme': ['Supreme', 'Exalted', 'Resplendent', 'Ultra-Magnificent'],
    'ridiculous': ['Hyper-Mega', 'Super-Ultra', 'Omni-Spectacular', 'Galactically Superior'],
    'unhinged': ['Reality-Bending', 'Universe-Dominating', 'God-Emperor', 'Transcendent Cosmic']
  };
  
  const absurdSuffixes: Record<AbsurdityLevel, string[]> = {
    'mild': ['of the Realm', 'of the Court', 'of High Standing'],
    'medium': ['the Wealthy', 'the Generous', 'Destroyer of Wallets', 'Master of Purchases'],
    'extreme': ['Obliterator of Bank Accounts', 'Commander of Credit Cards', 'Money Incinerator'],
    'ridiculous': ['Consumer of Galaxies', 'Supreme Waster of Resources', 'Black Hole of Finances', 'Prime Purchaser of Planetary Systems'],
    'unhinged': ['The Omnispender', 'Consumer of Realities', 'Quantum Cash Shredder', 'Whose Bank Statements Cause Existential Crises']
  };
  
  const tierTitle = tierTitles[tier] ? tierTitles[tier][Math.floor(Math.random() * tierTitles[tier].length)] : 'Noble';
  const prefix = absurdPrefixes[level][Math.floor(Math.random() * absurdPrefixes[level].length)];
  const suffix = absurdSuffixes[level][Math.floor(Math.random() * absurdSuffixes[level].length)];
  
  return `${prefix} ${tierTitle} ${userName} ${suffix}`;
};

export const generateAbsurdDescription = (options: AbsurdityOptions = {}): string => {
  const { level = 'medium', amount = 0, tier = 'bronze', team = 'none' } = options;
  
  // Base descriptions for spending
  if (amount <= 0) {
    return "Has yet to contribute a single coin to the royal treasury. The throne looks upon them with mild disappointment.";
  }
  
  const teamPhrases: Record<string, string[]> = {
    'none': ['a lone wolf', 'an independent spirit', 'a free agent', 'unaligned with any faction'],
    'red': ['a fiery member of the Red Team', 'a crimson warrior', 'a devoted follower of the Red Banner', 'a flame-aligned loyalist'],
    'green': ['a nature-bound member of the Green Team', 'an emerald defender', 'a verdant supporter', 'a grass-touching enthusiast'],
    'blue': ['a stalwart member of the Blue Team', 'a sapphire strategist', 'an azure advocate', 'a cool-headed tactician']
  };
  
  const teamPhrase = teamPhrases[team] ? teamPhrases[team][Math.floor(Math.random() * teamPhrases[team].length)] : 'a mysterious entity';
  
  const spendingPhrases: Record<AbsurdityLevel, string[]> = {
    'mild': [
      `Has spent ${formatCurrency(amount)} on the throne.`,
      `Contributed ${formatCurrency(amount)} to the royal coffers.`,
      `Has parted with ${formatCurrency(amount)} for status.`
    ],
    'medium': [
      `Has gloriously sacrificed ${formatCurrency(amount)} to the almighty throne.`,
      `Proudly emptied ${formatCurrency(amount)} from their pockets to climb the ranks.`,
      `Has thrown ${formatCurrency(amount)} into the royal money pit with reckless enthusiasm.`
    ],
    'extreme': [
      `Has heroically incinerated ${formatCurrency(amount)} in the fires of status pursuit.`,
      `Boldly decimated their bank account by ${formatCurrency(amount)} for the honor of the throne.`,
      `Financial advisors weep as they've obliterated ${formatCurrency(amount)} for digital prestige.`
    ],
    'ridiculous': [
      `Their financial planner committed seppuku after witnessing them evaporate ${formatCurrency(amount)} on virtual status.`,
      `The national economy fluctuated when they hurled ${formatCurrency(amount)} into the bottomless pit of the throne.`,
      `Economists study the fascinating phenomenon of how they've vaporized ${formatCurrency(amount)} on absolutely nothing.`
    ],
    'unhinged': [
      `Reality itself warps around the black hole created by their sacrifice of ${formatCurrency(amount)} to the cosmic throne entity.`,
      `Time travelers have come back specifically to witness the moment they obliterated ${formatCurrency(amount)} from existence.`,
      `Quantum physicists cannot explain how they've managed to transmute ${formatCurrency(amount)} into pure, distilled status.`,
      `The existential weight of having transferred ${formatCurrency(amount)} for digital nobility has created a new fundamental force in the universe.`
    ]
  };
  
  const spendingPhrase = spendingPhrases[level][Math.floor(Math.random() * spendingPhrases[level].length)];
  
  const tierPhrases: Record<string, string[]> = {
    'free': ['Still a mere peasant', 'Practically a serf', 'Almost irrelevant'],
    'bronze': ['A minor nobility', 'Of modest standing', 'Barely noticed by the elite'],
    'silver': ['Respected in some circles', 'Can enter the castle through the side door', 'Allowed to make eye contact with higher ranks'],
    'gold': ['A force to be reckoned with', 'Invited to royal events (seated in the back)', 'Granted permission to speak in court'],
    'platinum': ['Whispered about in hushed, reverent tones', 'Lesser nobles bow slightly in their presence', 'Their name echoes through marble halls'],
    'royal': ['Reality bends to their will', 'The sun rises only with their permission', 'Time itself waits for their command']
  };
  
  const tierPhrase = tierPhrases[tier] ? tierPhrases[tier][Math.floor(Math.random() * tierPhrases[tier].length)] : 'Of mysterious rank';
  
  // Combine the phrases based on absurdity level
  if (level === 'mild' || level === 'medium') {
    return `${spendingPhrase} ${tierPhrase}, and ${teamPhrase}.`;
  } else if (level === 'extreme') {
    return `${spendingPhrase} Now ${tierPhrase}! Also known as ${teamPhrase}.`;
  } else {
    // ridiculous and unhinged
    return `${spendingPhrase}\n\n${tierPhrase}.\n\nLegends say they are ${teamPhrase}, but few can comprehend their true nature.`;
  }
};

export const generateAbsurdCTA = (level: AbsurdityLevel = 'medium'): string => {
  const ctaPhrases: Record<AbsurdityLevel, string[]> = {
    'mild': [
      'Contribute to the Throne',
      'Increase Your Status',
      'Rise in the Ranks',
      'Support the Kingdom'
    ],
    'medium': [
      'THROW MONEY AT THE THRONE',
      'ASCEND TO GLORY',
      'SACRIFICE TO THE RANKS',
      'FEED THE ROYAL COFFERS'
    ],
    'extreme': [
      'OBLITERATE YOUR SAVINGS',
      'DECIMATE YOUR BANK ACCOUNT',
      'FINANCIAL SELF-DESTRUCTION AWAITS',
      'MONETARY SACRIFICE PORTAL'
    ],
    'ridiculous': [
      'CLICK FOR INSTANTANEOUS POVERTY',
      'TRANSFORM MONEY INTO PURE EGO',
      'ACCELERATE FINANCIAL DOOM',
      'BECOME ROYALLY BANKRUPT'
    ],
    'unhinged': [
      'SUMMON THE VOID OF FISCAL OBLITERATION',
      'BREAK REALITY WITH YOUR CREDIT CARD',
      'TRANSCEND FINANCIAL EXISTENCE',
      'ECONOMIC SELF-IMMOLATION BUTTON'
    ]
  };
  
  return ctaPhrases[level][Math.floor(Math.random() * ctaPhrases[level].length)];
};

export const generateRandomAbsurdFact = (): string => {
  const absurdFacts = [
    "Every time you increase your rank, a digital royal trumpeter plays a fanfare that only royal pets can hear.",
    "The royal throne is rumored to be constructed from the compressed hopes and dreams of those who spent too much money here.",
    "Our lead developer once sold their car to increase their rank from Bronze to Silver. They walk to work now, but with much better posture.",
    "Studies show that people who spend more on SpendThrone are 74% more likely to refer to ordinary chairs as 'peasant thrones'.",
    "The 'Royal Gold' tier was originally called 'Reasonably Wealthy', but our marketing team thought that sounded 'too responsible'.",
    "We have a secret algorithm that converts your spending into 'Royal Points'. It's actually just your dollar amount multiplied by one.",
    "Our CEO attempted to add a feature where higher-ranked users could speak in a larger font, but our developers staged a revolt.",
    "Legend says if you reach the top rank, you receive a personal email that just says 'congratulations?' with a question mark.",
    "The current #1 ranked user reportedly has their rank tattooed on their lower back. We neither confirm nor deny this information.",
    "Our terms of service include a clause that if you become the #1 ranked user, you legally become our CEO for one day.",
    "The 'Royal Treasury' is actually a shoebox under our account manager's desk. It contains exactly one (1) gold-painted rock.",
    "SpendThrone's server farms are powered entirely by the collective sighs of users looking at their credit card statements.",
    "We once had a 'Money-Back Guarantee' but removed it after realizing that completely defeats the purpose of SpendThrone.",
    "The highest-ranked user receives a monthly PDF certificate featuring at least three different fonts and excessive use of the word 'whereas'.",
    "Our office has a bell that rings every time someone spends over $500. We had to disable it after it caused structural damage to the building."
  ];
  
  return absurdFacts[Math.floor(Math.random() * absurdFacts.length)];
};

export default {
  generateAbsurdTitle,
  generateAbsurdDescription,
  generateAbsurdCTA,
  generateRandomAbsurdFact
};

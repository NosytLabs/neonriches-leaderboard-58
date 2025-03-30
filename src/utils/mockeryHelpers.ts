
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

// Get mockery action icon
export function getMockeryName(action: MockeryAction): string {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    shame: 'Bell of Shame',
    dungeons: 'Royal Dungeons',
    immune: 'Royal Immunity',
    crown: 'Mock Crown',
    stocks: 'In Stocks',
    dunce: 'Dunce Cap',
    jester: 'Court Jester',
    fool: 'Village Fool',
    troll: 'Bridge Troll',
    peasant: 'Lowly Peasant',
    rat: 'Plague Rat',
    ghost: 'Haunting Ghost',
    skeleton: 'Rattling Skeleton',
    zombie: 'Mindless Zombie',
    witch: 'Accused Witch',
    monster: 'Fearsome Monster',
    demon: 'Nether Demon',
    dragon: 'Mighty Dragon',
    king: 'False King',
    queen: 'Pretender Queen',
    knight: 'Rusty Knight',
    bishop: 'Corrupt Bishop',
    rook: 'Crumbling Rook',
    pawn: 'Mere Pawn',
    target: 'Archery Target',
    challenge: 'Royal Challenge'
  };
  
  return names[action] || 'Public Mockery';
}

// Get mockery action description
export function getMockeryDescription(action: MockeryAction): string {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Pelt the user with rotten tomatoes, a classic medieval public humiliation.',
    eggs: 'Throw rotten eggs at the user, leaving a subtle eggy aroma to follow them around.',
    shame: 'Ring the bell of shame as the user is paraded through town.',
    dungeons: 'Send the user to the royal dungeons for 24 hours of reflection.',
    immune: 'Grant immunity from all mockery for 7 days.',
    crown: 'Place a fake crown on the user\'s head as a pretender to the throne.',
    stocks: 'Place the user in the town square stocks for public viewing.',
    dunce: 'Place a dunce cap on the user\'s head to mark their foolishness.',
    jester: 'Dress the user as the court jester for entertainment.',
    fool: 'Declare the user the village fool, the lowest of intellects.',
    troll: 'Transform the user into a bridge troll, frightening passersby.',
    peasant: 'Reduce the user to a lowly peasant status, toiling in the fields.',
    rat: 'Transform the user into a plague rat, scurrying among the gutters.',
    ghost: 'Turn the user into a ghost, forever haunting the halls of the kingdom.',
    skeleton: 'Reduce the user to mere bones, a rattling skeleton.',
    zombie: 'Turn the user into a mindless zombie, shambling through the land.',
    witch: 'Accuse the user of witchcraft, subject to the trials and tribulations.',
    monster: 'Reveal the user\'s monstrous form, terrifying to behold.',
    demon: 'Expose the user\'s demonic nature, come from the nether realm.',
    dragon: 'Reveal the user to be a fearsome dragon, hoarding wealth.',
    king: 'Expose this user as a false king, unworthy of the crown.',
    queen: 'Reveal this user as a pretender to the throne, without royal blood.',
    knight: 'Show this user to be a rusty knight, unable to wield sword or lance.',
    bishop: 'Reveal this corrupt bishop, with no true faith in heart.',
    rook: 'Show this user to be a crumbling rook, no defense against attack.',
    pawn: 'Reduce the user to a mere pawn in the game, expendable and common.',
    target: 'Make the user a target for practice, arrows flying their way.',
    challenge: 'Challenge the user to a royal duel, to prove their worth.'
  };
  
  return descriptions[action] || 'Subject this user to medieval mockery, a purely cosmetic effect.';
}

// Get mockery action cost
export function getMockeryCost(action: MockeryAction): number {
  const costs: Record<MockeryAction, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    shame: 0.75,
    dungeons: 1.0,
    immune: 5.0,
    crown: 1.5,
    stocks: 1.25,
    dunce: 0.5,
    jester: 1.0,
    fool: 0.5,
    troll: 1.0,
    peasant: 0.5,
    rat: 0.75,
    ghost: 1.0,
    skeleton: 1.25,
    zombie: 1.5,
    witch: 1.75,
    monster: 2.0,
    demon: 2.5,
    dragon: 3.0,
    king: 3.5,
    queen: 3.5,
    knight: 2.0,
    bishop: 2.25,
    rook: 1.75,
    pawn: 0.25,
    target: 0.5,
    challenge: 5.0
  };
  
  return costs[action] || 0.5;
}

// Get mockery action tier
export function getMockeryTier(action: MockeryAction): MockeryTier {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'basic',
    eggs: 'basic',
    shame: 'basic',
    dungeons: 'premium',
    immune: 'royal',
    crown: 'premium',
    stocks: 'premium',
    dunce: 'basic',
    jester: 'premium',
    fool: 'basic',
    troll: 'premium',
    peasant: 'basic',
    rat: 'basic',
    ghost: 'premium',
    skeleton: 'premium',
    zombie: 'premium',
    witch: 'premium',
    monster: 'royal',
    demon: 'royal',
    dragon: 'legendary',
    king: 'royal',
    queen: 'royal',
    knight: 'premium',
    bishop: 'premium',
    rook: 'premium',
    pawn: 'basic',
    target: 'basic',
    challenge: 'royal'
  };
  
  return tiers[action] || 'basic';
}

// Get color class for mockery tier
export function getMockeryTierColorClass(tier: MockeryTier): string {
  const colors: Record<MockeryTier, string> = {
    basic: 'text-gray-400',
    premium: 'text-blue-400',
    royal: 'text-royal-gold',
    legendary: 'text-purple-400',
    bronze: 'text-amber-600',
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    silver: 'text-gray-300'
  };
  
  return colors[tier] || 'text-gray-400';
}

// Get rarity class for mockery tier
export function getMockeryTierRarity(tier: MockeryTier): CosmeticRarity {
  const rarities: Record<MockeryTier, CosmeticRarity> = {
    basic: 'common',
    premium: 'uncommon',
    royal: 'rare',
    legendary: 'epic',
    bronze: 'common',
    common: 'common',
    uncommon: 'uncommon',
    rare: 'rare',
    epic: 'epic',
    silver: 'common'
  };
  
  return rarities[tier] || 'common';
}

// Exports
export {
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryTierRarity
};

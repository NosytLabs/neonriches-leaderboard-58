
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Get color class for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<MockeryTier, string> = {
    basic: 'border-gray-500/20 bg-gray-900/20',
    premium: 'border-blue-500/20 bg-blue-900/10',
    royal: 'border-purple-500/30 bg-purple-900/10',
    legendary: 'border-yellow-500/30 bg-yellow-900/10',
    rare: 'border-blue-400/30 bg-blue-900/10',
    epic: 'border-purple-400/30 bg-purple-900/10',
    common: 'border-gray-500/20 bg-gray-900/20',
    uncommon: 'border-green-500/20 bg-green-900/10',
    silver: 'border-gray-400/30 bg-gray-800/20',
    bronze: 'border-amber-700/30 bg-amber-900/10'
  };
  
  return colorClasses[tier] || colorClasses.basic;
};

// Get the CSS class for an active mockery
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const mockeryClasses: Record<string, string> = {
    tomatoes: 'mockery-tomatoes',
    eggs: 'mockery-eggs',
    putridEggs: 'mockery-putrid-eggs',
    stocks: 'mockery-stocks',
    crown: 'mockery-crown',
    dragon: 'mockery-dragon',
    demon: 'mockery-demon',
    dunce: 'mockery-dunce',
    jester: 'mockery-jester',
    troll: 'mockery-troll',
    peasant: 'mockery-peasant',
    rat: 'mockery-rat',
    skeleton: 'mockery-skeleton',
    zombie: 'mockery-zombie',
    witch: 'mockery-witch',
    monster: 'mockery-monster',
    knight: 'mockery-knight',
    bishop: 'mockery-bishop',
    rook: 'mockery-rook',
    pawn: 'mockery-pawn',
    king: 'mockery-king',
    queen: 'mockery-queen',
    ghost: 'mockery-ghost',
    target: 'mockery-target',
    challenge: 'mockery-challenge',
    shame: 'mockery-shame',
    protection: 'mockery-protection',
    silence: 'mockery-silence',
    courtJester: 'mockery-court-jester',
    jest: 'mockery-jest',
    smokeBomb: 'mockery-smoke-bomb',
    glitterBomb: 'mockery-glitter-bomb',
    royalPie: 'mockery-royal-pie',
    jokeCrown: 'mockery-joke-crown',
    taunt: 'mockery-taunt',
    guillotine: 'mockery-guillotine',
    defeat: 'mockery-defeat',
    removal: 'mockery-removal',
    dungeons: 'mockery-dungeons',
    fool: 'mockery-fool'
  };
  
  return mockeryClasses[action] || 'mockery-default';
};

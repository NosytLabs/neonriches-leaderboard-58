
export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester';
export type ExtendedMockeryAction = MockeryAction | 'protected' | 'immune';

export interface MockeryTier {
  id: string;
  name: string;
  label: string;
  cost: number;
  color: string;
  borderColor: string;
  textColor: string;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  mockedBy?: string[];
  mockeryCount: number;
  isShamed: boolean;
  isProtected: boolean;
  protectedUntil?: Date;
  lastMocked?: Date;
  tier?: string;
}

export const getMockeryActionIcon = (action: MockeryAction | ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'tomato';
    case 'eggs':
      return 'egg';
    case 'stocks':
      return 'stocks';
    case 'silence':
      return 'message-square-off';
    case 'courtJester':
      return 'drama';
    case 'protected':
      return 'shield';
    case 'immune':
      return 'crown';
    default:
      return 'alert-circle';
  }
};

export const getMockeryTierColor = (tier: string): string => {
  switch (tier) {
    case 'tomatoes':
      return 'text-red-500';
    case 'eggs':
      return 'text-yellow-200';
    case 'stocks':
      return 'text-amber-700';
    case 'silence':
      return 'text-blue-500';
    case 'courtJester':
      return 'text-emerald-500';
    default:
      return 'text-white/70';
  }
};

export const getMockeryTierBorder = (tier: string): string => {
  switch (tier) {
    case 'tomatoes':
      return 'border-red-500/30';
    case 'eggs':
      return 'border-yellow-200/30';
    case 'stocks':
      return 'border-amber-700/30';
    case 'silence':
      return 'border-blue-500/30';
    case 'courtJester':
      return 'border-emerald-500/30';
    default:
      return 'border-white/10';
  }
};

export const getMockeryTierBg = (tier: string): string => {
  switch (tier) {
    case 'tomatoes':
      return 'bg-red-500/10';
    case 'eggs':
      return 'bg-yellow-200/10';
    case 'stocks':
      return 'bg-amber-700/10';
    case 'silence':
      return 'bg-blue-500/10';
    case 'courtJester':
      return 'bg-emerald-500/10';
    default:
      return 'bg-white/5';
  }
};

export const getMockeryTierText = (tier: string): string => {
  switch (tier) {
    case 'tomatoes':
      return 'Tomato Mockery';
    case 'eggs':
      return 'Egg Assault';
    case 'stocks':
      return 'Stocks Punishment';
    case 'silence':
      return 'Royal Silence';
    case 'courtJester':
      return 'Court Jester';
    default:
      return 'Unknown Tier';
  }
};

export const getMockeryTierLabel = (tier: string): string => {
  switch (tier) {
    case 'tomatoes':
      return 'Common';
    case 'eggs':
      return 'Uncommon';
    case 'stocks':
      return 'Rare';
    case 'silence':
      return 'Epic';
    case 'courtJester':
      return 'Legendary';
    default:
      return 'Unknown';
  }
};

export const getMockeryCost = (tier: MockeryAction): number => {
  switch (tier) {
    case 'tomatoes':
      return 0.5;
    case 'eggs':
      return 1;
    case 'stocks':
      return 2.5;
    case 'silence':
      return 5;
    case 'courtJester':
      return 10;
    default:
      return 0.5;
  }
};

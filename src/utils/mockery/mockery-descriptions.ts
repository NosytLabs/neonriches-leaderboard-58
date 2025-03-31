
import { MockeryAction } from '@/types/mockery-types';

export function getMockeryDescription(action: MockeryAction): string {
  const descriptions: Record<string, string> = {
    tomatoes: 'Throw rotten tomatoes at this user to humiliate them publicly. Their profile will be stained red for 24 hours.',
    eggs: 'Throw rotten eggs at this user to make them stink of shame. Their profile will have egg splatters for 24 hours.',
    crown: 'Place a ridiculous crown on their head to mock their achievements. They\'ll wear a jester\'s crown for 48 hours.',
    stocks: 'Lock them in the royal stocks for public ridicule. Their profile will appear behind wooden stocks for 36 hours.',
    jester: 'Force them to wear the court jester outfit for all to see. Their profile avatar will be dressed as a jester for 48 hours.',
    protection: 'Buy protection against mockery for yourself. No one can mock you for 72 hours.',
    shame: 'Publicly shame this user for all to see. A shame banner will appear on their profile for 24 hours.',
    target: 'Mark this user as a target for others. A target symbol will appear on their profile for 24 hours.',
    challenge: 'Challenge this user to a mockery duel. A challenge banner will appear on their profile for 36 hours.',
    ghost: 'Make this user appear as a ghost. Their profile will have a ghostly appearance for 48 hours.',
    putridEggs: 'Throw extra putrid eggs for maximum stench. Their profile will have green stains for 36 hours.',
    silence: 'Silence this user from the public court. Their comments will appear muted for 48 hours.',
    courtJester: 'Make them the official court jester. Their profile will have jester decorations for 48 hours.',
    smokeBomb: 'Throw a smoke bomb to temporarily hide their profile. Their profile will be obscured by smoke for 24 hours.'
  };
  
  return descriptions[action] || 'A mysterious form of mockery.';
}

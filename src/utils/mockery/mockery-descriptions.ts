
import { MockeryAction, ExtendedMockeryAction } from '@/types/mockery-types';

// Get the description for a mockery action
export const getMockeryActionDescription = (action: MockeryAction | ExtendedMockeryAction): string => {
  const descriptions: Record<string, string> = {
    tomatoes: 'Pelt this user with rotten tomatoes, leaving a visual stain on their profile for 24 hours.',
    eggs: 'Throw rotten eggs at this user, leaving a smelly visual effect on their profile for 24 hours.',
    putridEggs: 'Throw extra putrid eggs at this user, leaving a stronger visual effect on their profile for 36 hours.',
    dungeons: 'Send this user to the royal dungeons, applying a jail-bar overlay to their profile for 24 hours.',
    immune: 'Grant royal immunity to this user, preventing them from being mocked for 48 hours.',
    crown: 'Add a mock crown to this user, turning them into a satirical monarch for 24 hours.',
    stocks: 'Place this user in the public stocks, restricting their profile appearance for 24 hours.',
    dunce: 'Put a dunce cap on this user, marking them as lacking in wisdom for 24 hours.',
    jester: 'Dress this user as the court jester, giving them a comical appearance for 24 hours.',
    courtJester: 'Dress this user as the court jester, giving them a comical appearance for 36 hours.',
    jest: 'Apply a jest effect to this user, making them the subject of royal humor for 24 hours.',
    troll: 'Declare this user a bridge troll, altering their appearance to be troll-like for 24 hours.',
    peasant: 'Demote this user to a lowly peasant, removing any royal appearance for 24 hours.',
    rat: 'Name this user a plague rat, adding rat-like features to their profile for 24 hours.',
    ghost: 'Turn this user into a ghost, making their profile appear transparent for 24 hours.',
    skeleton: 'Transform this user into a skeleton, replacing their avatar with a skeletal version for 24 hours.',
    zombie: 'Convert this user to a zombie, adding zombie-like features to their profile for 24 hours.',
    witch: 'Accuse this user of witchcraft, adding witch-like features to their profile for 24 hours.',
    monster: 'Label this user a monster, adding monstrous features to their profile for 24 hours.',
    demon: 'Expose this user as a demon, adding demonic features to their profile for 24 hours.',
    dragon: 'Identify this user as a dragon, adding dragon-like features to their profile for 24 hours.',
    king: 'Crown this user as a false king, adding satirical royal features for 24 hours.',
    queen: 'Crown this user as a false queen, adding satirical royal features for 24 hours.',
    knight: 'Dub this user a rusty knight, adding worn knightly features to their profile for 24 hours.',
    bishop: 'Name this user a corrupt bishop, adding clerical mockery to their profile for 24 hours.',
    rook: 'Declare this user a crumbling rook, adding chess-piece mockery to their profile for 24 hours.',
    pawn: 'Expose this user as a mere pawn, adding chess-piece mockery to their profile for 24 hours.',
    target: 'Make this user a target practice, adding archery target mockery to their profile for 24 hours.',
    challenge: 'Issue a royal challenge to this user, adding competitive mockery to their profile for 24 hours.',
    smokeBomb: 'Deploy a smoke bomb on this user, obscuring their profile with smoke effects for 24 hours.',
    glitterBomb: 'Deploy a glitter bomb on this user, covering their profile with glitter effects for 24 hours.',
    royalPie: 'Throw a pie at this user, leaving a pie splatter effect on their profile for 24 hours.',
    jokeCrown: 'Place a joke crown on this user, making them look silly for 24 hours.',
    memeFrame: 'Place a meme frame around this user, making their profile comical for 24 hours.',
    roast: 'Apply a royal roast to this user, adding burn marks to their profile for 24 hours.',
    ridicule: 'Subject this user to public ridicule, adding shame indicators to their profile for 24 hours.',
    humiliate: 'Apply royal humiliation to this user, adding embarrassment visuals to their profile for 24 hours.',
    expose: 'Publicly expose this user, adding exposure visuals to their profile for 24 hours.',
    mock: 'Apply royal mockery to this user, adding general mockery visuals to their profile for 24 hours.',
    taunt: 'Apply a royal taunt to this user, adding taunt visuals to their profile for 24 hours.',
    guillotine: 'Subject this user to the mockery guillotine, adding beheaded visuals to their profile for 24 hours.',
    defeat: 'Apply a royal defeat to this user, adding defeat visuals to their profile for 24 hours.',
    removal: 'Apply content removal to this user, temporarily hiding parts of their profile for 24 hours.',
    protection: 'Apply royal protection to this user, preventing them from being mocked for 7 days.'
  };

  return descriptions[action] || 'Apply a mockery effect to this user for 24 hours.';
};

// Re-export with alternative name for backward compatibility
export const getMockeryDescription = getMockeryActionDescription;

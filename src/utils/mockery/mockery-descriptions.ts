
import { MockeryActionType } from '@/types/mockery';

/**
 * Get the description for a mockery action
 */
export const getMockeryActionDescription = (action: MockeryActionType): string => {
  const descriptions: Record<string, string> = {
    tomatoes: 'Throw rotten tomatoes at this user, covering their profile with virtual tomato splatter.',
    eggs: 'Fling digital rotten eggs at this user\'s profile, creating a messy, eggy overlay.',
    shame: 'Ring the shame bell, alerting the entire kingdom to this user\'s dishonorable behavior.',
    dungeons: 'Temporarily banish this user to the digital dungeons, where they shall reflect upon their actions.',
    immune: 'Grant royal immunity to this user, protecting them from mockery for a limited time.',
    crown: 'Place a ridiculous oversized crown on their profile, marking them as a pretender to the throne.',
    stocks: 'Lock this user in the digital stocks, subjecting them to public ridicule.',
    dunce: 'Place a dunce cap on this user\'s profile, marking them as lacking in wisdom.',
    jester: 'Dress this user as the court jester, complete with bells and a multi-colored outfit.',
    troll: 'Transform this user into a digital bridge troll, lurking under the castle\'s pathways.',
    peasant: 'Demote this user to a lowly peasant, removing all signs of nobility.',
    rat: 'Turn this user into a plague rat, scurrying through the digital castle.',
    ghost: 'Transform this user into a ghostly apparition, haunting their own profile.',
    skeleton: 'Replace this user\'s profile with a skeletal version, rattling through the halls of the castle.',
    zombie: 'Turn this user into a shuffling zombie, groaning through the royal court.',
    witch: 'Accuse this user of witchcraft, marking their profile with symbols of the occult.',
    monster: 'Transform this user into a terrifying monster, frightening the other nobles.',
    demon: 'Mark this user as possessed by a mischievous demon, wreaking havoc in the kingdom.',
    dragon: 'Turn this user into a fearsome dragon, breathing digital fire throughout the castle.',
    king: 'Crown this user as a false king, with a gaudy and obviously fake royal regalia.',
    queen: 'Make this user a pretender queen, with an exaggerated crown and royal attire.',
    knight: 'Dub this user a rusty knight, weighed down by creaking digital armor.',
    bishop: 'Name this user a corrupt bishop, selling digital indulgences to all who pass by.',
    rook: 'Turn this user into a crumbling rook, standing guard over nothing important.',
    pawn: 'Expose this user as a mere pawn in the greater game of royal politics.',
    target: 'Make this user a target for royal archery practice, with digital arrows hitting their profile.',
    challenge: 'Issue a royal challenge to this user, demanding they prove their worth in coin.'
  };
  
  return descriptions[action] || 'Apply a mysterious and malicious effect to this user\'s profile.';
};

export default getMockeryActionDescription;

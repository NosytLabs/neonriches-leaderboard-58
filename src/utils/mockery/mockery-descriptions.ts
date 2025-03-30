
import { MockeryAction } from '@/types/mockery';

export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: "Splatter this user's profile with virtual tomatoes. A classic form of public ridicule.",
    eggs: "Pelt this user's profile with digital rotten eggs. The smell of mockery lingers!",
    shame: "Ring the shame bell and parade this user through the digital town square.",
    dungeons: "Banish this poor soul to the virtual dungeons for their offenses.",
    immune: "Grant immunity from mockery effects. The ultimate protection!",
    crown: "Place a mocking crown on this user's head. Heavy is the head...",
    stocks: "Lock this user in the village stocks for public amusement.",
    dunce: "Place a dunce cap on this user, clearly marking their folly.",
    jester: "Designate this user as the court's fool for all to laugh at.",
    fool: "Mark this user as the Royal Fool, subject to mockery and laughter.",
    troll: "Label this user as a troll. Feed at your own risk.",
    peasant: "Demote this user to peasant status. Back to the fields!",
    rat: "Mark this user as a plague rat. Avoid at all costs!",
    ghost: "Haunt this user's profile with spooky effects.",
    skeleton: "Curse this user with skeletal visuals on their profile.",
    zombie: "Turn this user into a digital zombie. Braaaains!",
    witch: "Put this user on trial as a witch. Do they float?",
    monster: "Label this user as a monster. Hide your children!",
    demon: "Mark this user with demonic symbols. Exorcism costs extra.",
    dragon: "Designate this user as a dragon's target. Knights needed!",
    king: "Brand this user a false king. The usurper shall be mocked!",
    queen: "Label this user a false queen. Off with their head!",
    knight: "Reveal this knight's tarnished armor for all to see.",
    bishop: "Show this bishop has fallen from grace in the kingdom.",
    rook: "Mark this rook as damaged and unreliable in the game.",
    pawn: "Designate this user as a mere pawn in the grand game.",
    target: "Place a target on this user's back for all to see.",
    challenge: "Issue a public challenge to this user. Will they answer?"
  };
  
  return descriptions[action] || "An unknown form of mockery";
};

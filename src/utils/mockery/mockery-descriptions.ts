
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Create complete action descriptions mapping
export const actionDescriptions: Record<MockeryAction, string> = {
  tomato: "Throw a juicy tomato at someone to express your discontent.",
  egg: "Hurl an egg to make a mess of your target's appearance.",
  rotten_egg: "Throw a rotten egg for extra stink and embarrassment.",
  flame: "Burn someone with a witty insult.",
  heart: "Show some love and support in these trying times.",
  thumbs_down: "Express your disapproval with a classic thumbs down.",
  skull: "A deadly blow to their ego.",
  crown: "Crown someone as the king or queen of fools.",
  putridEgg: "A specially aged egg that makes a terrifying smell.",
  stocks: "Put them in the public stocks for all to mock.",
  jester: "Make them wear the jester's hat.",
  mock: "Openly ridicule them with pointed mockery.",
  challenge: "Challenge them to prove themselves.",
  joust: "Challenge them to a royal joust.",
  duel: "Call them out to a gentlemanly duel.",
  silence: "Silence them from speaking in the town square.",
  laugh: "Point and laugh at their expense.",
  fish: "Slap them with a wet fish.",
  taunt: "Taunt them with insulting gestures.",
  thumbsDown: "Show your royal disapproval.",
  trumpet: "Announce their folly with a trumpet sound.",
  confetti: "Ironically celebrate their failure with confetti.",
  shame: "Ring the bell of shame for all to hear.",
  courtJester: "Appoint them as your personal court jester.",
  smokeBomb: "Throw a smoke bomb to cause confusion.",
  protection: "Grant them royal protection from mockery."
};

// Create complete tier descriptions mapping
export const tierDescriptions: Record<MockeryTier, string> = {
  common: "An everyday mockery action available to all.",
  uncommon: "A more unique form of ridicule that stands out.",
  rare: "A special mockery that few can perform.",
  epic: "A legendary mockery that leaves a lasting impression.",
  legendary: "The most prestigious and impactful mockery possible.",
  royal: "A mockery worthy of royalty.",
  silver: "A refined mockery with silver lining.",
  bronze: "A basic mockery with a touch of style.",
  basic: "The simplest form of mockery.",
  premium: "A premium mockery reserved for members.",
  standard: "A standard mockery that gets the job done."
};

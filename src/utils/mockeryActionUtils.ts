
import {
  Egg,
  FlameIcon,
  Crown,
  ThumbsDown,
  Skull,
  Heart,
  PartyPopper, // Using PartyPopper instead of Confetti
  MusicIcon,
  Fish,
  Flame,
  Volume2,
  Award,
  MessageCircle,
  Circle,
  Scroll,
  Shield,
  AlertTriangle
} from "lucide-react";

// Define the mockery action types
export const MOCKERY_ACTIONS = [
  'tomato',
  'egg',
  'rotten_egg',
  'flame',
  'heart',
  'thumbs_down',
  'skull',
  'crown',
  'putridEgg',
  'stocks',
  'jester',
  'mock',
  'challenge',
  'joust',
  'duel',
  'silence',
  'laugh',
  'fish',
  'taunt',
  'thumbsDown',
  'trumpet',
  'confetti',
  'shame',
  'courtJester',
  'smokeBomb',
  'protection',
  'royal_decree',
  'shame_certificate',
  'insult',
  'humiliate'
] as const;

// Export normalizeMockeryAction for PublicShamingFeature
export const normalizeMockeryAction = (action: string): string => {
  // Convert camelCase/snake_case to readable format
  return action
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());
};

// Export valid mockery actions
export const VALID_MOCKERY_ACTIONS = MOCKERY_ACTIONS;

// Define the mockery action icons
export const mockeryActionIcons: Record<string, any> = {
  tomato: Circle,
  egg: Egg,
  rotten_egg: Egg,
  flame: FlameIcon,
  heart: Heart,
  thumbs_down: ThumbsDown,
  skull: Skull,
  crown: Crown,
  putridEgg: Egg,
  stocks: AlertTriangle,
  jester: Crown,
  mock: MessageCircle,
  challenge: Award,
  joust: Award,
  duel: Flame,
  silence: Volume2,
  laugh: PartyPopper,
  fish: Fish,
  taunt: MessageCircle,
  thumbsDown: ThumbsDown,
  trumpet: MusicIcon,
  confetti: PartyPopper,
  shame: AlertTriangle,
  courtJester: Crown,
  smokeBomb: Circle,
  protection: Shield,
  royal_decree: Scroll,
  shame_certificate: Scroll,
  insult: MessageCircle,
  humiliate: AlertTriangle
};

// Define descriptions for each mockery action
export const mockeryActionDescriptions: Record<string, string> = {
  tomato: "Throw a tomato at the user",
  egg: "Throw an egg at the user",
  rotten_egg: "Throw a rotten egg for extra stench",
  flame: "Flame the user in public",
  heart: "Ironically heart their profile",
  thumbs_down: "Show disapproval",
  skull: "Mark them as digitally deceased",
  crown: "Crown them as the fool",
  putridEgg: "A specialty item that really stinks",
  stocks: "Place them in the digital stocks for public mockery",
  jester: "Declare them the court jester",
  mock: "Simple mockery for simple folk",
  challenge: "Challenge them to prove their worth",
  joust: "Challenge them to a spending joust",
  duel: "Declare a spending duel",
  silence: "Temporarily silence them",
  laugh: "Publicly laugh at their status",
  fish: "Slap them with a digital fish",
  taunt: "Taunt them mercilessly",
  thumbsDown: "Express your disapproval",
  trumpet: "Announce their failure",
  confetti: "Ironically celebrate their spending",
  shame: "Publicly shame them",
  courtJester: "Name them the court's fool",
  smokeBomb: "Leave them in a cloud of confusion",
  protection: "Protect yourself from their mockery",
  royal_decree: "Issue a royal decree of shame",
  shame_certificate: "Award a certificate of shame",
  insult: "Deliver a royal insult",
  humiliate: "Publicly humiliate them"
};

// Define costs for mockery actions
export const mockeryActionCosts: Record<string, number> = {
  tomato: 5,
  egg: 10,
  rotten_egg: 300,
  flame: 75,
  heart: 100,
  thumbs_down: 15,
  skull: 20,
  crown: 200,
  putridEgg: 300,
  stocks: 250,
  jester: 30,
  mock: 50,
  challenge: 75,
  joust: 100,
  duel: 150,
  silence: 350,
  laugh: 25,
  fish: 35,
  taunt: 40,
  thumbsDown: 15,
  trumpet: 45,
  confetti: 50,
  shame: 150,
  courtJester: 400,
  smokeBomb: 450,
  protection: 500,
  royal_decree: 600,
  shame_certificate: 250,
  insult: 100,
  humiliate: 300
};

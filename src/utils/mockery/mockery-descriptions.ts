
import { MockeryAction } from '@/types/mockery-types';

// Descriptions for mockery actions (short format)
export const mockeryShortDescriptions: Record<string, string> = {
  tomato: "Throw a tomato",
  egg: "Pelt with eggs",
  putridEgg: "Throw a rotten egg",
  crown: "Topple royal status",
  thumbsDown: "Express disapproval",
  mock: "Openly mock",
  stocks: "Place in public stocks",
  jester: "Assign a jester hat",
  courtJester: "Demote to court jester",
  silence: "Temporarily silence",
  taunt: "Taunt with insults",
  smokeBomb: "Throw a smoke bomb",
  protection: "Shield from mockery",
  shame: "Publicly shame",
  challenge: "Challenge their worth",
  joust: "Challenge to joust",
  duel: "Engage in a duel",
  royal_decree: "Issue a royal decree",
  flame: "Flame harshly",
  heart: "Show affection",
  skull: "Threaten ominously",
  thumbs_down: "Disapprove publicly",
  laugh: "Laugh dismissively",
  rotten_egg: "Assault with an egg that has far exceeded its shelf life"
};

// Descriptions for mockery actions (full format)
export const mockeryDescriptions: Record<string, string> = {
  tomato: "Throw a tomato at the target, causing temporary embarrassment.",
  egg: "Pelt the target with eggs, creating a messy situation.",
  putridEgg: "Throw a rotten egg that leaves a lingering unpleasant odor.",
  crown: "Topple the target's crown, reducing their royal status temporarily.",
  thumbsDown: "Express your disapproval of the target's actions.",
  mock: "Openly mock the target with jeering and ridicule.",
  stocks: "Place the target in the public stocks for all to see.",
  jester: "Assign the target a jester hat, making them the butt of jokes.",
  courtJester: "Demote the target to court jester, requiring them to entertain the court.",
  silence: "Temporarily prevent the target from speaking in royal discussions.",
  taunt: "Taunt the target with insulting words and gestures.",
  smokeBomb: "Throw a smoke bomb that temporarily obscures the target's visibility.",
  protection: "Shield yourself from mockery with royal protection.",
  shame: "Publicly shame the target for their dishonorable behavior.",
  challenge: "Challenge the target to prove their worth.",
  joust: "Challenge the target to a virtual jousting match.",
  duel: "Engage the target in a prestigious royal duel.",
  royal_decree: "Issue a royal decree declaring the target's embarrassment.",
  flame: "Publicly flame the target with harsh criticism.",
  heart: "Show unexpected affection to confuse the target.",
  skull: "Send an ominous skull as a warning to the target.",
  thumbs_down: "Publicly show disapproval of the target's contributions.",
  laugh: "Dismissively laugh at the target's efforts or statements.",
  rotten_egg: "Assault with an egg that has far exceeded its shelf life."
};

// Get the appropriate description based on action
export function getMockeryDescription(action: MockeryAction | string, isShort: boolean = false): string {
  const descriptions = isShort ? mockeryShortDescriptions : mockeryDescriptions;
  
  return descriptions[action] || (isShort ? 
    "Mock the target" : 
    "Use a mockery action against the target."
  );
}

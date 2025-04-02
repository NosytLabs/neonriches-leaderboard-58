
import { MockeryAction } from '@/types/mockery-types';

// Icon names for mockery actions
export const mockeryIcons: Partial<Record<string, string>> = {
  tomato: "tomato",
  egg: "egg",
  putridEgg: "putrid-egg",
  crown: "crown",
  thumbsDown: "thumbs-down",
  mock: "mock",
  stocks: "stocks",
  jester: "jester",
  courtJester: "court-jester",
  silence: "silence",
  taunt: "taunt",
  smokeBomb: "smoke-bomb",
  protection: "shield",
  shame: "shame",
  challenge: "challenge",
  joust: "joust",
  duel: "duel",
  royal_decree: "royal-decree",
  // Remove any that aren't defined in MockeryAction
};

// Icon colors for mockery actions
export const mockeryIconColors: Partial<Record<string, string>> = {
  tomato: "text-red-500",
  egg: "text-yellow-400",
  putridEgg: "text-green-600",
  crown: "text-royal-gold",
  thumbsDown: "text-zinc-400",
  mock: "text-blue-400",
  stocks: "text-amber-700",
  jester: "text-purple-400",
  courtJester: "text-purple-600",
  silence: "text-gray-400",
  taunt: "text-orange-500",
  smokeBomb: "text-zinc-600",
  protection: "text-green-500",
  shame: "text-red-600",
  challenge: "text-teal-500",
  joust: "text-indigo-500",
  duel: "text-red-700",
  royal_decree: "text-royal-purple",
  // Add any new ones that are in MockeryAction
};

// Get the appropriate icon for a mockery action
export function getMockeryIcon(action: MockeryAction | string): string {
  return mockeryIcons[action] || "mock";
}

// Get the color class for a mockery action
export function getMockeryIconColor(action: MockeryAction | string): string {
  return mockeryIconColors[action] || "text-gray-400";
}

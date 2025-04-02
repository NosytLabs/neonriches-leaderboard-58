
import { MockeryAction, MockeryTier } from "@/types/mockery-types";

/**
 * Utility functions and data for mockery features
 */

// Mockery action descriptions
export const mockeryDescriptions: Record<MockeryAction, string> = {
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

/**
 * Gets a random mockery message for the given action type
 */
export const getRandomMockeryMessage = (
  action: MockeryAction,
  targetName: string
): string => {
  // Default fallback messages
  const defaultMessages: Record<MockeryAction, string[]> = {
    tomato: [
      `A tomato splatters on ${targetName}'s profile!`,
      `${targetName} has been tomatoed!`,
      `Splat! ${targetName} is now wearing tomato.`,
    ],
    egg: [
      `An egg cracks on ${targetName}'s head!`,
      `${targetName}'s profile is egged!`,
      `${targetName} needs to clean up after being egged.`,
    ],
    rotten_egg: [
      `A putrid smell follows ${targetName} everywhere now!`,
      `${targetName} has been struck with a rotten egg!`,
      `The stench of ${targetName}'s shame will linger for days.`,
    ],
    flame: [
      `${targetName} has been flamed!`,
      `${targetName} is feeling the heat of your mockery.`,
      `You've publicly roasted ${targetName}!`,
    ],
    heart: [
      `You've ironically hearted ${targetName}'s profile.`,
      `${targetName} receives your sarcastic affection.`,
      `Your fake appreciation makes ${targetName} look foolish.`,
    ],
    thumbs_down: [
      `You've shown your disapproval of ${targetName}.`,
      `${targetName} has been thumbed down.`,
      `Your disapproval of ${targetName} is now public.`,
    ],
    skull: [
      `${targetName} has been marked as digitally deceased.`,
      `${targetName}'s digital life is over, courtesy of you.`,
      `R.I.P ${targetName}'s online reputation.`,
    ],
    crown: [
      `${targetName} has been crowned the kingdom's fool.`,
      `All hail ${targetName}, the royal jester!`,
      `${targetName} wears the crown of shame.`,
    ],
    // Add all other mockery actions with at least one message each
    putridEgg: [`A putrid egg splatters on ${targetName}, leaving a horrible stench!`],
    stocks: [`${targetName} has been placed in the stocks for public ridicule.`],
    jester: [`${targetName} is now the court jester, thanks to you!`],
    mock: [`You've mocked ${targetName} for all to see.`],
    challenge: [`You've challenged ${targetName} to prove their worth!`],
    joust: [`You've challenged ${targetName} to a spending joust!`],
    duel: [`A spending duel has been declared against ${targetName}!`],
    silence: [`${targetName} has been silenced by your mockery.`],
    laugh: [`You laugh loudly at ${targetName}'s expense.`],
    fish: [`You slap ${targetName} with a digital fish!`],
    taunt: [`You taunt ${targetName} mercilessly.`],
    thumbsDown: [`Your disapproval of ${targetName} is now permanent.`],
    trumpet: [`You announce ${targetName}'s failures with a trumpet blast!`],
    confetti: [`You ironically celebrate ${targetName}'s wasteful spending!`],
    shame: [`${targetName} has been publicly shamed!`],
    courtJester: [`${targetName} is now officially the court's fool.`],
    smokeBomb: [`You've left ${targetName} in a cloud of confusion.`],
    protection: [`You're now protected from ${targetName}'s mockery.`],
    royal_decree: [`A royal decree of shame has been issued against ${targetName}!`],
    shame_certificate: [`${targetName} has been awarded a certificate of shame!`],
    insult: [`You've delivered a royal insult to ${targetName}!`],
    humiliate: [`${targetName} has been publicly humiliated!`]
  };

  const messages = defaultMessages[action];
  return messages[Math.floor(Math.random() * messages.length)];
};

/**
 * Gets the rarity tier for a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomato: "common",
    egg: "common",
    rotten_egg: "uncommon",
    flame: "uncommon",
    heart: "common",
    thumbs_down: "common",
    skull: "rare",
    crown: "epic",
    putridEgg: "rare",
    stocks: "epic",
    jester: "rare",
    mock: "common",
    challenge: "uncommon",
    joust: "rare",
    duel: "epic",
    silence: "epic",
    laugh: "common",
    fish: "uncommon",
    taunt: "common",
    thumbsDown: "common",
    trumpet: "uncommon",
    confetti: "uncommon",
    shame: "uncommon",
    courtJester: "rare",
    smokeBomb: "rare",
    protection: "legendary",
    royal_decree: "legendary",
    shame_certificate: "epic",
    insult: "uncommon",
    humiliate: "rare"
  };

  return tiers[action] || "common";
};

/**
 * Gets the cost for a mockery action
 */
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
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

  return costs[action] || 50;
};

/**
 * Formats a mockery action name for display
 */
export const formatMockeryAction = (action: MockeryAction): string => {
  return action
    .replace(/_/g, " ")
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

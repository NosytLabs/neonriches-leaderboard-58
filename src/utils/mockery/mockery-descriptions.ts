
import { MockeryAction } from '@/types/mockery-types';

/**
 * Short descriptions for mockery actions
 */
export const mockeryShortDescriptions: Record<MockeryAction, string> = {
  tomato: "Throw a rotten tomato",
  egg: "Throw an egg",
  putridEgg: "Throw a putrid egg",
  rotten_egg: "Throw a rotten egg",
  flame: "Send flames",
  heart: "Send hearts",
  thumbs_down: "Give thumbs down",
  laugh: "Laugh at them",
  skull: "Send a skull",
  crown: "Crown them",
  stocks: "Put them in the stocks",
  jester: "Make them the jester",
  shame: "Shame them publicly",
  silence: "Silence them",
  courtJester: "Make them the court jester",
  smokeBomb: "Throw a smoke bomb",
  protection: "Offer protection",
  taunt: "Taunt them",
  mock: "Mock them",
  challenge: "Challenge them",
  joust: "Challenge to a joust",
  duel: "Challenge to a duel",
  fish: "Slap with a fish",
  thumbsDown: "Give thumbs down"
};

/**
 * Full descriptions for mockery actions
 */
export const mockeryFullDescriptions: Record<MockeryAction, string> = {
  tomato: "Show your disapproval by pelting them with a juicy, rotten tomato that will leave a mark!",
  egg: "Hurl an egg at their profile and watch it crack on impact. Messy but effective!",
  putridEgg: "Launch a particularly putrid egg that's been aging for maximum stench!",
  rotten_egg: "Throw a rotten egg that will leave them with a stench that lasts for days!",
  flame: "Burn them with your fiery criticism and leave them feeling the heat!",
  heart: "Shower them with love and affection to counteract the mockery.",
  thumbs_down: "Express your disapproval with a simple but effective gesture.",
  laugh: "Laugh loudly at their expense, drawing attention to their follies.",
  skull: "Send them a grim reminder of their failures with a menacing skull.",
  crown: "Sarcastically crown them as the ruler of whatever mistake they've made.",
  stocks: "Lock them in the medieval stocks for public ridicule and humiliation.",
  jester: "Assign them the role of jester, highlighting their foolishness for all to see.",
  shame: "Ring the shame bell and parade them through the streets of the digital kingdom.",
  silence: "Enforce a moment of silence to reflect on their poor decisions.",
  courtJester: "Elevate them to the distinguished position of Court Jester for exceptional folly.",
  smokeBomb: "Deploy a smoke bomb to create confusion and distraction.",
  protection: "Offer your protection against the mockery of others. A noble gesture!",
  taunt: "Provoke them with taunting words designed to get under their skin.",
  mock: "Simply mock them with words, the classic approach to mockery.",
  challenge: "Issue a formal challenge to settle matters properly.",
  joust: "Challenge them to a joust, the traditional way to settle disputes among nobles.",
  duel: "Challenge them to a duel at dawn for the ultimate resolution.",
  fish: "Deliver the traditional slap with a fish, a timeless insult of the highest order.",
  thumbsDown: "Express your disapproval with a simple but effective gesture."
};

export default {
  mockeryShortDescriptions,
  mockeryFullDescriptions
};

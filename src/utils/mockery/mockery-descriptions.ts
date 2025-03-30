
import { MockeryAction, MockeryTier } from '@/types/mockery';

export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: "Pelt the target with virtual tomatoes, leaving them red-faced and embarrassed.",
    eggs: "Throw rotten eggs at the target's profile, creating a stinky mess.",
    stocks: "Lock the user in virtual stocks, displaying them for public ridicule.",
    dunce: "Place a dunce cap on the user's profile picture, marking them as foolish.",
    jester: "Force the user to wear a jester's hat, making them the court's fool.",
    crown: "Award a mock crown, highlighting the user's false sense of importance.",
    taunt: "Display a taunting message on the user's profile.",
    shame: "Ring the shame bell, notifying everyone of the user's disgrace.",
    putridEggs: "Bombard with the foulest of rotten eggs for maximum embarrassment.",
    silence: "Temporarily restrict the user's ability to post or comment.",
    courtJester: "Appoint the user as the official court jester, forced to entertain the nobility.",
    smokeBomb: "Throw a smoke bomb that leaves the user's profile temporarily foggy and unclear.",
    protection: "Cast a protection spell that shields from mockery (not an attack).",
    jest: "Make a light-hearted joke at the user's expense.",
    glitterBomb: "Explode a glitter bomb on their profile that's impossible to clean up.",
    royalPie: "Throw a cream pie worthy of royalty directly at their face.",
    jokeCrown: "Place a novelty crown that squirts water on their profile picture.",
    memeFrame: "Frame their profile picture with embarrassing memes.",
    roast: "Deliver a scorching roast that burns their dignity.",
    ridicule: "Subject to public ridicule in the town square.",
    humiliate: "Craft a tailored humiliation for maximum embarrassment.",
    expose: "Reveal an embarrassing (fictional) fact about them.",
    mock: "Imitate and parody their mannerisms and speech.",
    guillotine: "Subject them to the virtual guillotine of shame.",
    dungeons: "Lock them in the virtual dungeons for all to see.",
    removal: "Temporarily remove their status indicators.",
    challenge: "Publicly challenge them to match your spending.",
    target: "Mark them as a target for group mockery.",
    defeat: "Declare victory over them in a spending contest.",
    immune: "Gain temporary immunity from mockery (not an attack)."
  };
  
  return descriptions[action] || "Apply a mysterious mockery effect to the target.";
};

export const getMockeryActionTitle = (action: MockeryAction): string => {
  const titles: Record<MockeryAction, string> = {
    tomatoes: "Tomato Pelting",
    eggs: "Egg Barrage",
    stocks: "Public Stocks",
    dunce: "Dunce Cap",
    jester: "Jester's Folly",
    crown: "Mock Coronation",
    taunt: "Royal Taunt",
    shame: "Bell of Shame",
    putridEggs: "Putrid Egg Assault",
    silence: "Royal Silence",
    courtJester: "Court Jester Appointment",
    smokeBomb: "Smoke Screen",
    protection: "Royal Protection",
    jest: "Court Jest",
    glitterBomb: "Glitter Explosion",
    royalPie: "Royal Custard Pie",
    jokeCrown: "Jester's Crown",
    memeFrame: "Meme Framing",
    roast: "Royal Roasting",
    ridicule: "Public Ridicule",
    humiliate: "Noble Humiliation",
    expose: "Royal Exposé",
    mock: "Courtly Mockery",
    guillotine: "Shame Guillotine",
    dungeons: "Dungeon Detention",
    removal: "Status Removal",
    challenge: "Royal Challenge",
    target: "Mark as Target",
    defeat: "Victory Declaration",
    immune: "Royal Immunity"
  };
  
  return titles[action] || "Mysterious Mockery";
};

export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};

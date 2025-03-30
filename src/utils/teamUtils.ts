
import { TeamColor } from '@/types/teams';

/**
 * Get a team motto based on the team color
 */
export const getTeamMotto = (team: TeamColor): string => {
  switch(team) {
    case 'red':
      return "Spend First, Think Never";
    case 'green':
      return "Wealth So Strategic, It's Almost Pathetic";
    case 'blue':
      return "Patience in Spending, Unbridled in Pretending";
    default:
      return "Choose a Side, Pay the Price";
  }
};

/**
 * Get a list of absurd team benefits
 */
export const getTeamBenefit = (team: TeamColor): string[] => {
  switch(team) {
    case 'red':
      return [
        "15% increased mockery toward financial prudence",
        "Name appears in slightly more garish font on leaderboard",
        "Access to exclusive 'Reckless Spending Tips' newsletter",
        "Special ability to shame users who haven't spent in 24 hours",
        "Royal red border on profile that cost us $0.00 to implement"
      ];
    case 'green':
      return [
        "Special 'Calculated Spender' badge that means nothing",
        "Exclusive access to meaningless spending statistics", 
        "Members can view spending patterns no one cares about",
        "Ability to create strategic spending plans (that won't be followed)",
        "Digital monocle for your profile picture because... sophistication"
      ];
    case 'blue':
      return [
        "Rank updates appear with a 'thoughtful' 3-second delay",
        "Exclusive 'Long-Term Planner' title (expires weekly)",
        "Access to timing algorithm that suggests the worst times to spend",
        "Special ability to pretend spending was strategic after the fact",
        "Blue profile accent color that screams 'I think I'm clever'"
      ];
    default:
      return [
        "No benefits at all",
        "You really should choose a team",
        "Seriously, it's all meaningless anyway"
      ];
  }
};

/**
 * Get an absurd team statistic
 */
export const getTeamAbsurdStat = (team: TeamColor): string => {
  switch(team) {
    case 'red':
      return "RORS members have collectively clicked 'Purchase' 8,742 times before checking their bank balance, leading to a 43% increase in overdraft fees in the digital kingdom.";
    case 'green':
      return "EEC members spend an average of 3.7 hours per week creating spreadsheets to justify their spending, a process that actually costs more in lost productivity than they save through 'strategic spending'.";
    case 'blue':
      return "97% of CCC members claim to have a 'system' for optimal spending timing, yet none can explain what it is. When pressed, most mumble something about 'market conditions' and change the subject.";
    default:
      return "Team-less users are 100% more likely to eventually join a team, a statistic we just made up but sounds plausible.";
  }
};

/**
 * Get a team's absurd NFT joke
 */
export const getTeamNFTJoke = (team: TeamColor): string => {
  switch(team) {
    case 'red':
      return "RORS members proudly collect NFTs of virtual dumpster fires, believing they're 'ironic investments' and not just digital receipts for burned money.";
    case 'green':
      return "EEC members maintain diversified portfolios of digital rocks, meticulously tracking their 'value' in spreadsheets with more columns than the actual market has buyers.";
    case 'blue':
      return "CCC members only buy NFTs at 'optimal market timing' – which coincidentally always seems to be minutes before a collection crashes in value.";
    default:
      return "The only NFT worth owning is the 'Non-Fungible Trophy' you get for not owning any NFTs at all.";
  }
};

/**
 * Get a team's absurd crypto roast
 */
export const getTeamCryptoRoast = (team: TeamColor): string => {
  switch(team) {
    case 'red':
      return "RORS members invest in currencies with names like 'RocketMoonLamboCoin' and are shocked when developers disappear with their funds.";
    case 'green':
      return "EEC members maintain 17 different crypto wallets, each with exactly $96.42 in different tokens, creating a perfectly balanced portfolio that still manages to lose value daily.";
    case 'blue':
      return "CCC members proudly announce they're 'waiting for the right moment' to buy crypto, a moment that has mysteriously never arrived in the past decade.";
    default:
      return "People without teams actually make better crypto decisions, probably because they're not trying to impress fictional factions with their digital currency prowess.";
  }
};

/**
 * Get a team's absurd security guarantee
 */
export const getTeamSecurityGuarantee = (team: TeamColor): string => {
  switch(team) {
    case 'red':
      return "RORS security protocol: All passwords are written on virtual sticky notes attached to virtual monitors, protected by a state-of-the-art honor system.";
    case 'green':
      return "EEC security guarantee: Our data is secured with the same vigilance we apply to our spending – sporadic attention followed by elaborate justifications for failures.";
    case 'blue':
      return "CCC security promise: We time our security updates to perfectly coincide with moments when hackers are definitely busy attacking someone else.";
    default:
      return "No team? Your data is actually safer because even our hackers operate on team-based quotas and don't bother with the unaffiliated.";
  }
};

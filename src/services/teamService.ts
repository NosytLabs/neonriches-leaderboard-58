
import { TeamColor } from '@/types/mockery-types';

class TeamService {
  private teamColors: Record<TeamColor, string> = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-green-500',
    gold: 'text-yellow-400',
    purple: 'text-purple-500',
    none: 'text-gray-400',
    neutral: 'text-gray-400',
    silver: 'text-slate-400',
    bronze: 'text-amber-600',
    crimson: 'text-red-600'
  };

  private teamNames: Record<TeamColor, string> = {
    red: 'Red Team',
    blue: 'Blue Team',
    green: 'Green Team',
    gold: 'Gold Team',
    purple: 'Purple Team',
    none: 'Unaffiliated',
    neutral: 'Neutral',
    silver: 'Silver Team',
    bronze: 'Bronze Team',
    crimson: 'Crimson Team'
  };

  private teamMottos: Record<TeamColor, string> = {
    red: 'Strength and Power',
    blue: 'Wisdom and Loyalty',
    green: 'Growth and Prosperity',
    gold: 'Wealth and Ambition',
    purple: 'Mystery and Royalty',
    none: 'Independent and Free',
    neutral: 'Balance in All Things',
    silver: 'Elegance and Grace',
    bronze: 'Foundation and History',
    crimson: 'Blood and Glory'
  };

  private teamBenefits: Record<TeamColor, string[]> = {
    red: [
      'Damage bonus in team competitions',
      'Early access to combat events',
      'Loyalty rewards for long-term members'
    ],
    blue: [
      'Cooldown reduction on abilities',
      'Bonus reputation with scholars',
      'Access to exclusive knowledge bases'
    ],
    green: [
      'Resource gathering bonus',
      'Growth-related achievements unlock faster',
      'Environmentally-friendly status effects'
    ],
    gold: [
      'Increased currency drops',
      'Merchant discounts in the marketplace',
      'Bonus rewards from treasure events'
    ],
    purple: [
      'Exclusive cosmetic items',
      'Enhanced stealth capabilities',
      'Rare item drop rate increase'
    ],
    none: [
      'No faction restrictions',
      'Neutral status in faction conflicts',
      'Balanced stat distribution'
    ],
    neutral: [
      'Diplomatic immunity in certain zones',
      'Access to neutral-only quests',
      'Flexible alliance options'
    ],
    silver: [
      'Enhanced defense capabilities',
      'Resistance to negative status effects',
      'Bonuses during night cycles'
    ],
    bronze: [
      'Bonus experience gain',
      'Crafting cost reduction',
      'Improved durability for equipment'
    ],
    crimson: [
      'Blood magic abilities',
      'Intimidation bonus in negotiations',
      'Sacrifice-based power enhancements'
    ]
  };

  getTeamColor(team: TeamColor): string {
    return this.teamColors[team] || this.teamColors.none;
  }

  getTeamName(team: TeamColor): string {
    return this.teamNames[team] || this.teamNames.none;
  }

  getTeamMotto(team: TeamColor): string {
    return this.teamMottos[team] || this.teamMottos.none;
  }

  getTeamBenefits(team: TeamColor): string[] {
    return this.teamBenefits[team] || this.teamBenefits.none;
  }
}

export const teamService = new TeamService();

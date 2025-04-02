
import { TeamData, TeamColor } from '@/types/mockery-types';

// Mock team data
const teamData: TeamData[] = [
  {
    id: "red-team",
    name: "Red Team",
    color: "red",
    description: "The fierce and passionate Red Team, known for their boldness.",
    logoUrl: "/images/teams/red-logo.png",
    benefits: [
      "10% bonus on all contributions",
      "Special red team cosmetics",
      "Access to exclusive Red Team events"
    ],
    members: 1250,
    totalContribution: 580000,
    totalSpent: 580000,
    rank: 1,
    previousRank: 2
  },
  {
    id: "blue-team",
    name: "Blue Team",
    color: "blue",
    description: "The strategic and calm Blue Team, masters of planning.",
    logoUrl: "/images/teams/blue-logo.png",
    benefits: [
      "5% discount on profile boosts",
      "Special blue team profile effects",
      "Priority access to new features"
    ],
    members: 980,
    totalContribution: 520000,
    totalSpent: 520000,
    rank: 2,
    previousRank: 1
  },
  {
    id: "green-team",
    name: "Green Team",
    color: "green",
    description: "The growth-focused Green Team, always supporting each other.",
    logoUrl: "/images/teams/green-logo.png",
    benefits: [
      "7% extra rewards from group challenges",
      "Special green team banners",
      "Weekly team bonus rewards"
    ],
    members: 730,
    totalContribution: 450000,
    totalSpent: 450000,
    rank: 3,
    previousRank: 3
  },
  {
    id: "gold-team",
    name: "Gold Team",
    color: "gold",
    description: "The elite Gold Team, known for their extravagant spending.",
    logoUrl: "/images/teams/gold-logo.png",
    benefits: [
      "15% prestige bonus on profile",
      "Special gold team cosmetics and effects",
      "VIP access to all team events"
    ],
    members: 480,
    totalContribution: 620000,
    totalSpent: 620000,
    rank: 4,
    previousRank: 4
  },
  {
    id: "purple-team",
    name: "Purple Team",
    color: "purple",
    description: "The mysterious Purple Team, masters of strategy and surprise.",
    logoUrl: "/images/teams/purple-logo.png",
    benefits: [
      "Random bonus rewards after spending",
      "Special surprise mechanics",
      "Unique purple team abilities"
    ],
    members: 620,
    totalContribution: 320000,
    totalSpent: 320000,
    rank: 5,
    previousRank: 5
  }
];

// Export the functions needed by tests
export const getTeams = async (): Promise<TeamData[]> => {
  return teamData;
};

export const getTeamByColor = async (color: TeamColor): Promise<TeamData | null> => {
  const team = teamData.find(t => t.color === color);
  return team || null;
};

export default {
  getTeams,
  getTeamByColor
};


import { TeamColor } from '@/types/team';

export const getTeamName = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return 'Red Dragons';
    case 'blue':
      return 'Blue Knights';
    case 'green':
      return 'Green Rangers';
    case 'gold':
      return 'Gold Monarchs';
    case 'purple':
      return 'Purple Wizards';
    case 'silver':
      return 'Silver Sentinels';
    case 'bronze':
      return 'Bronze Guardians';
    case 'crimson':
      return 'Crimson Lords';
    case 'neutral':
      return 'Neutral Alliance';
    case 'none':
    default:
      return 'Unaligned';
  }
};

export const getTeamColor = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return 'text-red-500';
    case 'blue':
      return 'text-blue-500';
    case 'green':
      return 'text-green-500';
    case 'gold':
      return 'text-amber-400';
    case 'purple':
      return 'text-purple-500';
    case 'silver':
      return 'text-gray-300';
    case 'bronze':
      return 'text-amber-700';
    case 'crimson':
      return 'text-red-700';
    case 'neutral':
      return 'text-gray-400';
    case 'none':
    default:
      return 'text-gray-500';
  }
};

export const getTeamTailwindBgColor = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return 'border-red-500';
    case 'blue':
      return 'border-blue-500';
    case 'green':
      return 'border-green-500';
    case 'gold':
      return 'border-amber-400';
    case 'purple':
      return 'border-purple-500';
    case 'silver':
      return 'border-gray-300';
    case 'bronze':
      return 'border-amber-700';
    case 'crimson':
      return 'border-red-700';
    case 'neutral':
      return 'border-gray-400';
    case 'none':
    default:
      return 'border-gray-500';
  }
};

export const getTeamMotto = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return "Blood and Gold Above All";
    case 'blue':
      return "Honor Through Service";
    case 'green':
      return "Fortune Favors the Bold";
    case 'gold':
      return "Glory Through Golden Prosperity";
    case 'purple':
      return "Power Through Royal Bloodlines";
    case 'silver':
      return "Wisdom Through Reflection";
    case 'bronze':
      return "Strength Through Persistence";
    case 'crimson':
      return "Victory Through Sacrifice";
    case 'neutral':
      return "Balance In All Things";
    case 'none':
    default:
      return "Status Through Spending";
  }
};

export const getTeamBenefits = (team: TeamColor): string[] => {
  switch (team) {
    case 'red':
      return [
        "20% bonus on all mockery actions",
        "Exclusive 'Crimson Aura' effect",
        "Access to the Dragon's Hoard collection"
      ];
    case 'blue':
      return [
        "10% protection from mockery effects",
        "Exclusive 'Azure Shield' profile border",
        "Priority access to special events"
      ];
    case 'green':
      return [
        "15% discount on purchases",
        "Exclusive 'Emerald Fortune' profile effect",
        "Enhanced visibility on leaderboards"
      ];
    case 'gold':
      return [
        "25% boost in status points",
        "Exclusive 'Golden Crown' profile decoration",
        "Access to royal announcements before others"
      ];
    case 'purple':
      return [
        "Magic protection from one mockery per day",
        "Exclusive 'Arcane Glow' profile effect",
        "Access to wizards-only chat room"
      ];
    default:
      return [
        "Standard mockery abilities",
        "Basic profile customization",
        "Regular access to events"
      ];
  }
};

export default {
  getTeamName,
  getTeamColor,
  getTeamTailwindBgColor,
  getTeamMotto,
  getTeamBenefits
};

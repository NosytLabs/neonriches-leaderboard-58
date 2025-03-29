
import { User } from '@/types/user';
import { UserTeam, UserGender } from '@/types/user';

/**
 * Calculate team statistics and rankings
 */
export const calculateTeamStats = (users: User[]) => {
  // Count users per team
  const teamCounts = {
    red: 0,
    green: 0,
    blue: 0,
    none: 0
  };

  // Sum spending per team
  const teamSpending = {
    red: 0,
    green: 0,
    blue: 0,
    none: 0
  };

  // Track top spenders per team
  const topSpenders = {
    red: null as User | null,
    green: null as User | null,
    blue: null as User | null
  };

  // Process each user
  users.forEach(user => {
    const team = user.team || 'none';
    if (team !== 'none') {
      // Update counts
      teamCounts[team as keyof typeof teamCounts]++;
      
      // Update spending
      const userSpent = user.totalSpent || user.amountSpent || 0;
      teamSpending[team as keyof typeof teamSpending] += userSpent;
      
      // Update top spender if applicable
      if (team !== 'none' && 
          (!topSpenders[team as keyof typeof topSpenders] || 
           userSpent > (topSpenders[team as keyof typeof topSpenders]?.totalSpent || 0))) {
        topSpenders[team as keyof typeof topSpenders] = user;
      }
    }
  });

  // Calculate total users and spending
  const totalUsers = teamCounts.red + teamCounts.green + teamCounts.blue;
  const totalSpending = teamSpending.red + teamSpending.green + teamSpending.blue;

  // Calculate percentages
  const redPercent = totalUsers ? Math.round((teamCounts.red / totalUsers) * 100) : 0;
  const greenPercent = totalUsers ? Math.round((teamCounts.green / totalUsers) * 100) : 0;
  const bluePercent = totalUsers ? Math.round((teamCounts.blue / totalUsers) * 100) : 0;

  // Determine team rankings based on spending
  const teams = [
    { team: 'red', spending: teamSpending.red, count: teamCounts.red, topSpender: topSpenders.red },
    { team: 'green', spending: teamSpending.green, count: teamCounts.green, topSpender: topSpenders.green },
    { team: 'blue', spending: teamSpending.blue, count: teamCounts.blue, topSpender: topSpenders.blue }
  ];

  // Sort by spending in descending order
  const sortedTeams = [...teams].sort((a, b) => b.spending - a.spending);

  return {
    counts: teamCounts,
    spending: teamSpending,
    topSpenders,
    totalUsers,
    totalSpending,
    percentages: {
      red: redPercent,
      green: greenPercent,
      blue: bluePercent
    },
    rankings: sortedTeams
  };
};

/**
 * Get a display name for a team
 */
export const getTeamName = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Red Dragons";
    case 'green':
      return "Green Griffins";
    case 'blue':
      return "Blue Phoenix";
    case 'none':
    default:
      return "Unaffiliated";
  }
};

/**
 * Get a description for a team
 */
export const getTeamDescription = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return "The Red Dragons embrace the spirit of competition and dominance. Bold and fearless, they seek to claim the throne through sheer determination and fiery passion.";
    case 'green':
      return "The Green Griffins value strategy and growth. Wise and calculated, they build their treasury with careful planning and sustainable investments.";
    case 'blue':
      return "The Blue Phoenix prioritize loyalty and rebirth. Spiritual and resilient, they rise from setbacks stronger than before, united in their journey to ascend.";
    case 'none':
    default:
      return "Those who have yet to pledge allegiance to a royal house. Their destiny awaits.";
  }
};

/**
 * Get a motto for a team
 */
export const getTeamMotto = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Through Fire and Fortune";
    case 'green':
      return "Wealth Through Wisdom";
    case 'blue':
      return "Rise, Renew, Reign";
    case 'none':
    default:
      return "Choose Your Destiny";
  }
};

/**
 * Get a noble title based on gender and team
 */
export const getNobleTitle = (gender: UserGender | undefined, team: UserTeam): string => {
  if (!gender || gender === 'prefer-not-to-say' || gender === 'neutral') {
    return "Noble";
  }
  
  switch (gender) {
    case 'king':
      return team === 'red' ? "Dragon King" : team === 'green' ? "Griffin King" : "Phoenix King";
    case 'queen':
      return team === 'red' ? "Dragon Queen" : team === 'green' ? "Griffin Queen" : "Phoenix Queen";
    case 'duke':
      return team === 'red' ? "Dragon Duke" : team === 'green' ? "Griffin Duke" : "Phoenix Duke";
    case 'duchess':
      return team === 'red' ? "Dragon Duchess" : team === 'green' ? "Griffin Duchess" : "Phoenix Duchess";
    case 'lord':
      return team === 'red' ? "Dragon Lord" : team === 'green' ? "Griffin Lord" : "Phoenix Lord";
    case 'lady':
      return team === 'red' ? "Dragon Lady" : team === 'green' ? "Griffin Lady" : "Phoenix Lady";
    case 'male':
      return team === 'red' ? "Dragon Knight" : team === 'green' ? "Griffin Knight" : "Phoenix Knight";
    case 'female':
      return team === 'red' ? "Dragon Maiden" : team === 'green' ? "Griffin Maiden" : "Phoenix Maiden";
    case 'jester':
      return team === 'red' ? "Dragon Jester" : team === 'green' ? "Griffin Jester" : "Phoenix Jester";
    default:
      return "Noble";
  }
};

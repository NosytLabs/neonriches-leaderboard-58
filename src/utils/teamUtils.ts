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
      return "Royal Order of Reckless Spending";
    case 'green':
      return "Emerald Exchequer Cabaret";
    case 'blue':
      return "Cobalt Credit Cartel";
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
      return "Masters of mindless monetary mayhem, the RORS believe that one must spend with reckless abandon to assert digital dominance.";
    case 'green':
      return "The calculating gold-hoarders of the EEC believe that strategic spending is the key to digital nobility.";
    case 'blue':
      return "The intellectual elite of digital aristocracy, the CCC members pride themselves on timing their purchases for maximum social impact.";
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
      return "Buy First, Think Never";
    case 'green':
      return "Wealth So Strategic, It's Almost Pathetic";
    case 'blue':
      return "Patience in Spending, Unbridled in Pretending";
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

/**
 * Get team border color
 */
export const getTeamBorderColor = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return "border-red-500/30";
    case 'green':
      return "border-green-500/30";
    case 'blue':
      return "border-blue-500/30";
    default:
      return "border-white/20";
  }
};

/**
 * Get initials from name
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

/**
 * Get gender title
 */
export const getGenderTitle = (gender: UserGender | undefined): string => {
  switch (gender) {
    case 'king':
      return "King";
    case 'queen':
      return "Queen";
    case 'duke':
      return "Duke";
    case 'duchess':
      return "Duchess";
    case 'lord':
      return "Lord";
    case 'lady':
      return "Lady";
    case 'jester':
      return "Court Jester";
    default:
      return "Noble";
  }
};

/**
 * Get gender emoji
 */
export const getGenderEmoji = (gender: UserGender | undefined): string => {
  switch (gender) {
    case 'king':
      return "👑";
    case 'queen':
      return "👸";
    case 'duke':
    case 'lord':
      return "🤴";
    case 'duchess':
    case 'lady':
      return "💃";
    case 'jester':
      return "🃏";
    default:
      return "👤";
  }
};

/**
 * Get team benefit list
 */
export const getTeamBenefit = (team: UserTeam): string[] => {
  switch (team) {
    case 'red':
      return [
        "Exclusive access to meaningless red profile flair",
        "Ability to brag about your spending with a fiery theme",
        "Fictional +5% spending efficiency on Tuesdays"
      ];
    case 'green':
      return [
        "Imaginary green profile effects that don't actually work",
        "Pretend 10% discount on future rank purchases",
        "Completely fabricated weekly bonus allocation"
      ];
    case 'blue':
      return [
        "Illusory blue profile highlights and animations",
        "Non-existent priority access to special features",
        "Made-up enhanced visibility on the leaderboard"
      ];
    default:
      return [
        "No benefits whatsoever",
        "Complete freedom from team-based peer pressure",
        "Zero expectations for contribution to team goals"
      ];
  }
};

/**
 * Get absurd team statistic
 */
export const getTeamAbsurdStat = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Members of the Royal Order of Reckless Spending have collectively spent enough money to buy 47 imaginary castles in the digital kingdom, each with its own virtual moat filled with premium pixels.";
    case 'green':
      return "Emerald Exchequer Cabaret members have achieved a 237% increase in meaningless digital status symbols, outpacing other teams in the accumulation of non-existent prestige by a staggering margin.";
    case 'blue':
      return "Cobalt Credit Cartel members hold the record for most simultaneous transactions in a single second, processing enough digital payments to temporarily overload our fictional economic monitoring system.";
    default:
      return "Unaffiliated users have saved approximately $142,857 by not participating in our ridiculous spending competition, which could have purchased actual real-world goods and services.";
  }
};

/**
 * Get team historical note
 */
export const getTeamHistoricalNote = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Founded in the early days of digital excess, the RORS started when a group of financially reckless individuals decided that the best use of their money was to compete for meaningless online status.";
    case 'green':
      return "The Emerald Exchequer Cabaret began as a splinter group from the original spenders, claiming their strategic approach to wasteful spending was intellectually superior to mere reckless abandonment.";
    case 'blue':
      return "Historians trace the Cobalt Credit Cartel to the Great Digital Depression of 2022, when a collective of online status-seekers decided to form an alliance dedicated to synchronized spending for maximum leaderboard impact.";
    default:
      return "The unaffiliated represent the last bastion of financial sanity in our ecosystem, although their presence here suggests they too will eventually succumb to the allure of meaningless digital status.";
  }
};

/**
 * Get team NFT joke
 */
export const getTeamNFTJoke = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Your team has collectively purchased 347 worthless NFTs of pixelated crowns that are now worth approximately 0.0003% of their original value. Congratulations on your investment acumen!";
    case 'green':
      return "Members of your faction have spent a cumulative 5,872 hours explaining to friends and family why their collection of procedurally generated emerald JPEGs represents the future of finance.";
    case 'blue':
      return "Your team's NFT portfolio has achieved the impressive feat of losing value faster than actual physical artwork left outside during a hurricane. A truly remarkable achievement in digital asset depreciation.";
    default:
      return "By not joining a team, you've saved yourself from at least eight different NFT-related group purchase schemes that would have resulted in owning digital images of cartoon royalty with varying accessories.";
  }
};

/**
 * Get team security guarantee
 */
export const getTeamSecurityGuarantee = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Your financial information is secured by our state-of-the-art security system, which consists primarily of crossing our fingers really hard and hoping nobody tries anything nefarious.";
    case 'green':
      return "We've invested heavily in a premium security solution: a very stern warning message on our server that says 'Please do not hack' in flashing green Comic Sans font.";
    case 'blue':
      return "Your data is protected by 128-bits of encryption, which sounds impressive until you realize it's just us running your password through a Caesar cipher and adding the word 'secure' to the beginning.";
    default:
      return "As an unaffiliated user, your data benefits from our special security protocol of being mixed in with everyone else's, operating on the principle that hackers probably can't be bothered to sort it all out.";
  }
};

/**
 * Get team crypto roast
 */
export const getTeamCryptoRoast = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Members of your team are 73% more likely to describe themselves as 'crypto visionaries' while simultaneously being unable to explain blockchain technology beyond 'it's like, um, decentralized and stuff.'";
    case 'green':
      return "Your faction has the highest rate of members who've named their pets after cryptocurrencies, with 'Ethereum' being the most popular choice, followed closely by 'HODL' and 'ToTheMoon.'";
    case 'blue':
      return "Statistical analysis shows your team members have spent more time watching price charts than sleeping, achieving the remarkable feat of being simultaneously exhausted and overstimulated at all times.";
    default:
      return "By remaining unaffiliated, you've managed to avoid approximately 247 hours of crypto-related conversations that would have inevitably included the phrase 'you just don't understand the technology.'";
  }
};

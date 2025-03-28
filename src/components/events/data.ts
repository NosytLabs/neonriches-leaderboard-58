
import { EventDetails } from './components/EventDetailsModal';

// Mock user data for shame targets
export const topUsers = [
  {
    id: 1,
    username: "LordCashington",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rank: 1,
    team: "red",
    amountSpent: 10450
  },
  {
    id: 2,
    username: "DuchessDigits",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rank: 2,
    team: "blue",
    amountSpent: 8750
  },
  {
    id: 3,
    username: "Sir_Spends_A_Lot",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rank: 3,
    team: "green",
    amountSpent: 6320
  },
  {
    id: 4,
    username: "CountessCoin",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rank: 4,
    team: "blue",
    amountSpent: 5430
  },
  {
    id: 5,
    username: "BaronBankroll",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rank: 5,
    team: "red",
    amountSpent: 4750
  },
  {
    id: 6,
    username: "LadyLuxury",
    profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rank: 6,
    team: "green",
    amountSpent: 3680
  }
];

// Upcoming events data
export const upcomingEvents = [
  {
    id: "treasure-hunt",
    name: "Royal Treasure Hunt",
    description: "Solve riddles and follow clues to find valuable treasures hidden throughout the site. Discover all treasures to claim special rewards and badges.",
    image: "https://images.unsplash.com/photo-1551732998-9573f695fdbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
    endDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 days from now
    type: "treasure"
  },
  {
    id: "public-shaming",
    name: "Public Shaming Festival",
    description: "Monthly medieval-style event where nobles can publicly shame others with tomatoes, eggs, or stocks. Discounted rates for all shaming actions!",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
    endDate: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000).toISOString(), // 17 days from now
    type: "shame"
  },
  {
    id: "team-conquest",
    name: "Team Conquest",
    description: "Join forces with your team to dominate the leaderboard and claim territories on the kingdom map. The winning team earns exclusive badges and bonuses.",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    startDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(), // 21 days from now
    endDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(), // 28 days from now
    type: "team"
  }
];

// Event details data
export const eventDetailsData: Record<string, EventDetails> = {
  "treasure-hunt": {
    id: "treasure-hunt",
    name: "Royal Treasure Hunt",
    description: "Solve riddles and follow clues to find valuable treasures hidden throughout the site. Discover all treasures to claim special rewards and badges.",
    image: "https://images.unsplash.com/photo-1551732998-9573f695fdbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(),
    rewardTypes: ["Exclusive Badges", "Profile Cosmetics", "Bonus Rank Points", "Special Titles"],
    eligibility: "All registered users can participate",
    participationRequirements: [
      "Navigate the site to find hidden treasures",
      "Solve riddles to uncover treasure locations",
      "Collect all treasures for bonus rewards",
      "Login at least once during the event period"
    ],
    specialRules: [
      "Hints can be purchased for difficult treasures",
      "Treasures are purely cosmetic and don't affect actual rank",
      "Progress is saved throughout the event",
      "Share clues with team members for team-based bonuses"
    ]
  },
  "public-shaming": {
    id: "public-shaming",
    name: "Public Shaming Festival",
    description: "Monthly medieval-style event where nobles can publicly shame others with tomatoes, eggs, or stocks. Discounted rates for all shaming actions!",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000).toISOString(),
    rewardTypes: ["Shame Trophies", "Special Effects", "Humiliator Badges"],
    eligibility: "Users who have spent at least $1 can participate",
    participationRequirements: [
      "Pay a small fee to shame other nobles",
      "Choose from tomatoes, eggs, or stocks",
      "Target any noble on the leaderboard",
      "Most shamings performed earns special recognition"
    ],
    specialRules: [
      "25% discount on all shaming actions during festival",
      "Purely visual effects that last 24 hours",
      "Cooldown period between shaming the same user",
      "Does not affect actual leaderboard rankings"
    ]
  },
  "team-conquest": {
    id: "team-conquest",
    name: "Team Conquest",
    description: "Join forces with your team to dominate the leaderboard and claim territories on the kingdom map. The winning team earns exclusive badges and bonuses.",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    startDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(),
    rewardTypes: ["Team Territories", "Conquest Badges", "Team Bonuses", "Individual Rewards"],
    eligibility: "All users who have joined a team",
    participationRequirements: [
      "Be a member of one of the three teams",
      "Contribute spending during the event period",
      "Participate in team-based challenges",
      "Help claim and defend territories"
    ],
    specialRules: [
      "Territories are claimed based on team spending",
      "Special bonuses for holding strategic locations",
      "Daily challenges offer bonus points",
      "Winning team gets 10% bonus to all member rankings for 1 week"
    ]
  }
};


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Trophy, Info, Crown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TeamData } from '@/types/team';
import { getTeamColor, getTeamName, getTeamTailwindBgColor } from '@/utils/teamUtils';

interface TeamDetailsProps {
  team: TeamData & { id?: string };
  onJoin?: () => void;
  onLeave?: () => void;
  isMember?: boolean;
}

// We need to extend the TeamData with default values for properties that might be missing
const enhanceTeamData = (team: TeamData & { id?: string }): TeamData & { 
  id: string; 
  icon: string; 
  motto: string; 
  description: string;
  benefits: string[];
} => {
  return {
    ...team,
    id: team.id || team.color,
    icon: team.icon || `/assets/teams/${team.color}.svg`,
    motto: team.motto || getTeamMotto(team.color),
    description: team.description || getTeamDescription(team.color),
    benefits: team.benefits || getTeamBenefits(team.color)
  };
};

const getTeamMotto = (color: string): string => {
  const mottos: Record<string, string> = {
    red: "Spend First, Think Never",
    blue: "Today's Purchases, Tomorrow's Problems",
    green: "All Wealth's a Stage",
    gold: "The Golden Rule: He Who Has The Gold Makes The Rules",
    purple: "Nobility Through Expenditure",
    neutral: "Independent in Finance and Spirit",
    none: "Free From Faction, Bound By Currency",
    silver: "Second Place, First-Rate Spending",
    bronze: "Humble in Rank, Mighty in Wallet",
    crimson: "Blood Money Flows Eternal"
  };
  return mottos[color] || "Wealth Is Our Virtue";
};

const getTeamDescription = (color: string): string => {
  const descriptions: Record<string, string> = {
    red: "Founded on the principle that money exists to be spent lavishly and spectacularly. Members pride themselves on bold, impulsive purchases that demonstrate their financial bravado to the entire kingdom.",
    blue: "Masters of leveraging credit to maintain appearances. The Cobalt Credit Cartel is composed of members who excel at maintaining a high spending profile through strategic use of borrowed funds.",
    green: "Combines flamboyant spending with theatrical flair. Every purchase made by an Emerald Exchequer Cabaret member is treated as a performance art piece, designed to entertain and impress.",
    gold: "The elite inner circle of the Cash Kingdom. Golden Treasury members set the standard for opulence and wasteful spending, influencing trends and establishing what's worthy of royal attention.",
    purple: "The Royal Purple Council represents the old money of the Cash Kingdom. Their approach to spending emphasizes tradition, legacy, and the responsibilities that come with vast wealth.",
    neutral: "Independent spenders who refuse to align with any single philosophy of consumption. Members value flexibility and pragmatism in their spending habits.",
    none: "Those yet to pledge allegiance to a spending philosophy. Unaffiliated members are free to explore different approaches to conspicuous consumption without team obligations.",
    silver: "The Silver Sovereign Society combines fiscal responsibility with strategic splurging. Members aim to maximize the social impact of each dollar spent.",
    bronze: "The Bronze Bank Brigade takes pride in achieving impressive status with more modest means. Members specialize in creating the appearance of lavish spending through careful curation.",
    crimson: "The most aggressive and competitive spenders in the kingdom. Crimson Crown Command members often engage in spending wars and believe victory comes at any cost."
  };
  return descriptions[color] || "A faction of like-minded spenders united by their financial philosophy.";
};

const getTeamBenefits = (color: string): string[] => {
  const benefits: Record<string, string[]> = {
    red: [
      "20% discount on all 'Impulsive Purchase' actions",
      "Exclusive 'Spending Spree' profile animation",
      "Ability to initiate kingdom-wide spending challenges"
    ],
    blue: [
      "Access to exclusive 'Credit Line' cosmetics",
      "Reduced cooldown on high-value purchases",
      "Special 'Debt Forgiveness' ceremonial events"
    ],
    green: [
      "Enhanced profile animations when spending",
      "Access to theatrical spending announcement templates",
      "Bonus reaction options on other members' purchases"
    ],
    gold: [
      "Golden profile border visible to all users",
      "Priority display in leaderboards and public spaces",
      "Ability to issue Royal Decrees affecting spending rules",
      "Exclusive access to the Golden Treasury private forums"
    ],
    purple: [
      "Noble title selection for profile display",
      "Legacy spending records highlighted in profile",
      "Access to exclusive 'Heritage' cosmetic items",
      "Ability to establish family spending dynasties"
    ],
    neutral: [
      "Reduced team transfer cooldown periods",
      "Immunity from certain team-based spending requirements",
      "Bonus flexibility in cosmetic combinations"
    ],
    none: [
      "No team obligations or responsibilities",
      "Open recruitment from all teams",
      "Freedom to develop personal spending style"
    ],
    silver: [
      "Enhanced visibility for strategic purchases",
      "Access to spending efficiency metrics",
      "Special 'Value Showcase' profile section"
    ],
    bronze: [
      "Boosted visual impact of moderate purchases",
      "Access to exclusive 'Appearance Enhancement' tools",
      "Collaborative spending pool for joint purchases"
    ],
    crimson: [
      "Bonus impact when outspending rivals",
      "Intimidating profile effects during spending wars",
      "Access to aggressive 'Challenge' and 'Duel' actions"
    ]
  };
  return benefits[color] || [
    "Team-specific profile customization options",
    "Access to team-exclusive events and challenges",
    "Collaborative benefits when team ranks increase"
  ];
};

const TeamDetails: React.FC<TeamDetailsProps> = ({ 
  team, 
  onJoin, 
  onLeave, 
  isMember = false 
}) => {
  // Enhance the team data with default values for missing properties
  const enhancedTeam = enhanceTeamData(team);
  const teamColorClass = getTeamColor(team.color);
  const teamBorderClass = getTeamTailwindBgColor(team.color);
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className={`border-b border-white/10 ${teamBorderClass.replace('border', 'border-b')}`}>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <div className="mr-2 h-8 w-8 rounded-full overflow-hidden flex items-center justify-center bg-black/30">
              <img src={enhancedTeam.icon} alt={enhancedTeam.name} className="h-6 w-6" />
            </div>
            <span className={teamColorClass}>{enhancedTeam.name}</span>
          </CardTitle>
          <Badge className={`${teamColorClass} bg-black/30 border ${teamBorderClass}`}>
            {enhancedTeam.color.charAt(0).toUpperCase() + enhancedTeam.color.slice(1)}
          </Badge>
        </div>
        <div className="italic text-sm text-white/60 mt-1">
          "{enhancedTeam.motto}"
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-medium flex items-center mb-2">
              <Info className="h-4 w-4 mr-2 text-white/70" />
              Description
            </h3>
            <p className="text-sm text-white/70">
              {enhancedTeam.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between py-2 px-3 bg-black/20 rounded-md">
            <div className="flex items-center text-sm">
              <Users className="h-4 w-4 mr-2 text-white/70" />
              <span>Members:</span>
            </div>
            <Badge variant="outline" className="bg-black/30">
              {enhancedTeam.memberCount || 'Unknown'}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between py-2 px-3 bg-black/20 rounded-md">
            <div className="flex items-center text-sm">
              <Trophy className="h-4 w-4 mr-2 text-white/70" />
              <span>Team Ranking:</span>
            </div>
            <Badge variant="outline" className="bg-black/30">
              {enhancedTeam.ranking ? `#${enhancedTeam.ranking}` : 'Unranked'}
            </Badge>
          </div>
          
          <div>
            <h3 className="font-medium flex items-center mb-2">
              <Crown className="h-4 w-4 mr-2 text-white/70" />
              Team Benefits
            </h3>
            
            {enhancedTeam.benefits && enhancedTeam.benefits.length > 0 ? (
              <ul className="space-y-2">
                {enhancedTeam.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Shield className="h-4 w-4 mr-2 mt-0.5 text-white/50" />
                    <span className="text-white/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-white/50">No specific benefits listed for this team.</p>
            )}
          </div>
          
          <div className="pt-2">
            {isMember ? (
              <Button 
                variant="outline"
                className="w-full border-white/20 hover:bg-white/5"
                onClick={onLeave}
              >
                Leave Team
              </Button>
            ) : (
              <Button 
                className={`w-full ${teamColorClass.replace('text', 'hover:text')} hover:bg-white/10`}
                variant="outline"
                onClick={onJoin}
              >
                Join {enhancedTeam.name}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamDetails;

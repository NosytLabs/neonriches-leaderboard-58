
import React from 'react';
import { TeamColor } from '@/types/team';
import { Shield, Zap, Star } from 'lucide-react';

interface TeamBenefitsDisplayProps {
  team: TeamColor;
}

const TeamBenefitsDisplay: React.FC<TeamBenefitsDisplayProps> = ({ team }) => {
  const getBenefits = (teamColor: TeamColor): string[] => {
    const benefits: Record<TeamColor, string[]> = {
      red: [
        "20% bonus on direct deposits",
        "Exclusive crimson profile frames",
        "Access to special fire-themed effects"
      ],
      blue: [
        "5% royalty on team member spending",
        "Sapphire profile decorations",
        "Water-themed animation effects"
      ],
      green: [
        "15% discount on profile boosts",
        "Nature-themed custom emojis",
        "Emerald crown cosmetic item"
      ],
      gold: [
        "30% bonus on all transactions",
        "Golden profile badge",
        "Premium animated effects"
      ],
      purple: [
        "Royal status in team chats",
        "Mystical profile effects",
        "Priority customer support"
      ],
      none: [
        "Team-neutral bonuses",
        "Access to all basic features",
        "Standard profile customization"
      ],
      neutral: [
        "Balanced bonus allocation",
        "Universal team compatibility",
        "Cross-team communication perks"
      ],
      silver: [
        "10% discount on upgrades",
        "Silver frame decorations",
        "Special moonlight effects"
      ],
      bronze: [
        "5% bonus on recurring deposits",
        "Bronze commemorative items",
        "Early access to basic features"
      ],
      crimson: [
        "25% power boost in team competitions",
        "Blood-themed profile effects",
        "Exclusive crimson cosmetics"
      ]
    };
    
    return benefits[teamColor] || ["No benefits available"];
  };

  const getTeamBenefitIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="h-5 w-5 mr-2" />;
      case 1:
        return <Zap className="h-5 w-5 mr-2" />;
      case 2:
        return <Star className="h-5 w-5 mr-2" />;
      default:
        return <Shield className="h-5 w-5 mr-2" />;
    }
  };

  const benefits = getBenefits(team);

  return (
    <div className="space-y-4">
      {benefits.length > 0 ? (
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className={`flex items-center p-3 rounded-md bg-${team}-500/10 border border-${team}-500/20`}>
              {getTeamBenefitIcon(index)}
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400">No team benefits available</p>
      )}
      
      <p className="text-sm text-gray-400 italic mt-4">
        Note: Team benefits are purely cosmetic and do not provide any actual gameplay advantages.
      </p>
    </div>
  );
};

export default TeamBenefitsDisplay;

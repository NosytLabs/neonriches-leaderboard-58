
import React from 'react';
import { Crown, MessageCircle, Users, Info } from 'lucide-react';
import BrandIcon from '../ui/brand-icon';
import { Banner } from '../ui/banner';

interface ChatHeaderProps {
  activeUsers?: number;
  title?: string;
  teamColor?: 'red' | 'green' | 'blue';
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  activeUsers = 0,
  title = "Royal Court Chat",
  teamColor
}) => {
  const teamColorClasses = {
    red: "text-team-red border-team-red/30 bg-team-red/5",
    green: "text-team-green border-team-green/30 bg-team-green/5",
    blue: "text-team-blue border-team-blue/30 bg-team-blue/5"
  };
  
  const defaultColorClass = "text-royal-gold border-royal-gold/30 bg-royal-gold/5";
  const colorClass = teamColor ? teamColorClasses[teamColor] : defaultColorClass;
  
  return (
    <div className="space-y-3 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BrandIcon size="sm" variant="fancy" animated />
          <h2 className="text-xl font-bold font-medieval text-royal-gold">{title}</h2>
        </div>
        
        <div className="hidden md:flex items-center p-2 bg-white/5 rounded-full text-sm text-white/60">
          <Users className="h-4 w-4 text-royal-gold mr-1" />
          <span>Active Nobles: {activeUsers}</span>
        </div>
      </div>
      
      <Banner 
        variant="throne"
        iconVariant="minimal"
        title="The Royal Court is now in session"
        description="Discuss strategies, form alliances, or simply boast about your spending. Remember, the more you spend, the more weight your words carry."
      />
    </div>
  );
};

export default ChatHeader;

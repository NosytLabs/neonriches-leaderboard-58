
import React from 'react';
import { UserRankData } from '@/services/spendingService';
import { Crown, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShameAction } from '../hooks/useShameEffect';
import { getShameActionIcon, getShameActionColor } from '../utils/shameUtils';

interface ShameUserCardProps {
  userData: UserRankData;
  shameCount: number;
  isCurrentUser: boolean;
  selectedShame: ShameAction | null;
  onShameSelect: (action: ShameAction) => void;
  onShameConfirm: () => void;
}

const ShameUserCard: React.FC<ShameUserCardProps> = ({
  userData,
  shameCount,
  isCurrentUser,
  selectedShame,
  onShameSelect,
  onShameConfirm
}) => {
  const getTeamColor = () => {
    if (!userData.team) return 'bg-gray-500';
    
    switch(userData.team) {
      case 'red': return 'bg-team-red';
      case 'green': return 'bg-team-green';
      case 'blue': return 'bg-team-blue';
      default: return 'bg-gray-500';
    }
  };
  
  return (
    <div 
      id={`user-card-${userData.userId}`}
      className={`glass-morphism border-white/10 p-4 rounded-lg relative overflow-hidden transition-all duration-300 hover:border-white/20 ${
        isCurrentUser ? 'bg-white/5' : ''
      }`}
    >
      {/* Crown for top 3 */}
      {userData.rank <= 3 && (
        <div className="absolute top-2 right-2">
          <Crown 
            size={16} 
            className={`
              ${userData.rank === 1 ? 'text-royal-gold' : ''}
              ${userData.rank === 2 ? 'text-gray-300' : ''}
              ${userData.rank === 3 ? 'text-amber-700' : ''}
            `}
          />
        </div>
      )}
      
      {/* User info */}
      <div className="flex items-center mb-3">
        <div className="relative mr-3">
          <div className="w-12 h-12 rounded-full glass-morphism border-white/10 flex items-center justify-center">
            {userData.profileImage ? (
              <img src={userData.profileImage} alt={userData.username} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-lg font-medium">{userData.username.charAt(0).toUpperCase()}</span>
            )}
          </div>
          {userData.team && (
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${getTeamColor()} border-2 border-background`}></div>
          )}
        </div>
        
        <div>
          <div className="flex items-center">
            <span className="font-medium">{userData.username}</span>
            <span className="ml-2 text-xs bg-white/10 px-1.5 py-0.5 rounded-full text-white/70">
              #{userData.rank}
            </span>
            {shameCount > 0 && (
              <span className="ml-2 text-xs bg-red-500/20 px-1.5 py-0.5 rounded-full text-red-300">
                {shameCount} {shameCount === 1 ? 'shame' : 'shames'}
              </span>
            )}
          </div>
          <div className="text-white/60 text-xs flex items-center">
            <Coins size={10} className="mr-1" />
            ${userData.totalSpent.toLocaleString()}
          </div>
        </div>
      </div>
      
      {/* Shame Actions */}
      {!isCurrentUser && (
        <>
          <div className="text-xs text-white/60 mb-1">Select shaming method:</div>
          <div className="flex space-x-2 mb-3">
            {(['tomatoes', 'eggs', 'stocks'] as ShameAction[]).map((action) => {
              const colors = getShameActionColor(action);
              const isSelected = selectedShame === action;
              
              return (
                <Button
                  key={action}
                  variant="outline"
                  size="sm"
                  className={`flex-1 h-8 ${
                    isSelected 
                      ? `${colors.bg} ${colors.border} border ${colors.text}` 
                      : 'glass-morphism border-white/10'
                  }`}
                  onClick={() => onShameSelect(action)}
                >
                  <span className="mr-1">{getShameActionIcon(action)}</span>
                  <span className="text-xs capitalize">{action}</span>
                </Button>
              );
            })}
          </div>
          
          <Button
            className="w-full bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white h-8"
            disabled={!selectedShame}
            onClick={onShameConfirm}
          >
            Shame This Noble
          </Button>
        </>
      )}
    </div>
  );
};

export default ShameUserCard;


import React from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryActionName } from '@/utils/mockeryActionUtils';
import { getMockeryIcon, getMockeryIconColor } from '@/utils/mockery/mockery-icons';

interface MockeryComponentProps {
  action: MockeryAction;
  size?: number;
  onMockUser?: (actionType: string, targetUserId: string) => Promise<void>;
  targetUserId?: string;
  costForAction?: (action: string) => number;
}

const MockeryComponent: React.FC<MockeryComponentProps> = ({ 
  action, 
  size = 24,
  onMockUser,
  targetUserId = '1', // Default value
  costForAction = () => 50 // Default cost function
}) => {
  const handleClick = async () => {
    if (onMockUser && targetUserId) {
      await onMockUser(action, targetUserId);
    }
  };

  const iconName = getMockeryIcon(action);
  const colorClass = getMockeryIconColor(action);
  const displayName = getMockeryActionName(action);

  // Simplified component with just an icon representation
  return (
    <div 
      className={`inline-flex items-center justify-center ${colorClass}`}
      onClick={onMockUser ? handleClick : undefined}
      style={{ cursor: onMockUser ? 'pointer' : 'default' }}
      title={displayName}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${colorClass}`}
      >
        {action === 'tomato' && (
          <path 
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" 
            fill="currentColor" 
          />
        )}
        {action === 'egg' && (
          <path 
            d="M12 2C8.13 2 5 8.13 5 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-5.87-3.13-12-9-12z" 
            fill="currentColor" 
          />
        )}
        {action === 'putridEgg' && (
          <path 
            d="M12 2C8.13 2 5 8.13 5 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-5.87-3.13-12-9-12z" 
            fill="currentColor" 
          />
        )}
        {action === 'crown' && (
          <path 
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" 
            fill="currentColor" 
          />
        )}
        {action === 'thumbsDown' && (
          <path 
            d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2z" 
            fill="currentColor" 
          />
        )}
        {/* Default icon for all other actions */}
        {!['tomato', 'egg', 'putridEgg', 'crown', 'thumbsDown'].includes(action) && (
          <path 
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42z" 
            fill="currentColor" 
          />
        )}
      </svg>
    </div>
  );
};

export default MockeryComponent;

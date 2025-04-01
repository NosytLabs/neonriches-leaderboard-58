
import { useContext } from 'react';
import { AuthContext } from '@/contexts/auth';
import { AuthContextType } from '@/types/auth-context';
import { TeamColor } from '@/types/team';
import { toTeamColor } from '@/utils/typeConverters';

/**
 * Custom hook for accessing the authentication context
 * @returns The auth context containing user data and authentication methods
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  // Process the user's team property to ensure it's a valid TeamColor
  if (context.user && context.user.team && typeof context.user.team === 'string') {
    context.user.team = toTeamColor(context.user.team);
  }
  
  return context;
}

export default useAuth;

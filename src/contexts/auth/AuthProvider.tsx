
import React, { createContext, useReducer, useEffect } from 'react';
import { AuthContextType } from '@/types/auth-context';
import { UserProfile } from '@/types/user-consolidated';
import { authReducer, initialAuthState } from './authReducer';
import { loginUser, registerUser, updateUserProfile } from '@/services/authService';
import { toTeamColor } from '@/utils/typeConverters';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  
  // Check for saved auth token on mount
  useEffect(() => {
    const checkAuth = async () => {
      dispatch({ type: 'AUTH_START' });
      
      try {
        const token = localStorage.getItem('auth_token');
        
        if (token) {
          // In a real app, this would validate the token with the backend
          const mockUser: UserProfile = {
            id: '1',
            username: 'royal_user',
            displayName: 'Royal User',
            email: 'user@example.com',
            profileImage: '/assets/profile-image.png',
            bio: 'Loyal member of the Royal Court',
            joinedDate: new Date().toISOString(),
            team: 'gold',
            tier: 'royal',
            rank: 42,
            previousRank: 45,
            totalSpent: 1500,
            amountSpent: 1500,
            walletBalance: 250,
            settings: {
              profileVisibility: 'public',
              allowProfileLinks: true,
              theme: 'royal',
              notifications: true,
              emailNotifications: false,
              marketingEmails: false,
              showRank: true,
              darkMode: true,
              soundEffects: true,
              showBadges: true,
              showTeam: true,
              showSpending: true
            },
            profileBoosts: [],
            cosmetics: {
              border: [],
              color: [],
              font: [],
              emoji: [],
              title: [],
              background: [],
              effect: [],
              badge: [],
              theme: []
            },
            spendStreak: 5
          };
          
          dispatch({ type: 'AUTH_SUCCESS', payload: mockUser });
        } else {
          dispatch({ type: 'AUTH_FAIL' });
        }
      } catch (error) {
        console.error('Auth check error:', error);
        dispatch({ type: 'AUTH_FAIL', payload: 'Authentication failed' });
      }
    };
    
    checkAuth();
  }, []);
  
  // Login handler
  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      const response = await loginUser(email, password);
      
      if (response.success && response.user) {
        // Save token
        if (response.token) {
          localStorage.setItem('auth_token', response.token);
        }
        
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.user });
        return true;
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: response.error || 'Login failed' });
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed' });
      return false;
    }
  };
  
  // Alias for login to support alternative naming
  const signIn = login;
  
  // Register handler
  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'REGISTER_START' });
    
    try {
      const response = await registerUser(username, email, password);
      
      if (response.success && response.user) {
        // Save token if provided
        if (response.token) {
          localStorage.setItem('auth_token', response.token);
        }
        
        dispatch({ type: 'REGISTER_SUCCESS', payload: response.user });
        return true;
      } else {
        dispatch({ type: 'REGISTER_FAILURE', payload: response.error || 'Registration failed' });
        return false;
      }
    } catch (error) {
      console.error('Registration error:', error);
      dispatch({ type: 'REGISTER_FAILURE', payload: 'Registration failed' });
      return false;
    }
  };
  
  // Logout handler
  const logout = async (): Promise<void> => {
    localStorage.removeItem('auth_token');
    dispatch({ type: 'LOGOUT' });
  };
  
  // Alias for logout to support alternative naming
  const signOut = logout;
  
  // Update user handler
  const updateUser = async (updates: Partial<UserProfile>): Promise<boolean> => {
    try {
      if (!state.user) return false;
      
      // Ensure team is a valid TeamColor
      if (updates.team) {
        updates.team = toTeamColor(updates.team);
      }
      
      const updatedUser = {
        ...state.user,
        ...updates
      };
      
      // In a real app, this would call an API
      const response = await updateUserProfile(updatedUser);
      
      if (response.success) {
        dispatch({ type: 'UPDATE_USER', payload: updatedUser });
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Update user error:', error);
      return false;
    }
  };
  
  // Alias for updateUser to support alternative naming
  const updateUserProfile = updateUser;
  
  // Award cosmetic item to user
  const awardCosmetic = async (category: string, itemId: string, notify = true): Promise<boolean> => {
    try {
      if (!state.user) return false;
      
      // Get current cosmetics or initialize
      const currentCosmetics = state.user.cosmetics || {
        border: [],
        color: [],
        font: [],
        emoji: [],
        title: [],
        background: [],
        effect: [],
        badge: [],
        theme: []
      };
      
      // Determine which array to update
      const arrayKey = category as keyof typeof currentCosmetics;
      
      // Check if item already exists
      if (Array.isArray(currentCosmetics[arrayKey]) && (currentCosmetics[arrayKey] as string[]).includes(itemId)) {
        return false;
      }
      
      // Add item to appropriate array
      const updatedArray = Array.isArray(currentCosmetics[arrayKey]) 
        ? [...(currentCosmetics[arrayKey] as string[]), itemId]
        : [itemId];
      
      // Update cosmetics
      const updatedCosmetics = {
        ...currentCosmetics,
        [arrayKey]: updatedArray
      };
      
      // Update user
      return await updateUser({
        cosmetics: updatedCosmetics
      });
    } catch (error) {
      console.error('Award cosmetic error:', error);
      return false;
    }
  };
  
  const authContextValue: AuthContextType = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    login,
    signIn,
    register,
    logout,
    signOut,
    updateUser,
    updateUserProfile,
    awardCosmetic
  };
  
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

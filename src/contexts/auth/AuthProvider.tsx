
import React, { createContext, useReducer, useEffect } from 'react';
import { AuthContextType } from '@/types/auth-context';
import { UserProfile } from '@/types/user-consolidated';
import { authReducer, initialAuthState } from './authReducer';
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
            team: toTeamColor('gold'),
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'user@example.com' && password === 'password') {
        const mockUser: UserProfile = {
          id: '1',
          username: 'royal_user',
          displayName: 'Royal User',
          email: 'user@example.com',
          profileImage: '/assets/profile-image.png',
          bio: 'Loyal member of the Royal Court',
          joinedDate: new Date().toISOString(),
          team: toTeamColor('gold'),
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
        
        localStorage.setItem('auth_token', 'mock-token');
        dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser });
        return true;
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid credentials' });
        return false;
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed' });
      return false;
    }
  };
  
  // Register handler
  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'REGISTER_START' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful registration
      const mockUser: UserProfile = {
        id: '2',
        username,
        displayName: username,
        email,
        profileImage: '/assets/default-avatar.png',
        bio: '',
        joinedDate: new Date().toISOString(),
        team: toTeamColor('blue'), // Default team
        tier: 'basic',
        rank: 999,
        previousRank: 999,
        totalSpent: 0,
        amountSpent: 0,
        walletBalance: 0,
        settings: {
          profileVisibility: 'public',
          allowProfileLinks: true,
          theme: 'light',
          notifications: true,
          emailNotifications: true,
          marketingEmails: false,
          showRank: true,
          darkMode: false,
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
        spendStreak: 0
      };
      
      localStorage.setItem('auth_token', 'mock-token');
      dispatch({ type: 'REGISTER_SUCCESS', payload: mockUser });
      return true;
    } catch (error) {
      dispatch({ type: 'REGISTER_FAILURE', payload: 'Registration failed' });
      return false;
    }
  };
  
  // Logout handler
  const logout = async (): Promise<void> => {
    localStorage.removeItem('auth_token');
    dispatch({ type: 'LOGOUT' });
  };
  
  // Update user handler
  const updateUser = async (updates: Partial<UserProfile>): Promise<boolean> => {
    try {
      if (!state.user) return false;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const updatedUser = { ...state.user, ...updates };
      dispatch({ type: 'UPDATE_USER', payload: updatedUser });
      return true;
    } catch (error) {
      console.error('Update user error:', error);
      return false;
    }
  };
  
  // Award cosmetic handler
  const awardCosmetic = async (category: string, itemId: string, notify: boolean = true): Promise<boolean> => {
    try {
      if (!state.user) return false;
      
      const user = state.user;
      const cosmetics = user.cosmetics || {};
      
      // Check if the category exists in cosmetics
      if (!cosmetics[category]) {
        cosmetics[category] = [];
      }
      
      // Check if the item is already awarded
      const categoryItems = cosmetics[category] as string[];
      if (categoryItems.includes(itemId)) {
        return false;
      }
      
      // Add the item to the category
      const updatedCosmetics = {
        ...cosmetics,
        [category]: [...categoryItems, itemId]
      };
      
      const updatedUser = {
        ...user,
        cosmetics: updatedCosmetics
      };
      
      dispatch({ type: 'UPDATE_USER', payload: updatedUser });
      return true;
    } catch (error) {
      console.error('Award cosmetic error:', error);
      return false;
    }
  };
  
  // Define context value
  const contextValue: AuthContextType = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    login,
    signIn: login, // Alias for login
    register,
    logout,
    signOut: logout, // Alias for logout
    updateUser,
    updateUserProfile: updateUser, // Alias for updateUser
    awardCosmetic
  };
  
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

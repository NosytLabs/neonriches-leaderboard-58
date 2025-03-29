
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType, AuthProviderProps, UserProfile } from './types';
import { useToast } from '@/hooks/use-toast';
import generateMockUser from '@/utils/mockData';

// Create the context with default empty values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  logout: () => {},
  register: async () => false,
  updateUser: async () => false,
  updateUserProfile: async () => false,
  signIn: async () => false,
  signOut: () => {},
  awardCosmetic: async () => false
});

// AuthProvider component to wrap our app
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('auth-token');
      
      if (token) {
        try {
          // In a real app, we'd verify the token with the server
          // For now, just simulate an API call delay
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock user data
          const userData = localStorage.getItem('user-data');
          if (userData) {
            setUser(JSON.parse(userData));
          } else {
            const mockUser = generateMockUser();
            setUser(mockUser);
            localStorage.setItem('user-data', JSON.stringify(mockUser));
          }
        } catch (error) {
          console.error('Authentication error:', error);
          localStorage.removeItem('auth-token');
        }
      }
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // This is a mock login, in a real app we'd validate with a server
      const mockUser = generateMockUser();
      
      // Save auth token and user data
      localStorage.setItem('auth-token', 'mock-token-' + Date.now());
      localStorage.setItem('user-data', JSON.stringify(mockUser));
      
      setUser(mockUser);
      
      toast({
        title: 'Login Successful',
        description: 'Welcome back to SpendThrone!',
      });
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      
      toast({
        title: 'Login Failed',
        description: 'Invalid username or password.',
        variant: 'destructive',
      });
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-data');
    setUser(null);
    
    toast({
      title: 'Logged Out',
      description: 'You have been successfully logged out.',
    });
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create a new mock user
      const newUser: UserProfile = {
        id: 'user-' + Date.now(),
        username,
        displayName: username,
        email,
        profileImage: undefined,
        bio: '',
        totalSpent: 0,
        rank: 9999,
        tier: 'free',
        gender: 'neutral',
        joinedAt: new Date().toISOString(),
        team: 'none',
        previousRank: 9999,
        cosmetics: {
          badges: [],
          titles: [],
          borders: [],
          effects: [],
          emojis: []
        }
      };
      
      // Save auth token and user data
      localStorage.setItem('auth-token', 'mock-token-' + Date.now());
      localStorage.setItem('user-data', JSON.stringify(newUser));
      
      setUser(newUser);
      
      toast({
        title: 'Registration Successful',
        description: 'Welcome to SpendThrone!',
      });
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      
      toast({
        title: 'Registration Failed',
        description: 'Failed to create your account.',
        variant: 'destructive',
      });
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateUser = async (userData: Partial<UserProfile>): Promise<boolean> => {
    try {
      if (!user) return false;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Update user data
      const updatedUser = { ...user, ...userData };
      localStorage.setItem('user-data', JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      return true;
    } catch (error) {
      console.error('Update user error:', error);
      
      toast({
        title: 'Update Failed',
        description: 'Failed to update your profile.',
        variant: 'destructive',
      });
      
      return false;
    }
  };

  // Alias for updateUser for backward compatibility
  const updateUserProfile = updateUser;
  // Alias for login for backward compatibility
  const signIn = login;
  // Alias for logout for backward compatibility
  const signOut = logout;

  // Award a cosmetic item to the user
  const awardCosmetic = async (
    category: string, 
    itemId: string, 
    notify: boolean = true
  ): Promise<boolean> => {
    try {
      if (!user) return false;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Update cosmetics
      const cosmetics = { ...(user.cosmetics || {}) };
      
      // Ensure each category exists in cosmetics
      if (!cosmetics.badges) cosmetics.badges = [];
      if (!cosmetics.titles) cosmetics.titles = [];
      if (!cosmetics.borders) cosmetics.borders = [];
      if (!cosmetics.effects) cosmetics.effects = [];
      if (!cosmetics.emojis) cosmetics.emojis = [];
      
      const categoryItems = cosmetics[category as keyof typeof cosmetics] || [];
      
      if (Array.isArray(categoryItems)) {
        if (!categoryItems.includes(itemId)) {
          const updatedCategory = [...categoryItems, itemId];
          cosmetics[category as keyof typeof cosmetics] = updatedCategory;
          
          // Update user
          const updatedUser = { ...user, cosmetics };
          localStorage.setItem('user-data', JSON.stringify(updatedUser));
          setUser(updatedUser);
          
          if (notify) {
            toast({
              title: 'Reward Unlocked!',
              description: `You've unlocked a new ${category} item!`,
            });
          }
          
          return true;
        }
      }
      
      return false;
    } catch (error) {
      console.error('Award cosmetic error:', error);
      return false;
    }
  };

  // Create the value object for the context
  const contextValue: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    register,
    updateUser,
    updateUserProfile,
    signIn,
    signOut,
    awardCosmetic
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

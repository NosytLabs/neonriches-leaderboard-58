
import React, { createContext, useState, useEffect, useContext } from 'react';
import { User, UserTier, UserTeam, SocialLink } from '@/types/user';
import { generateMockUser } from '@/utils/mockData';
import { useToast } from '@/hooks/use-toast';
import { CosmeticItem, CosmeticRarity } from '@/types/cosmetics';

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, username: string, password: string) => Promise<boolean>;
  loginWithWallet: (walletAddress: string) => Promise<boolean>;
  signOut: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  updateUserProfile: (updatedUser: User) => Promise<boolean>;
  awardCosmetic: (itemId: string, category: string, rarity: CosmeticRarity, source: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  login: async () => false,
  signup: async () => false,
  loginWithWallet: async () => false,
  signOut: () => {},
  openAuthModal: () => {},
  closeAuthModal: () => {},
  updateUserProfile: async () => false,
  awardCosmetic: async () => false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('spendthrone_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('spendthrone_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call delay
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would validate credentials against a backend
      // For demo purposes, we'll create a mock user
      const mockUser = generateMockUser({
        email,
        username: email.split('@')[0],
      });
      
      setUser(mockUser);
      localStorage.setItem('spendthrone_user', JSON.stringify(mockUser));
      setIsAuthModalOpen(false);
      
      toast({
        title: "Login Successful",
        description: "Welcome to SpendThrone, your royal journey begins!",
      });
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, username: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call delay
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a new user
      const newUser = generateMockUser({
        email,
        username,
      });
      
      setUser(newUser);
      localStorage.setItem('spendthrone_user', JSON.stringify(newUser));
      setIsAuthModalOpen(false);
      
      toast({
        title: "Welcome to SpendThrone!",
        description: "Your royal account has been created.",
      });
      
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Signup Failed",
        description: "Could not create your account. Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithWallet = async (walletAddress: string): Promise<boolean> => {
    try {
      // Simulate API call delay
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a wallet-based user
      const walletUser = generateMockUser({
        username: `royal_${walletAddress.substring(0, 4)}`,
        walletAddress,
      });
      
      setUser(walletUser);
      localStorage.setItem('spendthrone_user', JSON.stringify(walletUser));
      setIsAuthModalOpen(false);
      
      toast({
        title: "Wallet Connected",
        description: "You've been logged in with your wallet.",
      });
      
      return true;
    } catch (error) {
      console.error('Wallet login error:', error);
      toast({
        title: "Wallet Login Failed",
        description: "Could not authenticate with wallet. Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('spendthrone_user');
    toast({
      title: "Signed Out",
      description: "Your royal session has ended.",
    });
  };

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const updateUserProfile = async (updatedUser: User): Promise<boolean> => {
    try {
      // In a real app, you would send the update to a backend
      setUser(updatedUser);
      localStorage.setItem('spendthrone_user', JSON.stringify(updatedUser));
      return true;
    } catch (error) {
      console.error('Profile update error:', error);
      toast({
        title: "Update Failed",
        description: "Could not update your profile. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const awardCosmetic = async (itemId: string, category: string, rarity: CosmeticRarity, source: string): Promise<boolean> => {
    if (!user) return false;
    
    try {
      // In a real app, this would be a backend call
      const updatedCosmetics = { ...user.cosmetics } || {
        borders: [],
        colors: [],
        fonts: [],
        emojis: [],
        titles: [],
        backgrounds: [],
        effects: [],
        badges: [],
        themes: [],
      };
      
      // Add the new cosmetic to the appropriate category if it doesn't already exist
      const categoryItems = updatedCosmetics[category as keyof typeof updatedCosmetics] as string[] || [];
      
      if (!categoryItems.includes(itemId)) {
        updatedCosmetics[category as keyof typeof updatedCosmetics] = [...categoryItems, itemId] as any;
        
        const updatedUser = {
          ...user,
          cosmetics: updatedCosmetics
        };
        
        setUser(updatedUser);
        localStorage.setItem('spendthrone_user', JSON.stringify(updatedUser));
        
        toast({
          title: "New Item Acquired!",
          description: `You've received a new ${rarity} ${category} item!`,
        });
        
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Award cosmetic error:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        signup,
        loginWithWallet,
        signOut,
        openAuthModal,
        closeAuthModal,
        updateUserProfile,
        awardCosmetic,
      }}
    >
      {children}
      {/* Auth Modal would be rendered here if isAuthModalOpen is true */}
    </AuthContext.Provider>
  );
};

export default AuthContext;

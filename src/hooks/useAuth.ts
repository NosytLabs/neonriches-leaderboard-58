
import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  profileImage?: string;
  bio?: string;
  rank?: number;
  tier?: 'basic' | 'premium' | 'royal';
  profileViews?: number;
  followers?: any[];
  links?: any[];
  settings?: any;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock user data for development
    setTimeout(() => {
      setUser({
        id: '1',
        email: 'user@example.com',
        rank: 42,
        tier: 'premium',
        profileViews: 1247,
        followers: [],
        links: []
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  return { user, isLoading };
};

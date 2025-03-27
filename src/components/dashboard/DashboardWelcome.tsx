
import React, { useEffect } from 'react';
import { toast } from "@/hooks/use-toast";
import { UserProfile } from '@/contexts/AuthContext';

export function useDashboardWelcome(user: UserProfile | null) {
  const [showRoyalWelcome, setShowRoyalWelcome] = React.useState(false);

  useEffect(() => {
    // Display a grand royal welcome after a short delay
    const timer = setTimeout(() => {
      setShowRoyalWelcome(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showRoyalWelcome && user) {
      const genderTitle = user.gender === 'king' ? 'King' : user.gender === 'queen' ? 'Queen' : 'Noble Jester';
      
      toast({
        title: `Royal Presence Detected`,
        description: `Welcome back to your kingdom, ${genderTitle} ${user.username}. Your coffers await your generosity!`,
        duration: 5000,
      });
    }
  }, [showRoyalWelcome, user]);

  return showRoyalWelcome;
}

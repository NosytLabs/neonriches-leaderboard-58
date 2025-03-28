
import React, { useEffect } from 'react';
import { useToastContext } from '@/contexts/ToastContext';
import { UserProfile } from '@/contexts/AuthContext';

interface DashboardWelcomeProps {
  user: UserProfile | null;
}

export const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({ user }) => {
  const [showRoyalWelcome, setShowRoyalWelcome] = React.useState(false);
  const { addToast } = useToastContext();

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
      
      addToast({
        title: `Royal Presence Detected`,
        description: `Welcome back to your kingdom, ${genderTitle} ${user.username}. Your coffers await your generosity!`,
        duration: 5000,
      });
    }
  }, [showRoyalWelcome, user, addToast]);

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-royal royal-gradient mb-2">Welcome, {user?.username || 'Noble Visitor'}</h2>
      <p className="text-white/70 italic">
        Your royal treasury awaits your generous contributions. How much will you spend to climb the ranks today?
      </p>
    </div>
  );
};

// For backward compatibility, also export the hook
export function useDashboardWelcome(user: UserProfile | null) {
  const [showRoyalWelcome, setShowRoyalWelcome] = React.useState(false);
  const { addToast } = useToastContext();

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
      
      addToast({
        title: `Royal Presence Detected`,
        description: `Welcome back to your kingdom, ${genderTitle} ${user.username}. Your coffers await your generosity!`,
        duration: 5000,
      });
    }
  }, [showRoyalWelcome, user, addToast]);

  return showRoyalWelcome;
}

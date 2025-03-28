
import { useState, useCallback, useEffect } from 'react';
import { useToastContext } from '@/contexts/ToastContext';

// Unified mockery action type that includes both shame and mockery actions
export type MockeryAction = 
  // Basic shame options
  | 'tomatoes' 
  | 'eggs' 
  | 'stocks' 
  // Original mockery options
  | 'jester' 
  | 'dunce' 
  | 'roast' 
  | 'ridicule' 
  | 'taunt'
  // New royal-themed options
  | 'courtJester'
  | 'dethroned'
  | 'royalFool'
  // New medieval punishment options
  | 'pillory'
  | 'dunkingChair'
  | 'tarAndFeathers'
  // Modern mockery options
  | 'memeGenerator'
  | 'socialRoast'
  | 'royalDecreeOfShame';

// Mockery tier types for pricing and effect differentiation
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface MockeryEffect {
  type: MockeryAction;
  tier: MockeryTier;
  duration: number; // in hours
  price: number;
  discountPercentage?: number;
  visualEffect: string;
  description: string;
  emoji: string;
}

interface UseMockeryProps {
  onSuccess?: (targetId: number, targetName: string, mockeryType: MockeryAction) => void;
  cooldownPeriod?: number; // in milliseconds
}

export const useMockery = ({ 
  onSuccess,
  cooldownPeriod = 60000 * 60 * 24 // 24 hours default cooldown
}: UseMockeryProps = {}) => {
  const { addToast } = useToastContext();
  const [mockeryCooldown, setMockeryCooldown] = useState<Record<number, boolean>>({});
  const [mockeryEffects, setMockeryEffects] = useState<Record<number, MockeryAction | null>>({});
  const [mockeryCount, setMockeryCount] = useState<Record<number, number>>({});
  const [protectedUsers, setProtectedUsers] = useState<number[]>([]);
  const [purchaseHistory, setPurchaseHistory] = useState<any[]>([]);
  
  // Load mockery data from localStorage on component mount
  useEffect(() => {
    // Load protected users
    try {
      const storedProtectedUsers = localStorage.getItem('mockery_protected_users');
      if (storedProtectedUsers) {
        const protectedData = JSON.parse(storedProtectedUsers);
        
        // Filter out expired protections
        const now = Date.now();
        const validProtections = protectedData.filter((item: {id: number, until: number}) => {
          return item.until > now;
        });
        
        setProtectedUsers(validProtections.map((item: {id: number}) => item.id));
        
        // Update localStorage with only valid protections
        localStorage.setItem('mockery_protected_users', JSON.stringify(validProtections));
      }
    } catch (error) {
      console.error('Error loading mockery protection data:', error);
    }
    
    // Load active mockery effects
    const activeEffects: Record<number, MockeryAction | null> = {};
    const mockeryCooldowns: Record<number, boolean> = {};
    
    // Load purchase history
    try {
      const storedHistory = localStorage.getItem('mockery_purchase_history');
      if (storedHistory) {
        setPurchaseHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error('Error loading mockery purchase history:', error);
    }
    
    // Iterate through localStorage to find mockery data
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('lastMockery_')) {
        const userId = parseInt(key.replace('lastMockery_', ''));
        const lastTime = parseInt(localStorage.getItem(key) || '0');
        const effectType = localStorage.getItem(`mockeryType_${userId}`);
        const hoursSinceLast = (Date.now() - lastTime) / (60 * 60 * 1000);
        
        if (hoursSinceLast < 24) {
          mockeryCooldowns[userId] = true;
          if (effectType && isValidMockeryAction(effectType)) {
            activeEffects[userId] = effectType as MockeryAction;
          }
          
          // Set timeout to clear cooldown
          setTimeout(() => {
            setMockeryCooldown(prev => ({
              ...prev,
              [userId]: false
            }));
            setMockeryEffects(prev => ({
              ...prev,
              [userId]: null
            }));
            localStorage.removeItem(`mockeryType_${userId}`);
          }, (24 - hoursSinceLast) * 60 * 60 * 1000);
        } else {
          // Clean up expired mockery data
          localStorage.removeItem(key);
          localStorage.removeItem(`mockeryType_${userId}`);
        }
      }
    }
    
    setMockeryEffects(activeEffects);
    setMockeryCooldown(mockeryCooldowns);
  }, []);
  
  // Helper function to check if a string is a valid MockeryAction
  const isValidMockeryAction = (value: string): value is MockeryAction => {
    return [
      'tomatoes', 'eggs', 'stocks', 'jester', 'dunce', 'roast', 'ridicule', 'taunt',
      'courtJester', 'dethroned', 'royalFool', 'pillory', 'dunkingChair', 'tarAndFeathers',
      'memeGenerator', 'socialRoast', 'royalDecreeOfShame'
    ].includes(value);
  };
  
  // Show mockery effects for a short time to display animation
  const triggerMockeryEffect = useCallback((targetId: number, mockeryType: MockeryAction) => {
    setMockeryEffects(prev => ({ ...prev, [targetId]: mockeryType }));
    
    // Save the mockery type to localStorage
    localStorage.setItem(`mockeryType_${targetId}`, mockeryType);
    
    // Update mockery count
    setMockeryCount(prev => ({
      ...prev,
      [targetId]: (prev[targetId] || 0) + 1
    }));
    
    // Store mockery count in localStorage for persistence
    const userMockeryKey = `user_mockery_count_${targetId}`;
    const currentCount = parseInt(localStorage.getItem(userMockeryKey) || '0');
    localStorage.setItem(userMockeryKey, (currentCount + 1).toString());
  }, []);

  // Create floating particles effect based on mockery type
  const createMockeryParticles = useCallback((targetId: number, mockeryType: MockeryAction) => {
    const targetElement = document.getElementById(`user-card-${targetId}`);
    if (!targetElement) return;
    
    const getEmojis = (type: MockeryAction) => {
      switch(type) {
        // Basic shame options
        case 'tomatoes': return ['🍅', '🍎', '🥫', '💥'];
        case 'eggs': return ['🥚', '🍳', '🧀', '🦴'];
        case 'stocks': return ['🪵', '⛓️', '🔒', '📜'];
        
        // Original mockery options
        case 'jester': return ['🃏', '🎭', '🎪', '🎯'];
        case 'dunce': return ['🎓', '📚', '🤦', '❓'];
        case 'roast': return ['🔥', '🧨', '💯', '🔪'];
        case 'ridicule': return ['😂', '🤣', '😆', '😜'];
        case 'taunt': return ['🗯️', '💭', '👎', '😤'];
        
        // New royal-themed options
        case 'courtJester': return ['🃏', '👑', '🎭', '🎪'];
        case 'dethroned': return ['👑', '💔', '😢', '👋'];
        case 'royalFool': return ['🤡', '👑', '🎭', '🎪'];
        
        // New medieval punishment options
        case 'pillory': return ['🪵', '😵', '🔒', '😱'];
        case 'dunkingChair': return ['💺', '💦', '🌊', '😱'];
        case 'tarAndFeathers': return ['🪶', '🖤', '😵', '💩'];
        
        // Modern mockery options
        case 'memeGenerator': return ['🤣', '📱', '💬', '🎬'];
        case 'socialRoast': return ['🔥', '📱', '💬', '😂'];
        case 'royalDecreeOfShame': return ['📜', '👑', '😱', '❌'];
        
        default: return ['😂', '🤣', '🎭', '🃏'];
      }
    };
    
    const emojis = getEmojis(mockeryType);
    
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      particle.classList.add('floating-mockery-particle', 'absolute', 'text-xl', 'pointer-events-none', 'z-10');
      
      // Random position around the target user card
      const rect = targetElement.getBoundingClientRect();
      const randomX = Math.random() * rect.width;
      const randomY = rect.height / 2;
      
      particle.style.left = `${randomX}px`;
      particle.style.top = `${randomY}px`;
      
      targetElement.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (targetElement.contains(particle)) {
          targetElement.removeChild(particle);
        }
      }, 5000);
    }
  }, []);

  // Get mockery count for a user
  const getMockeryCount = useCallback((targetId: number) => {
    const userMockeryKey = `user_mockery_count_${targetId}`;
    return parseInt(localStorage.getItem(userMockeryKey) || '0');
  }, []);

  // Check if a user is protected from mockery
  const isUserProtected = useCallback((targetId: number) => {
    return protectedUsers.includes(targetId);
  }, [protectedUsers]);

  // Add mockery protection to a user
  const addMockeryProtection = useCallback((targetId: number, durationHours: number = 24) => {
    // Add user to protected list
    setProtectedUsers(prev => {
      if (!prev.includes(targetId)) {
        return [...prev, targetId];
      }
      return prev;
    });
    
    // Store protection in localStorage with expiration
    try {
      const storedProtectedUsers = localStorage.getItem('mockery_protected_users');
      const protectedData = storedProtectedUsers ? JSON.parse(storedProtectedUsers) : [];
      
      // Remove any existing protection for this user
      const filteredData = protectedData.filter((item: {id: number}) => item.id !== targetId);
      
      // Add new protection with expiration
      const now = Date.now();
      const until = now + (durationHours * 60 * 60 * 1000);
      
      filteredData.push({ id: targetId, until });
      
      localStorage.setItem('mockery_protected_users', JSON.stringify(filteredData));
      
      addToast({
        title: "Royal Protection Acquired",
        description: `You are now protected from mockery for ${durationHours} hours.`,
      });
      
      // Set timeout to remove protection when expired
      setTimeout(() => {
        setProtectedUsers(prev => prev.filter(id => id !== targetId));
      }, durationHours * 60 * 60 * 1000);
      
      return true;
    } catch (error) {
      console.error('Error storing mockery protection:', error);
      return false;
    }
  }, [addToast]);

  // Record a purchase in the history
  const recordPurchase = useCallback((purchase: {
    targetId: number, 
    targetName: string, 
    actionType: MockeryAction,
    price: number,
    timestamp: number,
    purchaserId?: number
  }) => {
    setPurchaseHistory(prev => {
      const newHistory = [...prev, purchase];
      try {
        localStorage.setItem('mockery_purchase_history', JSON.stringify(newHistory));
      } catch (error) {
        console.error('Error saving mockery purchase history:', error);
      }
      return newHistory;
    });
  }, []);

  // Handle the mockery action
  const handleMockery = useCallback((
    targetId: number, 
    targetName: string, 
    mockeryType: MockeryAction, 
    price: number,
    purchaserId?: number
  ) => {
    // Check if user is protected
    if (isUserProtected(targetId)) {
      addToast({
        title: "Royal Protection Active",
        description: `${targetName} is currently protected from mockery by royal decree.`,
        variant: "destructive"
      });
      return false;
    }
    
    // Check cooldown
    if (mockeryCooldown[targetId]) {
      addToast({
        title: "Cooldown Active",
        description: `You've recently mocked ${targetName}. The royal mockery tools are still being prepared for next use.`,
        variant: "destructive"
      });
      return false;
    }
    
    // In a real app, this would call an API endpoint
    const messages: Record<MockeryAction, string> = {
      // Basic shame options
      'tomatoes': `You've pelted ${targetName} with rotten tomatoes! The mockery is visible to all.`,
      'eggs': `You've hurled rotten eggs at ${targetName}! What a stench they'll have for 24 hours.`,
      'stocks': `You've placed ${targetName} in the public stocks! The whole kingdom will mock them for 24 hours.`,
      
      // Original mockery options
      'jester': `You've crowned ${targetName} as the kingdom's jester! Their foolishness is on display for 24 hours.`,
      'dunce': `You've awarded ${targetName} the dunce cap! Their royal ignorance is now public for 24 hours.`,
      'roast': `You've roasted ${targetName} royally! They're feeling the burn of mockery for 24 hours.`,
      'ridicule': `You've publicly ridiculed ${targetName}! The kingdom laughs at their expense for 24 hours.`,
      'taunt': `You've taunted ${targetName} with medieval flair! They'll be haunted by your mockery for 24 hours.`,
      
      // New royal-themed options
      'courtJester': `You've appointed ${targetName} as the Court Jester! They must entertain the kingdom for 24 hours.`,
      'dethroned': `You've dethroned ${targetName} from their position! A public fall from grace for all to see.`,
      'royalFool': `You've declared ${targetName} the Royal Fool! Their foolishness is now legendary.`,
      
      // New medieval punishment options
      'pillory': `You've locked ${targetName} in the pillory! Citizens may mock them freely for 24 hours.`,
      'dunkingChair': `You've sentenced ${targetName} to the dunking chair! They'll be soaked in shame for 24 hours.`,
      'tarAndFeathers': `You've tarred and feathered ${targetName}! A truly humiliating spectacle for 24 hours.`,
      
      // Modern mockery options
      'memeGenerator': `You've turned ${targetName} into a royal meme! Their embarrassment will be shared far and wide.`,
      'socialRoast': `You've initiated a royal roast of ${targetName}! The entire kingdom joins in the mockery.`,
      'royalDecreeOfShame': `You've issued a Royal Decree of Shame against ${targetName}! Their disgrace is now official.`
    };
    
    addToast({
      title: "Royal Mockery Successful!",
      description: messages[mockeryType],
    });
    
    // Trigger visual effects
    triggerMockeryEffect(targetId, mockeryType);
    createMockeryParticles(targetId, mockeryType);
    
    // Set cooldown
    setMockeryCooldown(prev => ({
      ...prev,
      [targetId]: true
    }));
    
    // Store last mockery time in localStorage
    localStorage.setItem(`lastMockery_${targetId}`, Date.now().toString());
    
    // Record the purchase
    recordPurchase({
      targetId,
      targetName,
      actionType: mockeryType,
      price,
      timestamp: Date.now(),
      purchaserId
    });
    
    // Clear cooldown after specified period
    setTimeout(() => {
      setMockeryCooldown(prevState => ({
        ...prevState,
        [targetId]: false
      }));
      
      setMockeryEffects(prev => ({
        ...prev,
        [targetId]: null
      }));
      
      localStorage.removeItem(`mockeryType_${targetId}`);
    }, cooldownPeriod);
    
    // Call onSuccess callback if provided
    if (onSuccess) {
      onSuccess(targetId, targetName, mockeryType);
    }
    
    return true;
  }, [mockeryCooldown, isUserProtected, addToast, triggerMockeryEffect, createMockeryParticles, recordPurchase, cooldownPeriod, onSuccess]);

  // Get purchase history for a specific user
  const getUserPurchaseHistory = useCallback((userId: number) => {
    return purchaseHistory.filter(p => p.purchaserId === userId);
  }, [purchaseHistory]);

  // Get mockery history for a specific target
  const getTargetMockeryHistory = useCallback((targetId: number) => {
    return purchaseHistory.filter(p => p.targetId === targetId);
  }, [purchaseHistory]);

  // Get most mocked users
  const getMostMockedUsers = useCallback((limit: number = 10) => {
    const userCounts: Record<number, { count: number, name: string }> = {};
    
    purchaseHistory.forEach(p => {
      if (!userCounts[p.targetId]) {
        userCounts[p.targetId] = { count: 0, name: p.targetName };
      }
      userCounts[p.targetId].count += 1;
    });
    
    return Object.entries(userCounts)
      .map(([id, data]) => ({ id: parseInt(id), count: data.count, name: data.name }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  }, [purchaseHistory]);

  return {
    mockeryCooldown,
    mockeryEffects,
    mockeryCount,
    purchaseHistory,
    getMockeryCount,
    handleMockery,
    isUserProtected,
    addMockeryProtection,
    getUserPurchaseHistory,
    getTargetMockeryHistory,
    getMostMockedUsers
  };
};

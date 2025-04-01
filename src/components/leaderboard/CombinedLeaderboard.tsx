
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserCircle, Users, TrendingUp, Medal, Crown, Trophy, Coins } from "lucide-react";
import LeaderboardList from "./components/LeaderboardList";
import { UserProfile } from '@/types/user-consolidated';
import { useAuth } from '@/hooks/useAuth';
import { useSound } from '@/hooks/use-sound';
import { MockeryAction } from '@/types/mockery-types';
import { ensureNumber } from '@/utils/stringUtils';

interface CombinedLeaderboardProps {
  maxVisible?: number;
  showFilters?: boolean;
  showTabs?: boolean;
  compact?: boolean;
  hideOnMobile?: boolean;
  currentUserId?: string;
  className?: string;
  initialTab?: string;
}

const CombinedLeaderboard: React.FC<CombinedLeaderboardProps> = ({
  maxVisible = 10,
  showFilters = true,
  showTabs = true,
  compact = false,
  hideOnMobile = false,
  currentUserId = '',
  className = '',
  initialTab = 'all'
}) => {
  const { user } = useAuth();
  const sound = useSound();
  const [leaderboardData, setLeaderboardData] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedLeaderboard, setSelectedLeaderboard] = useState<string>('weekly');
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [shameAction, setShameAction] = useState<MockeryAction>('tomatoes');
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [visibleCount, setVisibleCount] = useState<number>(maxVisible);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      setLoading(true);
      
      try {
        // In a real app, this would fetch from an API
        setTimeout(() => {
          const mockData: UserProfile[] = Array.from({ length: 10 }).map((_, index) => ({
            id: `user-${index + 1}`,
            username: `noble${index + 1}`,
            displayName: `Noble User ${index + 1}`,
            profileImage: `https://source.unsplash.com/random/?portrait&${index}`,
            tier: index < 3 ? 'royal' : index < 6 ? 'premium' : 'basic',
            team: ['red', 'blue', 'green', 'gold', 'purple'][index % 5],
            rank: index + 1,
            totalSpent: Math.floor(10000 / (index + 1)), 
            amountSpent: Math.floor(10000 / (index + 1)), // Adding amountSpent to match UserProfile type
            previousRank: ensureNumber(Math.floor(Math.random() * 20)),
            joinedDate: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
            isVerified: index < 3,
            walletBalance: Math.floor(Math.random() * 1000),
            spendStreak: index < 5 ? index + 1 : 0
          }));
          
          setLeaderboardData(mockData);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        setLoading(false);
      }
    };
    
    fetchLeaderboardData();
  }, [selectedLeaderboard]);
  
  const handleLeaderboardChange = (value: string) => {
    sound.playSound('click');
    setSelectedLeaderboard(value);
  };
  
  const handleProfileClick = (userId: string, username: string) => {
    console.log(`Clicked on user profile: ${username} (${userId})`);
    // Could navigate to profile page or show profile modal
  };
  
  const handleShameUser = (user: UserProfile) => {
    setSelectedUser(user);
    setShowModal(true);
    sound.playSound('notification');
  };
  
  const handleConfirmShame = (userId: string) => {
    setShowModal(false);
    sound.playSound('mockery');
    console.log(`Applied ${shameAction} to user ${userId}`);
    // In a real app, this would call an API to apply the shame effect
  };
  
  const sortLeaderboardData = () => {
    // Sort by total spent, highest first
    return [...leaderboardData].sort((a, b) => b.totalSpent - a.totalSpent);
  };
  
  const loadMoreUsers = (count: number = 10) => {
    setVisibleCount(prevCount => prevCount + count);
  };

  return (
    <div className={`${className} ${hideOnMobile ? 'hidden md:block' : ''}`}>
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="h-5 w-5 mr-2 text-royal-gold" />
            Royal Leaderboard
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            {showTabs && (
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all" className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  All
                </TabsTrigger>
                <TabsTrigger value="trending" className="flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4" />
                  Trending
                </TabsTrigger>
                <TabsTrigger value="top" className="flex items-center gap-1.5">
                  <Medal className="h-4 w-4" />
                  Top Rank
                </TabsTrigger>
                <TabsTrigger value="royal" className="flex items-center gap-1.5">
                  <Crown className="h-4 w-4" />
                  Royal
                </TabsTrigger>
              </TabsList>
            )}
            
            <TabsContent value="all">
              <LeaderboardList 
                users={sortLeaderboardData()}
                loading={loading}
                currentUserId={user?.id || ''}
                onProfileClick={handleProfileClick}
                onShameUser={handleShameUser}
              />
            </TabsContent>
            
            <TabsContent value="trending">
              <LeaderboardList 
                users={sortLeaderboardData()}
                loading={loading}
                currentUserId={user?.id || ''}
                onProfileClick={handleProfileClick}
                onShameUser={handleShameUser}
              />
            </TabsContent>
            
            <TabsContent value="top">
              <LeaderboardList 
                users={sortLeaderboardData()}
                loading={loading}
                currentUserId={user?.id || ''}
                onProfileClick={handleProfileClick}
                onShameUser={handleShameUser}
              />
            </TabsContent>
            
            <TabsContent value="royal">
              <LeaderboardList 
                users={sortLeaderboardData()}
                loading={loading}
                currentUserId={user?.id || ''}
                onProfileClick={handleProfileClick}
                onShameUser={handleShameUser}
              />
            </TabsContent>
          </Tabs>
          
          <div className="mt-4 flex justify-center">
            <Button variant="outline" className="glass-morphism border-white/10">
              <Coins className="h-4 w-4 mr-2" />
              View Full Leaderboard
            </Button>
          </div>
        </CardContent>
        
        {selectedUser && (
          <ShameModalWrapper 
            showModal={showModal}
            selectedUser={selectedUser}
            shameAction={shameAction}
            onOpenChange={setShowModal}
            onConfirm={handleConfirmShame}
          />
        )}
      </Card>
    </div>
  );
};

// Placeholder for ShameModalWrapper until we implement it
const ShameModalWrapper: React.FC<any> = ({ showModal, selectedUser, shameAction, onOpenChange, onConfirm }) => {
  return null;
};

export default CombinedLeaderboard;

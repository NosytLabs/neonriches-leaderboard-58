
import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import useAuth from '@/hooks/useAuth';
import useUser from '@/hooks/useUser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, Trophy, Feather } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { getTierTextClass } from '@/utils/authUtils';

const ProfilePage: React.FC = () => {
  const { username } = useParams();
  const { user: currentUser } = useAuth();
  const { userProfile, isLoading, isOwnProfile } = useUser(username);
  
  const user = username ? userProfile : currentUser;
  const isMyProfile = isOwnProfile || !username;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            <ProfileSkeleton />
          ) : user ? (
            <>
              <Card className="glass-morphism border-white/10 mb-8">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <Avatar className="w-24 h-24 border-4 border-white/10">
                      <AvatarImage src={user.profileImage} alt={user.username} />
                      <AvatarFallback className="text-2xl">
                        {user.displayName.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold">{user.displayName}</h1>
                        <span className={`text-sm ${getTierTextClass(user.tier)}`}>
                          {user.tier.charAt(0).toUpperCase() + user.tier.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">@{user.username}</p>
                      
                      {isMyProfile && (
                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            Edit Profile
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">Rank #{user.rank}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium capitalize">
                          Team {user.team === 'none' ? 'Neutral' : user.team}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Bio</h3>
                    <p className="text-muted-foreground">
                      {user.bio || "This user hasn't added a bio yet."}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-black/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Total Spent</h3>
                        <Feather className="h-4 w-4 text-royal-gold" />
                      </div>
                      <p className="text-2xl font-bold">
                        ${user.totalSpent.toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="bg-black/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Joined</h3>
                      </div>
                      <p className="text-2xl font-bold">
                        {new Date(user.joinedDate).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="bg-black/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Streak</h3>
                      </div>
                      <p className="text-2xl font-bold">
                        {user.spendStreak} days
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Placeholder for achievements section */}
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No achievements unlocked yet.
                  </p>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>User Not Found</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The requested profile could not be found.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

const ProfileSkeleton = () => (
  <Card className="glass-morphism border-white/10">
    <CardHeader>
      <div className="flex items-center gap-4">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </CardContent>
  </Card>
);

export default ProfilePage;

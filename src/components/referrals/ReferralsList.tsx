
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/hooks/useAuth';
import { formatDate, formatCurrency } from '@/utils/formatters';
import { Badge } from '@/components/ui/badge';

interface Referral {
  id: string;
  referredUser: {
    id: string;
    username: string;
    profileImage?: string;
  };
  status: 'pending' | 'complete' | 'expired';
  date: string;
  reward?: number;
}

const ReferralsList = () => {
  const { user } = useAuth();
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReferrals = async () => {
      setIsLoading(true);
      
      try {
        // Mock data instead of using Supabase
        const mockReferrals: Referral[] = [
          {
            id: '1',
            referredUser: {
              id: 'user1',
              username: 'LoyalSubject',
              profileImage: '/placeholder-avatar.jpg'
            },
            status: 'complete',
            date: '2023-09-15T12:00:00Z',
            reward: 250
          },
          {
            id: '2',
            referredUser: {
              id: 'user2',
              username: 'RoyalEnthusiast',
              profileImage: '/placeholder-avatar.jpg'
            },
            status: 'complete',
            date: '2023-09-10T16:30:00Z',
            reward: 250
          },
          {
            id: '3',
            referredUser: {
              id: 'user3',
              username: 'ThroneSeeking',
              profileImage: '/placeholder-avatar.jpg'
            },
            status: 'pending',
            date: '2023-09-05T09:15:00Z'
          },
          {
            id: '4',
            referredUser: {
              id: 'user4',
              username: 'KingdomExplorer',
              profileImage: '/placeholder-avatar.jpg'
            },
            status: 'expired',
            date: '2023-08-20T14:45:00Z'
          }
        ];
        
        setReferrals(mockReferrals);
      } catch (error) {
        console.error('Error fetching referrals:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchReferrals();
    }
  }, [user]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'complete':
        return <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/30">Complete</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 border-yellow-500/30">Pending</Badge>;
      case 'expired':
        return <Badge className="bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 border-gray-500/30">Expired</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  if (!user) {
    return (
      <Card>
        <CardContent className="py-10 text-center">
          <p className="text-muted-foreground">Sign in to view your referrals</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Referrals</CardTitle>
        <CardDescription>
          Track the status of people you've invited to SpendThrone
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="py-8 text-center">
            <p className="text-muted-foreground">Loading referrals...</p>
          </div>
        ) : referrals.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Reward</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referrals.map((referral) => (
                <TableRow key={referral.id}>
                  <TableCell className="font-medium">
                    {referral.referredUser.username}
                  </TableCell>
                  <TableCell>{formatDate(referral.date)}</TableCell>
                  <TableCell>{getStatusBadge(referral.status)}</TableCell>
                  <TableCell className="text-right">
                    {referral.reward ? formatCurrency(referral.reward) : '—'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="py-8 text-center">
            <p className="text-muted-foreground mb-4">You haven't referred anyone yet.</p>
            <p className="text-sm">Share your referral code with friends to earn rewards!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReferralsList;

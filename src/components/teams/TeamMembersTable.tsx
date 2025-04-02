
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TeamColor } from '@/types/team';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface TeamMember {
  id: string;
  name: string;
  rank: number;
  joinDate: string;
  avatar: string;
  contribution: number;
}

interface TeamMembersTableProps {
  team: TeamColor;
}

const TeamMembersTable: React.FC<TeamMembersTableProps> = ({ team }) => {
  // Mock data for team members
  const mockMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Alice Kingdom',
      rank: 1,
      joinDate: '2023-04-15',
      avatar: '',
      contribution: 15000
    },
    {
      id: '2',
      name: 'Bob Royale',
      rank: 2,
      joinDate: '2023-05-20',
      avatar: '',
      contribution: 12500
    },
    {
      id: '3',
      name: 'Charlie Noble',
      rank: 3,
      joinDate: '2023-03-10',
      avatar: '',
      contribution: 10800
    },
    {
      id: '4',
      name: 'Diana Duchess',
      rank: 4,
      joinDate: '2023-06-01',
      avatar: '',
      contribution: 9250
    },
    {
      id: '5',
      name: 'Edward Earl',
      rank: 5,
      joinDate: '2023-02-28',
      avatar: '',
      contribution: 8400
    }
  ];

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Member</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead className="text-right">Contribution</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockMembers.map((member) => (
            <TableRow key={member.id}>
              <TableCell>
                <Badge variant="outline">{member.rank}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className={`bg-${team}-500/20 text-${team}-500`}>
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{member.name}</span>
                </div>
              </TableCell>
              <TableCell>{formatDate(member.joinDate)}</TableCell>
              <TableCell className="text-right font-medium">
                {formatCurrency(member.contribution)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <p className="text-sm text-center text-gray-400 italic mt-4">
        Showing top 5 team members. Join to see the full roster.
      </p>
    </div>
  );
};

export default TeamMembersTable;

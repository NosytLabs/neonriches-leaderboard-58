
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserProfile } from '@/types/user';
import { Separator } from '@/components/ui/separator';
import { formatDate } from '@/utils/dateUtils';
import { Calendar, Award, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProfileOverviewProps {
  user: UserProfile;
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Profile Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* User Bio */}
        <div>
          <h3 className="text-sm font-medium mb-2">About</h3>
          <p className="text-sm text-muted-foreground">
            {user.bio || "This user hasn't added a bio yet."}
          </p>
        </div>
        
        <Separator />
        
        {/* User Details */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Details</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Joined</p>
                <p className="text-sm font-medium">{formatDate(user.joinedDate)}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Sparkles className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Tier</p>
                <p className="text-sm font-medium capitalize">{user.tier}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Award className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <div className="flex items-center space-x-2">
                  {user.isVerified && (
                    <Badge variant="outline" className="text-xs py-0 h-5 bg-primary/10">Verified</Badge>
                  )}
                  {user.isVIP && (
                    <Badge variant="outline" className="text-xs py-0 h-5 bg-royal-gold/10 text-royal-gold">VIP</Badge>
                  )}
                  {!user.isVerified && !user.isVIP && (
                    <span className="text-sm">Standard</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator />
        
        {/* User Team */}
        {user.team && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Team</h3>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-opacity-10 ${
              user.team === 'red' ? 'bg-royal-crimson text-royal-crimson' :
              user.team === 'green' ? 'bg-royal-gold text-royal-gold' :
              user.team === 'blue' ? 'bg-royal-navy text-royal-navy' :
              'bg-gray-500 text-gray-500'
            }`}>
              {user.team === 'red' ? 'Crimson Crown' :
               user.team === 'green' ? 'Golden Order' :
               user.team === 'blue' ? 'Azure Knights' :
               'No Team'}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileOverview;

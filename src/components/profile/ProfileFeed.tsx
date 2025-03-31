
import React from 'react';
import { UserProfile } from '@/types/user-consolidated';

interface ProfileFeedProps {
  user: UserProfile;
}

const ProfileFeed: React.FC<ProfileFeedProps> = ({ user }) => {
  // Convert user ID to string format to ensure it works as a key
  const userId = typeof user.id === 'number' ? user.id.toString() : user.id.toString();

  return (
    <div className="profile-feed">
      <h3>Activity Feed for {user.displayName || user.username}</h3>
      {/* Feed content here */}
    </div>
  );
};

export default ProfileFeed;

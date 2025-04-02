
import React from 'react';
import { UserProfile } from '@/types/user-consolidated';
import { formatDate } from '@/utils/formatters';

interface MobileProfileViewProps {
  user: UserProfile;
}

const MobileProfileView: React.FC<MobileProfileViewProps> = ({ user }) => {
  // Use joinedDate property which is the proper field from UserProfile
  const joinDate = user.joinedDate || new Date().toISOString();

  return (
    <div className="mobile-profile-view">
      {/* Mobile profile content goes here */}
      <p>Joined: {formatDate(joinDate)}</p>
      {/* Additional mobile-specific UI elements */}
    </div>
  );
};

export default MobileProfileView;

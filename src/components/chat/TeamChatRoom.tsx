
import React, { useState, useEffect, useRef } from 'react';
import { UserTeam, UserProfile } from '@/types/user';

interface TeamChatRoomProps {
  team: UserTeam;
  limit?: number;
}

const TeamChatRoom: React.FC<TeamChatRoomProps> = ({ team, limit = 50 }) => {
  // Convert string to UserTeam if needed
  const teamValue = typeof team === 'string' ? team as unknown as UserTeam : team;
  
  // Component implementation
  return <div>Team Chat Room for {String(teamValue)} team</div>;
};

export default TeamChatRoom;

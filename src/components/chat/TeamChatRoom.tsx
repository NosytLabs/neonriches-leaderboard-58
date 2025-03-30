
import React, { useState, useEffect, useRef } from 'react';
import { TeamType } from '@/types/user';

interface TeamChatRoomProps {
  team: TeamType;
  limit?: number;
}

const TeamChatRoom: React.FC<TeamChatRoomProps> = ({ team, limit = 50 }) => {
  // Convert string to TeamType if needed
  const teamValue = typeof team === 'string' ? team as TeamType : team;
  
  // Component implementation
  return <div>Team Chat Room for {String(teamValue)} team</div>;
};

export default TeamChatRoom;


// Update the child component props to match correctly
<LeaderboardEntry
  key={user.id}
  user={user}
  rank={user.rank || index + 1}
  currentUserId={currentUserId}
  compact={compact}
  onProfileClick={onProfileClick}
  onShameUser={() => onShameUser && onShameUser(user)}
/>

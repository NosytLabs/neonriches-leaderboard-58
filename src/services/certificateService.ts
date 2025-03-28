
// Fixing the type mismatch
const mapUserFromDb = (dbUser: any): UserProfile => {
  return {
    id: dbUser.id,
    username: dbUser.username,
    email: dbUser.email,
    displayName: dbUser.display_name,
    profileImage: dbUser.profile_image,
    gender: dbUser.gender,
    team: dbUser.team,
    tier: dbUser.tier,
    rank: 0, // Default value
    amountSpent: 0, // Default value
    walletBalance: 0, // Default value
    bio: dbUser.bio,
    joinedAt: dbUser.joined_at,
    walletAddress: dbUser.wallet_address
  };
};

// Add the missing function
export const getCertificateById = async (id: string) => {
  // In a real implementation, this would fetch certificate data from an API
  return {
    id,
    title: "Certificate of Nobility",
    recipientName: "Royal User",
    issuedDate: new Date().toISOString(),
    expiryDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365).toISOString(), // 1 year
    tier: "gold",
    signatures: ["Royal Treasurer", "King of P2W"],
    achievements: ["Top Spender", "Team Champion"],
    imageUrl: "/certificates/nobility.jpg"
  };
};

// Keep existing code for mapUserFromDb
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

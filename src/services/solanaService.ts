
import { UserProfile } from '@/types/user';
import { SolanaTransaction, SolanaTreasuryInfo } from '@/types/solana';

// Function to generate metadata for certificate NFT
export const generateCertificateMetadata = (user: UserProfile) => {
  return {
    name: `${user.username}'s Certificate of Nobility`,
    description: `A Certificate of Nobility for ${user.username}, ranked #${user.rank} in the SpendThrone Royal Court.`,
    image: 'https://example.com/certificate-image.png', // This would be replaced with actual image URI
    attributes: [
      {
        trait_type: 'Rank',
        value: user.rank
      },
      {
        trait_type: 'Contribution',
        value: user.amountSpent
      },
      {
        trait_type: 'Team',
        value: user.team || 'None'
      },
      {
        trait_type: 'Join Date',
        value: user.joinDate || user.joinedAt
      }
    ]
  };
};

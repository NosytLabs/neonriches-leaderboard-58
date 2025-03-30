
/**
 * Solana blockchain service functions
 */

import { useSolana } from '@/contexts/SolanaContext';
import { CertificateStyle, CertificateType } from '@/types/certificates';
import { TeamType } from '@/types/user';
import { getTeamName } from '@/utils/teamUtils';
import { formatDate } from '@/utils/formatters';

interface CertificateData {
  username: string;
  displayName?: string;
  rank?: number;
  team?: string | null;
  amountSpent?: number;
  tier?: string;
  certificateId?: string;
  certificateType?: CertificateType;
  certificateStyle?: CertificateStyle;
}

/**
 * Generate metadata for a Royal Certificate NFT
 * @param data Certificate data for metadata creation
 * @returns Certificate metadata object
 */
export function generateCertificateMetadata(data: CertificateData) {
  const displayName = data.displayName || data.username;
  const teamName = data.team ? getTeamName(data.team as TeamType) : 'Unaligned';
  const tierTitle = getTierTitle(data.tier);
  const date = new Date().toISOString();
  const formattedDate = formatDate(date, 'long');
  
  // Generate certificate name based on team and rank
  let certificateName = `${displayName}'s Certificate of Nobility`;
  if (data.rank === 1) {
    certificateName = `${displayName}'s Royal Crown Certificate`;
  } else if (data.rank && data.rank <= 10) {
    certificateName = `${displayName}'s Elite Certificate of Nobility`;
  }
  
  // Add team affiliation to certificate name
  if (data.team) {
    certificateName = `${teamName} ${certificateName}`;
  }
  
  // Description based on rank and spending
  let description = `This certificate recognizes ${displayName} as a noble of the ${tierTitle} rank in the SpendThrone royal court.`;
  if (data.amountSpent) {
    description += ` Having contributed a sum of $${data.amountSpent.toLocaleString()}, `;
    
    // Add satirical commentary based on amount spent
    if (data.amountSpent >= 10000) {
      description += 'they have demonstrated an exceptional commitment to digital status signaling.';
    } else if (data.amountSpent >= 5000) {
      description += 'they have shown a remarkable dedication to virtual hierarchical positioning.';
    } else if (data.amountSpent >= 1000) {
      description += 'they have proven their willingness to exchange real currency for digital prestige.';
    } else {
      description += 'they have begun their journey up the ladder of virtual nobility.';
    }
  }
  
  description += ` Issued on ${formattedDate}.`;
  
  // Get attributes based on certificate data
  const attributes = getCertificateAttributes(data);

  return {
    name: certificateName,
    symbol: "THRONE",
    description,
    seller_fee_basis_points: 0,
    image: "https://spendthrone.com/api/certificate-image", // Would be replaced with actual image URL
    external_url: `https://spendthrone.com/certificates/${data.certificateId || ''}`,
    attributes,
    properties: {
      files: [
        {
          uri: "https://spendthrone.com/api/certificate-image",
          type: "image/png"
        }
      ],
      category: "image",
      creators: [
        {
          address: "THRONE1111111111111111111111111111111",
          share: 100
        }
      ]
    }
  };
}

/**
 * Get NFT attributes based on certificate data
 */
function getCertificateAttributes(data: CertificateData) {
  const attributes = [
    {
      trait_type: "Rank",
      value: data.rank || 'Unranked'
    },
    {
      trait_type: "Team",
      value: data.team ? getTeamName(data.team as TeamType) : 'Unaligned'
    },
    {
      trait_type: "Tier",
      value: getTierTitle(data.tier)
    },
    {
      trait_type: "Issued",
      value: formatDate(new Date().toISOString(), 'medium')
    }
  ];
  
  if (data.amountSpent) {
    attributes.push({
      trait_type: "Contribution",
      value: `$${data.amountSpent.toLocaleString()}`
    });
  }
  
  if (data.certificateType) {
    attributes.push({
      trait_type: "Certificate Type",
      value: capitalize(data.certificateType)
    });
  }
  
  if (data.certificateStyle) {
    attributes.push({
      trait_type: "Style",
      value: capitalize(data.certificateStyle)
    });
  }
  
  return attributes;
}

/**
 * Get a presentable title based on user tier
 */
function getTierTitle(tier?: string): string {
  switch (tier) {
    case 'royal': return 'Royal';
    case 'premium': return 'Premium';
    case 'basic': return 'Basic';
    default: return 'Common';
  }
}

/**
 * Capitalize first letter of a string
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Create a Solana NFT representing a Royal Certificate
 * @param user User data for certificate creation
 * @returns Object with success status and NFT data
 */
export async function createCertificateNFT(userData: CertificateData) {
  // This would be a real implementation with Solana web3.js
  console.log("Creating certificate NFT for", userData.username);
  
  // Simulate blockchain delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate metadata based on user and certificate data
  const metadata = generateCertificateMetadata(userData);
  
  // Mock successful NFT creation
  return {
    success: true,
    mintAddress: "NFTmint" + Math.random().toString(36).substr(2, 9),
    metadata,
    imageUrl: `/images/certificates/${userData.team || 'default'}-certificate.png`
  };
}

/**
 * Get on-chain token balance
 * @param tokenAddress Address of the token
 * @returns Token balance
 */
export async function getTokenBalance(tokenAddress: string) {
  console.log("Getting token balance for", tokenAddress);
  
  // Simulate blockchain delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock token balance
  return Math.floor(Math.random() * 1000);
}

export default {
  generateCertificateMetadata,
  createCertificateNFT,
  getTokenBalance
};

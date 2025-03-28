
import { supabase } from '@/integrations/supabase/client';
import { DbCertificate, UserProfile } from '@/types/user';
import { generateCertificateMetadata } from '@/services/solanaService';

export interface CertificateMetadata {
  id: string;
  userId: string;
  rank: number;
  amountSpent: number;
  mintAddress?: string;
  metadataUri?: string;
  imageUri?: string;
  isMinted: boolean;
  createdAt: string;
  mintedAt?: string;
}

// Create a certificate for a user
export const createCertificate = async (user: UserProfile): Promise<CertificateMetadata | null> => {
  try {
    // Check if user already has a certificate
    const { data: existingCert, error: checkError } = await supabase
      .from('certificates')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    
    if (!checkError && existingCert) {
      // Return the existing certificate
      return mapDbCertToMetadata(existingCert);
    }
    
    // Generate image URI
    const imageUri = `/api/certificate/${user.id}.png`;
    
    // Create a new certificate
    const { data, error } = await supabase
      .from('certificates')
      .insert({
        user_id: user.id,
        rank: user.rank,
        amount_spent: user.amountSpent,
        image_uri: imageUri,
        is_minted: false
      })
      .select()
      .single();
    
    if (error || !data) {
      console.error('Error creating certificate:', error);
      return null;
    }
    
    return mapDbCertToMetadata(data);
  } catch (error) {
    console.error('Error in createCertificate:', error);
    return null;
  }
};

// Get a user's certificate
export const getUserCertificate = async (userId: string): Promise<CertificateMetadata | null> => {
  try {
    // Get the user's most recent certificate
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    
    if (error || !data) {
      console.error('Error getting certificate:', error);
      return null;
    }
    
    return mapDbCertToMetadata(data);
  } catch (error) {
    console.error('Error in getUserCertificate:', error);
    return null;
  }
};

// Mint a certificate as an NFT
export const mintCertificateAsNFT = async (userId: string, certificate: CertificateMetadata): Promise<boolean> => {
  try {
    // In a real implementation, this would:
    // 1. Connect to the Solana blockchain
    // 2. Create metadata and mint the NFT
    // 3. Update the certificate record with the mint address
    
    // We'll simulate this for now
    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (!user) {
      console.error('User not found for minting certificate');
      return false;
    }
    
    // Generate metadata (this would be uploaded to IPFS or Arweave in a real implementation)
    const metadata = generateCertificateMetadata(user);
    const mockMintAddress = `mint${Math.random().toString(36).substring(2, 15)}`;
    const mockMetadataUri = `https://arweave.net/${Math.random().toString(36).substring(2, 15)}`;
    
    // Update the certificate record
    const { error } = await supabase
      .from('certificates')
      .update({
        mint_address: mockMintAddress,
        metadata_uri: mockMetadataUri,
        is_minted: true,
        minted_at: new Date().toISOString()
      })
      .eq('id', certificate.id);
    
    if (error) {
      console.error('Error updating certificate after minting:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error in mintCertificateAsNFT:', error);
    return false;
  }
};

// Helper function to convert DB certificate to frontend metadata
const mapDbCertToMetadata = (dbCert: DbCertificate): CertificateMetadata => {
  return {
    id: dbCert.id,
    userId: dbCert.user_id,
    rank: dbCert.rank,
    amountSpent: dbCert.amount_spent,
    mintAddress: dbCert.mint_address,
    metadataUri: dbCert.metadata_uri,
    imageUri: dbCert.image_uri,
    isMinted: dbCert.is_minted,
    createdAt: dbCert.created_at,
    mintedAt: dbCert.minted_at
  };
};

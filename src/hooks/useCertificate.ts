
// Add the status field to each certificate in the hook implementation
import { useState, useEffect, useCallback } from 'react';
import { Certificate } from '@/types/certificate';

export const useCertificate = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Fetch certificates for a user
  const fetchUserCertificates = useCallback(async (userId: string) => {
    setIsLoading(true);
    try {
      // Mock API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Sample certificates data
      const mockCertificates: Certificate[] = [
        {
          id: 'cert-achievement-1',
          title: 'Royal Spender',
          description: 'Awarded for reaching the top 100 spenders',
          imageUrl: '/images/certificates/royal-spender.png',
          userId: userId,
          dateIssued: new Date().toISOString(),
          mintAddress: '0x1234567890abcdef',
          type: 'achievement',
          style: 'royal',
          team: 'gold',
          rarity: 'legendary',
          status: 'issued'
        },
        {
          id: 'cert-membership-1',
          title: 'Premium Member',
          description: 'Exclusive benefits for premium members',
          imageUrl: '/images/certificates/premium-member.png',
          userId: userId,
          dateIssued: new Date().toISOString(),
          mintAddress: '0xabcdef1234567890',
          type: 'membership',
          style: 'premium',
          team: 'purple',
          rarity: 'epic',
          status: 'minted'
        }
      ];
      
      setCertificates(mockCertificates);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch certificates'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Mint a certificate as NFT
  const mintCertificateAsNFT = useCallback(async (certificateId: string) => {
    setIsLoading(true);
    try {
      // Mock API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update the certificate status to minted
      setCertificates(prev => 
        prev.map(cert => 
          cert.id === certificateId
            ? { ...cert, status: 'minted' as const }
            : cert
        )
      );
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to mint certificate'));
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Issue a new certificate
  const issueCertificate = useCallback(async (userId: string, type: string, template: string) => {
    setIsLoading(true);
    try {
      // Mock API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create a new certificate based on template
      let newCertificate: Certificate;
      
      switch (template) {
        case 'achievement':
          newCertificate = {
            id: `cert-achievement-${Date.now()}`,
            title: 'Royal Achievement',
            description: 'Awarded for outstanding contributions',
            imageUrl: '/images/certificates/royal-achievement.png',
            userId: userId,
            dateIssued: new Date().toISOString(),
            mintAddress: `0x${Math.random().toString(16).substring(2, 14)}`,
            type: 'achievement',
            style: 'royal',
            team: 'gold',
            rarity: 'legendary',
            status: 'issued'
          };
          break;
        case 'team':
          newCertificate = {
            id: `cert-team-${Date.now()}`,
            title: 'Team Member',
            description: 'Recognized as a valuable team member',
            imageUrl: '/images/certificates/team-member.png',
            userId: userId,
            dateIssued: new Date().toISOString(),
            mintAddress: `0x${Math.random().toString(16).substring(2, 14)}`,
            type: 'team',
            style: 'premium',
            team: 'all',
            rarity: 'rare',
            status: 'issued'
          };
          break;
        default:
          throw new Error('Invalid certificate template');
      }
      
      setCertificates(prev => [...prev, newCertificate]);
      return newCertificate;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to issue certificate'));
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Return the hook interface
  return {
    certificates,
    isLoading,
    error,
    fetchUserCertificates,
    mintCertificateAsNFT,
    issueCertificate
  };
};

export default useCertificate;

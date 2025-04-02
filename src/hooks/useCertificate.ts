
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Certificate, CertificateTemplate, CertificateStatus } from '@/types/certificate';
import { adaptCertificate } from '@/utils/typeAdapters';

export const useCertificate = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [templates, setTemplates] = useState<CertificateTemplate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();

  /**
   * Fetch certificates for a given user
   */
  const getUserCertificates = useCallback(async (userId: string): Promise<Certificate[]> => {
    try {
      setLoading(true);
      // In a real app, this would be an API call
      // For now, return mock data
      const mockCertificates = [
        adaptCertificate({
          id: 'cert_123',
          title: 'Royal Patron',
          description: 'For outstanding contribution to the royal treasury',
          imageUrl: '/assets/certificates/royal-patron.png',
          userId,
          dateIssued: new Date().toISOString(),
          type: 'achievement',
          style: 'royal',
          team: 'gold',
          status: 'issued',
          issuerName: 'Royal Treasury',
          recipientName: 'Royal User',
          recipientId: userId,
          rarity: 'rare',
        }),
        adaptCertificate({
          id: 'cert_456',
          title: 'Spending Elite',
          description: 'For joining the elite spenders club',
          imageUrl: '/assets/certificates/spending-elite.png',
          userId,
          dateIssued: new Date().toISOString(),
          type: 'spending',
          style: 'gold',
          team: 'red',
          status: 'issued',
          issuerName: 'Royal Treasury',
          recipientName: 'Royal User',
          recipientId: userId,
          rarity: 'epic',
        }),
      ];
      setCertificates(mockCertificates);
      setLoading(false);
      return mockCertificates;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch certificates'));
      setLoading(false);
      return [];
    }
  }, []);

  /**
   * Fetch available certificate templates
   */
  const getAvailableTemplates = useCallback(async (): Promise<CertificateTemplate[]> => {
    try {
      setLoading(true);
      // In a real app, this would be an API call
      const mockTemplates: CertificateTemplate[] = [
        {
          id: 'template_123',
          title: 'Big Spender',
          description: 'Awarded to users who spend extravagantly',
          imageUrl: '/assets/certificates/big-spender.png',
          type: 'spending',
          style: 'premium',
          team: 'gold',
          rarity: 'epic',
        },
        {
          id: 'template_456',
          title: 'Royal Advisor',
          description: 'Awarded to trusted members of the royal council',
          imageUrl: '/assets/certificates/royal-advisor.png',
          type: 'royal',
          style: 'royal',
          team: 'purple',
          rarity: 'legendary',
        },
      ];
      setTemplates(mockTemplates);
      setLoading(false);
      return mockTemplates;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch certificate templates'));
      setLoading(false);
      return [];
    }
  }, []);

  /**
   * Create a new certificate
   */
  const createCertificate = useCallback(async (data: Partial<Certificate>): Promise<Certificate> => {
    try {
      setLoading(true);
      // In a real app, this would be an API call
      const newCertificate = adaptCertificate(data);
      setCertificates(prev => [...prev, newCertificate]);
      setLoading(false);
      toast({
        title: 'Certificate Created',
        description: 'Your certificate has been created successfully',
        variant: 'success',
      });
      return newCertificate;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to create certificate'));
      setLoading(false);
      toast({
        title: 'Error',
        description: 'Failed to create certificate',
        variant: 'destructive',
      });
      throw err;
    }
  }, [toast]);

  /**
   * Mint a certificate as NFT
   */
  const mintCertificateAsNFT = useCallback(async (certificateId: string): Promise<void> => {
    try {
      setLoading(true);
      // In a real app, this would be an API call
      setCertificates(prev => 
        prev.map(cert => 
          cert.id === certificateId 
            ? { 
                ...cert, 
                status: 'minted' as CertificateStatus, 
                mintAddress: `mint_${Math.random().toString(36).substring(2, 9)}`,
                mintDate: new Date().toISOString(),
                isMinted: true,
              } 
            : cert
        )
      );
      setLoading(false);
      toast({
        title: 'Certificate Minted',
        description: 'Your certificate has been minted as an NFT',
        variant: 'success',
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to mint certificate'));
      setLoading(false);
      toast({
        title: 'Error',
        description: 'Failed to mint certificate',
        variant: 'destructive',
      });
      throw err;
    }
  }, [toast]);

  /**
   * Issue a certificate to a user
   */
  const issueCertificate = useCallback(async (userId: string, type: string, templateId: string): Promise<void> => {
    try {
      setLoading(true);
      // Find the template
      const template = templates.find(t => t.id === templateId);
      if (!template) {
        throw new Error('Certificate template not found');
      }
      
      // Create the certificate
      const certificate = await createCertificate({
        userId,
        recipientId: userId,
        recipientName: 'User',
        title: template.title,
        description: template.description,
        imageUrl: template.imageUrl,
        type: template.type,
        style: template.style,
        team: template.team,
        issuerName: 'System',
        dateIssued: new Date().toISOString(),
        status: 'issued',
      });
      
      setLoading(false);
      toast({
        title: 'Certificate Issued',
        description: `A ${template.title} certificate has been issued`,
        variant: 'success',
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to issue certificate'));
      setLoading(false);
      toast({
        title: 'Error',
        description: 'Failed to issue certificate',
        variant: 'destructive',
      });
      throw err;
    }
  }, [createCertificate, templates, toast]);

  /**
   * Download a certificate
   */
  const downloadCertificate = useCallback(async (certificateId: string): Promise<void> => {
    try {
      setLoading(true);
      // In a real app, this would trigger a download
      console.log(`Downloading certificate ${certificateId}`);
      setLoading(false);
      toast({
        title: 'Certificate Downloaded',
        description: 'Your certificate has been downloaded',
        variant: 'success',
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to download certificate'));
      setLoading(false);
      toast({
        title: 'Error',
        description: 'Failed to download certificate',
        variant: 'destructive',
      });
      throw err;
    }
  }, [toast]);

  /**
   * Share a certificate
   */
  const shareCertificate = useCallback(async (certificateId: string): Promise<void> => {
    try {
      setLoading(true);
      // In a real app, this would open a share dialog
      console.log(`Sharing certificate ${certificateId}`);
      setLoading(false);
      toast({
        title: 'Certificate Shared',
        description: 'Your certificate has been shared',
        variant: 'success',
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to share certificate'));
      setLoading(false);
      toast({
        title: 'Error',
        description: 'Failed to share certificate',
        variant: 'destructive',
      });
      throw err;
    }
  }, [toast]);

  /**
   * Fetch user certificates
   */
  const fetchUserCertificates = useCallback(async (userId?: string): Promise<Certificate[]> => {
    if (!userId) return [];
    return getUserCertificates(userId);
  }, [getUserCertificates]);

  /**
   * Fetch certificate templates
   */
  const fetchTemplates = useCallback(async (): Promise<CertificateTemplate[]> => {
    return getAvailableTemplates();
  }, [getAvailableTemplates]);

  // Compatibility methods
  /**
   * Mint a certificate (compatibility method)
   */
  const mint = useCallback(async (certificate: Certificate): Promise<{ success: boolean; mintAddress?: string }> => {
    try {
      await mintCertificateAsNFT(certificate.id);
      const updatedCert = certificates.find(c => c.id === certificate.id);
      return { 
        success: true, 
        mintAddress: updatedCert?.mintAddress 
      };
    } catch (err) {
      return { success: false };
    }
  }, [certificates, mintCertificateAsNFT]);

  /**
   * Download a certificate (compatibility method)
   */
  const download = useCallback((certificate: Certificate) => {
    downloadCertificate(certificate.id);
  }, [downloadCertificate]);

  /**
   * Share a certificate (compatibility method)
   */
  const share = useCallback(async (certificate: Certificate): Promise<string> => {
    await shareCertificate(certificate.id);
    return `https://share.example.com/certificate/${certificate.id}`;
  }, [shareCertificate]);

  return {
    certificates,
    templates,
    loading,
    error,
    createCertificate,
    fetchUserCertificates,
    fetchTemplates,
    mintCertificateAsNFT,
    issueCertificate,
    downloadCertificate,
    shareCertificate,
    getUserCertificates,
    getAvailableTemplates,
    // Compatibility methods
    mint,
    download,
    share
  };
};

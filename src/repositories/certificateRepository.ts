
import { Certificate, CertificateRepository } from '@/types/certificates';

// Mock implementation for now - would connect to a real data source in production
export class MockCertificateRepository implements CertificateRepository {
  private certificates: Certificate[] = [];

  async getCertificateById(id: string): Promise<Certificate | null> {
    const certificate = this.certificates.find(cert => cert.id === id);
    return certificate || null;
  }

  async getCertificatesForUser(userId: string): Promise<Certificate[]> {
    return this.certificates.filter(cert => cert.userId === userId);
  }

  async getMintedCertificatesForUser(userId: string): Promise<Certificate[]> {
    return this.certificates.filter(cert => cert.userId === userId && cert.isMinted);
  }

  async saveCertificate(certificate: Certificate): Promise<Certificate> {
    const newCertificate = {
      ...certificate,
      id: certificate.id || `cert-${Date.now()}`,
      createdAt: certificate.createdAt || new Date().toISOString()
    };
    
    this.certificates.push(newCertificate);
    return newCertificate;
  }

  async updateCertificate(certificate: Certificate): Promise<Certificate> {
    const index = this.certificates.findIndex(cert => cert.id === certificate.id);
    
    if (index === -1) {
      throw new Error(`Certificate with id ${certificate.id} not found`);
    }
    
    this.certificates[index] = certificate;
    return certificate;
  }
}

// Factory function to create the appropriate repository
export const createCertificateRepository = (): CertificateRepository => {
  return new MockCertificateRepository();
};

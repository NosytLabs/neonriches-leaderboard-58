
import { Certificate, CertificateRepository } from '@/types/certificates';

// Mock implementation for now - would connect to a real data source in production
export class MockCertificateRepository implements CertificateRepository {
  private certificates: Certificate[] = [];

  async getCertificatesByUserId(userId: string): Promise<Certificate[]> {
    return this.certificates.filter(cert => cert.userId === userId);
  }

  async createCertificate(certificate: Certificate): Promise<Certificate> {
    const newCertificate = {
      ...certificate,
      id: certificate.id || `cert-${Date.now()}`,
      createdAt: certificate.createdAt || new Date().toISOString()
    };
    
    this.certificates.push(newCertificate);
    return newCertificate;
  }

  async getCertificateById(id: string): Promise<Certificate | null> {
    const certificate = this.certificates.find(cert => cert.id === id);
    return certificate || null;
  }

  async getCertificate(id: string): Promise<Certificate | null> {
    return this.getCertificateById(id);
  }

  async getCertificatesForUser(userId: string): Promise<Certificate[]> {
    return this.certificates.filter(cert => cert.userId === userId);
  }

  async getMintedCertificatesForUser(userId: string): Promise<Certificate[]> {
    return this.certificates.filter(cert => cert.userId === userId && cert.isMinted);
  }

  async updateCertificate(certificate: Certificate): Promise<boolean> {
    const index = this.certificates.findIndex(cert => cert.id === certificate.id);
    
    if (index === -1) {
      return false;
    }
    
    this.certificates[index] = certificate;
    return true;
  }

  async deleteCertificate(id: string): Promise<boolean> {
    const initialLength = this.certificates.length;
    this.certificates = this.certificates.filter(cert => cert.id !== id);
    return initialLength > this.certificates.length;
  }
}

// Factory function to create the appropriate repository
export const createCertificateRepository = (): CertificateRepository => {
  return new MockCertificateRepository();
};

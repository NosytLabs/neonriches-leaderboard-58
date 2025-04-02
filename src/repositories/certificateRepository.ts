
import { Certificate, CertificateTemplate } from "@/types/certificate";

export interface CertificateRepository {
  getCertificates(): Promise<Certificate[]>;
  getCertificateById(id: string): Promise<Certificate | null>;
  getUserCertificates(userId: string): Promise<Certificate[]>;
  mintCertificate(certificate: Certificate): Promise<boolean>;
  verifyCertificate(certificateId: string): Promise<boolean>;
  getCertificateTemplates(): Promise<CertificateTemplate[]>;
}

export class MockCertificateRepository implements CertificateRepository {
  private certificates: Certificate[] = [];
  private templates: CertificateTemplate[] = [];

  constructor() {
    // Initialize with mock data if needed
  }

  async getCertificates(): Promise<Certificate[]> {
    return this.certificates;
  }

  async getCertificateById(id: string): Promise<Certificate | null> {
    const cert = this.certificates.find(c => c.id === id);
    return cert || null;
  }

  async getUserCertificates(userId: string): Promise<Certificate[]> {
    return this.certificates.filter(c => c.recipientId === userId);
  }

  async mintCertificate(certificate: Certificate): Promise<boolean> {
    this.certificates.push(certificate);
    return true;
  }

  async verifyCertificate(certificateId: string): Promise<boolean> {
    return true; // Mock implementation always returns true
  }

  async getCertificateTemplates(): Promise<CertificateTemplate[]> {
    return this.templates;
  }
}

// Create singleton instance
const certificateRepository: CertificateRepository = new MockCertificateRepository();
export default certificateRepository;

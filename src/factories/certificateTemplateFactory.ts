
import { CertificateTemplate, CertificateTemplateFactory, CertificateTeam, CertificateType, CertificateStyle } from '@/types/certificates';
import { UserProfile, TeamType } from '@/types/user';
import { getTeamName } from '@/utils/teamUtils';

export class DefaultCertificateTemplateFactory implements CertificateTemplateFactory {
  async getTemplatesForUser(user: UserProfile): Promise<CertificateTemplate[]> {
    // Team-specific templates
    const teamTemplates = user.team ? this.getTeamTemplates(user) : [];
    
    // Rank-based templates
    const rankTemplates = user.rank && user.rank <= 10 ? this.getEliteRankTemplates() : [];
    
    // Founder-only templates
    const founderTemplates = user.cosmetics?.foundersPass ? this.getFounderTemplates() : [];
    
    // Default template that everyone can access
    const defaultTemplates = this.getDefaultTemplates();
    
    return [...teamTemplates, ...rankTemplates, ...founderTemplates, ...defaultTemplates];
  }

  async createCertificateFromTemplate(templateId: string, userId: string): Promise<Certificate> {
    // This would fetch the template and create a certificate instance
    // Mock implementation for now
    return {
      id: `cert-${Date.now()}`,
      userId,
      type: 'nobility',
      style: 'royal',
      team: 'none',
      title: 'Certificate of Digital Nobility',
      description: 'This certifies that the bearer has attained the rank of nobility through financial contributions.',
      isMinted: false,
      createdAt: new Date().toISOString()
    };
  }

  private getTeamTemplates(user: UserProfile): CertificateTemplate[] {
    if (!user.team) return [];
    
    return [{
      id: `${user.team}-nobility`,
      name: `${getTeamName(user.team)} Nobility Certificate`,
      style: 'royal' as CertificateStyle,
      team: user.team as CertificateTeam,
      previewUrl: `/images/certificates/${user.team}-certificate.png`,
      description: `The official certificate of nobility for members of the ${getTeamName(user.team)}.`,
      availableForTier: ['basic', 'premium', 'royal']
    }];
  }

  private getEliteRankTemplates(): CertificateTemplate[] {
    return [{
      id: 'top-10-rank',
      name: 'Elite Top 10 Certificate',
      style: 'fantasy' as CertificateStyle,
      team: 'none' as CertificateTeam,
      previewUrl: '/images/certificates/top-rank-certificate.png',
      description: 'An exclusive certificate reserved for the top 10 nobles of the realm.',
      availableForRank: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }];
  }

  private getFounderTemplates(): CertificateTemplate[] {
    return [{
      id: 'founders-certificate',
      name: 'Founder\'s Certificate',
      style: 'minimalist' as CertificateStyle,
      team: 'none' as CertificateTeam,
      previewUrl: '/images/certificates/founder-certificate.png',
      description: 'The exclusive certificate proving your founding status in the SpendThrone kingdom.',
      requiresFounder: true
    }];
  }

  private getDefaultTemplates(): CertificateTemplate[] {
    return [{
      id: 'default-certificate',
      name: 'Standard Certificate of Status',
      style: 'classic' as CertificateStyle,
      team: 'none' as CertificateTeam,
      previewUrl: '/images/certificates/default-certificate.png',
      description: 'The standard certificate showing your status and rank in the SpendThrone realm.',
      availableForTier: ['basic', 'premium', 'royal']
    }];
  }
}

export const createCertificateTemplateFactory = (): CertificateTemplateFactory => {
  return new DefaultCertificateTemplateFactory();
};

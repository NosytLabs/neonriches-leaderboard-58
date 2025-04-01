
import { CertificateTemplate, CertificateType, CertificateStyle, CertificateTeam } from '@/types/certificate';
import { UserProfile } from '@/types/user';

class DefaultCertificateTemplateFactory {
  async getTemplatesForUser(user: UserProfile): Promise<CertificateTemplate[]> {
    // Mock templates - replace with actual data fetching logic
    const templates: CertificateTemplate[] = [
      {
        id: 'rank-template-1',
        name: 'Rank Certificate - Bronze',
        type: 'rank' as CertificateType,
        style: 'classic' as CertificateStyle,
        team: 'neutral' as CertificateTeam,
        previewUrl: '/images/certificates/rank-bronze-preview.jpg',
        imageUrl: '/images/certificates/rank-bronze.jpg',
        description: 'A certificate celebrating your rank achievement',
        availableForTier: ['basic', 'premium', 'pro']
      },
      {
        id: 'rank-template-2',
        name: 'Rank Certificate - Silver',
        type: 'rank' as CertificateType,
        style: 'royal' as CertificateStyle,
        team: 'neutral' as CertificateTeam,
        previewUrl: '/images/certificates/rank-silver-preview.jpg',
        imageUrl: '/images/certificates/rank-silver.jpg',
        description: 'A higher-level certificate for significant rank achievement',
        availableForTier: ['silver', 'gold', 'platinum', 'royal'],
        availableForRank: [50, 100, 150, 200]
      },
      {
        id: 'founder-certificate',
        name: 'Founder Certificate',
        type: 'founder' as CertificateType,
        style: 'royal' as CertificateStyle,
        team: 'gold' as CertificateTeam,
        previewUrl: '/images/certificates/founder-preview.jpg',
        imageUrl: '/images/certificates/founder.jpg',
        description: 'An exclusive certificate for founding members',
        availableForTier: ['founder', 'royal'],
        requiresFounder: true
      },
      {
        id: 'event-certificate',
        name: 'Event Participation',
        type: 'event' as CertificateType,
        style: 'modern' as CertificateStyle,
        team: 'blue' as CertificateTeam,
        previewUrl: '/images/certificates/event-preview.jpg',
        imageUrl: '/images/certificates/event.jpg',
        description: 'A certificate for participating in special events',
        availableForTier: ['basic', 'premium', 'pro', 'royal']
      }
    ];

    return templates;
  }

  createTemplate(templateData: Partial<CertificateTemplate>): CertificateTemplate {
    // Basic implementation - replace with actual creation logic
    const newTemplate: CertificateTemplate = {
      id: templateData.id || 'temp-' + Math.random().toString(36).substring(7),
      name: templateData.name || 'New Template',
      type: templateData.type || 'rank',
      style: templateData.style || 'classic',
      team: templateData.team || 'neutral',
      previewUrl: templateData.previewUrl || '/images/certificates/default-preview.jpg',
      imageUrl: templateData.imageUrl || '/images/certificates/default.jpg',
      description: templateData.description || 'A new certificate template',
      availableForTier: templateData.availableForTier || ['basic']
    };
    return newTemplate;
  }

  getTemplateById(id: string): CertificateTemplate | null {
    // Mock implementation - replace with actual data fetching
    return {
      id: 'rank-template-1',
      name: 'Rank Certificate - Bronze',
      type: 'rank',
      style: 'classic',
      team: 'neutral',
      previewUrl: '/images/certificates/rank-bronze-preview.jpg',
      imageUrl: '/images/certificates/rank-bronze.jpg',
      description: 'A certificate celebrating your rank achievement',
      availableForTier: ['basic', 'premium', 'pro']
    };
  }

  getAllTemplates(): CertificateTemplate[] {
    return [
      {
        id: 'rank-template-1',
        name: 'Rank Certificate - Bronze',
        type: 'rank',
        style: 'classic',
        team: 'neutral',
        previewUrl: '/images/certificates/rank-bronze-preview.jpg',
        imageUrl: '/images/certificates/rank-bronze.jpg',
        description: 'A certificate celebrating your rank achievement',
        availableForTier: ['basic', 'premium', 'pro']
      }
    ];
  }

  getTemplatesByType(type: CertificateType): CertificateTemplate[] {
    return [
      {
        id: 'rank-template-1',
        name: 'Rank Certificate - Bronze',
        type: 'rank',
        style: 'classic',
        team: 'neutral',
        previewUrl: '/images/certificates/rank-bronze-preview.jpg',
        imageUrl: '/images/certificates/rank-bronze.jpg',
        description: 'A certificate celebrating your rank achievement',
        availableForTier: ['basic', 'premium', 'pro']
      }
    ];
  }
}

export default DefaultCertificateTemplateFactory;

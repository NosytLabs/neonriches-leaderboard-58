
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Certificate } from '@/types/certificates';

const CertificatePage: React.FC = () => {
  // Example certificate data
  const certificate: Certificate = {
    id: '123456',
    userId: 'user123',
    title: 'Royal Achievement',
    description: 'For outstanding contributions to the kingdom',
    imageUrl: '/images/certificates/royal-achievement.png',
    issuedAt: new Date().toISOString(),
    dateIssued: new Date().toISOString(),
    mintAddress: '0x1234567890abcdef',
    status: 'minted',
    type: 'achievement',
    tier: 'gold',
    style: 'royal',
    issuerName: 'The Royal Court',
    recipientName: 'John Doe',
    recipientId: 'user123'
  };

  return (
    <div className="container mx-auto py-12">
      <Card>
        <CardContent className="p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{certificate.title}</h1>
            <p className="text-gray-500">{certificate.description}</p>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={certificate.imageUrl} 
              alt={certificate.title}
              className="max-w-md w-full rounded-lg shadow-lg border-4 border-gold"
            />
          </div>
          
          <div className="mt-6 text-center">
            <p>Awarded to: <span className="font-bold">{certificate.recipientName}</span></p>
            <p>Issued by: <span className="font-medium">{certificate.issuerName}</span></p>
            <p>Date: <span className="font-medium">{new Date(certificate.dateIssued).toLocaleDateString()}</span></p>
            {certificate.mintAddress && (
              <p className="mt-4 text-sm">
                <span className="font-medium">Certificate ID:</span> {certificate.mintAddress}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificatePage;


import React from 'react';
import { Certificate } from '@/types/certificate';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/utils/dateUtils';
import { Crown, Award, Calendar, CircleDollarSign, ShieldCheck } from 'lucide-react';

interface CertificateHistoryProps {
  certificate: Certificate;
}

const CertificateHistory: React.FC<CertificateHistoryProps> = ({ certificate }) => {
  // Generate some mock history events based on the certificate
  const historyEvents = [
    {
      id: '1',
      type: 'created',
      date: certificate.createdAt || new Date().toISOString(),
      description: `Certificate was created for achieving ${certificate.type} status`
    },
    {
      id: '2',
      type: 'milestone',
      date: new Date(new Date(certificate.createdAt || new Date()).getTime() - 86400000).toISOString(), // 1 day before
      description: `Spent $${certificate.amount || 1000} to reach this milestone`
    },
    {
      id: '3',
      type: 'rank',
      date: new Date(new Date(certificate.createdAt || new Date()).getTime() - 86400000 * 3).toISOString(), // 3 days before
      description: `Achieved rank #${certificate.rank || 100} in the leaderboard`
    }
  ];
  
  if (certificate.isMinted) {
    historyEvents.unshift({
      id: '0',
      type: 'minted',
      date: new Date().toISOString(),
      description: `Certificate was minted as an NFT with address ${certificate.mintAddress?.substring(0, 12)}...`
    });
  }
  
  // Get the appropriate icon for each event type
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'created':
        return <Award className="h-5 w-5 text-royal-gold" />;
      case 'milestone':
        return <CircleDollarSign className="h-5 w-5 text-royal-gold" />;
      case 'rank':
        return <Crown className="h-5 w-5 text-royal-gold" />;
      case 'minted':
        return <ShieldCheck className="h-5 w-5 text-royal-gold" />;
      default:
        return <Calendar className="h-5 w-5 text-royal-gold" />;
    }
  };
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardContent className="pt-6">
          <div className="relative pl-8 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-white/10">
            {historyEvents.map((event, index) => (
              <div key={event.id} className={`relative pb-6 ${index === historyEvents.length - 1 ? '' : ''}`}>
                <div className="absolute -left-4 p-1 bg-background border border-white/10 rounded-full">
                  {getEventIcon(event.type)}
                </div>
                <div className="relative">
                  <p className="mb-1 text-sm font-medium">{formatDate(event.date)}</p>
                  <p className="text-white/70">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificateHistory;

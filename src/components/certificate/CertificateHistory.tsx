
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Certificate } from '@/types/certificates';
import { formatDate } from '@/utils/dateUtils';
import { formatCurrency } from '@/utils/formatters';
import { History, Award } from 'lucide-react';

interface CertificateHistoryProps {
  certificates: Certificate[];
}

const CertificateHistory: React.FC<CertificateHistoryProps> = ({ certificates }) => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <History className="h-5 w-5 text-royal-gold" />
          Certificate History
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {certificates.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <Award className="h-12 w-12 text-white/20 mb-2" />
              <p className="text-white/40">No certificates yet</p>
              <p className="text-xs text-white/30 mt-1">Your certificates will appear here</p>
            </div>
          ) : (
            <div className="space-y-3">
              {certificates.map((cert) => (
                <div 
                  key={cert.id} 
                  className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-royal-gold/30 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{cert.title}</p>
                      <p className="text-xs text-white/60 mt-0.5">
                        Issued: {formatDate(cert.dateIssued)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default CertificateHistory;


import React from 'react';
import { Certificate, CertificateType, CertificateStyle } from '@/types/certificate';
import { TeamColor } from '@/types/user-types';
import { formatDate } from '@/utils/dateUtils';
import { cn } from '@/lib/utils';

interface CertificateDisplayProps {
  certificate: Certificate;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onClick?: () => void;
}

const CertificateDisplay: React.FC<CertificateDisplayProps> = ({
  certificate,
  size = 'md',
  interactive = false,
  onClick
}) => {
  const {
    id,
    type = 'achievement',
    team,
    style = 'royal',
    imageUrl,
    createdAt
  } = certificate;

  // Get display values from certificate metadata or defaults
  const title = certificate.title || certificate.metadata?.name || 'Royal Certificate';
  const description = certificate.description || certificate.metadata?.description || 'A prestigious certificate of recognition';
  const signature = certificate.signature || 'Royal Treasury';
  const userDisplayName = certificate.userDisplayName || certificate.displayName || certificate.username || 'Esteemed Noble';
  const dateIssued = certificate.dateIssued || certificate.issuedAt || createdAt || new Date().toISOString();

  const sizeClasses = {
    sm: 'w-64 h-48',
    md: 'w-80 h-60',
    lg: 'w-96 h-72'
  };

  const getTeamColorClass = (teamColor: TeamColor | string | undefined) => {
    if (!teamColor) return 'border-gray-500 bg-gray-900/10';
    
    switch (teamColor) {
      case 'red': return 'border-red-500 bg-red-900/10';
      case 'blue': return 'border-blue-500 bg-blue-900/10';
      case 'green': return 'border-green-500 bg-green-900/10';
      case 'gold': return 'border-yellow-500 bg-yellow-900/10';
      case 'purple': return 'border-purple-500 bg-purple-900/10';
      case 'neutral': return 'border-gray-300 bg-gray-800/10';
      default: return 'border-gray-500 bg-gray-900/10';
    }
  };

  const getStyleClasses = (certStyle?: CertificateStyle | string) => {
    if (!certStyle) return 'border-gray-400 bg-gray-900/20 text-gray-200';
    
    switch (certStyle) {
      case 'royal': return 'border-amber-400 bg-amber-900/20 text-amber-200';
      case 'gold': return 'border-yellow-400 bg-yellow-900/20 text-yellow-200';
      case 'silver': return 'border-gray-400 bg-gray-900/20 text-gray-200';
      case 'bronze': return 'border-orange-400 bg-orange-900/20 text-orange-200';
      case 'platinum': return 'border-blue-400 bg-blue-900/20 text-blue-200';
      case 'diamond': return 'border-cyan-400 bg-cyan-900/20 text-cyan-200';
      default: return 'border-gray-400 bg-gray-900/20 text-gray-200';
    }
  };

  const getTypeIcon = (certType?: string) => {
    if (!certType) return '📜';
    
    switch (certType) {
      case 'rank':
        return '⚔️';
      case 'royal':
        return '👑';
      case 'achievement':
        return '🏆';
      case 'founder':
        return '🏛️';
      case 'seasonal':
        return '🌙';
      case 'event':
        return '🎭';
      case 'team':
        return '🏹';
      case 'nobility':
        return '🛡️';
      case 'milestone':
        return '📊';
      case 'membership':
        return '🏅';
      case 'special':
        return '🌟';
      case 'custom':
        return '✨';
      default:
        return '📜';
    }
  };

  return (
    <div 
      className={cn(
        'certificate-display relative border-2 rounded-lg p-4 flex flex-col',
        getTeamColorClass(team as TeamColor),
        getStyleClasses(style),
        sizeClasses[size],
        interactive && 'cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105',
      )}
      onClick={interactive ? onClick : undefined}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-repeat"
        style={{ backgroundImage: 'url(/assets/parchment-texture.png)' }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medieval text-lg font-bold">{title}</h3>
          <span className="text-2xl">{getTypeIcon(type)}</span>
        </div>
        
        {userDisplayName && (
          <p className="font-medieval text-sm mb-1">Awarded to: {userDisplayName}</p>
        )}
        
        <p className="text-sm opacity-80 mb-auto">{description}</p>
        
        <div className="mt-2 flex justify-between items-end text-xs opacity-70">
          <span>№{id.substring(0, 8)}</span>
          <span>{dateIssued ? formatDate(dateIssued) : 'Unknown date'}</span>
        </div>
        
        {signature && (
          <div className="mt-2 text-right font-medieval italic text-xs">
            {signature}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateDisplay;

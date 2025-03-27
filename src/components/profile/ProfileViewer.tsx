
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Link as LinkIcon } from 'lucide-react';
import { UserProfile } from '@/contexts/AuthContext';

interface ProfileImage {
  id: number;
  url: string;
  caption: string;
}

interface ProfileLink {
  id: number;
  url: string;
  label: string;
}

interface ProfileData {
  bio: string;
  images: ProfileImage[];
  links: ProfileLink[];
}

interface ProfileViewerProps {
  user: UserProfile;
  profileData: ProfileData;
}

const ProfileViewer = ({ user, profileData }: ProfileViewerProps) => {
  return (
    <div className="glass-morphism rounded-xl overflow-hidden" style={{ boxShadow: '0 0 25px rgba(0, 191, 255, 0.15)' }}>
      <div className="h-40 bg-gradient-to-r from-team-blue/40 via-team-green/30 to-team-red/40 relative">
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <Button variant="outline" size="sm" className="absolute top-4 right-4 glass-morphism border-white/20 text-white hover:bg-white/10">
          <Eye size={14} className="mr-1.5" />
          Public View
        </Button>
      </div>
      
      <div className="px-8 pb-8 relative">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background absolute -top-12 left-8">
          <img 
            src={user.profileImage || "https://i.pravatar.cc/200?img=12"} 
            alt="Profile" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="pt-16">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold">{user.username}</h3>
              <div className="flex items-center">
                {user.team && (
                  <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-team-${user.team}/10 text-team-${user.team} border border-team-${user.team}/30 mr-2`}>
                    Team {user.team.charAt(0).toUpperCase() + user.team.slice(1)}
                  </div>
                )}
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                  Rank #{user.rank}
                </span>
              </div>
            </div>
            
            <div className="font-mono">
              <div className="text-2xl font-bold">${user.amountSpent}</div>
              <div className="text-sm text-white/50 text-right">Total Spent</div>
            </div>
          </div>
          
          <p className="text-white/70 mb-6">
            {profileData.bio}
          </p>
          
          {profileData.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {profileData.images.map(image => (
                <div key={image.id} className="glass-morphism rounded-lg p-4 border border-white/10">
                  <img src={image.url} alt={image.caption} className="rounded-lg w-full h-32 object-cover mb-2" />
                  <p className="text-sm text-white/50 text-center">{image.caption}</p>
                </div>
              ))}
            </div>
          )}
          
          {profileData.links.length > 0 && (
            <div className="glass-morphism rounded-lg p-4 border border-white/10">
              <h4 className="font-medium mb-3">Links</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {profileData.links.map(link => (
                  <a 
                    key={link.id} 
                    href={link.url} 
                    className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <LinkIcon size={14} className="mr-2 text-team-blue" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileViewer;

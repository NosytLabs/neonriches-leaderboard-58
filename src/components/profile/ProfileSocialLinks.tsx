
import React from 'react';
import { Button } from '@/components/ui/button';
import { Twitter, Instagram, Twitch, Youtube, Globe, Github, Linkedin, Facebook } from 'lucide-react';

export interface SocialLink {
  id: number;
  url: string;
  platform: string;
  icon: string;
  label: string; // This property is required according to the error message
}

interface ProfileSocialLinksProps {
  links: SocialLink[];
}

const ProfileSocialLinks: React.FC<ProfileSocialLinksProps> = ({ links }) => {
  const getSocialIcon = (url: string) => {
    if (url.includes('twitter.com')) return <Twitter size={16} />;
    if (url.includes('instagram.com')) return <Instagram size={16} />;
    if (url.includes('twitch.tv')) return <Twitch size={16} />;
    if (url.includes('youtube.com')) return <Youtube size={16} />;
    if (url.includes('github.com')) return <Github size={16} />;
    if (url.includes('linkedin.com')) return <Linkedin size={16} />;
    if (url.includes('facebook.com')) return <Facebook size={16} />;
    return <Globe size={16} />;
  };

  const handleLinkClick = (url: string) => {
    // In a real app, you might want to track clicks here
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Button
          key={link.id}
          variant="outline"
          size="sm"
          className="glass-morphism border-white/10 hover:bg-white/10"
          onClick={() => handleLinkClick(link.url)}
        >
          {getSocialIcon(link.url)}
          <span className="ml-2">{link.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default ProfileSocialLinks;

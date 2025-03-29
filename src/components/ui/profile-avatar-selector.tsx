
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Crown, GemIcon, Medal, Trophy, CreditCard, User, Star, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define available avatar types
export type AvatarStyle = 
  'royal' | 'gem' | 'trophy' | 'coin' | 'crown' | 
  'medal' | 'card' | 'default' | 'star';

export type AvatarColor = 
  'gold' | 'silver' | 'bronze' | 'blue' | 'green' | 
  'purple' | 'red' | 'orange' | 'pink' | 'teal';

interface ProfileAvatarSelectorProps {
  currentAvatar?: string;
  onChange: (avatarUrl: string) => void;
  className?: string;
}

// Helper function to generate avatar URL
const getAvatarUrl = (style: AvatarStyle, color: AvatarColor) => {
  // For actual implementation, we'd use real image URLs
  // This is a mock function that returns a CSS class combination
  return `avatar-${style}-${color}`;
};

const createSvgDataUrl = (style: AvatarStyle, color: AvatarColor) => {
  const colorMap: Record<AvatarColor, { bg: string, fg: string, accent: string }> = {
    gold: { bg: '#ffd700', fg: '#b8860b', accent: '#ffec80' },
    silver: { bg: '#c0c0c0', fg: '#a9a9a9', accent: '#e6e6e6' },
    bronze: { bg: '#cd7f32', fg: '#a0522d', accent: '#e6b17e' },
    blue: { bg: '#3498db', fg: '#2980b9', accent: '#85c1e9' },
    green: { bg: '#2ecc71', fg: '#27ae60', accent: '#82e0aa' },
    purple: { bg: '#9b59b6', fg: '#8e44ad', accent: '#c39bd3' },
    red: { bg: '#e74c3c', fg: '#c0392b', accent: '#f1948a' },
    orange: { bg: '#e67e22', fg: '#d35400', accent: '#f0b27a' },
    pink: { bg: '#fd79a8', fg: '#e84393', accent: '#fab0ce' },
    teal: { bg: '#1abc9c', fg: '#16a085', accent: '#76d7c4' }
  };
  
  const colors = colorMap[color];
  
  let svgContent = '';
  const commonAttributes = `fill="${colors.bg}" stroke="#000" stroke-width="1"`;
  
  switch (style) {
    case 'royal':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" ${commonAttributes} />
          <path d="M35,35 L50,25 L65,35 L60,60 L40,60 Z" fill="${colors.fg}" stroke="#000" />
          <circle cx="50" cy="50" r="10" fill="${colors.accent}" />
        </svg>
      `;
      break;
    case 'gem':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" ${commonAttributes} />
          <path d="M30,40 L50,20 L70,40 L50,80 Z" fill="${colors.fg}" stroke="#000" />
          <path d="M50,20 L70,40 L50,40 Z" fill="${colors.accent}" />
        </svg>
      `;
      break;
    case 'trophy':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" ${commonAttributes} />
          <path d="M35,30 L65,30 L65,55 L50,70 L35,55 Z" fill="${colors.fg}" stroke="#000" />
          <rect x="45" y="70" width="10" height="10" fill="${colors.fg}" stroke="#000" />
        </svg>
      `;
      break;
    case 'coin':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" ${commonAttributes} />
          <circle cx="50" cy="50" r="25" fill="${colors.fg}" stroke="#000" />
          <text x="50" y="58" font-size="30" text-anchor="middle" fill="#fff">$</text>
        </svg>
      `;
      break;
    case 'crown':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" ${commonAttributes} />
          <path d="M25,60 L35,35 L50,45 L65,35 L75,60 Z" fill="${colors.fg}" stroke="#000" />
          <path d="M30,60 L70,60 L65,70 L35,70 Z" fill="${colors.fg}" stroke="#000" />
        </svg>
      `;
      break;
    case 'medal':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" ${commonAttributes} />
          <circle cx="50" cy="55" r="20" fill="${colors.fg}" stroke="#000" />
          <path d="M40,30 L60,30 L55,55 L45,55 Z" fill="${colors.fg}" stroke="#000" />
        </svg>
      `;
      break;
    case 'card':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" ${commonAttributes} />
          <rect x="25" y="35" width="50" height="30" rx="5" fill="${colors.fg}" stroke="#000" />
          <rect x="30" y="45" width="40" height="5" fill="${colors.accent}" />
        </svg>
      `;
      break;
    case 'star':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" ${commonAttributes} />
          <path d="M50,25 L60,45 L85,45 L65,60 L75,80 L50,65 L25,80 L35,60 L15,45 L40,45 Z" fill="${colors.fg}" stroke="#000" />
        </svg>
      `;
      break;
    default:
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" ${commonAttributes} />
          <circle cx="50" cy="40" r="12" fill="${colors.fg}" stroke="#000" />
          <path d="M30,85 A25,30 0 0,1 70,85 Z" fill="${colors.fg}" stroke="#000" />
        </svg>
      `;
  }
  
  // Convert SVG to data URL
  return `data:image/svg+xml;base64,${btoa(svgContent.trim())}`;
};

const ProfileAvatarSelector: React.FC<ProfileAvatarSelectorProps> = ({
  currentAvatar,
  onChange,
  className
}) => {
  const [open, setOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string>(currentAvatar || '');
  
  // Define available styles and colors for the avatar generator
  const styles: AvatarStyle[] = ['royal', 'gem', 'trophy', 'coin', 'crown', 'medal', 'card', 'star', 'default'];
  const colors: AvatarColor[] = ['gold', 'silver', 'bronze', 'blue', 'green', 'purple', 'red', 'orange', 'pink', 'teal'];
  
  // Generate all possible avatars
  const avatars = styles.flatMap(style => 
    colors.map(color => ({
      id: `${style}-${color}`,
      style,
      color,
      url: createSvgDataUrl(style, color)
    }))
  );
  
  const handleSelectAvatar = (avatarUrl: string) => {
    setSelectedAvatar(avatarUrl);
  };
  
  const handleSave = () => {
    onChange(selectedAvatar);
    setOpen(false);
  };
  
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className={cn("p-0 h-auto w-auto rounded-full border-2 border-primary/20 hover:border-primary/50", className)}
          >
            <Avatar className="h-24 w-24 cursor-pointer hover:opacity-90">
              <AvatarImage src={currentAvatar} />
              <AvatarFallback className="bg-secondary">
                <User className="h-12 w-12 text-muted-foreground" />
              </AvatarFallback>
            </Avatar>
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Choose Your Avatar</DialogTitle>
            <DialogDescription>
              Select a profile avatar or upload your own image.
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[60vh] mt-4 p-4 border rounded-lg">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-2">
              {avatars.map(avatar => (
                <div 
                  key={avatar.id}
                  className={cn(
                    "relative p-1 rounded-lg cursor-pointer transition-all",
                    selectedAvatar === avatar.url ? "bg-primary/20 ring-2 ring-primary" : "hover:bg-secondary/50"
                  )}
                  onClick={() => handleSelectAvatar(avatar.url)}
                >
                  <Avatar className="h-16 w-16 mx-auto">
                    <AvatarImage src={avatar.url} />
                    <AvatarFallback className="bg-secondary">
                      <User className="h-8 w-8 text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-xs text-center mt-1 text-muted-foreground capitalize">
                    {avatar.style} {avatar.color}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileAvatarSelector;

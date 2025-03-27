
import React from 'react';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

interface ProfileHeaderProps {
  title: string;
  subtitle?: string; // Added subtitle prop
  editMode?: boolean;
  showEditButton?: boolean; // Added showEditButton prop
  onEditToggle: () => void;
  onSave: () => void;
}

const ProfileHeader = ({ 
  title, 
  subtitle,
  editMode = false, 
  showEditButton = true, 
  onEditToggle, 
  onSave 
}: ProfileHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gradient">{title}</h1>
        {subtitle && <p className="text-white/70 mt-1">{subtitle}</p>}
      </div>
      
      {editMode ? (
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            className="glass-morphism border-white/10 text-white hover:bg-white/10"
            onClick={onEditToggle}
          >
            Cancel
          </Button>
          <Button 
            className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
            onClick={onSave}
          >
            Save Changes
          </Button>
        </div>
      ) : (
        showEditButton && (
          <Button 
            className="bg-white/10 hover:bg-white/20 text-white"
            onClick={onEditToggle}
          >
            <Edit size={16} className="mr-2" />
            Edit Profile
          </Button>
        )
      )}
    </div>
  );
};

export default ProfileHeader;


import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import RegisterForm from './RegisterForm';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Establish Your Noble House</DialogTitle>
          <DialogDescription>
            Create a royal account to begin your pay-to-win journey
          </DialogDescription>
        </DialogHeader>
        
        <RegisterForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;

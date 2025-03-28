
export type ModalType = 'confirm' | 'alert' | 'form' | 'custom';
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ModalProps {
  title: string;
  description?: string;
  type: ModalType;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
}

export interface ToastProps {
  id: string;
  title: string;
  description?: string;
  type: ToastType;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

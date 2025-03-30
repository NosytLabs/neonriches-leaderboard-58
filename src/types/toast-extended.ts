
import React from 'react';
import { ToastActionElement } from '@/components/ui/toast';

export interface ExtendedToastProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: 'default' | 'destructive' | 'success';
  duration?: number;
}

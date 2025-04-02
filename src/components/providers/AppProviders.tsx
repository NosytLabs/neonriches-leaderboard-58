
import React from 'react';
import { SoundProvider } from '@/hooks/sounds/SoundProvider';
import { ToastProvider } from '@/components/ui/toast-provider';
import { ThemeProvider } from 'next-themes';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <ToastProvider>
        <SoundProvider>
          {children}
        </SoundProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default AppProviders;

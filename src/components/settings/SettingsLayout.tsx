
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SettingsLayoutProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  footerContent?: React.ReactNode;
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({
  title,
  description,
  icon,
  children,
  className,
  headerClassName,
  contentClassName,
  footerContent
}) => {
  return (
    <Card className={cn("glass-morphism border-white/10", className)}>
      <CardHeader className={cn("border-b border-white/10", headerClassName)}>
        <CardTitle className="flex items-center text-xl">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className={cn("p-6 space-y-4", contentClassName)}>
        {children}
      </CardContent>
      {footerContent && (
        <div className="border-t border-white/10 p-4 flex justify-end">
          {footerContent}
        </div>
      )}
    </Card>
  );
};

export default SettingsLayout;

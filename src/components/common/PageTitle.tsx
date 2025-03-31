
import React, { ReactNode } from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  actions?: ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, icon, actions }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div className="flex items-center mb-4 md:mb-0">
        {icon && <div className="mr-3">{icon}</div>}
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
      
      {actions && <div className="flex items-center space-x-2">{actions}</div>}
    </div>
  );
};

export default PageTitle;


import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface AnalysisLayoutProps {
  title: string;
  description?: string;
  metrics?: {
    beforeCleanup: {
      projectSize: number;
      fileCount: number;
      dependencyCount: number;
    };
    afterCleanup: {
      projectSize: number;
      fileCount: number;
      dependencyCount: number;
    };
  };
  children: React.ReactNode;
}

const AnalysisLayout: React.FC<AnalysisLayoutProps> = ({ 
  title, 
  description, 
  metrics, 
  children 
}) => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center mb-2 text-gradient">
            {title}
          </h1>
          {description && (
            <p className="text-white/70 mb-4">{description}</p>
          )}
          
          {metrics && (
            <Card className="glass-morphism border-white/10 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-white/60 text-sm">Project Size</span>
                  <div className="flex items-end space-x-1">
                    <span className="text-2xl font-bold text-gradient">
                      {metrics.beforeCleanup.projectSize} KB
                    </span>
                    {metrics.beforeCleanup.projectSize > 
                     metrics.afterCleanup.projectSize && (
                      <span className="text-green-500 text-sm mb-0.5">
                        (-{metrics.beforeCleanup.projectSize - 
                           metrics.afterCleanup.projectSize} KB)
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <span className="text-white/60 text-sm">File Count</span>
                  <div className="flex items-end space-x-1">
                    <span className="text-2xl font-bold text-gradient">
                      {metrics.beforeCleanup.fileCount}
                    </span>
                    {metrics.beforeCleanup.fileCount > 
                     metrics.afterCleanup.fileCount && (
                      <span className="text-green-500 text-sm mb-0.5">
                        (-{metrics.beforeCleanup.fileCount - 
                           metrics.afterCleanup.fileCount})
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <span className="text-white/60 text-sm">Dependencies</span>
                  <div className="flex items-end space-x-1">
                    <span className="text-2xl font-bold text-gradient">
                      {metrics.beforeCleanup.dependencyCount}
                    </span>
                    {metrics.beforeCleanup.dependencyCount > 
                     metrics.afterCleanup.dependencyCount && (
                      <span className="text-green-500 text-sm mb-0.5">
                        (-{metrics.beforeCleanup.dependencyCount - 
                           metrics.afterCleanup.dependencyCount})
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
        
        <Separator className="border-white/10" />
        
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnalysisLayout;

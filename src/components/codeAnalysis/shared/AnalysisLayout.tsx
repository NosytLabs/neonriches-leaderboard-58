
import React from 'react';
import { ProjectMetrics } from '@/utils/codeAnalysis/types';
import { formatFileSize } from '@/utils/formatters';

interface AnalysisLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  metrics?: ProjectMetrics;
}

const AnalysisLayout: React.FC<AnalysisLayoutProps> = ({ 
  title, 
  description, 
  children, 
  metrics 
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-white/70">{description}</p>
      </div>
      
      {metrics && metrics.beforeCleanup && metrics.afterCleanup && (
        <div className="glass-morphism border-white/10 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <h3 className="text-sm text-white/50 mb-1">Project Size</h3>
              <div className="flex items-baseline">
                <span className="text-lg font-medium">
                  {formatFileSize((metrics.beforeCleanup.projectSize || 0) * 1024)}
                </span>
                {metrics.sizeSavings && metrics.sizeSavings.bytes > 0 && (
                  <span className="ml-2 text-xs text-emerald-500">
                    -{formatFileSize(metrics.sizeSavings.bytes * 1024)}
                  </span>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm text-white/50 mb-1">Files</h3>
              <div className="flex items-baseline">
                <span className="text-lg font-medium">
                  {metrics.beforeCleanup.fileCount}
                </span>
                {metrics.fileSavings && metrics.fileSavings.count > 0 && (
                  <span className="ml-2 text-xs text-emerald-500">
                    -{metrics.fileSavings.count}
                  </span>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm text-white/50 mb-1">Dependencies</h3>
              <div className="flex items-baseline">
                <span className="text-lg font-medium">
                  {metrics.beforeCleanup.dependencyCount}
                </span>
                {metrics.dependencySavings && metrics.dependencySavings.count > 0 && (
                  <span className="ml-2 text-xs text-emerald-500">
                    -{metrics.dependencySavings.count}
                  </span>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm text-white/50 mb-1">Potential Savings</h3>
              <div className="text-lg font-medium text-emerald-500">
                {metrics.sizePercentage ? `${metrics.sizePercentage}%` : '0%'}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm text-white/50 mb-1">After Cleanup</h3>
              <div className="text-lg font-medium">
                {formatFileSize((metrics.afterCleanup.projectSize || 0) * 1024)}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};

export default AnalysisLayout;

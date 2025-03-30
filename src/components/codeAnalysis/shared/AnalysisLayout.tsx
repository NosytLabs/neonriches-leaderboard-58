
import React, { ReactNode } from 'react';
import { ProjectMetrics } from '@/utils/codeAnalysis/types';
import { formatFileSize } from '@/utils/formatters';

interface AnalysisLayoutProps {
  title: string;
  description?: string;
  metrics?: ProjectMetrics;
  children: ReactNode;
}

const AnalysisLayout: React.FC<AnalysisLayoutProps> = ({ 
  title, 
  description, 
  metrics,
  children 
}) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        {description && <p className="text-white/70">{description}</p>}
      </div>
      
      {metrics && (
        <div className="glass-morphism border-white/10 p-5 rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-4">Project Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <div className="text-sm text-white/70">Current Size</div>
              <div className="text-xl font-semibold">
                {formatFileSize((metrics.beforeCleanup?.projectSize || 0) * 1024)}
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-white/70">After Cleanup</div>
              <div className="text-xl font-semibold">
                {formatFileSize((metrics.afterCleanup?.projectSize || 0) * 1024)}
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-white/70">Reduction</div>
              <div className="text-xl font-semibold text-emerald-500">
                {calculateReductionPercentage(
                  metrics.beforeCleanup?.projectSize || 0, 
                  metrics.afterCleanup?.projectSize || 0
                )}%
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
};

// Helper function to calculate percentage reduction
const calculateReductionPercentage = (before: number, after: number): string => {
  if (before === 0) return '0.0';
  const reduction = before - after;
  const percentage = (reduction / before) * 100;
  return percentage.toFixed(1);
};

export default AnalysisLayout;

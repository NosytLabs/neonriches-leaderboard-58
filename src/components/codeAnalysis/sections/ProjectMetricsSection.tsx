
import React from 'react';
import { FileCode, BarChart2, Package } from 'lucide-react';
import { AnalysisResult } from '@/utils/codeAnalysis/types';
import IssueSection from '../shared/IssueSection';

interface ProjectMetricsSectionProps {
  metrics: AnalysisResult['metrics'];
}

const ProjectMetricsSection: React.FC<ProjectMetricsSectionProps> = ({ metrics }) => {
  if (!metrics?.beforeCleanup || Object.keys(metrics.beforeCleanup).length === 0) {
    return null;
  }
  
  return (
    <IssueSection 
      title="Project Metrics" 
      count={3}
      description="Current project statistics and potential improvements."
      className="border-blue-500/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-500/10 p-4 rounded-md">
          <div className="flex items-center">
            <FileCode className="h-5 w-5 mr-2 text-blue-400" />
            <h4 className="font-medium">File Count</h4>
          </div>
          <div className="mt-2 flex items-baseline">
            <span className="text-2xl font-bold">{metrics.beforeCleanup.fileCount}</span>
            {metrics.afterCleanup && (
              <span className="ml-2 text-sm text-green-400">
                {metrics.beforeCleanup.fileCount - metrics.afterCleanup.fileCount > 0 ? 
                  `${metrics.beforeCleanup.fileCount - metrics.afterCleanup.fileCount} removable` : 
                  'Optimized'}
              </span>
            )}
          </div>
        </div>

        <div className="bg-blue-500/10 p-4 rounded-md">
          <div className="flex items-center">
            <BarChart2 className="h-5 w-5 mr-2 text-blue-400" />
            <h4 className="font-medium">Project Size</h4>
          </div>
          <div className="mt-2 flex items-baseline">
            <span className="text-2xl font-bold">{metrics.beforeCleanup.projectSize} KB</span>
            {metrics.afterCleanup && (
              <span className="ml-2 text-sm text-green-400">
                {metrics.beforeCleanup.projectSize - metrics.afterCleanup.projectSize > 0 ? 
                  `${metrics.beforeCleanup.projectSize - metrics.afterCleanup.projectSize} KB savable` : 
                  'Optimized'}
              </span>
            )}
          </div>
        </div>

        <div className="bg-blue-500/10 p-4 rounded-md">
          <div className="flex items-center">
            <Package className="h-5 w-5 mr-2 text-blue-400" />
            <h4 className="font-medium">Dependencies</h4>
          </div>
          <div className="mt-2 flex items-baseline">
            <span className="text-2xl font-bold">{metrics.beforeCleanup.dependencyCount}</span>
            {metrics.afterCleanup && (
              <span className="ml-2 text-sm text-green-400">
                {metrics.beforeCleanup.dependencyCount - metrics.afterCleanup.dependencyCount > 0 ? 
                  `${metrics.beforeCleanup.dependencyCount - metrics.afterCleanup.dependencyCount} removable` : 
                  'Optimized'}
              </span>
            )}
          </div>
        </div>
      </div>
    </IssueSection>
  );
};

export default ProjectMetricsSection;

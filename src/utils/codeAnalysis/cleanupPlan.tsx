
import React from 'react';
import { AnalysisResult } from './types';
import { generateCleanupPlan } from './cleanupUtils';

interface CleanupPlanProps {
  analysisResult: AnalysisResult;
}

const CleanupPlan: React.FC<CleanupPlanProps> = ({ analysisResult }) => {
  const plan = generateCleanupPlan(analysisResult);

  return (
    <div className="space-y-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Cleanup Plan</h2>
      
      {plan.length === 0 ? (
        <div className="p-4 bg-black/20 rounded-lg text-center">
          <p className="text-white/70">No cleanup actions needed</p>
        </div>
      ) : (
        <div className="space-y-6">
          {plan.map((step, index) => (
            <div key={index} className="glass-morphism border-white/10 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-1">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-white/70 mb-4">{step.description}</p>
              
              <ul className="space-y-2">
                {step.steps.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>{item}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CleanupPlan;

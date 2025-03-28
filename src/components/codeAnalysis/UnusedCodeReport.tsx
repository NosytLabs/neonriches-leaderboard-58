
import React from 'react';
import { Code, AlertCircle, FileX, Trash2 } from 'lucide-react';

const UnusedCodeReport: React.FC = () => {
  // Mock data for unused code
  const unusedImports = [
    { file: 'src/components/Header.tsx', name: 'useState', line: 3 },
    { file: 'src/pages/Profile.tsx', name: 'useEffect', line: 5 },
    { file: 'src/components/TeamSection.tsx', name: 'Fragment', line: 2 },
  ];
  
  const unusedVariables = [
    { file: 'src/components/profile/ProfileEditor.tsx', name: 'isAdmin', line: 15 },
    { file: 'src/hooks/useProfileData.ts', name: 'loadError', line: 22 },
  ];
  
  const unusedFunctions = [
    { file: 'src/utils/formatting.ts', name: 'capitalizeAllWords', line: 45 },
    { file: 'src/hooks/useAnalytics.ts', name: 'trackUserClick', line: 78 },
  ];
  
  const unusedComponents = [
    { file: 'src/components/ui/ExtraBadge.tsx', line: 1 },
    { file: 'src/components/marketing/OldPromoSection.tsx', line: 1 },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Code className="h-5 w-5 mr-2 text-emerald-500" />
        Unused Code Detection
      </h3>
      <p className="text-white/70 mb-6">
        The following unused code was detected in your codebase. Removing these elements can improve code maintainability and reduce bundle size.
      </p>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <Trash2 className="h-4 w-4 mr-2 text-red-400" />
            Unused Imports <span className="ml-2 text-xs py-0.5 px-2 bg-red-500/20 text-red-400 rounded-full">{unusedImports.length}</span>
          </h4>
          
          {unusedImports.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="analysis-table">
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Import</th>
                    <th>Line</th>
                  </tr>
                </thead>
                <tbody>
                  {unusedImports.map((item, index) => (
                    <tr key={index}>
                      <td><span className="file-path">{item.file}</span></td>
                      <td><code>{item.name}</code></td>
                      <td>{item.line}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-white/50 text-center py-3">No unused imports detected.</p>
          )}
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <Trash2 className="h-4 w-4 mr-2 text-amber-400" />
            Unused Variables <span className="ml-2 text-xs py-0.5 px-2 bg-amber-500/20 text-amber-400 rounded-full">{unusedVariables.length}</span>
          </h4>
          
          {unusedVariables.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="analysis-table">
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Variable</th>
                    <th>Line</th>
                  </tr>
                </thead>
                <tbody>
                  {unusedVariables.map((item, index) => (
                    <tr key={index}>
                      <td><span className="file-path">{item.file}</span></td>
                      <td><code>{item.name}</code></td>
                      <td>{item.line}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-white/50 text-center py-3">No unused variables detected.</p>
          )}
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <Trash2 className="h-4 w-4 mr-2 text-blue-400" />
            Unused Functions <span className="ml-2 text-xs py-0.5 px-2 bg-blue-500/20 text-blue-400 rounded-full">{unusedFunctions.length}</span>
          </h4>
          
          {unusedFunctions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="analysis-table">
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Function</th>
                    <th>Line</th>
                  </tr>
                </thead>
                <tbody>
                  {unusedFunctions.map((item, index) => (
                    <tr key={index}>
                      <td><span className="file-path">{item.file}</span></td>
                      <td><code>{item.name}()</code></td>
                      <td>{item.line}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-white/50 text-center py-3">No unused functions detected.</p>
          )}
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <FileX className="h-4 w-4 mr-2 text-purple-400" />
            Unused Components <span className="ml-2 text-xs py-0.5 px-2 bg-purple-500/20 text-purple-400 rounded-full">{unusedComponents.length}</span>
          </h4>
          
          {unusedComponents.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="analysis-table">
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Line</th>
                  </tr>
                </thead>
                <tbody>
                  {unusedComponents.map((item, index) => (
                    <tr key={index}>
                      <td><span className="file-path">{item.file}</span></td>
                      <td>{item.line}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-white/50 text-center py-3">No unused components detected.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnusedCodeReport;

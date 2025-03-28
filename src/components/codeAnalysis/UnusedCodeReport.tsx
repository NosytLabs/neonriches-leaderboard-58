
import React from 'react';
import { Code, AlertCircle, FileX, Trash2 } from 'lucide-react';
import AnalysisTable from './shared/AnalysisTable';
import EmptyState from './shared/EmptyState';
import { 
  unusedImportsMock, 
  unusedVariablesMock, 
  unusedFunctionsMock, 
  unusedComponentsMock 
} from '@/utils/codeAnalysis/mockData';

interface UnusedComponent {
  file: string;
  line: number;
}

const UnusedCodeReport: React.FC = () => {
  // Use centralized mock data
  const unusedImports = unusedImportsMock;
  const unusedVariables = unusedVariablesMock;
  const unusedFunctions = unusedFunctionsMock;
  // Cast the mockdata to the correct type
  const unusedComponents = unusedComponentsMock as UnusedComponent[];

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
            <AnalysisTable headers={['File', 'Import', 'Line']}>
              {unusedImports.map((item, index) => (
                <tr key={index}>
                  <td><span className="file-path">{item.file}</span></td>
                  <td><code>{item.name}</code></td>
                  <td>{item.line}</td>
                </tr>
              ))}
            </AnalysisTable>
          ) : (
            <EmptyState 
              icon={AlertCircle} 
              message="No unused imports detected." 
            />
          )}
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <Trash2 className="h-4 w-4 mr-2 text-amber-400" />
            Unused Variables <span className="ml-2 text-xs py-0.5 px-2 bg-amber-500/20 text-amber-400 rounded-full">{unusedVariables.length}</span>
          </h4>
          
          {unusedVariables.length > 0 ? (
            <AnalysisTable headers={['File', 'Variable', 'Line']}>
              {unusedVariables.map((item, index) => (
                <tr key={index}>
                  <td><span className="file-path">{item.file}</span></td>
                  <td><code>{item.name}</code></td>
                  <td>{item.line}</td>
                </tr>
              ))}
            </AnalysisTable>
          ) : (
            <EmptyState 
              icon={AlertCircle} 
              message="No unused variables detected." 
            />
          )}
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <Trash2 className="h-4 w-4 mr-2 text-blue-400" />
            Unused Functions <span className="ml-2 text-xs py-0.5 px-2 bg-blue-500/20 text-blue-400 rounded-full">{unusedFunctions.length}</span>
          </h4>
          
          {unusedFunctions.length > 0 ? (
            <AnalysisTable headers={['File', 'Function', 'Line']}>
              {unusedFunctions.map((item, index) => (
                <tr key={index}>
                  <td><span className="file-path">{item.file}</span></td>
                  <td><code>{item.name}()</code></td>
                  <td>{item.line}</td>
                </tr>
              ))}
            </AnalysisTable>
          ) : (
            <EmptyState 
              icon={AlertCircle} 
              message="No unused functions detected." 
            />
          )}
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <FileX className="h-4 w-4 mr-2 text-purple-400" />
            Unused Components <span className="ml-2 text-xs py-0.5 px-2 bg-purple-500/20 text-purple-400 rounded-full">{unusedComponents.length}</span>
          </h4>
          
          {unusedComponents.length > 0 ? (
            <AnalysisTable headers={['File', 'Line']}>
              {unusedComponents.map((item, index) => (
                <tr key={index}>
                  <td><span className="file-path">{item.file}</span></td>
                  <td>{item.line}</td>
                </tr>
              ))}
            </AnalysisTable>
          ) : (
            <EmptyState 
              icon={AlertCircle} 
              message="No unused components detected." 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UnusedCodeReport;


import React from 'react';
import { Copy, AlertCircle } from 'lucide-react';

const DuplicateCodeReport: React.FC = () => {
  // Mock data for duplicate code
  const duplicateCode = [
    {
      id: 1,
      files: [
        'src/components/profile/ProfileEditor.tsx',
        'src/components/settings/SettingsForm.tsx'
      ],
      similarity: 0.85,
      lines: 15,
      codeSnippet: `const handleSaveProfile = async () => {
  setIsSaving(true);
  try {
    // API call logic here
    setTimeout(() => {
      toast({
        title: "Profile Updated",
        description: "Your royal profile has been successfully updated.",
      });
      setIsSaving(false);
    }, 1000);
  } catch (error) {
    toast({
      title: "Update Failed",
      description: "There was an error updating your profile.",
      variant: "destructive"
    });
    setIsSaving(false);
  }
};`
    },
    {
      id: 2,
      files: [
        'src/components/TeamSection.tsx',
        'src/components/leaderboard/TeamLeaderboard.tsx'
      ],
      similarity: 0.92,
      lines: 8,
      codeSnippet: `// Calculate total spending across all teams
const totalSpending = LUXURY_TEAMS.reduce((sum, team) => sum + team.totalSpent, 0);

// Calculate percentage for each team
const spendingPercentage = (team.totalSpent / totalSpending) * 100;`
    },
    {
      id: 3,
      files: [
        'src/components/ui/decorations/coat-of-arms.tsx',
        'src/components/ui/decorations/crown.tsx',
        'src/components/ui/decorations/royal-seal.tsx'
      ],
      similarity: 0.75,
      lines: 10,
      codeSnippet: `return (
  <div className={cn(
    'relative',
    sizeClasses[size].container,
    className
  )}>
    <MedievalIcon 
      name="..." 
      size={sizeClasses[size].icon} 
      color={toMedievalIconColor(color)} 
      animate={animate} 
    />
  </div>
);`
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Copy className="h-5 w-5 mr-2 text-blue-500" />
        Duplicate Code Analysis
      </h3>
      <p className="text-white/70 mb-6">
        The following duplicate code patterns were detected in your codebase. Consider refactoring these sections into reusable components or utility functions.
      </p>
      
      {duplicateCode.length === 0 ? (
        <div className="text-center py-8">
          <AlertCircle className="h-12 w-12 mx-auto mb-3 text-white/20" />
          <p className="text-white/60">No duplicate code patterns detected.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {duplicateCode.map((item) => (
            <div key={item.id} className="glass-morphism border-white/10 p-4 rounded-lg">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold mb-1">Duplicate Pattern #{item.id}</h4>
                  <div className="flex items-center">
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full mr-2">
                      {item.lines} lines
                    </span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                      {Math.round(item.similarity * 100)}% similar
                    </span>
                  </div>
                </div>
                
                <div className="text-right text-sm text-white/70">
                  <p>Found in {item.files.length} files</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="text-sm font-medium mb-2">Files:</h5>
                <ul className="space-y-1 text-sm text-white/70">
                  {item.files.map((file, index) => (
                    <li key={index} className="file-path">{file}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-sm font-medium mb-2">Code Snippet:</h5>
                <div className="code-block text-xs">
                  <pre>{item.codeSnippet}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DuplicateCodeReport;

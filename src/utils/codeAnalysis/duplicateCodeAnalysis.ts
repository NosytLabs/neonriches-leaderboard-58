import * as fs from 'fs';

// Find duplicate code in the codebase
export const findDuplicateCode = async (
  jsFiles: string[],
  minLineCount: number = 5
): Promise<Array<{ files: string[]; similarity: number; lines: number; impact: string; risk: string }>> => {
  const result: Array<{ files: string[]; similarity: number; lines: number; impact: string; risk: string }> = [];
  
  try {
    const fileContents: Record<string, string[]> = {};
    
    // Read all files and split into lines
    for (const file of jsFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      fileContents[file] = content.split('\n');
    }
    
    const fileNames = Object.keys(fileContents);
    
    // Compare each file with every other file
    for (let i = 0; i < fileNames.length; i++) {
      const fileA = fileNames[i];
      const linesA = fileContents[fileA];
      
      for (let j = i + 1; j < fileNames.length; j++) {
        const fileB = fileNames[j];
        const linesB = fileContents[fileB];
        
        const duplicates = findDuplicateLines(linesA, linesB, minLineCount);
        
        duplicates.forEach(duplicate => {
          const impact = calculateImpact(duplicate.lines);
          const risk = calculateRisk(fileA, fileB);
          
          result.push({
            files: [fileA, fileB],
            similarity: duplicate.similarity,
            lines: duplicate.lines,
            impact,
            risk
          });
        });
      }
    }
  } catch (error) {
    console.error('Error finding duplicate code:', error);
  }
  
  return result;
};

// Helper function to find duplicate line blocks between two files
const findDuplicateLines = (
  linesA: string[],
  linesB: string[],
  minLineCount: number
): Array<{ similarity: number; lines: number }> => {
  const result: Array<{ similarity: number; lines: number }> = [];
  
  for (let i = 0; i <= linesA.length - minLineCount; i++) {
    const blockA = linesA.slice(i, i + minLineCount).join('\n');
    
    for (let j = 0; j <= linesB.length - minLineCount; j++) {
      const blockB = linesB.slice(j, j + minLineCount).join('\n');
      
      if (blockA === blockB) {
        // Expand the matching block if possible
        let expandedLines = minLineCount;
        while (
          i + expandedLines < linesA.length &&
          j + expandedLines < linesB.length &&
          linesA[i + expandedLines] === linesB[j + expandedLines]
        ) {
          expandedLines++;
        }
        
        result.push({
          similarity: 1.0, // Exact match
          lines: expandedLines
        });
        
        // Skip ahead to avoid overlapping matches
        i += expandedLines - 1;
        break;
      } else {
        // Check for similarity instead of exact match
        const similarity = calculateStringSimilarity(blockA, blockB);
        if (similarity > 0.8) { // 80% similarity threshold
          result.push({
            similarity,
            lines: minLineCount
          });
        }
      }
    }
  }
  
  return result;
};

// Calculate string similarity using a simple Levenshtein distance approach
const calculateStringSimilarity = (a: string, b: string): number => {
  if (a === b) return 1;
  if (a.length === 0 || b.length === 0) return 0;
  
  // Simple similarity heuristic
  let matchCount = 0;
  const minLength = Math.min(a.length, b.length);
  
  for (let i = 0; i < minLength; i++) {
    if (a[i] === b[i]) matchCount++;
  }
  
  return matchCount / Math.max(a.length, b.length);
};

// Calculate impact based on duplicate line count
const calculateImpact = (lineCount: number): string => {
  if (lineCount < 10) return 'Low';
  if (lineCount < 20) return 'Medium';
  return 'High';
};

// Calculate risk based on file paths
const calculateRisk = (fileA: string, fileB: string): string => {
  // If files are in the same directory, it's safer to refactor
  const dirA = fileA.substring(0, fileA.lastIndexOf('/'));
  const dirB = fileB.substring(0, fileB.lastIndexOf('/'));
  
  if (dirA === dirB) return 'Low';
  
  // If one file is a test file, the risk is lower
  if (fileA.includes('test') || fileB.includes('test')) return 'Low';
  
  // Default to medium risk
  return 'Medium';
};

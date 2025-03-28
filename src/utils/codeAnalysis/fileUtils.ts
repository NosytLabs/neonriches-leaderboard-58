
import * as fs from 'fs';
import * as path from 'path';

// Function to get all files in a directory recursively
export const getAllFiles = (
  dirPath: string, 
  excludePatterns: string[] = []
): string[] => {
  let files: string[] = [];
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      // Skip excluded paths
      if (excludePatterns.some(pattern => fullPath.includes(pattern))) {
        continue;
      }
      
      if (entry.isDirectory()) {
        files = [...files, ...getAllFiles(fullPath, excludePatterns)];
      } else {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
  }
  
  return files;
};

// Group files by type
export const groupFilesByType = (files: string[]) => {
  return {
    jsFiles: files.filter(file => /\.(js|jsx|ts|tsx)$/.test(file)),
    cssFiles: files.filter(file => /\.(css|scss|less)$/.test(file)),
    htmlFiles: files.filter(file => /\.(html|htm)$/.test(file)),
    jsonFiles: files.filter(file => /\.json$/.test(file)),
    mediaFiles: files.filter(file => /\.(jpg|jpeg|png|gif|svg|mp3|mp4|webm)$/.test(file)),
    otherFiles: files.filter(file => !/\.(js|jsx|ts|tsx|css|scss|less|html|htm|json|jpg|jpeg|png|gif|svg|mp3|mp4|webm)$/.test(file))
  };
};

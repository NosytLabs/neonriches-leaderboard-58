
const { execSync } = require('child_process');
const fs = require('fs');

try {
  // Run TypeScript check without emit or build flags
  console.log('Running TypeScript check...');
  execSync('npx tsc --project src/tsconfig.json --noEmit', { stdio: 'inherit' });
  
  // Run Vite build
  console.log('Building project with Vite...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

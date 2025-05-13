
const { execSync } = require('child_process');
const fs = require('fs');

try {
  // Run TypeScript check without using any build-related flags
  console.log('Running TypeScript check...');
  execSync('npx tsc --project src/tsconfig.json --noEmit --skipLibCheck', { stdio: 'inherit' });
  
  // Run Vite build separately
  console.log('Building project with Vite...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

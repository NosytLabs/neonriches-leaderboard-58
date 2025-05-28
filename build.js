
const { execSync } = require('child_process');
const fs = require('fs');

try {
  // Run Vite build which handles TypeScript compilation
  console.log('Building project with Vite...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

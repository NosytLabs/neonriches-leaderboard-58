
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Log function
function log(message) {
  console.log(`[PostInstall] ${message}`);
}

try {
  log('Running post-install setup...');
  
  // Check for vite
  try {
    log('Checking for Vite...');
    execSync('which vite');
    log('Vite found in path.');
  } catch (e) {
    log('Vite not found in system path. Installing Vite globally...');
    execSync('npm install -g vite', { stdio: 'inherit' });
    log('Vite installed globally.');
  }
  
  // Make sure we have correct types
  log('Installing TypeScript type definitions...');
  const typePackages = [
    '@types/react',
    '@types/react-dom',
    '@types/node'
  ];
  
  execSync(`npm install -D ${typePackages.join(' ')}`, { stdio: 'inherit' });
  
  log('Setup complete!');
} catch (error) {
  console.error('Post-install script failed:', error);
}

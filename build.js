
const { execSync } = require('child_process');
const fs = require('fs');

// Check if the file exists
if (!fs.existsSync('./tsconfig.build.json')) {
  console.error('Error: tsconfig.build.json does not exist');
  process.exit(1);
}

try {
  // Run TypeScript compiler with the build configuration
  console.log('Building TypeScript project...');
  execSync('npx tsc --project tsconfig.build.json', { stdio: 'inherit' });
  console.log('TypeScript build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}


const { execSync } = require('child_process');
const fs = require('fs');

// Check if the file exists
if (!fs.existsSync('./tsconfig.build.json')) {
  console.error('Error: tsconfig.build.json does not exist');
  process.exit(1);
}

try {
  // Run TypeScript compiler with the custom config, avoiding the --build flag
  console.log('Building TypeScript project with custom config...');
  execSync('npx tsc -p tsconfig.build.json', { stdio: 'inherit' });
  console.log('TypeScript build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

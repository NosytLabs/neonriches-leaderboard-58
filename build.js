
const { execSync } = require('child_process');
const fs = require('fs');

// Check if the file exists
if (!fs.existsSync('./tsconfig.build.json')) {
  console.error('Error: tsconfig.build.json does not exist');
  process.exit(1);
}

try {
  // Run TypeScript compiler with the custom config
  // Using -p flag instead of --build to avoid the conflict with noEmit
  // Additionally, explicitly use --noEmit false to override any inherited setting
  console.log('Building TypeScript project with custom config...');
  execSync('npx tsc -p tsconfig.build.json --noEmit false', { stdio: 'inherit' });
  console.log('TypeScript build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}


#!/bin/bash

# This script installs the necessary dependencies for the project
echo "Installing project dependencies..."

# Core dependencies
npm install react react-dom react-router-dom framer-motion lucide-react

# Development dependencies
npm install -D typescript @types/react @types/react-dom @types/node vite @vitejs/plugin-react-swc

# UI dependencies
npm install @radix-ui/react-accordion @radix-ui/react-tabs @radix-ui/react-badge shadcn-ui

echo "Dependencies installed successfully!"
echo "Run 'npx vite' to start the development server."

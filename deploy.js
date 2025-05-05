
// This script helps with the build process for deployment
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get the current file path in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the build directory exists and is clean
console.log('Preparing build directory...');
const distPath = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// First, ensure Vite is installed locally
console.log('Checking for required dependencies...');
try {
  // Try to install vite if it's not already installed
  execSync('npm install --save-dev vite@latest', { stdio: 'inherit' });
  console.log('Dependencies installed/verified successfully.');
} catch (error) {
  console.error('Failed to install dependencies:', error);
  process.exit(1);
}

// Run the Vite build using npx to ensure we use the locally installed version
console.log('Building project with Vite...');
try {
  execSync('npx vite build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Copy the index.html to the dist folder if not already there
const indexHtmlSource = path.resolve(__dirname, 'index.html');
const indexHtmlDest = path.resolve(distPath, 'index.html');

if (!fs.existsSync(indexHtmlDest) && fs.existsSync(indexHtmlSource)) {
  console.log('Copying index.html to dist folder...');
  fs.copyFileSync(indexHtmlSource, indexHtmlDest);
}

console.log('Deployment preparation complete! You can now deploy the dist folder.');

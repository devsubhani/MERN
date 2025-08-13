#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const envExamplePath = path.join(projectRoot, '.env.example');
const envPath = path.join(projectRoot, '.env');

console.log('🔧 Setting up environment variables...\n');

// Check if .env already exists
if (fs.existsSync(envPath)) {
  console.log('⚠️  .env file already exists!');
  console.log('   If you want to overwrite it, delete the existing .env file first.\n');
  process.exit(0);
}

// Check if .env.example exists
if (!fs.existsSync(envExamplePath)) {
  console.log('❌ .env.example file not found!');
  console.log('   Please create a .env.example file first.\n');
  process.exit(1);
}

try {
  // Copy .env.example to .env
  const envExampleContent = fs.readFileSync(envExamplePath, 'utf8');
  fs.writeFileSync(envPath, envExampleContent);
  
  console.log('✅ Environment variables setup complete!');
  console.log('📝 Please edit the .env file with your actual values:');
  console.log(`   ${envPath}\n`);
  
  console.log('🔑 Important variables to configure:');
  console.log('   - MONGO_DB_URI: Your MongoDB connection string');
  console.log('   - JWT_SECRET: A secure random string for JWT tokens');
  console.log('   - PORT: Server port (default: 4000)\n');
  
  console.log('🚀 You can now start the server with: npm run dev');
  
} catch (error) {
  console.error('❌ Error setting up environment variables:', error.message);
  process.exit(1);
}

#!/bin/bash

# This script helps troubleshoot Vercel deployment issues by using the Vercel CLI

# Install Vercel CLI if needed
echo "Installing Vercel CLI..."
npm install -g vercel

# Create a minimal project structure for test deployment
echo "Creating a minimal deployment structure..."
mkdir -p vercel-deploy
cp -r index.html vercel-deploy/
cp -r about.html vercel-deploy/
cp -r contact.html vercel-deploy/
cp -r services.html vercel-deploy/
cp -r services vercel-deploy/
cp -r css vercel-deploy/
cp -r js vercel-deploy/
cp -r images vercel-deploy/
cp service-worker.js vercel-deploy/
cp favicon.ico vercel-deploy/
cp vercel.json vercel-deploy/

# Move to the deployment directory
cd vercel-deploy

# Deploy to Vercel (requires login)
echo "Deploying to Vercel..."
echo "You will need to authenticate with Vercel if not already logged in"
vercel --prod

echo "Deployment completed. Check the Vercel dashboard for details." 
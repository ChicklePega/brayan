#!/bin/bash

# ============================================
# Happy Garten - Deployment Script
# ============================================
# Deploys the Next.js app to VPS with Docker + Traefik

set -e  # Exit on error

# VPS Configuration
VPS_HOST="217.154.5.146"
VPS_USER="daniel"
VPS_PORT="19888"
VPS_PROJECT_PATH="~/Projects/websites/happy-garten"
REPO_URL="https://github.com/ChicklePega/brayan.git"
PROJECT_SUBFOLDER="happy-garten"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=====================================${NC}"
echo -e "${GREEN}🚀 Happy Garten Deployment Started${NC}"
echo -e "${GREEN}=====================================${NC}"

# Step 1: Connect to VPS and prepare directory
echo -e "\n${YELLOW}📁 Step 1: Preparing project directory on VPS...${NC}"
ssh -p $VPS_PORT $VPS_USER@$VPS_HOST << 'ENDSSH'
    cd ~/Projects/websites
    
    # Clone or update repository
    if [ -d "happy-garten-repo" ]; then
        echo "Repository exists, pulling latest changes..."
        cd happy-garten-repo
        git pull origin main
    else
        echo "Cloning repository..."
        git clone https://github.com/ChicklePega/brayan.git happy-garten-repo
        cd happy-garten-repo
    fi
    
    # Copy happy-garten subfolder to deployment directory
    echo "Copying project files..."
    rm -rf ~/Projects/websites/happy-garten
    cp -r happy-garten ~/Projects/websites/happy-garten
    
    echo "✅ Project files updated successfully"
ENDSSH

# Step 2: Build and deploy with Docker Compose
echo -e "\n${YELLOW}🐳 Step 2: Building Docker image...${NC}"
ssh -p $VPS_PORT $VPS_USER@$VPS_HOST << 'ENDSSH'
    cd ~/Projects/websites/happy-garten
    
    # Stop existing container if running
    if [ "$(docker ps -q -f name=happy-garten)" ]; then
        echo "Stopping existing container..."
        docker compose down
    fi
    
    # Build new image
    echo "Building Docker image..."
    docker compose build --no-cache
    
    echo "✅ Docker image built successfully"
ENDSSH

# Step 3: Start the container
echo -e "\n${YELLOW}▶️  Step 3: Starting container...${NC}"
ssh -p $VPS_PORT $VPS_USER@$VPS_HOST << 'ENDSSH'
    cd ~/Projects/websites/happy-garten
    
    # Start container in detached mode
    docker compose up -d
    
    # Wait a moment for container to start
    sleep 3
    
    # Check if container is running
    if [ "$(docker ps -q -f name=happy-garten)" ]; then
        echo "✅ Container started successfully"
        echo ""
        echo "📊 Container status:"
        docker ps -f name=happy-garten --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    else
        echo "❌ Container failed to start. Checking logs..."
        docker logs happy-garten
        exit 1
    fi
ENDSSH

# Step 4: Cleanup old images
echo -e "\n${YELLOW}🧹 Step 4: Cleaning up old Docker images...${NC}"
ssh -p $VPS_PORT $VPS_USER@$VPS_HOST << 'ENDSSH'
    docker image prune -f
    echo "✅ Cleanup completed"
ENDSSH

# Final success message
echo -e "\n${GREEN}=====================================${NC}"
echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}=====================================${NC}"
echo -e "\n🌐 Your app should be available at:"
echo -e "${GREEN}https://happy-garten.rshamburg.de${NC}"
echo -e "\n📋 To check logs, run:"
echo -e "${YELLOW}ssh -p $VPS_PORT $VPS_USER@$VPS_HOST 'docker logs -f happy-garten'${NC}"
echo ""

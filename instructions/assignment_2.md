# Assignment 2: GitHub Actions CI/CD Pipeline with Docker & GitHub Pages

## Overview
In this assignment, you will build a complete CI/CD pipeline for a React application using Docker for local development and GitHub Actions for automated deployment to GitHub Pages. This project combines containerization skills with modern DevOps practices to create an efficient development and deployment workflow.

## Learning Objectives
- Create a Dockerized development environment with hot reload capability
- Configure GitHub Actions for automated CI/CD processes
- Deploy a React application to GitHub Pages
- Implement status badges and repository documentation
- Apply best practices for GitHub Actions workflow configuration

## Options for Starting Point
You may choose one of the following options:
1. Create a new React application using Vite
2. Use an existing React application you've developed previously

## Requirements and Grading (Total: 29 points)

### 1. Docker Development Environment (8 points)
- Create a development-focused Dockerfile (Dockerfile.dev) that:
  - Properly configures hot reload capability (3 points)
  - Uses appropriate base image and optimizations (2 points)
- Create a docker-compose.yml file that:
  - Correctly maps ports and volumes for development (2 points)
  - Includes appropriate environment configuration (1 point)

### 2. GitHub Repository Setup (5 points)
- Create a properly configured public GitHub repository (1 point)
- Configure GitHub Pages settings correctly in repository settings (2 points)
- Implement proper base path and homepage settings in application code (2 points)
  - Configure Vite for subfolder deployment
  - Set homepage in package.json

### 3. GitHub Actions Implementation (8 points)
- Create a GitHub Actions workflow file (.github/workflows/deploy.yml) that:
  - Configures correct trigger events (push to main, manual trigger) (2 points)
  - Implements a proper build process for your application (2 points)
  - Configures deployment to GitHub Pages with correct permissions (2 points)
  - Includes appropriate caching and optimization strategies (2 points)

### 4. Deployment Success (4 points)
- Successfully deploy your application to GitHub Pages (2 points)
- Ensure the deployed application functions correctly:
  - No 404 errors or broken resources (1 point)
  - All application features work properly (1 point)

### 5. Documentation and Polish (4 points)
- Add a GitHub Actions workflow status badge to README.md (1 point)
- Provide clear setup and usage instructions in README.md (2 points)
- Document configuration choices and implementation details (1 point)

## Instructions

### Step 1: Project Setup
1. Choose your starting point (new or existing React application)
2. If creating a new application:
   ```bash
   npm create vite@latest my-app -- --template react
   cd my-app
   npm install
   ```
3. Initialize a Git repository if needed:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

### Step 2: Create Docker Development Environment
1. Create a `Dockerfile.dev` in your project root:
   - Use an appropriate Node.js base image
   - Configure for hot reloading during development
   - Expose the necessary port (typically 5173 for Vite)

2. Create a `docker-compose.yml` file:
   - Define a service for your application
   - Map the container port to a host port
   - Configure volume mapping for hot reloading
   - Set any necessary environment variables

3. Test your Docker development environment:
   ```bash
   docker-compose up
   ```

### Step 3: Configure for GitHub Pages
1. Modify your Vite configuration to support GitHub Pages:
   - Create or edit `vite.config.js` to include a base path:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

2. Update `package.json` to include the homepage field:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

### Step 4: Set Up GitHub Repository
1. Create a new public repository on GitHub
2. Push your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

3. Configure GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Set source to "GitHub Actions" (this will be used later)

### Step 5: Create GitHub Actions Workflow
1. Create a `.github/workflows` directory in your project
2. Create a `deploy.yml` file with the following components:
   - Workflow name and trigger events
   - Appropriate permissions for GitHub Pages deployment
   - Job for building the application
   - Job for deploying to GitHub Pages
   - Proper caching for dependencies

3. The workflow should include:
   - Checkout of repository code
   - Setup of Node.js environment
   - Installation of dependencies
   - Building the application
   - Deployment to GitHub Pages

### Step 6: Add Status Badge and Documentation
1. Add a status badge to your README.md:
   ```markdown
   [![Deploy to GitHub Pages](https://github.com/yourusername/your-repo-name/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/your-repo-name/actions/workflows/deploy.yml)
   ```

2. Update your README.md with:
   - Project description
   - Setup and development instructions
   - Deployment information
   - Technology stack details

### Step 7: Test and Deploy
1. Push your changes to GitHub and monitor the Actions workflow
2. Verify that your site is deployed correctly to GitHub Pages
3. Test the deployed application to ensure all features work properly

## Submission Requirements
1. Submit the following:
   - URL to your GitHub repository (must be public)
   - URL to your deployed GitHub Pages site
   - Brief summary of your approach (1-2 paragraphs)

2. Ensure your repository includes:
   - Complete source code
   - Dockerfile.dev and docker-compose.yml
   - GitHub Actions workflow file
   - Comprehensive README.md

## Evaluation Criteria
Your assignment will be evaluated based on the criteria outlined in the requirements section, totaling 29 points.

## Deadline
Submit your completed assignment by [INSERT DATE].

## Resources
- GitHub Actions Documentation: https://docs.github.com/en/actions
- GitHub Pages Documentation: https://docs.github.com/en/pages
- Vite Documentation: https://vitejs.dev/guide/
- Docker Documentation: https://docs.docker.com/ 
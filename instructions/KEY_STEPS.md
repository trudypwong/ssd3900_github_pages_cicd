# Key Steps to Complete Assignment 2

## 1. Project Setup
- Choose whether to create a new React app or use an existing one
- If creating new: `npm create vite@latest my-app -- --template react`
- Initialize Git repository

## 2. Docker Development Environment
- Create `Dockerfile.dev` for development with hot reload
- Create `docker-compose.yml` for local development
- Test the Docker environment: `docker-compose up`

## 3. GitHub Pages Configuration
- Configure Vite with correct base path in `vite.config.js`
- Update `package.json` with homepage field
- Install GitHub Pages package: `npm install --save-dev gh-pages`
- Add deploy scripts to `package.json`

## 4. GitHub Repository Setup
- Create public repository on GitHub
- Push local code to GitHub repository
- Configure repository settings for GitHub Pages (Settings > Pages)

## 5. GitHub Actions Workflow
- Create `.github/workflows/deploy.yml` file
- Configure build and deployment jobs
- Set correct permissions for GitHub Pages deployment
- Add caching for faster builds

## 6. Documentation
- Add status badge to README.md
- Document setup and usage instructions
- Explain configuration choices

## 7. Testing and Submission
- Push changes to GitHub and validate CI/CD pipeline
- Verify deployment to GitHub Pages
- Test the live application for functionality
- Submit repository URL and GitHub Pages URL

## Common Mistakes to Avoid
1. Forgetting to update the base path in `vite.config.js`
2. Not setting the correct permissions in GitHub Actions workflow
3. Missing volume mounts in Docker configuration (prevents hot reload)
4. Using incorrect GitHub Pages URL format

## Resources
- [Vite GitHub Pages Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions for GitHub Pages](https://github.com/marketplace/actions/deploy-to-github-pages)
- [Docker Development Best Practices](https://docs.docker.com/develop/dev-best-practices/) 
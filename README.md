# SSD3900 Github Pages + CI/CD Pipeline

[![Deploy to GitHub Pages](https://github.com/trudypwong/ssd3900_github_pages_cicd/actions/workflows/deploy.yml/badge.svg)](https://github.com/trudypwong/ssd3900_github_pages_cicd/actions/workflows/deploy.yml)

## Project Description

A basic webpage for publishing to GitHub Pages and experimenting with GitHub Actions and the CI/CD Pipeline. It was created using React and has an input to change and view colours.

## Live Demo

[View the live demo](https://trudypwong.github.io/ssd3900_github_pages_cicd)

## Technology Stack

- React
- Vite
- Docker
- GitHub Actions
- GitHub Pages

## Local Development

### Prerequisites

- Docker and Docker Compose
- Git

### Setup and Run

1. Clone the repository

```bash
git clone https://github.com/trudypwong/ssd3900_github_pages_cicd.git
cd ssd3900_github_pages_cicd
```

2. Start the Docker development environment

```bash
docker-compose up
```

3. Access the development server at [http://localhost:5173](http://localhost:5173)

## Environment Variables

The application uses the following environment variables:

- `NODE_ENV` - Set to "development" for local development

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

If you want to deploy manually:

1. Build the application

```bash
npm run build
```

2. Deploy to GitHub Pages

```bash
npm run deploy
```

## GitHub Actions Workflow

The CI/CD pipeline includes the following steps:

1. Checkout code
2. Setup Node.js environment
3. Install dependencies
4. Build the application
5. Deploy to GitHub Pages

## Configuration Details

### GitHub Pages Configuration

- Base path: `/ssd3900_github_pages_cicd/` (configured in vite.config.js)
- Homepage URL: `https://trudypwong.github.io/ssd3900_github_pages_cicd`

### Docker Development Configuration

- Development server with hot reload
- Volume mounting for real-time code changes
- Port mapping from container to host

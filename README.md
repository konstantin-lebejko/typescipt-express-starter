# TypeScript + Express Starter

Minimalistic boilerplate for TypeScript + Express.  
To be used for rapid prototyping during hackatons and small projects.

## Features:

- Basic Express.js setup using TypeScript
- Includes tweaks and security improvements: compression, cookie-parser, cors, helmet, hpp
- Includes API documentation using Swagger
- Supports different sets of environment variables
- Full Docker support including Docker Compose and health check
- Makefile for easy development and deployment

## How to run:

- Make sure you are using Node 16.17
- Run `npm install`
- Copy `.env.development.sample` and `.env.production.sample` from `env` directory to root of the project and
- Rename `.env.development.sample` and `.env.production.sample` to `.env.development` and `.env.production` respectively
- Run `make dev` to start development server

## NPM scripts:

- `build` - build project (creates `dist` directory)
- `start` - start production server (from `dist` directory)
- `dev` - start development server with hot reloading on file change (from `src` directory)
- `eslint` - run ESLint and show errors
- `eslint:fix` - run ESLint and fix errors

## Make commands:

- `clean-cached-files` - remove cached files (node_modules, dist)
- `build-production` - build Docker image for production use (using production environment variables)
- `build-development` - build Docker image for development use (using development environment variables)
- `production-stack-up` - start Docker stack for production use (using production environment variables)
- `production-stack-down` - stop and remove Docker production stack

## Swagger documentation:

Swagger documentation is composed from route description information, collected from routes defined in `src/routes`.  
Swagger User Interface is available on `/docs` route.

## Deployment details:

- Development port is 3000 (set in `.env.development`, Dockerfile)
- Production port is 3010 (set in `.env.production`, Dockerfile)
- Project (application name) is set in `.env.development`, `.env.production`, `project.json` and Makefile
- Container Health check is set in `Dockerfile` and `docker-compose.yml`
- Use `make production-stack-up` to build image and start the stack for production use
- Use `make production-stack-down` to stop stack/networks and remove stack/networks (image remains untouched)

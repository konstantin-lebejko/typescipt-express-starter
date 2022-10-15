# TypeScript + Express Starter

Minimalistic starter for TypeScript + Express used in several pet projects.

## Features:

- Includes TypeScript, Express, nodemon, concurrently, ESLint, Prettier
- Express tweaks and security improvements like: compression, cookie-parser, cors, helmet, hpp

## How to run:

- Make sure you use Node 16.17
- Run `npm install`
- Copy `.env.development.sample` and `.env.production.sample` from `env` directory to root of the project and rename them to `.env.development` and `.env.production` respectively
- Run `make dev` to start development server

## NPM scripts:

- `build` - build project (creates `dist` directory)
- `start` - start production server (from `dist` directory)
- `dev` - start development server with hot reloading on file change (from `src` directory)
- `eslint` - run ESLint and show errors
- `eslint:fix` - run ESLint and fix errors

## Docker details

- Development port is 3000 (set in .env.development, Dockerfile)
- Production port is 3010 (set in .env.production, Dockerfile)

# Common build stage
FROM node:16.17-buster-slim as common-build-stage
COPY . ./app
WORKDIR /app
RUN npm install

# Development build stage
FROM common-build-stage as development-build-stage
ENV NODE_ENV development
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage
RUN npm run build
ENV NODE_ENV production
EXPOSE 3010
CMD ["npm", "run", "start"]
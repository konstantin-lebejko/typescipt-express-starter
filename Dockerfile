# Common build stage
FROM node:16.17-buster-slim as common-build-stage
COPY . ./app
WORKDIR /app
RUN npm install
RUN apt update && apt install -y curl

# Development build stage
FROM common-build-stage as development-build-stage
ENV NODE_ENV development
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \ 
    CMD curl -f http://localhost:3000 || exit 1
CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage
RUN npm run build
ENV NODE_ENV production
EXPOSE 3010
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \ 
    CMD curl -f http://localhost:3010 || exit 1
CMD ["npm", "run", "start"]
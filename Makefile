# To be changed for a fresh project
APP_NAME = typescript-express-starter

# Cache clean up
clean-cached-files:
	rm -rf node_modules
	rm -rf dist

# Docker
# Build the container image for production
build-production:
	docker build -t ${APP_NAME}\
		--target production-build-stage\
		-f Dockerfile .

# Build the container image for development
build-development:
	docker build -t ${APP_NAME}\
		--target development-build-stage\
		-f Dockerfile .

# Start container image for production
production-stack-up:
	make build-production
	docker-compose -f docker-compose.yml --env-file .env.production up -d

# Stop container image for production
production-stack-down:
	docker-compose -f docker-compose.yml --env-file .env.production down --remove-orphans
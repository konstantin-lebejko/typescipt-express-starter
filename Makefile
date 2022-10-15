# To be changed for a fresh project
APP_NAME = typescript-express-starter

# NPM aliases
dev:
	rm -rf dist
	npm run dev

build:
	npm run build

start:
	npm run start

eslint:
	npm run eslint

eslint-fix:
	npm run eslint-fix

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
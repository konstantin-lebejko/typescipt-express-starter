# NPM aliases
dev:
	npm run dev

build:
	npm run build

start:
	npm run start

eslint:
	npm run eslint

eslint-fix:
	npm run eslint-fix

# Docker
# Build the container image - Production
build-production:
	docker build -t test\
		--target production-build-stage\
		-f Dockerfile .

# Build the container image - Development
build-development:
	docker build -t test\
		--target development-build-stage\
		-f Dockerfile .
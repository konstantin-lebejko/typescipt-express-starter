import swaggerJSDoc from 'swagger-jsdoc';
import env from './env';

const { APP_NAME, APP_VERSION, APP_DESCRIPTION } = env;

// Swagger JSDoc
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: APP_NAME,
      version: APP_VERSION,
      description: APP_DESCRIPTION,
    },
  },
  apis: ['src/routes/*.route.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default {
  swaggerSpec,
};

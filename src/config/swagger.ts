import swaggerJSDoc from 'swagger-jsdoc';
import { version } from '../../package.json';
import env from './env';

const { APP_NAME } = env;

// Swagger JSDoc
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: APP_NAME,
      version,
    },
  },
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

console.log(swaggerOptions);

export default {
  swaggerSpec,
};

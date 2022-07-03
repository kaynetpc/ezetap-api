import {getEnv} from '.';

export const AppConfigs = {
  SERVER_PORT: getEnv('SERVER_PORT'),
  ORIGIN: getEnv('CORS_ALLOWED_ORIGINS'),
  APP_ROUTE: getEnv('APP_ROUTE'),
  DATABASE_URL: getEnv('DATABASE_URL'),
  DATABASE_URL_PROD: getEnv('DATABASE_URL_PROD'),
  NODE_ENV: getEnv('NODE_ENV'),
  IS_DEV: getEnv('NODE_ENV') === 'development',
  ORG_NAME: getEnv('ORG_NAME', 'oneHealth'),
};

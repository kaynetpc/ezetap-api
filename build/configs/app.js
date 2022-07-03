"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigs = void 0;
var _1 = require(".");
exports.AppConfigs = {
    SERVER_PORT: (0, _1.getEnv)('SERVER_PORT'),
    ORIGIN: (0, _1.getEnv)('CORS_ALLOWED_ORIGINS'),
    APP_ROUTE: (0, _1.getEnv)('APP_ROUTE'),
    DATABASE_URL: (0, _1.getEnv)('DATABASE_URL'),
    DATABASE_URL_PROD: (0, _1.getEnv)('DATABASE_URL_PROD'),
    NODE_ENV: (0, _1.getEnv)('NODE_ENV'),
    IS_DEV: (0, _1.getEnv)('NODE_ENV') === 'development',
};

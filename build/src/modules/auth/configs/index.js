"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthConfigs = void 0;
var configs_1 = require("../../../configs");
exports.AuthConfigs = {
    token: (0, configs_1.getEnv)('TOKEN_AUTH_USER'),
};

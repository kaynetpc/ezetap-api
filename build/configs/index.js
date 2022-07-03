"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var getEnv = function (name, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ''; }
    return process.env[name] || defaultValue;
};
exports.getEnv = getEnv;

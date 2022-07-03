"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ResponseService_1 = require("../../response/ResponseService");
var routes_1 = require("../routes/routes");
var AuthController = express_1.default.Router();
AuthController.post(routes_1.AuthRoutes.LOGIN, function (req, res) {
    ResponseService_1.ResponseService.send(res, req.body, 201);
});
exports.default = AuthController;

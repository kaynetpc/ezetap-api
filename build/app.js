"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app_1 = require("./configs/app");
var AuthController_1 = __importDefault(require("./modules/auth/controllers/AuthController"));
var routes_1 = require("./routes/routes");
var App = (0, express_1.default)();
/* init */
App.use(express_1.default.json());
App.use(express_1.default.text());
App.use(express_1.default.raw());
App.use(express_1.default.urlencoded({ extended: false }));
App.use((0, cors_1.default)({ origin: app_1.AppConfigs.ORIGIN }));
/* register controllers */
var AppController = express_1.default.Router();
AppController.use(routes_1.AppRoutes.AUTH, AuthController_1.default);
App.use(app_1.AppConfigs.APP_ROUTE, AppController);
exports.default = App;

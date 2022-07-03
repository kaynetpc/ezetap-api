"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = void 0;
var app_1 = require("../configs/app");
exports.LogService = {
    log: function (error) {
        console.error(error);
    },
    info: function (info) {
        app_1.AppConfigs.IS_DEV && console.log(info);
    },
};

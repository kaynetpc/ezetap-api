"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseService = void 0;
var responseFormat = function (error, data, message) { return ({
    error: error,
    data: data,
    message: message,
    status: error ? 'failed' : 'success',
}); };
exports.ResponseService = {
    send400: function (response, error) {
        response.status(400).json(responseFormat(true, null, error.message));
    },
    send401: function (response, error) {
        response.status(401).json(responseFormat(true, null, error.message));
    },
    send404: function (response, error) {
        response.status(404).json(responseFormat(true, null, error.message));
    },
    send500: function (response, error) {
        response.status(500).json(responseFormat(true, null, error.message));
    },
    json: function (response, data, status) {
        response.status(status).json(responseFormat(false, data, ''));
    },
    send: function (response, data, status) {
        response.status(status).json(responseFormat(false, data, ''));
    },
    raw: function (response, data, status) {
        response.status(status).send(data);
    },
};

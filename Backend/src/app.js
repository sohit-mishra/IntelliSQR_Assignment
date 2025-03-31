"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = require("body-parser");
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var error_middleware_1 = require("./middlewares/error.middleware");
var env_1 = require("./config/env");
var app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)({ origin: env_1.ENV.CORS_ORIGIN || '*' }));
app.use('/api/users', user_routes_1.default);
app.use(error_middleware_1.errorHandler);
exports.default = app;

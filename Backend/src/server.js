"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var env_1 = require("./config/env");
var PORT = env_1.ENV.PORT || 3000;
app_1.default.listen(PORT, function () {
    console.log("\uD83D\uDE80 Server is running on port ".concat(PORT));
});

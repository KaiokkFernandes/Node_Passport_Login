"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const serve_1 = require("./serve");
const globals_1 = require("@jest/globals");
(0, globals_1.beforeAll)(() => {
    const server = new serve_1.SetupServer();
    server.init();
    global.testRequest = (0, supertest_1.default)(server.getApp());
});
//# sourceMappingURL=jest-setup.js.map
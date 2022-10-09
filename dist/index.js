"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllUsersController_1 = __importDefault(require("./controllers/getAllUsersController"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
require('dotenv').config();
const app = (0, express_1.default)();
const server = new http_1.default.Server(app);
const port = process.env.PORT || 4000;
server.listen(port);
app.get('', () => {
    console.log("sesfikile");
});
app.get('/user/all', getAllUsersController_1.default);

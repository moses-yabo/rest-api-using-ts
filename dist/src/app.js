"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("config"));
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./logger"));
const connect_1 = __importDefault(require("./db/connect"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const server = new http_1.default.Server(app);
const port = config_1.default.get("port");
const host = config_1.default.get("host");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(port, host, () => {
    logger_1.default.info(`Server listing at http://${host}:${port}`);
    (0, connect_1.default)();
    (0, routes_1.default)(app);
});

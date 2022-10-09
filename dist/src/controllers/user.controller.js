"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserHandler = void 0;
const lodash_1 = require("lodash");
const logger_1 = __importDefault(require("../logger"));
const user_services_1 = require("../service/user.services");
async function createUserHandler(req, res) {
    try {
        const user = await (0, user_services_1.createUser)(req.body);
        return res.send((0, lodash_1.omit)(user.toJSON(), "password"));
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(409).send(error.message);
    }
}
exports.createUserHandler = createUserHandler;
